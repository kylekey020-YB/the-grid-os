export type UnknownValue = "Unknown";
export type RevenuePlatform = "Etsy" | "Fiverr" | "Gumroad" | "Affiliate" | "YouTube" | "Assets";
export type RadarStatus = "Research" | "Watching" | "Active" | "Rejected" | "Validated";
export type PipelineStage = "Research" | "Validate" | "Prototype" | "Publish" | "Scale" | "Systematize";
export type Decision = "Scale" | "Kill" | "Retry" | "Pending Evidence";
export type Confidence = "Unknown" | "Low" | "Medium" | "High";
export type FactorValue = "Unknown" | "Low" | "Medium" | "High";

export type OpportunityCandidate = {
  id: string;
  opportunity: string;
  platform: RevenuePlatform;
  category: string;
  demand: FactorValue;
  competition: FactorValue;
  margin: FactorValue;
  operatorFit: FactorValue;
  recurringRevenue: FactorValue;
  automationPotential: FactorValue;
  confidence: Confidence;
  status: RadarStatus;
};

export type PipelineItem = {
  id: string;
  opportunity: string;
  stage: PipelineStage;
  nextGate: string;
  evidenceRequired: string;
};

export type RevenueScore = {
  id: string;
  opportunity: string;
  demand: FactorValue;
  margin: FactorValue;
  competition: FactorValue;
  recurring: FactorValue;
  operatorFit: FactorValue;
  automationPotential: FactorValue;
  score: number | UnknownValue;
  note: string;
};

export type RevenueExperimentIntel = {
  id: string;
  hypothesis: string;
  evidence: string;
  decision: Decision;
  owner: string;
  result: string;
};

export type RevenueDashboardMetric = {
  label: string;
  value: string | UnknownValue;
  note: string;
};

export type HallMilestone = {
  id: string;
  milestone: string;
  status: "Not yet validated" | "Validated";
  evidence: string;
};

export type PlaybookEntry = {
  id: string;
  title: string;
  workflow: string;
  status: "Draft" | "Validated" | "Parked";
  evidence: string;
};

export const revenueIntelligenceDoctrine = [
  "Unknown values remain Unknown",
  "Evidence informs",
  "Officers advise",
  "Mission Commander decides",
  "No autonomous publishing",
  "No fabricated metrics",
];

export const marketScannerCandidates: OpportunityCandidate[] = [
  { id: "scanner-001", opportunity: "Original YouTube thumbnail productized service", platform: "YouTube", category: "Creative services", demand: "Unknown", competition: "Unknown", margin: "Unknown", operatorFit: "Medium", recurringRevenue: "Unknown", automationPotential: "Medium", confidence: "Low", status: "Research" },
  { id: "scanner-002", opportunity: "Etsy digital workflow template bundle", platform: "Etsy", category: "Digital products", demand: "Unknown", competition: "Unknown", margin: "Unknown", operatorFit: "High", recurringRevenue: "Unknown", automationPotential: "Medium", confidence: "Low", status: "Watching" },
  { id: "scanner-003", opportunity: "2D game UI asset pack", platform: "Assets", category: "Game assets", demand: "Unknown", competition: "Unknown", margin: "Unknown", operatorFit: "Medium", recurringRevenue: "Unknown", automationPotential: "Low", confidence: "Low", status: "Research" },
];

export const pipelineStages: PipelineStage[] = ["Research", "Validate", "Prototype", "Publish", "Scale", "Systematize"];

export const opportunityPipeline: PipelineItem[] = [
  { id: "pipe-001", opportunity: "Thumbnail service lane", stage: "Research", nextGate: "Collect compliant public demand notes", evidenceRequired: "Manual demand evidence and differentiation angle" },
  { id: "pipe-002", opportunity: "Etsy template lane", stage: "Validate", nextGate: "Validate buyer problem and original bundle concept", evidenceRequired: "Manual keyword/category notes and original design brief" },
  { id: "pipe-003", opportunity: "Affiliate/SEO content asset lane", stage: "Research", nextGate: "Define topic cluster and review compliance", evidenceRequired: "Manual topic evidence and no fabricated claims" },
];

export const revenueScores: RevenueScore[] = marketScannerCandidates.map((candidate) => ({
  id: candidate.id,
  opportunity: candidate.opportunity,
  demand: candidate.demand,
  margin: candidate.margin,
  competition: candidate.competition,
  recurring: candidate.recurringRevenue,
  operatorFit: candidate.operatorFit,
  automationPotential: candidate.automationPotential,
  score: "Unknown",
  note: "Composite score locked until demand, margin, competition, recurring potential, operator fit, and automation potential have evidence.",
}));

export const experimentTracker: RevenueExperimentIntel[] = [
  { id: "exp-001", hypothesis: "A narrowly scoped thumbnail service can validate demand before building assets at scale.", evidence: "Unknown - no manually published experiment yet.", decision: "Pending Evidence", owner: "REVENUE ARCHITECT", result: "Unknown" },
  { id: "exp-002", hypothesis: "Original workflow templates can differentiate from generic Etsy printables.", evidence: "Unknown - needs manual demand validation.", decision: "Pending Evidence", owner: "DESIGN FORGE", result: "Unknown" },
  { id: "exp-003", hypothesis: "Affiliate/SEO assets can become repeatable once topic evidence exists.", evidence: "Unknown - topic research not validated.", decision: "Pending Evidence", owner: "COPY ROOM", result: "Unknown" },
];

export const revenueDashboardMetrics: RevenueDashboardMetric[] = [
  { label: "Products", value: "Unknown", note: "No manually approved product count yet." },
  { label: "Published", value: "Unknown", note: "No autonomous or manual publishing metrics recorded." },
  { label: "Revenue", value: "Unknown", note: "No revenue is claimed without evidence." },
  { label: "Profit", value: "Unknown", note: "No profit is claimed without cost and revenue records." },
  { label: "Time Invested", value: "Unknown", note: "Time tracking has not started." },
  { label: "ROI", value: "Unknown", note: "ROI requires real revenue, cost, and time data." },
];

export const hallOfWins: HallMilestone[] = [
  { id: "win-001", milestone: "First Sale", status: "Not yet validated", evidence: "No sale evidence recorded." },
  { id: "win-002", milestone: "First Etsy Sale", status: "Not yet validated", evidence: "No Etsy sale evidence recorded." },
  { id: "win-003", milestone: "First Fiverr Client", status: "Not yet validated", evidence: "No Fiverr client evidence recorded." },
  { id: "win-004", milestone: "First $100 Day", status: "Not yet validated", evidence: "No revenue evidence recorded." },
  { id: "win-005", milestone: "First $1k Month", status: "Not yet validated", evidence: "No revenue evidence recorded." },
  { id: "win-006", milestone: "First $10k Month", status: "Not yet validated", evidence: "No revenue evidence recorded." },
];

export const opportunityRadar = marketScannerCandidates.map((candidate) => ({ id: candidate.id, opportunity: candidate.opportunity, status: candidate.status, platform: candidate.platform }));

export const playbookLibrary: PlaybookEntry[] = [
  { id: "playbook-001", title: "Manual demand research workflow", workflow: "Capture demand signals, buyer language, competition notes, differentiation, and compliance risks before building.", status: "Draft", evidence: "Not validated yet." },
  { id: "playbook-002", title: "Manual publishing approval workflow", workflow: "Require trademark, copyright, platform-ToS, and Mission Commander approval before publishing.", status: "Draft", evidence: "Operational gate defined, not yet proven." },
];
