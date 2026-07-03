# ORION Backtest Runbook

Status: first historical evidence preparation
Version: ORION v0.2

## Objective

Move ORION from specification/prototype to the first historical backtest run using real SPY and QQQ intraday CSV data.

No profitability is claimed by this runbook. No strategy promotion is authorized by this runbook.

## Existing Backtester Files

- research/orion/README.md
- research/orion/orion_config.json
- research/orion/src/orion_backtest.py
- research/orion/src/indicators.py
- research/orion/src/regime.py
- research/orion/src/reporting.py
- research/orion/src/validate_data.py

## Expected CSV Files

Place real intraday data here:

- research/orion/data/SPY.csv
- research/orion/data/QQQ.csv

## Required CSV Schema

Exact required columns:

```text
timestamp,open,high,low,close,volume
```

Allowed extra columns:

```text
symbol,source,provider,exchange,timezone
```

Forbidden raw columns:

```text
signal,direction,entry,exit,pnl,future_return,target,prediction
```

## Data Requirements

- Use real historical SPY and QQQ intraday candles only.
- Preferred granularity: 1-minute or 5-minute candles.
- Timestamp timezone should be consistent and documented. The current config expects regular session times from 09:30 to 16:00.
- Include enough history for the first run. Five sessions is the minimum smoke-test gate; 60+ sessions is the minimum useful research gate.
- Do not use fake data, generated prices, toy rows, or screenshots converted by hand.
- Do not include future labels, predictions, signals, or PnL in the raw input.

## Validation Command

Run this before the backtest:

```bash
python research/orion/src/validate_data.py --spy research/orion/data/SPY.csv --qqq research/orion/data/QQQ.csv
```

Expected validation output:

- status: passed
- no required-column errors
- no duplicate timestamps
- no timestamp-ordering errors
- no negative OHLCV values
- no OHLC consistency errors
- no forbidden future/result columns

Validation report output:

- research/orion/outputs/data_validation_report.json

## First Backtest Command

After validation passes:

```bash
python research/orion/src/orion_backtest.py --config research/orion/orion_config.json
```

Expected output files:

- research/orion/outputs/trade_log.csv
- research/orion/outputs/summary.json
- research/orion/outputs/equity_curve.csv
- research/orion/outputs/heatmap_time_of_day.csv
- research/orion/outputs/heatmap_day_of_week.csv
- research/orion/outputs/regime_breakdown.csv
- research/orion/outputs/ema_filter_comparison.csv

## Interpretation Rules

- A completed backtest is evidence, not proof.
- A profitable summary is not enough for promotion.
- A losing summary is useful evidence and may reject or refine the hypothesis.
- Review trade log quality before reading performance metrics.
- Check for missing sessions, skipped opening ranges, timestamp issues, and unrealistic fills.
- No paper trading discussion until historical validation, cost assumptions, and review are complete.

## Current Blocker

Mission Commander must provide real SPY/QQQ intraday CSV data.

## Safety Boundary

- No live trading.
- No broker connection.
- No orders.
- No money at risk.
- No strategy promotion.
- No profitability claim.
- No fake data.
