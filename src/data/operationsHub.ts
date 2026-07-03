import { launchIntelligenceSummary, launchRecords } from "@/data/launchIntelligence";
export type OperationsMissionStatus =
  | "Draft"
  | "Assigned"
  | "Researching"
  | "Awaiting Review"
  | "Approved"
  | "Building"
  | "Launching"
  | "Measuring"
  | "Completed"
  | "Archived";

export type OperationsPriority = "P0" | "P1" | "P2" | "P3";

export type OperationsMission = {
  missionId: string;
  title: string;
  division: string;
  priority: OperationsPriority;
  owner: string;
  assignedIntelligence: string;
  status: OperationsMissionStatus;
  created: string;
  due: string;
  evidence: string;
  relatedObsidianNote: string;
};

export type FocusItem = {
  id: string;
  title: string;
  missionId: string;
  owner: string;
  nextAction: string;
};

export type ExecutionMetric = {
  label: string;
  value: string;
  evidence: string;
};

export type ExecutionPriority = {
  rank: number;
  name: string;
  reason: string;
};

export type ExecutionGateQuestion = {
  question: string;
  passCondition: string;
};

export type OperationsAction = {
  action: "Create Mission" | "Assign Mission" | "Complete Mission" | "Archive Mission" | "Create Obsidian Note" | "Open Obsidian Note";
  purpose: string;
  boundary: string;
};

export const operationsHubSummary = {
  version: "Operations Hub v1.0",
  status: "Central mission queue / no execution automation",
  purpose: "One screen, one queue, and one daily workflow for reducing Mission Commander coordination.",
  rule: "Nothing enters Mission Control unless it has a Mission ID.",
  doctrineSource: "GRID_SYSTEM_PROMPT.md",
  safety: "The Operations Hub organizes missions only. It does not publish, trade, message, spend, connect accounts, run backtests, or execute approvals.",
};

export const executionPriorityOrder: ExecutionPriority[] = [
  { rank: 1, name: "Customer acquisition", reason: "Direct path to revenue and real market feedback." },
  { rank: 2, name: "Product launches", reason: "Turns validated offers into measurable customer-facing experiments." },
  { rank: 3, name: "Operations Hub", reason: "Reduces Mission Commander coordination and keeps work in one queue." },
  { rank: 4, name: "Obsidian integration", reason: "Preserves execution memory and prevents rediscovery." },
  { rank: 5, name: "Trading validation", reason: "Keeps Trading Corps research evidence-based before risk." },
];

export const executionGateQuestions: ExecutionGateQuestion[] = [
  { question: "Does this increase revenue?", passCondition: "It directly improves acquisition, launch, conversion, retention, or monetization evidence." },
  { question: "Does this reduce coordination?", passCondition: "It removes manual handoff friction or clarifies who owns the next action." },
  { question: "Does this improve validated learning?", passCondition: "It creates better evidence, records, backtests, customer learning, or playbooks." },
];

export const executionMetrics: ExecutionMetric[] = [
  { label: "Revenue", value: launchIntelligenceSummary.revenue, evidence: "Launch Intelligence market metric; no verified revenue record is present yet." },
  { label: "Customers", value: "N/A", evidence: "No verified customer record is present in the repo." },
  { label: "Products Live", value: String(launchIntelligenceSummary.productsLive), evidence: "Launch Intelligence execution metric." },
  { label: "Products Pending", value: "N/A", evidence: "Pending products require approved mission records." },
  { label: "Research Missions", value: "6", evidence: "Current Operations Hub mission queue contains six mission records." },
  { label: "Experiments", value: String(launchRecords.length), evidence: "Launch Intelligence tracked launch records." },
  { label: "Backtests", value: "0", evidence: "ORION is awaiting local intraday CSV data; no backtest run is recorded." },
  { label: "Mission Records", value: "N/A", evidence: "Durable Obsidian Mission Record count is not connected." },
  { label: "Executive Briefs", value: "N/A", evidence: "No verified daily executive brief count is connected." },
];

export const postponedBacklog = [
  "New divisions",
  "New officers",
  "Decorative dashboards",
  "Expanded organizational charts",
  "Speculative automation",
];

export const operationsStatuses: OperationsMissionStatus[] = [
  "Draft",
  "Assigned",
  "Researching",
  "Awaiting Review",
  "Approved",
  "Building",
  "Launching",
  "Measuring",
  "Completed",
  "Archived",
];

export const operationsMissions: OperationsMission[] = [
  {
    missionId: "MH-001",
    title: "Operation First Revenue Evidence Loop",
    division: "Venture Corps",
    priority: "P0",
    owner: "Mission Commander / Revenue Architect",
    assignedIntelligence: "ChatGPT / ZENITH",
    status: "Measuring",
    created: "2026-07-03",
    due: "Daily",
    evidence: "EXP-1 Fiverr AI Automation Consulting is live; metrics remain N/A until platform evidence exists.",
    relatedObsidianNote: "12 Launches/EXP-1 Fiverr AI Automation Consulting.md",
  },
  {
    missionId: "MH-002",
    title: "ORION 15-Minute ORB Data Readiness",
    division: "Trading Corps",
    priority: "P0",
    owner: "Chief Engineer / Trading Corps",
    assignedIntelligence: "Codex",
    status: "Building",
    created: "2026-07-03",
    due: "Highest Trading priority; awaiting local SPY/QQQ intraday CSV data",
    evidence: "ORION backtester prototype exists as Engineering's highest Trading priority; no live trading or paper mode is authorized.",
    relatedObsidianNote: "13 Backtests/ORION 15-Minute ORB.md",
  },
  {
    missionId: "MH-003",
    title: "Obsidian Second Brain Filing Standard",
    division: "Engineering Corps",
    priority: "P1",
    owner: "Codex / Hermes fallback",
    assignedIntelligence: "Codex",
    status: "Building",
    created: "2026-07-03",
    due: "Next documentation artifact",
    evidence: "GRID_SYSTEM_PROMPT.md, OBSIDIAN_SYNC_MAP.md, and MISSION_BOARD.md define Markdown-first operating records.",
    relatedObsidianNote: "01 Executive/GRID_SYSTEM_PROMPT.md",
  },
  {
    missionId: "MH-004",
    title: "Research Router Assignment Discipline",
    division: "Engineering Corps",
    priority: "P2",
    owner: "ZENITH / Chief Engineer",
    assignedIntelligence: "ChatGPT / Codex",
    status: "Approved",
    created: "2026-07-03",
    due: "Before next research task",
    evidence: "RESEARCH_ROUTER.md states assignment-only routing and no execution authority.",
    relatedObsidianNote: "03 Intelligence/RESEARCH_ROUTER.md",
  },
  {
    missionId: "MH-005",
    title: "Mission Board Adoption",
    division: "Operations",
    priority: "P2",
    owner: "Mission Commander",
    assignedIntelligence: "Hermes fallback chain",
    status: "Awaiting Review",
    created: "2026-07-03",
    due: "Next operating session",
    evidence: "MISSION_BOARD.md defines Draft through Archived lifecycle and approval boundaries.",
    relatedObsidianNote: "01 Executive/MISSION_BOARD.md",
  },
  {
    missionId: "MH-006",
    title: "DealFlow Incubator Research Scope",
    division: "DealFlow",
    priority: "P3",
    owner: "ZENITH",
    assignedIntelligence: "Future assignment",
    status: "Draft",
    created: "2026-07-03",
    due: "Unscheduled",
    evidence: "DealFlow remains a strategic asset; no MVP or customer claims exist yet.",
    relatedObsidianNote: "07 DealFlow/index.md",
  },
];

export const operationsBlockers: FocusItem[] = [
  { id: "BLK-001", title: "Real Fiverr metrics not recorded yet", missionId: "MH-001", owner: "Mission Commander", nextAction: "Wait for platform evidence; do not fabricate impressions, clicks, messages, orders, or revenue." },
  { id: "BLK-002", title: "ORION needs local intraday data", missionId: "MH-002", owner: "Trading Corps", nextAction: "Provide SPY/QQQ CSV files before interpreting backtest output." },
  { id: "BLK-003", title: "Real Obsidian vault path blocked in sandbox", missionId: "MH-003", owner: "Codex", nextAction: "Use writable vault package until Mission Commander moves or opens the real vault." },
];

export const approvalsWaiting: FocusItem[] = [
  { id: "APP-001", title: "AR-001 Income Lane Scoring Sprint", missionId: "MH-001", owner: "Mission Commander", nextAction: "Approve, decline, or request revision before the sprint begins." },
  { id: "APP-002", title: "Main branch merge approval", missionId: "MH-003", owner: "Mission Commander", nextAction: "Review changed files and decide whether to commit/merge." },
];

export const customerMessages: FocusItem[] = [
  { id: "CUS-001", title: "No customer messages recorded", missionId: "MH-001", owner: "Mission Commander", nextAction: "Record real customer messages only when they exist." },
];

export const activeLaunches: FocusItem[] = launchRecords
  .filter((record) => record.status === "Live")
  .map((record) => ({
    id: record.id,
    title: record.name,
    missionId: record.missionId,
    owner: record.owner,
    nextAction: record.nextAction,
  }));

export const backtestsRunning: FocusItem[] = [
  { id: "BT-001", title: "No backtests running", missionId: "MH-002", owner: "Trading Corps", nextAction: "Run only after local CSV data is present; no paper or live trading." },
];

export const operationsActions: OperationsAction[] = [
  { action: "Create Mission", purpose: "Add a mission with a Mission ID before it can enter Mission Control.", boundary: "Creates a record only; does not approve work." },
  { action: "Assign Mission", purpose: "Route a mission to the best available intelligence.", boundary: "Assignment does not execute the mission." },
  { action: "Complete Mission", purpose: "Mark a mission complete after evidence exists.", boundary: "Completion requires evidence, not vibes." },
  { action: "Archive Mission", purpose: "Move closed missions out of active focus while preserving memory.", boundary: "Archive does not delete institutional knowledge." },
  { action: "Create Obsidian Note", purpose: "Create the durable Markdown representation for the mission.", boundary: "No secrets or unsanitized private data." },
  { action: "Open Obsidian Note", purpose: "Open or reference the mission's knowledge destination.", boundary: "Read/reference action only in v1.0." },
];

export const dailyOperationsWorkflow = [
  "Morning Brief",
  "Mission Queue",
  "Execution",
  "Evidence",
  "Executive Brief",
  "Archive",
];

const activeStatuses: OperationsMissionStatus[] = ["Assigned", "Researching", "Awaiting Review", "Approved", "Building", "Launching", "Measuring"];
const priorityWeight: Record<OperationsPriority, number> = { P0: 0, P1: 1, P2: 2, P3: 3 };

export const todaysFocusMissions = operationsMissions
  .filter((mission) => activeStatuses.includes(mission.status))
  .sort((a, b) => priorityWeight[a.priority] - priorityWeight[b.priority])
  .slice(0, 5);

export const operationsHubMetrics = {
  totalMissions: operationsMissions.length,
  activeMissions: operationsMissions.filter((mission) => activeStatuses.includes(mission.status)).length,
  blockers: operationsBlockers.length,
  approvalsWaiting: approvalsWaiting.length,
  customerMessages: customerMessages.length,
  launches: activeLaunches.length,
  backtestsRunning: backtestsRunning.length,
  executionMetrics: executionMetrics.length,
};
