"""Validate ORION v0.2 local intraday CSV data.

Research only. This script checks SPY/QQQ intraday files before the ORION
Opening Range Breakout backtester is allowed to produce evidence.

It does not connect to brokers, data vendors, APIs, or live feeds.
"""

from __future__ import annotations

import argparse
import csv
import json
from collections import defaultdict
from datetime import datetime, time
from pathlib import Path
from typing import Dict, Iterable, List, Tuple


REQUIRED_COLUMNS = ["timestamp", "open", "high", "low", "close", "volume"]
NON_NEGATIVE_COLUMNS = ["open", "high", "low", "close", "volume"]
FORBIDDEN_COLUMNS = ["signal", "direction", "entry", "exit", "pnl", "future_return", "target", "prediction"]


def parse_time(value: str) -> time:
    hour, minute = value.split(":")[:2]
    return time(int(hour), int(minute))


def parse_timestamp(value: str) -> datetime:
    value = value.strip()
    formats = [
        "%Y-%m-%d %H:%M:%S",
        "%Y-%m-%d %H:%M",
        "%Y-%m-%dT%H:%M:%S",
        "%Y-%m-%dT%H:%M",
        "%Y-%m-%dT%H:%M:%SZ",
    ]
    for fmt in formats:
        try:
            return datetime.strptime(value, fmt)
        except ValueError:
            pass
    return datetime.fromisoformat(value.replace("Z", "+00:00")).replace(tzinfo=None)


def to_float(value: str, column: str, row_number: int, errors: List[str]) -> float:
    try:
        return float(value)
    except (TypeError, ValueError):
        errors.append(f"{row_number}: {column} is not numeric: {value!r}")
        return 0.0


def load_csv(path: str) -> Tuple[List[Dict[str, str]], List[str]]:
    file_path = Path(path)
    if not file_path.exists():
        raise FileNotFoundError(f"Input CSV not found: {file_path}")
    with file_path.open("r", newline="", encoding="utf-8-sig") as handle:
        reader = csv.DictReader(handle)
        return [dict(row) for row in reader], reader.fieldnames or []


def validate_schema(path: str, fieldnames: Iterable[str], errors: List[str], warnings: List[str]) -> None:
    fields = list(fieldnames)
    missing = [column for column in REQUIRED_COLUMNS if column not in fields]
    if missing:
        errors.append(f"{path}: missing required columns: {missing}")
    leaked = [column for column in FORBIDDEN_COLUMNS if column in fields]
    if leaked:
        errors.append(f"{path}: future/result columns must not be present in raw input: {leaked}")
    extra = [column for column in fields if column not in REQUIRED_COLUMNS]
    allowed_extra = {"symbol", "source", "provider", "exchange", "timezone"}
    unusual = [column for column in extra if column not in allowed_extra]
    if unusual:
        warnings.append(f"{path}: unrecognized extra columns will be ignored by ORION v0.2: {unusual}")


def validate_rows(path: str, symbol: str, rows: List[Dict[str, str]], market_open: time, market_close: time, errors: List[str], warnings: List[str]) -> Dict[str, object]:
    seen = set()
    by_day: Dict[str, List[datetime]] = defaultdict(list)
    previous_timestamp = None
    regular_session_rows = 0

    for index, row in enumerate(rows, start=2):
        for column in REQUIRED_COLUMNS:
            if row.get(column, "") == "":
                errors.append(f"{path}:{index}: missing value for {column}")

        timestamp_raw = row.get("timestamp", "").strip()
        try:
            timestamp = parse_timestamp(timestamp_raw)
        except Exception:
            errors.append(f"{path}:{index}: invalid timestamp {timestamp_raw!r}")
            continue

        if previous_timestamp is not None and timestamp <= previous_timestamp:
            errors.append(f"{path}:{index}: timestamp is not strictly increasing")
        previous_timestamp = timestamp

        if timestamp_raw in seen:
            errors.append(f"{path}:{index}: duplicate timestamp {timestamp_raw}")
        seen.add(timestamp_raw)

        if market_open <= timestamp.time() <= market_close:
            regular_session_rows += 1
            by_day[timestamp.date().isoformat()].append(timestamp)

        values = {column: to_float(row.get(column, ""), column, index, errors) for column in NON_NEGATIVE_COLUMNS if row.get(column, "") != ""}
        for column, value in values.items():
            if value < 0:
                errors.append(f"{path}:{index}: {column} cannot be negative")

        if all(column in values for column in ["open", "high", "low", "close"]):
            open_price = values["open"]
            high = values["high"]
            low = values["low"]
            close = values["close"]
            if high < low:
                errors.append(f"{path}:{index}: high is below low")
            if high < max(open_price, close):
                errors.append(f"{path}:{index}: high is below open/close")
            if low > min(open_price, close):
                errors.append(f"{path}:{index}: low is above open/close")

    thin_days = [day for day, stamps in by_day.items() if len(stamps) < 16]
    if thin_days:
        warnings.append(f"{path}: {len(thin_days)} regular-session days have fewer than 16 rows; 15-minute ORB may skip them.")
    if regular_session_rows == 0 and rows:
        errors.append(f"{path}: no rows fall inside configured regular session {market_open}-{market_close}.")

    return {
        "symbol": symbol,
        "rows": len(rows),
        "regular_session_rows": regular_session_rows,
        "sessions": len(by_day),
        "thin_sessions": len(thin_days),
    }


def validate_split_integrity(summaries: List[Dict[str, object]], errors: List[str]) -> Dict[str, object]:
    split = {"symbols": {}, "ready_for_first_run": True}
    for summary in summaries:
        symbol = str(summary["symbol"])
        sessions = int(summary.get("sessions", 0))
        split["symbols"][symbol] = {
            "sessions": sessions,
            "minimum_recommended_sessions": 60,
            "first_run_ok": sessions >= 5,
            "research_grade": sessions >= 60,
        }
        if sessions < 5:
            errors.append(f"{symbol}: fewer than 5 regular-session days. Provide more intraday history before first run.")
        if sessions < 60:
            split["ready_for_first_run"] = False
    return split


def run(args: argparse.Namespace) -> int:
    errors: List[str] = []
    warnings: List[str] = []
    market_open = parse_time(args.market_open)
    market_close = parse_time(args.market_close)
    inputs = {"SPY": args.spy, "QQQ": args.qqq}
    summaries = []

    for symbol, input_path in inputs.items():
        rows, fieldnames = load_csv(input_path)
        validate_schema(input_path, fieldnames, errors, warnings)
        summaries.append(validate_rows(input_path, symbol, rows, market_open, market_close, errors, warnings))

    split_summary = validate_split_integrity(summaries, errors)
    report = {
        "status": "passed" if not errors else "failed",
        "schema": REQUIRED_COLUMNS,
        "inputs": inputs,
        "summaries": summaries,
        "split_integrity": split_summary,
        "warnings": warnings,
        "errors": errors,
        "safety": {
            "live_trading": False,
            "broker_connection": False,
            "orders_enabled": False,
            "money_at_risk": False,
        },
    }

    if args.report:
        output_path = Path(args.report)
        output_path.parent.mkdir(parents=True, exist_ok=True)
        output_path.write_text(json.dumps(report, indent=2), encoding="utf-8")

    print(json.dumps(report, indent=2))
    return 0 if not errors else 1


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(description="Validate ORION SPY/QQQ intraday CSV data before the first ORB backtest run.")
    parser.add_argument("--spy", default="research/orion/data/SPY.csv", help="SPY intraday CSV path.")
    parser.add_argument("--qqq", default="research/orion/data/QQQ.csv", help="QQQ intraday CSV path.")
    parser.add_argument("--market-open", default="09:30", help="Regular session open time in the CSV timezone.")
    parser.add_argument("--market-close", default="16:00", help="Regular session close time in the CSV timezone.")
    parser.add_argument("--report", default="research/orion/outputs/data_validation_report.json", help="Validation report output path.")
    return parser


if __name__ == "__main__":
    raise SystemExit(run(build_parser().parse_args()))
