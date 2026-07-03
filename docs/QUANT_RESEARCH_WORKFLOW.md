# Quant Research Workflow

Version: v2.7.0
Status: Research-only workflow

## Purpose

This workflow defines how THE GRID converts trading information into validated research candidates without creating live trading risk.

## Doctrine

Quant Scouts research. Backtesters validate. Programs paper trade. Mission Commander approves live risk.

## Operating Levels

### Level 1 - Scouts

Scouts discover sources and produce structured reports.

Examples:

- GitHub Quant Scout finds repositories and frameworks.
- QuantConnect Scout finds LEAN examples and indicator documentation.
- Academic Paper Scout finds papers and testable claims.
- Reddit Quant Scout gathers manual failure-mode warnings.

Scouts do not decide which strategy is best.

### Level 2 - Analysts

Analysts evaluate the collected research.

They identify:

- common ideas
- repeated rules
- mechanical definitions
- missing data
- overfitting risk
- backtest feasibility

### Level 3 - Engineers

Engineers receive a prototype specification.

Example:

- ORION Version A
- 15-minute Opening Range Breakout
- VWAP filter
- ATR stop
- exit by 11:00 AM or end of day

The engineer builds the backtest only after the specification exists.

### Level 4 - Validators

Validators test the strategy.

Required checks:

- historical backtest
- no lookahead
- fees and slippage
- train/test split
- walk-forward analysis
- baseline comparison
- parameter sensitivity
- drawdown review

### Level 5 - Paper Trader

Programs may paper trade only after validation.

Every paper trade must be logged.

No live trading is authorized at this level.

### Level 6 - Performance Officer

Performance review includes:

- win rate
- profit factor
- expectancy
- drawdown
- Sharpe / Sortino where appropriate
- exposure
- average hold time
- market regime
- sample size

### Level 7 - Promotion Board

A strategy can only become a live candidate after research, backtest, paper testing, and review.

Mission Commander approval is required before any live risk.

## Standard Scout Report Fields

- title
- source type
- target bot
- strategy family
- summary
- source link placeholder
- evidence quality
- mechanical rule clarity
- data requirements
- backtest difficulty
- overfitting risk
- implementation difficulty
- paper-test readiness
- recommendation
- confidence score

## Rejection Rules

Reject or park any strategy that:

- cannot be expressed mechanically
- depends on visual discretion
- lacks required data
- cannot model slippage or fees
- requires live execution before historical validation
- requires options execution before options data and assignment modeling exist
- claims profitability without independent backtest evidence

## ORION First Signal

The current first candidate is SPY/QQQ Opening Range Breakout.

The next engineering artifact should be a backtest specification, not live logic.
