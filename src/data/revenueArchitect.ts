export type RevenueArchitectBoardStatus = "Active" | "Planned" | "Manual Only" | "Pending Evidence" | "Parked" | "Validated";

export type RevenueArchitectBoardItem = {
  id: string;
  name: string;
  purpose: string;
  currentState: RevenueArchitectBoardStatus;
  evidenceRule: string;
  approvalGate: string;
};

export const revenueArchitectMission = {
  officer: "REVENUE ARCHITECT",
  mission: "Turn Operation First Revenue into one manual, evidence-backed revenue system before automation.",
  objective: "$10,000 Monthly Recurring Revenue",
  doctrine: "Study patterns. Create original offers. Validate demand. Publish manually. Automate only proven repeated workflows.",
  safety: "No scraping, no autonomous publishing, no fake metrics, no customer messaging, and no spending without approval.",
};

export const revenueArchitectBoard: RevenueArchitectBoardItem[] = [
  {
    id: "mission",
    name: "Mission",
    purpose: "Keep the revenue objective, active lane, constraints, and next decision visible.",
    currentState: "Active",
    evidenceRule: "Only real buyer evidence, manual notes, and approved experiments can move the mission forward.",
    approvalGate: "Mission Commander confirms lane and offer before execution.",
  },
  {
    id: "daily-brief",
    name: "Daily Brief",
    purpose: "Summarize priorities, blockers, recommendations, and decisions that need approval.",
    currentState: "Planned",
    evidenceRule: "Briefings must cite current board state and cannot invent progress.",
    approvalGate: "Future Operations Officer compiles; Mission Commander decides.",
  },
  {
    id: "opportunity-queue",
    name: "Opportunity Queue",
    purpose: "Capture potential offers before they enter validation.",
    currentState: "Manual Only",
    evidenceRule: "Each idea needs platform, customer pain, demand signal, and differentiation notes.",
    approvalGate: "Revenue Architect recommends; Mission Commander selects candidates.",
  },
  {
    id: "pipeline",
    name: "Pipeline",
    purpose: "Move opportunities through research, validate, prototype, publish, scale, and systematize gates.",
    currentState: "Manual Only",
    evidenceRule: "No stage advances without evidence for the next gate.",
    approvalGate: "Human approval required before publish, scale, or systematize.",
  },
  {
    id: "evidence-board",
    name: "Evidence Board",
    purpose: "Collect demand proof, buyer language, competition notes, pricing notes, and compliance flags.",
    currentState: "Pending Evidence",
    evidenceRule: "Unknown remains Unknown until documented evidence exists.",
    approvalGate: "Evidence must be reviewed before offer build begins.",
  },
  {
    id: "experiments",
    name: "Experiments",
    purpose: "Track hypotheses, test method, owner, result, and scale / kill / retry decisions.",
    currentState: "Manual Only",
    evidenceRule: "Results require screenshots, receipts, analytics exports, or manually recorded source notes.",
    approvalGate: "Mission Commander approves scale decisions.",
  },
  {
    id: "playbooks",
    name: "Playbooks",
    purpose: "Document workflows only after they become repeatable.",
    currentState: "Planned",
    evidenceRule: "Draft playbooks are not validated until repeated outcomes are recorded.",
    approvalGate: "Validated playbook status requires review.",
  },
  {
    id: "supplier-research",
    name: "Supplier Research",
    purpose: "Store sourcing notes for physical or hybrid offers when needed.",
    currentState: "Planned",
    evidenceRule: "Public estimates must be labeled; live quotes require approval before outreach.",
    approvalGate: "No supplier contact or inventory purchase without Gate approval.",
  },
  {
    id: "competitive-landscape",
    name: "Competitive Landscape",
    purpose: "Study market patterns without copying listings, designs, trademarks, or claims.",
    currentState: "Manual Only",
    evidenceRule: "Record patterns and gaps, not clone targets.",
    approvalGate: "Sentinel review required for trademark and originality risk.",
  },
  {
    id: "marketplace-scanner",
    name: "Marketplace Scanner",
    purpose: "Track manually reviewed Etsy, Fiverr, Gumroad, YouTube, affiliate, and asset-market signals.",
    currentState: "Manual Only",
    evidenceRule: "Manual/public-data notes only; no platform scraping or account automation.",
    approvalGate: "Scanner findings require human review before entering the queue.",
  },
  {
    id: "idea-graveyard",
    name: "Idea Graveyard",
    purpose: "Preserve rejected ideas and why they failed so mistakes are not repeated.",
    currentState: "Planned",
    evidenceRule: "Killed ideas need a reason: weak demand, poor margin, compliance risk, low fit, or no differentiation.",
    approvalGate: "Mission Commander can revive only with new evidence.",
  },
  {
    id: "approval-queue",
    name: "Approval Queue",
    purpose: "Collect decisions waiting for human approval before publishing, spending, outreach, or scaling.",
    currentState: "Active",
    evidenceRule: "Every approval item must include risk, evidence, recommendation, and next action.",
    approvalGate: "Mission Commander approval is required.",
  },
  {
    id: "hall-of-wins",
    name: "Hall of Wins",
    purpose: "Record validated milestones only after proof exists.",
    currentState: "Pending Evidence",
    evidenceRule: "No milestone is claimed without evidence.",
    approvalGate: "Validated wins require source records.",
  },
];
