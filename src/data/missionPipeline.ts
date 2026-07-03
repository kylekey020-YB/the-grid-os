export type MissionPipelineStageName =
  | "Idea"
  | "Research"
  | "Evidence Score"
  | "Approval"
  | "Experiment"
  | "Revenue"
  | "Scale"
  | "Playbook"
  | "Automation"
  | "Division"
  | "Program"
  | "Institutional Knowledge";

export type MissionPipelineStageStatus = "Active" | "Manual Only" | "Evidence Required" | "Approval Required" | "Future Gate" | "Locked";

export type MissionPipelineStage = {
  id: string;
  order: number;
  name: MissionPipelineStageName;
  status: MissionPipelineStageStatus;
  purpose: string;
  requiredEvidence: string;
  approvalGate: string;
  cannotSkipReason: string;
};

export type MissionPipelineItem = {
  id: string;
  title: string;
  owner: string;
  currentStage: MissionPipelineStageName;
  status: "Active" | "Awaiting Commander" | "Research" | "Parked" | "Live";
  evidenceState: string;
  approvalState: string;
  nextGate: string;
};

export const missionPipelineDoctrine = [
  "Every idea starts in the Mission Pipeline.",
  "Nothing skips the pipeline.",
  "Evidence gates precede approval gates.",
  "Revenue precedes scale.",
  "Playbooks precede automation.",
  "Programs earn autonomy only after validated repeated workflows.",
  "Scheduled research may create reports and recommendations, but experiments still require approval.",
];

export const missionPipelineStages: MissionPipelineStage[] = [
  {
    id: "idea",
    order: 1,
    name: "Idea",
    status: "Active",
    purpose: "Capture raw opportunities before they become work.",
    requiredEvidence: "Problem, audience, lane, and why it may matter.",
    approvalGate: "No approval required to record an idea.",
    cannotSkipReason: "Unrecorded ideas become undocumented drift.",
  },
  {
    id: "research",
    order: 2,
    name: "Research",
    status: "Manual Only",
    purpose: "Gather public/manual evidence and identify unknowns.",
    requiredEvidence: "Demand notes, constraints, risks, comparable patterns, and open questions.",
    approvalGate: "Research must stay within approved sources and platform rules.",
    cannotSkipReason: "The doctrine requires evidence before expansion.",
  },
  {
    id: "evidence-score",
    order: 3,
    name: "Evidence Score",
    status: "Evidence Required",
    purpose: "Judge whether evidence is strong enough to request action.",
    requiredEvidence: "Demand, margin, competition, risk, operator fit, and speed to manual test.",
    approvalGate: "Scores remain Unknown until evidence exists.",
    cannotSkipReason: "Unsupported confidence creates fake certainty.",
  },
  {
    id: "approval",
    order: 4,
    name: "Approval",
    status: "Approval Required",
    purpose: "Route irreversible or directional decisions to Mission Commander.",
    requiredEvidence: "Approval request with risk, cost, evidence, boundary, and requested decision.",
    approvalGate: "Mission Commander may approve, decline, or request revision.",
    cannotSkipReason: "Everything irreversible flows through the Approval Queue.",
  },
  {
    id: "experiment",
    order: 5,
    name: "Experiment",
    status: "Manual Only",
    purpose: "Run a scoped manual test with a hypothesis and result record.",
    requiredEvidence: "Hypothesis, method, owner, result, and scale / kill / retry decision.",
    approvalGate: "Experiment must stay inside the approved boundary.",
    cannotSkipReason: "Untested assumptions do not become operations.",
  },
  {
    id: "revenue",
    order: 6,
    name: "Revenue",
    status: "Evidence Required",
    purpose: "Record real revenue only when proof exists.",
    requiredEvidence: "Receipt, platform record, order record, or documented customer payment evidence.",
    approvalGate: "No revenue milestone is claimed without evidence.",
    cannotSkipReason: "Fake revenue corrupts the operating system.",
  },
  {
    id: "scale",
    order: 7,
    name: "Scale",
    status: "Approval Required",
    purpose: "Increase effort only after manual evidence justifies it.",
    requiredEvidence: "Repeated signal, cost awareness, risk review, and capacity note.",
    approvalGate: "Mission Commander approval required before scale.",
    cannotSkipReason: "Scale without proof amplifies mistakes.",
  },
  {
    id: "playbook",
    order: 8,
    name: "Playbook",
    status: "Evidence Required",
    purpose: "Document the repeatable workflow after it proves itself.",
    requiredEvidence: "Step-by-step workflow, inputs, outputs, risks, and proof of repeatability.",
    approvalGate: "Validated playbook status requires review.",
    cannotSkipReason: "Automation needs a stable workflow to automate.",
  },
  {
    id: "automation",
    order: 9,
    name: "Automation",
    status: "Future Gate",
    purpose: "Consider automation only after a validated playbook exists.",
    requiredEvidence: "Repeated workflow, safety boundaries, rollback plan, and approval record.",
    approvalGate: "Explicit approval required before any automation.",
    cannotSkipReason: "Reality comes before automation.",
  },
  {
    id: "division",
    order: 10,
    name: "Division",
    status: "Future Gate",
    purpose: "Promote a validated operating area into a durable division.",
    requiredEvidence: "Sustained workflow, clear ownership, records, and strategic value.",
    approvalGate: "Mission Commander approval required for division promotion.",
    cannotSkipReason: "Every module earns its place.",
  },
  {
    id: "program",
    order: 11,
    name: "Program",
    status: "Locked",
    purpose: "Create an autonomous or semi-autonomous Program only after validation.",
    requiredEvidence: "Validated repeated workflow, playbook, approval gates, risk review, and autonomy boundary.",
    approvalGate: "Programs earn autonomy only after validated repeated workflows.",
    cannotSkipReason: "Programs are earned, not declared.",
  },
  {
    id: "institutional-knowledge",
    order: 12,
    name: "Institutional Knowledge",
    status: "Active",
    purpose: "Preserve what happened, why it happened, and what should be repeated or avoided.",
    requiredEvidence: "Mission Records, Decision Records, playbooks, failures, wins, and handoff notes.",
    approvalGate: "If a decision matters, record it.",
    cannotSkipReason: "Institutional memory prevents rediscovery every session.",
  },
];

export const missionPipelineItems: MissionPipelineItem[] = [
  {
    id: "MP-001",
    title: "Operation First Revenue",
    owner: "Revenue Architect",
    currentStage: "Experiment",
    status: "Live",
    evidenceState: "EXP-1 Fiverr AI Automation Consulting is live; first marketplace service published July 2, 2026.",
    approvalState: "Mission Commander launch action completed; post-launch metrics now require evidence.",
    nextGate: "Track impressions, click-through rate, messages, consultations, orders, reviews, and revenue.",
  },
  {
    id: "MP-008",
    title: "Semi-Autonomous Research Scheduler",
    owner: "ZENITH / Revenue Architect / Trading Research Corps",
    currentStage: "Research",
    status: "Research",
    evidenceState: "Typed schedule exists for Revenue Corps and Quant Research Corps research reports. No external execution, publishing, trading, messaging, spending, or account automation is connected.",
    approvalState: "Scouts may create reports and recommendations only. Mission Commander approval is required before any experiment, launch, paper mode, spend, account action, or live-risk step.",
    nextGate: "Use the scheduler manually, review first generated reports, and only then consider assisted scheduling improvements.",
  },
  {
    id: "MP-007",
    title: "Quant Research Scout Engine",
    owner: "Trading Research Corps / GAUNTLET",
    currentStage: "Research",
    status: "Research",
    evidenceState: "Typed Quant Scout architecture exists for GitHub, QuantConnect, Reddit, academic, options, ICT, data vendor, and backtest feasibility research. ORION Opening Range Breakout is the first prototype candidate, but no profitability is claimed.",
    approvalState: "No live trading, broker connection, wallet connection, options execution, paper mode, or money at risk is authorized.",
    nextGate: "Complete ORION first-signal research and convert it into a backtest specification with historical validation requirements.",
  },
  {
    id: "MP-006",
    title: "Trading Research Corps",
    owner: "Trading Division / GAUNTLET",
    currentStage: "Research",
    status: "Research",
    evidenceState: "PAIRFORGE, VOLTA, and ATLAS are research-only programs. No strategy has proven expectancy, no paper mode is active, and no live connection exists.",
    approvalState: "No live trading, brokerage connection, options execution, or money at risk is authorized.",
    nextGate: "Define data sources and backtest requirements before any strategy candidate can request paper-mode review.",
  },
  {
    id: "MP-005",
    title: "Venture Scouts",
    owner: "Revenue Architect",
    currentStage: "Research",
    status: "Research",
    evidenceState: "Typed Venture Scout architecture exists for marketplace, media, software, opportunity, and asset divisions. Scores remain N/A until public/manual evidence is recorded.",
    approvalState: "No scout may publish, message customers, spend money, scrape against platform rules, or trigger experiments without Mission Commander approval.",
    nextGate: "Create the first manually sourced venture report and score it through the Opportunity Scorecard.",
  },
  {
    id: "MP-004",
    title: "Opportunity Radar",
    owner: "Revenue Architect",
    currentStage: "Research",
    status: "Research",
    evidenceState: "Typed opportunity radar exists; scores remain N/A until public/manual evidence is recorded.",
    approvalState: "No opportunity enters launch, revenue, scale, or automation without review and Mission Commander approval.",
    nextGate: "Populate evidence, score assumptions, and select candidates for approval request.",
  },
  {
    id: "MP-003",
    title: "Revenue Corps Scout Reports",
    owner: "Revenue Architect",
    currentStage: "Research",
    status: "Research",
    evidenceState: "Scout Reports structure exists; individual report values remain N/A until manual public evidence is recorded.",
    approvalState: "No experiment, product build, launch, spend, scraping, or account action authorized.",
    nextGate: "Revenue Architect ranks completed reports; Mission Commander approves any experiment request.",
  },
  {
    id: "MP-002",
    title: "Bambu A1 Rescue Kit",
    owner: "Commerce",
    currentStage: "Research",
    status: "Research",
    evidenceState: "Gate A Phase A1 public-data research exists; live supplier quotes remain unresolved.",
    approvalState: "No inventory or supplier outreach authorized.",
    nextGate: "Resolve live quote unknowns only if Phase A2 is approved.",
  },
];
