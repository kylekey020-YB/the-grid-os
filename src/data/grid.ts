import type { TimelineItem } from "@/components/Timeline";
import type { Workstation } from "@/components/WorkstationCard";

export const workstationCards: Workstation[] = [
  {
    name: "Trading Research",
    purpose: "Collect evidence for APEX strategy research before any autonomous decisioning is considered.",
    stage: "Research",
    lastUpdated: "Foundation build",
    status: "Manual",
  },
  {
    name: "Shopify Opportunity Validator",
    purpose: "Review market evidence, constraints, and launch readiness before a commerce idea becomes a workflow.",
    stage: "Validation design",
    lastUpdated: "v0.1 hardening",
    status: "Manual",
  },
  {
    name: "Knowledge Vault",
    purpose: "Store decisions, lessons, prompts, meeting notes, and validated operating knowledge.",
    stage: "Initialized",
    lastUpdated: "Foundation build",
    status: "Manual",
    tone: "success",
  },
  {
    name: "War Room",
    purpose: "Centralize briefings, cycle reviews, architecture decisions, and doctrine.",
    stage: "Planning",
    lastUpdated: "Foundation build",
    status: "Manual",
  },
];

export const recentActivity: TimelineItem[] = [
  {
    title: "Commerce workstation shaped",
    description: "The first workstation now frames Shopify validation without automating decisions.",
    status: "Manual",
  },
  {
    title: "Knowledge base initialized",
    description: "The first vault categories are ready for future validated material.",
    status: "Manual",
  },
  {
    title: "Trading strategy research completed",
    description: "Price-based research notes are represented without claiming live trading performance.",
    status: "Manual",
  },
];

export const missionQueue = [
  "Validate Shopify opportunity",
  "Research derivatives microstructure",
  "Review workstation architecture",
  "Document first validation decision",
];

export const doctrine = [
  "Reality before automation",
  "Architecture before complexity",
  "Every module earns its place",
  "Evidence before expansion",
];

export const latestDecisions = [
  "Commerce validation is the first workstation surface.",
  "Programs remain manual until evidence supports progression.",
  "No synthetic revenue, PnL, or agent metrics are displayed.",
];

export const commerceWorkflow: TimelineItem[] = [
  { title: "Prospector", description: "Find candidate markets and product angles for human review.", status: "Manual workflow" },
  { title: "Validator", description: "Assess demand, constraints, and evidence before committing resources.", status: "Manual workflow" },
  { title: "Sourcer", description: "Document supplier and fulfillment options without automation claims.", status: "Manual workflow" },
  { title: "Brandsmith", description: "Shape positioning, naming, and offer hypotheses.", status: "Manual workflow" },
  { title: "Content Forge", description: "Prepare creative and content drafts for approval.", status: "Manual workflow" },
  { title: "Growth Engine", description: "Track growth experiments only after validation begins.", status: "Manual workflow" },
];

export const commerceEvidence = [
  {
    label: "Demand signal",
    detail: "Search behavior, customer language, and visible purchase intent.",
    state: "Awaiting review",
  },
  {
    label: "Operational fit",
    detail: "Fulfillment, margin, supplier reliability, and customer support burden.",
    state: "Not scored",
  },
  {
    label: "Brand angle",
    detail: "Reason to exist beyond commodity resale or trend chasing.",
    state: "Drafting",
  },
  {
    label: "Risk notes",
    detail: "Compliance, claims, platform limitations, and sourcing fragility.",
    state: "Open",
  },
];

export const validationGates = [
  "Evidence captured",
  "Assumptions challenged",
  "Operator decision recorded",
  "Next manual action assigned",
];

export const knowledgeCategories = ["Trading", "Commerce", "Architecture", "Research", "Meetings", "Lessons Learned", "Prompts"];
