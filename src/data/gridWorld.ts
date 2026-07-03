export type WorldStatus = "Active" | "Planned" | "Research" | "Parked" | "Pending Integration" | "Manual Only" | "Read-Only";
export type DistrictAccent = "cyan" | "blue" | "purple" | "magenta" | "red" | "gold" | "emerald";

export type GridDistrict = {
  id: string;
  emoji: string;
  name: string;
  purpose: string;
  currentStatus: WorldStatus;
  connectedWatcher: string;
  accent: DistrictAccent;
};

export type WorldSpace = {
  id: string;
  emoji: string;
  name: string;
  purpose: string;
  status: WorldStatus;
  safetyNote: string;
  accent: DistrictAccent;
};

export const gridDistricts: GridDistrict[] = [
  { id: "apex-arena", emoji: "⚡", name: "APEX Arena", purpose: "Disciplined trading program research arena.", currentStatus: "Research", connectedWatcher: "APEX WARDEN", accent: "cyan" },
  { id: "clu-arena", emoji: "🔴", name: "CLU Arena", purpose: "Moonshot striker program arena for paper-only experiments.", currentStatus: "Research", connectedWatcher: "CLU STRIKER", accent: "red" },
  { id: "commerce-district", emoji: "🛒", name: "Commerce District", purpose: "Validation gates, sourcing economics, and manual product review.", currentStatus: "Manual Only", connectedWatcher: "MERCHANT FORGE", accent: "gold" },
  { id: "revenue-corps", emoji: "💸", name: "Revenue Corps", purpose: "Operating department for scout reports, original product creation, manual launch preparation, and revenue evidence.", currentStatus: "Manual Only", connectedWatcher: "REVENUE ARCHITECT", accent: "emerald" },
  { id: "publishing-room", emoji: "📣", name: "Publishing Room", purpose: "Prepared posts, listings, launch checklists, approval gates, and manual action tracking.", currentStatus: "Manual Only", connectedWatcher: "PUBLISHING ROOM / SENTINEL", accent: "magenta" },
  { id: "archives-sector", emoji: "📚", name: "Archives Sector", purpose: "Knowledge, decisions, prompts, mission logs, and validated patterns.", currentStatus: "Planned", connectedWatcher: "ARCHIVIST", accent: "blue" },
  { id: "gauntlet-lab", emoji: "🧪", name: "Gauntlet Lab", purpose: "Research and backtesting surfaces for honest validation.", currentStatus: "Research", connectedWatcher: "GAUNTLET", accent: "emerald" },
  { id: "war-room", emoji: "⚔️", name: "War Room", purpose: "Mission decisions, strategic reviews, and doctrine checkpoints.", currentStatus: "Read-Only", connectedWatcher: "ZENITH", accent: "purple" },
  { id: "grid-core", emoji: "🌐", name: "Grid Core", purpose: "System health, shell integrity, documentation, and version awareness.", currentStatus: "Active", connectedWatcher: "GRID CORE", accent: "cyan" },
  { id: "quant-research-scouts", emoji: "QS", name: "Quant Research Scouts", purpose: "Research-only intelligence engine for ORION, PAIRFORGE, VOLTA, ATLAS, and WRAITH strategy discovery.", currentStatus: "Research", connectedWatcher: "GAUNTLET / TRADING RESEARCH CORPS", accent: "blue" },
  { id: "research-scheduler-district", emoji: "RS", name: "Research Scheduler", purpose: "Semi-autonomous schedule layer for Revenue Corps and Quant Research Corps report missions.", currentStatus: "Research", connectedWatcher: "ZENITH / REVENUE ARCHITECT / GAUNTLET", accent: "cyan" },
  { id: "opportunity-radar-district", emoji: "🎯", name: "Opportunity Radar", purpose: "Permanent Revenue Corps opportunity queue, ranking, filters, experiments, forecasts, marketplace intelligence, and DealFlow incubation.", currentStatus: "Manual Only", connectedWatcher: "REVENUE ARCHITECT", accent: "emerald" },
  { id: "scout-reports-district", emoji: "📡", name: "Scout Reports", purpose: "Structured manual/public-evidence reports from Etsy, Fiverr, Gumroad, Asset, Bounty, Trend, Review, and Pricing Scouts.", currentStatus: "Manual Only", connectedWatcher: "REVENUE ARCHITECT", accent: "cyan" },
  { id: "revenue-corps-scout-layer", emoji: "🛰️", name: "Revenue Corps Scout Layer", purpose: "Research-only scouts for marketplace, publishing, bounty, asset, affiliate, trend, review, and pricing intelligence.", currentStatus: "Planned", connectedWatcher: "MARKETPLACE SCOUT / PUBLISHING SCOUT / BOUNTY HUNTER", accent: "emerald" },
  { id: "revenue-intelligence", emoji: "📈", name: "Revenue Intelligence", purpose: "Read-only market scanner, opportunity pipeline, revenue scoring, experiment tracking, Senate advice, and playbook library.", currentStatus: "Research", connectedWatcher: "REVENUE ARCHITECT / GAUNTLET / SENTINEL", accent: "emerald" },
  { id: "launch-center", emoji: "🚀", name: "Launch Center", purpose: "Live products, revenue timeline, orders, reviews, milestones, launch log, and marketing queue.", currentStatus: "Active", connectedWatcher: "REVENUE ARCHITECT / HERMES", accent: "emerald" },
  { id: "bridge-district", emoji: "🌉", name: "The Bridge", purpose: "Primary Phase II operations surface for officer network, event registry, mission feed, approvals, division health, and executive brief state.", currentStatus: "Active", connectedWatcher: "GRID CORE / ZENITH", accent: "cyan" },
  { id: "academy-district", emoji: "🏛", name: "The Academy", purpose: "Institutional learning campus for doctrine, playbooks, lessons, after-action reviews, evolution records, and command history.", currentStatus: "Active", connectedWatcher: "ARCHIVIST / ZENITH", accent: "gold" },
  { id: "the-lounge", emoji: "🍸", name: "The Lounge", purpose: "Wins, milestones, completed missions, and honest retrospectives.", currentStatus: "Planned", connectedWatcher: "ARCHIVIST", accent: "magenta" },
  { id: "strategy-table", emoji: "🎲", name: "Strategy Table", purpose: "Business, trading, and AI scenario planning before ticket creation.", currentStatus: "Planned", connectedWatcher: "ZENITH", accent: "purple" },
];

export const worldSpaces: WorldSpace[] = [
  { id: "lounge", emoji: "🍸", name: "The Lounge", purpose: "Review wins, milestones, completed missions, and lessons learned.", status: "Planned", safetyNote: "Celebration is retrospective only; no fake wins or invented milestones.", accent: "magenta" },
  { id: "strategy-table", emoji: "🎲", name: "Strategy Table", purpose: "Explore new business, trading, and AI scenarios before turning them into tickets.", status: "Planned", safetyNote: "Brainstorming does not authorize implementation.", accent: "purple" },
  { id: "hall-of-fame", emoji: "🏆", name: "Hall of Fame", purpose: "Track major validated wins once they happen.", status: "Parked", safetyNote: "Only validated wins belong here; no fabricated revenue, trades, or milestones.", accent: "gold" },
  { id: "innovation-lab", emoji: "🧪", name: "Innovation Lab", purpose: "Store experimental concepts not ready for implementation.", status: "Planned", safetyNote: "Ideas remain parked until a mission prompt authorizes a milestone.", accent: "emerald" },
  { id: "identity-forge", emoji: "🛡️", name: "Identity Forge", purpose: "Company Seal, campaign patches, division insignias, officer badges, and mission ribbons.", status: "Active", safetyNote: "Identity assets are presentation and history only; they do not claim business performance.", accent: "gold" },
  { id: "nervous-system", emoji: "🛰", name: "Nervous System", purpose: "Typed architecture for Officer -> Event -> Mission Bus -> Mission Control -> Executive Brief.", status: "Active", safetyNote: "No backend, networking, polling, account action, or autonomous execution is connected.", accent: "cyan" },
  { id: "scout-report-archive", emoji: "📡", name: "Scout Report Archive", purpose: "Preserve manual demand reports before they become products, experiments, playbooks, or failures.", status: "Manual Only", safetyNote: "Reports are evidence placeholders until sources are recorded; no fake market data is allowed.", accent: "cyan" },
  { id: "academy-wing", emoji: "🏛", name: "The Academy", purpose: "Convert lessons into permanent institutional knowledge.", status: "Active", safetyNote: "The Academy records lessons, not fake wins, invented failures, or unearned playbooks.", accent: "gold" },
];

export const worldMapDoctrine = "Districts organize the world. Officers advise. Programs execute. Mission Commander decides.";
