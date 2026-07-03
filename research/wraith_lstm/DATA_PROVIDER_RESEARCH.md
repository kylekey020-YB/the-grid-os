# WRAITH-LSTM Data Provider Research

Status: research note only.

Purpose: compare possible historical liquidation-data sources before THE GRID commits to a data provider for WRAITH-LSTM research.

No provider is approved yet. No API keys, paid subscriptions, exchange connections, wallet connections, or live feeds are authorized by this document.

## Required Data Contract

WRAITH-LSTM v0.2 requires the following local CSV columns:

- timestamp
- symbol
- open
- high
- low
- close
- volume
- long_liquidations_usd
- short_liquidations_usd
- long_liquidations_count
- short_liquidations_count
- largest_long_liquidation_usd
- largest_short_liquidation_usd
- open_interest
- funding_rate

A provider is only useful if it can support this schema directly or through a documented transformation.

## Provider Comparison

| Provider | Historical liquidation availability | Cost | API quality | Symbols supported | Granularity | Reliability | Legal/API restrictions | Current assessment |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Binance Futures | Candidate exchange-native source; exact public liquidation endpoints, historical retention, and completeness must be verified before use. | Public API access may be free, but historical depth may be limited. | Strong exchange API ecosystem. | Binance futures symbols. | Event-level or query-window dependent; needs verification. | High exchange reliability, but exchange APIs are not research-grade archival vendors. | Must follow Binance API terms, rate limits, jurisdiction restrictions, and data-use rules. | Useful for spot checks and possible collection going forward; not yet approved as historical source. |
| Bybit | Official public WebSocket all-liquidation stream pushes liquidations as they occur for USDT, USDC, and inverse contracts. Public historical backfill remains unresolved. | Public stream appears available, paid archival history not confirmed from this source. | Official docs and SDK examples are available. | Bybit contract symbols such as BTCUSDT and other derivatives. | Stream push frequency documented as 500ms. | Good for forward collection; not enough alone for historical backtest without archival storage. | Must follow Bybit API terms, rate limits, and public-stream rules. | Good candidate for future event capture; not sufficient alone for historical model training unless historical data can be sourced. |
| OKX | Candidate exchange-native source; exact public liquidation endpoints, historical retention, symbol coverage, and completeness require verification. | Public API access may be free; archival reliability and premium access need verification. | Mature exchange API. | OKX derivatives/instruments. | Endpoint-dependent; needs verification. | Strong exchange reliability, but retention limitations likely matter. | Must follow OKX API terms, rate limits, and regional restrictions. | Candidate for spot checks and forward collection; not yet approved for historical research. |
| CoinGlass | API docs expose futures market fields including liquidation USD windows, long/short liquidation USD fields, open interest, funding, and supported exchange filters. Some endpoints are restricted to paid plans. | Pricing plan required for many API endpoints; exact tier for required WRAITH history must be confirmed. | Purpose-built market data API with liquidation/open-interest fields. | Multi-exchange futures coins; exchange filters documented. | Windowed fields such as 1h/4h/12h/24h are documented on public endpoint pages; exact historical granularity requires endpoint-specific verification. | Likely better research fit than raw exchange streams if historical endpoints cover the needed lookback. | Must comply with API plan terms and redistribution rules. | Strong candidate for v0.2 provider shortlist, pending price/history/granularity confirmation. |
| Hyblock | Known for liquidation/market-structure analytics; API and historical export details must be verified from current vendor materials or sales. | Needs vendor quote or current plan check. | Likely analytics-focused; exact developer API quality unknown. | Needs verification. | Needs verification. | Needs verification. | Must comply with subscription/API restrictions. | Possible premium vendor, not approved until access, export schema, and cost are confirmed. |
| Laevitas | Known derivatives analytics provider; historical liquidation, funding, and open-interest API coverage must be verified. | Needs vendor quote or current plan check. | Likely professional-grade analytics API; exact WRAITH schema fit unknown. | Needs verification. | Needs verification. | Needs verification. | Must comply with subscription/API restrictions. | Possible premium vendor, not approved until data contract and cost are confirmed. |
| CoinAPI or similar vendors | CoinAPI public docs describe real-time and historical crypto market data from 300+ exchanges, with OHLCV, trades, order books, and exchange rates. Liquidation-specific coverage is not confirmed from the public docs reviewed. | Paid API tiers with request limits; exact cost depends on plan. | Mature general market-data API. | Broad exchange coverage. | OHLCV/trade/order-book granularity; liquidation-specific granularity needs confirmation. | Strong general vendor candidate, but not liquidation-specific based on reviewed docs. | API key, rate limits, billing limits, data licensing, and redistribution terms apply. | Good for OHLCV/trades; not sufficient for WRAITH liquidation schema unless liquidation fields are confirmed. |

## Provider Shortlist

1. CoinGlass: strongest public evidence for liquidation, funding, and open-interest fields in one vendor-style API.
2. Bybit: useful for forward liquidation-event collection, but not enough for historical training unless archive access exists.
3. Binance/OKX: useful for exchange-native spot checks and possible forward collection; historical completeness must be proven.
4. Hyblock/Laevitas: promising premium candidates, but require live pricing/API verification.
5. CoinAPI: useful broad market-data vendor, but liquidation-specific suitability remains unproven.

## Minimum Acceptance Criteria

Before WRAITH-LSTM can train on a provider dataset, the provider must answer:

- Can we export all required v0.2 schema fields?
- What symbols are available?
- What lookback period is available?
- What time granularity is available?
- Are liquidation counts and largest liquidation sizes available, not only aggregate USD windows?
- Are funding and open interest synchronized to the same timestamp interval?
- What are the licensing and redistribution limits?
- What is the cost for the required lookback and symbols?
- Can the data be stored locally for research and revalidation?

## Sources Reviewed

- Bybit API documentation: https://bybit-exchange.github.io/docs/v5/websocket/public/all-liquidation
- CoinGlass API documentation: https://docs.coinglass.com/reference/coins-markets
- CoinAPI Market Data API documentation: https://www.coinapi.io/products/market-data-api/docs

## Current Verdict

Needs provider verification.

WRAITH-LSTM should not train any model for research conclusions until real historical data exists locally, passes validate_data.py, and has documented source provenance.
