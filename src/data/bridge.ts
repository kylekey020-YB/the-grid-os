import { approvalQueue } from "@/data/approvalSystem";
import { academyOverview } from "@/data/academy";
import { companyHealth, divisionKpiReports } from "@/data/companyKpis";
import { chronicleEntries } from "@/data/chronicle";
import { eventChannels } from "@/data/eventRegistry";
import { missionEvents } from "@/data/missionEvents";
import { missionPipelineItems } from "@/data/missionPipeline";
import { officerNetwork } from "@/data/officerNetwork";

export type BridgePanelStatus = "Active" | "Awaiting Commander" | "Read-Only" | "Prepared";

export type BridgePanel = {
  id: string;
  title: string;
  status: BridgePanelStatus;
  signal: string;
  source: string;
};

export const bridgeOverview = {
  version: "v2.0.0",
  phase: "Phase II - Living Systems",
  mission: "Turn THE GRID into an event-driven operating headquarters.",
  currentMission: "Operation First Revenue",
  doctrine: "Officer -> Event -> Mission Bus -> Mission Control -> Executive Brief",
  safety: "No backend, no networking, no polling, no autonomous execution, no fake live activity.",
};

export const bridgePanels: BridgePanel[] = [
  {
    id: "bridge-current-mission",
    title: "Current Mission",
    status: "Active",
    signal: bridgeOverview.currentMission + " remains active with " + companyHealth.daysRemaining + " days remaining.",
    source: "Company Health typed data",
  },
  {
    id: "bridge-approvals",
    title: "Approvals Center",
    status: approvalQueue.some((approval) => approval.status === "Awaiting Commander") ? "Awaiting Commander" : "Read-Only",
    signal: approvalQueue.length + " approval object(s) tracked.",
    source: "src/data/approvalSystem.ts",
  },
  {
    id: "bridge-officer-network",
    title: "Officer Network",
    status: "Active",
    signal: officerNetwork.filter((officer) => officer.state === "Connected").length + " officers represented as connected typed nodes.",
    source: "src/data/officerNetwork.ts",
  },
  {
    id: "bridge-event-registry",
    title: "Event Registry",
    status: "Active",
    signal: eventChannels.length + " event channels defined.",
    source: "src/data/eventRegistry.ts",
  },
  {
    id: "bridge-division-health",
    title: "Division Health",
    status: "Read-Only",
    signal: divisionKpiReports.length + " division KPI reports available.",
    source: "src/data/companyKpis.ts",
  },
  {
    id: "bridge-academy",
    title: "Academy Memory",
    status: "Active",
    signal: academyOverview.status + " institutional learning division with Chronicle draft available.",
    source: "src/data/academy.ts and src/data/chronicle.ts",
  },
];

export const bridgeMetrics = {
  events: missionEvents.length,
  eventChannels: eventChannels.length,
  connectedOfficers: officerNetwork.filter((officer) => officer.state === "Connected").length,
  dormantOfficers: officerNetwork.filter((officer) => officer.state === "Dormant").length,
  approvalsPending: approvalQueue.filter((approval) => approval.status === "Awaiting Commander").length,
  pipelineItems: missionPipelineItems.length,
  divisionReports: divisionKpiReports.length,
  chronicleEntries: chronicleEntries.length,
};
