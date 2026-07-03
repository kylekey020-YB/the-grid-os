export type ResearchPlatform = "ChatGPT" | "Hermes" | "Claude" | "Claude Code" | "Codex" | "Future providers";
export type ResearchPlatformStatus = "Available" | "Offline" | "Reserved" | "Future";
export type ResearchMissionLifecycle = "Created" | "Assigned" | "Researching" | "Completed" | "Reviewed" | "Archived" | "Rejected";
export type ResearchMissionPriority = "P0" | "P1" | "P2" | "P3";

export type ResearchPlatformProfile = {
  id: string;
  platform: ResearchPlatform;
  status: ResearchPlatformStatus;
  bestFor: string[];
  currentBoundary: string;
};

export type RoutedResearchMission = {
  id: string;
  title: string;
  division: string;
  requestedBy: string;
  assignedPlatform: ResearchPlatform;
  lifecycle: ResearchMissionLifecycle;
  priority: ResearchMissionPriority;
  objective: string;
  expectedOutput: string;
  knowledgeDestination: string;
  approvalRequirement: string;
};

export const researchRouterSummary = {
  version: "v3.0.0",
  status: "Typed assignment router / no live provider integration",
  mission: "Accept research missions, assign them to the first available AI platform, and preserve outputs in THE GRID records and Obsidian.",
  doctrine: "AI platforms are contributors. THE GRID owns the knowledge.",
  safety: "Routing is represented as typed local data only. No API calls, agent dispatch, account access, or background jobs exist.",
};

export const researchPlatforms: ResearchPlatformProfile[] = [
  { id: "RP-001", platform: "ChatGPT", status: "Available", bestFor: ["Architecture", "Strategy", "Prompts", "Doctrine"], currentBoundary: "Advisory research and planning only." },
  { id: "RP-002", platform: "Hermes", status: "Offline", bestFor: ["Institutional memory", "Executive briefs", "Mission Records"], currentBoundary: "Unavailable when credits are exhausted; fallback chain remains active." },
  { id: "RP-003", platform: "Claude", status: "Available", bestFor: ["Deep analysis", "Research synthesis", "Long-form review"], currentBoundary: "No direct repository edits unless routed through approved workflow." },
  { id: "RP-004", platform: "Claude Code", status: "Reserved", bestFor: ["Lead engineering", "Complex implementation", "Code review"], currentBoundary: "Main branch work requires approval." },
  { id: "RP-005", platform: "Codex", status: "Available", bestFor: ["Engineering", "Documentation", "UI implementation", "Refactoring"], currentBoundary: "No merge into main until reviewed." },
  { id: "RP-006", platform: "Future providers", status: "Future", bestFor: ["Specialized research", "Model redundancy", "Provider resilience"], currentBoundary: "No provider is connected until approved." },
];

export const researchMissionLifecycle: ResearchMissionLifecycle[] = ["Created", "Assigned", "Researching", "Completed", "Reviewed", "Archived", "Rejected"];

export const routedResearchMissions: RoutedResearchMission[] = [
  {
    id: "RR-001",
    title: "ORION opening range breakout source review",
    division: "Quant Scouts",
    requestedBy: "GAUNTLET",
    assignedPlatform: "Codex",
    lifecycle: "Assigned",
    priority: "P0",
    objective: "Convert ORION research needs into implementation-ready backtest evidence tasks.",
    expectedOutput: "Research brief, data plan, and backtest candidate notes.",
    knowledgeDestination: "Obsidian / 07 - Trading / ORION",
    approvalRequirement: "Mission Commander approval required before paper mode or live-risk discussion.",
  },
  {
    id: "RR-002",
    title: "Fiverr service opportunity refresh",
    division: "Revenue Scouts",
    requestedBy: "Revenue Architect",
    assignedPlatform: "ChatGPT",
    lifecycle: "Created",
    priority: "P1",
    objective: "Gather public/manual evidence for complementary Fiverr service opportunities.",
    expectedOutput: "Scout report with opportunity scorecard and unknowns.",
    knowledgeDestination: "Obsidian / 05 - Revenue Corps / Fiverr",
    approvalRequirement: "Mission Commander approval required before gig edits, publishing, messaging, or spending.",
  },
  {
    id: "RR-003",
    title: "AI agent framework radar",
    division: "AI Research Scouts",
    requestedBy: "ZENITH",
    assignedPlatform: "Future providers",
    lifecycle: "Archived",
    priority: "P2",
    objective: "Track provider and framework options for future routing resilience.",
    expectedOutput: "Technology radar and adoption gate.",
    knowledgeDestination: "Obsidian / 09 - Strategic Assets / AI Research",
    approvalRequirement: "Mission Commander approval required before API adoption, account connection, or migration.",
  },
];

export const researchRouterMetrics = {
  platforms: researchPlatforms.length,
  availablePlatforms: researchPlatforms.filter((platform) => platform.status === "Available").length,
  missions: routedResearchMissions.length,
  assigned: routedResearchMissions.filter((mission) => mission.lifecycle === "Assigned").length,
  completed: routedResearchMissions.filter((mission) => mission.lifecycle === "Completed").length,
  externalRoutesConnected: 0,
};
