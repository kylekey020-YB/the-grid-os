# THE GRID UI Foundation

Current Version: v0.8.0

THE GRID is a frontend foundation for an AI operating system interface that coordinates validated business workflows. It is intentionally grounded: workstations are manual first, and automation is deferred until workflows show repeatable value.

## Stack

- React
- TypeScript
- Tailwind CSS
- shadcn/ui-style local primitives
- Lucide icons
- Framer Motion
- Vite

## Current Scope

This build is intentionally only the shell. It includes navigation, responsive layout, placeholder workstations, manual lifecycle states, and grounded content for future validated workflows. It does not include backend services, trading logic, autonomous agents, or fabricated analytics.

## Development Doctrine

- Reality before automation.
- Architecture before complexity.
- Evidence before expansion.
- Every module earns its place.
- Workstations precede Programs.
- Programs earn autonomy only after validated, repeated workflows.

## v0.1.1 Hardening

- Shared navigation registry for sidebar and mobile navigation
- Responsive bottom navigation for tablet and phone layouts
- First manual workstation surface: Shopify Opportunity Validator
- Commerce evidence board and validation gates
- Grounded program lifecycle states: Manual, Semi-Automated, Autonomous

## Run

    npm install
    npm run dev

## Build

    npm run build

## Check

    npm run check

## Suggested Milestone Commit

    git add .
    git commit -m "Harden THE GRID UI foundation"

## v0.2 Planning

- Mission Control monitor foundation is being added as a read-only command center.
- Watchers are read-only workstation monitors, not autonomous agents or Programs.
- COMMERCE_MISSION_STATUS.md is the Commerce handoff doc for Gate A and future validation work.

## v0.3 Planning

- Mission Control now targets a read-only local mission data bridge.
- npm run snapshot writes sanitized local state to public/mission-snapshot.json.
- npm run snapshot:watch refreshes the snapshot every 5 seconds for local review.
- The Mission Bus direction lets each project publish a small status.json file instead of forcing THE GRID to parse every log directly.
- The bridge reports missing data as unknown or as tickets; it does not fabricate metrics or control external systems.

## v0.4 Visual Identity

- Added the reusable visual operating system foundation.
- Added layered animated background, perspective grid environment, division glow tokens, officer badge primitives, glass panel refinement, and design-system documentation.
- This milestone is presentation only and does not add mission logic, backend behavior, APEX/CLU changes, or autonomous systems.

## v0.5 Income Division

- Added Income Division planning foundation for Etsy digital products, Fiverr productized services, and affiliate / SEO content assets.
- Added Market Lab, Design Forge, Copy Room, Publishing Room, Revenue War Room, Archives / Obsidian Vault, and Agent Profiles as planned rooms.
- Added REVENUE ARCHITECT as a read-only watcher.
- Added INCOME_DIVISION_STATUS.md as the source-of-truth status document.
- This milestone is planning + UI foundation only: no scraping, marketplace integrations, Telegram bots, autonomous posting, copied products, fake reviews, or fake revenue metrics.

## v0.6 World Map + Council

- Added World Map as a visual information architecture layer for THE GRID districts and arenas.
- Added Council as a read-only advisory layer for AI officers.
- Clarified APEX and CLU as independent Programs inside their own arenas.
- Added world-building spaces: The Lounge, Strategy Table, Hall of Fame, and Innovation Lab.
- Added typed static data in src/data/gridWorld.ts and src/data/council.ts.
- Research folders and generated outputs are intentionally gitignored.
- This milestone is UI/worldbuilding only: no backend, autonomous execution, secrets, APEX/CLU changes, live integrations, or fake metrics.

## v0.7 Income Factory

- Added Income Division page as an assisted revenue factory foundation.
- Added Market Lab, Offer Builder, Asset Factory, Fiverr Room, Etsy Room, Publishing Room, Revenue War Room, and Compliance Sentinel UI sections.
- Added typed factory data in src/data/incomeFactory.ts.
- Added INCOME_FACTORY_STATUS.md as the source-of-truth status document.
- Updated Mission Control, World Map, and Council with REVENUE ARCHITECT, DESIGN FORGE, COPY ROOM, PUBLISHING ROOM, and SENTINEL references.
- This milestone is UI/workflow foundation only: no autonomous publishing, platform scraping violations, fake reviews, trademark/copyright theft, auto-DMs, ad spend, account automation, or spending money.

## v0.8 Revenue Intelligence

- Added Revenue Intelligence page as a read-only opportunity intelligence layer.
- Added Market Scanner, Opportunity Pipeline, Revenue Score, Experiment Tracker, Revenue Dashboard, Hall of Wins, Opportunity Radar, Playbook Library, and The Senate.
- Added typed static data in src/data/revenueIntelligence.ts and src/data/senate.ts.
- Updated Mission Control, Income Division, World Map, and Council to reference the Revenue Intelligence Engine.
- Unknown values remain Unknown; no revenue, profit, ROI, published count, or milestone is fabricated.
- This milestone is read-only intelligence only: no autonomous publishing, marketplace interaction, ToS-violating scraping, account automation, purchasing, customer messaging, or fake metrics.

## Documentation

- [PROJECT_LOG.md](PROJECT_LOG.md)
- [AI_HANDOFF.md](AI_HANDOFF.md)
- [VERSION.md](VERSION.md)
- [CHANGELOG.md](CHANGELOG.md)
- [COMMERCE_MISSION_STATUS.md](COMMERCE_MISSION_STATUS.md)
- [docs/MISSION_DATA_BRIDGE.md](docs/MISSION_DATA_BRIDGE.md)
- [design-system/README.md](design-system/README.md)
