export type LaunchPlatform = "Fiverr" | "Gumroad" | "DealFlow" | "Shopify" | "Etsy" | "Other";
export type LaunchStatus = "Live" | "Preparing" | "Queued" | "Paused" | "Archived";
export type LaunchMetricValue = number | string | "N/A";
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

export const launchCenterDoctrine = [
  "Live products track real marketplace state.",
  "Unknown metrics remain N/A until platform evidence exists.",
  "Do not constantly edit a new live listing unless there is an obvious mistake.",
  "Support live launches with portfolio examples, FAQ refinements, and complementary offers.",
  "Revenue is not claimed until evidence exists.",
];

export const liveProducts: LiveProduct[] = [
  {
    id: "EXP-1",
    name: "Fiverr AI Automation Consulting",
    platform: "Fiverr",
    status: "Live",
    launchDate: "July 2, 2026",
    mission: "Operation First Revenue",
    stage: "Live",
    owner: "Revenue Architect",
    nextAction: "Allow Fiverr search indexing time while building supporting assets: portfolio examples, FAQ refinements, and complementary gig concepts.",
    evidence: "Mission Commander reported the first Fiverr service is live on July 2, 2026.",
    kpis: [
      { label: "Impressions", value: "N/A", evidence: "Awaiting Fiverr analytics." },
      { label: "Click-through rate", value: "N/A", evidence: "Awaiting Fiverr analytics." },
      { label: "Messages", value: "N/A", evidence: "No message count recorded yet." },
      { label: "Consultations", value: "N/A", evidence: "No consultation record yet." },
      { label: "Orders", value: "N/A", evidence: "No order evidence recorded yet." },
      { label: "Reviews", value: "N/A", evidence: "No review evidence recorded yet." },
      { label: "Revenue", value: "N/A", evidence: "No revenue evidence recorded yet." },
    ],
  },
];

export const revenueTimeline: RevenueTimelineEntry[] = [
  {
    id: "RT-001",
    date: "July 2, 2026",
    title: "THE GRID entered the marketplace",
    summary: "Operation First Revenue moved from preparation to execution with publication of the first Fiverr AI Automation Consulting service.",
    amount: "N/A",
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
    title: "First customer message",
    date: "N/A",
    status: "Awaiting Evidence",
    evidence: "No customer message recorded yet.",
  },
  {
    id: "LM-003",
    title: "First consultation",
    date: "N/A",
    status: "Awaiting Evidence",
    evidence: "No consultation recorded yet.",
  },
  {
    id: "LM-004",
    title: "First order",
    date: "N/A",
    status: "Awaiting Evidence",
    evidence: "No order recorded yet.",
  },
  {
    id: "LM-005",
    title: "First review",
    date: "N/A",
    status: "Awaiting Evidence",
    evidence: "No review recorded yet.",
  },
  {
    id: "LM-006",
    title: "First revenue",
    date: "N/A",
    status: "Awaiting Evidence",
    evidence: "No revenue evidence recorded yet.",
  },
];

export const launchLog = [
  {
    id: "LL-001",
    date: "July 2, 2026",
    entry: "EXP-1 went live on Fiverr. THE GRID shifted from preparation to customer-facing execution.",
    evidence: "Mission Commander executive dashboard update.",
  },
];

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
  version: "v2.2.0",
  status: "Active",
  activeMission: "Operation First Revenue",
  liveProducts: liveProducts.length,
  recordedMilestones: launchMilestones.filter((milestone) => milestone.status === "Recorded").length,
  revenue: "N/A",
  nextKpis: ["Impressions", "Click-through rate", "Messages", "Consultations", "Orders", "Reviews", "Revenue"],
};
