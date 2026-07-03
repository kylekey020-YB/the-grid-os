# Trading Research Corps Status

Current Version: v2.8.0

## Status

Research only / no money at risk.

## Doctrine

Trading programs are research programs until evidence proves expectancy.

Discretionary trading concepts must be converted into mechanical rules before THE GRID treats them as research signals.

## Programs

### PAIRFORGE

Mission: research pairs trading and statistical arbitrage systems that seek market-neutral mean-reversion edges.

Status: Backtest Required.

### VOLTA

Mission: research options and volatility strategies with strict paper-only architecture and no execution capability.

Status: Research Only.

### ATLAS

Mission: research long-term buy-and-hold and factor portfolio systems for durable allocation decisions.

Status: Research Only.

### ORION

Mission: become a hyper-focused research program for SPY and QQQ only.

Markets:

- SPY
- QQQ
- Optional ES/NQ later, research only

Strategy research candidates:

- Opening range breakout
- VWAP reversion
- VWAP trend continuation
- Gap fill / gap continuation
- Premarket high/low break
- Previous day high/low sweep
- Intraday momentum
- Trend day detection
- Mean reversion after extreme move
- Volatility regime filters
- Time-of-day edge
- 0DTE risk research only, no execution

Status: Research only. No broker connection. No live trading.

### WRAITH

Mission: research and test liquidity sweep / fair value gap / displacement strategies across stocks and crypto.

Markets:

- SPY / QQQ
- BTC / ETH
- Solana majors
- Optional ES/NQ later

Important:

ICT concepts are discretionary and often poorly defined. WRAITH must convert them into mechanical, testable rules. No vague "looks like liquidity" logic is accepted. Every signal must have code-definable criteria.

Status: Research only. No wallet execution. No live trading.

## Quant Scout Mission 001 Result

Recommended first bot to prototype: ORION.

Recommended first signal to test: SPY/QQQ Opening Range Breakout.

Reason: highest blend of clean backtest feasibility, data availability, risk control, realistic execution assumptions, and speed to paper test.

See QUANT_SCOUT_MISSION_001.md for the full ranking, data plan, and backtest plan.

## Hard Boundaries

- No live trading.
- No brokerage connection.
- No options execution.
- No wallet execution.
- No money at risk.
- No fake win rate, expectancy, drawdown, return, or PnL.
- No strategy promotion before historical validation.
- Backtest and paper-only architecture.


## ORION Backtest Spec 001

Current artifact:

- ORION_BACKTEST_SPEC_001.md

Status: Backtest specification ready. No code implementation, no paper mode, and no live trading authorization exists.

Recommended first coded variant: 15-minute Opening Range Breakout on SPY and QQQ.

Required research features:

- 5-minute / 15-minute / 30-minute ORB comparison.
- VWAP, ATR, volume, previous day high/low, premarket high/low if available, and time-of-day inputs.
- Markov/regime research path.
- EMA ribbon / trend heatmap research path.
- Time-of-day, day-of-week, volatility, gap-size, opening range size, VWAP distance, long/short, and SPY/QQQ heatmaps.
- Equity curve, trade table, expectancy, profit factor, max drawdown, long/short breakdown, regime breakdown, EMA ribbon comparison, and ORB variant comparison.

Doctrine:

Indicators are not edge. Indicators are hypotheses. Every signal must prove value through out-of-sample testing.


## ORION v0.1 Prototype

Current folder:

- research/orion/

Files created:

- README.md
- orion_config.json
- data/README.md
- src/orion_backtest.py
- src/indicators.py
- src/regime.py
- src/reporting.py
- outputs/.gitkeep

Scope:

- 15-minute ORB backtester prototype.
- SPY and QQQ local CSV input only.
- No live data fetching.
- No broker connection.
- No paper trading.
- No money at risk.

The prototype exists to produce research outputs once valid local intraday CSV data is provided.

## v2.8 Research Scheduler Integration

Trading Research Corps now has scheduled research mission placeholders through the Research Scheduler.

Covered programs:

- ORION SPY/QQQ ORB Research
- WRAITH ICT/FVG Mechanical Rules Research
- PAIRFORGE Pairs Strategy Research
- VOLTA Options Strategy Research
- ATLAS Portfolio Strategy Research

This does not authorize live trading, broker connections, options execution, wallet execution, paper mode, or money at risk. The scheduler can produce reports and recommendations only.

## WRAITH-LSTM v0.1

Current folder:

- research/wraith_lstm/

Purpose:

- Experimental sequential crypto-market research module for liquidation, funding, open-interest, volume, and price sequences.
- Local CSV input only.
- LSTM is treated as a signal generator, not a trading system.
- No model can advance unless it beats simple baselines out-of-sample.

Inputs:

- timestamp
- open
- high
- low
- close
- volume
- long_liquidations
- short_liquidations
- open_interest
- funding_rate

Outputs:

- metrics.json
- predictions.csv
- feature_summary.csv
- evaluation_report.md

Safety boundary:

No live trading, exchange execution, wallet connection, broker connection, money at risk, or alpha claim is authorized.

## WRAITH-LSTM v0.2 - Data Contract + Local Validation

Current folder:

- research/wraith_lstm/

Completed:

- Added strict v0.2 CSV schema for real historical liquidation data.
- Added validate_data.py for required columns, missing values, timestamp ordering, duplicate rows, negative values, split integrity, and raw future-leakage checks.
- Added sample_data_format.csv as schema example only; it is not valid training evidence.
- Added DATA_PROVIDER_RESEARCH.md comparing Binance Futures, Bybit, OKX, CoinGlass, Hyblock, Laevitas, and CoinAPI-style vendors.
- Updated WRAITH-LSTM README with real data location, validation workflow, and no-training-without-real-data warning.

Current gate:

Real historical liquidation data must be sourced, provenance-documented, and validated before any model training result can be treated as research evidence.

Boundary:

No fake data, fake alpha, exchange connection, wallet connection, broker connection, live trading, paper trading, or money at risk is authorized.

## ORION v0.2 - First Historical Backtest Run

Current artifacts:

- ORION_BACKTEST_RUNBOOK.md
- research/orion/src/validate_data.py
- research/orion/data/README.md

Completed:

- Located the existing ORION 15-minute ORB backtester.
- Confirmed expected CSV schema: timestamp, open, high, low, close, volume.
- Added data ingestion instructions for SPY and QQQ intraday CSVs.
- Added ORION local data validator for schema, missing values, ordering, duplicate timestamps, negative OHLCV values, OHLC consistency, session coverage, and forbidden future/result columns.
- Prepared the first-run validation and backtest commands.

Current blocker:

Mission Commander must provide real SPY/QQQ intraday CSV data at research/orion/data/SPY.csv and research/orion/data/QQQ.csv.

Boundary:

No fake data, fake profitability, live trading, broker connection, orders, money at risk, paper mode, or strategy promotion is authorized.
