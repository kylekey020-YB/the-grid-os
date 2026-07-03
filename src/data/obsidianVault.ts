export type ObsidianVaultZoneStatus = "Canonical" | "Planned" | "Manual Export";

export type ObsidianVaultZone = {
  id: string;
  path: string;
  purpose: string;
  status: ObsidianVaultZoneStatus;
};

export type MissionRecordField = {
  field: string;
  purpose: string;
  required: boolean;
};

export const obsidianVaultSummary = {
  version: "v3.0.0",
  root: "obsidian-vault/",
  mission: "Design the canonical durable-memory structure for THE GRID research, mission, officer, program, and playbook records.",
  doctrine: "Hermes may remember. AI platforms may contribute. Obsidian stores durable knowledge. Knowledge belongs to THE GRID.",
  safety: "No Obsidian API, sync automation, secrets, raw logs, API keys, account exports, wallet material, or private customer data are included.",
};

export const obsidianVaultZones: ObsidianVaultZone[] = [
  { id: "command", path: "00 - Command/", purpose: "Mission Commander, Operation First Revenue, executive briefs, and command decisions.", status: "Canonical" },
  { id: "doctrine", path: "01 - Doctrine/", purpose: "Constitution, Founding Council Brief, operating doctrine, and amendment history.", status: "Canonical" },
  { id: "mission-records", path: "02 - Mission Records/", purpose: "What happened, when it happened, and what evidence supports it.", status: "Canonical" },
  { id: "decision-records", path: "03 - Decision Records/", purpose: "Why major choices were made and who approved them.", status: "Canonical" },
  { id: "approval-records", path: "04 - Approval Records/", purpose: "Approval requests, commander decisions, risk notes, and boundaries.", status: "Canonical" },
  { id: "revenue-corps", path: "05 - Revenue Corps/", purpose: "Revenue scout reports, opportunity matrices, launch records, and playbooks.", status: "Manual Export" },
  { id: "commerce", path: "06 - Commerce/", purpose: "Gate records, supplier research, and product validation notes.", status: "Manual Export" },
  { id: "trading", path: "07 - Trading/", purpose: "APEX, CLU, ORION, WRAITH, PAIRFORGE, VOLTA, and ATLAS records.", status: "Manual Export" },
  { id: "academy", path: "08 - Academy/", purpose: "Playbooks, lessons, wins, failures, evolution lab, and master classes.", status: "Canonical" },
  { id: "strategic-assets", path: "09 - Strategic Assets/", purpose: "DealFlow, engineering radar, AI research, and future venture research.", status: "Planned" },
  { id: "officers", path: "10 - Officers/", purpose: "Officer profiles, responsibilities, activation status, and evolution records.", status: "Canonical" },
  { id: "intelligence-corps", path: "11 - Intelligence Corps/", purpose: "Scout registry, Research Router records, routed reports, and cross-division discovery notes.", status: "Planned" },
];

export const missionRecordFields: MissionRecordField[] = [
  { field: "UUID", purpose: "Unique durable identifier independent of platform or file name.", required: true },
  { field: "Division", purpose: "Owning operating division or corps.", required: true },
  { field: "Officer", purpose: "Officer responsible for review or routing.", required: true },
  { field: "Scout", purpose: "Scout or contributor that created the research record.", required: true },
  { field: "Date", purpose: "Date the record was created or reviewed.", required: true },
  { field: "Evidence", purpose: "Sources, files, observations, and unknowns supporting the record.", required: true },
  { field: "Summary", purpose: "Plain-English synthesis of what was found.", required: true },
  { field: "Recommendations", purpose: "Suggested next actions, including reject / research more / prototype.", required: true },
  { field: "Linked experiments", purpose: "Experiment IDs connected to the record.", required: false },
  { field: "Linked playbooks", purpose: "Playbooks created or updated from the record.", required: false },
  { field: "Linked mission records", purpose: "Related Mission Records, Decision Records, or Approval Records.", required: false },
];

export const missionRecordTemplate = {
  uuid: "MR-UUID",
  division: "N/A",
  officer: "N/A",
  scout: "N/A",
  date: "YYYY-MM-DD",
  evidence: "N/A",
  summary: "N/A",
  recommendations: "N/A",
  linkedExperiments: "N/A",
  linkedPlaybooks: "N/A",
  linkedMissionRecords: "N/A",
};

export const obsidianVaultMetrics = {
  zones: obsidianVaultZones.length,
  canonicalZones: obsidianVaultZones.filter((zone) => zone.status === "Canonical").length,
  missionRecordFields: missionRecordFields.length,
  syncAutomations: 0,
};
