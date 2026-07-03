import { scoutRegistry, scoutRegistryMetrics, type ScoutDivision } from "@/data/scoutRegistry";

export type IntelligenceDivisionStatus = "Research Only" | "Planned" | "Manual Review";

export type IntelligenceDivision = {
  id: string;
  name: ScoutDivision;
  status: IntelligenceDivisionStatus;
  mission: string;
  lead: string;
  currentFocus: string;
  knowledgeDestination: string;
  boundaries: string[];
};

export const intelligenceCorpsSummary = {
  version: "v3.0.0",
  status: "Discovery engine foundation / no external execution",
  mission: "Coordinate THE GRID's discovery work across revenue, quant, engineering, DealFlow, and AI research scouts.",
  doctrine: "Knowledge belongs to THE GRID, not to any individual AI.",
  safety: "No publishing, trading, broker connection, customer messaging, spending, account automation, irreversible actions, or autonomous execution is authorized.",
};

export const intelligenceDivisions: IntelligenceDivision[] = [
  {
    id: "revenue-scouts",
    name: "Revenue Scouts",
    status: "Research Only",
    mission: "Discover lawful revenue opportunities and prepare evidence for Revenue Architect review.",
    lead: "Revenue Architect",
    currentFocus: "Marketplace, digital product, service, and opportunity reports.",
    knowledgeDestination: "Obsidian / 05 - Revenue Corps",
    boundaries: ["No publishing", "No customer messaging", "No spending", "No platform-rule scraping"],
  },
  {
    id: "quant-scouts",
    name: "Quant Scouts",
    status: "Research Only",
    mission: "Find strategy candidates and research evidence before backtest or paper-mode review.",
    lead: "GAUNTLET",
    currentFocus: "ORION, WRAITH, PAIRFORGE, VOLTA, and ATLAS research queues.",
    knowledgeDestination: "Obsidian / 07 - Trading",
    boundaries: ["No live trading", "No broker connection", "No options execution", "No money at risk"],
  },
  {
    id: "engineering-scouts",
    name: "Engineering Scouts",
    status: "Research Only",
    mission: "Identify frameworks and implementation options for future THE GRID capabilities.",
    lead: "Codex / Claude Code",
    currentFocus: "Frameworks, workflow engines, memory architecture, and implementation risk.",
    knowledgeDestination: "Obsidian / 09 - Strategic Assets / Engineering Radar",
    boundaries: ["No unreviewed dependency adoption", "No secrets", "No production migration without approval"],
  },
  {
    id: "dealflow-scouts",
    name: "DealFlow Scouts",
    status: "Planned",
    mission: "Research DealFlow market gaps, competitors, and MVP candidates.",
    lead: "ZENITH / Revenue Architect",
    currentFocus: "Real estate SaaS research remains planned until a mission is approved.",
    knowledgeDestination: "Obsidian / 09 - Strategic Assets / DealFlow",
    boundaries: ["No outreach", "No paid tools", "No fabricated market size"],
  },
  {
    id: "ai-research-scouts",
    name: "AI Research Scouts",
    status: "Research Only",
    mission: "Track AI platform, agent framework, and institutional memory architecture options.",
    lead: "ZENITH / Codex",
    currentFocus: "Provider resilience, model interchangeability, and memory ownership doctrine.",
    knowledgeDestination: "Obsidian / 09 - Strategic Assets / AI Research",
    boundaries: ["No API keys", "No account automation", "No external execution"],
  },
];

export const intelligenceCorpsMetrics = {
  divisions: intelligenceDivisions.length,
  registeredScouts: scoutRegistryMetrics.scouts,
  researchOnlyScouts: scoutRegistryMetrics.researchOnly,
  plannedScouts: scoutRegistryMetrics.planned,
  externalActionsAllowed: 0,
};

export const scoutsByDivision = intelligenceDivisions.map((division) => ({
  division: division.name,
  scouts: scoutRegistry.filter((scout) => scout.division === division.name),
}));
