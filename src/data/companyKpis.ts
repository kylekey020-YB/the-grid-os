import { approvalQueue, decisionRecords } from "@/data/approvalSystem";
import { liveProducts } from "@/data/launchCenter";
import { experimentTracker, marketScannerCandidates, revenueDashboardMetrics } from "@/data/revenueIntelligence";
import { missionPipelineItems } from "@/data/missionPipeline";
import { scoutReportMetrics } from "@/data/scoutReports";

export type KpiValue = string | number | "N/A";

export type DivisionKpi = {
  label: string;
  value: KpiValue;
  evidence: string;
};

export type DivisionKpiReport = {
  id: string;
  division: string;
  status: "On Track" | "Manual Only" | "Research" | "N/A";
  kpis: DivisionKpi[];
};

const revenueValue = revenueDashboardMetrics.find((metric) => metric.label === "Revenue")?.value ?? "Unknown";

export const companyHealth = {
  mission: "On Track",
  approvalsPending: approvalQueue.filter((approval) => approval.status === "Awaiting Commander").length,
  activeExperiments: experimentTracker.length,
  revenue: revenueValue === "Unknown" ? "$0" : revenueValue,
  mrrGoal: "$10,000",
  daysRemaining: 31,
  missionProgress: "Research -> Planning -> Launch",
};

export const divisionKpiReports: DivisionKpiReport[] = [
  {
    id: "revenue-corps",
    division: "Revenue Corps",
    status: "Manual Only",
    kpis: [
      { label: "Scout reports", value: scoutReportMetrics.totalReports, evidence: "Scout Reports typed data." },
      { label: "Opportunities researched", value: marketScannerCandidates.length, evidence: "Market Scanner candidates." },
      { label: "Experiments launched", value: experimentTracker.length, evidence: "Revenue Intelligence experiment tracker." },
      { label: "Listings published", value: liveProducts.length, evidence: "Launch Center live product count." },
      { label: "First inquiries", value: "N/A", evidence: "No inquiry record exists." },
      { label: "Conversion rate", value: "N/A", evidence: "No traffic or conversion records exist." },
      { label: "Revenue", value: "N/A", evidence: "No revenue evidence recorded yet." },
      { label: "Monthly recurring revenue", value: "N/A", evidence: "No recurring revenue evidence recorded yet." },
    ],
  },
  {
    id: "commerce",
    division: "Commerce",
    status: "Research",
    kpis: [
      { label: "Products in Gate A", value: missionPipelineItems.filter((item) => item.owner === "Commerce").length, evidence: "Mission Pipeline commerce item count." },
      { label: "Products advanced", value: "N/A", evidence: "No advancement record exists." },
      { label: "Products rejected", value: "N/A", evidence: "No rejection record exists." },
      { label: "Supplier responses", value: "N/A", evidence: "No supplier outreach authorized." },
      { label: "Average margin", value: "N/A", evidence: "Live quotes unresolved." },
      { label: "Validation completion", value: "N/A", evidence: "Gate A not fully complete." },
    ],
  },
  {
    id: "apex",
    division: "APEX",
    status: "Research",
    kpis: [
      { label: "Paper trades", value: "N/A", evidence: "No APEX status feed connected to this repo." },
      { label: "Win rate", value: "N/A", evidence: "No current APEX metric source connected." },
      { label: "Expectancy", value: "N/A", evidence: "No current APEX metric source connected." },
      { label: "Average R multiple", value: "N/A", evidence: "No current APEX metric source connected." },
      { label: "Drawdown", value: "N/A", evidence: "No current APEX metric source connected." },
      { label: "Strategy version", value: "N/A", evidence: "No current APEX status feed connected." },
    ],
  },
  {
    id: "clu",
    division: "CLU",
    status: "Research",
    kpis: [
      { label: "Entries", value: "N/A", evidence: "No CLU status feed connected to this repo." },
      { label: "Survivors", value: "N/A", evidence: "No CLU status feed connected." },
      { label: "Moonshots", value: "N/A", evidence: "No CLU status feed connected." },
      { label: "Average loss", value: "N/A", evidence: "No CLU status feed connected." },
      { label: "Largest simulated gain", value: "N/A", evidence: "No CLU status feed connected." },
    ],
  },
  {
    id: "operations",
    division: "Operations",
    status: "On Track",
    kpis: [
      { label: "Mission Records", value: missionPipelineItems.length, evidence: "Mission Pipeline tracked items." },
      { label: "Decision Records", value: decisionRecords.length, evidence: "Decision Records typed data." },
      { label: "Outstanding approvals", value: approvalQueue.filter((approval) => approval.status === "Awaiting Commander").length, evidence: "Approval Queue typed data." },
      { label: "Blockers", value: "N/A", evidence: "No blocker registry exists yet." },
      { label: "Active experiments", value: experimentTracker.length, evidence: "Revenue Intelligence experiment tracker." },
    ],
  },
];
