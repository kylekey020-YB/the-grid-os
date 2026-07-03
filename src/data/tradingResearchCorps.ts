export type TradingProgramStatus = "Research Only" | "Backtest Required" | "Paper Only" | "Parked";
export type TradingAssetClass = "Equities" | "Options" | "Crypto" | "Multi-Asset" | "Portfolio" | "Intraday ETF";
export type TradingScoutConfidence = "N/A" | "Low" | "Medium" | "High";
export type QuantCandidateRecommendation = "Reject" | "Research More" | "Prototype";
export type QuantDifficulty = "Low" | "Medium" | "High";
export type QuantRisk = "Low" | "Medium" | "High" | "Very High";
export type BacktestFeasibility = "Low" | "Medium" | "High";

export type TradingResearchProgram = {
  id: string;
  emoji: string;
  name: string;
  mission: string;
  assetClass: TradingAssetClass;
  strategyCandidates: string[];
  requiredData: string[];
  validationGates: string[];
  backtestRequirements: string[];
  riskControls: string[];
  currentStatus: TradingProgramStatus;
  nextResearchTask: string;
};

export type TradingResearchScout = {
  id: string;
  name: string;
  role: string;
  watches: string[];
  status: "Planned" | "Research Only" | "Manual Only";
};

export type TradingScoutOutput = {
  id: string;
  scout: string;
  source: string;
  strategy: string;
  evidence: string;
  backtestAvailability: string;
  codeFrameworkLinkPlaceholder: string;
  riskNotes: string;
  confidence: TradingScoutConfidence;
  recommendation: string;
};

export type QuantStrategyCandidate = {
  rank: number;
  id: string;
  bot: "PAIRFORGE" | "VOLTA" | "ATLAS" | "ORION" | "WRAITH";
  strategyName: string;
  market: string;
  timeframe: string;
  entryRule: string;
  exitRule: string;
  requiredData: string;
  sourceEvidence: string;
  knownOpenSourceExamples: string;
  backtestFeasibility: BacktestFeasibility;
  capitalRequirement: string;
  riskProfile: QuantRisk;
  difficulty: QuantDifficulty;
  probabilityOfOverfitting: "Low" | "Medium" | "High" | "Very High";
  estimatedFirstPrototypeTime: string;
  confidenceScore: number;
  recommendation: QuantCandidateRecommendation;
};

export const tradingResearchCorpsSummary = {
  version: "v2.6.0",
  name: "Trading Research Corps",
  status: "Research only / no money at risk",
  mission:
    "Expand THE GRID Trading Division with research programs for statistical arbitrage, volatility/options, factor portfolios, SPY/QQQ intraday research, and mechanical liquidity-sweep research.",
  doctrine: "Trading programs are research programs until evidence proves expectancy.",
  discretionaryDoctrine:
    "Discretionary trading concepts must be converted into mechanical rules before THE GRID treats them as research signals.",
  safety:
    "No live trading, no brokerage connection, no options execution, no wallet execution, no money at risk, and no strategy advancement before historical validation.",
};

export const tradingResearchPrograms: TradingResearchProgram[] = [
  {
    id: "PAIRFORGE",
    emoji: "⛓️",
    name: "PAIRFORGE",
    mission: "Research pairs trading and statistical arbitrage systems that seek market-neutral mean-reversion edges.",
    assetClass: "Equities",
    strategyCandidates: ["Cointegrated equity pairs", "ETF pair z-score reversion", "Sector-relative spread reversion", "Graph-matched pair portfolios"],
    requiredData: ["Adjusted daily prices", "Intraday bars after daily proof", "Corporate actions", "Borrow/short assumptions", "Transaction cost assumptions"],
    validationGates: ["Stationarity test", "Walk-forward validation", "Out-of-sample period", "Transaction cost sensitivity", "Paper mode after backtest pass"],
    backtestRequirements: ["No lookahead bias", "Survivorship-bias-aware universe", "Slippage model", "Borrow cost placeholder", "Regime split review"],
    riskControls: ["Max spread z-score entry", "Stop on spread breakdown", "Pair exposure cap", "Market beta cap", "Correlation decay alert"],
    currentStatus: "Backtest Required",
    nextResearchTask: "Define the first eligible ETF/equity universe and historical data requirements before any model work.",
  },
  {
    id: "VOLTA",
    emoji: "🌩️",
    name: "VOLTA",
    mission: "Research options and volatility strategies with strict paper-only architecture and no execution capability.",
    assetClass: "Options",
    strategyCandidates: ["Covered calls", "Cash-secured puts", "Defined-risk credit spreads", "IV rank mean reversion", "Earnings volatility crush study"],
    requiredData: ["Options chains", "Historical IV", "Underlying prices", "Greeks", "Earnings calendar", "Bid/ask spread assumptions"],
    validationGates: ["Historical options data availability", "Assignment risk review", "Liquidity screen", "Scenario stress test", "Paper-only approval"],
    backtestRequirements: ["Use bid/ask-aware fills", "Model early assignment risk", "Track max loss", "Separate earnings and non-earnings samples", "No naked options assumptions"],
    riskControls: ["Defined risk only", "Position size cap", "Max loss known before entry", "No options execution", "Liquidity and spread filters"],
    currentStatus: "Research Only",
    nextResearchTask: "Document available options-data sources and cost before selecting a strategy candidate.",
  },
  {
    id: "ATLAS",
    emoji: "🗺️",
    name: "ATLAS",
    mission: "Research long-term buy-and-hold and factor portfolio systems for durable allocation decisions.",
    assetClass: "Portfolio",
    strategyCandidates: ["ETF momentum rotation", "Value and quality factor blend", "Risk parity research", "Dividend growth screen", "Core-satellite portfolio"],
    requiredData: ["Adjusted prices", "Fundamental factors", "ETF expense ratios", "Dividend history", "Benchmark data", "Inflation/rate context"],
    validationGates: ["Historical factor validation", "Benchmark comparison", "Rebalance sensitivity", "Drawdown review", "Paper portfolio tracking"],
    backtestRequirements: ["Long sample period", "Multiple regimes", "Rebalance-cost assumptions", "Tax drag placeholder", "Benchmark and cash comparison"],
    riskControls: ["Allocation caps", "Drawdown bands", "Rebalance rules", "Concentration limits", "No live brokerage connection"],
    currentStatus: "Research Only",
    nextResearchTask: "Define the first ETF momentum universe and benchmark set before modeling portfolio rules.",
  },
  {
    id: "ORION",
    emoji: "🏹",
    name: "ORION",
    mission: "Research SPY and QQQ intraday strategies only, with optional ES/NQ research later and no execution capability.",
    assetClass: "Intraday ETF",
    strategyCandidates: ["Opening range breakout", "VWAP trend continuation", "VWAP reversion", "Gap fill / gap continuation", "Premarket high/low break", "Previous day high/low sweep", "Intraday momentum", "Trend day detection", "Time-of-day edge"],
    requiredData: ["1m / 5m OHLCV", "Premarket levels", "VWAP", "Volume", "ATR", "VIX", "Market breadth if available", "Economic calendar / FOMC flags if available"],
    validationGates: ["Historical backtest", "Walk-forward split", "Paper trading", "Slippage model", "No-lookahead verification", "Max drawdown check", "Time-of-day analysis", "Strategy decay review"],
    backtestRequirements: ["Session-aware bars", "Premarket/RTH split", "EOD flat rule", "Spread/slippage assumptions", "Event-day exclusions tested separately"],
    riskControls: ["One market family only", "Max daily loss", "No overnight exposure", "No 0DTE execution", "Volatility regime filters"],
    currentStatus: "Research Only",
    nextResearchTask: "Prototype a SPY/QQQ opening-range breakout backtest with VIX/ATR filters and explicit slippage assumptions.",
  },
  {
    id: "WRAITH",
    emoji: "🕯️",
    name: "WRAITH",
    mission: "Research liquidity sweep, fair value gap, and displacement strategies by converting discretionary ideas into mechanical test rules.",
    assetClass: "Multi-Asset",
    strategyCandidates: ["Prior high/low liquidity sweep", "Fair value gap / imbalance reclaim", "Displacement candle", "Market structure shift", "Session high/low liquidity", "Opening range liquidity", "Stop-run reversal", "Continuation after FVG reclaim"],
    requiredData: ["Intraday OHLCV", "Session highs/lows", "Swing highs/lows", "Gap/imbalance detection", "Volume confirmation", "Volatility regime", "Spread/slippage assumptions"],
    validationGates: ["Define signal mathematically", "Test on historical data", "Compare to random baseline", "Paper trade", "Measure expectancy", "Reject if untestable"],
    backtestRequirements: ["Every signal must have code-definable criteria", "No vague liquidity labels", "Random-baseline comparison", "Parameter sensitivity review", "Asset-class split testing"],
    riskControls: ["Reject untestable setups", "Max loss per signal", "No wallet execution", "No futures execution", "Session and slippage controls"],
    currentStatus: "Research Only",
    nextResearchTask: "Define a mechanical prior-high/low sweep rule for SPY/QQQ before testing FVG concepts.",
  },
];

export const tradingResearchScouts: TradingResearchScout[] = [
  { id: "github-quant-scout", name: "GitHub Quant Scout", role: "Find open-source quant research and frameworks while respecting licenses.", watches: ["GitHub repos", "licenses", "backtest frameworks", "quant notebooks"], status: "Research Only" },
  { id: "reddit-quant-scout", name: "Reddit Quant Scout", role: "Collect public strategy discussion themes without treating anecdotes as proof.", watches: ["public quant discussions", "risk warnings", "strategy claims"], status: "Manual Only" },
  { id: "quantconnect-scout", name: "QuantConnect Scout", role: "Review public research examples and LEAN-compatible backtest patterns.", watches: ["QuantConnect docs", "public algorithms", "LEAN framework notes"], status: "Research Only" },
  { id: "academic-paper-scout", name: "Academic Paper Scout", role: "Find peer-reviewed or working-paper strategy evidence and replication candidates.", watches: ["papers", "replication notes", "factor research", "stat arb literature"], status: "Research Only" },
  { id: "options-strategy-scout", name: "Options Strategy Scout", role: "Evaluate volatility strategy ideas with defined-risk and liquidity constraints.", watches: ["Cboe indexes", "volatility papers", "risk disclosures", "paper-only setups"], status: "Research Only" },
  { id: "portfolio-strategy-scout", name: "Portfolio Strategy Scout", role: "Research factor, allocation, rebalancing, and long-term portfolio evidence.", watches: ["factor research", "ETF models", "portfolio construction", "benchmark studies"], status: "Research Only" },
];

export const tradingScoutOutputs: TradingScoutOutput[] = [
  {
    id: "TSO-001",
    scout: "GitHub Quant Scout",
    source: "QuantConnect LEAN, Backtrader, vectorbt, and Zipline Reloaded public repositories.",
    strategy: "Backtest framework shortlist",
    evidence: "Public repositories exist for event-driven and vectorized backtesting. LEAN is broadest for multi-asset/options research; vectorbt is fastest for signal sweeps; Backtrader is simple for Python strategy prototypes.",
    backtestAvailability: "High for equities/ETF signals; medium for options unless historical chains are sourced.",
    codeFrameworkLinkPlaceholder: "https://github.com/QuantConnect/Lean / https://github.com/mementum/backtrader / https://github.com/polakowo/vectorbt / https://github.com/stefan-jansen/zipline-reloaded",
    riskNotes: "Framework availability does not prove edge. Data quality, slippage, fees, survivorship bias, and lookahead bias remain the main risks.",
    confidence: "Medium",
    recommendation: "Use vectorbt or Backtrader for first ORION prototype; keep LEAN as the future multi-asset/options candidate.",
  },
  {
    id: "TSO-002",
    scout: "Academic Paper Scout",
    source: "Pairs trading, momentum, factor, risk parity, and intraday strategy literature.",
    strategy: "Broad strategy evidence scan",
    evidence: "Academic evidence is strongest for momentum/factors and mixed for modern pairs trading. Intraday ORB/VWAP evidence exists but must be replicated independently with conservative costs.",
    backtestAvailability: "High for daily factors/momentum, high for SPY/QQQ intraday if minute data is available, medium for pairs, low-to-medium for options due to chain data cost.",
    codeFrameworkLinkPlaceholder: "Add paper replication links after candidate-specific review.",
    riskNotes: "Published strategies may decay, overfit, ignore friction, or rely on leveraged ETFs/options assumptions not suitable for first prototype.",
    confidence: "Medium",
    recommendation: "Prototype the cleanest intraday ETF signal first, then compare against ATLAS ETF momentum as a lower-frequency baseline.",
  },
  {
    id: "TSO-003",
    scout: "Options Strategy Scout",
    source: "Cboe BXM/PUT benchmark pages and public options literature.",
    strategy: "VOLTA covered call / put-write / IV rank shortlist",
    evidence: "Covered call and cash-secured put concepts have benchmark history, but realistic options backtests require chain data, bid/ask modeling, assignment rules, liquidity filters, and capital constraints.",
    backtestAvailability: "Medium with paid/high-quality options data; low if using only underlying OHLCV.",
    codeFrameworkLinkPlaceholder: "LEAN options framework candidate after data-cost review.",
    riskNotes: "Tail risk, assignment, skew, liquidity, spread costs, and large capital requirements make VOLTA a bad first prototype despite strong research value.",
    confidence: "Medium",
    recommendation: "Research more; do not prototype before options data plan is solved.",
  },
];

export const quantScoutMission001 = {
  id: "QSM-001",
  title: "Broad Strategy Discovery",
  status: "Research Complete / Prototype Recommendation Ready",
  objective: "Research and rank first strategy candidates across PAIRFORGE, VOLTA, ATLAS, ORION, and WRAITH.",
  recommendedFirstBot: "ORION",
  recommendedFirstSignal: "SPY/QQQ opening range breakout with ATR/VIX filters, no overnight exposure, and explicit slippage modeling.",
  rankingRationale: "ORION ranks first because SPY/QQQ intraday strategies are cleanly backtestable, have accessible minute data, controllable risk, no options chain dependency, no short-borrow dependency, and a fast path to paper testing.",
  requiredDataPlan: [
    "SPY and QQQ 1m/5m OHLCV with regular-hours and premarket session tags.",
    "VWAP, volume, ATR, previous day high/low, premarket high/low, opening range high/low.",
    "VIX daily/intraday proxy, market breadth if available, and economic calendar/FOMC flags if available.",
    "Options chain data only after VOLTA receives a separate data-cost approval.",
    "Crypto intraday data only after WRAITH mechanical rules pass on SPY/QQQ first.",
  ],
  backtestPlan: [
    "Start with ORION ORB on SPY and QQQ, 5-minute and 15-minute opening ranges.",
    "Use 2018-present if minute data is available; split into in-sample, validation, and walk-forward periods.",
    "Model slippage, spread, commissions, max daily loss, EOD flat exits, and event-day exclusions.",
    "Compare every rule against buy-and-hold, random-entry baseline, and no-trade baseline.",
    "Only after ORION baseline is built, replicate ATLAS ETF momentum as a lower-frequency control strategy.",
  ],
  hardRules: ["No live trading", "No broker connection", "No options execution", "No wallet execution", "Research and backtest only"],
};

export const quantStrategyCandidates: QuantStrategyCandidate[] = [
  { rank: 1, id: "QSC-001", bot: "ORION", strategyName: "SPY/QQQ Opening Range Breakout", market: "SPY / QQQ", timeframe: "5m / 15m intraday", entryRule: "Enter long on break above opening range high or short on break below opening range low after range completes; filter by ATR/VIX regime.", exitRule: "Exit at EOD, opposite range break, fixed R multiple, or ATR stop.", requiredData: "1m/5m OHLCV, opening range, volume, ATR, VIX, session calendar.", sourceEvidence: "SSRN ORB research reference plus broad ORB practitioner literature; must replicate independently.", knownOpenSourceExamples: "Backtrader/vectorbt can implement quickly; LEAN supports production-grade backtesting later.", backtestFeasibility: "High", capitalRequirement: "$2k-$10k paper model equivalent; no live capital.", riskProfile: "Medium", difficulty: "Medium", probabilityOfOverfitting: "Medium", estimatedFirstPrototypeTime: "1-2 days after minute data is available", confidenceScore: 82, recommendation: "Prototype" },
  { rank: 2, id: "QSC-002", bot: "ATLAS", strategyName: "ETF Momentum Rotation", market: "SPY / QQQ / sector ETFs", timeframe: "Daily / weekly", entryRule: "Rank ETFs by 3/6/12-month momentum; hold top N if above cash/benchmark filter.", exitRule: "Rebalance monthly or when rank/filter fails.", requiredData: "Adjusted daily prices, dividends, ETF list, benchmark/cash proxy.", sourceEvidence: "Momentum literature including Jegadeesh/Titman and later factor research.", knownOpenSourceExamples: "vectorbt, Zipline Reloaded, Backtrader.", backtestFeasibility: "High", capitalRequirement: "$1k-$10k paper model equivalent; no live capital.", riskProfile: "Medium", difficulty: "Low", probabilityOfOverfitting: "Medium", estimatedFirstPrototypeTime: "1 day after daily data is available", confidenceScore: 79, recommendation: "Prototype" },
  { rank: 3, id: "QSC-003", bot: "ORION", strategyName: "VWAP Trend Continuation", market: "SPY / QQQ", timeframe: "1m / 5m intraday", entryRule: "Enter in direction of price holding above/below VWAP with volume confirmation and trend-day filter.", exitRule: "Exit on VWAP loss, EOD, ATR stop, or fixed R multiple.", requiredData: "Intraday OHLCV, VWAP, volume, ATR, session levels.", sourceEvidence: "QuantConnect VWAP docs and SSRN VWAP strategy reference; needs independent replication.", knownOpenSourceExamples: "LEAN has VWAP indicator; vectorbt/backtrader can calculate VWAP.", backtestFeasibility: "High", capitalRequirement: "$2k-$10k paper model equivalent; no live capital.", riskProfile: "Medium", difficulty: "Medium", probabilityOfOverfitting: "Medium", estimatedFirstPrototypeTime: "2 days after minute data is available", confidenceScore: 76, recommendation: "Prototype" },
  { rank: 4, id: "QSC-004", bot: "ATLAS", strategyName: "Factor ETF Core-Satellite", market: "Broad-market and factor ETFs", timeframe: "Monthly", entryRule: "Allocate to core index plus value/quality/momentum ETFs when trend and drawdown filters pass.", exitRule: "Rebalance monthly; reduce risk on drawdown or trend failure.", requiredData: "Adjusted daily/monthly prices, ETF fees, dividend history, benchmark.", sourceEvidence: "Fama/French factor literature and factor ETF implementation patterns.", knownOpenSourceExamples: "Zipline Reloaded, vectorbt, Backtrader.", backtestFeasibility: "High", capitalRequirement: "$1k-$10k paper model equivalent; no live capital.", riskProfile: "Medium", difficulty: "Low", probabilityOfOverfitting: "Medium", estimatedFirstPrototypeTime: "1-2 days", confidenceScore: 74, recommendation: "Prototype" },
  { rank: 5, id: "QSC-005", bot: "ORION", strategyName: "Gap Fill / Gap Continuation", market: "SPY / QQQ", timeframe: "5m intraday", entryRule: "Classify open gap versus prior close; enter fill or continuation only after first pullback/confirmation and volatility filter.", exitRule: "Exit at gap fill, fixed R, EOD, or invalidation of opening structure.", requiredData: "Daily and intraday OHLCV, prior close, premarket range, ATR, VIX.", sourceEvidence: "Common intraday setup; evidence weaker than ORB/VWAP until backtested.", knownOpenSourceExamples: "Backtrader/vectorbt custom rules.", backtestFeasibility: "High", capitalRequirement: "$2k-$10k paper model equivalent; no live capital.", riskProfile: "Medium", difficulty: "Medium", probabilityOfOverfitting: "High", estimatedFirstPrototypeTime: "2 days", confidenceScore: 70, recommendation: "Research More" },
  { rank: 6, id: "QSC-006", bot: "PAIRFORGE", strategyName: "Cointegrated ETF Pairs", market: "Sector/liquid ETFs", timeframe: "Daily first, intraday later", entryRule: "Enter spread when cointegration passes and z-score exceeds threshold.", exitRule: "Exit at mean reversion, stop on spread breakdown, or cointegration decay.", requiredData: "Adjusted prices, ETF universe, borrow/short assumptions, transaction costs.", sourceEvidence: "Pairs trading literature; modern papers show mixed/decaying profitability.", knownOpenSourceExamples: "statsmodels plus Backtrader/vectorbt; LEAN later.", backtestFeasibility: "Medium", capitalRequirement: "$5k-$25k paper model equivalent; no live capital.", riskProfile: "Medium", difficulty: "High", probabilityOfOverfitting: "High", estimatedFirstPrototypeTime: "3-5 days", confidenceScore: 68, recommendation: "Research More" },
  { rank: 7, id: "QSC-007", bot: "WRAITH", strategyName: "Mechanical Prior High/Low Liquidity Sweep", market: "SPY / QQQ first", timeframe: "5m intraday", entryRule: "Price breaches prior day/session high by threshold, closes back inside range, and volume/ATR condition confirms reversal.", exitRule: "Exit at midrange/VWAP/fixed R or stop beyond sweep extreme.", requiredData: "Intraday OHLCV, prior highs/lows, session highs/lows, volume, ATR, slippage.", sourceEvidence: "Discretionary ICT/liquidity concepts; evidence is weak until converted into testable rules.", knownOpenSourceExamples: "Custom Backtrader/vectorbt rules; no trusted turnkey framework assumed.", backtestFeasibility: "High", capitalRequirement: "$2k-$10k paper model equivalent; no live capital.", riskProfile: "High", difficulty: "Medium", probabilityOfOverfitting: "High", estimatedFirstPrototypeTime: "2-3 days", confidenceScore: 65, recommendation: "Research More" },
  { rank: 8, id: "QSC-008", bot: "ORION", strategyName: "Premarket High/Low Break", market: "SPY / QQQ", timeframe: "1m / 5m intraday", entryRule: "Enter RTH break of premarket high/low with volume and volatility filters.", exitRule: "Exit on failed breakout, ATR stop, fixed R, or EOD.", requiredData: "Premarket/RTH 1m data, volume, ATR, VIX.", sourceEvidence: "Common intraday setup; needs independent validation.", knownOpenSourceExamples: "Backtrader/vectorbt custom session logic.", backtestFeasibility: "High", capitalRequirement: "$2k-$10k paper model equivalent; no live capital.", riskProfile: "Medium", difficulty: "Medium", probabilityOfOverfitting: "High", estimatedFirstPrototypeTime: "2 days", confidenceScore: 64, recommendation: "Research More" },
  { rank: 9, id: "QSC-009", bot: "ATLAS", strategyName: "Risk Parity ETF Allocation", market: "Equity / bond / commodity ETFs", timeframe: "Monthly", entryRule: "Allocate inverse to realized volatility or equal risk contribution across assets.", exitRule: "Monthly rebalance and drawdown guard.", requiredData: "Adjusted daily prices, volatility estimates, ETF fees, benchmark.", sourceEvidence: "Risk parity literature; known sensitivity to correlations/leverage assumptions.", knownOpenSourceExamples: "Python portfolio libs, vectorbt, Zipline Reloaded.", backtestFeasibility: "High", capitalRequirement: "$1k-$10k paper model equivalent; no live capital.", riskProfile: "Medium", difficulty: "Medium", probabilityOfOverfitting: "Medium", estimatedFirstPrototypeTime: "2 days", confidenceScore: 63, recommendation: "Research More" },
  { rank: 10, id: "QSC-010", bot: "VOLTA", strategyName: "Covered Call Overlay", market: "SPY / QQQ / stock ETFs", timeframe: "Monthly / weekly options", entryRule: "Own shares and sell out-of-the-money calls under defined IV/liquidity criteria.", exitRule: "Hold to expiry, roll under defined rule, or close on risk threshold.", requiredData: "Underlying prices, option chains, bid/ask, IV, dividends, assignment rules.", sourceEvidence: "Cboe BXM provides a benchmark for buy-write concepts.", knownOpenSourceExamples: "LEAN options framework candidate after data-cost review.", backtestFeasibility: "Medium", capitalRequirement: "High; 100-share lots or simulated equivalent.", riskProfile: "Medium", difficulty: "High", probabilityOfOverfitting: "Medium", estimatedFirstPrototypeTime: "5-10 days after options data is available", confidenceScore: 61, recommendation: "Research More" },
  { rank: 11, id: "QSC-011", bot: "PAIRFORGE", strategyName: "Distance/Z-Score ETF Spread", market: "Liquid ETF pairs", timeframe: "Daily", entryRule: "Enter when normalized price spread diverges by threshold after correlation screen.", exitRule: "Exit at spread mean, time stop, or correlation decay.", requiredData: "Adjusted prices, ETF universe, fees/slippage assumptions.", sourceEvidence: "Classic pairs trading approach; weaker than cointegration but simpler to prototype.", knownOpenSourceExamples: "statsmodels/vectorbt/Backtrader.", backtestFeasibility: "High", capitalRequirement: "$5k-$25k paper model equivalent; no live capital.", riskProfile: "Medium", difficulty: "Medium", probabilityOfOverfitting: "High", estimatedFirstPrototypeTime: "2-3 days", confidenceScore: 60, recommendation: "Research More" },
  { rank: 12, id: "QSC-012", bot: "ORION", strategyName: "VWAP Reversion", market: "SPY / QQQ", timeframe: "5m intraday", entryRule: "Fade statistically large deviation from VWAP only in non-trend regime.", exitRule: "Exit at VWAP, ATR stop, or EOD.", requiredData: "Intraday OHLCV, VWAP, ATR, trend-day filter, VIX.", sourceEvidence: "VWAP is a common intraday benchmark; edge depends heavily on regime filter.", knownOpenSourceExamples: "LEAN VWAP indicator; Backtrader/vectorbt custom rule.", backtestFeasibility: "High", capitalRequirement: "$2k-$10k paper model equivalent; no live capital.", riskProfile: "High", difficulty: "Medium", probabilityOfOverfitting: "High", estimatedFirstPrototypeTime: "2-3 days", confidenceScore: 59, recommendation: "Research More" },
  { rank: 13, id: "QSC-013", bot: "VOLTA", strategyName: "Cash-Secured PutWrite", market: "SPY / QQQ / liquid stocks", timeframe: "Monthly / weekly options", entryRule: "Sell cash-secured puts when liquidity/IV filters pass and max loss is financed by cash assumption.", exitRule: "Hold/roll/close under defined risk rule.", requiredData: "Options chains, bid/ask, IV, rates, assignment, underlying prices.", sourceEvidence: "Cboe PUT index provides benchmark context for collateralized put-writing.", knownOpenSourceExamples: "LEAN options after data-cost review.", backtestFeasibility: "Medium", capitalRequirement: "High; cash collateral required in real implementation.", riskProfile: "High", difficulty: "High", probabilityOfOverfitting: "Medium", estimatedFirstPrototypeTime: "5-10 days after options data is available", confidenceScore: 57, recommendation: "Research More" },
  { rank: 14, id: "QSC-014", bot: "ATLAS", strategyName: "Dividend Growth Screen", market: "Dividend stocks / ETFs", timeframe: "Monthly / quarterly", entryRule: "Select diversified basket by dividend growth, payout risk, quality, and trend filter.", exitRule: "Rebalance quarterly or exit on quality/dividend/trend failure.", requiredData: "Fundamentals, dividend history, adjusted prices, sector constraints.", sourceEvidence: "Long-term investing concept; less clean edge evidence than momentum/factors.", knownOpenSourceExamples: "Zipline Reloaded / pandas pipeline after fundamentals source.", backtestFeasibility: "Medium", capitalRequirement: "$1k-$10k paper model equivalent; no live capital.", riskProfile: "Medium", difficulty: "Medium", probabilityOfOverfitting: "Medium", estimatedFirstPrototypeTime: "3-5 days after fundamentals source", confidenceScore: 55, recommendation: "Research More" },
  { rank: 15, id: "QSC-015", bot: "VOLTA", strategyName: "IV Rank Defined-Risk Credit Spread", market: "SPY / QQQ options", timeframe: "Weekly / monthly options", entryRule: "Sell defined-risk spread when IV rank/liquidity filters pass and max loss is capped.", exitRule: "Profit target, loss threshold, DTE exit, or expiry.", requiredData: "Options chains, IV history, Greeks, bid/ask, assignment model.", sourceEvidence: "Common options-volatility strategy; must validate with realistic spreads and tail losses.", knownOpenSourceExamples: "LEAN options framework candidate.", backtestFeasibility: "Medium", capitalRequirement: "Medium; defined risk but options approval/capital needed in real world.", riskProfile: "High", difficulty: "High", probabilityOfOverfitting: "High", estimatedFirstPrototypeTime: "7-14 days after options data", confidenceScore: 54, recommendation: "Research More" },
  { rank: 16, id: "QSC-016", bot: "WRAITH", strategyName: "Fair Value Gap Reclaim", market: "SPY / QQQ first, BTC/ETH later", timeframe: "5m / 15m", entryRule: "Define FVG as three-candle imbalance; enter only after reclaim/hold plus displacement threshold.", exitRule: "Exit at opposing liquidity, fixed R, invalidation, or session close.", requiredData: "Intraday OHLCV, candle-gap detector, swings, volume, spread/slippage.", sourceEvidence: "Discretionary ICT concept; must be transformed into strict code criteria.", knownOpenSourceExamples: "Custom detector required.", backtestFeasibility: "Medium", capitalRequirement: "$2k-$10k paper model equivalent; no live capital.", riskProfile: "High", difficulty: "High", probabilityOfOverfitting: "Very High", estimatedFirstPrototypeTime: "3-5 days", confidenceScore: 50, recommendation: "Research More" },
  { rank: 17, id: "QSC-017", bot: "ORION", strategyName: "Time-of-Day Edge", market: "SPY / QQQ", timeframe: "1m / 5m", entryRule: "Trade only historically favorable windows with direction filter.", exitRule: "Exit at window end, stop, or EOD.", requiredData: "Minute data, session calendar, event flags, slippage.", sourceEvidence: "Intraday seasonality is testable but easy to data-mine.", knownOpenSourceExamples: "vectorbt signal sweeps; Backtrader session logic.", backtestFeasibility: "High", capitalRequirement: "$2k-$10k paper model equivalent; no live capital.", riskProfile: "Medium", difficulty: "Low", probabilityOfOverfitting: "High", estimatedFirstPrototypeTime: "1-2 days", confidenceScore: 49, recommendation: "Research More" },
  { rank: 18, id: "QSC-018", bot: "PAIRFORGE", strategyName: "Graph-Matched Pair Portfolio", market: "S&P 500 liquid equities", timeframe: "Daily", entryRule: "Construct non-overlapping cointegrated pairs via graph matching and trade z-score deviations.", exitRule: "Exit at mean, stop, or pair-quality decay.", requiredData: "Survivorship-aware equity universe, adjusted prices, costs, borrow assumptions.", sourceEvidence: "Recent academic graph-matching pairs papers show promising gross results but require careful replication.", knownOpenSourceExamples: "Custom Python with networkx/statsmodels; backtest in vectorbt/Backtrader.", backtestFeasibility: "Medium", capitalRequirement: "$25k+ paper model equivalent for diversified pair book; no live capital.", riskProfile: "High", difficulty: "High", probabilityOfOverfitting: "High", estimatedFirstPrototypeTime: "1-2 weeks", confidenceScore: 47, recommendation: "Research More" },
  { rank: 19, id: "QSC-019", bot: "VOLTA", strategyName: "Earnings IV Crush Defined-Risk", market: "Liquid single-stock options", timeframe: "Earnings events", entryRule: "Enter defined-risk short-vol spread before earnings only when liquidity/IV filters pass.", exitRule: "Close after event or at loss threshold.", requiredData: "Historical options chains, earnings calendar, bid/ask, IV, greeks, event dates.", sourceEvidence: "Common volatility-event concept; strong data and tail-risk burden.", knownOpenSourceExamples: "LEAN possible after data-cost review.", backtestFeasibility: "Low", capitalRequirement: "Medium; defined-risk options capital in real world.", riskProfile: "Very High", difficulty: "High", probabilityOfOverfitting: "High", estimatedFirstPrototypeTime: "2+ weeks after options/event data", confidenceScore: 41, recommendation: "Research More" },
  { rank: 20, id: "QSC-020", bot: "WRAITH", strategyName: "Order Block / Breaker Block", market: "SPY / QQQ / crypto", timeframe: "5m / 15m", entryRule: "Rejected until rule is mechanically defined beyond visual labeling.", exitRule: "N/A until rule exists.", requiredData: "N/A until signal definition is mechanical.", sourceEvidence: "Discretionary concept with weak standardized definition.", knownOpenSourceExamples: "No trusted mechanical implementation selected.", backtestFeasibility: "Low", capitalRequirement: "N/A", riskProfile: "High", difficulty: "High", probabilityOfOverfitting: "High", estimatedFirstPrototypeTime: "N/A until definition", confidenceScore: 25, recommendation: "Reject" },

  { rank: 21, id: "QSC-021", bot: "PAIRFORGE", strategyName: "Kalman Hedge Ratio ETF Pair", market: "Liquid ETF pairs", timeframe: "Daily first", entryRule: "Estimate dynamic hedge ratio with Kalman filter and trade spread z-score extremes.", exitRule: "Exit at spread normalization or model instability threshold.", requiredData: "Adjusted prices, model state, slippage/cost assumptions.", sourceEvidence: "Common stat-arb extension; requires careful parameter discipline.", knownOpenSourceExamples: "statsmodels/custom Python plus vectorbt/Backtrader.", backtestFeasibility: "Medium", capitalRequirement: "$5k-$25k paper model equivalent; no live capital.", riskProfile: "High", difficulty: "High", probabilityOfOverfitting: "High", estimatedFirstPrototypeTime: "1 week", confidenceScore: 44, recommendation: "Research More" },
  { rank: 22, id: "QSC-022", bot: "PAIRFORGE", strategyName: "Sector-Neutral Relative Value Basket", market: "Sector equities / ETFs", timeframe: "Daily", entryRule: "Long strongest relative-value basket and short weakest within sector-neutral constraints.", exitRule: "Exit on rank normalization, stop, or rebalance window.", requiredData: "Survivorship-aware universe, adjusted prices, sector classifications, costs.", sourceEvidence: "Stat-arb basket concept; complex and prone to crowding.", knownOpenSourceExamples: "Custom Python; LEAN later.", backtestFeasibility: "Medium", capitalRequirement: "$25k+ paper model equivalent; no live capital.", riskProfile: "High", difficulty: "High", probabilityOfOverfitting: "High", estimatedFirstPrototypeTime: "2+ weeks", confidenceScore: 42, recommendation: "Research More" },
  { rank: 23, id: "QSC-023", bot: "VOLTA", strategyName: "Protective Collar Research", market: "SPY / QQQ options", timeframe: "Monthly", entryRule: "Hold underlying, buy protective put, sell covered call under defined cost/risk rules.", exitRule: "Monthly roll or close under defined drawdown/cost threshold.", requiredData: "Options chains, bid/ask, IV, dividends, assignment rules.", sourceEvidence: "Standard options risk-management structure; return drag must be tested.", knownOpenSourceExamples: "LEAN options framework candidate.", backtestFeasibility: "Medium", capitalRequirement: "High; underlying plus options costs.", riskProfile: "Medium", difficulty: "High", probabilityOfOverfitting: "Medium", estimatedFirstPrototypeTime: "1-2 weeks after options data", confidenceScore: 40, recommendation: "Research More" },
  { rank: 24, id: "QSC-024", bot: "ATLAS", strategyName: "Core 60/40 Benchmark With Drawdown Guard", market: "SPY / bond ETF proxy", timeframe: "Monthly", entryRule: "Hold diversified benchmark unless drawdown/trend guard reduces risk.", exitRule: "Monthly rebalance or restore allocation when guard clears.", requiredData: "Adjusted daily prices, benchmark data, rates proxy.", sourceEvidence: "Baseline control model, not an alpha claim.", knownOpenSourceExamples: "Any Python backtester.", backtestFeasibility: "High", capitalRequirement: "$1k-$10k paper model equivalent; no live capital.", riskProfile: "Low", difficulty: "Low", probabilityOfOverfitting: "Low", estimatedFirstPrototypeTime: "1 day", confidenceScore: 52, recommendation: "Research More" },
  { rank: 25, id: "QSC-025", bot: "ATLAS", strategyName: "Quality/Low-Volatility ETF Tilt", market: "Factor ETFs", timeframe: "Monthly", entryRule: "Tilt toward quality and low-volatility ETFs when trend and drawdown filters pass.", exitRule: "Monthly rebalance or reduce risk when filters fail.", requiredData: "Adjusted prices, ETF fee data, benchmark.", sourceEvidence: "Factor investing context; ETF implementation requires fee/turnover review.", knownOpenSourceExamples: "vectorbt / Zipline Reloaded.", backtestFeasibility: "High", capitalRequirement: "$1k-$10k paper model equivalent; no live capital.", riskProfile: "Medium", difficulty: "Low", probabilityOfOverfitting: "Medium", estimatedFirstPrototypeTime: "1-2 days", confidenceScore: 51, recommendation: "Research More" },
  { rank: 26, id: "QSC-026", bot: "WRAITH", strategyName: "Opening Range Liquidity Sweep", market: "SPY / QQQ first", timeframe: "5m", entryRule: "Opening range high/low is swept by threshold, then price closes back inside range with volume confirmation.", exitRule: "Exit at VWAP/midrange/fixed R or stop beyond sweep extreme.", requiredData: "Intraday OHLCV, opening range, volume, ATR, slippage.", sourceEvidence: "Mechanical version of liquidity-sweep idea; no efficacy assumed.", knownOpenSourceExamples: "Custom Backtrader/vectorbt rules.", backtestFeasibility: "High", capitalRequirement: "$2k-$10k paper model equivalent; no live capital.", riskProfile: "High", difficulty: "Medium", probabilityOfOverfitting: "High", estimatedFirstPrototypeTime: "2-3 days", confidenceScore: 48, recommendation: "Research More" },
  { rank: 27, id: "QSC-027", bot: "WRAITH", strategyName: "Displacement Candle Continuation", market: "SPY / QQQ first", timeframe: "5m / 15m", entryRule: "Enter after range expansion candle exceeding ATR and volume thresholds, with pullback hold rule.", exitRule: "Exit on failed hold, fixed R, or session close.", requiredData: "Intraday OHLCV, ATR, volume, session tags, slippage.", sourceEvidence: "Mechanical proxy for displacement concept; must compare to random baseline.", knownOpenSourceExamples: "Custom detector required.", backtestFeasibility: "High", capitalRequirement: "$2k-$10k paper model equivalent; no live capital.", riskProfile: "High", difficulty: "Medium", probabilityOfOverfitting: "High", estimatedFirstPrototypeTime: "2-4 days", confidenceScore: 46, recommendation: "Research More" },
  { rank: 28, id: "QSC-028", bot: "VOLTA", strategyName: "Long Straddle Event Study", market: "Liquid single-stock options", timeframe: "Earnings/events", entryRule: "Buy defined-risk long straddle only under pre-event volatility and liquidity criteria.", exitRule: "Close after event or fixed loss/time rule.", requiredData: "Options chains, IV, earnings calendar, bid/ask, realized move history.", sourceEvidence: "Event-volatility concept; long premium faces decay and spread drag.", knownOpenSourceExamples: "LEAN options framework candidate.", backtestFeasibility: "Low", capitalRequirement: "Medium; premium at risk.", riskProfile: "High", difficulty: "High", probabilityOfOverfitting: "High", estimatedFirstPrototypeTime: "2+ weeks after options data", confidenceScore: 36, recommendation: "Research More" },
  { rank: 29, id: "QSC-029", bot: "VOLTA", strategyName: "0DTE Risk Study Only", market: "SPY / QQQ / SPX options", timeframe: "0DTE", entryRule: "No prototype entry. Research only to quantify risk, spread, gamma, and tail behavior.", exitRule: "N/A; no execution research beyond risk study.", requiredData: "High-quality intraday options chains, greeks, bid/ask, underlying minute data.", sourceEvidence: "0DTE risk is explicitly research-only for VOLTA.", knownOpenSourceExamples: "No implementation selected.", backtestFeasibility: "Low", capitalRequirement: "N/A", riskProfile: "Very High", difficulty: "High", probabilityOfOverfitting: "Very High", estimatedFirstPrototypeTime: "N/A", confidenceScore: 15, recommendation: "Reject" },
];

export const top20QuantStrategyCandidates = quantStrategyCandidates.slice(0, 20);

export const topStrategiesByBot = {
  PAIRFORGE: quantStrategyCandidates.filter((candidate) => candidate.bot === "PAIRFORGE").slice(0, 5),
  VOLTA: quantStrategyCandidates.filter((candidate) => candidate.bot === "VOLTA").slice(0, 5),
  ATLAS: quantStrategyCandidates.filter((candidate) => candidate.bot === "ATLAS").slice(0, 5),
  ORION: quantStrategyCandidates.filter((candidate) => candidate.bot === "ORION").slice(0, 5),
  WRAITH: quantStrategyCandidates.filter((candidate) => candidate.bot === "WRAITH").slice(0, 5),
};

export const tradingResearchRules = [
  "Trading programs are research programs until evidence proves expectancy.",
  "Discretionary trading concepts must be converted into mechanical rules before THE GRID treats them as research signals.",
  "Every strategy must pass historical validation before paper mode.",
  "Paper mode must precede any future live consideration.",
  "No live trading, brokerage connection, wallet execution, or options execution exists in THE GRID.",
  "Unknown expectancy, win rate, drawdown, return, and PnL values remain N/A.",
];

export const tradingResearchMetrics = {
  programs: tradingResearchPrograms.length,
  scouts: tradingResearchScouts.length,
  scoutOutputs: tradingScoutOutputs.length,
  strategyCandidates: quantStrategyCandidates.length,
  liveTradingConnections: 0,
  strategiesWithProvenExpectancy: 0,
};
