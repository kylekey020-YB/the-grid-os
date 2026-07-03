export type QuantScoutRoleStatus = "Research Only" | "Manual Review" | "Planned";
export type QuantTargetBot = "PAIRFORGE" | "VOLTA" | "ATLAS" | "ORION" | "WRAITH" | "Cross-Bot";
export type QuantSourceType = "GitHub" | "QuantConnect" | "Reddit" | "Academic Paper" | "Options Research" | "ICT Mechanics" | "Data Vendor" | "Backtest Feasibility" | "Framework";
export type QuantEvidenceQuality = "N/A" | "Low" | "Medium" | "High";
export type QuantDifficulty = "Low" | "Medium" | "High";
export type QuantRisk = "Low" | "Medium" | "High" | "Very High";
export type QuantRecommendation = "Reject" | "Research More" | "Prototype";
export type QuantWorkflowStage = "Source Found" | "Summarized" | "Scored" | "Assigned to Bot" | "Backtest Plan" | "Prototype Candidate" | "Paper Test Candidate" | "Rejected" | "Advanced";

export type QuantResearchScout = {
  id: string;
  emoji: string;
  name: string;
  mission: string;
  watches: string[];
  outputs: string[];
  status: QuantScoutRoleStatus;
  reportsTo: string;
};

export type QuantScoutReport = {
  id: string;
  title: string;
  sourceType: QuantSourceType;
  targetBot: QuantTargetBot;
  strategyFamily: string;
  summary: string;
  sourceLinkPlaceholder: string;
  evidenceQuality: QuantEvidenceQuality;
  mechanicalRuleClarity: QuantEvidenceQuality;
  dataRequirements: string;
  backtestDifficulty: QuantDifficulty;
  overfittingRisk: QuantRisk;
  implementationDifficulty: QuantDifficulty;
  paperTestReadiness: QuantEvidenceQuality;
  recommendation: QuantRecommendation;
  confidenceScore: number;
  workflowStage: QuantWorkflowStage;
};

export type StrategyQueueItem = {
  id: string;
  targetBot: QuantTargetBot;
  strategy: string;
  stage: QuantWorkflowStage;
  nextAction: string;
  recommendation: QuantRecommendation;
  confidenceScore: number;
};

export type SourceLibraryItem = {
  id: string;
  sourceType: QuantSourceType;
  title: string;
  link: string;
  relevance: string;
  assignedBot: QuantTargetBot;
  reviewStatus: "Reviewed" | "Needs Review" | "Reference Only";
};

export const quantResearchScoutsSummary = {
  version: "v2.7.0",
  name: "Quant Research Scout Engine",
  status: "Research-only architecture / no execution",
  mission:
    "Turn Trading Research Corps into a research engine that collects, summarizes, scores, assigns, and ranks trading knowledge before any backtest or paper test.",
  doctrine: "Quant Scouts research. Backtesters validate. Programs paper trade. Mission Commander approves live risk.",
  safety:
    "No live trading, no broker connection, no wallet connection, no options execution, no autonomous execution, and no money at risk.",
};

export const quantResearchWorkflow: QuantWorkflowStage[] = [
  "Source Found",
  "Summarized",
  "Scored",
  "Assigned to Bot",
  "Backtest Plan",
  "Prototype Candidate",
  "Paper Test Candidate",
  "Rejected",
  "Advanced",
];

export const quantResearchScouts: QuantResearchScout[] = [
  {
    id: "qrs-github",
    emoji: "💻",
    name: "GitHub Quant Scout",
    mission: "Find open-source frameworks, repos, strategy examples, indicators, and backtest engines.",
    watches: ["QuantConnect LEAN", "Backtrader", "vectorbt", "Zipline Reloaded", "strategy repositories"],
    outputs: ["framework notes", "license notes", "implementation examples", "code quality warnings"],
    status: "Research Only",
    reportsTo: "Trading Research Corps",
  },
  {
    id: "qrs-quantconnect",
    emoji: "🧪",
    name: "QuantConnect Scout",
    mission: "Find LEAN examples, strategy library references, community research, and docs.",
    watches: ["LEAN docs", "indicator docs", "algorithm examples", "community research"],
    outputs: ["LEAN feasibility notes", "data support notes", "indicator references"],
    status: "Research Only",
    reportsTo: "Trading Research Corps",
  },
  {
    id: "qrs-reddit",
    emoji: "🗣️",
    name: "Reddit Quant Scout",
    mission: "Find trader discussions, failure modes, practical lessons, and overfitting warnings.",
    watches: ["r/algotrading", "r/options", "r/Daytrading", "public discussion threads"],
    outputs: ["failure patterns", "practical constraints", "common warnings"],
    status: "Manual Review",
    reportsTo: "Trading Research Corps",
  },
  {
    id: "qrs-academic",
    emoji: "📄",
    name: "Academic Paper Scout",
    mission: "Find papers on momentum, pairs trading, volatility, factors, and intraday edges.",
    watches: ["SSRN", "arXiv", "journal abstracts", "working papers"],
    outputs: ["paper summaries", "testable claims", "replication risks"],
    status: "Research Only",
    reportsTo: "Trading Research Corps",
  },
  {
    id: "qrs-options",
    emoji: "🌩️",
    name: "Options Strategy Scout",
    mission: "Find options research, covered calls, cash-secured puts, IV rank, and volatility risk premium material.",
    watches: ["Cboe indexes", "options papers", "strategy docs", "risk disclosures"],
    outputs: ["VOLTA candidates", "data burden notes", "tail-risk warnings"],
    status: "Research Only",
    reportsTo: "Trading Research Corps",
  },
  {
    id: "qrs-ict",
    emoji: "🕯️",
    name: "ICT Mechanics Scout",
    mission: "Find attempts to define ICT/FVG/liquidity concepts mechanically.",
    watches: ["mechanical FVG definitions", "liquidity sweep rules", "market structure logic", "baseline comparisons"],
    outputs: ["code-definable rules", "untestable concept rejections", "WRAITH candidate notes"],
    status: "Research Only",
    reportsTo: "Trading Research Corps",
  },
  {
    id: "qrs-data-vendor",
    emoji: "🗄️",
    name: "Data Vendor Scout",
    mission: "Find available datasets for stocks, options, crypto, intraday candles, and fundamentals.",
    watches: ["intraday candles", "options chains", "crypto candles", "fundamentals", "economic calendar data"],
    outputs: ["data cost notes", "coverage notes", "API/manual export feasibility"],
    status: "Research Only",
    reportsTo: "Trading Research Corps",
  },
  {
    id: "qrs-backtest",
    emoji: "📊",
    name: "Backtest Feasibility Scout",
    mission: "Rank strategies by how cleanly they can be tested.",
    watches: ["lookahead risk", "slippage modeling", "data availability", "baseline comparisons", "walk-forward feasibility"],
    outputs: ["readiness score", "prototype priority", "rejection reasons"],
    status: "Research Only",
    reportsTo: "Trading Research Corps",
  },
];

export const quantScoutReports: QuantScoutReport[] = [
  {
    id: "QSR-001",
    title: "ORION Opening Range Breakout research brief",
    sourceType: "Academic Paper",
    targetBot: "ORION",
    strategyFamily: "Opening Range Breakout",
    summary:
      "SSRN ORB research studies QQQ/TQQQ opening-range breakout behavior, but THE GRID must independently replicate the rules with conservative slippage, no leverage assumptions, and walk-forward validation before any paper test.",
    sourceLinkPlaceholder: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4416622",
    evidenceQuality: "Medium",
    mechanicalRuleClarity: "High",
    dataRequirements: "SPY/QQQ 1m or 5m OHLCV, session calendar, premarket/RTH split, ATR, VIX, slippage/spread assumptions.",
    backtestDifficulty: "Medium",
    overfittingRisk: "Medium",
    implementationDifficulty: "Medium",
    paperTestReadiness: "Medium",
    recommendation: "Prototype",
    confidenceScore: 82,
    workflowStage: "Prototype Candidate",
  },
  {
    id: "QSR-002",
    title: "ORION VWAP trend continuation research brief",
    sourceType: "Academic Paper",
    targetBot: "ORION",
    strategyFamily: "VWAP Trend",
    summary:
      "VWAP literature and docs support VWAP as a testable intraday benchmark. It is promising as a filter or second candidate, but should not outrank ORB until ORB baseline is replicated.",
    sourceLinkPlaceholder: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4631351 / https://www.quantconnect.com/docs/v2/writing-algorithms/indicators/supported-indicators/volume-weighted-average-price-indicator",
    evidenceQuality: "Medium",
    mechanicalRuleClarity: "High",
    dataRequirements: "Intraday OHLCV, VWAP, volume, ATR, trend-day filter, VIX proxy.",
    backtestDifficulty: "Medium",
    overfittingRisk: "Medium",
    implementationDifficulty: "Medium",
    paperTestReadiness: "Medium",
    recommendation: "Research More",
    confidenceScore: 76,
    workflowStage: "Backtest Plan",
  },
  {
    id: "QSR-003",
    title: "Framework shortlist for first ORION prototype",
    sourceType: "GitHub",
    targetBot: "ORION",
    strategyFamily: "Backtest Framework",
    summary:
      "vectorbt and Backtrader are fast Python candidates for the first ORION prototype; LEAN is stronger for future multi-asset and options workflows but heavier for first pass.",
    sourceLinkPlaceholder: "https://github.com/polakowo/vectorbt / https://github.com/mementum/backtrader / https://github.com/QuantConnect/Lean",
    evidenceQuality: "High",
    mechanicalRuleClarity: "High",
    dataRequirements: "Local CSV/parquet minute bars first; LEAN data integration later if needed.",
    backtestDifficulty: "Low",
    overfittingRisk: "Medium",
    implementationDifficulty: "Low",
    paperTestReadiness: "Medium",
    recommendation: "Prototype",
    confidenceScore: 80,
    workflowStage: "Prototype Candidate",
  },
  {
    id: "QSR-004",
    title: "WRAITH mechanical-rule caution",
    sourceType: "ICT Mechanics",
    targetBot: "WRAITH",
    strategyFamily: "Liquidity Sweep / FVG",
    summary:
      "Liquidity sweep and FVG concepts may become testable only if translated into exact candle, threshold, session, and invalidation rules. Visual labeling is rejected.",
    sourceLinkPlaceholder: "Manual source review required; no trusted mechanical source accepted yet.",
    evidenceQuality: "Low",
    mechanicalRuleClarity: "Low",
    dataRequirements: "Intraday OHLCV, session highs/lows, swing detector, imbalance detector, spread/slippage assumptions.",
    backtestDifficulty: "Medium",
    overfittingRisk: "Very High",
    implementationDifficulty: "High",
    paperTestReadiness: "Low",
    recommendation: "Research More",
    confidenceScore: 45,
    workflowStage: "Summarized",
  },
  {
    id: "QSR-005",
    title: "VOLTA options data burden brief",
    sourceType: "Options Research",
    targetBot: "VOLTA",
    strategyFamily: "Covered Calls / PutWrite / IV Rank",
    summary:
      "Cboe benchmark indexes support buy-write and put-write research context, but VOLTA requires options chain history, bid/ask, assignment logic, liquidity filters, and capital modeling before prototype.",
    sourceLinkPlaceholder: "https://www.cboe.com/us/indices/dashboard/bxm/ / https://www.cboe.com/us/indices/dashboard/put/",
    evidenceQuality: "Medium",
    mechanicalRuleClarity: "Medium",
    dataRequirements: "Historical options chains, greeks, IV, bid/ask, underlying prices, dividends, assignment rules.",
    backtestDifficulty: "High",
    overfittingRisk: "Medium",
    implementationDifficulty: "High",
    paperTestReadiness: "Low",
    recommendation: "Research More",
    confidenceScore: 58,
    workflowStage: "Scored",
  },
  {
    id: "QSR-006",
    title: "ATLAS ETF momentum backup plan",
    sourceType: "Academic Paper",
    targetBot: "ATLAS",
    strategyFamily: "ETF Momentum / Factor Rotation",
    summary:
      "Momentum and factor research have stronger long-run literature and easier daily data than intraday systems, making ATLAS the backup prototype if minute data is unavailable.",
    sourceLinkPlaceholder: "https://en.wikipedia.org/wiki/Momentum_investing / https://en.wikipedia.org/wiki/Fama%E2%80%93French_three-factor_model",
    evidenceQuality: "Medium",
    mechanicalRuleClarity: "High",
    dataRequirements: "Adjusted daily ETF prices, dividends, benchmark/cash proxy, rebalance calendar.",
    backtestDifficulty: "Low",
    overfittingRisk: "Medium",
    implementationDifficulty: "Low",
    paperTestReadiness: "Medium",
    recommendation: "Prototype",
    confidenceScore: 79,
    workflowStage: "Backtest Plan",
  },
];

export const strategyCandidateQueue: StrategyQueueItem[] = [
  { id: "QSI-001", targetBot: "ORION", strategy: "SPY/QQQ Opening Range Breakout", stage: "Prototype Candidate", nextAction: "Build historical backtest plan and data loader after minute data source is chosen.", recommendation: "Prototype", confidenceScore: 82 },
  { id: "QSI-002", targetBot: "ATLAS", strategy: "ETF Momentum Rotation", stage: "Backtest Plan", nextAction: "Prepare daily-data baseline as fallback/control strategy.", recommendation: "Prototype", confidenceScore: 79 },
  { id: "QSI-003", targetBot: "ORION", strategy: "VWAP Trend Continuation", stage: "Backtest Plan", nextAction: "Use as ORION second candidate or filter after ORB baseline.", recommendation: "Research More", confidenceScore: 76 },
  { id: "QSI-004", targetBot: "PAIRFORGE", strategy: "Cointegrated ETF Pairs", stage: "Scored", nextAction: "Resolve universe, short assumptions, and transaction cost model.", recommendation: "Research More", confidenceScore: 68 },
  { id: "QSI-005", targetBot: "WRAITH", strategy: "Mechanical Prior High/Low Sweep", stage: "Summarized", nextAction: "Define exact rule and random baseline before scoring higher.", recommendation: "Research More", confidenceScore: 65 },
  { id: "QSI-006", targetBot: "VOLTA", strategy: "Covered Call Overlay", stage: "Scored", nextAction: "Resolve options data cost and assignment model before prototype.", recommendation: "Research More", confidenceScore: 61 },
];

export const sourceLibrary: SourceLibraryItem[] = [
  { id: "SRC-001", sourceType: "Framework", title: "QuantConnect LEAN", link: "https://github.com/QuantConnect/Lean", relevance: "Professional-grade multi-asset backtesting framework; useful later for options and multi-asset research.", assignedBot: "Cross-Bot", reviewStatus: "Reviewed" },
  { id: "SRC-002", sourceType: "Framework", title: "Backtrader", link: "https://github.com/mementum/backtrader", relevance: "Python backtesting framework suitable for first ORION prototype.", assignedBot: "ORION", reviewStatus: "Reviewed" },
  { id: "SRC-003", sourceType: "Framework", title: "vectorbt", link: "https://github.com/polakowo/vectorbt", relevance: "Vectorized research engine useful for sweeping ORB/VWAP parameters quickly.", assignedBot: "ORION", reviewStatus: "Reviewed" },
  { id: "SRC-004", sourceType: "Academic Paper", title: "Can Day Trading Really Be Profitable?", link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4416622", relevance: "ORB reference for QQQ/TQQQ; must be replicated independently.", assignedBot: "ORION", reviewStatus: "Reviewed" },
  { id: "SRC-005", sourceType: "Academic Paper", title: "VWAP The Holy Grail for Day Trading Systems", link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4631351", relevance: "VWAP trend strategy reference; useful as ORION filter/second candidate.", assignedBot: "ORION", reviewStatus: "Reviewed" },
  { id: "SRC-006", sourceType: "Options Research", title: "Cboe BXM BuyWrite Index", link: "https://www.cboe.com/us/indices/dashboard/bxm/", relevance: "VOLTA covered-call benchmark context.", assignedBot: "VOLTA", reviewStatus: "Reviewed" },
  { id: "SRC-007", sourceType: "Options Research", title: "Cboe PUT PutWrite Index", link: "https://www.cboe.com/us/indices/dashboard/put/", relevance: "VOLTA cash-secured put-write benchmark context.", assignedBot: "VOLTA", reviewStatus: "Reviewed" },
  { id: "SRC-008", sourceType: "Reddit", title: "Public Reddit quant discussion review", link: "Manual review required", relevance: "Useful for failure modes and overfitting warnings; not accepted as proof.", assignedBot: "Cross-Bot", reviewStatus: "Needs Review" },
];

export const botAssignmentMatrix = [
  { bot: "PAIRFORGE", assignedScouts: ["GitHub Quant Scout", "Academic Paper Scout", "Backtest Feasibility Scout"], currentLead: "Cointegrated ETF Pairs", readiness: "Research More" },
  { bot: "VOLTA", assignedScouts: ["Options Strategy Scout", "Data Vendor Scout", "Backtest Feasibility Scout"], currentLead: "Covered Call Overlay", readiness: "Research More" },
  { bot: "ATLAS", assignedScouts: ["Academic Paper Scout", "Data Vendor Scout", "Backtest Feasibility Scout"], currentLead: "ETF Momentum Rotation", readiness: "Prototype" },
  { bot: "ORION", assignedScouts: ["GitHub Quant Scout", "QuantConnect Scout", "Academic Paper Scout", "Data Vendor Scout", "Backtest Feasibility Scout"], currentLead: "SPY/QQQ Opening Range Breakout", readiness: "Prototype" },
  { bot: "WRAITH", assignedScouts: ["ICT Mechanics Scout", "GitHub Quant Scout", "Backtest Feasibility Scout"], currentLead: "Mechanical Prior High/Low Sweep", readiness: "Research More" },
] as const;

export const rejectedStrategyGraveyard = [
  {
    id: "QRG-001",
    strategy: "WRAITH Order Block / Breaker Block",
    reason: "Rejected until the concept is mechanically defined beyond visual labeling.",
    revisitCondition: "A code-definable rule with objective entry, exit, invalidation, and baseline comparison is produced.",
  },
  {
    id: "QRG-002",
    strategy: "VOLTA 0DTE execution",
    reason: "Rejected as an execution candidate. Allowed only as risk research because gamma, spread, and tail-risk burdens are too high for first prototype.",
    revisitCondition: "Historical options data, risk study, and explicit approval exist.",
  },
];

export const topStrategyRecommendations = [
  "Prototype ORION SPY/QQQ Opening Range Breakout first.",
  "Use Backtrader or vectorbt for the first local backtest; keep LEAN as future multi-asset/options framework.",
  "Keep ATLAS ETF Momentum as the low-frequency fallback/control strategy.",
  "Do not prototype VOLTA until options data cost and assignment modeling are solved.",
  "Do not promote WRAITH concepts unless they are mechanical and baseline-tested.",
];

export const quantResearchMetrics = {
  scouts: quantResearchScouts.length,
  reports: quantScoutReports.length,
  sources: sourceLibrary.length,
  queueItems: strategyCandidateQueue.length,
  prototypeCandidates: strategyCandidateQueue.filter((item) => item.recommendation === "Prototype").length,
  rejected: rejectedStrategyGraveyard.length,
};


export type OrionOrbVariantId = "ORB-5M" | "ORB-15M" | "ORB-30M";

export type OrionOrbVariant = {
  id: OrionOrbVariantId;
  name: string;
  openingRange: string;
  longEntry: string;
  shortEntry: string;
  primaryStop: string;
  profitTargets: string[];
  timeStops: string[];
  researchPurpose: string;
};

export type OrionBacktestSpec = {
  id: string;
  version: string;
  status: string;
  recommendation: string;
  doctrine: string;
  markets: string[];
  requiredIndicators: string[];
  variants: OrionOrbVariant[];
  filters: string[];
  regimeTests: string[];
  visualizationOutputs: string[];
  backtestOutputs: string[];
  passFailCriteria: string[];
};

export const orionIndicatorDoctrine = "Indicators are not edge. Indicators are hypotheses. Every signal must prove value through out-of-sample testing.";

export const orionBacktestSpec001: OrionBacktestSpec = {
  id: "ORION_BACKTEST_SPEC_001",
  version: "v2.7.2",
  status: "Backtest specification ready / no code implementation yet",
  recommendation:
    "Code the 15-minute ORB first because it balances noise reduction and sample size better than the 5-minute and 30-minute variants while still remaining mechanically simple.",
  doctrine: orionIndicatorDoctrine,
  markets: ["SPY", "QQQ"],
  requiredIndicators: ["VWAP", "ATR", "Volume", "Previous day high/low", "Premarket high/low if available", "Time of day", "EMA ribbon", "Regime label placeholder"],
  variants: [
    {
      id: "ORB-5M",
      name: "5-minute Opening Range Breakout",
      openingRange: "Use only 09:30:00-09:34:59 Eastern regular-hours bars.",
      longEntry: "After 09:35, enter long when price trades above the 5-minute opening range high by the configured trigger buffer and optional filters pass.",
      shortEntry: "After 09:35, enter short when price trades below the 5-minute opening range low by the configured trigger buffer and optional filters pass.",
      primaryStop: "Opposite side of the opening range or ATR stop, whichever is closer after sensitivity review.",
      profitTargets: ["1R", "1.5R", "2R", "trail after 1R"],
      timeStops: ["10:30", "11:00", "12:00", "end of day"],
      researchPurpose: "Fastest signal and highest sample count; expected to be noisiest and most sensitive to slippage.",
    },
    {
      id: "ORB-15M",
      name: "15-minute Opening Range Breakout",
      openingRange: "Use only 09:30:00-09:44:59 Eastern regular-hours bars.",
      longEntry: "After 09:45, enter long when price trades above the 15-minute opening range high by the configured trigger buffer and optional filters pass.",
      shortEntry: "After 09:45, enter short when price trades below the 15-minute opening range low by the configured trigger buffer and optional filters pass.",
      primaryStop: "Opposite side of the opening range and ATR stop comparison.",
      profitTargets: ["1R", "1.5R", "2R", "VWAP/EMA trailing stop"],
      timeStops: ["11:00", "12:00", "end of day"],
      researchPurpose: "Recommended first implementation because it reduces opening noise without shrinking sample size as much as the 30-minute variant.",
    },
    {
      id: "ORB-30M",
      name: "30-minute Opening Range Breakout",
      openingRange: "Use only 09:30:00-09:59:59 Eastern regular-hours bars.",
      longEntry: "After 10:00, enter long when price trades above the 30-minute opening range high by the configured trigger buffer and optional filters pass.",
      shortEntry: "After 10:00, enter short when price trades below the 30-minute opening range low by the configured trigger buffer and optional filters pass.",
      primaryStop: "Opposite side of the opening range, ATR stop, or midpoint invalidation test.",
      profitTargets: ["1R", "2R", "end-of-day trend capture"],
      timeStops: ["12:00", "14:00", "end of day"],
      researchPurpose: "Slowest and most selective variant; useful for trend-day detection and fewer false starts.",
    },
  ],
  filters: [
    "VWAP confirmation on/off",
    "ATR regime filter on/off",
    "Gap direction filter on/off",
    "First candle range filter on/off",
    "FOMC/news day exclusion placeholder on/off",
    "EMA ribbon bullish/bearish/compressed filter on/off",
  ],
  regimeTests: [
    "No regime filter baseline",
    "Simple volatility regime",
    "Trend/chop regime",
    "Markov regime model only if feasible",
    "Reject Markov if it adds complexity without improving out-of-sample expectancy",
  ],
  visualizationOutputs: [
    "EMA ribbon and trend heatmap",
    "Time-of-day performance heatmap",
    "Day-of-week performance heatmap",
    "Volatility regime heatmap",
    "Gap-size heatmap",
    "Opening range size heatmap",
    "VWAP distance heatmap",
    "Long vs short performance heatmap",
    "SPY vs QQQ comparison heatmap",
  ],
  backtestOutputs: [
    "equity curve",
    "trade table",
    "win rate",
    "expectancy",
    "profit factor",
    "max drawdown",
    "average winner",
    "average loser",
    "long/short breakdown",
    "time-of-day breakdown",
    "heatmaps",
    "regime breakdown",
    "EMA ribbon filter comparison",
    "ORB variant comparison: 5m / 15m / 30m",
  ],
  passFailCriteria: [
    "Positive out-of-sample expectancy after fees and slippage.",
    "Profit factor greater than 1.15 out of sample, with sensitivity review.",
    "Maximum drawdown must remain inside the predefined research limit.",
    "Performance cannot depend on one narrow parameter combination.",
    "Walk-forward results must not collapse relative to in-sample results.",
    "Random-entry and no-filter baselines must be beaten after costs.",
    "SPY and QQQ results must be reported separately; no cross-market assumption is allowed.",
    "All unknowns and excluded dates must be recorded.",
  ],
};
