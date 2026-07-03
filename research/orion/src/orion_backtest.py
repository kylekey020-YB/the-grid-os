"""ORION v0.1 15-minute Opening Range Breakout backtester.

Research only. This script never connects to a broker, never sends orders, and
never risks money. It reads local CSV files and writes local research outputs.

No-lookahead rule used in v0.1:
- Opening range is known only after 09:44:59 Eastern.
- Breakout signals are evaluated on completed bars after the range is closed.
- Entries occur on the next bar open, not on the same bar that created the signal.
- Filters use indicator values from the completed signal bar only.
"""

from __future__ import annotations

import argparse
import csv
import json
from collections import defaultdict
from datetime import datetime, time, timedelta
from pathlib import Path
from typing import Dict, List, Optional, Tuple

from indicators import add_indicators
from regime import add_atr_percentiles, atr_regime, markov_placeholder_note
from reporting import write_reports


def parse_time(value: str) -> time:
    hour, minute = value.split(":")[:2]
    return time(int(hour), int(minute))


def parse_timestamp(value: str) -> datetime:
    value = value.strip()
    for fmt in ("%Y-%m-%d %H:%M:%S", "%Y-%m-%d %H:%M", "%Y-%m-%dT%H:%M:%S", "%Y-%m-%dT%H:%M"):
        try:
            return datetime.strptime(value, fmt)
        except ValueError:
            pass
    return datetime.fromisoformat(value.replace("Z", "+00:00")).replace(tzinfo=None)


def load_config(path: str) -> dict:
    return json.loads(Path(path).read_text(encoding="utf-8"))


def load_csv(path: str, symbol: str) -> List[dict]:
    file_path = Path(path)
    if not file_path.exists():
        print(f"[ORION] Missing CSV for {symbol}: {path}. Skipping symbol.")
        return []
    rows: List[dict] = []
    with file_path.open("r", newline="", encoding="utf-8-sig") as handle:
        reader = csv.DictReader(handle)
        required = {"timestamp", "open", "high", "low", "close", "volume"}
        missing = required.difference(reader.fieldnames or [])
        if missing:
            raise ValueError(f"{path} missing required columns: {sorted(missing)}")
        for raw in reader:
            rows.append({"symbol": symbol, "timestamp": parse_timestamp(raw["timestamp"]), "open": float(raw["open"]), "high": float(raw["high"]), "low": float(raw["low"]), "close": float(raw["close"]), "volume": float(raw["volume"])})
    rows.sort(key=lambda row: row["timestamp"])
    return rows


def group_by_session(rows: List[dict]) -> Dict[datetime.date, List[dict]]:
    grouped: Dict[datetime.date, List[dict]] = defaultdict(list)
    for row in rows:
        grouped[row["timestamp"].date()].append(row)
    return dict(sorted(grouped.items()))


def in_regular_hours(row: dict, market_open: time, market_close: time) -> bool:
    stamp_time = row["timestamp"].time()
    return market_open <= stamp_time <= market_close


def prepare_rows(rows: List[dict], config: dict) -> List[dict]:
    session = config["session"]
    indicators = config["indicators"]
    market_open = parse_time(session["market_open"])
    market_close = parse_time(session["market_close"])
    rows = [row for row in rows if in_regular_hours(row, market_open, market_close)]
    add_indicators(rows, indicators["atr_period"], indicators["ema_periods"])
    add_atr_percentiles(rows)
    return rows


def opening_range_for_day(day_rows: List[dict], market_open: time, minutes: int) -> Optional[Tuple[float, float, datetime]]:
    if not day_rows:
        return None
    day = day_rows[0]["timestamp"].date()
    start = datetime.combine(day, market_open)
    end = start + timedelta(minutes=minutes)
    range_rows = [row for row in day_rows if start <= row["timestamp"] < end]
    if not range_rows:
        return None
    return max(row["high"] for row in range_rows), min(row["low"] for row in range_rows), end


def filters_pass(signal_row: dict, direction: str, config: dict) -> Tuple[bool, Dict[str, str]]:
    filters = config["filters"]
    notes: Dict[str, str] = {}
    if filters.get("use_vwap_filter"):
        if direction == "long" and signal_row["close"] <= signal_row["vwap"]:
            return False, {"failed_filter": "vwap_long"}
        if direction == "short" and signal_row["close"] >= signal_row["vwap"]:
            return False, {"failed_filter": "vwap_short"}
    notes["vwap_state"] = "above" if signal_row["close"] > signal_row["vwap"] else "below"
    if filters.get("use_ema_ribbon_filter"):
        ribbon = signal_row.get("ema_ribbon", "unknown")
        if direction == "long" and ribbon != "bullish":
            return False, {"failed_filter": "ema_ribbon_long"}
        if direction == "short" and ribbon != "bearish":
            return False, {"failed_filter": "ema_ribbon_short"}
    notes["ema_ribbon"] = signal_row.get("ema_ribbon", "unknown")
    current_atr_regime = atr_regime(signal_row, filters.get("atr_min_percentile", 25), filters.get("atr_max_percentile", 75))
    if filters.get("use_atr_volatility_filter") and current_atr_regime != "normal_atr":
        return False, {"failed_filter": current_atr_regime}
    notes["atr_regime"] = current_atr_regime
    return True, notes


def bucket_gap(day_rows: List[dict], previous_close: Optional[float]) -> str:
    if not day_rows or previous_close in (None, 0):
        return "unknown"
    gap_pct = (day_rows[0]["open"] - previous_close) / previous_close * 100.0
    if gap_pct > 0.75:
        return "gap_up_large"
    if gap_pct > 0.25:
        return "gap_up_small"
    if gap_pct < -0.75:
        return "gap_down_large"
    if gap_pct < -0.25:
        return "gap_down_small"
    return "flat"


def calculate_cost(price: float, quantity: float, slippage_bps: float, commission: float) -> float:
    return abs(price * quantity) * (slippage_bps / 10000.0) + commission


def simulate_exit(day_rows: List[dict], entry_index: int, trade: dict, config: dict) -> dict:
    exits = config["exits"]
    execution = config["execution"]
    session = config["session"]
    direction = trade["direction"]
    entry = trade["entry_price"]
    stop = trade["stop_price"]
    target = trade["target_price"]
    time_stop = parse_time(exits["time_stop"])
    eod_flat = parse_time(session["end_of_day_flat_time"])
    quantity = trade["quantity"]
    slippage_bps = execution["slippage_bps_per_side"]
    commission = execution["commission_per_trade"]
    best_price = entry
    for row in day_rows[entry_index:]:
        row_time = row["timestamp"].time()
        exit_price = None
        exit_reason = None
        if exits.get("use_trailing_stop"):
            atr = row.get("atr") or 0.0
            if direction == "long":
                best_price = max(best_price, row["high"])
                stop = max(stop, best_price - atr * exits.get("trailing_atr_multiple", 1.0))
            else:
                best_price = min(best_price, row["low"])
                stop = min(stop, best_price + atr * exits.get("trailing_atr_multiple", 1.0))
        # Conservative intrabar ordering: if stop and target are both touched in
        # the same completed bar, assume the stop happened first.
        if direction == "long":
            if row["low"] <= stop:
                exit_price = stop
                exit_reason = "stop"
            elif exits.get("use_take_profit") and row["high"] >= target:
                exit_price = target
                exit_reason = "target"
        else:
            if row["high"] >= stop:
                exit_price = stop
                exit_reason = "stop"
            elif exits.get("use_take_profit") and row["low"] <= target:
                exit_price = target
                exit_reason = "target"
        if exit_price is None and exits.get("use_time_stop") and row_time >= time_stop:
            exit_price = row["close"]
            exit_reason = "time_stop"
        if exit_price is None and row_time >= eod_flat:
            exit_price = row["close"]
            exit_reason = "end_of_day"
        if exit_price is not None:
            gross = (exit_price - entry) * quantity if direction == "long" else (entry - exit_price) * quantity
            costs = calculate_cost(entry, quantity, slippage_bps, commission) + calculate_cost(exit_price, quantity, slippage_bps, commission)
            risk_per_share = abs(entry - trade["initial_stop_price"])
            trade.update({"exit_time": row["timestamp"].isoformat(sep=" "), "exit_price": round(exit_price, 4), "exit_reason": exit_reason, "gross_pnl": round(gross, 4), "net_pnl": round(gross - costs, 4), "r_multiple": round((gross - costs) / (risk_per_share * quantity), 4) if risk_per_share and quantity else 0.0})
            return trade
    last = day_rows[-1]
    exit_price = last["close"]
    gross = (exit_price - entry) * quantity if direction == "long" else (entry - exit_price) * quantity
    costs = calculate_cost(entry, quantity, slippage_bps, commission) + calculate_cost(exit_price, quantity, slippage_bps, commission)
    trade.update({"exit_time": last["timestamp"].isoformat(sep=" "), "exit_price": round(exit_price, 4), "exit_reason": "last_bar", "gross_pnl": round(gross, 4), "net_pnl": round(gross - costs, 4), "r_multiple": 0.0})
    return trade


def build_trade(symbol: str, direction: str, signal_row: dict, entry_row: dict, or_high: float, or_low: float, config: dict, gap_bucket: str, notes: dict) -> Optional[dict]:
    execution = config["execution"]
    exits = config["exits"]
    entry = entry_row["open"]
    atr = signal_row.get("atr") or 0.0
    if exits["stop_model"] == "atr":
        stop = entry - atr * exits.get("atr_stop_multiple", 1.0) if direction == "long" else entry + atr * exits.get("atr_stop_multiple", 1.0)
    else:
        stop = or_low if direction == "long" else or_high
    risk_per_share = abs(entry - stop)
    if risk_per_share <= 0:
        return None
    target = entry + risk_per_share * exits.get("take_profit_r_multiple", 2.0) if direction == "long" else entry - risk_per_share * exits.get("take_profit_r_multiple", 2.0)
    quantity = execution["position_notional"] / entry if entry else 0.0
    return {"symbol": symbol, "date": entry_row["timestamp"].date().isoformat(), "entry_time": entry_row["timestamp"].isoformat(sep=" "), "exit_time": "", "direction": direction, "entry_price": round(entry, 4), "exit_price": 0.0, "quantity": round(quantity, 6), "gross_pnl": 0.0, "net_pnl": 0.0, "r_multiple": 0.0, "exit_reason": "", "opening_range_high": round(or_high, 4), "opening_range_low": round(or_low, 4), "stop_price": stop, "initial_stop_price": stop, "target_price": target, "vwap_state": notes.get("vwap_state", "unknown"), "ema_ribbon": notes.get("ema_ribbon", signal_row.get("ema_ribbon", "unknown")), "regime": signal_row.get("regime", "unknown"), "atr_regime": notes.get("atr_regime", "unknown"), "gap_bucket": gap_bucket, "entry_hour": entry_row["timestamp"].strftime("%H:%M"), "day_of_week": entry_row["timestamp"].strftime("%A")}


def backtest_symbol(symbol: str, rows: List[dict], config: dict) -> List[dict]:
    rows = prepare_rows(rows, config)
    by_day = group_by_session(rows)
    session = config["session"]
    market_open = parse_time(session["market_open"])
    latest_entry = parse_time(session["latest_entry_time"])
    or_minutes = int(session["opening_range_minutes"])
    trades: List[dict] = []
    previous_close: Optional[float] = None
    for _, day_rows in by_day.items():
        range_info = opening_range_for_day(day_rows, market_open, or_minutes)
        if not range_info:
            continue
        or_high, or_low, range_end = range_info
        gap = bucket_gap(day_rows, previous_close)
        traded_today = False
        for index, signal_row in enumerate(day_rows[:-1]):
            if traded_today and config["execution"].get("one_trade_per_symbol_per_day", True):
                break
            stamp = signal_row["timestamp"]
            if stamp < range_end or stamp.time() > latest_entry:
                continue
            direction = None
            if signal_row["close"] > or_high:
                direction = "long"
            elif signal_row["close"] < or_low:
                direction = "short"
            if direction is None:
                continue
            passed, notes = filters_pass(signal_row, direction, config)
            if not passed:
                continue
            # Entry is intentionally the next bar open. The signal bar is closed,
            # so the backtester does not use future candles to decide the entry.
            entry_index = index + 1
            entry_row = day_rows[entry_index]
            trade = build_trade(symbol, direction, signal_row, entry_row, or_high, or_low, config, gap, notes)
            if trade is None:
                continue
            trades.append(simulate_exit(day_rows, entry_index, trade, config))
            traded_today = True
        previous_close = day_rows[-1]["close"]
    return trades


def run_backtest(config_path: str, output_dir_override: Optional[str] = None) -> int:
    config = load_config(config_path)
    output_dir = output_dir_override or config["output_dir"]
    all_trades: List[dict] = []
    for symbol in config["markets"]:
        rows = load_csv(config["data_files"][symbol], symbol)
        if not rows:
            continue
        all_trades.extend(backtest_symbol(symbol, rows, config))
    write_reports(output_dir, all_trades, config["execution"]["initial_equity"])
    print(f"[ORION] Wrote research outputs to {output_dir}")
    print(f"[ORION] Trades: {len(all_trades)}")
    print(f"[ORION] {markov_placeholder_note()}")
    return 0


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(description="ORION v0.1 local CSV-only 15-minute ORB backtester.")
    parser.add_argument("--config", default="research/orion/orion_config.json", help="Path to ORION JSON config.")
    parser.add_argument("--output-dir", default=None, help="Optional output directory override.")
    return parser


def main() -> int:
    parser = build_parser()
    args = parser.parse_args()
    return run_backtest(args.config, args.output_dir)


if __name__ == "__main__":
    raise SystemExit(main())
