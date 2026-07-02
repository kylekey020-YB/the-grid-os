export type ApprovalStatus = "Awaiting Commander" | "Approved" | "Declined" | "Revision Requested";
export type ApprovalRisk = "LOW" | "MEDIUM" | "HIGH";
export type ApprovalAction = "Approve" | "Decline" | "Request Revision";

export type ApprovalRequest = {
  id: string;
  requester: string;
  title: string;
  mission: string;
  status: ApprovalStatus;
  risk: ApprovalRisk;
  cost: string;
  summary: string;
  evidence: string;
  irreversibleBoundary: string;
  requestedDecision: string;
  actions: ApprovalAction[];
};

export type DecisionRecord = {
  id: string;
  decision: string;
  reason: string;
  evidence: string;
  approvedBy: string;
  date: string;
  outcome: string;
};

export const approvalDoctrine = [
  "Everything irreversible flows through the Approval Queue.",
  "Approval objects identify decision, risk, cost, evidence, and next action.",
  "Buttons are review placeholders until persistence and authorization exist.",
  "Mission Commander remains the final approval authority.",
];

export const approvalQueue: ApprovalRequest[] = [
  {
    id: "AR-001",
    requester: "Revenue Architect",
    title: "Income Lane Scoring Sprint",
    mission: "Operation First Revenue",
    status: "Awaiting Commander",
    risk: "LOW",
    cost: "$0",
    summary: "Score approved income lanes against demand evidence, operator fit, margin potential, compliance risk, and manual speed to first offer.",
    evidence: "Revenue Architect board is active; Operation First Revenue has a 31-day window; Commerce remains Gate A; no automation or spending is required.",
    irreversibleBoundary: "No publishing, spending, account action, customer messaging, supplier outreach, or automation is included in this request.",
    requestedDecision: "Approve, decline, or request revision for a manual scoring sprint only.",
    actions: ["Approve", "Decline", "Request Revision"],
  },
];

export const decisionRecords: DecisionRecord[] = [
  {
    id: "DR-001",
    decision: "Income Division becomes primary offensive effort.",
    reason: "Operation First Revenue has a 31-day urgency window while Commerce remains in Gate A validation.",
    evidence: "Revenue Architect assessment, active Operation First Revenue objective, and current Commerce gate status.",
    approvedBy: "Mission Commander",
    date: "July 2, 2026",
    outcome: "Revenue Architect activated as ACTIVE / ADVISORY ONLY and the income board became the first operating department surface.",
  },
];
