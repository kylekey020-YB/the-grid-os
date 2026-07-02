# THE GRID UI Foundation

Current Version: v2.1.0

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

## v0.9 Hermes Agent Integration Plan

- Added Hermes Agents page as a read-only preparation layer for future specialist profiles.
- Added typed static data in src/data/hermesAgents.ts.
- Added HERMES_AGENT_STATUS.md and docs/HERMES_AGENT_ARCHITECTURE.md.
- Defined profiles for ZENITH, REVENUE ARCHITECT, DESIGN FORGE, COPY ROOM, and SENTINEL.
- Defined explicit autonomy levels from Level 1 Draft through Level 5 Money/actions forbidden for now.
- Updated Mission Control, Council, and Revenue Intelligence with Hermes profile references.
- This milestone prepares future profile identity and approval gates only: no connected accounts, Telegram bots, autonomous publishing, customer messaging, spending, trading, account automation, or marketplace interaction.

## v1.2 Founding Constitution

- Added THE_GRID_CONSTITUTION.md as the foundational governing document of THE GRID.
- Added FOUNDING_COUNCIL_BRIEF.md as the first-read onboarding packet for future AI and human contributors.
- Consolidated established doctrine for officers, Programs, missions, approvals, institutional memory, engineering, and amendments.
- This milestone is documentation/governance only: no automation, scraping, account actions, backend, live integrations, or autonomous execution.

## v1.3 Approval System + Decision Records

- Added first-class approval objects for irreversible action review.
- Added APPROVAL_SYSTEM.md and DECISION_RECORDS.md.
- Added src/data/approvalSystem.ts with AR-001 and DR-001.
- Added Approval Queue and Decision Records surfaces to Revenue Intelligence.
- Added Approval Queue Snapshot to Mission Control.
- This milestone is read-only governance/UI only: no backend, persistence, live approvals, account actions, spending, publishing, scraping, or automation.

## v1.4 Mission Pipeline

- Added Mission Pipeline as a first-class page and operating workflow.
- Added src/data/missionPipeline.ts and MISSION_PIPELINE.md.
- Added Mission Pipeline navigation and Mission Control snapshot.
- Established the company sequence: Idea, Research, Evidence Score, Approval, Experiment, Revenue, Scale, Playbook, Automation, Division, Program, Institutional Knowledge.
- This milestone is read-only workflow architecture only: no backend, persistence, live stage advancement, account action, spending, publishing, scraping, or automation.

## v1.5 Operations Floor

- Mission Control is now the unified Operations Floor instead of a page collection.
- Added a typed Mission Event Bus in src/data/missionEvents.ts.
- Added local Operations Feed, Officer Presence Cards, Approval Queue, Decision Records, Mission Pipeline Snapshot, Program Status, and Current Executive Brief to Mission Control.
- Added OPERATIONS_FLOOR.md as the source-of-truth architecture note.
- This milestone is read-only: no backend, polling, networking, autonomous execution, live approval execution, or fabricated activity.

## v1.6 Operations Intelligence

- Added standardized company KPIs in src/data/companyKpis.ts.
- Added Company Health panel to Mission Control.
- Added division KPI reports for Income Division, Commerce, APEX, CLU, and Operations.
- Unknown values remain N/A until real evidence exists.
- Added OPERATIONS_INTELLIGENCE.md as the source-of-truth KPI note.
- This milestone is typed static reporting only: no external reads, account connections, jobs, automation, or fake metrics.

## v1.7 The Academy

- Added The Academy as the permanent institutional learning division.
- Added src/data/academy.ts with typed Academy wings, Founding Day, Hall of Command timeline, and Evolution Lab records.
- Added src/pages/Academy.tsx.
- Added Academy navigation and World Map district presence.
- Added Mission Control Academy snapshot.
- The Academy records lessons, doctrine, playbooks, master classes, wins, failures, evolution records, and command history without fabricating achievements or metrics.
- This milestone is typed static UI only: no backend, persistence, fake wins, fake failures, fake metrics, or autonomous learning system.

## v2.0 The GRID Nervous System

- Declared Phase II: Living Systems.
- Added The Bridge as the primary Phase II operations surface.
- Added src/data/eventRegistry.ts for Mission Bus event channels.
- Added src/data/officerNetwork.ts for Council Network operational state.
- Added src/data/bridge.ts for Bridge panels and metrics.
- Added src/data/chronicle.ts for weekly company history records.
- Added NERVOUS_SYSTEM_STATUS.md.
- Added Article 0 - The Mission to THE_GRID_CONSTITUTION.md.
- Integrated Chronicle into The Academy.
- Integrated Bridge/Nervous System into Mission Control and World Map.
- This milestone is typed architecture only: no backend, networking, polling, external writes, account actions, autonomous execution, or fake live activity.

## v2.1 Identity System + Scout Agent Layer

- Added reusable identity assets for Company Seal, Founding Day Plaque, Campaign Patch, Division Insignias, Officer Badge shell, and Mission Ribbons.
- Added src/data/identitySystem.ts and src/components/identity/GridIdentity.tsx.
- Added Scout Officer typed data in src/data/scoutOfficers.ts.
- Added Market Scout, Demand Scout, and Risk Scout as planned/read-only research officers.
- Integrated Scouts into Mission Control, The Bridge, Council, Revenue Intelligence, World Map, and Officer Network.
- Added IDENTITY_SYSTEM_STATUS.md and SCOUT_OFFICER_STATUS.md.
- Scouts report to Revenue Architect; Risk Scout also reports risk signals to Sentinel.
- This milestone is UI and typed data only: no scraping against platform rules, no publishing, no customer messaging, no spending, no account actions, and no fake metrics.

## Documentation

- [FOUNDING_COUNCIL_BRIEF.md](FOUNDING_COUNCIL_BRIEF.md)
- [NERVOUS_SYSTEM_STATUS.md](NERVOUS_SYSTEM_STATUS.md)
- [SCOUT_OFFICER_STATUS.md](SCOUT_OFFICER_STATUS.md)
- [IDENTITY_SYSTEM_STATUS.md](IDENTITY_SYSTEM_STATUS.md)
- [THE_GRID_CONSTITUTION.md](THE_GRID_CONSTITUTION.md)
- [MISSION_PIPELINE.md](MISSION_PIPELINE.md)
- [OPERATIONS_INTELLIGENCE.md](OPERATIONS_INTELLIGENCE.md)
- [OPERATIONS_FLOOR.md](OPERATIONS_FLOOR.md)
- [APPROVAL_SYSTEM.md](APPROVAL_SYSTEM.md)
- [DECISION_RECORDS.md](DECISION_RECORDS.md)
- [PROJECT_LOG.md](PROJECT_LOG.md)
- [AI_HANDOFF.md](AI_HANDOFF.md)
- [VERSION.md](VERSION.md)
- [CHANGELOG.md](CHANGELOG.md)
- [COMMERCE_MISSION_STATUS.md](COMMERCE_MISSION_STATUS.md)
- [docs/MISSION_DATA_BRIDGE.md](docs/MISSION_DATA_BRIDGE.md)
- [HERMES_AGENT_STATUS.md](HERMES_AGENT_STATUS.md)
- [docs/HERMES_AGENT_ARCHITECTURE.md](docs/HERMES_AGENT_ARCHITECTURE.md)
- [design-system/README.md](design-system/README.md)
