export type ResearchDivision = "Revenue Corps" | "Quant Research Corps";
export type ResearchCadence = "Daily" | "Weekdays" | "Weekly" | "Manual Trigger";
export type ScheduledMissionStatus = "Pending" | "Running" | "Completed" | "Needs Review" | "Archived";
export type ResearchPriority = "P0" | "P1" | "P2" | "P3";
export type ResearchRiskLevel = "LOW" | "MEDIUM" | "HIGH";

export type ScheduledResearchMission = {
  missionId: string;
  title: string;
  scoutOfficer: string;
  division: ResearchDivision;
  cadence: ResearchCadence;
  currentStatus: ScheduledMissionStatus;
  nextRunPlaceholder: string;
  allowedActions: string[];
  prohibitedActions: string[];
  reportOutputPathPlaceholder: string;
  approvalRequirement: string;
  priority: ResearchPriority;
  riskLevel: ResearchRiskLevel;
};

export type ResearchQueueStage = {
  status: ScheduledMissionStatus;
  purpose: string;
  count: number;
};

export const researchSchedulerSummary = {
  version: "v2.8.0",
  name: "Semi-Autonomous Research Scheduler",
  status: "Scheduled research architecture / no external execution",
  mission:
    "Coordinate scheduled research missions for Revenue Corps and Quant Research Corps while preserving approval gates and hard safety boundaries.",
  doctrine:
    "Scouts may research on schedule. Scouts may create reports. Scouts may rank opportunities. Scouts may recommend experiments. Scouts may not publish, trade, message, spend, or execute.",
  safety:
    "No publishing, trading, broker connection, customer messages, spending, account automation, irreversible actions, or live execution. Research reports only.",
};

const allowedResearchActions = [
  "Collect public/manual research notes",
  "Summarize evidence and unknowns",
  "Rank opportunities or strategy candidates",
  "Create report drafts for review",
  "Recommend experiments for Mission Commander approval",
];

const prohibitedActions = [
  "Publish",
  "Trade",
  "Connect broker or wallet",
  "Message customers",
  "Spend money",
  "Automate accounts",
  "Scrape against platform rules",
  "Perform irreversible actions",
];

export const scheduledResearchMissions: ScheduledResearchMission[] = [
  {
    missionId: "RS-REV-001",
    title: "Etsy Scout Daily Scan",
    scoutOfficer: "Etsy Scout",
    division: "Revenue Corps",
    cadence: "Daily",
    currentStatus: "Pending",
    nextRunPlaceholder: "Next approved daily research window",
    allowedActions: allowedResearchActions,
    prohibitedActions,
    reportOutputPathPlaceholder: "reports/revenue-corps/etsy/YYYY-MM-DD.md",
    approvalRequirement: "Mission Commander approval required before any experiment, listing, spend, or account action.",
    priority: "P1",
    riskLevel: "LOW",
  },
  {
    missionId: "RS-REV-002",
    title: "Fiverr Scout Daily Scan",
    scoutOfficer: "Fiverr Scout",
    division: "Revenue Corps",
    cadence: "Daily",
    currentStatus: "Pending",
    nextRunPlaceholder: "Next approved daily research window",
    allowedActions: allowedResearchActions,
    prohibitedActions,
    reportOutputPathPlaceholder: "reports/revenue-corps/fiverr/YYYY-MM-DD.md",
    approvalRequirement: "Mission Commander approval required before gig edits, publishing, messaging, or package changes.",
    priority: "P0",
    riskLevel: "LOW",
  },
  {
    missionId: "RS-REV-003",
    title: "Gumroad Scout Daily Scan",
    scoutOfficer: "Gumroad Scout",
    division: "Revenue Corps",
    cadence: "Daily",
    currentStatus: "Pending",
    nextRunPlaceholder: "Next approved daily research window",
    allowedActions: allowedResearchActions,
    prohibitedActions,
    reportOutputPathPlaceholder: "reports/revenue-corps/gumroad/YYYY-MM-DD.md",
    approvalRequirement: "Mission Commander approval required before product creation enters active experiment.",
    priority: "P1",
    riskLevel: "LOW",
  },
  {
    missionId: "RS-REV-004",
    title: "YouTube / Shorts Scout Daily Scan",
    scoutOfficer: "Media Scout",
    division: "Revenue Corps",
    cadence: "Daily",
    currentStatus: "Pending",
    nextRunPlaceholder: "Next approved daily research window",
    allowedActions: allowedResearchActions,
    prohibitedActions,
    reportOutputPathPlaceholder: "reports/revenue-corps/media/YYYY-MM-DD.md",
    approvalRequirement: "Mission Commander approval required before channel actions, posting, ad spend, or account automation.",
    priority: "P2",
    riskLevel: "LOW",
  },
  {
    missionId: "RS-REV-005",
    title: "Bounty Scout Daily Scan",
    scoutOfficer: "Bounty Scout",
    division: "Revenue Corps",
    cadence: "Daily",
    currentStatus: "Pending",
    nextRunPlaceholder: "Next approved daily research window",
    allowedActions: allowedResearchActions,
    prohibitedActions,
    reportOutputPathPlaceholder: "reports/revenue-corps/bounties/YYYY-MM-DD.md",
    approvalRequirement: "Mission Commander approval required before submitting, spending, or entering a competition.",
    priority: "P1",
    riskLevel: "LOW",
  },
  {
    missionId: "RS-REV-006",
    title: "GitHub Opportunity Scout Daily Scan",
    scoutOfficer: "GitHub Opportunity Scout",
    division: "Revenue Corps",
    cadence: "Daily",
    currentStatus: "Pending",
    nextRunPlaceholder: "Next approved daily research window",
    allowedActions: allowedResearchActions,
    prohibitedActions,
    reportOutputPathPlaceholder: "reports/revenue-corps/github-opportunities/YYYY-MM-DD.md",
    approvalRequirement: "Mission Commander approval required before contacting maintainers, submitting work, or accepting bounty terms.",
    priority: "P1",
    riskLevel: "LOW",
  },

  {
    missionId: "R-005",
    title: "Print-on-Demand Scout",
    scoutOfficer: "Print-on-Demand Scout",
    division: "Revenue Corps",
    cadence: "Weekly",
    currentStatus: "Pending",
    nextRunPlaceholder: "Next approved Revenue Corps research block",
    allowedActions: [
      "Collect public/manual POD research notes",
      "Compare demand, competition, price, production cost, margin, difficulty, time to revenue, and confidence",
      "Create evidence-only report drafts for Revenue Architect review",
      "Recommend Proceed, Hold, or Reject for Mission Pipeline consideration",
    ],
    prohibitedActions: [
      "Recommend launching",
      "Create products",
      "Generate designs",
      "Create listings or storefronts",
      "Contact suppliers",
      "Spend money",
      "Scrape against platform rules",
      "Copy designs, listings, trademarks, copyrighted characters, or protected artwork",
    ],
    reportOutputPathPlaceholder: "reports/revenue-corps/print-on-demand/R-005/YYYY-MM-DD.md",
    approvalRequirement: "Mission Commander approval required before any product creation, design generation, listing, storefront, supplier outreach, spend, or launch action.",
    priority: "P1",
    riskLevel: "LOW",
  },
  {
    missionId: "RS-QNT-001",
    title: "ORION SPY/QQQ ORB Research",
    scoutOfficer: "ORION / Backtest Feasibility Scout",
    division: "Quant Research Corps",
    cadence: "Weekdays",
    currentStatus: "Needs Review",
    nextRunPlaceholder: "After local SPY/QQQ intraday CSV data is provided",
    allowedActions: ["Read local CSV data", "Run research-only backtests", "Write reports", "Recommend backtest improvements"],
    prohibitedActions,
    reportOutputPathPlaceholder: "reports/quant/orion/YYYY-MM-DD.md",
    approvalRequirement: "Mission Commander approval required before paper mode or live-risk discussion.",
    priority: "P0",
    riskLevel: "MEDIUM",
  },
  {
    missionId: "RS-QNT-002",
    title: "WRAITH ICT/FVG Mechanical Rules Research",
    scoutOfficer: "ICT Mechanics Scout",
    division: "Quant Research Corps",
    cadence: "Weekly",
    currentStatus: "Pending",
    nextRunPlaceholder: "Next weekly research block",
    allowedActions: allowedResearchActions,
    prohibitedActions,
    reportOutputPathPlaceholder: "reports/quant/wraith/YYYY-MM-DD.md",
    approvalRequirement: "Mission Commander approval required before any WRAITH prototype or paper mode.",
    priority: "P2",
    riskLevel: "MEDIUM",
  },
  {
    missionId: "RS-QNT-003",
    title: "PAIRFORGE Pairs Strategy Research",
    scoutOfficer: "GitHub Quant Scout / Academic Paper Scout",
    division: "Quant Research Corps",
    cadence: "Weekly",
    currentStatus: "Pending",
    nextRunPlaceholder: "Next weekly research block",
    allowedActions: allowedResearchActions,
    prohibitedActions,
    reportOutputPathPlaceholder: "reports/quant/pairforge/YYYY-MM-DD.md",
    approvalRequirement: "Mission Commander approval required before prototype work or paper mode.",
    priority: "P2",
    riskLevel: "MEDIUM",
  },
  {
    missionId: "RS-QNT-004",
    title: "VOLTA Options Strategy Research",
    scoutOfficer: "Options Strategy Scout",
    division: "Quant Research Corps",
    cadence: "Weekly",
    currentStatus: "Pending",
    nextRunPlaceholder: "After options data-cost review is scheduled",
    allowedActions: allowedResearchActions,
    prohibitedActions,
    reportOutputPathPlaceholder: "reports/quant/volta/YYYY-MM-DD.md",
    approvalRequirement: "Mission Commander approval required before options data purchase, paper mode, or execution research.",
    priority: "P3",
    riskLevel: "HIGH",
  },
  {
    missionId: "RS-QNT-005",
    title: "ATLAS Portfolio Strategy Research",
    scoutOfficer: "Portfolio Strategy Scout",
    division: "Quant Research Corps",
    cadence: "Weekly",
    currentStatus: "Pending",
    nextRunPlaceholder: "Next weekly research block",
    allowedActions: allowedResearchActions,
    prohibitedActions,
    reportOutputPathPlaceholder: "reports/quant/atlas/YYYY-MM-DD.md",
    approvalRequirement: "Mission Commander approval required before portfolio paper tracking or broker connection.",
    priority: "P2",
    riskLevel: "LOW",
  },
];

export const researchQueueStages: ResearchQueueStage[] = [
  { status: "Pending", purpose: "Mission is scheduled but has not started.", count: scheduledResearchMissions.filter((mission) => mission.currentStatus === "Pending").length },
  { status: "Running", purpose: "Mission is currently being researched. Placeholder only in v2.8.", count: scheduledResearchMissions.filter((mission) => mission.currentStatus === "Running").length },
  { status: "Completed", purpose: "Research report exists and is ready to archive or review.", count: scheduledResearchMissions.filter((mission) => mission.currentStatus === "Completed").length },
  { status: "Needs Review", purpose: "Mission requires Mission Commander or officer review before next action.", count: scheduledResearchMissions.filter((mission) => mission.currentStatus === "Needs Review").length },
  { status: "Archived", purpose: "Mission is closed but preserved for institutional memory.", count: scheduledResearchMissions.filter((mission) => mission.currentStatus === "Archived").length },
];

export const researchSchedulerMetrics = {
  missions: scheduledResearchMissions.length,
  revenueMissions: scheduledResearchMissions.filter((mission) => mission.division === "Revenue Corps").length,
  quantMissions: scheduledResearchMissions.filter((mission) => mission.division === "Quant Research Corps").length,
  pending: scheduledResearchMissions.filter((mission) => mission.currentStatus === "Pending").length,
  needsReview: scheduledResearchMissions.filter((mission) => mission.currentStatus === "Needs Review").length,
  running: scheduledResearchMissions.filter((mission) => mission.currentStatus === "Running").length,
  irreversibleActionsAllowed: 0,
};
