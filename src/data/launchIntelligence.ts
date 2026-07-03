export type LaunchPlatform = "Fiverr" | "Gumroad" | "DealFlow" | "Shopify" | "Etsy" | "Other";
export type LaunchStatus = "Live" | "Preparing" | "Queued" | "Paused" | "Archived";
export type EvidenceValue = number | string | "Unknown" | "Awaiting Evidence";
export type EvidenceMetricCategory = "Execution" | "Market";

export type EvidenceMetric = {
  label: string;
  value: EvidenceValue;
  category: EvidenceMetricCategory;
  controlledBy: "THE GRID" | "Market";
  evidence: string;
};

export type LaunchMarketMetrics = {
  impressions: EvidenceMetric;
  views: EvidenceMetric;
  clicks: EvidenceMetric;
  visitors: EvidenceMetric;
  messages: EvidenceMetric;
  consultations: EvidenceMetric;
  orders: EvidenceMetric;
  sales: EvidenceMetric;
  revenue: EvidenceMetric;
  reviews: EvidenceMetric;
  repeatCustomers: EvidenceMetric;
};

export type LaunchExecutionMetrics = {
  postsPublished: EvidenceMetric;
  productsLive: EvidenceMetric;
  researchComplete: EvidenceMetric;
};

export type LaunchRecord = {
  id: string;
  name: string;
  platform: LaunchPlatform;
  status: LaunchStatus;
  launchDate: string;
  missionId: string;
  mission: string;
  owner: string;
  lastUpdated: string;
  evidenceSource: string;
  executionMetrics: LaunchExecutionMetrics;
  marketMetrics: LaunchMarketMetrics;
  nextAction: string;
};

export const launchIntelligenceDoctrine = [
  "Track real market evidence only.",
  "Separate execution metrics controlled by THE GRID from market metrics controlled by customers and platforms.",
  "Unknown market values remain Unknown or Awaiting Evidence until Mission Commander records a source.",
  "Revenue, orders, reviews, and repeat customers are never inferred from launch status.",
];

const marketMetric = (label: string, evidence: string, value: EvidenceValue = "Awaiting Evidence"): EvidenceMetric => ({
  label,
  value,
  category: "Market",
  controlledBy: "Market",
  evidence,
});

const executionMetric = (label: string, value: EvidenceValue, evidence: string): EvidenceMetric => ({
  label,
  value,
  category: "Execution",
  controlledBy: "THE GRID",
  evidence,
});

export const launchRecords: LaunchRecord[] = [
  {
    id: "EXP-1",
    name: "Fiverr AI Automation Consulting",
    platform: "Fiverr",
    status: "Live",
    launchDate: "July 2, 2026",
    missionId: "MH-001",
    mission: "Operation First Revenue",
    owner: "Revenue Architect",
    lastUpdated: "July 3, 2026",
    evidenceSource: "Mission Commander reported the Fiverr service was published on July 2, 2026.",
    executionMetrics: {
      postsPublished: executionMetric("Posts published", "Unknown", "No supporting post count has been recorded."),
      productsLive: executionMetric("Products live", 1, "EXP-1 Fiverr AI Automation Consulting is recorded as live."),
      researchComplete: executionMetric("Research complete", "Partial", "Launch research exists, but market response evidence is still pending."),
    },
    marketMetrics: {
      impressions: marketMetric("Impressions", "Awaiting Fiverr analytics evidence."),
      views: marketMetric("Views", "Awaiting Fiverr analytics evidence."),
      clicks: marketMetric("Clicks", "Awaiting Fiverr analytics evidence."),
      visitors: marketMetric("Visitors", "Awaiting platform or storefront evidence."),
      messages: marketMetric("Messages", "No buyer message count recorded yet."),
      consultations: marketMetric("Consultations", "No consultation record exists yet."),
      orders: marketMetric("Orders", "No order evidence recorded yet."),
      sales: marketMetric("Sales", "No sale evidence recorded yet."),
      revenue: marketMetric("Revenue", "No revenue evidence recorded yet."),
      reviews: marketMetric("Reviews", "No review evidence recorded yet."),
      repeatCustomers: marketMetric("Repeat Customers", "No repeat customer evidence recorded yet."),
    },
    nextAction: "Allow Fiverr indexing time, then record real impressions, clicks, messages, consultations, orders, reviews, and revenue when evidence exists.",
  },
];

export const launchExecutionMetrics: EvidenceMetric[] = launchRecords.flatMap((record) => Object.values(record.executionMetrics));
export const launchMarketMetrics: EvidenceMetric[] = launchRecords.flatMap((record) => Object.values(record.marketMetrics));

export const launchIntelligenceSummary = {
  version: "Launch Intelligence v1.0",
  status: "Evidence capture active / no fake metrics",
  launchesTracked: launchRecords.length,
  liveProducts: launchRecords.filter((record) => record.status === "Live").length,
  productsLive: launchRecords.reduce((sum, record) => sum + (typeof record.executionMetrics.productsLive.value === "number" ? record.executionMetrics.productsLive.value : 0), 0),
  revenue: "Unknown",
  marketEvidenceStatus: "Awaiting Evidence",
  evidenceSource: "EVIDENCE_LEDGER.md and typed Launch Intelligence records.",
};

export const evidenceLedgerEntries = [
  {
    id: "EV-001",
    date: "July 2, 2026",
    evidenceType: "Published Fiverr Gig",
    launchId: "EXP-1",
    title: "Fiverr AI Automation Consulting published",
    source: "Mission Commander report",
    status: "Verified",
  },
];
