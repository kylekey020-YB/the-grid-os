# ORION v0.1 - 15-Minute ORB Backtester Prototype

Status: research/backtest only.

ORION v0.1 is a local CSV-only prototype for testing SPY and QQQ 15-minute Opening Range Breakout rules.

Hard boundaries:

- No live trading.
- No broker connection.
- No orders.
- No money at risk.
- No paid/live data fetching.
- No paper trading yet.

## What It Tests

v0.1 tests the 15-minute opening range only.

Markets:

- SPY
- QQQ

Core mechanics:

- Build the opening range from 09:30 through 09:44:59 Eastern.
- Signal long when a completed bar closes above the opening range high.
- Signal short when a completed bar closes below the opening range low.
- Enter at the next bar open to avoid lookahead.
- Exit by stop, target, optional trailing stop, optional time stop, or end-of-day flat.

## Data

Place CSV files in research/orion/data/.

Default expected paths:

- research/orion/data/SPY.csv
- research/orion/data/QQQ.csv

Expected columns:

timestamp,open,high,low,close,volume

## Run

From the repository root:

python research/orion/src/orion_backtest.py --help
python research/orion/src/orion_backtest.py --config research/orion/orion_config.json

Outputs are written to research/orion/outputs/.

## Output Files

- trade_log.csv
- summary.json
- equity_curve.csv
- heatmap_time_of_day.csv
- heatmap_day_of_week.csv
- regime_breakdown.csv
- ema_filter_comparison.csv

## Doctrine

Indicators are not edge. Indicators are hypotheses. Every signal must prove value through out-of-sample testing.

## v0.2 First Historical Backtest Gate

ORION v0.2 prepares the first real historical backtest run.

New files:

- research/orion/src/validate_data.py
- ORION_BACKTEST_RUNBOOK.md

Current blocker:

Mission Commander must provide real SPY/QQQ intraday CSV data.

Expected files:

- research/orion/data/SPY.csv
- research/orion/data/QQQ.csv

Required schema:

```text
timestamp,open,high,low,close,volume
```

Validate before running the backtest:

```bash
python research/orion/src/validate_data.py --spy research/orion/data/SPY.csv --qqq research/orion/data/QQQ.csv
```

First-run command after validation passes:

```bash
python research/orion/src/orion_backtest.py --config research/orion/orion_config.json
```

No fake data, no profitability claim, no broker connection, and no strategy promotion are authorized.
