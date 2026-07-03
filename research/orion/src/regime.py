"""Regime helpers for ORION v0.1.

Markov research is intentionally a placeholder in v0.1. The first prototype uses
simple deterministic labels so the strategy can be tested before adding model
complexity.
"""

from __future__ import annotations

from typing import List


def percentile(values: List[float], value: float) -> float:
    if not values:
        return 50.0
    sorted_values = sorted(values)
    count = sum(1 for item in sorted_values if item <= value)
    return count / len(sorted_values) * 100.0


def add_atr_percentiles(rows: List[dict], lookback: int = 100) -> List[dict]:
    history: List[float] = []
    for row in rows:
        atr = row.get("atr") or 0.0
        row["atr_percentile"] = percentile(history[-lookback:], atr) if history else 50.0
        history.append(atr)
    return rows


def atr_regime(row: dict, min_percentile: float, max_percentile: float) -> str:
    value = row.get("atr_percentile", 50.0)
    if value < min_percentile:
        return "low_atr"
    if value > max_percentile:
        return "high_atr"
    return "normal_atr"


def markov_placeholder_note() -> str:
    return "Markov regime model not implemented in v0.1; reject if future complexity fails out-of-sample validation."
