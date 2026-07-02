export type IdentityAccent = "cyan" | "emerald" | "amber" | "purple" | "red" | "blue" | "magenta";

export type DivisionInsignia = {
  id: string;
  name: string;
  symbol: string;
  motto: string;
  accent: IdentityAccent;
};

export type MissionRibbon = {
  id: string;
  label: string;
  awardedFor: string;
  status: "Recorded" | "Planned" | "Awaiting Evidence";
  accent: IdentityAccent;
};

export const companySeal = {
  name: "THE GRID",
  subtitle: "Evidence-Based AI Operating Company",
  foundingDate: "July 2, 2026",
  motto: "Reality before automation.",
};

export const foundingDayPlaque = {
  title: "Founding Day",
  date: "July 2, 2026",
  inscription: "THE GRID now has an identity, a government, a headquarters, a memory, a doctrine, and a mission.",
  authority: "Mission Commander Maximus Titus Antony / ZENITH Architecture Record",
};

export const operationFirstRevenuePatch = {
  title: "Operation First Revenue",
  commander: "Maximus Titus Antony",
  objective: "$10,000 Monthly Recurring Revenue",
  status: "Active / Manual Validation",
  doctrine: "Publish manually first. Automate only repeated workflows.",
};

export const divisionInsignias: DivisionInsignia[] = [
  { id: "operations", name: "Operations", symbol: "⚕", motto: "Coordinate the company.", accent: "cyan" },
  { id: "income", name: "Income Division", symbol: "💸", motto: "Evidence before revenue claims.", accent: "emerald" },
  { id: "commerce", name: "Commerce", symbol: "🛒", motto: "Validate before inventory.", accent: "amber" },
  { id: "academy", name: "The Academy", symbol: "🏛", motto: "Every lesson becomes knowledge.", accent: "purple" },
  { id: "bridge", name: "The Bridge", symbol: "🌉", motto: "Everything publishes. Nothing directly controls.", accent: "cyan" },
  { id: "trading", name: "Trading Programs", symbol: "⚡", motto: "Research before execution.", accent: "blue" },
];

export const missionRibbons: MissionRibbon[] = [
  { id: "founding-day", label: "Founding Day", awardedFor: "THE GRID identity, doctrine, government, headquarters, memory, and mission established.", status: "Recorded", accent: "amber" },
  { id: "phase-i-complete", label: "Phase I Complete", awardedFor: "Foundation completed: Constitution, Council, Mission Control, Pipeline, Academy, and institutional memory.", status: "Recorded", accent: "cyan" },
  { id: "first-revenue", label: "First Revenue", awardedFor: "Reserved for first validated revenue evidence.", status: "Awaiting Evidence", accent: "emerald" },
  { id: "first-playbook", label: "First Validated Playbook", awardedFor: "Reserved for the first repeated workflow with evidence.", status: "Awaiting Evidence", accent: "purple" },
];
