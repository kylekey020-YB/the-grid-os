export type OfficerPresenceStatus = "Active" | "Advisory Only" | "Prepared" | "Standby";

export type OfficerPresence = {
  id: string;
  name: string;
  status: OfficerPresenceStatus;
  currentAssignment: string;
  lastCompletedAction: string;
  reportsWaiting: number | "N/A";
  homeDivision: string;
};

export const officerPresence: OfficerPresence[] = [
  {
    id: "zenith",
    name: "ZENITH",
    status: "Active",
    currentAssignment: "Architecture, doctrine, and milestone sequencing.",
    lastCompletedAction: "Authored Founding Constitution and Mission Pipeline directives.",
    reportsWaiting: 0,
    homeDivision: "Executive Council",
  },
  {
    id: "hermes",
    name: "Hermes",
    status: "Prepared",
    currentAssignment: "Profile layer prepared for future officers.",
    lastCompletedAction: "Hermes agent architecture documented.",
    reportsWaiting: "N/A",
    homeDivision: "Hermes Agents",
  },
  {
    id: "revenue-architect",
    name: "Revenue Architect",
    status: "Advisory Only",
    currentAssignment: "Operation First Revenue lane scoring and evidence organization.",
    lastCompletedAction: "Created AR-001 and Revenue Architect operating board.",
    reportsWaiting: 1,
    homeDivision: "Revenue Corps",
  },
  {
    id: "revenue-intelligence",
    name: "Revenue Intelligence",
    status: "Active",
    currentAssignment: "Opportunity candidates, evidence scoring, experiments, and decision support.",
    lastCompletedAction: "Published Approval Queue and Decision Records surfaces.",
    reportsWaiting: 0,
    homeDivision: "Revenue Corps",
  },
  {
    id: "claude",
    name: "Claude",
    status: "Standby",
    currentAssignment: "Engineering discipline and review when engaged.",
    lastCompletedAction: "Established engineering discipline role in founding docs.",
    reportsWaiting: "N/A",
    homeDivision: "Engineering",
  },
  {
    id: "claude-code",
    name: "Claude Code",
    status: "Standby",
    currentAssignment: "Lead engineering when assigned by Mission Commander.",
    lastCompletedAction: "Referenced as Lead Engineer in founding docs.",
    reportsWaiting: "N/A",
    homeDivision: "Engineering",
  },
  {
    id: "codex",
    name: "Codex",
    status: "Active",
    currentAssignment: "Frontend implementation, UI architecture, documentation, and validation.",
    lastCompletedAction: "Built Mission Pipeline, Approval System, and Operations Floor foundation.",
    reportsWaiting: 0,
    homeDivision: "Engineering",
  },
];
