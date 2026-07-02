export type IncomePlatform = "Etsy" | "Fiverr" | "Gumroad" | "Affiliate" | "YouTube" | "Assets";
export type FactoryStatus = "Research" | "Validate" | "Build" | "Publish" | "Kill" | "Prepared" | "Needs Approval" | "Manual Only";
export type AssetProductType = "YouTube thumbnails" | "Etsy digital download" | "2D game asset pack" | "eBook" | "template" | "music loop" | "affiliate article";
export type ApprovalStatus = "Draft" | "Needs Review" | "Approved for Manual Action" | "Blocked";
export type FactoryDecision = "Kill" | "Iterate" | "Scale" | "Pending Evidence";

export type MarketOpportunity = {
  id: string;
  title: string;
  platform: IncomePlatform;
  demandEvidence: string;
  competitionNotes: string;
  status: FactoryStatus;
};

export type OfferDraft = {
  id: string;
  offerTitle: string;
  targetCustomer: string;
  painPoint: string;
  deliverable: string;
  price: string;
  differentiation: string;
  approvalStatus: ApprovalStatus;
};

export type AssetRequest = {
  id: string;
  productType: AssetProductType;
  assetRequest: string;
  assignedOfficer: "DESIGN FORGE" | "COPY ROOM" | "REVENUE ARCHITECT" | "PUBLISHING ROOM" | "SENTINEL";
  status: FactoryStatus;
};

export type FiverrConcept = {
  id: string;
  gigConcept: string;
  packageTiers: string;
  deliveryScope: string;
  faq: string;
  buyerRequirements: string;
  manualPublishChecklist: string[];
};

export type EtsyConcept = {
  id: string;
  listingConcept: string;
  seoTitle: string;
  tags: string[];
  mockupStatus: FactoryStatus;
  digitalFileStatus: FactoryStatus;
  manualPublishChecklist: string[];
};

export type PublishingItem = {
  id: string;
  item: string;
  channel: IncomePlatform;
  approvalRequired: boolean;
  schedulePlaceholder: string;
  manualActionRequired: string;
};

export type RevenueExperiment = {
  id: string;
  experiment: string;
  views: null;
  clicks: null;
  orders: null;
  revenue: null;
  decision: FactoryDecision;
  evidenceNote: string;
};

export type ComplianceGate = {
  id: string;
  check: string;
  status: "Placeholder" | "Required";
  owner: "SENTINEL" | "REVENUE ARCHITECT";
  note: string;
};

export const incomeFactoryGoal = {
  goal: "First $10k/month",
  currentPhase: "Assisted workflow foundation",
  safety: "No autonomous publishing, scraping violations, fake reviews, copied IP, auto-DMs, ad spend, or account automation.",
  doctrine: ["Research demand", "Create original differentiated offers", "Publish manually", "Track results", "Automate only proven repeated workflows"],
};

export const marketOpportunities: MarketOpportunity[] = [
  { id: "opp-001", title: "Original streamer thumbnail systems", platform: "YouTube", demandEvidence: "Collect public demand signals manually before building.", competitionNotes: "Study layout patterns and service language; do not copy creators or sellers.", status: "Research" },
  { id: "opp-002", title: "Printable small-business checklist templates", platform: "Etsy", demandEvidence: "Validate search demand and buyer problem language manually.", competitionNotes: "Differentiate by niche workflow and original design system.", status: "Validate" },
  { id: "opp-003", title: "2D UI asset pack for indie games", platform: "Assets", demandEvidence: "Review marketplace category demand manually.", competitionNotes: "Avoid copying existing packs; define original visual direction.", status: "Research" },
];

export const offerDrafts: OfferDraft[] = [
  { id: "offer-001", offerTitle: "Launch-ready thumbnail pack", targetCustomer: "Small YouTube creators", painPoint: "Slow, inconsistent thumbnail creation", deliverable: "Original thumbnail concepts and editable templates", price: "TBD after validation", differentiation: "Systemized niche packs with clear review gates", approvalStatus: "Needs Review" },
  { id: "offer-002", offerTitle: "Etsy digital operations kit", targetCustomer: "Micro-business owners", painPoint: "Scattered launch checklists and trackers", deliverable: "Original printable and digital template bundle", price: "TBD after demand validation", differentiation: "Practical workflow bundle, not decorative-only templates", approvalStatus: "Draft" },
];

export const assetRequests: AssetRequest[] = [
  { id: "asset-001", productType: "YouTube thumbnails", assetRequest: "Create three original thumbnail style directions for one validated niche.", assignedOfficer: "DESIGN FORGE", status: "Build" },
  { id: "asset-002", productType: "affiliate article", assetRequest: "Draft a manually reviewed outline for an SEO asset after keyword validation.", assignedOfficer: "COPY ROOM", status: "Research" },
  { id: "asset-003", productType: "2D game asset pack", assetRequest: "Define original UI kit scope and required file formats.", assignedOfficer: "DESIGN FORGE", status: "Validate" },
];

export const fiverrConcepts: FiverrConcept[] = [
  { id: "fiverr-001", gigConcept: "Productized thumbnail concept package", packageTiers: "Basic: 1 concept / Standard: 3 concepts / Premium: 5 concepts plus source file", deliveryScope: "Manual design delivery only after customer brief", faq: "Clarify revisions, source files, and commercial use boundaries.", buyerRequirements: "Niche, title, reference direction, brand colors, deadline", manualPublishChecklist: ["Human approval", "No copied examples", "Scope reviewed", "Delivery limits clear"] },
];

export const etsyConcepts: EtsyConcept[] = [
  { id: "etsy-001", listingConcept: "Original launch checklist template bundle", seoTitle: "TBD after manual keyword review", tags: ["manual research required", "no copied tags", "original template"], mockupStatus: "Needs Approval", digitalFileStatus: "Build", manualPublishChecklist: ["Trademark check", "Copyright check", "Original mockup", "Human approval", "Manual upload"] },
];

export const publishingQueue: PublishingItem[] = [
  { id: "pub-001", item: "Etsy template listing draft", channel: "Etsy", approvalRequired: true, schedulePlaceholder: "No schedule until approved", manualActionRequired: "Human reviews and manually publishes listing" },
  { id: "pub-002", item: "Fiverr gig draft", channel: "Fiverr", approvalRequired: true, schedulePlaceholder: "No schedule until approved", manualActionRequired: "Human reviews and manually publishes gig" },
];

export const revenueExperiments: RevenueExperiment[] = [
  { id: "rev-001", experiment: "First Etsy digital product lane", views: null, clicks: null, orders: null, revenue: null, decision: "Pending Evidence", evidenceNote: "No metrics until a manually published experiment exists." },
  { id: "rev-002", experiment: "First Fiverr productized service lane", views: null, clicks: null, orders: null, revenue: null, decision: "Pending Evidence", evidenceNote: "No fake orders, no fake revenue, no assumed conversion." },
];

export const complianceGates: ComplianceGate[] = [
  { id: "compliance-001", check: "Trademark check placeholder", status: "Required", owner: "SENTINEL", note: "Must be reviewed before publishing." },
  { id: "compliance-002", check: "Copyright check placeholder", status: "Required", owner: "SENTINEL", note: "No copyrighted characters or copied assets." },
  { id: "compliance-003", check: "Platform-ToS check placeholder", status: "Required", owner: "SENTINEL", note: "No ToS-violating scraping or account automation." },
  { id: "compliance-004", check: "Human approval required", status: "Required", owner: "REVENUE ARCHITECT", note: "No autonomous publishing, auto-DMs, or ad spend." },
];

export const factoryOfficers = ["REVENUE ARCHITECT", "DESIGN FORGE", "COPY ROOM", "PUBLISHING ROOM", "SENTINEL"] as const;
