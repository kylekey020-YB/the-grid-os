export type AlphaFamilyId = "ALPHA-100" | "ALPHA-200" | "ALPHA-300" | "ALPHA-400" | "ALPHA-500" | "ALPHA-600";

export type AlphaVerdict = "Reject" | "Research More" | "Prototype" | "Backtest" | "Paper Test" | "Live Candidate" | "Retired";

export type AlphaStatus = "N/A" | "Not Started" | "Research" | "Spec Ready" | "Backtest Required" | "Backtested" | "Paper Only" | "Live Forbidden";

export type AlphaRisk = "N/A" | "Low" | "Medium" | "High" | "Very High";

export type AlphaQuality = "N/A" | "Low" | "Medium" | "High";

export type AlphaDifficulty = "Low" | "Medium" | "High" | "Very High";

export type AssignedTradingBot = "ORION" | "WRAITH" | "PAIRFORGE" | "VOLTA" | "ATLAS" | "Unassigned";

export type AlphaFamily = {
  id: AlphaFamilyId;
  name: string;
  focus: string;
  examples: string[];
  assignedBots: AssignedTradingBot[];
};

export type AlphaRecord = {
  id: string;
  name: string;
  family: AlphaFamilyId;
  assignedBot: AssignedTradingBot;
  hypothesis: string;
  expectedEdgeSource: string;
  requiredData: string[];
  strategyType: string;
  modelType: string;
  backtestStatus: AlphaStatus;
  paperStatus: AlphaStatus;
  liveStatus: AlphaStatus;
  confidenceScore: number | "N/A";
  evidenceScore: number | "N/A";
  overfittingRisk: AlphaRisk;
  dataQuality: AlphaQuality;
  implementationDifficulty: AlphaDifficulty;
  currentVerdict: AlphaVerdict;
  notes: string;
};

export type BotAlignment = {
  bot: AssignedTradingBot;
  mandate: string;
  alphaFamilies: AlphaFamilyId[];
  hardBoundary: string;
};

export const alphaLabSummary = {
  version: "v1.0",
  status: "Research Engine Foundation",
  mission: "Create a permanent alpha-generation system where every hypothesis competes against evidence and no strategy keeps its place without continued validation.",
  doctrine: "No strategy is permanent. Every hypothesis competes against evidence. Every model must continually earn its place. The edge is not one signal. The edge is the research engine.",
  continuousImprovement: "THE GRID does not seek a single perfect strategy. THE GRID builds a machine for discovering, testing, rejecting, improving, and compounding alpha hypotheses. The research engine is the edge.",
  safety: "No fake alpha, fake backtests, fake data, live trading, exchange connections, broker connections, or strategy promotion without evidence.",
};

export const alphaFamilies: AlphaFamily[] = [
  {
    id: "ALPHA-100",
    name: "Price Action",
    focus: "Intraday and chart-structure hypotheses that can be expressed mechanically and tested with historical OHLCV data.",
    examples: ["ORB", "VWAP", "trend continuation", "mean reversion", "gap fill", "opening drive"],
    assignedBots: ["ORION", "ATLAS"],
  },
  {
    id: "ALPHA-200",
    name: "Market Microstructure",
    focus: "Liquidity, liquidation, funding, open-interest, order-flow, and structure hypotheses that must become mechanical before testing.",
    examples: ["liquidations", "funding", "open interest", "whale liquidations", "liquidation imbalance", "order book imbalance", "CVD", "liquidity sweeps", "FVG"],
    assignedBots: ["WRAITH"],
  },
  {
    id: "ALPHA-300",
    name: "Statistical Arbitrage",
    focus: "Relative-value hypotheses built on relationships between instruments, spreads, factors, and correlation regimes.",
    examples: ["pairs", "cointegration", "spread mean reversion", "correlation breakdowns", "factor neutral trades"],
    assignedBots: ["PAIRFORGE"],
  },
  {
    id: "ALPHA-400",
    name: "Options / Volatility",
    focus: "Options and volatility hypotheses that remain research-only until data, assignment modeling, and risk controls are solved.",
    examples: ["IV rank", "IV crush", "volatility risk premium", "gamma exposure", "dealer positioning", "skew"],
    assignedBots: ["VOLTA"],
  },
  {
    id: "ALPHA-500",
    name: "Machine Learning",
    focus: "Models that may generate candidate signals, but only earn attention by beating simple baselines out-of-sample.",
    examples: ["LSTM", "XGBoost", "random forest", "HMM", "regime models", "transformers", "temporal CNN"],
    assignedBots: ["WRAITH", "ORION", "ATLAS"],
  },
  {
    id: "ALPHA-600",
    name: "Alternative Data",
    focus: "External information streams that require strict provenance, legality, and evidence controls before entering any model.",
    examples: ["news", "sentiment", "social", "on-chain flows", "ETF flows", "macro regimes"],
    assignedBots: ["ATLAS", "WRAITH"],
  },
];

export const alphaRecords: AlphaRecord[] = [
  {
    id: "ALPHA-101",
    name: "SPY / QQQ Opening Range Breakout",
    family: "ALPHA-100",
    assignedBot: "ORION",
    hypothesis: "Opening range breaks may contain intraday momentum or failure information when tested across 5m, 15m, and 30m variants.",
    expectedEdgeSource: "Intraday structure, volatility regime, time-of-day behavior, and execution discipline.",
    requiredData: ["1m/5m OHLCV", "VWAP", "ATR", "previous day high/low", "premarket high/low if available", "VIX/news placeholders"],
    strategyType: "Intraday price-action breakout",
    modelType: "Rule-based backtest",
    backtestStatus: "Backtest Required",
    paperStatus: "Not Started",
    liveStatus: "Live Forbidden",
    confidenceScore: "N/A",
    evidenceScore: "N/A",
    overfittingRisk: "Medium",
    dataQuality: "N/A",
    implementationDifficulty: "Medium",
    currentVerdict: "Backtest",
    notes: "ORION v0.1 backtester exists. No historical result or profitability claim exists.",
  },
  {
    id: "ALPHA-201",
    name: "Mechanical Liquidity Sweep / FVG Reclaim",
    family: "ALPHA-200",
    assignedBot: "WRAITH",
    hypothesis: "Liquidity sweep and fair-value-gap concepts may be testable only after they are converted into precise mechanical rules.",
    expectedEdgeSource: "Forced liquidity events, structural displacement, and objective reclaim/failure levels.",
    requiredData: ["intraday OHLCV", "session highs/lows", "swing highs/lows", "gap/imbalance detection", "volume", "slippage assumptions"],
    strategyType: "Mechanical market-structure research",
    modelType: "Rule-based signal candidate",
    backtestStatus: "Research",
    paperStatus: "Not Started",
    liveStatus: "Live Forbidden",
    confidenceScore: "N/A",
    evidenceScore: "N/A",
    overfittingRisk: "High",
    dataQuality: "N/A",
    implementationDifficulty: "High",
    currentVerdict: "Research More",
    notes: "Rejected unless every signal is code-definable and compared to a baseline.",
  },
  {
    id: "ALPHA-301",
    name: "Cointegrated Pair Mean Reversion",
    family: "ALPHA-300",
    assignedBot: "PAIRFORGE",
    hypothesis: "Stable cointegrated relationships may produce testable spread mean-reversion candidates after costs and borrow/liquidity constraints.",
    expectedEdgeSource: "Temporary spread dislocations in statistically related instruments.",
    requiredData: ["historical prices", "corporate actions", "borrow/cost assumptions", "liquidity filters"],
    strategyType: "Statistical arbitrage",
    modelType: "Cointegration / spread z-score",
    backtestStatus: "Research",
    paperStatus: "Not Started",
    liveStatus: "Live Forbidden",
    confidenceScore: "N/A",
    evidenceScore: "N/A",
    overfittingRisk: "High",
    dataQuality: "N/A",
    implementationDifficulty: "High",
    currentVerdict: "Research More",
    notes: "PAIRFORGE has no prototype yet.",
  },
  {
    id: "ALPHA-401",
    name: "Volatility Risk Premium Screen",
    family: "ALPHA-400",
    assignedBot: "VOLTA",
    hypothesis: "Certain IV conditions may imply a volatility risk premium, but options data quality and assignment modeling must be solved first.",
    expectedEdgeSource: "Difference between implied and realized volatility after realistic execution, fees, spreads, and assignment risk.",
    requiredData: ["options chains", "IV history", "realized volatility", "earnings/events", "spreads", "assignment assumptions"],
    strategyType: "Options volatility research",
    modelType: "Screen / rules / risk model",
    backtestStatus: "Research",
    paperStatus: "Not Started",
    liveStatus: "Live Forbidden",
    confidenceScore: "N/A",
    evidenceScore: "N/A",
    overfittingRisk: "Very High",
    dataQuality: "N/A",
    implementationDifficulty: "Very High",
    currentVerdict: "Research More",
    notes: "No options execution or broker connection exists.",
  },
  {
    id: "ALPHA-501",
    name: "Sequential Liquidation Model",
    family: "ALPHA-500",
    assignedBot: "WRAITH",
    hypothesis: "Liquidation, funding, open-interest, volume, and price sequences may contain nonlinear information about future returns, directional moves, volatility expansion, or liquidation cascades.",
    expectedEdgeSource: "Forced-position dynamics and sequence patterns that may be momentum, contrarian, or nonlinear. The model tests both possibilities and lets evidence decide.",
    requiredData: ["timestamp", "symbol", "OHLCV", "long/short liquidation USD", "long/short liquidation counts", "largest liquidation sizes", "open interest", "funding rate"],
    strategyType: "Signal-generation research",
    modelType: "LSTM sequence classifier with baseline comparison",
    backtestStatus: "Research",
    paperStatus: "Not Started",
    liveStatus: "Live Forbidden",
    confidenceScore: "N/A",
    evidenceScore: "N/A",
    overfittingRisk: "Very High",
    dataQuality: "N/A",
    implementationDifficulty: "High",
    currentVerdict: "Research More",
    notes: "WRAITH-LSTM v0.2 has data contract and validation. No model training is valid until real historical data passes validation. No alpha claim exists.",
  },
  {
    id: "ALPHA-601",
    name: "Macro Regime Allocation Filter",
    family: "ALPHA-600",
    assignedBot: "ATLAS",
    hypothesis: "Macro and ETF-flow regimes may help classify when long-term factor or trend systems should reduce exposure.",
    expectedEdgeSource: "Persistent cross-asset regime behavior, not short-term prediction.",
    requiredData: ["ETF flows", "rates", "inflation", "sector returns", "trend/factor data", "macro event calendar"],
    strategyType: "Portfolio filter research",
    modelType: "Regime classifier / rules",
    backtestStatus: "Research",
    paperStatus: "Not Started",
    liveStatus: "Live Forbidden",
    confidenceScore: "N/A",
    evidenceScore: "N/A",
    overfittingRisk: "High",
    dataQuality: "N/A",
    implementationDifficulty: "High",
    currentVerdict: "Research More",
    notes: "No data provider or prototype has been approved.",
  },
];

export const botAlignments: BotAlignment[] = [
  { bot: "ORION", mandate: "SPY / QQQ price-action and intraday structure.", alphaFamilies: ["ALPHA-100", "ALPHA-500"], hardBoundary: "No broker connection or paper/live mode without approved backtest evidence." },
  { bot: "WRAITH", mandate: "Market microstructure, liquidations, funding, open interest, whale liquidations, and ICT/FVG/liquidity concepts only if mechanical.", alphaFamilies: ["ALPHA-200", "ALPHA-500", "ALPHA-600"], hardBoundary: "No exchange or wallet connection. No vague discretionary signal enters the bot." },
  { bot: "PAIRFORGE", mandate: "Statistical arbitrage and relative value.", alphaFamilies: ["ALPHA-300"], hardBoundary: "No prototype until pairs, costs, and data quality are specified." },
  { bot: "VOLTA", mandate: "Options, volatility, IV, gamma, and dealer-positioning research.", alphaFamilies: ["ALPHA-400"], hardBoundary: "No options execution, broker connection, or assignment-risk shortcut." },
  { bot: "ATLAS", mandate: "Long-term portfolio, factors, trend, and macro regimes.", alphaFamilies: ["ALPHA-100", "ALPHA-600"], hardBoundary: "No allocation decision without historical validation and Mission Commander review." },
];

export const alphaVerdictOrder: AlphaVerdict[] = ["Reject", "Research More", "Prototype", "Backtest", "Paper Test", "Live Candidate", "Retired"];

export const alphaLabMetrics = {
  families: alphaFamilies.length,
  records: alphaRecords.length,
  prototypeReady: alphaRecords.filter((record) => record.currentVerdict === "Prototype").length,
  backtestQueue: alphaRecords.filter((record) => record.currentVerdict === "Backtest").length,
  liveCandidates: alphaRecords.filter((record) => record.currentVerdict === "Live Candidate").length,
  evidenceScored: alphaRecords.filter((record) => record.evidenceScore !== "N/A").length,
  fakeAlphaClaims: 0,
  liveConnections: 0,
};
