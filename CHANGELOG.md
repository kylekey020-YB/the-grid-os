# Changelog

All notable changes to THE GRID will be documented in this file.

Current Version: v2.1.0

## v2.1.0 - Identity System + Scout Agent Layer

### Added

- src/data/identitySystem.ts
- src/components/identity/GridIdentity.tsx
- src/data/scoutOfficers.ts
- IDENTITY_SYSTEM_STATUS.md
- SCOUT_OFFICER_STATUS.md
- Company Seal
- Founding Day Plaque
- Campaign Patch: Operation First Revenue
- Division Insignias
- Officer Badge shell
- Mission Ribbons
- Market Scout
- Demand Scout
- Risk Scout
- Scout surfaces in Mission Control, The Bridge, Council, Revenue Intelligence, World Map, and Officer Network

### Changed

- Canonical documentation version updated to v2.1.0
- The Academy now includes the reusable identity system section
- The Bridge includes company seal and scout network panel
- Revenue Intelligence and Council include the Scout Officer layer

### Safety Boundary

- Typed data and UI only
- No publishing, customer messaging, spending, account automation, scraping against platform rules, copied listings/products/designs/reviews, or fake metrics

## v2.0.0 - THE GRID Nervous System

### Added

- The Bridge page
- src/data/eventRegistry.ts
- src/data/officerNetwork.ts
- src/data/bridge.ts
- src/data/chronicle.ts
- NERVOUS_SYSTEM_STATUS.md
- Event Registry
- Officer Network
- Chronicle section in The Academy
- Bridge/Nervous System entries in World Map
- Phase II Bridge preview in Mission Control
- Article 0 - The Mission in THE_GRID_CONSTITUTION.md

### Changed

- Canonical documentation version updated to v2.0.0
- PROJECT_LOG now declares Phase I Foundation complete
- README, PROJECT_LOG, VERSION, AI_HANDOFF, FOUNDING_COUNCIL_BRIEF, and THE_GRID_CONSTITUTION now reference Phase II Living Systems
- Mission Control now frames the operating pattern as Officer -> Event -> Mission Bus -> Mission Control -> Executive Brief

### Safety Boundary

- Typed architecture only
- No backend, networking, polling, external writes, account actions, autonomous execution, or fabricated live activity

## v1.7.0 - The Academy

### Added

- The Academy page
- src/data/academy.ts typed Academy data
- Founding Hall
- Playbooks
- Master Classes
- Hall of Wins
- Hall of Failures
- Evolution Lab
- Hall of Command
- Founding Day record for July 2, 2026
- Academy navigation entry
- Academy World Map district and world space
- Mission Control Academy snapshot

### Changed

- Canonical documentation version updated to v1.7.0
- README, PROJECT_LOG, VERSION, AI_HANDOFF, FOUNDING_COUNCIL_BRIEF, and THE_GRID_CONSTITUTION now reference The Academy
- Mission Control now surfaces institutional learning alongside experiments and priorities

### Safety Boundary

- Typed static UI only
- No backend, persistence, fake wins, invented failures, fake metrics, autonomous learning system, or claims that unvalidated playbooks are proven

## v1.6.0 - Operations Intelligence Layer

### Added

- src/data/companyKpis.ts
- Company Health panel in Mission Control
- Standardized division KPI reports for Income Division, Commerce, APEX, CLU, and Operations
- OPERATIONS_INTELLIGENCE.md

### Changed

- Mission Control now presents company performance through typed KPI data
- Canonical documentation version updated to v1.6.0
- README, PROJECT_LOG, VERSION, AI_HANDOFF, FOUNDING_COUNCIL_BRIEF, and THE_GRID_CONSTITUTION now reference Operations Intelligence

### Safety Boundary

- Typed static reporting only
- Unknown values remain N/A
- No external reads, account connections, jobs, automation, or fabricated metrics

## v1.5.0 - The Operations Floor

### Added

- src/data/missionEvents.ts typed Mission Event Bus model
- src/data/officerPresence.ts
- Operations Feed in Mission Control
- Officer Presence Cards
- Current Executive Brief
- Operations Floor layout with approvals, decisions, pipeline, and program status consolidated into Mission Control
- OPERATIONS_FLOOR.md

### Changed

- Mission Control homepage is now the unified Operations Floor instead of a collection of isolated snapshots
- Event rendering is driven by typed local data instead of page-specific coupling

### Safety Boundary

- Read-only command surface only
- No backend, polling, networking, autonomous execution, live approvals, external integrations, or fabricated activity

## v1.4.0 - Mission Pipeline

### Added

- Mission Pipeline page
- src/data/missionPipeline.ts
- MISSION_PIPELINE.md
- Mission Pipeline navigation entry
- Mission Control Mission Pipeline Snapshot
- Typed pipeline stages from Idea through Institutional Knowledge
- Current pipeline items for Operation First Revenue and Bambu A1 Rescue Kit

### Changed

- Canonical documentation version updated to v1.4.0
- THE_GRID_CONSTITUTION.md now states that every idea enters the Mission Pipeline and nothing skips it
- README, PROJECT_LOG, VERSION, and AI_HANDOFF now reference the Mission Pipeline doctrine

### Safety Boundary

- Read-only workflow architecture only
- No backend, persistence, live stage advancement, account actions, publishing, spending, scraping, automation, or fabricated metrics

## v1.3.0 - Approval System + Decision Records

### Added

- APPROVAL_SYSTEM.md
- DECISION_RECORDS.md
- src/data/approvalSystem.ts
- First-class Approval Queue objects
- First-class Decision Record objects
- AR-001: Revenue Architect / Income Lane Scoring Sprint
- DR-001: Income Division becomes primary offensive effort
- Revenue Intelligence Approval Queue and Decision Records sections
- Mission Control Approval Queue Snapshot

### Changed

- Canonical documentation version updated to v1.3.0
- THE_GRID_CONSTITUTION.md now clarifies first-class approvals and Decision Records
- README, PROJECT_LOG, VERSION, and AI_HANDOFF now reference the Approval System

### Safety Boundary

- Read-only governance/UI only
- No backend, persistence, live approvals, account actions, publishing, spending, scraping, or automation

## v1.2.0 - Founding Constitution

### Added

- THE_GRID_CONSTITUTION.md
- FOUNDING_COUNCIL_BRIEF.md
- Preamble, Founding Council, Mission Commander, Executive Council, Officer Doctrine, Program Doctrine, Mission Doctrine, Company Doctrine, Mission Lifecycle, Approval System, Institutional Memory, Promotion Rules, Activation Rules, Engineering Doctrine, Mission Records, Amendments, Officer Oath, and Mission Commander Oath sections
- Governance reference in README, PROJECT_LOG, VERSION, and AI_HANDOFF
- First-read onboarding packet for future AI and human contributors

### Changed

- Canonical documentation version updated to v1.2.0
- Documentation now identifies the constitution as the governing project reference

### Safety Boundary

- Documentation/governance only
- No automation, scraping, account actions, backend, live integrations, autonomous execution, or fabricated metrics

## v0.9.0 - Hermes Live Agent Integration Plan

### Added

- Hermes Agents page
- src/data/hermesAgents.ts typed Hermes profile data
- HERMES_AGENT_STATUS.md
- docs/HERMES_AGENT_ARCHITECTURE.md
- Profiles for ZENITH, REVENUE ARCHITECT, DESIGN FORGE, COPY ROOM, and SENTINEL
- Autonomy ladder covering Level 1 Draft, Level 2 Research, Level 3 Build, Level 4 Publish requires approval, and Level 5 Money/actions forbidden for now
- Mission Control Hermes profile snapshot
- Council Hermes profile section
- Revenue Intelligence Hermes support section

### Changed

- Navigation now includes Hermes Agents
- Documentation updated for v0.9 profile preparation and approval-gate doctrine
- README, PROJECT_LOG, VERSION, and AI_HANDOFF now reference Hermes as planned/read-only only

### Safety Boundary

- Preparation layer only
- No connected accounts, Telegram bots, autonomous publishing, automated marketplace interaction, account automation, customer messaging, spending, trading, or fabricated agent activity

## v0.8.0 - Revenue Intelligence Engine

### Added

- Revenue Intelligence page
- src/data/revenueIntelligence.ts typed intelligence data
- src/data/senate.ts typed Senate recommendation data
- Market Scanner
- Opportunity Pipeline
- Revenue Score
- Experiment Tracker
- Revenue Dashboard
- Hall of Wins
- Opportunity Radar
- Playbook Library
- The Senate decision-support module

### Changed

- Navigation now includes Revenue Intelligence
- Mission Control includes a Revenue Intelligence snapshot
- Income Division includes a bridge to Revenue Intelligence
- World Map includes Revenue Intelligence as a district
- Council includes The Senate section
- Documentation updated for v0.8 Unknown-first doctrine

### Safety Boundary

- Read-only intelligence only
- No autonomous publishing, marketplace interaction, ToS-violating scraping, account automation, purchasing, customer messaging, or fabricated metrics

## v0.7.0 - Income Division Revenue Factory Foundation

### Added

- Income Division page
- src/data/incomeFactory.ts typed workflow data
- INCOME_FACTORY_STATUS.md
- Market Lab, Offer Builder, Asset Factory, Fiverr Room, Etsy Room, Publishing Room, Revenue War Room, and Compliance Sentinel sections
- Mission Control income factory snapshot
- Council references for DESIGN FORGE, COPY ROOM, and PUBLISHING ROOM

### Changed

- Navigation now includes Income Division
- World Map now reflects Income Division as an assisted manual factory and includes Publishing Room
- Council now references the assisted income factory workflow
- Documentation updated for v0.7 safety boundaries and doctrine

### Safety Boundary

- UI/workflow foundation only
- No autonomous publishing, scraping violations, fake reviews, trademark/copyright theft, auto-DMs, ad spend, account automation, or spending money

## v0.6.0 - World Map + Council Layer Foundation

### Added

- World Map page
- Council page
- src/data/gridWorld.ts typed district data
- src/data/council.ts typed officer data
- World-building spaces for The Lounge, Strategy Table, Hall of Fame, and Innovation Lab
- Navigation entries for World Map and Council

### Changed

- Mobile navigation now prioritizes Dashboard, Mission Control, World Map, Commerce, and Settings
- Documentation updated to describe APEX/CLU as independent Programs and districts as arenas inside THE GRID
- .gitignore protects local research folders and generated outputs

### Safety Boundary

- UI/worldbuilding and information architecture only
- No backend, autonomous execution, APEX/CLU changes, secrets, live integrations, or fake metrics

## v0.5.0 - Income Division Planning Foundation

### Added

- Income Division planned mission card
- INCOME_DIVISION_STATUS.md
- Market Lab, Design Forge, Copy Room, Publishing Room, Revenue War Room, Archives / Obsidian Vault, and Agent Profiles planning data
- REVENUE ARCHITECT read-only watcher
- Income Division planning section in Mission Control

### Changed

- Updated Mission Control to include the Income Division as a planned division
- Updated AI handoff, project log, version, and README for v0.5

### Safety Boundary

- Planning + UI foundation only
- No scraping, marketplace integrations, Telegram bots, autonomous posting, copied products, fake reviews, or fake revenue metrics

## v0.4.0 - Visual Identity Foundation

### Added

- Layered animated background and perspective grid environment
- Division RGB glow token system
- Officer badge/icon primitive
- Division LED primitive
- Glass panel primitive
- Visual identity documentation

### Changed

- Refined global color palette
- Refined shared card glass treatment
- Refined sidebar, top navigation, and mobile navigation presentation
- Updated design-system documentation for future page consistency

### Safety Boundary

- Presentation only
- No backend, mission logic, APEX, CLU, data architecture, or autonomy changes

## v0.1.1 - Harden UI Foundation

### Added

- Commerce manual workstation
- Mobile navigation
- Documentation
- GitHub repository preparation
- Version tracking

### Changed

- Strengthened navigation architecture
- Improved responsive layout
- Clarified manual workflow model
- Clarified Workstations vs Programs distinction

### Fixed

- Responsive behavior issues identified during the hardening pass
- TypeScript issues identified during the hardening pass
- Production build issues identified during the hardening pass

### Known Limitations

- No backend
- No APIs
- No persistence
- No autonomous Programs
- No fake analytics

## v0.1.0 - Initialize UI Foundation

### Added

- Initial React, TypeScript, Tailwind CSS, and Vite project scaffold
- App shell
- Sidebar navigation
- Dark UI foundation
- Initial placeholder pages for future workstations
