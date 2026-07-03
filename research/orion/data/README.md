# ORION Data

Place real historical SPY and QQQ intraday CSV files here.

Required files:

- SPY.csv
- QQQ.csv

Required schema:

```text
timestamp,open,high,low,close,volume
```

Rules:

- Use real historical intraday data only.
- Preferred granularity: 1-minute or 5-minute candles.
- Keep timestamps consistent with the configured regular session window.
- Do not add signal, entry, exit, PnL, target, prediction, or future-return columns to raw input.
- Do not use fake data.
- Run validate_data.py before the backtest.
