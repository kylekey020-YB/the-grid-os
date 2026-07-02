export type SafetyState =
  | "Paper-only"
  | "Research-only"
  | "Inventory blocked"
  | "Read-only watcher"
  | "Released foundation";

export type ExperimentPhase =
  | "Post-fix data accumulation"
  | "100-shot accumulation"
  | "Sourcing economics"
  | "Regime-switching hypothesis"
  | "v0.2 planning";

export type MissionSource =
  | "Last known from handoff"
  | "Manual update required"
  | "Pending live integration"
  | "Static typed data"
  | "Commerce handoff doc";

export type MissionRiskLevel = "Low" | "Medium" | "High" | "Controlled";

export type MissionStatus = {
  id: "apex1" | "clu" | "commerce" | "backtester" | "grid";
  name: string;
  callsign: string;
  status: string;
  phase: ExperimentPhase;
  lastKnownUpdate: string;
  currentObjective: string;
  safetyState: SafetyState;
  nextAction: string;
  dataSource: MissionSource;
  truth: string;
  riskLevel: MissionRiskLevel;
  accent: "cyan" | "purple" | "magenta" | "red" | "gold" | "emerald" | "blue";
};

export type WatcherStatus = {
  id: string;
  name: string;
  emoji: string;
  role: string;
  watches: string;
  currentSignal: string;
  lastUpdate: string;
  statusBadge: "READ-ONLY WATCHER";
  promotionStatus: "Workstation Monitor, not Program";
  accent: MissionStatus["accent"];
};

export type ArchitectProfile = {
  id: "zenith";
  name: string;
  emoji: string;
  title: string;
  status: "ACTIVE";
  mission: string;
  responsibilities: string[];
  currentFocus: string;
  safety: string[];
  dataSource: MissionSource;
  accent: MissionStatus["accent"];
};

export const zenithProfile: ArchitectProfile = {
  id: "zenith",
  name: "ZENITH",
  emoji: "🧠",
  title: "Systems Architect",
  status: "ACTIVE",
  mission: "Coordinate THE GRID",
  responsibilities: [
    "Architecture",
    "Long-term planning",
    "Cross-project integration",
    "Commerce strategy",
    "Trading doctrine",
    "AI ecosystem design",
  ],
  currentFocus: "Mission Control v0.2",
  safety: [
    "Reality before automation",
    "Architecture before complexity",
    "Every module earns its place",
  ],
  dataSource: "Static typed data",
  accent: "purple",
};

export const missionStatuses: MissionStatus[] = [
  {
    id: "apex1",
    name: "APEX1",
    callsign: "Alpha research engine",
    status: "Paper Research",
    phase: "Post-fix data accumulation",
    lastKnownUpdate: "Last known from handoff",
    currentObjective: "Gather dozens of post-fix trades before judging expectancy.",
    safetyState: "Paper-only",
    nextAction: "Continue collecting paper-trade data; do not optimize exits yet.",
    dataSource: "Last known from handoff",
    truth: "Prior state was negative expectancy; no conclusions until new data.",
    riskLevel: "Controlled",
    accent: "cyan",
  },
  {
    id: "clu",
    name: "CLU",
    callsign: "Moonshot striker",
    status: "Paper Moonshot Test",
    phase: "100-shot accumulation",
    lastKnownUpdate: "Last known from handoff",
    currentObjective: "Determine whether rare winners cover many tiny losers.",
    safetyState: "Paper-only",
    nextAction: "Continue paper-only shot tracking toward the 100-shot milestone.",
    dataSource: "Last known from handoff",
    truth: "Last known 19/100 closed shots, 2 wins, 17 losses, -$4.39 total PnL.",
    riskLevel: "High",
    accent: "magenta",
  },
  {
    id: "commerce",
    name: "Commerce",
    callsign: "Validation forge",
    status: "Gate A",
    phase: "Sourcing economics",
    lastKnownUpdate: "Commerce Gate A Phase A1",
    currentObjective: "Prove Bambu A1 rescue-kit economics before inventory.",
    safetyState: "Inventory blocked",
    nextAction: "Resolve live supplier quote unknowns before any purchase or launch.",
    dataSource: "Commerce handoff doc",
    truth: "No inventory purchase, branding, or supplier spend until Gate A passes.",
    riskLevel: "Medium",
    accent: "gold",
  },
  {
    id: "backtester",
    name: "Backtester",
    callsign: "Research gauntlet",
    status: "Research",
    phase: "Regime-switching hypothesis",
    lastKnownUpdate: "Manual update required",
    currentObjective: "Validate strategies with no lookahead, realistic costs, and train/test separation.",
    safetyState: "Research-only",
    nextAction: "Keep research honest; no proven edge is assumed.",
    dataSource: "Manual update required",
    truth: "Validated research tool, no proven edge yet.",
    riskLevel: "Controlled",
    accent: "emerald",
  },
  {
    id: "grid",
    name: "THE GRID",
    callsign: "Mission OS core",
    status: "v0.1.1 released",
    phase: "v0.2 planning",
    lastKnownUpdate: "Static typed data",
    currentObjective: "Mission Control, Knowledge OS, and mission logs.",
    safetyState: "Released foundation",
    nextAction: "Build read-only monitoring surfaces grounded in handoff docs.",
    dataSource: "Static typed data",
    truth: "UI foundation is frozen except for bug fixes and validated workflow support.",
    riskLevel: "Low",
    accent: "blue",
  },
];

export const watcherStatuses: WatcherStatus[] = [
  {
    id: "sentinel",
    name: "SENTINEL",
    emoji: "🛡️",
    role: "Risk & Safety Watcher",
    watches: "PAPER flags, live-trading bans, inventory bans, wallet/signing warnings",
    currentSignal: "Safety gates active",
    lastUpdate: "Static watcher registry",
    statusBadge: "READ-ONLY WATCHER",
    promotionStatus: "Workstation Monitor, not Program",
    accent: "cyan",
  },
  {
    id: "apex-warden",
    name: "APEX WARDEN",
    emoji: "⚡",
    role: "APEX Experiment Watcher",
    watches: "APEX handoff, trade log status, post-fix sample size, negative expectancy warnings",
    currentSignal: "Waiting for meaningful post-fix sample",
    lastUpdate: "Last known from handoff",
    statusBadge: "READ-ONLY WATCHER",
    promotionStatus: "Workstation Monitor, not Program",
    accent: "blue",
  },
  {
    id: "clu-striker",
    name: "CLU STRIKER",
    emoji: "🔴",
    role: "Moonshot Watcher",
    watches: "CLU paper-shot progress, 100-shot milestone, moonbag winners, loss rate",
    currentSignal: "19/100 shots at last handoff",
    lastUpdate: "Last known from handoff",
    statusBadge: "READ-ONLY WATCHER",
    promotionStatus: "Workstation Monitor, not Program",
    accent: "red",
  },
  {
    id: "merchant-forge",
    name: "MERCHANT FORGE",
    emoji: "🛒",
    role: "Commerce Validation Watcher",
    watches: "Commerce Gate A, sourcing economics, supplier proof, no-inventory validation",
    currentSignal: "Gate A controlling gate",
    lastUpdate: "Commerce handoff doc",
    statusBadge: "READ-ONLY WATCHER",
    promotionStatus: "Workstation Monitor, not Program",
    accent: "gold",
  },
  {
    id: "archivist",
    name: "ARCHIVIST",
    emoji: "📚",
    role: "Knowledge / Memory Watcher",
    watches: "Docs, handoff files, validation records, project logs",
    currentSignal: "Documentation is source of truth",
    lastUpdate: "Static watcher registry",
    statusBadge: "READ-ONLY WATCHER",
    promotionStatus: "Workstation Monitor, not Program",
    accent: "purple",
  },
  {
    id: "gauntlet",
    name: "GAUNTLET",
    emoji: "🧪",
    role: "Backtester / Research Watcher",
    watches: "Strategy validation, no-lookahead tests, train/test splits",
    currentSignal: "No proven edge yet",
    lastUpdate: "Manual update required",
    statusBadge: "READ-ONLY WATCHER",
    promotionStatus: "Workstation Monitor, not Program",
    accent: "emerald",
  },
  {
    id: "grid-core",
    name: "GRID CORE",
    emoji: "🌐",
    role: "System Watcher",
    watches: "THE GRID version, roadmap, mission control status",
    currentSignal: "v0.2 Mission Control planning",
    lastUpdate: "Static typed data",
    statusBadge: "READ-ONLY WATCHER",
    promotionStatus: "Workstation Monitor, not Program",
    accent: "cyan",
  },
];
