# ORION Backtest Spec 001

Version: v2.7.2
Status: Backtest specification ready / no code implementation yet
Date: July 2, 2026

## Objective

Turn the SPY/QQQ Opening Range Breakout research into precise mechanical rules that can be coded into a historical backtest.

This specification does not authorize live trading, broker connection, paper trading, options execution, autonomous execution, or money at risk.

## Doctrine

Trading programs are research programs until evidence proves expectancy.

Quant Scouts research. Backtesters validate. Programs paper trade. Mission Commander approves live risk.

Indicators are not edge. Indicators are hypotheses. Every signal must prove value through out-of-sample testing.

## Markets

Test each market independently:

- SPY
- QQQ

Do not assume that results from QQQ transfer to SPY or that results from SPY transfer to QQQ.

## Required Indicators and Fields

Minimum required data:

- 1-minute OHLCV bars preferred.
- 5-minute OHLCV bars acceptable only for first rough feasibility checks.
- Regular trading hours session calendar.
- Previous day high.
- Previous day low.
- Previous day close.
- Intraday VWAP.
- ATR.
- Volume.
- Time of day.
- Opening range high and low.
- Premarket high and low if available.
- Gap size and direction.
- FOMC/news day placeholder if available.

Research indicators:

- EMA 8.
- EMA 13.
- EMA 21.
- EMA 34.
- EMA 55.
- EMA ribbon state.
- Regime label.
- VIX placeholder if available.

## Shared Mechanical Definitions

Regular trading hours are 09:30:00 to 16:00:00 Eastern.

Opening range high is the highest high inside the selected opening range window.

Opening range low is the lowest low inside the selected opening range window.

Opening range midpoint is (opening_range_high + opening_range_low) / 2.

Opening range size is opening_range_high - opening_range_low.

Gap percentage is (session_open - previous_day_close) / previous_day_close * 100.

VWAP distance percentage is (close - vwap) / vwap * 100.

ATR should be calculated from completed bars only. Daily ATR may be used for regime classification; intraday ATR may be used for stops and filters.

No signal may use data from bars that have not closed yet.

## Variant 1 - 5-Minute ORB

### Opening Range

Use only regular-hours bars from 09:30:00 through 09:34:59 Eastern.

The first eligible entry check occurs at 09:35:00 Eastern or after the first bar following the range has closed, depending on bar resolution.

### Long Entry

Enter long when all required conditions are true:

1. Current price trades above the 5-minute opening range high.
2. The opening range window has fully closed.
3. No position is already open for the symbol.
4. The entry occurs before the configured latest-entry cutoff.
5. Enabled filters pass.

Trigger buffer test values:

- no buffer
- 0.02% above opening range high
- 0.05% above opening range high
- one tick / minimum practical price increment placeholder

### Short Entry

Enter short when all required conditions are true:

1. Current price trades below the 5-minute opening range low.
2. The opening range window has fully closed.
3. No position is already open for the symbol.
4. The entry occurs before the configured latest-entry cutoff.
5. Enabled filters pass.

Trigger buffer test values:

- no buffer
- 0.02% below opening range low
- 0.05% below opening range low
- one tick / minimum practical price increment placeholder

### Research Purpose

The 5-minute variant should show whether early momentum has exploitable follow-through. It will likely have the highest sample count and the highest false-breakout risk.

## Variant 2 - 15-Minute ORB

### Opening Range

Use only regular-hours bars from 09:30:00 through 09:44:59 Eastern.

The first eligible entry check occurs at 09:45:00 Eastern or after the first bar following the range has closed, depending on bar resolution.

### Long Entry

Enter long when all required conditions are true:

1. Current price trades above the 15-minute opening range high.
2. The opening range window has fully closed.
3. No position is already open for the symbol.
4. The entry occurs before the configured latest-entry cutoff.
5. Enabled filters pass.

### Short Entry

Enter short when all required conditions are true:

1. Current price trades below the 15-minute opening range low.
2. The opening range window has fully closed.
3. No position is already open for the symbol.
4. The entry occurs before the configured latest-entry cutoff.
5. Enabled filters pass.

### Research Purpose

The 15-minute variant is the recommended first coded version. It reduces some first-candle noise while keeping enough signal frequency for practical testing.

## Variant 3 - 30-Minute ORB

### Opening Range

Use only regular-hours bars from 09:30:00 through 09:59:59 Eastern.

The first eligible entry check occurs at 10:00:00 Eastern or after the first bar following the range has closed, depending on bar resolution.

### Long Entry

Enter long when all required conditions are true:

1. Current price trades above the 30-minute opening range high.
2. The opening range window has fully closed.
3. No position is already open for the symbol.
4. The entry occurs before the configured latest-entry cutoff.
5. Enabled filters pass.

### Short Entry

Enter short when all required conditions are true:

1. Current price trades below the 30-minute opening range low.
2. The opening range window has fully closed.
3. No position is already open for the symbol.
4. The entry occurs before the configured latest-entry cutoff.
5. Enabled filters pass.

### Research Purpose

The 30-minute variant should test whether waiting for more structure improves quality. It may reduce false starts but also reduce sample count and enter too late on trend days.

## Shared Exit Logic

Every backtest must test exits as independent configurations rather than selecting winners after the fact.

### Stop Loss Candidates

1. Opposite side of opening range:
   - Long stop: opening range low.
   - Short stop: opening range high.

2. Opening range midpoint invalidation:
   - Long stop: opening range midpoint after entry.
   - Short stop: opening range midpoint after entry.

3. ATR stop:
   - Test 0.5x ATR.
   - Test 1.0x ATR.
   - Test 1.5x ATR.

4. Fixed percentage stop:
   - Test 0.25%.
   - Test 0.50%.
   - Test 0.75%.

### Take Profit Candidates

- 1R.
- 1.5R.
- 2R.
- 3R exploratory only.
- Previous day high/low target.
- Premarket high/low target if available.
- No fixed target; exit by trailing stop or end of day.

### Trailing Stop Candidates

- Move stop to breakeven after 1R.
- Trail by 0.5x ATR after 1R.
- Trail by 1.0x ATR after 1R.
- Exit long if price closes below VWAP after entry.
- Exit short if price closes above VWAP after entry.
- EMA ribbon trailing invalidation:
  - Exit long if 8 EMA crosses below 21 EMA after entry.
  - Exit short if 8 EMA crosses above 21 EMA after entry.

### Time Stop Candidates

- Exit at 10:30 Eastern.
- Exit at 11:00 Eastern.
- Exit at 12:00 Eastern.
- Exit at 14:00 Eastern.
- Exit at 15:55 Eastern.
- Reject new entries after latest-entry cutoff.

Initial latest-entry cutoffs to test:

- 10:30 Eastern.
- 11:00 Eastern.
- 12:00 Eastern.

### End-of-Day Exit

All positions must be closed before market close.

Default forced flat time: 15:55 Eastern.

No overnight exposure is allowed in ORION Backtest Spec 001.

## Filters To Test

Each filter must be tested in two modes:

- disabled baseline
- enabled filter

No filter may be assumed beneficial before out-of-sample validation.

### VWAP Confirmation

Long filter:

- Current close must be above VWAP.
- Optional stricter test: entry bar close above VWAP and opening range high.

Short filter:

- Current close must be below VWAP.
- Optional stricter test: entry bar close below VWAP and opening range low.

### ATR Regime Filter

Classify ATR regime using completed daily or intraday data only.

Test buckets:

- low ATR regime
- normal ATR regime
- high ATR regime

Example rule placeholder:

- Low volatility: ATR percentile below 25th percentile.
- Normal volatility: ATR percentile between 25th and 75th percentile.
- High volatility: ATR percentile above 75th percentile.

### Gap Direction Filter

Gap-up session:

- Test long-only continuation.
- Test short-only fade.
- Test both directions.

Gap-down session:

- Test short-only continuation.
- Test long-only fade.
- Test both directions.

Flat open:

- Test both directions.

Gap thresholds:

- less than 0.25%.
- 0.25% to 0.75%.
- greater than 0.75%.

### First Candle Range Filter

Purpose: avoid sessions where the first candle is abnormally small or abnormally large.

Test:

- first candle range below 20th percentile: avoid / allow comparison.
- first candle range between 20th and 80th percentile: allow.
- first candle range above 80th percentile: avoid / allow comparison.

### FOMC / News Day Placeholder

If a clean economic calendar exists, tag sessions with major scheduled events.

Test:

- include all days.
- exclude FOMC days.
- exclude CPI days.
- exclude major scheduled-event days.

If no reliable calendar exists, preserve the placeholder and do not fabricate event tags.

## Markov / Regime Signal Research

Purpose: classify market states before ORION takes trades.

Research only. Do not assume edge.

Candidate regimes:

- Trend up.
- Trend down.
- Chop / mean reversion.
- High volatility.
- Low volatility.
- Gap-and-go.
- Gap-fade.

Possible inputs:

- returns.
- volatility.
- ATR.
- VWAP distance.
- opening range size.
- volume regime.
- gap direction.
- previous day range.
- VIX placeholder if data is available.

Tests:

1. ORB with no regime filter.
2. ORB with simple volatility regime.
3. ORB with trend/chop regime.
4. ORB with Markov regime model if feasible.

Rule:

If Markov adds complexity without improving out-of-sample expectancy, reject it.

Initial implementation should begin with simple regimes before Markov.

## EMA Ribbon / Trend Heatmap

Candidate EMAs:

- 8 EMA.
- 13 EMA.
- 21 EMA.
- 34 EMA.
- 55 EMA.

### Visual Behavior

Bullish ribbon:

- 8 EMA > 13 EMA > 21 EMA > 34 EMA > 55 EMA.
- Fill green between EMAs in visual output.

Bearish ribbon:

- 8 EMA < 13 EMA < 21 EMA < 34 EMA < 55 EMA.
- Fill red between EMAs in visual output.

Neutral/compressed ribbon:

- EMA order is mixed, or the distance between fast and slow EMAs is below the compression threshold.
- Fill gray in visual output.

### Signal Research

Test:

- ORB long only when EMA ribbon is bullish.
- ORB short only when EMA ribbon is bearish.
- Avoid trades when EMA ribbon is compressed/choppy.
- EMA slope confirmation.
- Price above/below VWAP plus EMA ribbon alignment.

Compression placeholder:

- abs(EMA8 - EMA55) / close below threshold.
- Test thresholds: 0.05%, 0.10%, 0.20%.

## Heatmaps Required

Purpose: find where ORION actually has edge instead of assuming all sessions are equal.

Required heatmaps:

- Time-of-day performance heatmap.
- Day-of-week performance heatmap.
- Volatility regime heatmap.
- Gap-size heatmap.
- Opening range size heatmap.
- VWAP distance heatmap.
- Long vs short performance heatmap.
- SPY vs QQQ comparison heatmap.

Each heatmap should show at minimum:

- trade count.
- expectancy.
- win rate.
- profit factor.
- max drawdown contribution if feasible.

## Backtest Design

### Data Timeframe

Preferred historical span:

- 2018 through latest available completed trading day.

Minimum acceptable research span:

- 2020 through latest available completed trading day.

Data resolution:

- 1-minute OHLCV preferred.
- 5-minute OHLCV acceptable only if 1-minute data is unavailable.

### Train/Test Split

Use time-series splits only. Do not randomize bars or trades.

Initial split:

- In-sample: 2018-2021.
- Validation: 2022-2023.
- Out-of-sample: 2024-latest completed trading day.

If data starts in 2020:

- In-sample: 2020-2021.
- Validation: 2022-2023.
- Out-of-sample: 2024-latest completed trading day.

### Walk-Forward Test

Run rolling train/test windows:

- train 12 months, test next 3 months.
- train 24 months, test next 6 months.

Record whether performance decays across windows.

### No Lookahead Rules

- Opening range values are not known until the opening range window closes.
- VWAP uses only completed current and prior intraday bars.
- ATR uses only prior completed bars or prior completed sessions.
- Previous day high/low uses only the prior completed session.
- Premarket high/low uses only bars available before regular-hours entry.
- Regime labels must be calculated only from information available before entry.
- Heatmaps must be post-analysis only and cannot influence in-sample optimization without separate validation.

### Fees and Slippage

Test at least three friction assumptions:

- optimistic: 1 basis point per side.
- baseline: 2 basis points per side.
- conservative: 5 basis points per side.

Also test fixed slippage placeholders:

- $0.01 per share.
- $0.02 per share.
- $0.05 per share.

Commissions may be zero for modern ETF assumptions, but the model must still record the assumption.

### Position Sizing

Research default:

- fixed notional position per trade.
- no compounding in first evaluation.
- one open position per symbol.
- no simultaneous SPY and QQQ exposure limit should be tested separately.

Risk model placeholder:

- risk 0.25% of research equity per trade.
- risk 0.50% of research equity per trade.
- fixed notional comparison.

### Sensitivity Analysis

Run sensitivity across:

- 5m / 15m / 30m opening range.
- trigger buffer.
- stop type.
- take-profit multiple.
- time stop.
- latest-entry cutoff.
- VWAP filter on/off.
- ATR regime filter on/off.
- EMA ribbon filter on/off.
- gap filter on/off.
- friction assumptions.

Reject any configuration that only works in one narrow parameter combination.

## Required Backtest Outputs

ORION backtest must output:

- equity curve.
- trade table.
- win rate.
- expectancy.
- profit factor.
- max drawdown.
- average winner.
- average loser.
- long/short breakdown.
- time-of-day breakdown.
- heatmaps.
- regime breakdown.
- EMA ribbon filter comparison.
- ORB variant comparison: 5m / 15m / 30m.

Trade table must include at minimum:

- symbol.
- date.
- entry time.
- exit time.
- direction.
- ORB variant.
- opening range high.
- opening range low.
- entry price.
- stop price.
- target price.
- exit price.
- exit reason.
- gross PnL.
- net PnL after fees/slippage.
- R multiple.
- VWAP state.
- EMA ribbon state.
- regime label.
- gap bucket.
- ATR bucket.
- notes / rule flags.

## Pass / Fail Criteria

ORION must show all of the following before moving from specification to prototype review:

1. Rules are fully mechanical and code-definable.
2. Data requirements are available and documented.
3. Backtest can run without lookahead.
4. Out-of-sample expectancy is positive after fees and slippage.
5. Out-of-sample profit factor is greater than 1.15, subject to sensitivity review.
6. Maximum drawdown remains inside a predefined research limit.
7. Strategy beats random-entry, no-filter ORB, and buy-and-hold/session baseline comparisons where appropriate.
8. Results do not rely on one narrow parameter set.
9. SPY and QQQ are evaluated separately.
10. Long and short performance are evaluated separately.
11. Heatmaps identify where the edge appears and where it disappears.
12. Regime and EMA filters demonstrate value out of sample or are rejected.
13. Markov/regime complexity is rejected if it does not improve out-of-sample expectancy.
14. Every unknown is documented.

Fail ORION if:

- net expectancy is negative out of sample.
- results collapse after realistic friction.
- performance appears only in one small period or parameter combination.
- short side or long side claims are blended to hide weakness.
- regime filters add complexity without durable improvement.
- the strategy cannot beat simple baselines after costs.

## Recommendation

Code the 15-minute ORB first.

Reason:

- The 5-minute variant is likely noisier and more slippage-sensitive.
- The 30-minute variant may enter too late and reduce sample count.
- The 15-minute variant is mechanically simple, common enough to benchmark, and balanced between early signal and reduced opening noise.

Initial coded version should include:

- SPY and QQQ.
- Long and short tested separately.
- 15-minute opening range.
- VWAP filter on/off.
- ATR regime filter on/off.
- EMA ribbon filter on/off.
- opposite-side stop and ATR stop comparison.
- 1R, 1.5R, 2R, time stop, and end-of-day exits.
- heatmap and regime output tables.

No live trading. No broker connection. No paper trading. No money at risk.


## Implementation Status - ORION v0.1

Prototype folder created:

- research/orion/README.md
- research/orion/orion_config.json
- research/orion/data/README.md
- research/orion/src/orion_backtest.py
- research/orion/src/indicators.py
- research/orion/src/regime.py
- research/orion/src/reporting.py
- research/orion/outputs/.gitkeep

Implemented scope:

- 15-minute ORB only.
- SPY and QQQ configured as local CSV inputs.
- Local CSV input only; no paid or live data fetching.
- Opening range from 09:30 through 09:44:59 Eastern.
- Long breakout above opening range high.
- Short breakdown below opening range low.
- Optional VWAP filter.
- Optional EMA ribbon filter.
- Optional ATR volatility filter.
- Optional time stop.
- End-of-day flat.
- Trade log, summary, equity curve, time-of-day heatmap, day-of-week heatmap, regime breakdown, and EMA filter comparison outputs.

No-lookahead implementation note:

- Signals are evaluated only after a bar has completed.
- Entries occur on the next bar open after the completed signal bar.
- Opening range values are not available until the opening range window has closed.
- Filter values are read from completed signal bars only.

Not implemented yet:

- 5-minute ORB.
- 30-minute ORB.
- True Markov model.
- Live data ingestion.
- Paper trading.
- Broker integration.
