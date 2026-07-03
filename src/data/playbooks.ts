export type PlaybookType =
  | "Revenue Playbook"
  | "Trading Playbook"
  | "Engineering Playbook"
  | "Operations Playbook"
  | "Knowledge Playbook"
  | "Customer Playbook"
  | "Launch Playbook";

export type PlaybookStatus = "Draft" | "Tested" | "Validated" | "Retired";

export type Playbook = {
  playbookId: string;
  title: string;
  type: PlaybookType;
  division: string;
  owner: string;
  trigger: string;
  whenToUse: string;
  inputsRequired: string[];
  procedure: string[];
  toolsRequired: string[];
  successCriteria: string[];
  failureConditions: string[];
  metricsToTrack: string[];
  lessonsLearned: string;
  relatedMissionRecords: string[];
  relatedEvidenceLedgerEntries: string[];
  relatedObsidianNote: string;
  status: PlaybookStatus;
  evidenceRule: string;
};

export const playbookDoctrine =
  "THE GRID does not merely remember outcomes. It converts validated experience into reusable playbooks.";

export const playbookRules = [
  "No fake wins.",
  "No fake lessons.",
  "No completed playbooks unless evidence exists.",
  "Draft placeholders are allowed only when clearly marked Draft.",
  "Validated status requires repeated evidence, Mission Records, and Commander review.",
];

const draftEvidenceRule = "Draft placeholder only. Not validated until repeated evidence, Mission Records, Evidence Ledger entries, and Commander review exist.";

export const playbooks: Playbook[] = [
  {
    playbookId: "PB-001",
    title: "Landing the First Fiverr Client",
    type: "Revenue Playbook",
    division: "Revenue Corps",
    owner: "Revenue Architect / Mission Commander",
    trigger: "A Fiverr service is live and receives verified buyer interest.",
    whenToUse: "Use after real Fiverr messages, consultations, orders, or client delivery evidence exists.",
    inputsRequired: ["Live gig link", "Buyer message evidence", "Offer scope", "Pricing", "Delivery notes", "Customer outcome record"],
    procedure: ["Record verified buyer signal.", "Clarify customer need manually.", "Confirm scope and boundaries.", "Deliver only approved work.", "Record outcome and lesson."],
    toolsRequired: ["Fiverr", "Evidence Ledger", "Mission Record", "Customer note"],
    successCriteria: ["First verified client interaction or order recorded.", "Scope, delivery, and result documented."],
    failureConditions: ["No verified client evidence.", "Scope is unclear or unsupported.", "Customer result is not recorded."],
    metricsToTrack: ["Messages", "Consultations", "Orders", "Revenue", "Reviews", "Repeat customers"],
    lessonsLearned: "N/A - no completed client outcome has been recorded yet.",
    relatedMissionRecords: ["MH-001"],
    relatedEvidenceLedgerEntries: ["EV-001"],
    relatedObsidianNote: "09 Playbooks/PB-001 Landing the First Fiverr Client.md",
    status: "Draft",
    evidenceRule: draftEvidenceRule,
  },
  {
    playbookId: "PB-002",
    title: "Publishing the First Digital Product",
    type: "Launch Playbook",
    division: "Revenue Corps",
    owner: "Revenue Architect / Launch Corps",
    trigger: "A digital product opportunity clears evidence and approval gates.",
    whenToUse: "Use only after demand evidence, original product scope, compliance review, and Mission Commander approval exist.",
    inputsRequired: ["Approved opportunity", "Original product files", "Launch checklist", "Pricing evidence", "Compliance review"],
    procedure: ["Confirm approval.", "Verify product originality.", "Prepare listing manually.", "Record launch evidence.", "Measure market response."],
    toolsRequired: ["Mission Pipeline", "Evidence Ledger", "Launch Center", "Obsidian note"],
    successCriteria: ["Product published with evidence.", "Market metrics tracked without fabrication."],
    failureConditions: ["No approval.", "No originality review.", "No market evidence captured."],
    metricsToTrack: ["Visitors", "Clicks", "Orders", "Sales", "Revenue", "Reviews"],
    lessonsLearned: "N/A - no first digital product publication evidence has been recorded yet.",
    relatedMissionRecords: ["N/A"],
    relatedEvidenceLedgerEntries: ["Awaiting Published Gumroad Product"],
    relatedObsidianNote: "09 Playbooks/PB-002 Publishing the First Digital Product.md",
    status: "Draft",
    evidenceRule: draftEvidenceRule,
  },
  {
    playbookId: "PB-003",
    title: "Running a Revenue Scout Mission",
    type: "Revenue Playbook",
    division: "Revenue Corps",
    owner: "Revenue Architect",
    trigger: "A research lane needs public evidence before entering the Mission Pipeline.",
    whenToUse: "Use for Etsy, Fiverr, Gumroad, POD, bounty, publishing, asset, or other approved research lanes.",
    inputsRequired: ["Research mission ID", "Target platform", "Evidence sources", "Scoring fields", "Approval boundary"],
    procedure: ["Define research target.", "Collect public/manual evidence.", "Mark unknowns N/A.", "Score Proceed/Hold/Reject.", "Submit to Revenue Architect."],
    toolsRequired: ["Research Scheduler", "Scout Reports", "Evidence Ledger", "Mission Pipeline"],
    successCriteria: ["Evidence source recorded.", "Unknowns preserved honestly.", "Recommendation is evidence-backed."],
    failureConditions: ["Fake demand.", "Uncited assumptions.", "Launch recommendation without approval."],
    metricsToTrack: ["Demand", "Competition", "Price", "Cost", "Margin", "Difficulty", "Time to revenue", "Confidence"],
    lessonsLearned: "N/A - scout process has not been validated through repeated completed reports yet.",
    relatedMissionRecords: ["R-005"],
    relatedEvidenceLedgerEntries: ["N/A"],
    relatedObsidianNote: "09 Playbooks/PB-003 Running a Revenue Scout Mission.md",
    status: "Draft",
    evidenceRule: draftEvidenceRule,
  },
  {
    playbookId: "PB-004",
    title: "Completing an ORION Backtest",
    type: "Trading Playbook",
    division: "Trading Corps",
    owner: "Chief Engineer / Trading Corps",
    trigger: "ORION has approved local SPY/QQQ intraday CSV data and a research-only test plan.",
    whenToUse: "Use when running research-only ORION backtests with no broker, paper mode, or live risk.",
    inputsRequired: ["SPY/QQQ CSV data", "ORION config", "Backtest spec", "No-lookahead checklist"],
    procedure: ["Verify data columns.", "Run backtest locally.", "Review outputs.", "Record metrics.", "File results as evidence."],
    toolsRequired: ["research/orion", "ORION_BACKTEST_SPEC_001.md", "Evidence Ledger", "Backtest note"],
    successCriteria: ["Backtest completes.", "Outputs are reviewed.", "No profitability claim is made without evidence."],
    failureConditions: ["Missing data.", "Lookahead risk.", "Unrecorded assumptions.", "Live or paper trading attempted."],
    metricsToTrack: ["Win rate", "Expectancy", "Profit factor", "Max drawdown", "Long/short breakdown", "Time-of-day breakdown"],
    lessonsLearned: "N/A - no completed ORION backtest evidence has been recorded yet.",
    relatedMissionRecords: ["MH-002"],
    relatedEvidenceLedgerEntries: ["Awaiting Completed ORION Backtest"],
    relatedObsidianNote: "09 Playbooks/PB-004 Completing an ORION Backtest.md",
    status: "Draft",
    evidenceRule: draftEvidenceRule,
  },
  {
    playbookId: "PB-005",
    title: "Filing a Mission Record",
    type: "Operations Playbook",
    division: "Operations",
    owner: "Hermes fallback chain / Mission Commander",
    trigger: "A mission changes state, produces evidence, hits a blocker, or closes.",
    whenToUse: "Use whenever THE GRID needs durable memory of what happened.",
    inputsRequired: ["Mission ID", "Date", "Owner", "Evidence", "Decision impact", "Obsidian destination"],
    procedure: ["Identify mission state change.", "Record evidence source.", "Write concise summary.", "Link related records.", "Archive in Obsidian."],
    toolsRequired: ["Mission Board", "Evidence Ledger", "Obsidian", "AI_HANDOFF"],
    successCriteria: ["Mission Record explains what happened and links evidence."],
    failureConditions: ["No Mission ID.", "No evidence source.", "Private data committed unsafely."],
    metricsToTrack: ["Mission Records filed", "Outstanding approvals", "Blockers", "Archived missions"],
    lessonsLearned: "N/A - Mission Record process is defined but not yet validated as a repeated habit.",
    relatedMissionRecords: ["MH-005"],
    relatedEvidenceLedgerEntries: ["N/A"],
    relatedObsidianNote: "09 Playbooks/PB-005 Filing a Mission Record.md",
    status: "Draft",
    evidenceRule: draftEvidenceRule,
  },
  {
    playbookId: "PB-006",
    title: "Running the Daily Command Brief",
    type: "Operations Playbook",
    division: "Operations",
    owner: "Mission Commander / Operations Officer fallback",
    trigger: "Start of operating day.",
    whenToUse: "Use as the first morning workflow before opening other surfaces.",
    inputsRequired: ["Daily Command Brief", "Operations Hub", "Evidence Ledger", "Mission Queue"],
    procedure: ["Read one recommendation.", "Review blockers.", "Check launch evidence.", "Choose top action.", "Record any mission state change."],
    toolsRequired: ["Daily Command Brief", "Operations Hub", "Obsidian", "Mission Board"],
    successCriteria: ["One clear next action selected.", "No coordination sprawl."],
    failureConditions: ["Multiple conflicting priorities.", "No evidence link.", "New work added without Mission ID."],
    metricsToTrack: ["Briefs completed", "Blockers cleared", "Approvals resolved", "Evidence entries added"],
    lessonsLearned: "N/A - daily brief workflow is active but not yet validated as repeated process evidence.",
    relatedMissionRecords: ["MH-005"],
    relatedEvidenceLedgerEntries: ["N/A"],
    relatedObsidianNote: "09 Playbooks/PB-006 Running the Daily Command Brief.md",
    status: "Draft",
    evidenceRule: draftEvidenceRule,
  },
  {
    playbookId: "PB-007",
    title: "Archiving a Failed Experiment",
    type: "Knowledge Playbook",
    division: "The Academy",
    owner: "Archivist / Hermes fallback chain",
    trigger: "An experiment fails, stalls, or is intentionally killed.",
    whenToUse: "Use after a real experiment produces an outcome worth preserving as tuition paid.",
    inputsRequired: ["Experiment ID", "Hypothesis", "Evidence", "Failure reason", "Revisit conditions"],
    procedure: ["Record what was tried.", "Record why it failed.", "Extract lesson.", "Define revisit condition.", "Archive in Hall of Failures."],
    toolsRequired: ["The Academy", "Evidence Ledger", "Mission Record", "Obsidian"],
    successCriteria: ["Failure produces a reusable lesson without shame or hype."],
    failureConditions: ["Invented failure.", "No evidence.", "No revisit criteria."],
    metricsToTrack: ["Failed experiments archived", "Lessons extracted", "Ideas revisited"],
    lessonsLearned: "N/A - no failed experiment has been formally archived yet.",
    relatedMissionRecords: ["N/A"],
    relatedEvidenceLedgerEntries: ["N/A"],
    relatedObsidianNote: "09 Playbooks/PB-007 Archiving a Failed Experiment.md",
    status: "Draft",
    evidenceRule: draftEvidenceRule,
  },
  {
    playbookId: "PB-008",
    title: "Turning Evidence Into a New Experiment",
    type: "Operations Playbook",
    division: "Operations / Revenue Corps",
    owner: "Revenue Architect / Mission Commander",
    trigger: "Evidence suggests a new experiment may be worth testing.",
    whenToUse: "Use only after evidence exists and the next experiment can be scoped safely.",
    inputsRequired: ["Evidence entry", "Mission Record", "Hypothesis", "Risk boundary", "Approval request"],
    procedure: ["Summarize evidence.", "Write hypothesis.", "Define smallest test.", "Request approval.", "Create Mission Pipeline item."],
    toolsRequired: ["Evidence Ledger", "Approval Queue", "Mission Pipeline", "Operations Hub"],
    successCriteria: ["Experiment has evidence, owner, scope, metrics, and approval boundary."],
    failureConditions: ["Experiment created from vibes.", "No metric defined.", "Irreversible action bypasses approval."],
    metricsToTrack: ["Approval decisions", "Experiment outcomes", "Time to evidence", "Revenue impact"],
    lessonsLearned: "N/A - no evidence-to-experiment conversion has been validated yet.",
    relatedMissionRecords: ["MH-001"],
    relatedEvidenceLedgerEntries: ["EV-001"],
    relatedObsidianNote: "09 Playbooks/PB-008 Turning Evidence Into a New Experiment.md",
    status: "Draft",
    evidenceRule: draftEvidenceRule,
  },
];

export const playbookTypes: PlaybookType[] = [
  "Revenue Playbook",
  "Trading Playbook",
  "Engineering Playbook",
  "Operations Playbook",
  "Knowledge Playbook",
  "Customer Playbook",
  "Launch Playbook",
];

export const playbookMetrics = {
  total: playbooks.length,
  draft: playbooks.filter((playbook) => playbook.status === "Draft").length,
  tested: playbooks.filter((playbook) => playbook.status === "Tested").length,
  validated: playbooks.filter((playbook) => playbook.status === "Validated").length,
  retired: playbooks.filter((playbook) => playbook.status === "Retired").length,
};
