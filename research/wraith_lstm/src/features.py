"""Feature engineering for WRAITH-LSTM v0.2.

Research only. This module reads local CSV rows and creates signal-research
features. It does not connect to exchanges, wallets, brokers, or live feeds.

No-lookahead rule:
- Features for row N use only row N and prior rows.
- Targets are created separately from future closes and are never included in
  the feature column list used for training.
"""

from __future__ import annotations

import csv
import math
from pathlib import Path
from statistics import mean, pstdev
from typing import Dict, Iterable, List, Sequence


STRICT_SCHEMA_COLUMNS = [
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

NUMERIC_COLUMNS = [
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
    "vwap",
]

FEATURE_COLUMNS = [
    "return_1",
    "rolling_volatility",
    "liquidation_imbalance",
    "open_interest_delta",
    "funding_change",
    "vwap_distance",
    "volume_zscore",
    "liquidation_zscore",
]

TARGET_COLUMNS = [
    "next_15m_direction",
    "next_30m_direction",
    "next_60m_direction",
    "next_15m_large_move",
    "next_30m_large_move",
    "next_60m_large_move",
]


def _to_float(value: object, default: float = 0.0) -> float:
    if value in (None, ""):
        return default
    try:
        result = float(value)
    except (TypeError, ValueError):
        return default
    if math.isnan(result) or math.isinf(result):
        return default
    return result


def _safe_divide(numerator: float, denominator: float) -> float:
    if denominator == 0:
        return 0.0
    return numerator / denominator


def _rolling_values(rows: Sequence[Dict[str, object]], column: str, index: int, window: int) -> List[float]:
    start = max(0, index - window + 1)
    return [_to_float(row.get(column)) for row in rows[start : index + 1]]


def _zscore(rows: Sequence[Dict[str, object]], column: str, index: int, window: int) -> float:
    values = _rolling_values(rows, column, index, window)
    if len(values) < 2:
        return 0.0
    spread = pstdev(values)
    if spread == 0:
        return 0.0
    return (values[-1] - mean(values)) / spread


def load_rows(path: str, required_columns: Iterable[str]) -> List[Dict[str, object]]:
    file_path = Path(path)
    if not file_path.exists():
        raise FileNotFoundError(f"Input CSV not found: {file_path}")

    with file_path.open("r", newline="", encoding="utf-8-sig") as handle:
        reader = csv.DictReader(handle)
        fieldnames = reader.fieldnames or []
        missing = set(required_columns).difference(fieldnames)
        if missing:
            raise ValueError(f"{file_path} missing required columns: {sorted(missing)}")
        rows = [dict(row) for row in reader]

    rows.sort(key=lambda row: (str(row.get("symbol", "")), str(row.get("timestamp", ""))))
    for row in rows:
        for column in NUMERIC_COLUMNS:
            if column in row:
                row[column] = _to_float(row.get(column))
    return rows


def engineer_features(rows: List[Dict[str, object]], config: dict) -> List[Dict[str, object]]:
    feature_cfg = config.get("features", {})
    target_cfg = config.get("targets", {})
    bar_minutes = int(config.get("data", {}).get("bar_minutes", 5))
    volatility_window = int(feature_cfg.get("volatility_window", 20))
    zscore_window = int(feature_cfg.get("zscore_window", 50))
    horizons = target_cfg.get("horizons_minutes", [15, 30, 60])
    large_move_threshold = float(target_cfg.get("large_move_threshold_pct", 0.5)) / 100.0

    for index, row in enumerate(rows):
        previous_same_symbol = None
        if index > 0 and rows[index - 1].get("symbol") == row.get("symbol"):
            previous_same_symbol = rows[index - 1]

        close = _to_float(row.get("close"))
        prev_close = _to_float(previous_same_symbol.get("close")) if previous_same_symbol else close
        prev_open_interest = _to_float(previous_same_symbol.get("open_interest")) if previous_same_symbol else _to_float(row.get("open_interest"))
        prev_funding = _to_float(previous_same_symbol.get("funding_rate")) if previous_same_symbol else _to_float(row.get("funding_rate"))

        row["return_1"] = _safe_divide(close - prev_close, prev_close)
        returns = _rolling_values(rows, "return_1", index, volatility_window)
        row["rolling_volatility"] = pstdev(returns) if len(returns) > 1 else 0.0

        long_liq = _to_float(row.get("long_liquidations_usd"))
        short_liq = _to_float(row.get("short_liquidations_usd"))
        total_liq = long_liq + short_liq
        row["total_liquidations_usd"] = total_liq
        row["liquidation_imbalance"] = _safe_divide(long_liq - short_liq, total_liq)
        row["open_interest_delta"] = _to_float(row.get("open_interest")) - prev_open_interest
        row["funding_change"] = _to_float(row.get("funding_rate")) - prev_funding

        vwap = _to_float(row.get("vwap"))
        row["vwap_distance"] = _safe_divide(close - vwap, vwap) if vwap else 0.0
        row["volume_zscore"] = _zscore(rows, "volume", index, zscore_window)
        row["liquidation_zscore"] = _zscore(rows, "total_liquidations_usd", index, zscore_window)

    for index, row in enumerate(rows):
        close = _to_float(row.get("close"))
        for horizon in horizons:
            steps = max(1, int(round(float(horizon) / float(bar_minutes))))
            future_index = index + steps
            direction_key = f"next_{horizon}m_direction"
            large_move_key = f"next_{horizon}m_large_move"
            if future_index >= len(rows) or rows[future_index].get("symbol") != row.get("symbol") or close == 0:
                row[direction_key] = ""
                row[large_move_key] = ""
                continue
            future_close = _to_float(rows[future_index].get("close"))
            future_return = _safe_divide(future_close - close, close)
            row[direction_key] = 1 if future_return > 0 else 0
            row[large_move_key] = 1 if abs(future_return) >= large_move_threshold else 0

    return rows


def write_rows(path: str, rows: Sequence[Dict[str, object]], columns: Sequence[str] | None = None) -> None:
    output_path = Path(path)
    output_path.parent.mkdir(parents=True, exist_ok=True)
    if not rows:
        output_path.write_text("", encoding="utf-8")
        return
    fieldnames = list(columns or rows[0].keys())
    with output_path.open("w", newline="", encoding="utf-8") as handle:
        writer = csv.DictWriter(handle, fieldnames=fieldnames, extrasaction="ignore")
        writer.writeheader()
        writer.writerows(rows)


def summarize_features(rows: Sequence[Dict[str, object]], output_path: str) -> None:
    summary_rows = []
    for column in FEATURE_COLUMNS:
        values = [_to_float(row.get(column)) for row in rows if row.get(column) not in (None, "")]
        if not values:
            summary_rows.append({"feature": column, "count": 0, "mean": "", "std": "", "min": "", "max": ""})
            continue
        summary_rows.append(
            {
                "feature": column,
                "count": len(values),
                "mean": round(mean(values), 8),
                "std": round(pstdev(values), 8) if len(values) > 1 else 0.0,
                "min": round(min(values), 8),
                "max": round(max(values), 8),
            }
        )
    write_rows(output_path, summary_rows, ["feature", "count", "mean", "std", "min", "max"])
