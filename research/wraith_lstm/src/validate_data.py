"""Validate WRAITH-LSTM v0.2 local CSV data.

Research only. This script checks whether historical liquidation datasets match
THE GRID data contract before any model training is treated as valid.

It does not connect to exchanges, wallets, brokers, APIs, or live feeds.
"""

from __future__ import annotations

import argparse
import csv
import json
from collections import defaultdict
from datetime import datetime
from pathlib import Path
from typing import Dict, Iterable, List, Tuple


REQUIRED_COLUMNS = [
    "timestamp",
    "symbol",
    "open",
    "high",
    "low",
    "close",
    "volume",
    "long_liquidations_usd",
    "short_liquidations_usd",
    "long_liquidations_count",
    "short_liquidations_count",
    "largest_long_liquidation_usd",
    "largest_short_liquidation_usd",
    "open_interest",
    "funding_rate",
]

NON_NEGATIVE_COLUMNS = [
    "open",
    "high",
    "low",
    "close",
    "volume",
    "long_liquidations_usd",
    "short_liquidations_usd",
    "long_liquidations_count",
    "short_liquidations_count",
    "largest_long_liquidation_usd",
    "largest_short_liquidation_usd",
    "open_interest",
]

FORBIDDEN_RAW_COLUMNS = [
    "next_15m_direction",
    "next_30m_direction",
    "next_60m_direction",
    "next_15m_large_move",
    "next_30m_large_move",
    "next_60m_large_move",
    "predicted",
    "probability",
]


def parse_timestamp(value: str) -> datetime:
    value = value.strip()
    formats = [
        "%Y-%m-%d %H:%M:%S",
        "%Y-%m-%d %H:%M",
        "%Y-%m-%dT%H:%M:%S",
        "%Y-%m-%dT%H:%M:%S.%f",
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
        errors.append(f"Row {row_number}: {column} is not numeric: {value!r}")
        return 0.0


def load_csv(path: str) -> Tuple[List[Dict[str, str]], List[str]]:
    with Path(path).open("r", newline="", encoding="utf-8-sig") as handle:
        reader = csv.DictReader(handle)
        fieldnames = reader.fieldnames or []
        return [dict(row) for row in reader], fieldnames


def validate_schema(fieldnames: Iterable[str], errors: List[str], warnings: List[str]) -> None:
    fields = list(fieldnames)
    missing = [column for column in REQUIRED_COLUMNS if column not in fields]
    if missing:
        errors.append(f"Missing required columns: {missing}")
    leaked = [column for column in FORBIDDEN_RAW_COLUMNS if column in fields]
    if leaked:
        errors.append(f"Future-leakage columns are present in raw input and must be removed: {leaked}")
    extra = [column for column in fields if column not in REQUIRED_COLUMNS]
    allowed_extra = {"vwap", "source", "provider", "exchange"}
    unusual = [column for column in extra if column not in allowed_extra]
    if unusual:
        warnings.append(f"Unrecognized extra columns will be ignored by v0.2 training: {unusual}")


def validate_rows(rows: List[Dict[str, str]], errors: List[str], warnings: List[str]) -> Dict[str, object]:
    duplicates = set()
    seen = set()
    by_symbol: Dict[str, List[Tuple[datetime, int]]] = defaultdict(list)

    for index, row in enumerate(rows, start=2):
        for column in REQUIRED_COLUMNS:
            if row.get(column, "") == "":
                errors.append(f"Row {index}: missing value for {column}")

        symbol = row.get("symbol", "").strip()
        timestamp_raw = row.get("timestamp", "").strip()
        try:
            timestamp = parse_timestamp(timestamp_raw)
            by_symbol[symbol].append((timestamp, index))
        except Exception:
            errors.append(f"Row {index}: invalid timestamp {timestamp_raw!r}")
            timestamp = None

        key = (symbol, timestamp_raw)
        if key in seen:
            duplicates.add(key)
        seen.add(key)

        values = {column: to_float(row.get(column, ""), column, index, errors) for column in NON_NEGATIVE_COLUMNS if row.get(column, "") != ""}
        for column, value in values.items():
            if value < 0:
                errors.append(f"Row {index}: {column} cannot be negative")

        if all(column in values for column in ["open", "high", "low", "close"]):
            high = values["high"]
            low = values["low"]
            open_price = values["open"]
            close = values["close"]
            if high < low:
                errors.append(f"Row {index}: high is below low")
            if high < max(open_price, close):
                errors.append(f"Row {index}: high is below open/close")
            if low > min(open_price, close):
                errors.append(f"Row {index}: low is above open/close")

    if duplicates:
        errors.append(f"Duplicate symbol/timestamp rows found: {len(duplicates)}")

    ordering_violations = 0
    for symbol, stamps in by_symbol.items():
        previous = None
        previous_row = None
        for timestamp, row_number in stamps:
            if previous is not None and timestamp <= previous:
                ordering_violations += 1
                errors.append(f"Row {row_number}: timestamp for {symbol} is not strictly increasing after row {previous_row}")
            previous = timestamp
            previous_row = row_number

    return {
        "rows": len(rows),
        "symbols": sorted(symbol for symbol in by_symbol if symbol),
        "duplicates": len(duplicates),
        "ordering_violations": ordering_violations,
    }


def validate_split_integrity(rows: List[Dict[str, str]], train_fraction: float, validation_fraction: float, errors: List[str]) -> Dict[str, object]:
    by_symbol: Dict[str, List[Dict[str, str]]] = defaultdict(list)
    for row in rows:
        by_symbol[row.get("symbol", "")].append(row)

    train_keys = set()
    validation_keys = set()
    test_keys = set()
    split_summary = {"train_rows": 0, "validation_rows": 0, "test_rows": 0, "symbols": {}}

    for symbol, symbol_rows in by_symbol.items():
        ordered = sorted(symbol_rows, key=lambda row: row.get("timestamp", ""))
        total = len(ordered)
        train_end = int(total * train_fraction)
        validation_end = train_end + int(total * validation_fraction)
        symbol_train = ordered[:train_end]
        symbol_validation = ordered[train_end:validation_end]
        symbol_test = ordered[validation_end:]

        split_summary["train_rows"] += len(symbol_train)
        split_summary["validation_rows"] += len(symbol_validation)
        split_summary["test_rows"] += len(symbol_test)
        split_summary["symbols"][symbol] = {
            "train_rows": len(symbol_train),
            "validation_rows": len(symbol_validation),
            "test_rows": len(symbol_test),
        }

        if total and (not symbol_train or not symbol_validation or not symbol_test):
            errors.append(f"Chronological split for {symbol} would create an empty train, validation, or test set. More historical rows are required.")

        train_keys.update((row.get("symbol", ""), row.get("timestamp", "")) for row in symbol_train)
        validation_keys.update((row.get("symbol", ""), row.get("timestamp", "")) for row in symbol_validation)
        test_keys.update((row.get("symbol", ""), row.get("timestamp", "")) for row in symbol_test)

    if train_keys.intersection(validation_keys) or train_keys.intersection(test_keys) or validation_keys.intersection(test_keys):
        errors.append("Split integrity failed: row keys overlap between train/validation/test partitions.")

    return split_summary


def run(args: argparse.Namespace) -> int:
    errors: List[str] = []
    warnings: List[str] = []
    rows, fieldnames = load_csv(args.input)
    validate_schema(fieldnames, errors, warnings)
    row_summary = validate_rows(rows, errors, warnings)
    split_summary = validate_split_integrity(rows, args.train_fraction, args.validation_fraction, errors)

    report = {
        "status": "passed" if not errors else "failed",
        "input": args.input,
        "schema_version": "wraith_lstm_v0.2",
        "required_columns": REQUIRED_COLUMNS,
        "row_summary": row_summary,
        "split_summary": split_summary,
        "warnings": warnings,
        "errors": errors,
        "safety": {
            "live_trading": False,
            "exchange_connection": False,
            "wallet_connection": False,
            "broker_connection": False,
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
    parser = argparse.ArgumentParser(description="Validate WRAITH-LSTM v0.2 local CSV data before research training.")
    parser.add_argument("--input", default="research/wraith_lstm/data/input.csv", help="Local CSV file to validate.")
    parser.add_argument("--report", default="research/wraith_lstm/outputs/data_validation_report.json", help="Optional JSON validation report path.")
    parser.add_argument("--train-fraction", type=float, default=0.7, help="Chronological train split fraction.")
    parser.add_argument("--validation-fraction", type=float, default=0.15, help="Chronological validation split fraction.")
    return parser


if __name__ == "__main__":
    raise SystemExit(run(build_parser().parse_args()))
