"""Reporting helpers for ORION v0.1."""

from __future__ import annotations

import csv
import json
from collections import defaultdict
from pathlib import Path
from typing import Dict, List

TRADE_COLUMNS = [
    "symbol", "date", "entry_time", "exit_time", "direction", "entry_price", "exit_price", "quantity",
    "gross_pnl", "net_pnl", "r_multiple", "exit_reason", "opening_range_high", "opening_range_low",
    "vwap_state", "ema_ribbon", "regime", "atr_regime", "gap_bucket",
]


def ensure_output_dir(output_dir: str) -> Path:
    path = Path(output_dir)
    path.mkdir(parents=True, exist_ok=True)
    return path


def write_csv(path: Path, rows: List[dict], columns: List[str]) -> None:
    with path.open("w", newline="", encoding="utf-8") as handle:
        writer = csv.DictWriter(handle, fieldnames=columns)
        writer.writeheader()
        for row in rows:
            writer.writerow({column: row.get(column, "") for column in columns})


def write_json(path: Path, data: dict) -> None:
    path.write_text(json.dumps(data, indent=2, allow_nan=False), encoding="utf-8")


def profit_factor(trades: List[dict]) -> float:
    wins = sum(trade["net_pnl"] for trade in trades if trade["net_pnl"] > 0)
    losses = abs(sum(trade["net_pnl"] for trade in trades if trade["net_pnl"] < 0))
    if losses == 0:
        return 0.0
    return wins / losses


def max_drawdown(equity_rows: List[dict]) -> float:
    if not equity_rows:
        return 0.0
    peak = equity_rows[0]["equity"]
    max_dd = 0.0
    for row in equity_rows:
        equity = row["equity"]
        peak = max(peak, equity)
        max_dd = min(max_dd, equity - peak)
    return max_dd


def summarize_trades(trades: List[dict], initial_equity: float) -> dict:
    total = len(trades)
    wins = [trade for trade in trades if trade["net_pnl"] > 0]
    losses = [trade for trade in trades if trade["net_pnl"] < 0]
    net_values = [trade["net_pnl"] for trade in trades]
    equity_rows = build_equity_curve(trades, initial_equity)
    return {
        "total_trades": total,
        "win_rate": (len(wins) / total) if total else 0.0,
        "expectancy": (sum(net_values) / total) if total else 0.0,
        "average_win": (sum(trade["net_pnl"] for trade in wins) / len(wins)) if wins else 0.0,
        "average_loss": (sum(trade["net_pnl"] for trade in losses) / len(losses)) if losses else 0.0,
        "profit_factor": profit_factor(trades),
        "max_drawdown": max_drawdown(equity_rows),
        "net_pnl": sum(net_values),
        "initial_equity": initial_equity,
        "ending_equity": equity_rows[-1]["equity"] if equity_rows else initial_equity,
        "long_short_breakdown": grouped_summary(trades, "direction"),
        "symbol_breakdown": grouped_summary(trades, "symbol"),
        "safety": {"live_trading": False, "broker_connection": False, "orders_enabled": False, "money_at_risk": False},
    }


def grouped_summary(trades: List[dict], key: str) -> Dict[str, dict]:
    grouped: Dict[str, List[dict]] = defaultdict(list)
    for trade in trades:
        grouped[str(trade.get(key, "unknown"))].append(trade)
    return {group: {"trades": len(items), "net_pnl": sum(item["net_pnl"] for item in items), "win_rate": sum(1 for item in items if item["net_pnl"] > 0) / len(items) if items else 0.0, "expectancy": sum(item["net_pnl"] for item in items) / len(items) if items else 0.0, "profit_factor": profit_factor(items)} for group, items in sorted(grouped.items())}


def build_equity_curve(trades: List[dict], initial_equity: float) -> List[dict]:
    equity = initial_equity
    rows: List[dict] = []
    for index, trade in enumerate(trades, start=1):
        equity += trade["net_pnl"]
        rows.append({"trade_number": index, "timestamp": trade["exit_time"], "symbol": trade["symbol"], "net_pnl": trade["net_pnl"], "equity": equity})
    return rows


def heatmap(trades: List[dict], key: str) -> List[dict]:
    grouped = grouped_summary(trades, key)
    return [{"bucket": group, **values} for group, values in grouped.items()]


def write_reports(output_dir: str, trades: List[dict], initial_equity: float) -> None:
    out = ensure_output_dir(output_dir)
    trades = sorted(trades, key=lambda trade: trade["exit_time"])
    summary = summarize_trades(trades, initial_equity)
    equity_rows = build_equity_curve(trades, initial_equity)
    write_csv(out / "trade_log.csv", trades, TRADE_COLUMNS)
    write_json(out / "summary.json", summary)
    write_csv(out / "equity_curve.csv", equity_rows, ["trade_number", "timestamp", "symbol", "net_pnl", "equity"])
    columns = ["bucket", "trades", "net_pnl", "win_rate", "expectancy", "profit_factor"]
    write_csv(out / "heatmap_time_of_day.csv", heatmap(trades, "entry_hour"), columns)
    write_csv(out / "heatmap_day_of_week.csv", heatmap(trades, "day_of_week"), columns)
    write_csv(out / "regime_breakdown.csv", heatmap(trades, "regime"), columns)
    write_csv(out / "ema_filter_comparison.csv", heatmap(trades, "ema_ribbon"), columns)
