# WRAITH-LSTM Data

Place local CSV files here for offline research.

Required v0.2 columns:

```text
timestamp,symbol,open,high,low,close,volume,long_liquidations_usd,short_liquidations_usd,long_liquidations_count,short_liquidations_count,largest_long_liquidation_usd,largest_short_liquidation_usd,open_interest,funding_rate
```

Optional columns:

```text
vwap,source,provider,exchange
```

Files:

- sample_data_format.csv: dummy schema example only. Do not train on it.

Rules:

- Use local files only.
- Validate data before training.
- Do not fetch live exchange data from this module.
- Do not store API keys, account exports, wallet records, or secrets here.
- Keep raw exchange/account data out of the repository unless it has been sanitized and explicitly approved.
