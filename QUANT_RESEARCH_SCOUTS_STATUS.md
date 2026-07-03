# Quant Research Scouts Status

Version: v2.8.0
Status: Research-only architecture with scheduled report queue
Date: July 2, 2026

## Mission

The Quant Research Scout Engine turns Trading Research Corps from static strategy documentation into a structured research intake system.

Quant Scouts collect, summarize, score, assign, and rank trading knowledge for:

- PAIRFORGE
- VOLTA
- ATLAS
- ORION
- WRAITH

## Doctrine

Quant Scouts research. Backtesters validate. Programs paper trade. Mission Commander approves live risk.

Trading programs are research programs until evidence proves expectancy.

Discretionary trading concepts must be converted into mechanical rules before THE GRID treats them as research signals.

## Safety Boundary

No live trading.
No broker connection.
No wallet connection.
No options execution.
No autonomous execution.
No money at risk.

This system records research candidates only.

## Scout Roles

1. GitHub Quant Scout - finds open-source frameworks, strategy examples, indicators, and backtest engines.
2. QuantConnect Scout - finds LEAN examples, strategy library references, community research, and docs.
3. Reddit Quant Scout - finds practical lessons, failure modes, and overfitting warnings through manual review.
4. Academic Paper Scout - finds papers on momentum, pairs trading, volatility, factors, and intraday edges.
5. Options Strategy Scout - finds options research, covered calls, cash-secured puts, IV rank, and volatility risk premium material.
6. ICT Mechanics Scout - finds attempts to define ICT, FVG, and liquidity concepts mechanically.
7. Data Vendor Scout - finds available datasets for stocks, options, crypto, intraday candles, and fundamentals.
8. Backtest Feasibility Scout - ranks strategies by how cleanly they can be tested.

## Workflow

Source Found -> Summarized -> Scored -> Assigned to Bot -> Backtest Plan -> Prototype Candidate -> Paper Test Candidate -> Rejected / Advanced

## Current Findings

ORION has the strongest first prototype candidate: SPY/QQQ Opening Range Breakout.

The first ORION candidate is recommended for prototype specification because:

- It can be expressed with objective entry and exit rules.
- It can be tested with intraday OHLCV data.
- It has clear alternatives to compare: 5-minute, 15-minute, and 30-minute opening ranges.
- It can use measurable filters such as VWAP, ATR, VIX, gap size, volume, and time-of-day.
- It can be rejected quickly if historical validation fails.

No profitability is claimed.

## Current Top Recommendations

1. Prototype ORION SPY/QQQ Opening Range Breakout first.
2. Use Backtrader or vectorbt for the first local backtest; keep LEAN as a future multi-asset/options framework.
3. Keep ATLAS ETF Momentum as the low-frequency fallback/control strategy.
4. Do not prototype VOLTA until options data cost and assignment modeling are solved.
5. Do not promote WRAITH concepts unless they are mechanical and baseline-tested.

## Records Added

- src/data/quantResearchScouts.ts
- src/pages/QuantResearchScouts.tsx
- docs/QUANT_RESEARCH_WORKFLOW.md
- QUANT_RESEARCH_TASK_001_ORION.md

## Validation Target

Run:

- npm run check
- npm run build

If sandbox blocks those commands, run the TypeScript compiler fallback and report the limitation.


## ORION Backtest Spec 001

Current artifact:

- ORION_BACKTEST_SPEC_001.md

ORION Backtest Spec 001 converts the first-signal research into mechanical backtest requirements. It defines 5-minute, 15-minute, and 30-minute ORB variants for SPY and QQQ, plus filters, regime research, EMA ribbon research, heatmaps, required outputs, and pass/fail criteria.

Recommended first coded variant: 15-minute ORB.

No live trading, broker connection, paper mode, or money at risk is authorized.

Doctrine added:

Indicators are not edge. Indicators are hypotheses. Every signal must prove value through out-of-sample testing.

## v2.8 Scheduler Integration

Research Scheduler now includes Quant Research Corps scheduled missions for ORION, WRAITH, PAIRFORGE, VOLTA, and ATLAS.

The scheduler is a report queue only. Quant Scouts may research on schedule, create reports, rank strategy candidates, and recommend experiments. Quant Scouts may not trade, connect brokers or wallets, execute options, start paper mode, spend money, or perform irreversible actions. Mission Commander approval remains required before any experiment, paper-mode discussion, or live-risk step.

## WRAITH-LSTM v0.1 Research Module

WRAITH now has an experimental sequential-model research module at research/wraith_lstm/.

The module supports local CSV-only feature engineering, chronological train/test splits, optional LSTM training when PyTorch is available, simple baseline comparison, and Markdown evaluation reports.

Doctrine added:

LSTM is a signal generator, not a trading system. No model can advance unless it beats simple baselines out-of-sample.

This does not authorize live trading, wallet execution, exchange connections, broker connections, paper mode, money at risk, or strategy promotion.

## WRAITH-LSTM v0.2 Data Gate

WRAITH-LSTM now has a strict local data contract and validation script.

Source of truth:

- research/wraith_lstm/README.md
- research/wraith_lstm/config.json
- research/wraith_lstm/src/validate_data.py
- research/wraith_lstm/data/sample_data_format.csv
- research/wraith_lstm/DATA_PROVIDER_RESEARCH.md

No model claim is valid until real historical liquidation data passes validation and beats simple baselines out-of-sample.
