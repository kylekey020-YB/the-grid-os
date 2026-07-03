export type CommandBriefStatus = "On Track" | "Needs Review" | "Blocked" | "Monitoring" | "N/A";

export type CommandBriefSectionName =
  | "Operations"
  | "Revenue"
  | "Engineering"
  | "Trading"
  | "Knowledge"
  | "Customers"
  | "Launches"
  | "Backtests"
  | "Mission Records";

export type CommandBriefSection = {
  name: CommandBriefSectionName;
  status: CommandBriefStatus;
  signal: string;
  evidence: string;
  blocker: string;
  nextAction: string;
  relatedMissionId: string;
  obsidianNote: string;
};

export const commandBriefSummary = {
  version: "Daily Command Brief v1.0",
  purpose: "The first morning page for Mission Commander: one standardized brief, one recommendation, no extra coordination load.",
  doctrineSource: "GRID_SYSTEM_PROMPT.md",
  template: "COMMAND_BRIEF_TEMPLATE.md",
  obsidianDestination: "01 Executive/COMMAND_BRIEF_TEMPLATE.md",
  rule: "Every division reports with the same schema. Unknowns remain N/A until evidence exists.",
};

export const commandBriefSchema = [
  "Status",
  "Signal",
  "Evidence",
  "Blocker",
  "Next Action",
  "Related Mission ID",
  "Obsidian Note",
];

export const commandBriefSections: CommandBriefSection[] = [
  {
    name: "Operations",
    status: "Needs Review",
    signal: "Operations Hub is now the central mission queue.",
    evidence: "MH-001 through MH-006 exist in src/data/operationsHub.ts.",
    blocker: "Mission Commander still needs one morning review habit around the brief.",
    nextAction: "Start the day here, then move to Operations Hub only if a mission needs action.",
    relatedMissionId: "MH-005",
    obsidianNote: "01 Executive/MISSION_BOARD.md",
  },
  {
    name: "Revenue",
    status: "Monitoring",
    signal: "EXP-1 Fiverr AI Automation Consulting is live.",
    evidence: "Launch Intelligence records one live product; real revenue and customer counts remain Unknown or Awaiting Evidence.",
    blocker: "No verified marketplace metrics are recorded yet.",
    nextAction: "Record real impressions, clicks, messages, consultations, orders, reviews, and revenue when available; keep R-005 POD research evidence-only.",
    relatedMissionId: "MH-001",
    obsidianNote: "12 Launches/EXP-1 Fiverr AI Automation Consulting.md",
  },
  {
    name: "Engineering",
    status: "Monitoring",
    signal: "Execution Support Sprint has shifted work toward revenue, coordination, and validated learning.",
    evidence: "GRID_SYSTEM_PROMPT.md and EXECUTION_SUPPORT_SPRINT.md define the feature gate.",
    blocker: "npm validation is blocked in sandbox; TypeScript fallback is the current verification path.",
    nextAction: "Keep changes scoped to execution support and validate locally before merge approval.",
    relatedMissionId: "MH-003",
    obsidianNote: "06 Engineering/Execution Support Sprint.md",
  },
  {
    name: "Trading",
    status: "Blocked",
    signal: "ORION Backtester is Engineering's highest Trading priority.",
    evidence: "MH-002 is P0 and marked Building.",
    blocker: "ORION needs local SPY/QQQ intraday CSV data before meaningful backtest output exists.",
    nextAction: "Provide local CSV data or define the approved data source; no paper or live trading.",
    relatedMissionId: "MH-002",
    obsidianNote: "13 Backtests/ORION 15-Minute ORB.md",
  },
  {
    name: "Knowledge",
    status: "On Track",
    signal: "Obsidian-compatible Markdown is now the default artifact format, and draft playbooks are the reusable process layer.",
    evidence: "GRID_SYSTEM_PROMPT.md, OBSIDIAN_SYNC_MAP.md, OPERATIONS_HUB.md, COMMAND_BRIEF_TEMPLATE.md, GRID_PLAYBOOKS.md, and PLAYBOOK_TEMPLATE.md exist.",
    blocker: "Real vault path may be blocked by sandbox, so writable vault package is used when needed.",
    nextAction: "Mirror major artifacts into the Obsidian vault or writable vault package; promote playbooks only after evidence exists.",
    relatedMissionId: "MH-003",
    obsidianNote: "01 Executive/GRID_SYSTEM_PROMPT.md",
  },
  {
    name: "Customers",
    status: "N/A",
    signal: "No verified customer messages are recorded.",
    evidence: "Operations Hub customer messages lane remains N/A.",
    blocker: "No customer evidence exists yet.",
    nextAction: "Record customer messages only when real messages exist.",
    relatedMissionId: "MH-001",
    obsidianNote: "11 Customers/index.md",
  },
  {
    name: "Launches",
    status: "Monitoring",
    signal: "One launch is active: EXP-1 Fiverr AI Automation Consulting.",
    evidence: "Operations Hub records Products Live = 1.",
    blocker: "Launch performance metrics are not recorded yet.",
    nextAction: "Measure real launch signals without over-editing the live listing.",
    relatedMissionId: "MH-001",
    obsidianNote: "12 Launches/index.md",
  },
  {
    name: "Backtests",
    status: "Blocked",
    signal: "No backtests are running.",
    evidence: "Operations Hub records Backtests = 0.",
    blocker: "ORION data dependency remains unresolved.",
    nextAction: "Do not interpret performance until local historical test data exists.",
    relatedMissionId: "MH-002",
    obsidianNote: "13 Backtests/index.md",
  },
  {
    name: "Mission Records",
    status: "Needs Review",
    signal: "Mission Records should become the daily evidence trail.",
    evidence: "Mission ID gate exists, but durable Mission Record count remains N/A.",
    blocker: "No connected Mission Record count exists yet.",
    nextAction: "Create a Mission Record when a mission changes state or produces evidence.",
    relatedMissionId: "MH-005",
    obsidianNote: "02 Mission Records/index.md",
  },
];

export const commandBriefRecommendation = {
  title: "Focus today on revenue evidence before new building.",
  rationale: "The live Fiverr offer is the shortest path to validated learning and possible revenue. ORION remains important, but it is blocked by data. New architecture should wait unless it reduces coordination or preserves evidence.",
  missionId: "MH-001",
  owner: "Mission Commander / Revenue Architect",
  nextAction: "Check real Fiverr signals, record them in the launch note, then decide whether any listing refinement is evidence-backed.",
};

export const commandBriefMetrics = {
  sections: commandBriefSections.length,
  blockers: commandBriefSections.filter((section) => section.status === "Blocked").length,
  needsReview: commandBriefSections.filter((section) => section.status === "Needs Review").length,
  recommendations: 1,
};
