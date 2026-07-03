# Quant Research Scouts Status

Version: v2.7.0
Status: Research-only architecture
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
