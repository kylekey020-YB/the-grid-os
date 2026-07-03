export type OpportunityPipelineStage = "Idea" | "Research" | "Evidence" | "Approval" | "Launch" | "Revenue" | "Scale" | "Automation";
export type OpportunityStatus = "Idea" | "Research" | "Awaiting Evidence" | "Awaiting Approval" | "Active Experiment" | "Live Monitoring" | "Parked" | "Rejected";
export type EvidenceLevel = "N/A" | "Anecdotal" | "Public Evidence" | "Manual Validation" | "Live Evidence";
export type ConfidenceLevel = "N/A" | "Low" | "Medium" | "High";
export type Marketplace = "Etsy" | "Fiverr" | "Gumroad" | "Creative Market" | "Unity" | "Amazon" | "Shopify" | "Bounties" | "DealFlow" | "Affiliate" | "Assets";
export type FilterPreset = "All" | "Highest ROI" | "Fastest to launch" | "Lowest cost" | "Highest confidence" | "Best recurring revenue";

export type OpportunityRadarItem = {
  id: string;
  name: string;
  marketplace: Marketplace;
  estimatedMonthlyRevenue: string;
  timeToFirstDollar: string;
  difficulty: string;
  evidenceLevel: EvidenceLevel;
  competition: string;
  margin: string;
  recurringRevenuePotential: string;
  launchCost: string;
  missionFit: string;
  confidence: ConfidenceLevel;
  status: OpportunityStatus;
  pipeline: OpportunityPipelineStage;
  owner: string;
  nextAction: string;
  rankReason: string;
  rankingSignals: {
    roi: number | null;
    speed: number | null;
    cost: number | null;
    confidence: number | null;
    recurring: number | null;
    evidence: number;
  };
};

export type ExperimentLabItem = {
  id: string;
  name: string;
  status: OpportunityStatus;
  confidence: ConfidenceLevel;
  owner: string;
  nextStep: string;
};

export type ForecastScenario = {
  id: string;
  name: string;
  assumptions: string[];
  estimatedMonthlyRevenue: string;
  probability: ConfidenceLevel;
  caveat: string;
};

export type ProductForge = {
  id: string;
  emoji: string;
  name: string;
  purpose: string;
  status: "Planned" | "Manual Only" | "Awaiting Approved Opportunity";
};

export type MarketplaceIntelligencePanel = {
  id: string;
  marketplace: Marketplace;
  currentStatus: "Manual Evidence Needed" | "Watching" | "Parked";
  fields: string[];
  lastReviewed: string;
};

export type DealFlowIncubatorStage = {
  id: string;
  name: string;
  status: "Not Started" | "Research" | "Planned";
  output: string;
};

export const opportunityRadarSummary = {
  version: "v2.6.0",
  status: "Typed architecture / manual evidence only",
  mission: "Every Revenue Corps idea enters Opportunity Radar, receives structured scoring, and is reviewed before entering the Mission Pipeline.",
  doctrine: "Opportunity hunting is a permanent function. Public information and evidence-based research come before scoring, approval, launch, revenue, scale, and automation.",
  safety: "No backend, no fake data, no scraping integrations, no account automation, no autonomous publishing, no spending, and no fabricated revenue forecasts.",
};

export const opportunityPipelineStages: OpportunityPipelineStage[] = ["Idea", "Research", "Evidence", "Approval", "Launch", "Revenue", "Scale", "Automation"];

export const opportunityRadarItems: OpportunityRadarItem[] = [
  {
    id: "OP-001",
    name: "Fiverr AI Automation Consulting",
    marketplace: "Fiverr",
    estimatedMonthlyRevenue: "N/A",
    timeToFirstDollar: "Live listing; first dollar not recorded",
    difficulty: "N/A",
    evidenceLevel: "Live Evidence",
    competition: "N/A",
    margin: "N/A",
    recurringRevenuePotential: "N/A",
    launchCost: "$0 recorded",
    missionFit: "High - active Operation First Revenue experiment",
    confidence: "N/A",
    status: "Live Monitoring",
    pipeline: "Launch",
    owner: "Revenue Architect / Fiverr Officer",
    nextAction: "Track impressions, clicks, messages, consultations, orders, reviews, and revenue.",
    rankReason: "Ranked first because it is already live, not because revenue performance is known.",
    rankingSignals: { roi: null, speed: 1, cost: 1, confidence: null, recurring: null, evidence: 4 },
  },
  {
    id: "OP-002",
    name: "Gumroad AI Workflow Toolkit",
    marketplace: "Gumroad",
    estimatedMonthlyRevenue: "N/A",
    timeToFirstDollar: "N/A",
    difficulty: "N/A",
    evidenceLevel: "N/A",
    competition: "N/A",
    margin: "N/A",
    recurringRevenuePotential: "N/A",
    launchCost: "N/A",
    missionFit: "Potential fit; evidence required",
    confidence: "N/A",
    status: "Research",
    pipeline: "Research",
    owner: "Publishing Scout",
    nextAction: "Collect public demand evidence and banking readiness notes before prototype approval.",
    rankReason: "Research candidate only; not ranked by revenue until evidence exists.",
    rankingSignals: { roi: null, speed: null, cost: null, confidence: null, recurring: null, evidence: 0 },
  },
  {
    id: "OP-003",
    name: "Etsy Digital Planning Product",
    marketplace: "Etsy",
    estimatedMonthlyRevenue: "N/A",
    timeToFirstDollar: "N/A",
    difficulty: "N/A",
    evidenceLevel: "N/A",
    competition: "N/A",
    margin: "N/A",
    recurringRevenuePotential: "N/A",
    launchCost: "N/A",
    missionFit: "Potential fit; originality and demand evidence required",
    confidence: "N/A",
    status: "Awaiting Evidence",
    pipeline: "Idea",
    owner: "Etsy Scout",
    nextAction: "Record public tag, niche, pricing, buyer-language, and saturation evidence.",
    rankReason: "Awaiting evidence before scoring or prototype work.",
    rankingSignals: { roi: null, speed: null, cost: null, confidence: null, recurring: null, evidence: 0 },
  },
  {
    id: "OP-004",
    name: "Bounty Opportunity Shortlist",
    marketplace: "Bounties",
    estimatedMonthlyRevenue: "N/A",
    timeToFirstDollar: "N/A",
    difficulty: "N/A",
    evidenceLevel: "N/A",
    competition: "N/A",
    margin: "N/A",
    recurringRevenuePotential: "Low unless repeated source emerges",
    launchCost: "N/A",
    missionFit: "Potential fit; deadline and eligibility evidence required",
    confidence: "N/A",
    status: "Research",
    pipeline: "Research",
    owner: "Bounty Scout",
    nextAction: "Create a manually sourced shortlist with value, deadline, eligibility, effort, and risk notes.",
    rankReason: "Could create near-term cash, but probability and effort are unknown.",
    rankingSignals: { roi: null, speed: null, cost: null, confidence: null, recurring: 0, evidence: 0 },
  },
  {
    id: "OP-005",
    name: "DealFlow MVP Incubator",
    marketplace: "DealFlow",
    estimatedMonthlyRevenue: "N/A",
    timeToFirstDollar: "N/A",
    difficulty: "N/A",
    evidenceLevel: "N/A",
    competition: "N/A",
    margin: "N/A",
    recurringRevenuePotential: "Potentially high; unvalidated",
    launchCost: "N/A",
    missionFit: "Strategic asset candidate; not first-dollar optimized yet",
    confidence: "N/A",
    status: "Idea",
    pipeline: "Idea",
    owner: "ZENITH / Revenue Architect",
    nextAction: "Define market, competitors, MVP scope, and validation path before build.",
    rankReason: "Strategic upside noted, but not ready to compete with first-revenue experiments.",
    rankingSignals: { roi: null, speed: null, cost: null, confidence: null, recurring: null, evidence: 0 },
  },
];

function signalValue(value: number | null) {
  return value ?? -1;
}

export function rankOpportunities(preset: FilterPreset = "All") {
  const items = [...opportunityRadarItems];
  const sorters: Record<FilterPreset, (item: OpportunityRadarItem) => number> = {
    All: (item) => item.rankingSignals.evidence,
    "Highest ROI": (item) => signalValue(item.rankingSignals.roi),
    "Fastest to launch": (item) => signalValue(item.rankingSignals.speed),
    "Lowest cost": (item) => signalValue(item.rankingSignals.cost),
    "Highest confidence": (item) => signalValue(item.rankingSignals.confidence),
    "Best recurring revenue": (item) => signalValue(item.rankingSignals.recurring),
  };
  return items.sort((a, b) => sorters[preset](b) - sorters[preset](a) || b.rankingSignals.evidence - a.rankingSignals.evidence);
}

export const filterPresets: FilterPreset[] = ["All", "Highest ROI", "Fastest to launch", "Lowest cost", "Highest confidence", "Best recurring revenue"];

export const opportunityQueue = [
  { lane: "Fiverr", count: opportunityRadarItems.filter((item) => item.marketplace === "Fiverr").length },
  { lane: "Etsy", count: opportunityRadarItems.filter((item) => item.marketplace === "Etsy").length },
  { lane: "Gumroad", count: opportunityRadarItems.filter((item) => item.marketplace === "Gumroad").length },
  { lane: "Bounties", count: opportunityRadarItems.filter((item) => item.marketplace === "Bounties").length },
  { lane: "DealFlow", count: opportunityRadarItems.filter((item) => item.marketplace === "DealFlow").length },
];

export const experimentLabItems: ExperimentLabItem[] = [
  { id: "EXP-1", name: "Fiverr AI Automation Consulting", status: "Live Monitoring", confidence: "N/A", owner: "Revenue Architect", nextStep: "Measure first real platform KPIs." },
  { id: "EXP-2", name: "Gumroad AI Workflow Toolkit", status: "Research", confidence: "N/A", owner: "Publishing Scout", nextStep: "Collect public evidence before prototype." },
  { id: "EXP-3", name: "Etsy Digital Planning Product", status: "Awaiting Evidence", confidence: "N/A", owner: "Etsy Scout", nextStep: "Build evidence report, not product." },
  { id: "EXP-4", name: "Bounty Shortlist Sprint", status: "Research", confidence: "N/A", owner: "Bounty Scout", nextStep: "Create shortlist with eligibility and deadline notes." },
];

export const revenueForecastScenarios: ForecastScenario[] = [
  {
    id: "RF-001",
    name: "First Revenue Mix - model only",
    assumptions: ["3 Fiverr clients", "15 Gumroad sales", "1 Etsy shop with early traction"],
    estimatedMonthlyRevenue: "$4,500 model scenario",
    probability: "Medium",
    caveat: "This is not a prediction or claim. It is a planning model with unvalidated assumptions.",
  },
  {
    id: "RF-002",
    name: "Fiverr-only early service path",
    assumptions: ["Manual service delivery", "No ad spend", "No recurring revenue assumed"],
    estimatedMonthlyRevenue: "N/A until price, orders, and delivery capacity are known",
    probability: "N/A",
    caveat: "No revenue forecast exists until real inquiries, consultations, orders, and fulfillment time are recorded.",
  },
];

export const revenueFlywheel = ["Scout", "Research", "Prototype", "Launch", "Revenue", "Playbook", "Automation", "Scale"];

export const productFoundryLines: ProductForge[] = [
  { id: "ebook-forge", emoji: "📚", name: "eBook Forge", purpose: "Original ebooks, worksheets, and companion templates.", status: "Awaiting Approved Opportunity" },
  { id: "etsy-forge", emoji: "🎨", name: "Etsy Forge", purpose: "Original digital downloads, printables, and mockup-ready files.", status: "Awaiting Approved Opportunity" },
  { id: "asset-forge", emoji: "🎮", name: "Asset Forge", purpose: "Original 2D game assets, UI kits, icons, sound FX, and loops.", status: "Awaiting Approved Opportunity" },
  { id: "prompt-forge", emoji: "📝", name: "Prompt Forge", purpose: "Original prompt packs and operating workflows.", status: "Awaiting Approved Opportunity" },
  { id: "template-forge", emoji: "📦", name: "Template Forge", purpose: "Original Notion, spreadsheet, checklist, and workflow templates.", status: "Awaiting Approved Opportunity" },
  { id: "thumbnail-forge", emoji: "🎬", name: "Thumbnail Forge", purpose: "Original thumbnails, covers, and social graphics.", status: "Awaiting Approved Opportunity" },
  { id: "workflow-forge", emoji: "🧠", name: "AI Workflow Forge", purpose: "Manual workflow systems and consulting assets.", status: "Manual Only" },
  { id: "dealflow-forge", emoji: "🏠", name: "DealFlow Forge", purpose: "DealFlow architecture, screens, MVP notes, and roadmap assets.", status: "Planned" },
];

export const marketplaceIntelligencePanels: MarketplaceIntelligencePanel[] = [
  { id: "etsy", marketplace: "Etsy", currentStatus: "Manual Evidence Needed", fields: ["Today's Trends", "Top Categories", "Top Tags", "Seasonality", "Average Price", "Saturation", "Opportunity Score", "Last Reviewed"], lastReviewed: "N/A" },
  { id: "fiverr", marketplace: "Fiverr", currentStatus: "Watching", fields: ["Service Category", "Gig Positioning", "Price Range", "Demand Signals", "Competition", "Opportunity Score", "Last Reviewed"], lastReviewed: "EXP-1 live monitoring" },
  { id: "gumroad", marketplace: "Gumroad", currentStatus: "Manual Evidence Needed", fields: ["Toolkit Types", "Template Demand", "eBook Topics", "Average Price", "Bundle Strategy", "Opportunity Score", "Last Reviewed"], lastReviewed: "N/A" },
  { id: "creative-market", marketplace: "Creative Market", currentStatus: "Manual Evidence Needed", fields: ["Asset Category", "Visual Style", "Bundle Size", "Average Price", "Saturation", "Opportunity Score", "Last Reviewed"], lastReviewed: "N/A" },
  { id: "unity", marketplace: "Unity", currentStatus: "Manual Evidence Needed", fields: ["Asset Type", "Genre", "Price Range", "Support Burden", "Saturation", "Opportunity Score", "Last Reviewed"], lastReviewed: "N/A" },
  { id: "amazon", marketplace: "Amazon", currentStatus: "Parked", fields: ["Category", "Demand", "Competition", "Margin", "Fulfillment Risk", "Opportunity Score", "Last Reviewed"], lastReviewed: "N/A" },
  { id: "shopify", marketplace: "Shopify", currentStatus: "Parked", fields: ["Product", "Gate", "Supplier Evidence", "Margin", "Inventory Risk", "Opportunity Score", "Last Reviewed"], lastReviewed: "Commerce Gate A only" },
];

export const dealFlowIncubatorStages: DealFlowIncubatorStage[] = [
  { id: "idea", name: "Idea", status: "Research", output: "Define the DealFlow thesis and target user." },
  { id: "research", name: "Research", status: "Planned", output: "Market size, pain, workflows, and existing alternatives." },
  { id: "architecture", name: "Architecture", status: "Planned", output: "System model, data model, and workflow map." },
  { id: "competitors", name: "Competitors", status: "Planned", output: "Competitor matrix and differentiation notes." },
  { id: "screens", name: "Screens", status: "Not Started", output: "MVP screen inventory." },
  { id: "features", name: "Features", status: "Not Started", output: "Feature list ranked by mission value." },
  { id: "mvp", name: "MVP", status: "Not Started", output: "Buildable MVP scope." },
  { id: "roadmap", name: "Roadmap", status: "Not Started", output: "Milestones and evidence gates." },
];

export const opportunityRadarRules = [
  "Every idea discovered by Revenue Corps enters Opportunity Radar.",
  "Every opportunity gets documented, scored, and reviewed before Mission Pipeline entry.",
  "Revenue Architect ranks opportunities by available evidence and explicit assumptions.",
  "Mission Commander approves experiments.",
  "Unknown values stay N/A until evidence exists.",
];
