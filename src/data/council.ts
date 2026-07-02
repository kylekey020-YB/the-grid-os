import type { WorldStatus } from "@/data/gridWorld";

export type OfficerConfidence = "Low" | "Medium" | "High";

export type CouncilOfficer = {
  id: string;
  emoji: string;
  name: string;
  role: string;
  division: string;
  personalityStyle: string;
  watches: string;
  currentSignal: string;
  recommendation: string;
  confidence: OfficerConfidence;
  evidenceSource: string;
  status: WorldStatus;
};

export const councilDoctrine = "Officers advise. Programs execute. Mission Commander decides.";

export const councilOfficers: CouncilOfficer[] = [
  { id: "zenith", emoji: "🧠", name: "ZENITH", role: "Chief Systems Architect", division: "Grid Core", personalityStyle: "Strategic, doctrine-focused, systems-first", watches: "Architecture, sequencing, cross-project integration", currentSignal: "Milestone-driven development remains the safest path.", recommendation: "Keep v0.6 as worldbuilding and information architecture only.", confidence: "High", evidenceSource: "Roadmap and project doctrine", status: "Read-Only" },
  { id: "sentinel", emoji: "🛡️", name: "SENTINEL", role: "Risk & Safety Officer", division: "Safety", personalityStyle: "Conservative, constraint-aware, precise", watches: "Execution bans, secret exposure, platform compliance", currentSignal: "No backend or autonomous execution is authorized.", recommendation: "Keep all new surfaces advisory and static.", confidence: "High", evidenceSource: "Mission directive", status: "Read-Only" },
  { id: "apex-warden", emoji: "⚡", name: "APEX WARDEN", role: "Trading Operations Analyst", division: "APEX Arena", personalityStyle: "Data-first, skeptical, disciplined", watches: "APEX paper research and entry-timing evidence", currentSignal: "APEX remains separate and untouched by v0.6.", recommendation: "Represent APEX as a program arena without modifying APEX files.", confidence: "High", evidenceSource: "APEX handoff doctrine", status: "Read-Only" },
  { id: "clu-striker", emoji: "🔴", name: "CLU STRIKER", role: "Moonshot Experiment Analyst", division: "CLU Arena", personalityStyle: "Fast-pattern observer, risk-aware", watches: "CLU paper moonshot experiments", currentSignal: "CLU remains paper/research only.", recommendation: "Show CLU as its own arena, not a live execution system.", confidence: "High", evidenceSource: "CLU handoff doctrine", status: "Read-Only" },
  { id: "merchant-forge", emoji: "🛒", name: "MERCHANT FORGE", role: "Commerce Development Officer", division: "Commerce District", personalityStyle: "Practical, validation-first, margin-aware", watches: "Commerce gates, sourcing economics, product validation", currentSignal: "Manual validation remains the controlling gate.", recommendation: "Keep Commerce in the district model as manual and evidence-led.", confidence: "High", evidenceSource: "COMMERCE_MISSION_STATUS.md", status: "Read-Only" },
  { id: "quartermaster", emoji: "📦", name: "QUARTERMASTER", role: "Supply Chain Officer", division: "Commerce District", personalityStyle: "Detail-oriented, constraint-focused", watches: "Supplier unknowns, inventory risks, fulfillment constraints", currentSignal: "No supplier or inventory action is authorized by v0.6.", recommendation: "Represent supply-chain review as advisory only.", confidence: "High", evidenceSource: "Commerce Gate doctrine", status: "Read-Only" },
  { id: "revenue-architect", emoji: "💸", name: "REVENUE ARCHITECT", role: "Income Systems Strategist", division: "Income Division", personalityStyle: "Originality-focused, experiment-driven, platform-aware", watches: "Etsy, Fiverr, affiliate, digital product, and creative workflow experiments", currentSignal: "Income Factory is an assisted workflow foundation.", recommendation: "Research demand, create original offers, publish manually, and track real results.", confidence: "Medium", evidenceSource: "INCOME_DIVISION_STATUS.md", status: "Read-Only" },
  { id: "design-forge", emoji: "🎨", name: "DESIGN FORGE", role: "Creative Asset Officer", division: "Income Division", personalityStyle: "Original, visual, brand-aware", watches: "Asset requests, thumbnail systems, Etsy designs, 2D assets, templates", currentSignal: "Asset requests require original design briefs.", recommendation: "Create differentiated assets only after demand and compliance review.", confidence: "Medium", evidenceSource: "src/data/incomeFactory.ts", status: "Read-Only" },
  { id: "copy-room", emoji: "✍️", name: "COPY ROOM", role: "Offer Copy Officer", division: "Income Division", personalityStyle: "Clear, conversion-aware, compliance-sensitive", watches: "Offer titles, listings, Fiverr gigs, captions, affiliate outlines", currentSignal: "Copy drafts are prepared for human review only.", recommendation: "Avoid fake claims, copied listings, and fabricated social proof.", confidence: "Medium", evidenceSource: "src/data/incomeFactory.ts", status: "Read-Only" },
  { id: "publishing-room", emoji: "📣", name: "PUBLISHING ROOM", role: "Manual Publishing Coordinator", division: "Income Division", personalityStyle: "Checklist-driven, cautious, schedule-aware", watches: "Prepared posts, listings, launch checklists, approval gates", currentSignal: "Manual action required for every publishable item.", recommendation: "Publish only after Sentinel checks and Mission Commander approval.", confidence: "High", evidenceSource: "INCOME_FACTORY_STATUS.md", status: "Read-Only" },
  { id: "gauntlet", emoji: "🧪", name: "GAUNTLET", role: "Research & Validation Officer", division: "Gauntlet Lab", personalityStyle: "Methodical, falsification-oriented", watches: "Backtests, assumptions, validation quality", currentSignal: "Research must not be treated as proven edge.", recommendation: "Keep experiment claims tied to evidence quality.", confidence: "High", evidenceSource: "Research doctrine", status: "Read-Only" },
  { id: "archivist", emoji: "📚", name: "ARCHIVIST", role: "Knowledge Officer", division: "Archives Sector", personalityStyle: "Careful, memory-oriented, source-of-truth focused", watches: "Docs, handoffs, decisions, logs", currentSignal: "Documentation remains the project memory layer.", recommendation: "Store decisions and lessons before adding automation.", confidence: "High", evidenceSource: "PROJECT_LOG.md and AI_HANDOFF.md", status: "Read-Only" },
  { id: "grid-core", emoji: "🌐", name: "GRID CORE", role: "Infrastructure Officer", division: "Grid Core", personalityStyle: "Stable, structural, integration-aware", watches: "Shell integrity, navigation, responsive layout", currentSignal: "World Map and Council extend information architecture.", recommendation: "Keep new pages static, typed, and responsive.", confidence: "High", evidenceSource: "Frontend source tree", status: "Read-Only" },
];
