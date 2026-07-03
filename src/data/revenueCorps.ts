export type RevenueCorpsStatus =
  | "Active"
  | "Planned"
  | "Research Only"
  | "Advisory Only"
  | "Manual Only"
  | "Backlog";

export type RevenueCorpsBranch = "Command" | "Scout Corps" | "Product Corps" | "Launch Corps";

export type RevenueCorpsUnit = {
  id: string;
  emoji: string;
  name: string;
  branch: RevenueCorpsBranch;
  mission: string;
  reportsTo: string;
  status: RevenueCorpsStatus;
  activationWave: string;
  outputs: string[];
  prohibitedActions: string[];
};

export type RevenueCorpsWave = {
  id: string;
  name: string;
  status: RevenueCorpsStatus;
  objective: string;
  units: string[];
};

export type ScoreToBeatQuestion = {
  id: string;
  question: string;
  passCondition: string;
};

export type OpportunityIntelligenceItem = {
  id: string;
  opportunity: string;
  owner: string;
  confidence: "N/A" | number;
  timeToLaunch: "N/A" | string;
  revenuePotential: "N/A" | "Low" | "Medium" | "High";
  currentGate: string;
  nextAction: string;
};

export const revenueCorpsSummary = {
  version: "v2.7.0",
  name: "Revenue Corps",
  commander: "Revenue Architect",
  status: "Architecture Active / Research Only",
  mission: "Turn Operation First Revenue into a disciplined portfolio of original, evidence-backed revenue streams.",
  doctrine: "Scouts discover demand. Product Corps creates original assets. Launch Corps publishes only after Mission Commander approval. Revenue Architect ranks opportunities.",
  safety: "No autonomous publishing, no customer messaging, no spending, no account automation, and no scraping against platform rules.",
};

export const revenueCorpsUnits: RevenueCorpsUnit[] = [
  {
    id: "revenue-architect",
    emoji: "💸",
    name: "Revenue Architect",
    branch: "Command",
    mission: "Rank evidence, select the strongest revenue paths, and decide what is ready for Mission Pipeline review.",
    reportsTo: "Mission Commander",
    status: "Active",
    activationWave: "Command",
    outputs: ["Executive revenue brief", "Opportunity ranking", "Pipeline recommendation"],
    prohibitedActions: ["No publishing", "No spending", "No account automation"],
  },
  {
    id: "revenue-intelligence",
    emoji: "📈",
    name: "Revenue Intelligence",
    branch: "Command",
    mission: "Score scout reports, compare opportunities, and maintain the evidence board.",
    reportsTo: "Revenue Architect",
    status: "Active",
    activationWave: "Command",
    outputs: ["Score to Beat review", "Evidence comparison", "Read-only revenue dashboard"],
    prohibitedActions: ["No fabricated scores", "No live marketplace actions"],
  },
  {
    id: "marketplace-scout",
    emoji: "🛒",
    name: "Marketplace Scout",
    branch: "Scout Corps",
    mission: "Find public marketplace patterns across Fiverr, Etsy, Gumroad, Creative Market, UI8, and Envato.",
    reportsTo: "Revenue Architect",
    status: "Research Only",
    activationWave: "Wave 1",
    outputs: ["Trending product notes", "Underserved niche notes", "Price range notes", "Competition score draft"],
    prohibitedActions: ["No scraping against terms", "No copying listings", "No product creation"],
  },
  {
    id: "publishing-scout",
    emoji: "📚",
    name: "Publishing Scout",
    branch: "Scout Corps",
    mission: "Find opportunities for ebooks, Notion templates, checklists, prompt packs, operating systems, planners, and educational downloads.",
    reportsTo: "Revenue Architect",
    status: "Research Only",
    activationWave: "Wave 1",
    outputs: ["Publishing opportunity notes", "Buyer problem notes", "Format recommendations"],
    prohibitedActions: ["No copying products", "No publishing", "No account actions"],
  },
  {
    id: "bounty-hunter",
    emoji: "🏆",
    name: "Bounty Hunter",
    branch: "Scout Corps",
    mission: "Identify public bounties, competitions, hackathons, grants, sponsorships, RFPs, and contests worth evaluating.",
    reportsTo: "Revenue Architect",
    status: "Research Only",
    activationWave: "Wave 1",
    outputs: ["Bounty list", "Eligibility notes", "Deadline notes", "Estimated effort"],
    prohibitedActions: ["No applications", "No submissions", "No spending"],
  },
  {
    id: "asset-scout",
    emoji: "🎮",
    name: "Asset Scout",
    branch: "Scout Corps",
    mission: "Study demand for Unity, Unreal, Godot, icon, UI kit, sound, music, pixel art, and game UI assets.",
    reportsTo: "Revenue Architect",
    status: "Planned",
    activationWave: "Wave 2",
    outputs: ["Asset category notes", "Style demand notes", "Bundle opportunity notes"],
    prohibitedActions: ["No asset cloning", "No marketplace scraping against terms"],
  },
  {
    id: "affiliate-scout",
    emoji: "🤝",
    name: "Affiliate Scout",
    branch: "Scout Corps",
    mission: "Find affiliate programs with public commission terms, recurring potential, and strategic fit.",
    reportsTo: "Revenue Architect",
    status: "Planned",
    activationWave: "Wave 2",
    outputs: ["Program shortlist", "Commission notes", "Risk notes"],
    prohibitedActions: ["No applications without approval", "No paid promotion"],
  },
  {
    id: "trend-scout",
    emoji: "📈",
    name: "Trend Scout",
    branch: "Scout Corps",
    mission: "Track seasonal, software, business, and culture shifts that may create original product demand.",
    reportsTo: "Revenue Architect",
    status: "Planned",
    activationWave: "Wave 2",
    outputs: ["Seasonality notes", "Launch window notes", "Demand timing notes"],
    prohibitedActions: ["No claims without source notes", "No product publishing"],
  },
  {
    id: "review-scout",
    emoji: "⭐",
    name: "Review Scout",
    branch: "Scout Corps",
    mission: "Extract buyer pain language from public reviews, especially unmet needs and repeated improvement requests.",
    reportsTo: "Revenue Architect",
    status: "Backlog",
    activationWave: "Specialist Backlog",
    outputs: ["Buyer language", "Pain patterns", "Feature gap notes"],
    prohibitedActions: ["No review manipulation", "No customer messaging", "No copying"],
  },
  {
    id: "pricing-scout",
    emoji: "💲",
    name: "Pricing Scout",
    branch: "Scout Corps",
    mission: "Compare public price ranges, bundle structures, and perceived value without inventing economics.",
    reportsTo: "Revenue Architect",
    status: "Backlog",
    activationWave: "Specialist Backlog",
    outputs: ["Price bands", "Bundle notes", "Margin risk notes"],
    prohibitedActions: ["No fake margins", "No spending"],
  },
  {
    id: "ebook-foundry",
    emoji: "✍️",
    name: "eBook Foundry",
    branch: "Product Corps",
    mission: "Build original outlines, drafts, covers, worksheets, and companion templates after evidence approval.",
    reportsTo: "Revenue Architect",
    status: "Planned",
    activationWave: "Wave 3",
    outputs: ["Original outline", "Draft", "Worksheet", "Companion template"],
    prohibitedActions: ["No plagiarized content", "No copyrighted character use", "No publishing"],
  },
  {
    id: "asset-forge",
    emoji: "🎨",
    name: "Asset Forge",
    branch: "Product Corps",
    mission: "Create original digital assets such as printables, SVGs, icons, posters, stickers, coloring books, and mockups.",
    reportsTo: "Revenue Architect",
    status: "Planned",
    activationWave: "Wave 3",
    outputs: ["Original asset pack", "Mockup draft", "Quality checklist"],
    prohibitedActions: ["No trademark infringement", "No copied designs", "No auto-upload"],
  },
  {
    id: "game-forge",
    emoji: "🎮",
    name: "Game Forge",
    branch: "Product Corps",
    mission: "Create original game UI packs, inventory icons, skill trees, buttons, tilesets, and menus.",
    reportsTo: "Revenue Architect",
    status: "Planned",
    activationWave: "Wave 3",
    outputs: ["Original game asset pack", "Style sheet", "Usage notes"],
    prohibitedActions: ["No cloned assets", "No marketplace publishing"],
  },
  {
    id: "thumbnail-forge",
    emoji: "🎬",
    name: "Thumbnail Forge",
    branch: "Product Corps",
    mission: "Create original YouTube thumbnails, podcast covers, course graphics, and social graphics after offer approval.",
    reportsTo: "Revenue Architect",
    status: "Planned",
    activationWave: "Product Backlog",
    outputs: ["Thumbnail set", "Cover set", "A/B concept notes"],
    prohibitedActions: ["No copyrighted likenesses", "No misleading claims"],
  },
  {
    id: "etsy-officer",
    emoji: "🛍️",
    name: "Etsy Officer",
    branch: "Launch Corps",
    mission: "Prepare listing drafts, SEO titles, tags, descriptions, mockups, and manual publish checklists.",
    reportsTo: "Revenue Architect",
    status: "Planned",
    activationWave: "Wave 4",
    outputs: ["Listing draft", "SEO tags", "Manual publish checklist"],
    prohibitedActions: ["No auto-publishing", "No trademark infringement", "No fake reviews"],
  },
  {
    id: "fiverr-officer",
    emoji: "🎯",
    name: "Fiverr Officer",
    branch: "Launch Corps",
    mission: "Prepare gig optimization, portfolio examples, FAQs, package tiers, and buyer requirement drafts.",
    reportsTo: "Revenue Architect",
    status: "Planned",
    activationWave: "Wave 4",
    outputs: ["Gig draft", "FAQ", "Portfolio checklist"],
    prohibitedActions: ["No auto-messaging", "No fake reviews", "No account automation"],
  },
  {
    id: "gumroad-officer",
    emoji: "📦",
    name: "Gumroad Officer",
    branch: "Launch Corps",
    mission: "Prepare product pages, bundles, upsells, and launch checklists after product approval.",
    reportsTo: "Revenue Architect",
    status: "Planned",
    activationWave: "Wave 4",
    outputs: ["Product page draft", "Bundle plan", "Manual launch checklist"],
    prohibitedActions: ["No payment setup changes", "No auto-publishing", "No spending"],
  },
  {
    id: "blog-officer",
    emoji: "📰",
    name: "Blog Officer",
    branch: "Launch Corps",
    mission: "Prepare SEO articles, affiliate content drafts, and internal link plans after approval.",
    reportsTo: "Revenue Architect",
    status: "Planned",
    activationWave: "Wave 4",
    outputs: ["Article draft", "Affiliate disclosure checklist", "Internal link plan"],
    prohibitedActions: ["No affiliate application without approval", "No deceptive claims"],
  },
];

export const revenueCorpsWaves: RevenueCorpsWave[] = [
  { id: "wave-1", name: "Wave 1 - Scout Corps", status: "Research Only", objective: "Activate the first opportunity discovery team without product creation or platform action.", units: ["Marketplace Scout", "Publishing Scout", "Bounty Hunter"] },
  { id: "wave-2", name: "Wave 2 - Specialist Scouts", status: "Planned", objective: "Expand discovery into assets, affiliate programs, and time-sensitive trends.", units: ["Asset Scout", "Affiliate Scout", "Trend Scout"] },
  { id: "wave-3", name: "Wave 3 - Product Corps", status: "Planned", objective: "Build original products only after an opportunity clears evidence and approval gates.", units: ["eBook Foundry", "Asset Forge", "Game Forge"] },
  { id: "wave-4", name: "Wave 4 - Launch Corps", status: "Planned", objective: "Package approved products for manual publication and post-launch measurement.", units: ["Etsy Officer", "Fiverr Officer", "Gumroad Officer", "Blog Officer"] },
];

export const scoreToBeatQuestions: ScoreToBeatQuestion[] = [
  { id: "buying-evidence", question: "Is there clear evidence people are buying this?", passCondition: "Public demand evidence, real buyer language, or a validated experiment exists." },
  { id: "original-quality", question: "Can THE GRID produce an original, high-quality version?", passCondition: "The offer can be differentiated without copying listings, trademarks, or protected work." },
  { id: "resource-fit", question: "Can we launch it within current resources?", passCondition: "Time, skill, tooling, compliance, and cost are within the current approved operating limits." },
  { id: "mission-fit", question: "Does it move Operation First Revenue forward?", passCondition: "The opportunity can plausibly create revenue evidence inside the active campaign window." },
];

export const opportunityIntelligenceQueue: OpportunityIntelligenceItem[] = [
  { id: "OI-001", opportunity: "Fiverr AI Automation Consulting", owner: "Fiverr Officer / Revenue Architect", confidence: "N/A", timeToLaunch: "Live", revenuePotential: "N/A", currentGate: "Experiment", nextAction: "Collect impressions, clicks, messages, consultations, orders, reviews, and revenue." },
  { id: "OI-002", opportunity: "Gumroad toolkit candidate", owner: "Publishing Scout", confidence: "N/A", timeToLaunch: "N/A", revenuePotential: "N/A", currentGate: "Research", nextAction: "Wait for banking clearance and documented demand evidence before launch preparation." },
  { id: "OI-003", opportunity: "Bounty opportunity shortlist", owner: "Bounty Hunter", confidence: "N/A", timeToLaunch: "N/A", revenuePotential: "N/A", currentGate: "Research", nextAction: "Create a public-opportunity shortlist with eligibility, deadline, risk, and effort notes." },
];

export const revenueCorpsProhibitions = [
  "No autonomous publishing.",
  "No platform scraping that violates terms.",
  "No account automation.",
  "No customer messaging.",
  "No spending money.",
  "No fake reviews.",
  "No copying listings, designs, products, trademarks, or copyrighted characters.",
  "No fabricated demand, revenue, or opportunity scores.",
];
