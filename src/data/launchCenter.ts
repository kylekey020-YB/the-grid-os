import { evidenceLedgerEntries, launchExecutionMetrics, launchIntelligenceDoctrine, launchIntelligenceSummary, launchMarketMetrics, launchRecords, type EvidenceValue, type LaunchPlatform, type LaunchStatus } from "@/data/launchIntelligence";

export type { LaunchPlatform, LaunchStatus };
export type LaunchMetricValue = EvidenceValue | "N/A";
export type LaunchMilestoneStatus = "Recorded" | "Awaiting Evidence" | "Planned";

export type LaunchKpi = {
  label: string;
  value: LaunchMetricValue;
  evidence: string;
};

export type LiveProduct = {
  id: string;
  name: string;
  platform: LaunchPlatform;
  status: LaunchStatus;
  launchDate: string;
  mission: string;
  stage: "Live" | "Publish" | "Experiment" | "Scale";
  owner: string;
  nextAction: string;
  evidence: string;
  lastUpdated: string;
  evidenceSource: string;
  executionMetrics: LaunchKpi[];
  marketMetrics: LaunchKpi[];
  kpis: LaunchKpi[];
};

export type RevenueTimelineEntry = {
  id: string;
  date: string;
  title: string;
  summary: string;
  amount: LaunchMetricValue;
  evidence: string;
};

export type LaunchMilestone = {
  id: string;
  title: string;
  date: string;
  status: LaunchMilestoneStatus;
  evidence: string;
};

export type MarketingQueueItem = {
  id: string;
  channel: string;
  task: string;
  status: "Queued" | "Draft" | "Ready" | "Blocked";
  boundary: string;
};

const metricToKpi = (metric: typeof launchExecutionMetrics[number]): LaunchKpi => ({
  label: metric.label,
  value: metric.value,
  evidence: metric.evidence,
});

export const launchCenterDoctrine = launchIntelligenceDoctrine;

export const liveProducts: LiveProduct[] = launchRecords.map((record) => ({
  id: record.id,
  name: record.name,
  platform: record.platform,
  status: record.status,
  launchDate: record.launchDate,
  mission: record.mission,
  stage: record.status === "Live" ? "Live" : "Experiment",
  owner: record.owner,
  nextAction: record.nextAction,
  evidence: record.evidenceSource,
  lastUpdated: record.lastUpdated,
  evidenceSource: record.evidenceSource,
  executionMetrics: Object.values(record.executionMetrics).map(metricToKpi),
  marketMetrics: Object.values(record.marketMetrics).map(metricToKpi),
  kpis: Object.values(record.marketMetrics).map(metricToKpi),
}));

export const revenueTimeline: RevenueTimelineEntry[] = [
  {
    id: "RT-001",
    date: "July 2, 2026",
    title: "THE GRID entered the marketplace",
    summary: "Operation First Revenue moved from preparation to execution with publication of the first Fiverr AI Automation Consulting service.",
    amount: "Unknown",
    evidence: "Live publication reported by Mission Commander; revenue not yet recorded.",
  },
];

export const launchMilestones: LaunchMilestone[] = [
  {
    id: "LM-001",
    title: "First live marketplace service",
    date: "July 2, 2026",
    status: "Recorded",
    evidence: "Fiverr AI Automation Consulting is live.",
  },
  {
    id: "LM-002",
    title: "First impression",
    date: "Unknown",
    status: "Awaiting Evidence",
    evidence: "No impression evidence recorded yet.",
  },
  {
    id: "LM-003",
    title: "First customer message",
    date: "Unknown",
    status: "Awaiting Evidence",
    evidence: "No customer message recorded yet.",
  },
  {
    id: "LM-004",
    title: "First consultation",
    date: "Unknown",
    status: "Awaiting Evidence",
    evidence: "No consultation recorded yet.",
  },
  {
    id: "LM-005",
    title: "First order",
    date: "Unknown",
    status: "Awaiting Evidence",
    evidence: "No order recorded yet.",
  },
  {
    id: "LM-006",
    title: "First review",
    date: "Unknown",
    status: "Awaiting Evidence",
    evidence: "No review evidence recorded yet.",
  },
  {
    id: "LM-007",
    title: "First revenue",
    date: "Unknown",
    status: "Awaiting Evidence",
    evidence: "No revenue evidence recorded yet.",
  },
  {
    id: "LM-008",
    title: "First repeat customer",
    date: "Unknown",
    status: "Awaiting Evidence",
    evidence: "No repeat customer evidence recorded yet.",
  },
];

export const launchLog = evidenceLedgerEntries.map((entry) => ({
  id: entry.id,
  date: entry.date,
  entry: entry.title,
  evidence: entry.source,
}));

export const marketingQueue: MarketingQueueItem[] = [
  {
    id: "MQ-001",
    channel: "Fiverr Portfolio",
    task: "Collect portfolio examples that demonstrate what clients receive.",
    status: "Queued",
    boundary: "Use original examples only. Do not claim client results that do not exist.",
  },
  {
    id: "MQ-002",
    channel: "Fiverr FAQ",
    task: "Refine FAQ after observing buyer questions or obvious clarity gaps.",
    status: "Queued",
    boundary: "Do not over-edit the live gig while indexing starts unless an obvious mistake exists.",
  },
  {
    id: "MQ-003",
    channel: "Fiverr Gig Expansion",
    task: "Draft complementary service concept such as AI chatbot setup or workflow automation.",
    status: "Draft",
    boundary: "Manual draft only. No second gig publish without review.",
  },
  {
    id: "MQ-004",
    channel: "Gumroad",
    task: "Prepare toolkit launch once banking is fully cleared.",
    status: "Blocked",
    boundary: "Do not publish until banking clearance is confirmed.",
  },
];

export const launchCenterSummary = {
  version: "v2.2.0 / Launch Intelligence v1.0",
  status: "Active",
  activeMission: "Operation First Revenue",
  liveProducts: launchIntelligenceSummary.liveProducts,
  recordedMilestones: launchMilestones.filter((milestone) => milestone.status === "Recorded").length,
  revenue: launchIntelligenceSummary.revenue,
  marketEvidenceStatus: launchIntelligenceSummary.marketEvidenceStatus,
  evidenceSource: launchIntelligenceSummary.evidenceSource,
  executionMetrics: launchExecutionMetrics.length,
  marketMetrics: launchMarketMetrics.length,
  nextKpis: ["Impressions", "Views", "Clicks", "Visitors", "Messages", "Consultations", "Orders", "Sales", "Revenue", "Reviews", "Repeat Customers"],
};
