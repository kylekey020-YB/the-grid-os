export type ObsidianBridgeStatus = "Prepared" | "Manual Export" | "Planned" | "Blocked";

export type ObsidianVaultFolder = {
  id: string;
  path: string;
  purpose: string;
  status: ObsidianBridgeStatus;
  backlinkTargets: string[];
};

export type ObsidianExportRule = {
  id: string;
  source: string;
  destination: string;
  recordType: string;
  backupPolicy: string;
};

export const obsidianBridgeSummary = {
  version: "v2.5.0",
  status: "Manual Export" as ObsidianBridgeStatus,
  mission: "Connect THE GRID's institutional memory to an Obsidian-ready second-brain structure without APIs, sync automation, secrets, or raw unsanitized logs.",
  doctrine: "Hermes remembers and files records. Obsidian stores durable knowledge. THE GRID visualizes operational state. Codex builds the bridge. ZENITH governs the architecture.",
  safety: "No Obsidian API, no sync automation, no secrets, no .env files, no API keys, and no raw logs unless sanitized.",
  rootFolder: "obsidian-vault",
  script: "scripts/exportObsidianVault.js",
};

export const obsidianVaultFolders: ObsidianVaultFolder[] = [
  { id: "command", path: "00 - Command", purpose: "Mission Commander, Operation First Revenue, and daily executive brief records.", status: "Prepared", backlinkTargets: ["[[Operation First Revenue]]", "[[Mission Commander]]"] },
  { id: "doctrine", path: "01 - Doctrine", purpose: "Constitution, Founding Council Brief, and operating doctrine.", status: "Prepared", backlinkTargets: ["[[THE_GRID_CONSTITUTION]]", "[[Founding Council Brief]]"] },
  { id: "mission-records", path: "02 - Mission Records", purpose: "What happened records for missions and milestones.", status: "Prepared", backlinkTargets: ["[[Mission Records]]"] },
  { id: "decision-records", path: "03 - Decision Records", purpose: "Why choices were made and who approved them.", status: "Prepared", backlinkTargets: ["[[Decision Records]]"] },
  { id: "approval-records", path: "04 - Approval Records", purpose: "Approval queue history for irreversible or directional actions.", status: "Prepared", backlinkTargets: ["[[Approval Records]]"] },
  { id: "revenue-corps", path: "05 - Revenue Corps", purpose: "Scout Reports, opportunity matrices, Launch Center, Fiverr, Gumroad, and Etsy knowledge.", status: "Prepared", backlinkTargets: ["[[Revenue Architect]]", "[[Scout Reports]]"] },
  { id: "commerce", path: "06 - Commerce", purpose: "Gate records and supplier research.", status: "Prepared", backlinkTargets: ["[[Commerce]]"] },
  { id: "trading", path: "07 - Trading", purpose: "APEX and CLU program status notes.", status: "Prepared", backlinkTargets: ["[[APEX]]", "[[CLU]]"] },
  { id: "academy", path: "08 - Academy", purpose: "Playbooks, lessons learned, wins, failures, and evolution records.", status: "Prepared", backlinkTargets: ["[[The Academy]]"] },
  { id: "strategic-assets", path: "09 - Strategic Assets", purpose: "DealFlow and future strategic asset notes.", status: "Prepared", backlinkTargets: ["[[DealFlow]]"] },
  { id: "officers", path: "10 - Officers", purpose: "Officer profiles for ZENITH, Hermes, Revenue Architect, Sentinel, Archivist, and Quartermaster.", status: "Prepared", backlinkTargets: ["[[ZENITH]]", "[[Hermes]]", "[[Revenue Architect]]"] },
];

export const obsidianExportRules: ObsidianExportRule[] = [
  { id: "constitution", source: "THE_GRID_CONSTITUTION.md", destination: "01 - Doctrine/THE_GRID_CONSTITUTION.md", recordType: "Doctrine", backupPolicy: "Back up existing destination before overwrite." },
  { id: "founding-brief", source: "FOUNDING_COUNCIL_BRIEF.md", destination: "01 - Doctrine/Founding Council Brief.md", recordType: "Doctrine", backupPolicy: "Back up existing destination before overwrite." },
  { id: "project-log", source: "PROJECT_LOG.md", destination: "02 - Mission Records/PROJECT_LOG.md", recordType: "Mission Records", backupPolicy: "Back up existing destination before overwrite." },
  { id: "decision-records", source: "DECISION_RECORDS.md", destination: "03 - Decision Records/DECISION_RECORDS.md", recordType: "Decision Records", backupPolicy: "Back up existing destination before overwrite." },
  { id: "approval-system", source: "APPROVAL_SYSTEM.md", destination: "04 - Approval Records/APPROVAL_SYSTEM.md", recordType: "Approval Records", backupPolicy: "Back up existing destination before overwrite." },
  { id: "scout-reports", source: "SCOUT_REPORTS_STATUS.md", destination: "05 - Revenue Corps/Scout Reports/SCOUT_REPORTS_STATUS.md", recordType: "Scout Reports", backupPolicy: "Back up existing destination before overwrite." },
  { id: "launch-center", source: "LAUNCH_CENTER_STATUS.md", destination: "05 - Revenue Corps/Launch Center/LAUNCH_CENTER_STATUS.md", recordType: "Launch Logs", backupPolicy: "Back up existing destination before overwrite." },
  { id: "commerce", source: "COMMERCE_MISSION_STATUS.md", destination: "06 - Commerce/Gate Records/COMMERCE_MISSION_STATUS.md", recordType: "Commerce Gate", backupPolicy: "Back up existing destination before overwrite." },
  { id: "dealflow", source: "FOUNDING_COUNCIL_BRIEF.md", destination: "09 - Strategic Assets/DealFlow/DealFlow Notes.md", recordType: "DealFlow Notes", backupPolicy: "Back up existing destination before overwrite." },
];

export const obsidianBridgeRules = [
  "Obsidian is the long-term second brain.",
  "Hermes remains institutional memory.",
  "THE GRID visualizes operational state.",
  "Obsidian stores durable knowledge.",
  "No secrets, .env files, API keys, or raw unsanitized logs are exported.",
  "The export script never deletes files and backs up before overwrite.",
];
