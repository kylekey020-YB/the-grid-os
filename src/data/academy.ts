export type AcademyWingId =
  | "founding-hall"
  | "playbooks"
  | "master-classes"
  | "hall-of-wins"
  | "hall-of-failures"
  | "evolution-lab"
  | "hall-of-command";

export type AcademyStatus = "Active" | "Planned" | "Awaiting Evidence" | "Read-Only";

export type AcademyAccent = "cyan" | "blue" | "purple" | "magenta" | "red" | "gold" | "emerald";

export type AcademyWing = {
  id: AcademyWingId;
  emoji: string;
  name: string;
  mission: string;
  status: AcademyStatus;
  steward: string;
  accent: AcademyAccent;
  entries: string[];
  safetyNote: string;
};

export type AcademyTimelineEntry = {
  id: string;
  date: string;
  title: string;
  summary: string;
  evidence: string;
};

export type EvolutionRecord = {
  id: string;
  subject: string;
  currentVersion: string;
  lesson: string;
  nextReview: string;
};

export const academyDoctrine = [
  "Every lesson learned becomes permanent institutional knowledge.",
  "Wins require evidence.",
  "Failures are tuition already paid.",
  "Playbooks are earned by repeated workflows.",
  "Master Classes preserve deep operating expertise.",
  "Evolution records explain how officers, Programs, and systems improve over time.",
];

export const foundingDay: AcademyTimelineEntry = {
  id: "FD-001",
  date: "July 2, 2026",
  title: "Founding Day of THE GRID",
  summary: "Mission Commander Maximus Titus Antony formally established THE GRID as an AI-first operating company with Mission Control as headquarters and doctrine as the operating constraint.",
  evidence: "Founding Day Declaration issued by ZENITH and accepted into the v1.7 Academy milestone.",
};

export const academyWings: AcademyWing[] = [
  {
    id: "founding-hall",
    emoji: "🏛",
    name: "Founding Hall",
    mission: "Preserve the permanent history wing of THE GRID.",
    status: "Active",
    steward: "ARCHIVIST / ZENITH",
    accent: "gold",
    entries: ["Founding Day", "Constitution", "Founding Council", "Mission Commander", "Operation First Revenue", "Company Doctrine"],
    safetyNote: "Founding Hall records should not be casually rewritten. Amend only through explicit mission directive.",
  },
  {
    id: "playbooks",
    emoji: "📚",
    name: "Playbooks",
    mission: "Convert successful repeated workflows into reusable operating instructions.",
    status: "Planned",
    steward: "ARCHIVIST",
    accent: "blue",
    entries: ["Business playbooks", "Commerce playbooks", "Revenue playbooks", "Trading playbooks"],
    safetyNote: "A playbook is not validated until a workflow has repeated evidence.",
  },
  {
    id: "master-classes",
    emoji: "🎓",
    name: "Master Classes",
    mission: "Store long-form internal learning material and accumulated company expertise.",
    status: "Planned",
    steward: "ZENITH / ARCHIVIST",
    accent: "purple",
    entries: ["Advanced AI Business Systems", "DealFlow Architecture", "Commerce Operations", "Mission Management", "Leadership"],
    safetyNote: "Master Classes are internal learning assets, not claims of outside credentialing.",
  },
  {
    id: "hall-of-wins",
    emoji: "🏆",
    name: "Hall of Wins",
    mission: "Record successful experiments, successful launches, and major milestones after evidence exists.",
    status: "Awaiting Evidence",
    steward: "ARCHIVIST",
    accent: "emerald",
    entries: ["Successful experiments", "Successful launches", "Major milestones"],
    safetyNote: "No win is listed as achieved without evidence. No fake revenue, users, trades, or launches.",
  },
  {
    id: "hall-of-failures",
    emoji: "🪦",
    name: "Hall of Failures",
    mission: "Archive failed experiments and preserve the lessons already paid for.",
    status: "Planned",
    steward: "SENTINEL / ARCHIVIST",
    accent: "red",
    entries: ["Archived ideas", "Failed experiments", "Lessons learned", "Reasons for archival", "Revisit conditions"],
    safetyNote: "Failures should be honest after-action records, not blame artifacts or invented drama.",
  },
  {
    id: "evolution-lab",
    emoji: "🧬",
    name: "Evolution Lab",
    mission: "Track how officers, Programs, architecture, and operating systems improve across versions.",
    status: "Active",
    steward: "GRID CORE / ARCHIVIST",
    accent: "cyan",
    entries: ["Officer versions", "Program evolution", "Architecture milestones", "System upgrades"],
    safetyNote: "Evolution records document real changes only. Version numbers should not imply new autonomy unless approved.",
  },
  {
    id: "hall-of-command",
    emoji: "🏅",
    name: "Hall of Command",
    mission: "Preserve Mission Commander timeline, major decisions, and company milestones.",
    status: "Active",
    steward: "ARCHIVIST",
    accent: "magenta",
    entries: ["Mission Commander timeline", "Major decisions", "Company milestones", "Operation records"],
    safetyNote: "Hall of Command records history and decisions; it does not inflate status or invent milestones.",
  },
];

export const hallOfCommandTimeline: AcademyTimelineEntry[] = [
  foundingDay,
  {
    id: "HC-002",
    date: "July 2, 2026",
    title: "Operation First Revenue declared active",
    summary: "THE GRID shifted from adding isolated pages toward validating real revenue workflows through Revenue Architect and Mission Control.",
    evidence: "Operation First Revenue banner, Approval Queue AR-001, Decision Record DR-001, and Revenue Architect status documentation.",
  },
  {
    id: "HC-003",
    date: "July 2, 2026",
    title: "Operations Floor established",
    summary: "Mission Control became the unified operations headquarters with event bus, officer presence, approvals, decision records, pipeline, and KPIs.",
    evidence: "v1.5 and v1.6 Operations Floor and Operations Intelligence records.",
  },
];

export const evolutionRecords: EvolutionRecord[] = [
  {
    id: "EV-001",
    subject: "Mission Control",
    currentVersion: "v1.6.0",
    lesson: "A command center becomes more useful when it renders typed events and KPIs instead of isolated page snapshots.",
    nextReview: "After real Mission Records and Decision Records gain persistence.",
  },
  {
    id: "EV-002",
    subject: "Revenue Architect",
    currentVersion: "v1.0 Advisory",
    lesson: "The first operating department should organize evidence and approvals before marketplace action or automation.",
    nextReview: "After AR-001 is approved, declined, or revised.",
  },
  {
    id: "EV-003",
    subject: "THE GRID Architecture",
    currentVersion: "v1.7.0",
    lesson: "Institutional learning needs a dedicated campus so lessons survive beyond individual sessions.",
    nextReview: "After the first completed experiment or after-action review.",
  },
];

export const academyOverview = {
  mission: "Every lesson learned becomes permanent institutional knowledge.",
  currentVersion: "v1.7.0",
  status: "Active" as AcademyStatus,
  safety: "Typed data only. No backend, no fake metrics, no fabricated wins, no invented failures.",
};
