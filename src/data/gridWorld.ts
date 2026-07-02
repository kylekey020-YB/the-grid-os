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
  { id: "income-division", emoji: "💸", name: "Income Division", purpose: "Assisted revenue factory for original offers, manual publishing, and real result tracking.", currentStatus: "Manual Only", connectedWatcher: "REVENUE ARCHITECT / SENTINEL", accent: "emerald" },
  { id: "publishing-room", emoji: "📣", name: "Publishing Room", purpose: "Prepared posts, listings, launch checklists, approval gates, and manual action tracking.", currentStatus: "Manual Only", connectedWatcher: "PUBLISHING ROOM / SENTINEL", accent: "magenta" },
  { id: "archives-sector", emoji: "📚", name: "Archives Sector", purpose: "Knowledge, decisions, prompts, mission logs, and validated patterns.", currentStatus: "Planned", connectedWatcher: "ARCHIVIST", accent: "blue" },
  { id: "gauntlet-lab", emoji: "🧪", name: "Gauntlet Lab", purpose: "Research and backtesting surfaces for honest validation.", currentStatus: "Research", connectedWatcher: "GAUNTLET", accent: "emerald" },
  { id: "war-room", emoji: "⚔️", name: "War Room", purpose: "Mission decisions, strategic reviews, and doctrine checkpoints.", currentStatus: "Read-Only", connectedWatcher: "ZENITH", accent: "purple" },
  { id: "grid-core", emoji: "🌐", name: "Grid Core", purpose: "System health, shell integrity, documentation, and version awareness.", currentStatus: "Active", connectedWatcher: "GRID CORE", accent: "cyan" },
  { id: "the-lounge", emoji: "🍸", name: "The Lounge", purpose: "Wins, milestones, completed missions, and honest retrospectives.", currentStatus: "Planned", connectedWatcher: "ARCHIVIST", accent: "magenta" },
  { id: "strategy-table", emoji: "🎲", name: "Strategy Table", purpose: "Business, trading, and AI scenario planning before ticket creation.", currentStatus: "Planned", connectedWatcher: "ZENITH", accent: "purple" },
];

export const worldSpaces: WorldSpace[] = [
  { id: "lounge", emoji: "🍸", name: "The Lounge", purpose: "Review wins, milestones, completed missions, and lessons learned.", status: "Planned", safetyNote: "Celebration is retrospective only; no fake wins or invented milestones.", accent: "magenta" },
  { id: "strategy-table", emoji: "🎲", name: "Strategy Table", purpose: "Explore new business, trading, and AI scenarios before turning them into tickets.", status: "Planned", safetyNote: "Brainstorming does not authorize implementation.", accent: "purple" },
  { id: "hall-of-fame", emoji: "🏆", name: "Hall of Fame", purpose: "Track major validated wins once they happen.", status: "Parked", safetyNote: "Only validated wins belong here; no fabricated revenue, trades, or milestones.", accent: "gold" },
  { id: "innovation-lab", emoji: "🧪", name: "Innovation Lab", purpose: "Store experimental concepts not ready for implementation.", status: "Planned", safetyNote: "Ideas remain parked until a mission prompt authorizes a milestone.", accent: "emerald" },
];

export const worldMapDoctrine = "Districts organize the world. Officers advise. Programs execute. Mission Commander decides.";
