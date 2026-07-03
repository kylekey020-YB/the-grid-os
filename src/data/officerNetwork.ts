export type OfficerNetworkState = "Connected" | "Dormant" | "Prepared";

export type OfficerNetworkNode = {
  id: string;
  name: string;
  role: string;
  state: OfficerNetworkState;
  homeDivision: string;
  publishes: string[];
  listensTo: string[];
  currentSignal: string;
  safetyBoundary: string;
};

export const officerNetworkDoctrine = [
  "Officers publish status and recommendations.",
  "Officers do not execute external actions from THE GRID.",
  "The Operations Officer pattern aggregates updates into one executive brief.",
  "Dormant means represented in architecture but not operationally active.",
  "Connected means represented in typed local state, not connected to an external account.",
];

export const officerNetwork: OfficerNetworkNode[] = [
  {
    id: "zenith",
    name: "ZENITH",
    role: "Chief Systems Architect",
    state: "Connected",
    homeDivision: "Executive Council",
    publishes: ["Decision Record", "Status Update"],
    listensTo: ["Mission Commander", "Mission Pipeline", "Event Registry"],
    currentSignal: "Phase II architecture approved for typed Living Systems foundation.",
    safetyBoundary: "Advisory and architectural only.",
  },
  {
    id: "hermes",
    name: "Hermes",
    role: "Institutional Memory and Executive Operations",
    state: "Connected",
    homeDivision: "Operations / Academy",
    publishes: ["Mission Record", "Chronicle Entry"],
    listensTo: ["Mission Event Bus", "Decision Records", "Approvals"],
    currentSignal: "Prepared to support Chronicle and Mission Records after persistence is approved.",
    safetyBoundary: "No live bots, messaging, or account actions.",
  },
  {
    id: "revenue-architect",
    name: "Revenue Architect",
    role: "Income Systems Strategist",
    state: "Connected",
    homeDivision: "Revenue Corps",
    publishes: ["Approval", "Experiment Started", "Status Update"],
    listensTo: ["Revenue Intelligence", "Mission Pipeline", "Commander Approvals"],
    currentSignal: "AR-001 awaits Mission Commander decision.",
    safetyBoundary: "No scraping, publishing, spending, or customer messaging.",
  },
  {
    id: "revenue-intelligence",
    name: "Revenue Intelligence",
    role: "Opportunity Intelligence Engine",
    state: "Connected",
    homeDivision: "Revenue Corps",
    publishes: ["Experiment Started", "Research Complete"],
    listensTo: ["Market Scanner", "Opportunity Pipeline", "Experiment Tracker"],
    currentSignal: "Three research-stage experiments are awaiting evidence.",
    safetyBoundary: "Read-only intelligence; Unknown values remain Unknown or N/A.",
  },
  {
    id: "sentinel",
    name: "Sentinel",
    role: "Risk and Safety Officer",
    state: "Dormant",
    homeDivision: "Council",
    publishes: ["Status Update"],
    listensTo: ["Approvals", "Compliance Gates"],
    currentSignal: "Dormant in typed architecture; compliance surfaces exist.",
    safetyBoundary: "Advisory only until explicitly activated.",
  },
  {
    id: "archivist",
    name: "Archivist",
    role: "Knowledge Officer",
    state: "Dormant",
    homeDivision: "The Academy",
    publishes: ["Mission Record", "Chronicle Entry"],
    listensTo: ["Mission Records", "Decision Records", "After Action Reviews"],
    currentSignal: "Academy structure exists; records remain manual/static.",
    safetyBoundary: "No autonomous memory writes or generated history without review.",
  },
  {
    id: "quartermaster",
    name: "Quartermaster",
    role: "Supply Chain Officer",
    state: "Dormant",
    homeDivision: "Commerce",
    publishes: ["Research Complete", "Status Update"],
    listensTo: ["Commerce Gates", "Supplier Matrix"],
    currentSignal: "No supplier outreach authorized.",
    safetyBoundary: "No supplier contact, inventory, or spend without approval.",
  },
  {
    id: "market-scout",
    name: "Market Scout",
    role: "Marketplace Opportunity Scout",
    state: "Prepared",
    homeDivision: "Revenue Corps",
    publishes: ["Research Complete", "Status Update"],
    listensTo: ["Revenue Architect", "Scout Evidence Layer"],
    currentSignal: "Planned / Research Only. No marketplace action authorized.",
    safetyBoundary: "Public evidence reports only; no scraping against platform rules.",
  },
  {
    id: "demand-scout",
    name: "Demand Scout",
    role: "Buyer Pain and Search Intent Scout",
    state: "Prepared",
    homeDivision: "Revenue Corps",
    publishes: ["Research Complete", "Status Update"],
    listensTo: ["Revenue Architect", "Market Scanner"],
    currentSignal: "Planned / Research Only. Buyer language reports require public evidence.",
    safetyBoundary: "No customer messaging, no copied claims, no account automation.",
  },
  {
    id: "risk-scout",
    name: "Risk Scout",
    role: "Saturation, IP, ToS, and Margin Scout",
    state: "Prepared",
    homeDivision: "Revenue Corps / Council",
    publishes: ["Research Complete", "Status Update"],
    listensTo: ["Revenue Architect", "Sentinel", "Compliance Gates"],
    currentSignal: "Planned / Advisory Only. Flags risk before approval decisions.",
    safetyBoundary: "No legal conclusions, no autonomous blocking, no external action.",
  },
];
