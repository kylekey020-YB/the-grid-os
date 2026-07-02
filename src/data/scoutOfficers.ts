export type ScoutStatus = "Planned / Research Only" | "Planned / Advisory Only";
export type ScoutAccent = "emerald" | "cyan" | "amber" | "red";

export type ScoutOfficer = {
  id: string;
  emoji: string;
  name: string;
  role: string;
  reportsTo: string;
  status: ScoutStatus;
  accent: ScoutAccent;
  mission: string;
  watches: string[];
  output: string;
  prohibitedActions: string[];
  evidenceRules: string[];
};

export const scoutDoctrine = [
  "Scouts report to Revenue Architect, not directly to Mission Commander.",
  "Scouts gather public evidence and create reports only.",
  "Scouts do not publish, message customers, spend money, or scrape against platform rules.",
  "Risk Scout also reports risk signals to Sentinel.",
  "Scout findings must remain Unknown or N/A until evidence exists.",
];

const commonProhibited = [
  "No publishing.",
  "No customer messaging.",
  "No spending money.",
  "No account automation.",
  "No scraping against platform rules.",
  "No copied listings, designs, reviews, or claims.",
];

export const scoutOfficers: ScoutOfficer[] = [
  {
    id: "market-scout",
    emoji: "🕵️",
    name: "Market Scout",
    role: "Discovers marketplace opportunities.",
    reportsTo: "Revenue Architect",
    status: "Planned / Research Only",
    accent: "cyan",
    mission: "Identify Fiverr, Etsy, Gumroad, affiliate, and digital product opportunity patterns using public evidence.",
    watches: ["Fiverr categories", "Etsy categories", "Gumroad products", "Affiliate topics", "Digital product patterns"],
    output: "Opportunity scout report with platform, category, demand notes, competition notes, and unknowns.",
    prohibitedActions: commonProhibited,
    evidenceRules: ["Public data only.", "Record source notes.", "Flag every unknown.", "Do not copy products or listings."],
  },
  {
    id: "demand-scout",
    emoji: "🧲",
    name: "Demand Scout",
    role: "Identifies buyer pain, search intent, and customer language.",
    reportsTo: "Revenue Architect",
    status: "Planned / Research Only",
    accent: "emerald",
    mission: "Extract buyer language, pain patterns, search intent, and repeated demand clues for original offers.",
    watches: ["Buyer pain", "Search intent", "Customer language", "Review themes", "Forum questions"],
    output: "Demand evidence report with pain language, intent notes, audience, and confidence boundaries.",
    prohibitedActions: commonProhibited,
    evidenceRules: ["Use public evidence only.", "Paraphrase buyer language unless quoting short permitted snippets.", "Separate signal from assumption.", "Keep confidence low until repeated patterns exist."],
  },
  {
    id: "risk-scout",
    emoji: "🛡️",
    name: "Risk Scout",
    role: "Flags saturation, copyright/trademark risk, ToS risk, and weak margins.",
    reportsTo: "Sentinel and Revenue Architect",
    status: "Planned / Advisory Only",
    accent: "red",
    mission: "Review opportunity risk before Mission Commander approves experiments or publishing actions.",
    watches: ["Saturation", "Copyright risk", "Trademark risk", "Platform ToS risk", "Weak margin", "Fulfillment risk"],
    output: "Risk report with blockers, caution notes, margin concerns, and approval gate recommendations.",
    prohibitedActions: commonProhibited,
    evidenceRules: ["Flag risk without blocking Commander decisions by default.", "Do not provide legal conclusions.", "Escalate unclear IP or ToS issues.", "Mark unresolved margin inputs as Unknown."],
  },
];
