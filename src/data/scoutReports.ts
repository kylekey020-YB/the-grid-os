export type ScoutReportStatus = "Not Started" | "Manual Research" | "Awaiting Evidence" | "Ready for Review" | "Parked";
export type ScoutReportConfidence = "N/A" | "Low" | "Medium" | "High";
export type ScoutReportLane = "Etsy" | "Fiverr" | "Gumroad" | "Assets" | "Bounties" | "Trends" | "Reviews" | "Pricing" | "Print-on-Demand";

export type ScoutReport = {
  id: string;
  scoutName: string;
  emoji: string;
  lane: ScoutReportLane;
  currentStatus: ScoutReportStatus;
  evidenceSourcePlaceholder: string;
  opportunityFindings: string;
  buyerPain: string;
  competitionNotes: string;
  marginPotential: string;
  speedToLaunch: string;
  riskFlags: string[];
  recommendation: string;
  confidence: ScoutReportConfidence;
  nextAction: string;
};

export const scoutReportsDoctrine =
  "Scouts discover demand. Product Corps creates original assets. Launch Corps publishes only after Mission Commander approval.";

export const scoutReportsSummary = {
  version: "v2.4.0",
  status: "Manual/public-evidence only",
  reportsTo: "Revenue Architect",
  rankingOwner: "Revenue Architect",
  approvalOwner: "Mission Commander",
  unknownRule: "Unknown values stay N/A until a human records evidence.",
  safety: "No scraping integrations, no account automation, no fake marketplace data, no autonomous publishing, and no customer messaging.",
};

export const scoutReports: ScoutReport[] = [
  {
    id: "SR-001",
    scoutName: "Etsy Scout",
    emoji: "🛒",
    lane: "Etsy",
    currentStatus: "Manual Research",
    evidenceSourcePlaceholder: "N/A - add public/manual source notes before scoring.",
    opportunityFindings: "N/A - no Etsy opportunity evidence recorded yet.",
    buyerPain: "N/A - buyer language must come from manually reviewed public evidence.",
    competitionNotes: "N/A - competition notes not recorded yet.",
    marginPotential: "N/A - pricing and fulfillment assumptions not validated.",
    speedToLaunch: "N/A - depends on approved product scope and asset requirements.",
    riskFlags: ["Trademark risk", "Copied listing risk", "Generic AI product saturation"],
    recommendation: "Create the first manual evidence report before any Etsy product build.",
    confidence: "N/A",
    nextAction: "Record niche, tag, pricing, and buyer-language evidence from approved public sources.",
  },
  {
    id: "SR-002",
    scoutName: "Fiverr Scout",
    emoji: "💼",
    lane: "Fiverr",
    currentStatus: "Manual Research",
    evidenceSourcePlaceholder: "N/A - add public/manual gig review notes before scoring.",
    opportunityFindings: "EXP-1 is live; no additional Fiverr opportunity findings recorded yet.",
    buyerPain: "N/A - collect language from real inquiries or manually reviewed public gig positioning.",
    competitionNotes: "N/A - competitive positioning notes not recorded yet.",
    marginPotential: "N/A - service delivery time and pricing must be measured.",
    speedToLaunch: "N/A - second gig not approved yet.",
    riskFlags: ["Scope creep", "Unsupported claims", "Over-editing live gig before indexing"],
    recommendation: "Monitor EXP-1 and prepare a second-gig evidence report only after initial platform signals exist.",
    confidence: "N/A",
    nextAction: "Track impressions, clicks, messages, consultations, orders, reviews, and revenue for EXP-1.",
  },
  {
    id: "SR-003",
    scoutName: "Gumroad Scout",
    emoji: "📦",
    lane: "Gumroad",
    currentStatus: "Awaiting Evidence",
    evidenceSourcePlaceholder: "N/A - add toolkit/template/eBook source notes after banking and lane clearance.",
    opportunityFindings: "N/A - no Gumroad toolkit evidence recorded yet.",
    buyerPain: "N/A - buyer pain notes not recorded yet.",
    competitionNotes: "N/A - competitor notes not recorded yet.",
    marginPotential: "N/A - digital delivery economics likely depend on product scope, support burden, and platform fees.",
    speedToLaunch: "N/A - launch timing depends on banking clearance and approved offer.",
    riskFlags: ["Unclear demand", "Weak differentiation", "Support burden"],
    recommendation: "Keep Gumroad in research until public evidence and banking readiness are documented.",
    confidence: "N/A",
    nextAction: "Prepare a manual evidence checklist for toolkit/template/eBook opportunities.",
  },
  {
    id: "SR-004",
    scoutName: "Asset Scout",
    emoji: "🎮",
    lane: "Assets",
    currentStatus: "Awaiting Evidence",
    evidenceSourcePlaceholder: "N/A - add public marketplace or community evidence before any asset pack is built.",
    opportunityFindings: "N/A - no asset-market evidence recorded yet.",
    buyerPain: "N/A - developer pain notes not recorded yet.",
    competitionNotes: "N/A - asset category saturation not recorded yet.",
    marginPotential: "N/A - pricing and support expectations unknown.",
    speedToLaunch: "N/A - depends on original asset complexity.",
    riskFlags: ["Copied asset risk", "Style saturation", "High production time"],
    recommendation: "Research asset categories before assigning Game Forge or Asset Forge.",
    confidence: "N/A",
    nextAction: "Create a manual top-category evidence report for 2D assets, UI kits, icons, sound FX, music loops, and engine-specific packs.",
  },
  {
    id: "SR-005",
    scoutName: "Bounty Scout",
    emoji: "🏆",
    lane: "Bounties",
    currentStatus: "Manual Research",
    evidenceSourcePlaceholder: "N/A - add public bounty, competition, RFP, grant, or hackathon source links before scoring.",
    opportunityFindings: "N/A - no bounty shortlist recorded yet.",
    buyerPain: "N/A - sponsor/problem statement not recorded yet.",
    competitionNotes: "N/A - eligibility and competitor difficulty not recorded yet.",
    marginPotential: "N/A - payout, time cost, and probability of success unknown.",
    speedToLaunch: "N/A - deadline and submission requirements unknown.",
    riskFlags: ["Eligibility mismatch", "Low probability reward", "Time sink"],
    recommendation: "Build a public-opportunity shortlist before any submission work begins.",
    confidence: "N/A",
    nextAction: "Record opportunities with value, deadline, eligibility, effort, evidence source, and risk notes.",
  },
  {
    id: "SR-006",
    scoutName: "Trend Scout",
    emoji: "📈",
    lane: "Trends",
    currentStatus: "Awaiting Evidence",
    evidenceSourcePlaceholder: "N/A - add public seasonal/emerging trend notes before acting.",
    opportunityFindings: "N/A - no trend report recorded yet.",
    buyerPain: "N/A - trend buyer intent not recorded yet.",
    competitionNotes: "N/A - saturation and timing unknown.",
    marginPotential: "N/A - trend monetization unknown.",
    speedToLaunch: "N/A - depends on seasonality and production scope.",
    riskFlags: ["Trend decay", "Late entry", "Weak buyer intent"],
    recommendation: "Use trends only as evidence prompts, not as authorization to build.",
    confidence: "N/A",
    nextAction: "Record trend source, timing window, buyer intent, and production fit.",
  },
  {
    id: "SR-007",
    scoutName: "Review Scout",
    emoji: "⭐",
    lane: "Reviews",
    currentStatus: "Awaiting Evidence",
    evidenceSourcePlaceholder: "N/A - add manually reviewed public review snippets or summarized buyer language.",
    opportunityFindings: "N/A - no unmet-need pattern recorded yet.",
    buyerPain: "N/A - look for repeated phrases such as missing features, confusion, quality gaps, or support complaints.",
    competitionNotes: "N/A - review-driven competitive gaps unknown.",
    marginPotential: "N/A - depends on solution complexity and willingness to pay.",
    speedToLaunch: "N/A - depends on whether the pain can be solved with current resources.",
    riskFlags: ["Cherry-picked evidence", "Privacy risk", "Copying competitor features too closely"],
    recommendation: "Use review language to identify problems, not to clone products.",
    confidence: "N/A",
    nextAction: "Create a buyer-language evidence board from approved public sources.",
  },
  {
    id: "SR-008",
    scoutName: "Pricing Scout",
    emoji: "💲",
    lane: "Pricing",
    currentStatus: "Awaiting Evidence",
    evidenceSourcePlaceholder: "N/A - add public price ranges, bundle examples, and offer-positioning notes.",
    opportunityFindings: "N/A - no pricing pattern recorded yet.",
    buyerPain: "N/A - price sensitivity and premium willingness unknown.",
    competitionNotes: "N/A - low-end saturation and premium gaps unknown.",
    marginPotential: "N/A - requires delivery cost, fees, and support burden assumptions.",
    speedToLaunch: "N/A - depends on offer complexity and evidence strength.",
    riskFlags: ["Race to the bottom", "Underpriced labor", "Unsupported premium positioning"],
    recommendation: "Do not price offers until delivery scope and comparable public pricing are recorded.",
    confidence: "N/A",
    nextAction: "Build public price-band notes for approved lanes only.",
  },
  {
    id: "SR-009",
    scoutName: "Print-on-Demand Scout",
    emoji: "POD",
    lane: "Print-on-Demand",
    currentStatus: "Manual Research",
    evidenceSourcePlaceholder: "N/A - add public/manual notes from Etsy, Shopify, Printify, Printful, Gelato, or reputable POD suppliers before scoring.",
    opportunityFindings: "N/A - no POD niche evidence recorded yet.",
    buyerPain: "N/A - buyer language must come from manually reviewed public evidence.",
    competitionNotes: "N/A - competition, saturation, and differentiation notes not recorded yet.",
    marginPotential: "N/A - average selling price, production cost, shipping, fees, and estimated margin are unknown until evidenced.",
    speedToLaunch: "N/A - time to revenue depends on evidence strength, original design scope, supplier economics, and manual approval.",
    riskFlags: ["Trademark risk", "Copyrighted character risk", "Copied design risk", "Weak margin", "Supplier cost uncertainty", "Seasonality risk"],
    recommendation: "Research only. Produce evidence for Revenue Architect scoring: Proceed, Hold, or Reject. Do not recommend launching.",
    confidence: "N/A",
    nextAction: "Collect demand, competition, average selling price, estimated production cost, estimated margin, difficulty, time to revenue, and confidence for POD niches.",
  },
];

export const scoutReportMetrics = {
  totalReports: scoutReports.length,
  manualResearch: scoutReports.filter((report) => report.currentStatus === "Manual Research").length,
  awaitingEvidence: scoutReports.filter((report) => report.currentStatus === "Awaiting Evidence").length,
  readyForReview: scoutReports.filter((report) => report.currentStatus === "Ready for Review").length,
};
