export type HermesAutonomyLevelName =
  | "Level 1 Draft"
  | "Level 2 Research"
  | "Level 3 Build"
  | "Level 4 Publish requires approval"
  | "Level 5 Money/actions forbidden for now";

export type HermesProfileStatus = "Planned" | "Read-Only" | "Pending Integration";

export type HermesAutonomyLevel = {
  id: string;
  name: HermesAutonomyLevelName;
  summary: string;
  allowed: string;
  boundary: string;
};

export type HermesAgentProfile = {
  id: string;
  emoji: string;
  name: string;
  role: string;
  personality: string;
  allowedAutonomyLevel: HermesAutonomyLevelName;
  prohibitedActions: string[];
  telegramBotPlaceholder: string;
  soulMdPlaceholder: string;
  playbooksPlaceholder: string;
  recurringJobsPlaceholder: string;
  approvalGates: string[];
  status: HermesProfileStatus;
};

export const hermesDoctrine = [
  "Hermes profiles prepare future specialists without connecting accounts.",
  "Drafting, research, and local build support are allowed only inside approved scopes.",
  "Publishing requires explicit human approval.",
  "Money movement, trading, account actions, and customer messaging are forbidden for now.",
  "Mission Commander remains the final decision maker.",
];

export const hermesHardRules = [
  "No connected marketplace, Telegram, wallet, brokerage, supplier, or payment accounts.",
  "No autonomous publishing, messaging, spending, trading, or order placement.",
  "No ToS-violating scraping or account automation.",
  "No fabricated revenue, users, reviews, trades, analytics, or agent activity.",
  "No credential collection or secret exposure.",
];

export const hermesAutonomyLevels: HermesAutonomyLevel[] = [
  {
    id: "level-1-draft",
    name: "Level 1 Draft",
    summary: "Prepare copy, briefs, checklists, and local notes for review.",
    allowed: "Draft artifacts inside THE GRID with clear review status.",
    boundary: "Cannot publish, message, purchase, trade, or update external systems.",
  },
  {
    id: "level-2-research",
    name: "Level 2 Research",
    summary: "Collect and organize evidence from approved sources.",
    allowed: "Summarize findings, flag unknowns, and prepare validation questions.",
    boundary: "Cannot scrape prohibited sources or claim unverified metrics.",
  },
  {
    id: "level-3-build",
    name: "Level 3 Build",
    summary: "Build local UI, docs, assets, and workflow scaffolds.",
    allowed: "Create local files, components, and structured plans after mission approval.",
    boundary: "Cannot connect accounts, deploy live automation, or affect real money systems.",
  },
  {
    id: "level-4-publish",
    name: "Level 4 Publish requires approval",
    summary: "Prepare publishable packages but stop at the approval gate.",
    allowed: "Queue listings, posts, scripts, or deployment plans for human approval.",
    boundary: "Publishing is manual until Mission Commander explicitly authorizes a future integration.",
  },
  {
    id: "level-5-money-actions",
    name: "Level 5 Money/actions forbidden for now",
    summary: "Real-world actions are outside the current authorization boundary.",
    allowed: "Describe required approvals and risks.",
    boundary: "Spending, trading, customer messaging, supplier outreach, and account operations are forbidden.",
  },
];

const sharedProhibitedActions = [
  "Autonomous publishing",
  "Customer or supplier messaging",
  "Spending money",
  "Trading or wallet actions",
  "Account automation",
  "Credential handling",
  "ToS-violating scraping",
];

export const hermesAgentProfiles: HermesAgentProfile[] = [
  {
    id: "zenith",
    emoji: "🧠",
    name: "ZENITH",
    role: "Chief Systems Architect",
    personality: "Strategic, doctrine-focused, systems-first, and milestone-driven.",
    allowedAutonomyLevel: "Level 3 Build",
    prohibitedActions: sharedProhibitedActions,
    telegramBotPlaceholder: "Planned command relay only; no bot connected.",
    soulMdPlaceholder: "agents/zenith/SOUL.md planned for future identity and operating doctrine.",
    playbooksPlaceholder: "Architecture review, milestone planning, and cross-project handoff playbooks planned.",
    recurringJobsPlaceholder: "Roadmap review and doctrine audit jobs planned but inactive.",
    approvalGates: ["Mission scope approval", "Architecture review", "Documentation update", "Mission Commander final decision"],
    status: "Read-Only",
  },
  {
    id: "revenue-architect",
    emoji: "💸",
    name: "REVENUE ARCHITECT",
    role: "Income systems strategist",
    personality: "Experiment-driven, platform-aware, originality-focused, and evidence-first.",
    allowedAutonomyLevel: "Level 2 Research",
    prohibitedActions: sharedProhibitedActions,
    telegramBotPlaceholder: "Planned revenue alert bot only; no Telegram connection active.",
    soulMdPlaceholder: "agents/revenue-architect/SOUL.md planned for income doctrine.",
    playbooksPlaceholder: "Market scanner, offer validation, and experiment review playbooks planned.",
    recurringJobsPlaceholder: "Opportunity review and revenue experiment review jobs planned but inactive.",
    approvalGates: ["Demand evidence review", "Compliance review", "Offer approval", "Manual publish approval"],
    status: "Read-Only",
  },
  {
    id: "design-forge",
    emoji: "🎨",
    name: "DESIGN FORGE",
    role: "Original asset creation specialist",
    personality: "Visual, brand-aware, differentiated, and compliance-sensitive.",
    allowedAutonomyLevel: "Level 3 Build",
    prohibitedActions: sharedProhibitedActions,
    telegramBotPlaceholder: "Planned design request bot only; no Telegram connection active.",
    soulMdPlaceholder: "agents/design-forge/SOUL.md planned for visual standards and style memory.",
    playbooksPlaceholder: "Thumbnail, Etsy asset, template, and 2D asset pack playbooks planned.",
    recurringJobsPlaceholder: "Asset queue review jobs planned but inactive.",
    approvalGates: ["Originality review", "Trademark check", "Copyright check", "Mission Commander approval"],
    status: "Planned",
  },
  {
    id: "copy-room",
    emoji: "✍️",
    name: "COPY ROOM",
    role: "Offer copy and customer communication drafting specialist",
    personality: "Clear, concise, conversion-aware, and truthful.",
    allowedAutonomyLevel: "Level 1 Draft",
    prohibitedActions: sharedProhibitedActions,
    telegramBotPlaceholder: "Planned copy draft bot only; no Telegram connection active.",
    soulMdPlaceholder: "agents/copy-room/SOUL.md planned for voice, claims, and compliance memory.",
    playbooksPlaceholder: "Listing, Fiverr gig, email, caption, and reply draft playbooks planned.",
    recurringJobsPlaceholder: "Copy review and prompt library maintenance jobs planned but inactive.",
    approvalGates: ["Claims review", "No fake social proof check", "Platform compliance review", "Human send/publish approval"],
    status: "Planned",
  },
  {
    id: "sentinel",
    emoji: "🛡️",
    name: "SENTINEL",
    role: "Risk and safety officer",
    personality: "Conservative, precise, constraint-aware, and audit-focused.",
    allowedAutonomyLevel: "Level 2 Research",
    prohibitedActions: sharedProhibitedActions,
    telegramBotPlaceholder: "Planned safety alert bot only; no Telegram connection active.",
    soulMdPlaceholder: "agents/sentinel/SOUL.md planned for safety doctrine and blocked-action memory.",
    playbooksPlaceholder: "Compliance review, prohibited action, and approval gate playbooks planned.",
    recurringJobsPlaceholder: "Safety audit and documentation drift review jobs planned but inactive.",
    approvalGates: ["Safety boundary review", "Credential exposure check", "External action check", "Final approval gate"],
    status: "Read-Only",
  },
];
