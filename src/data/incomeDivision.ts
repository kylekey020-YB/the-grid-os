export type IncomeRoomStatus = "Planned" | "Research Design" | "Manual Only";
export type IncomeAgentStatus = "Profile Planned";

export type IncomeRoom = {
  id: string;
  name: string;
  status: IncomeRoomStatus;
  purpose: string;
  manualWorkflow: string;
  safetyBoundary: string;
};

export type IncomeAgentProfile = {
  id: string;
  name: string;
  role: string;
  status: IncomeAgentStatus;
  futureFiles: string[];
};

export const incomeDivisionGoal = {
  currentGoal: "Reach first $10k/month milestone",
  currentPhase: "Research and workflow design",
  safetyState: "Planning only - no scraping, no autonomous posting, no live integrations",
  doctrine: ["Study patterns", "Create original products", "Validate demand", "Publish manually first", "Automate only repeated workflows"],
};

export const incomeRooms: IncomeRoom[] = [
  {
    id: "market-lab",
    name: "Market Lab",
    status: "Research Design",
    purpose: "Research digital product opportunities, Etsy categories, Fiverr gigs, affiliate topics, and demand patterns.",
    manualWorkflow: "Capture patterns, gaps, buyer language, and differentiation angles without copying listings.",
    safetyBoundary: "No scraping or platform ToS violations.",
  },
  {
    id: "design-forge",
    name: "Design Forge",
    status: "Planned",
    purpose: "Create original thumbnails, Etsy designs, 2D game assets, POD designs, and templates.",
    manualWorkflow: "Generate original assets from validated briefs and review them before use.",
    safetyBoundary: "No trademarks, copyrighted characters, or copied product designs.",
  },
  {
    id: "copy-room",
    name: "Copy Room",
    status: "Planned",
    purpose: "Draft listings, Fiverr gigs, customer replies, emails, captions, and blog posts.",
    manualWorkflow: "Draft copy for human review and platform-compliant publishing.",
    safetyBoundary: "No fake claims, fake reviews, or fabricated social proof.",
  },
  {
    id: "publishing-room",
    name: "Publishing Room",
    status: "Manual Only",
    purpose: "Track scheduled listings, posts, pins, uploads, and launch checklists.",
    manualWorkflow: "Use launch checklists and review gates before any public post or listing.",
    safetyBoundary: "No autonomous posting without review.",
  },
  {
    id: "revenue-war-room",
    name: "Revenue War Room",
    status: "Planned",
    purpose: "Track experiments, revenue, conversion, views, favorites, orders, and kill/scale decisions.",
    manualWorkflow: "Review real experiment evidence before scaling or killing a lane.",
    safetyBoundary: "No invented revenue, orders, analytics, or conversion metrics.",
  },
  {
    id: "archives-obsidian-vault",
    name: "Archives / Obsidian Vault",
    status: "Planned",
    purpose: "Store every decision, product idea, prompt, result, failure, and winning pattern.",
    manualWorkflow: "Preserve source-of-truth notes so future automation has evidence to learn from.",
    safetyBoundary: "No private platform data or secrets in public docs.",
  },
];

export const incomeAgentProfiles: IncomeAgentProfile[] = [
  { id: "designer", name: "Designer", role: "Original asset creation", status: "Profile Planned", futureFiles: ["SOUL.md", "playbooks", "memory", "personality", "Telegram placeholder", "recurring jobs placeholder"] },
  { id: "programmer", name: "Programmer", role: "Tools and workflow support", status: "Profile Planned", futureFiles: ["SOUL.md", "playbooks", "memory", "personality", "Telegram placeholder", "recurring jobs placeholder"] },
  { id: "writer", name: "Writer", role: "Listings, content, replies, and captions", status: "Profile Planned", futureFiles: ["SOUL.md", "playbooks", "memory", "personality", "Telegram placeholder", "recurring jobs placeholder"] },
  { id: "researcher", name: "Researcher", role: "Market pattern study and demand notes", status: "Profile Planned", futureFiles: ["SOUL.md", "playbooks", "memory", "personality", "Telegram placeholder", "recurring jobs placeholder"] },
  { id: "operator", name: "Operator", role: "Checklist execution and quality gates", status: "Profile Planned", futureFiles: ["SOUL.md", "playbooks", "memory", "personality", "Telegram placeholder", "recurring jobs placeholder"] },
  { id: "publisher", name: "Publisher", role: "Manual publication planning", status: "Profile Planned", futureFiles: ["SOUL.md", "playbooks", "memory", "personality", "Telegram placeholder", "recurring jobs placeholder"] },
];
