# WRAITH-LSTM v0.2 - Sequential Liquidation Model

Status: experimental research only.

WRAITH-LSTM is a local CSV-only research module for studying whether sequential crypto market data can produce useful signal candidates from price, volume, liquidation, open-interest, and funding sequences.

Hard boundaries:

- No live trading.
- No exchange connection.
- No wallet connection.
- No broker connection.
- No orders.
- No money at risk.
- No profitability or alpha claims without out-of-sample evidence.

## Doctrine

LSTM is a signal generator, not a trading system.

No model can advance unless it beats simple baselines out-of-sample.

No model training is valid until real historical data is present, source provenance is documented, and the data passes local validation.

## Data Location

Real historical CSV files should go in:

research/wraith_lstm/data/

Do not place API keys, account exports, wallet records, exchange credentials, or secrets in this folder.

## Strict CSV Schema

WRAITH-LSTM v0.2 requires this exact local CSV schema:

```text
timestamp,symbol,open,high,low,close,volume,long_liquidations_usd,short_liquidations_usd,long_liquidations_count,short_liquidations_count,largest_long_liquidation_usd,largest_short_liquidation_usd,open_interest,funding_rate
```

Column notes:

- timestamp: ISO-like timestamp, sorted strictly increasing per symbol.
- symbol: market symbol such as BTCUSDT or ETHUSDT.
- OHLCV: candle data for the configured interval.
- long_liquidations_usd / short_liquidations_usd: aggregate liquidation value for the interval.
- long_liquidations_count / short_liquidations_count: number of liquidation events for the interval.
- largest_long_liquidation_usd / largest_short_liquidation_usd: largest liquidation event in the interval.
- open_interest: open interest at or near the interval timestamp.
- funding_rate: funding rate at or near the interval timestamp. This may be negative.

Optional columns that may be present but are not required:

```text
vwap,source,provider,exchange
```

Raw data must not include target or prediction columns such as next_15m_direction, predicted, or probability. Those are generated later by the research pipeline.

## Schema Example Only

The file below is a dummy schema example only:

research/wraith_lstm/data/sample_data_format.csv

Do not use it for training, research conclusions, metrics, model claims, or alpha claims.

## Validate Data

Run validation before any training attempt:

```bash
python research/wraith_lstm/src/validate_data.py --input research/wraith_lstm/data/YOUR_FILE.csv
```

The validator checks:

- required columns
- missing values
- timestamp ordering per symbol
- duplicate symbol/timestamp rows
- negative values where they cannot make sense
- OHLC consistency
- train/validation/test split integrity
- raw future-leakage columns

## Train / Evaluate

Help commands:

```bash
python research/wraith_lstm/src/validate_data.py --help
python research/wraith_lstm/src/train.py --help
python research/wraith_lstm/src/evaluate.py --help
```

Dry run after validation:

```bash
python research/wraith_lstm/src/train.py --input research/wraith_lstm/data/YOUR_FILE.csv --dry-run
```

Training attempt after validation:

```bash
python research/wraith_lstm/src/train.py --input research/wraith_lstm/data/YOUR_FILE.csv --target next_15m_direction
python research/wraith_lstm/src/evaluate.py --predictions research/wraith_lstm/outputs/predictions.csv
```

## Outputs

Outputs are written to research/wraith_lstm/outputs/.

- metrics.json
- predictions.csv
- feature_summary.csv
- evaluation_report.md
- data_validation_report.json

If PyTorch or other optional ML libraries are unavailable, the scripts should explain the missing dependency instead of pretending that a model was trained.

## Provider Research

See:

research/wraith_lstm/DATA_PROVIDER_RESEARCH.md

No provider is approved yet. WRAITH-LSTM remains parked until real historical liquidation data is sourced, validated, and reviewed.
