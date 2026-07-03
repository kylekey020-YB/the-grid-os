export type ChronicleStatus = "Draft" | "Published" | "Awaiting Evidence";

export type ChronicleEntry = {
  id: string;
  week: string;
  period: string;
  status: ChronicleStatus;
  whatHappened: string[];
  majorVictories: string[];
  majorFailures: string[];
  lessons: string[];
  architectureChanges: string[];
  revenue: string;
  newOfficers: string[];
  programsImproved: string[];
  missionStatus: string;
  evidence: string;
};

export const chronicleDoctrine = [
  "The Chronicle is company history, not a commit log.",
  "Hermes may draft future weekly pages only after records exist.",
  "No victory, failure, revenue, or program improvement is invented.",
  "Chronicle entries should cite Mission Records, Decision Records, approvals, and evidence.",
];

export const chronicleEntries: ChronicleEntry[] = [
  {
    id: "CH-2026-W27",
    week: "Week 27",
    period: "Founding Week - July 2, 2026",
    status: "Draft",
    whatHappened: [
      "THE GRID established Founding Day.",
      "THE GRID entered the marketplace with EXP-1 Fiverr AI Automation Consulting.",
      "Phase I Foundation was declared complete.",
      "The Academy became the institutional learning division.",
      "Launch Center became the customer-facing execution tracker.",
      "Phase II Living Systems began as typed architecture only.",
    ],
    majorVictories: [
      "Doctrine, Constitution, Mission Control, Mission Pipeline, Approval System, Decision Records, Revenue Intelligence, Operations Floor, The Academy, and Launch Center now exist as the operating headquarters foundation.",
      "EXP-1 moved Operation First Revenue from preparation into live marketplace execution.",
    ],
    majorFailures: ["N/A - no failed experiment has been formally recorded in The Academy yet."],
    lessons: [
      "A learning organization needs memory, not just pages.",
      "Event-driven architecture can make THE GRID feel alive without fake AI activity.",
      "The Mission must anchor the institution beyond any one model, officer, or tool.",
    ],
    architectureChanges: [
      "Added Article 0 - The Mission to the Constitution.",
      "Introduced the Event Registry and Officer Network as Phase II typed architecture.",
      "Prepared The Bridge as the primary operations surface.",
    ],
    revenue: "N/A - first marketplace service is live, but no revenue evidence is recorded yet.",
    newOfficers: ["Hermes role clarified for institutional memory and executive operations."],
    programsImproved: ["N/A - no Program improvement record has evidence yet."],
    missionStatus: "Operation First Revenue active; AR-001 awaiting Mission Commander decision.",
    evidence: "Founding Day Declaration, THE_GRID_CONSTITUTION.md, Academy v1.7, Operations Floor v1.6, and current typed data.",
  },
];
