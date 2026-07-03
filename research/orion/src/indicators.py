"""Indicator helpers for ORION v0.1.

All calculations use completed bars only. The backtester creates signals on a
completed bar and enters on the next bar open, so indicator values on the signal
bar do not require future candles.
"""

from __future__ import annotations

from collections import deque
from typing import Dict, Iterable, List, Optional


def add_indicators(rows: List[dict], atr_period: int, ema_periods: Iterable[int]) -> List[dict]:
    """Add VWAP, ATR, EMA ribbon state, and simple regime fields in place."""
    ema_periods = list(ema_periods)
    ema_state: Dict[int, Optional[float]] = {period: None for period in ema_periods}
    tr_window: deque[float] = deque(maxlen=atr_period)
    prev_close: Optional[float] = None
    current_date = None
    cumulative_pv = 0.0
    cumulative_volume = 0.0

    for row in rows:
        row_date = row["timestamp"].date()
        if row_date != current_date:
            current_date = row_date
            cumulative_pv = 0.0
            cumulative_volume = 0.0

        high = row["high"]
        low = row["low"]
        close = row["close"]
        volume = row["volume"]

        typical_price = (high + low + close) / 3.0
        cumulative_pv += typical_price * volume
        cumulative_volume += volume
        row["vwap"] = cumulative_pv / cumulative_volume if cumulative_volume else close

        if prev_close is None:
            true_range = high - low
        else:
            true_range = max(high - low, abs(high - prev_close), abs(low - prev_close))
        tr_window.append(true_range)
        row["atr"] = sum(tr_window) / len(tr_window) if tr_window else 0.0

        for period in ema_periods:
            alpha = 2.0 / (period + 1.0)
            prior = ema_state[period]
            ema_value = close if prior is None else (close * alpha) + (prior * (1.0 - alpha))
            ema_state[period] = ema_value
            row[f"ema_{period}"] = ema_value

        row["ema_ribbon"] = classify_ema_ribbon(row, ema_periods)
        row["vwap_distance_pct"] = ((close - row["vwap"]) / row["vwap"] * 100.0) if row["vwap"] else 0.0
        row["regime"] = classify_simple_regime(row)
        prev_close = close

    return rows


def classify_ema_ribbon(row: dict, ema_periods: List[int]) -> str:
    values = [row.get(f"ema_{period}") for period in ema_periods]
    if any(value is None for value in values):
        return "unknown"
    bullish = all(values[index] > values[index + 1] for index in range(len(values) - 1))
    bearish = all(values[index] < values[index + 1] for index in range(len(values) - 1))
    fast = values[0]
    slow = values[-1]
    close = row["close"]
    compression_pct = abs(fast - slow) / close * 100.0 if close else 0.0
    row["ema_compression_pct"] = compression_pct
    if bullish:
        return "bullish"
    if bearish:
        return "bearish"
    return "neutral"


def classify_simple_regime(row: dict) -> str:
    """Create a first research label; this is not a Markov model or edge claim."""
    atr = row.get("atr") or 0.0
    close = row["close"]
    atr_pct = atr / close * 100.0 if close else 0.0
    vwap_distance = row.get("vwap_distance_pct", 0.0)
    if atr_pct >= 0.35:
        return "high_volatility"
    if atr_pct <= 0.10:
        return "low_volatility"
    if vwap_distance > 0.15:
        return "trend_up"
    if vwap_distance < -0.15:
        return "trend_down"
    return "chop"
