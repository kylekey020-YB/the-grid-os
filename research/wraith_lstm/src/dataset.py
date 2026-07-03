"""Dataset helpers for WRAITH-LSTM v0.2."""

from __future__ import annotations

from collections import defaultdict
from typing import Dict, List, Sequence, Tuple

from features import FEATURE_COLUMNS


def usable_rows(rows: Sequence[Dict[str, object]], target: str) -> List[Dict[str, object]]:
    clean_rows = []
    for row in rows:
        if row.get(target) in ("", None):
            continue
        clean_rows.append(row)
    return clean_rows


def chronological_split(rows: Sequence[Dict[str, object]], train_fraction: float = 0.7, validation_fraction: float = 0.15) -> Tuple[List[dict], List[dict], List[dict]]:
    """Split each symbol chronologically, then combine partitions.

    This avoids training on later rows from one symbol while testing on earlier
    rows from that same symbol. It also prevents multi-symbol datasets from
    producing a split that is just alphabetical by symbol.
    """

    by_symbol: Dict[str, List[dict]] = defaultdict(list)
    for row in rows:
        by_symbol[str(row.get("symbol", ""))].append(dict(row))

    train_rows: List[dict] = []
    validation_rows: List[dict] = []
    test_rows: List[dict] = []

    for symbol_rows in by_symbol.values():
        ordered = sorted(symbol_rows, key=lambda row: str(row.get("timestamp", "")))
        total = len(ordered)
        train_end = int(total * train_fraction)
        validation_end = train_end + int(total * validation_fraction)
        train_rows.extend(ordered[:train_end])
        validation_rows.extend(ordered[train_end:validation_end])
        test_rows.extend(ordered[validation_end:])

    return train_rows, validation_rows, test_rows


def build_sequences(rows: Sequence[Dict[str, object]], target: str, sequence_length: int, feature_columns: Sequence[str] | None = None) -> Tuple[List[List[List[float]]], List[int], List[dict]]:
    columns = list(feature_columns or FEATURE_COLUMNS)
    sequences: List[List[List[float]]] = []
    labels: List[int] = []
    metadata: List[dict] = []

    by_symbol: Dict[str, List[dict]] = defaultdict(list)
    for row in rows:
        by_symbol[str(row.get("symbol", ""))].append(dict(row))

    for symbol_rows in by_symbol.values():
        ordered = sorted(symbol_rows, key=lambda row: str(row.get("timestamp", "")))
        for end_index in range(sequence_length - 1, len(ordered)):
            window = ordered[end_index - sequence_length + 1 : end_index + 1]
            current = ordered[end_index]
            if current.get(target) in ("", None):
                continue
            sequence = [[float(row.get(column, 0.0) or 0.0) for column in columns] for row in window]
            sequences.append(sequence)
            labels.append(int(current[target]))
            metadata.append(
                {
                    "timestamp": current.get("timestamp", ""),
                    "symbol": current.get("symbol", ""),
                    "target": target,
                    "actual": int(current[target]),
                }
            )
    return sequences, labels, metadata
