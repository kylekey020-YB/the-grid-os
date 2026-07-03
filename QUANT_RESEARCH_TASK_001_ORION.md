# Quant Research Task 001 - ORION First Signal

Version: v2.7.0
Status: Prototype specification recommended
Date: July 2, 2026

## Focus

ORION only.

Research target:

SPY / QQQ Opening Range Breakout.

## Hard Rule

Do not claim profitability without historical test evidence.

This task recommends a prototype backtest. It does not recommend live trading, broker connection, options execution, or paper mode yet.

## Sources Reviewed

- SSRN: Can Day Trading Really Be Profitable? Evidence of Sustainable Long-Term Profits from Opening Range Breakout Day Trading Strategy vs. Benchmark in the US Stock Market - https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4416622
- SSRN: Beat the Market: An Effective Intraday Momentum Strategy for S&P500 ETF (SPY) - https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4824172
- QuantConnect VWAP indicator documentation - https://www.quantconnect.com/docs/v2/writing-algorithms/indicators/supported-indicators/volume-weighted-average-price-indicator
- QuantConnect LEAN - https://github.com/QuantConnect/Lean
- Backtrader - https://github.com/mementum/backtrader
- vectorbt - https://github.com/polakowo/vectorbt

Reddit discussion review remains manual and incomplete. Reddit is treated as a source for failure modes and trader warnings, not proof.

## Research Summary

Opening Range Breakout is suitable as ORION's first signal candidate because it can be made mechanical:

- define the opening range window
- record the high and low of that range
- enter on a break above or below the range
- define stop, target, and time-based exits
- test SPY and QQQ separately
- compare filters and time windows

Existing public research is a lead, not proof for THE GRID. ORION must independently test rules, costs, slippage, and regime behavior.

## Common Parameter Ranges To Test

Opening range windows:

- first 5 minutes
- first 15 minutes
- first 30 minutes

Markets:

- SPY
- QQQ

Directions:

- long-only breakout above opening range high
- short-only breakdown below opening range low
- two-sided breakout model

## Mechanical Entry Candidates

### Candidate A - 15-Minute ORB With VWAP Alignment

Entry:

- Wait until the first 15 minutes of regular trading hours complete.
- Define opening range high and opening range low.
- Long when price breaks above the opening range high and price is above VWAP.
- Short when price breaks below the opening range low and price is below VWAP.

Exit:

- stop at opposite side of opening range or ATR stop
- exit by end of day
- optional time stop at 11:00 AM if no follow-through

### Candidate B - 5-Minute ORB With ATR Stop

Entry:

- Define first 5-minute high and low.
- Enter on confirmed break of range.
- Require range size above minimum ATR threshold to avoid noise.

Exit:

- stop at 0.5x to 1.0x ATR or opposite side of range
- take profit at 1R, 1.5R, or 2R
- exit by 11:00 AM or end of day

### Candidate C - 30-Minute ORB With Trend-Day Filter

Entry:

- Define first 30-minute range.
- Enter in the direction of range break only if price, VWAP, and opening range slope support continuation.

Exit:

- stop at opposite side of range
- trailing stop after 1R
- end-of-day exit

## Stop Loss Candidates

- opposite side of opening range
- 0.5x ATR
- 1.0x ATR
- fixed percent stop such as 0.3%, 0.5%, or 0.75%
- VWAP invalidation

## Take Profit Candidates

- 1R
- 1.5R
- 2R
- trailing stop after 1R
- no fixed take-profit, end-of-day exit only

## Time Stop Candidates

- exit at 10:30 AM Eastern
- exit at 11:00 AM Eastern
- exit at 12:00 PM Eastern
- exit end of day
- reject entry if breakout occurs too late in the session

## Filters To Test

VWAP:

- long only when price is above VWAP
- short only when price is below VWAP
- reject trades that cross back through VWAP immediately after entry

ATR:

- require minimum ATR to avoid dead sessions
- reject extreme ATR days if whipsaw risk rises
- size stop by ATR rather than fixed cents

VIX:

- test low, normal, and high VIX regimes separately
- avoid assuming high volatility helps without evidence

Gap and trend-day filters:

- previous close to open gap size
- prior day trend
- premarket high/low context if reliable data exists
- exclude major scheduled event days at first if calendar data is unavailable

Volume:

- require early volume above recent average
- compare low-volume days against normal-volume days

## Failure Modes

- false breakouts in choppy sessions
- range too small during quiet opens
- large gap exhaustion
- news/FOMC/CPI whipsaw
- overfitting range length and filters
- lookahead contamination when opening range high/low is calculated incorrectly
- unrealistic fills around the breakout trigger
- assuming QQQ behavior transfers to SPY without separate testing

## SPY vs QQQ

Test both.

QQQ may offer more movement and more false breakouts. SPY may offer smoother liquidity and lower volatility. THE GRID should not assume a winner before historical testing.

## Data Needed

Minimum:

- 1-minute or 5-minute OHLCV for SPY and QQQ
- regular trading hours calendar
- spread/slippage assumptions
- transaction cost model

Preferred:

- premarket OHLCV
- VWAP
- ATR
- VIX daily data
- economic calendar flags
- volume averages

## Backtest Design

1. Build a clean intraday dataset.
2. Split regular trading hours from premarket.
3. Calculate opening range only after the selected window closes.
4. Test 5-minute, 15-minute, and 30-minute ranges.
5. Test SPY and QQQ separately.
6. Test long-only, short-only, and two-sided versions.
7. Apply slippage, commissions, and spread assumptions.
8. Compare against random-entry, buy-and-hold, and no-filter ORB baselines.
9. Use train/test or walk-forward split.
10. Run sensitivity analysis across range length, stop, target, and filter choices.
11. Reject if performance depends on one narrow parameter combination.

## Paper Test Plan

Paper testing is not authorized yet.

If historical backtest passes:

1. Run a dry-run signal log for 30 market days.
2. Record every signal, skipped trade, reason, and expected execution price.
3. Review after at least 50 signals or the 30-day window, whichever comes later.
4. If still viable, request Mission Commander approval for paper mode.
5. Paper mode should target 100+ paper trades for first review and 300+ logged trades before any live-risk promotion discussion.

## Recommendation

Prototype.

Build an ORION Opening Range Breakout backtest specification first.

Recommended first version:

- Market: SPY and QQQ
- Range: 15-minute opening range
- Direction: long and short tested separately, plus two-sided comparison
- Filter: VWAP alignment
- Stop: opposite side of opening range and ATR stop comparison
- Exit: 11:00 AM time stop, end-of-day exit, and 1R/2R comparison

No live trading. No paper mode. No profitability claim.
