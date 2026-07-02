# Changelog

All notable changes to THE GRID will be documented in this file.

Current Version: v0.9.0

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
