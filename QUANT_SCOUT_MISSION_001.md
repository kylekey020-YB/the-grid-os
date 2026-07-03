# Quant Scout Mission 001 - Broad Strategy Discovery

Current Version: v2.6.0 Addendum

## Status

Research complete / prototype recommendation ready.

## Hard Rules

- No live trading.
- No broker connection.
- No options execution.
- No wallet execution.
- Research and backtest only.
- No strategy becomes a bot until historical validation proves expectancy.

## Doctrine

Trading programs are research programs until evidence proves expectancy.

Discretionary trading concepts must be converted into mechanical rules before THE GRID treats them as research signals.

## Sources Reviewed

Public source categories reviewed:

- GitHub/open-source frameworks: QuantConnect LEAN, Backtrader, vectorbt, Zipline Reloaded.
- QuantConnect/LEAN documentation and framework references.
- Pairs trading academic literature, including modern cautions about decayed profitability.
- Cboe options benchmark context for buy-write and put-write strategies.
- Momentum, factor, and risk-parity literature.
- Intraday ORB/VWAP research references and VWAP documentation.
- Public quant/options/trading forum concepts were treated as idea sources only, not proof.

Source links:

- QuantConnect LEAN: https://github.com/QuantConnect/Lean
- Backtrader: https://github.com/mementum/backtrader
- vectorbt: https://github.com/polakowo/vectorbt
- Zipline Reloaded: https://github.com/stefan-jansen/zipline-reloaded
- Pairs trading review: https://arxiv.org/abs/2010.01157
- Pairs trading graph matching: https://arxiv.org/abs/2403.07998
- Cboe BXM BuyWrite Index: https://www.cboe.com/us/indices/dashboard/bxm/
- Cboe PUT PutWrite Index: https://www.cboe.com/us/indices/dashboard/put/
- QuantConnect VWAP indicator: https://www.quantconnect.com/docs/v2/writing-algorithms/indicators/supported-indicators/volume-weighted-average-price-indicator
- Momentum/factor reference context: https://en.wikipedia.org/wiki/Momentum_investing and https://en.wikipedia.org/wiki/Fama%E2%80%93French_three-factor_model

## Recommended First Bot

ORION.

Reason:

ORION ranks first because SPY/QQQ intraday strategies are cleanly backtestable, have accessible minute-data requirements, controllable risk, no options-chain dependency, no short-borrow dependency, and a fast path to paper testing.

## Recommended First Signal

SPY/QQQ Opening Range Breakout.

Initial test:

- 5-minute and 15-minute opening range.
- Long above opening range high.
- Short below opening range low.
- ATR/VIX filter.
- Explicit slippage model.
- End-of-day flat rule.
- No overnight exposure.
- No options or 0DTE execution.

## Top 20 Overall Strategies

1. ORION - SPY/QQQ Opening Range Breakout - Prototype.
2. ATLAS - ETF Momentum Rotation - Prototype.
3. ORION - VWAP Trend Continuation - Prototype.
4. ATLAS - Factor ETF Core-Satellite - Prototype.
5. ORION - Gap Fill / Gap Continuation - Research More.
6. PAIRFORGE - Cointegrated ETF Pairs - Research More.
7. WRAITH - Mechanical Prior High/Low Liquidity Sweep - Research More.
8. ORION - Premarket High/Low Break - Research More.
9. ATLAS - Risk Parity ETF Allocation - Research More.
10. VOLTA - Covered Call Overlay - Research More.
11. PAIRFORGE - Distance/Z-Score ETF Spread - Research More.
12. ORION - VWAP Reversion - Research More.
13. VOLTA - Cash-Secured PutWrite - Research More.
14. ATLAS - Dividend Growth Screen - Research More.
15. VOLTA - IV Rank Defined-Risk Credit Spread - Research More.
16. WRAITH - Fair Value Gap Reclaim - Research More.
17. ORION - Time-of-Day Edge - Research More.
18. PAIRFORGE - Graph-Matched Pair Portfolio - Research More.
19. VOLTA - Earnings IV Crush Defined-Risk - Research More.
20. WRAITH - Order Block / Breaker Block - Reject until mechanically defined.

## Top 5 Per Bot

### PAIRFORGE

1. Cointegrated ETF Pairs.
2. Distance/Z-Score ETF Spread.
3. Graph-Matched Pair Portfolio.
4. Kalman Hedge Ratio ETF Pair.
5. Sector-Neutral Relative Value Basket.

PAIRFORGE should not be first because pairs trading has more model risk, short/borrow assumptions, pair-selection overfitting, and modern evidence of edge decay.

### VOLTA

1. Covered Call Overlay.
2. Cash-Secured PutWrite.
3. IV Rank Defined-Risk Credit Spread.
4. Earnings IV Crush Defined-Risk.
5. Protective Collar Research.

VOLTA also tracks Long Straddle Event Study and 0DTE Risk Study as lower-priority research-only concepts. VOLTA should not be first because options chain data, bid/ask modeling, assignment risk, liquidity filters, and capital requirements must be solved first.

### ATLAS

1. ETF Momentum Rotation.
2. Factor ETF Core-Satellite.
3. Risk Parity ETF Allocation.
4. Dividend Growth Screen.
5. Core 60/40 Benchmark With Drawdown Guard.

ATLAS also tracks Quality/Low-Volatility ETF Tilt as a reserve candidate. ATLAS is the best low-complexity backup if intraday data is unavailable. It has clean daily data and strong literature context, but slower feedback than ORION.

### ORION

1. SPY/QQQ Opening Range Breakout.
2. VWAP Trend Continuation.
3. Gap Fill / Gap Continuation.
4. Premarket High/Low Break.
5. VWAP Reversion.

ORION should be first because it is focused, liquid, mechanically definable, and fast to backtest.

### WRAITH

1. Mechanical Prior High/Low Liquidity Sweep.
2. Fair Value Gap Reclaim.
3. Opening Range Liquidity Sweep.
4. Displacement Candle Continuation.
5. Order Block / Breaker Block - rejected until mechanically defined.

WRAITH may become valuable, but it is not first. ICT/FVG/liquidity concepts are discretionary and must be reduced to code-definable criteria before research signals are accepted.

## Required Data Plan

1. SPY and QQQ 1m/5m OHLCV with regular-hours and premarket session tags.
2. VWAP, volume, ATR, previous day high/low, premarket high/low, opening range high/low.
3. VIX daily or intraday proxy.
4. Market breadth if available.
5. Economic calendar / FOMC flags if available.
6. Options chain data only after VOLTA receives separate data-cost approval.
7. Crypto intraday data only after WRAITH mechanical rules pass on SPY/QQQ first.

## Backtest Plan

1. Start with ORION Opening Range Breakout on SPY and QQQ.
2. Test 5-minute and 15-minute opening ranges.
3. Use 2018-present if minute data is available.
4. Split into in-sample, validation, and walk-forward periods.
5. Model slippage, spread, commissions, max daily loss, EOD flat exits, and event-day exclusions.
6. Compare every rule against buy-and-hold, random-entry baseline, and no-trade baseline.
7. Only after ORION baseline is built, replicate ATLAS ETF momentum as the lower-frequency control strategy.

## Decision

Recommended first bot to prototype: ORION.

Recommended first signal to test: SPY/QQQ Opening Range Breakout.

No live trading is authorized.
