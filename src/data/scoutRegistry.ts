export type ScoutDivision =
  | "Revenue Scouts"
  | "Quant Scouts"
  | "Engineering Scouts"
  | "DealFlow Scouts"
  | "AI Research Scouts";

export type ScoutStatus = "Active" | "Research Only" | "Planned" | "Manual Review" | "Dormant";

export type ScoutRegistryEntry = {
  id: string;
  name: string;
  division: ScoutDivision;
  status: ScoutStatus;
  mission: string;
  capabilities: string[];
  outputs: string[];
  cadence: string;
  knowledgeDestination: string;
  approvalRequirements: string[];
};

export const scoutRegistryDoctrine = [
  "Scouts discover knowledge and opportunities.",
  "Research Router assigns missions to available AI platforms.",
  "Knowledge belongs to THE GRID, not to any individual AI.",
  "Mission Commander approves experiments and irreversible actions.",
  "No scout publishes, trades, messages, spends, or executes.",
];

export const scoutRegistry: ScoutRegistryEntry[] = [
  {
    id: "SC-REV-001",
    name: "Marketplace Scout",
    division: "Revenue Scouts",
    status: "Research Only",
    mission: "Find lawful marketplace opportunities across Fiverr, Etsy, Gumroad, and related digital product channels.",
    capabilities: ["Public demand review", "Buyer language capture", "Competition notes", "Price-band research"],
    outputs: ["Scout report", "Opportunity scorecard", "Evidence notes", "Unknowns list"],
    cadence: "Daily when scheduled",
    knowledgeDestination: "Obsidian / 05 - Revenue Corps / Scout Reports",
    approvalRequirements: ["Mission Commander approval before experiments", "No publishing or account action", "No platform-rule scraping"],
  },
  {
    id: "SC-QNT-001",
    name: "Quant Edge Scout",
    division: "Quant Scouts",
    status: "Research Only",
    mission: "Discover and summarize trading research candidates for ORION, WRAITH, PAIRFORGE, VOLTA, and ATLAS.",
    capabilities: ["Strategy source triage", "Data requirement mapping", "Backtest feasibility scoring", "Risk note capture"],
    outputs: ["Quant scout report", "Candidate ranking", "Backtest data plan", "Reject / research / prototype recommendation"],
    cadence: "Weekly or mission-triggered",
    knowledgeDestination: "Obsidian / 07 - Trading / Quant Research",
    approvalRequirements: ["No live trading", "No broker or wallet connection", "No paper mode without approval"],
  },
  {
    id: "SC-ENG-001",
    name: "Engineering Scout",
    division: "Engineering Scouts",
    status: "Research Only",
    mission: "Find frameworks, libraries, patterns, and implementation options for THE GRID engineering roadmap.",
    capabilities: ["Repository review", "Architecture pattern comparison", "Dependency risk notes", "Implementation estimate"],
    outputs: ["Technology radar", "Engineering recommendation", "Risk register", "Prototype brief"],
    cadence: "Weekly or before engineering milestones",
    knowledgeDestination: "Obsidian / 09 - Strategic Assets / Engineering Radar",
    approvalRequirements: ["No dependency adoption without review", "No secrets", "No external service connection"],
  },
  {
    id: "SC-DEAL-001",
    name: "DealFlow Scout",
    division: "DealFlow Scouts",
    status: "Planned",
    mission: "Research real estate software opportunities, market gaps, competitor patterns, and MVP candidates for DealFlow.",
    capabilities: ["Competitor mapping", "Feature gap research", "Pricing observation", "MVP scope drafting"],
    outputs: ["DealFlow research note", "Competitor matrix", "MVP recommendation", "Open questions"],
    cadence: "Manual mission-triggered",
    knowledgeDestination: "Obsidian / 09 - Strategic Assets / DealFlow",
    approvalRequirements: ["No outreach without approval", "No paid tools without approval", "No fabricated market size"],
  },
  {
    id: "SC-AIR-001",
    name: "AI Research Scout",
    division: "AI Research Scouts",
    status: "Research Only",
    mission: "Track agent frameworks, model capabilities, memory systems, routing patterns, and AI operating company infrastructure.",
    capabilities: ["Framework comparison", "Capability notes", "Memory architecture review", "Provider risk mapping"],
    outputs: ["AI research brief", "Provider comparison", "Architecture recommendation", "Adoption gate"],
    cadence: "Weekly or when a platform changes materially",
    knowledgeDestination: "Obsidian / 09 - Strategic Assets / AI Research",
    approvalRequirements: ["No API keys committed", "No account automation", "No production migration without approval"],
  },
];

export const scoutRegistryMetrics = {
  divisions: Array.from(new Set(scoutRegistry.map((scout) => scout.division))).length,
  scouts: scoutRegistry.length,
  active: scoutRegistry.filter((scout) => scout.status === "Active").length,
  researchOnly: scoutRegistry.filter((scout) => scout.status === "Research Only").length,
  planned: scoutRegistry.filter((scout) => scout.status === "Planned").length,
};
