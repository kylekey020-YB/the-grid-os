# Changelog

All notable changes to THE GRID will be documented in this file.

Current Version: v3.2.0

## Alpha Lab v1.0

### Added

- ALPHA_LAB_STATUS.md
- ALPHA_GENERATION_DOCTRINE.md
- src/data/alphaLab.ts
- src/pages/AlphaLab.tsx
- Alpha Library with ALPHA-100 through ALPHA-600 families
- ALPHA-501 Sequential Liquidation Model for WRAITH-LSTM
- Alpha Lab navigation entry

### Changed

- Mission Control, The Bridge, Trading Research Corps, Quant Research Scouts, The Academy, Evidence Ledger, Obsidian Sync Map, README, PROJECT_LOG, VERSION, AI_HANDOFF, and GRID_SYSTEM_PROMPT now reference Alpha Lab.

### Boundary

- No fake alpha, fake backtests, fake data, live trading, exchange connections, broker connections, wallet connections, paper trading authorization, or strategy promotion without evidence.

## Playbook System v1.0

### Added

- GRID_PLAYBOOKS.md
- PLAYBOOK_TEMPLATE.md
- src/data/playbooks.ts
- src/pages/Playbooks.tsx
- Initial PB-001 through PB-008 draft placeholders

### Changed

- Mission Control, Operations Hub, The Academy, Daily Command Brief, Obsidian Sync Map, Evidence Ledger, README, PROJECT_LOG, VERSION, AI_HANDOFF, and GRID_SYSTEM_PROMPT now reference the Playbook system.

### Boundary

- No fake wins, fake lessons, completed playbooks, backend, automation, product launch, trading action, or merge action.

## Launch Intelligence v1.0

### Added

- src/data/launchIntelligence.ts
- EVIDENCE_LEDGER.md
- R-005_PRINT_ON_DEMAND_SCOUT.md
- R-005 Print-on-Demand Scout mission in Research Scheduler
- Print-on-Demand Scout Report template

### Changed

- Launch Center now consumes shared Launch Intelligence records.
- Mission Control and Operations Hub reference the same launch evidence source.
- Company KPI revenue/live-product references now come from Launch Intelligence.

### Boundary

- No new dashboards, product creation, listings, design generation, storefronts, supplier outreach, scraping, spending, publishing, trading, or merge action.

## Stabilization Pass

### Added

- STABILIZATION_STATUS.md
- REPOSITORY_CONSOLIDATION_PLAN.md

### Changed

- Aligned package metadata with the documented v3.2.0 baseline.
- Updated README, VERSION, PROJECT_LOG, AI_HANDOFF, and GIT_WORKFLOW with consolidation guidance.

### Boundary

- No dashboards, divisions, officers, backend, automation, repository move, merge action, or commit.

## Daily Command Brief v1.0

### Added

- src/data/dailyCommandBrief.ts
- src/pages/DailyCommandBrief.tsx
- COMMAND_BRIEF_TEMPLATE.md
- Daily Command Brief navigation entry and default landing page
- Mission Control and Operations Hub integrations

### Changed

- App now opens Daily Command Brief first
- GRID_SYSTEM_PROMPT.md daily operating cycle now starts with the Command Brief
- OBSIDIAN_SYNC_MAP.md maps Command Brief artifacts to 01 Executive

### Safety Boundary

- No new divisions, officers, decorative dashboards, backend, automation, publishing, trading, messaging, spending, or merge action

## Execution Support Sprint

### Added

- EXECUTION_SUPPORT_SPRINT.md
- Operations Hub execution priority order
- Operations Hub real-only execution metrics
- Feature gate: revenue, coordination, or validated learning

### Changed

- ORION Backtester is now Engineering's highest Trading priority
- Operations Hub mission queue now reflects the execution-first priority order
- GRID_SYSTEM_PROMPT.md now includes the Execution Support Sprint rule

### Safety Boundary

- No new divisions, officers, decorative dashboards, backend, automation, publishing, trading, spending, customer messaging, or merge action

## Operations Hub v1.0

### Added

- src/data/operationsHub.ts
- src/pages/OperationsHub.tsx
- OPERATIONS_HUB.md
- Operations Hub navigation entry
- Mission ID gate snapshot inside Mission Control
- Mission Inbox, Today's Focus, mission actions, and daily workflow

### Changed

- Mission Control now references Operations Hub as the entry gate for mission-linked work
- GRID_SYSTEM_PROMPT.md now includes the Operations Hub rule
- OBSIDIAN_SYNC_MAP.md now maps Operations Hub and Mission Inbox to 01 Executive

### Safety Boundary

- No new divisions, officers, decorative dashboards, backend, persistence, execution automation, publishing, trading, customer messaging, spending, or automatic Obsidian writes

## v3.2.0 - THE GRID Headquarters

### Added

- GRID_SYSTEM_PROMPT.md as the single source of truth for AI contributors
- OBSIDIAN_SYNC_MAP.md for system-to-vault routing
- MISSION_BOARD.md as the central operating board
- Obsidian-compatible Markdown mirror for the v3.2 artifacts under the writable vault package

### Changed

- RESEARCH_ROUTER.md now reflects v3.2 assignment-only routing
- Claude Code is documented as Chief Engineer
- Engineering decisions are anchored to the root GRID repository
- Future documentation generation is directed toward Obsidian-compatible Markdown

### Safety Boundary

- Documentation/governance only
- No new officer pages, decorative dashboards, backend, automation, provider routing, publishing, trading, spending, customer messaging, or main branch merge

## v3.0.0 - Intelligence Corps + Research Router

### Added

- src/data/intelligenceCorps.ts
- src/data/researchRouter.ts
- src/data/scoutRegistry.ts
- src/data/obsidianVault.ts
- src/pages/IntelligenceCorps.tsx
- src/pages/ResearchRouter.tsx
- INTELLIGENCE_CORPS_STATUS.md
- RESEARCH_ROUTER.md
- OBSIDIAN_VAULT_STRUCTURE.md
- Intelligence Corps divisions for Revenue Scouts, Quant Scouts, Engineering Scouts, DealFlow Scouts, and AI Research Scouts
- Research Router platform model for ChatGPT, Hermes, Claude, Claude Code, Codex, and future providers
- Canonical Obsidian mission-record field schema

### Changed

- Canonical documentation version updated to v3.0.0
- Mission Control, The Bridge, The Academy, and Chronicle now reference Intelligence Corps and Research Router
- Constitution now states that knowledge belongs to THE GRID, not to any individual AI

### Safety Boundary

- Typed UI and documentation only
- No live AI provider routing, API calls, Obsidian sync, publishing, trading, broker connection, customer messaging, spending, account automation, irreversible actions, or autonomous execution

## v2.8.0 - Semi-Autonomous Research Scheduler

### Added

- src/data/researchScheduler.ts
- src/pages/ResearchScheduler.tsx
- RESEARCH_SCHEDULER_STATUS.md
- GIT_WORKFLOW.md
- Scheduled Revenue Corps research missions for Etsy, Fiverr, Gumroad, YouTube / Shorts, Bounty, and GitHub opportunity scans
- Scheduled Quant Research Corps research missions for ORION, WRAITH, PAIRFORGE, VOLTA, and ATLAS
- Research Queue statuses: Pending, Running, Completed, Needs Review, and Archived
- Research Scheduler integrations in Mission Control, The Bridge, Revenue Corps, Revenue Intelligence, Quant Research Scouts, Trading Research Corps, The Academy, World Map, Mission Pipeline, and Approval doctrine

### Changed

- Canonical documentation version updated to v2.8.0
- Research now has a semi-autonomous schedule model while execution remains prohibited
- Git doctrine now clarifies stable main branch and feature branch approval boundaries

### Safety Boundary

- Research reports only
- No publishing, trading, broker connection, customer messages, spending, account automation, irreversible actions, external execution, fake data, or autonomous research execution


## v2.7.1 - Quant Research Scout Engine

### Added

- src/data/quantResearchScouts.ts
- src/pages/QuantResearchScouts.tsx
- QUANT_RESEARCH_SCOUTS_STATUS.md
- docs/QUANT_RESEARCH_WORKFLOW.md
- QUANT_RESEARCH_TASK_001_ORION.md
- Quant Scout roles for GitHub, QuantConnect, Reddit, academic papers, options, ICT mechanics, data vendors, and backtest feasibility
- Research Inbox, Strategy Candidate Queue, Source Library, Bot Assignment Matrix, Backtest Readiness Board, Rejected Strategy Graveyard, and Top Strategy Recommendations
- ORION First Signal research task for SPY/QQQ Opening Range Breakout
- Quant Scout integrations in Mission Control, The Bridge, World Map, The Academy, Trading Research Corps, and Mission Pipeline

### Changed

- Trading Research Corps now has a dedicated research intake engine before backtest work begins
- Mission Pipeline now tracks Quant Research Scout Engine as a research-stage operating object
- Canonical documentation version updated to v2.7.1

### Safety Boundary

- Research-only typed architecture
- No live trading, broker connection, wallet connection, options execution, paper mode, autonomous execution, money at risk, fake PnL, fake expectancy, fake win rate, or profitability claims before historical validation

## v2.7.0 - Venture Scouts

### Added

- src/data/ventureScouts.ts
- VENTURE_SCOUTS_STATUS.md
- Venture Scout divisions for Marketplace, Media, Software, Opportunity, and Asset research
- Opportunity Scorecard shared across all scout reports
- Venture Scout integrations in Mission Control, The Bridge, Revenue Corps, Revenue Intelligence, Scout Reports, Opportunity Radar, World Map, and Mission Pipeline
- Obsidian vault copy for Venture Scouts status

### Changed

- Revenue Corps now treats business-model discovery as a permanent capability, not only marketplace product scouting
- Mission Pipeline now tracks Venture Scouts as a research-stage operating object
- Canonical documentation version updated to v2.7.0

### Safety Boundary

- Typed/manual architecture only
- Scores remain N/A until public/manual evidence exists
- No scraping integrations, account automation, autonomous publishing, customer messaging, spending, copied products, fake reviews, fabricated data, or fabricated opportunity scores


## v2.6.2 - Quant Scout Mission 001

### Added

- QUANT_SCOUT_MISSION_001.md
- ORION research program for SPY/QQQ chart research
- WRAITH research program for mechanical ICT/FVG/liquidity-sweep testing
- Top 20 broad strategy ranking across PAIRFORGE, VOLTA, ATLAS, ORION, and WRAITH
- Top strategy shortlist per bot
- Recommended first bot: ORION
- Recommended first signal: SPY/QQQ Opening Range Breakout
- Required data plan and backtest plan

### Changed

- Trading Research Corps now includes five research programs instead of three
- Trading Research Corps page now displays Quant Scout Mission 001 rankings and prototype recommendation
- Trading doctrine now explicitly requires discretionary concepts to become mechanical rules before being treated as research signals

### Safety Boundary

- No live trading, brokerage connection, options execution, wallet execution, money at risk, fake PnL, fake expectancy, fake win rate, or strategy promotion before historical validation


## v2.6.1 - Trading Research Corps

### Added

- TRADING_RESEARCH_CORPS_STATUS.md
- src/data/tradingResearchCorps.ts
- src/pages/TradingResearchCorps.tsx
- PAIRFORGE research program for pairs trading / statistical arbitrage
- VOLTA research program for options / volatility research
- ATLAS research program for long-term buy-and-hold / factor portfolio research
- Research scout roles for GitHub Quant, Reddit Quant, QuantConnect, Academic Paper, Options Strategy, and Portfolio Strategy research
- Trading Research Corps integrations in Mission Control, The Bridge, World Map, The Academy, Trading, Mission Pipeline, and navigation

### Changed

- Trading Division now distinguishes APEX/CLU research from PAIRFORGE, VOLTA, and ATLAS research programs
- Mission Pipeline now tracks Trading Research Corps as a research-stage object

### Safety Boundary

- Research only
- No live trading, brokerage connection, options execution, money at risk, fake PnL, fake expectancy, fake win rate, or strategy promotion before historical validation


## v2.6.0 - Opportunity Radar

### Added

- Opportunity Radar page
- src/data/opportunityRadar.ts
- OPPORTUNITY_RADAR_STATUS.md
- Typed opportunity scoring fields and Mission Commander filter presets
- Experiment Lab, Revenue Forecasting, Revenue Flywheel, Product Foundry, Marketplace Intelligence, DealFlow Incubator, and Opportunity Queue sections
- Opportunity Radar integrations in Mission Control, The Bridge, Revenue Corps, Revenue Intelligence, World Map, and Mission Pipeline

### Changed

- Canonical documentation version updated to v2.6.0
- Revenue Corps opportunity hunting is now represented as a permanent operating function
- Mission Pipeline now tracks Opportunity Radar as a research-stage operating object

### Safety Boundary

- No backend, fake data, scraping integrations, account automation, autonomous publishing, spending, copied products, fake reviews, fabricated forecasts, or fabricated opportunity scores

## v2.5.0 - Obsidian Knowledge Vault Bridge

### Added

- Obsidian-ready vault structure under obsidian-vault/
- src/data/obsidianBridge.ts
- OBSIDIAN_VAULT_STATUS.md
- docs/OBSIDIAN_BRIDGE.md
- scripts/exportObsidianVault.js
- Obsidian folder structure for Command, Doctrine, Mission Records, Decision Records, Approval Records, Revenue Corps, Commerce, Trading, Academy, Strategic Assets, and Officers
- Initial Markdown index files, officer notes, Mission Commander note, Operation First Revenue note, and DealFlow placeholder
- Obsidian Bridge panels in Mission Control, The Bridge, and The Academy

### Changed

- Canonical documentation version updated to v2.5.0
- Institutional memory now has a durable Markdown export target
- The Academy now treats Obsidian as the long-term second brain while THE GRID remains the visual command center

### Safety Boundary

- No Obsidian API
- No sync automation
- No secrets, .env files, API keys, or raw unsanitized logs
- Export script never deletes files and backs up before overwrite

## v2.4.0 - Scout Reports

### Added

- Scout Reports page
- src/data/scoutReports.ts
- SCOUT_REPORTS_STATUS.md
- Etsy, Fiverr, Gumroad, Asset, Bounty, Trend, Review, and Pricing Scout report templates
- Manual report metrics for total reports, manual research, awaiting evidence, and ready-for-review counts
- Scout Reports integrations in Mission Control, The Bridge, Revenue Corps, Revenue Intelligence, The Academy, World Map, and Mission Pipeline

### Changed

- Canonical documentation version updated to v2.4.0
- Revenue Corps now has a structured report intake layer before product creation or launch preparation
- Mission Pipeline now tracks Revenue Corps Scout Reports as a research-stage operating object

### Safety Boundary

- Manual/public-evidence only
- Unknown values remain N/A
- No scraping integrations, account automation, fake marketplace data, autonomous publishing, customer messaging, copied products, fake reviews, fabricated revenue, or fabricated opportunity scores

## v2.3.0 - Revenue Corps

### Added

- Revenue Corps page
- src/data/revenueCorps.ts
- REVENUE_CORPS_STATUS.md
- Scout Corps / Product Corps / Launch Corps structure
- Marketplace Scout, Publishing Scout, and Bounty Hunter as Wave 1 research-only scouts
- Score to Beat opportunity gate
- Revenue Corps snapshots in Mission Control, The Bridge, Revenue Intelligence, Council, World Map, and KPI reporting

### Changed

- Canonical documentation version updated to v2.3.0
- Income Division is now officially renamed Revenue Corps
- Revenue Architect now acts as Revenue Corps commander instead of a single overextended researcher
- Revenue Intelligence now functions as the read-only general staff for ranking scout reports

### Safety Boundary

- No autonomous publishing, customer messaging, spending, account automation, platform-rule scraping, copied products, fake reviews, fake revenue, or fabricated opportunity scores

## v2.2.0 - Launch Center

### Added

- Launch Center page
- src/data/launchCenter.ts
- LAUNCH_CENTER_STATUS.md
- EXP-1 Fiverr AI Automation Consulting live product record
- Revenue Timeline
- Launch Log
- Marketing Queue
- Launch milestones
- Launch Center navigation entry
- Marketplace Entry Record in THE_GRID_CONSTITUTION.md

### Changed

- Canonical documentation version updated to v2.2.0
- Mission Pipeline now records Operation First Revenue as live experiment monitoring
- Revenue Intelligence now includes the live Fiverr AI Automation Consulting launch
- Mission Control, The Bridge, World Map, Academy, Chronicle, and Mission Events now reference Launch Center

### Safety Boundary

- No fake metrics, fake revenue, fake orders, fake reviews, autonomous publishing, customer messaging automation, or unsupported performance claims

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
