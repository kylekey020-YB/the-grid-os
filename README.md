# THE GRID UI Foundation

Current Version: v3.2.0

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

## v2.2 Launch Center

- Added Launch Center for live products, revenue timeline, orders, reviews, milestones, launch log, and marketing queue.
- Added src/data/launchCenter.ts and src/pages/LaunchCenter.tsx.
- Recorded EXP-1 - Fiverr AI Automation Consulting as LIVE on July 2, 2026.
- Updated Mission Pipeline and Revenue Intelligence to show Operation First Revenue in live monitoring.
- Added Launch Center references to Mission Control, The Bridge, World Map, Chronicle, Academy, and Mission Events.
- Added LAUNCH_CENTER_STATUS.md.
- Updated THE_GRID_CONSTITUTION.md with the historical Marketplace Entry Record.
- Metrics remain N/A until real Fiverr/platform evidence exists.

## v2.3 Revenue Corps

- Renamed Income Division as Revenue Corps.
- Added Revenue Corps page as the official revenue operating department.
- Added typed Revenue Corps data in src/data/revenueCorps.ts.
- Added Scout Corps, Product Corps, and Launch Corps structure under Revenue Architect.
- Added Score to Beat questions for opportunity advancement.
- Integrated Revenue Corps into Mission Control, The Bridge, Revenue Intelligence, Council, World Map, and KPI reporting.
- This milestone is read-only architecture/UI only: no scraping, no autonomous publishing, no customer messaging, no spending, no account automation, and no fake revenue metrics.

## v2.4 Scout Reports

- Added Scout Reports as the structured manual evidence intake for Revenue Corps.
- Added src/data/scoutReports.ts.
- Added src/pages/ScoutReports.tsx.
- Added SCOUT_REPORTS_STATUS.md.
- Added Etsy, Fiverr, Gumroad, Asset, Bounty, Trend, Review, and Pricing Scout report templates.
- Integrated Scout Reports into Mission Control, The Bridge, Revenue Corps, Revenue Intelligence, The Academy, World Map, and Mission Pipeline.
- Doctrine: Scouts discover demand. Product Corps creates original assets. Launch Corps publishes only after Mission Commander approval.
- This milestone is read-only and manual/public-evidence only: no scraping integrations, account automation, fake marketplace data, autonomous publishing, customer messaging, or fabricated scores.

## v2.5 Obsidian Knowledge Vault Bridge

- Added an Obsidian-ready knowledge vault structure under obsidian-vault/.
- Added src/data/obsidianBridge.ts.
- Added OBSIDIAN_VAULT_STATUS.md.
- Added docs/OBSIDIAN_BRIDGE.md.
- Added scripts/exportObsidianVault.js.
- Added Markdown folders for Command, Doctrine, Mission Records, Decision Records, Approval Records, Revenue Corps, Commerce, Trading, Academy, Strategic Assets, and Officers.
- Integrated Obsidian Bridge into Mission Control, The Bridge, and The Academy.
- Doctrine: Hermes remembers and files records. Obsidian stores durable knowledge. THE GRID visualizes operational state. Codex builds the bridge. ZENITH governs the architecture.
- This milestone is manual Markdown export only: no Obsidian API, no sync automation, no secrets, no .env files, no API keys, and no raw logs unless sanitized.

## v2.6 Opportunity Radar

- Added Opportunity Radar page.
- Added src/data/opportunityRadar.ts.
- Added src/pages/OpportunityRadar.tsx.
- Added OPPORTUNITY_RADAR_STATUS.md.
- Added typed opportunity fields, ranking filters, Experiment Lab, Revenue Forecasting, Revenue Flywheel, Product Foundry, Marketplace Intelligence, DealFlow Incubator, and Opportunity Queue.
- Integrated Opportunity Radar into Mission Control, The Bridge, Revenue Corps, Revenue Intelligence, World Map, and Mission Pipeline.
- This milestone is typed/manual only: no backend, no fake data, no scraping integrations, no account automation, no autonomous publishing, no spending, and no fabricated forecasts.

## v2.7 Venture Scouts

Revenue Corps now includes a typed Venture Scout layer for business-model discovery, not just marketplace product scouting. The scout network is organized into Marketplace, Media, Software, Opportunity, and Asset divisions. Every scout uses the same Opportunity Scorecard before any idea can enter the Mission Pipeline.

This is manual/read-only architecture only: no scraping integrations, no account automation, no autonomous publishing, no customer messaging, no spending, and no fabricated opportunity scores. Unknown scores remain N/A until public/manual evidence exists.

## v2.6 Trading Research Corps

The Trading Division now includes a research-only Trading Research Corps for PAIRFORGE, VOLTA, and ATLAS. These are backtest and paper-only architecture objects, not live trading systems. Every strategy must pass historical validation before paper mode.

Doctrine: Trading programs are research programs until evidence proves expectancy. No brokerage connection, no options execution, no money at risk, no fake performance metrics, and no live trading are implemented.

## Quant Scout Mission 001

Trading Research Corps now includes ORION and WRAITH alongside PAIRFORGE, VOLTA, and ATLAS. Quant Scout Mission 001 ranks broad strategy candidates and recommends ORION as the first research prototype, specifically SPY/QQQ Opening Range Breakout.

No live trading is authorized. No broker connection, options execution, wallet execution, or money at risk exists. WRAITH may only advance if discretionary ICT/FVG/liquidity concepts are converted into mechanical, code-definable rules.


## v2.7.1 Quant Research Scout Engine

- Added Quant Research Scouts as the research intake engine for Trading Research Corps.
- Added src/data/quantResearchScouts.ts and src/pages/QuantResearchScouts.tsx.
- Added QUANT_RESEARCH_SCOUTS_STATUS.md and docs/QUANT_RESEARCH_WORKFLOW.md.
- Added QUANT_RESEARCH_TASK_001_ORION.md as the first ORION research task record.
- Integrated Quant Scouts into Mission Control, The Bridge, World Map, The Academy, Trading Research Corps, and Mission Pipeline.
- Doctrine: Quant Scouts research. Backtesters validate. Programs paper trade. Mission Commander approves live risk.
- ORION first signal recommendation: prototype a SPY/QQQ Opening Range Breakout backtest specification. No profitability is claimed without historical test evidence.
- This milestone is typed research architecture only: no live trading, broker connection, wallet connection, options execution, paper mode, autonomous execution, or money at risk.

## Daily Command Brief v1.0

- Added Daily Command Brief as the morning entry page for Mission Commander.
- Added COMMAND_BRIEF_TEMPLATE.md as the Obsidian-compatible standard brief format.
- Every division reports with the same schema: status, signal, evidence, blocker, next action, Mission ID, and Obsidian note.
- The brief ends with ONE recommendation to reduce coordination.
- No new divisions, officers, or decorative dashboards were added.

## Execution Support Sprint

- Current priority order: customer acquisition, product launches, Operations Hub, Obsidian integration, trading validation.
- Added execution gate: increase revenue, reduce coordination, or improve validated learning. Otherwise postpone.
- Added real-only execution metrics to Operations Hub. Unknown values remain N/A until evidence exists.
- ORION Backtester is now Engineering's highest Trading priority.

## Operations Hub v1.0

- Added Operations Hub as the central mission queue.
- Added Mission Inbox fields, lifecycle statuses, Today's Focus, mission actions, and daily workflow.
- Enforced the rule: nothing enters Mission Control unless it has a Mission ID.
- Added OPERATIONS_HUB.md as the Obsidian-compatible operating record.
- This is a coordination system only: no backend, execution automation, publishing, trading, messaging, spending, or persistence.

## v3.2 Headquarters

- Added GRID_SYSTEM_PROMPT.md as the single source of truth for AI contributors.
- Added OBSIDIAN_SYNC_MAP.md to map THE GRID systems to Obsidian folders.
- Added MISSION_BOARD.md as the central operating board.
- Updated RESEARCH_ROUTER.md for assignment-only routing and Chief Engineer doctrine.
- Future documentation should be Obsidian-compatible Markdown and should reference GRID_SYSTEM_PROMPT.md instead of duplicating doctrine.

## v3.0 Intelligence Corps

- Added Intelligence Corps as THE GRID discovery engine.
- Added Research Router as a typed assignment layer for ChatGPT, Hermes, Claude, Claude Code, Codex, and future providers.
- Added canonical Obsidian vault structure for mission records and research outputs.
- Added the principle: Knowledge belongs to THE GRID, not to any individual AI.
- This milestone is typed UI and documentation only: no API routing, provider calls, Obsidian sync, autonomous execution, publishing, trading, messaging, spending, or account automation.

## v2.8 Research Scheduler

- Added Research Scheduler as a semi-autonomous research planning layer for Revenue Corps and Quant Research Corps.
- Scheduled missions create reports, rank findings, and recommend experiments only.
- No publishing, trading, broker connection, customer messaging, spending, account automation, irreversible action, or live execution is connected.
- Added GIT_WORKFLOW.md to clarify branch and merge doctrine.

## Playbook System v1.0

- Added GRID_PLAYBOOKS.md and PLAYBOOK_TEMPLATE.md.
- Added typed playbook registry in src/data/playbooks.ts.
- Added Playbooks page with draft-only placeholders.
- Integrated Playbooks with Mission Control, Operations Hub, The Academy, Obsidian Sync Map, Evidence Ledger, and Daily Command Brief.
- Doctrine: THE GRID does not merely remember outcomes. It converts validated experience into reusable playbooks.
- No playbook is validated until evidence exists.

## Launch Intelligence v1.0

- Added a typed Launch Intelligence evidence layer for real launch metrics.
- Separates execution metrics controlled by THE GRID from market metrics controlled by customers and platforms.
- Mission Control, Operations Hub, and Launch Center now reference the same launch evidence source.
- Added EVIDENCE_LEDGER.md as the chronological record of verified evidence.
- Unknown market values remain Unknown or Awaiting Evidence until Mission Commander records actual values.

## R-005 Print-on-Demand Scout

- Added R-005 as a persistent Revenue Corps research mission.
- Researches evergreen, trend, underserved, premium, and seasonal POD niches across Etsy, Shopify, Printify, Printful, Gelato, and reputable suppliers.
- Collects demand, competition, average selling price, estimated production cost, estimated margin, difficulty, time to revenue, and confidence.
- Produces evidence only for Revenue Architect scoring: Proceed, Hold, or Reject.
- Does not authorize launch, products, listings, design generation, supplier outreach, storefronts, scraping, or spending.

## Documentation

- [GRID_PLAYBOOKS.md](GRID_PLAYBOOKS.md)
- [PLAYBOOK_TEMPLATE.md](PLAYBOOK_TEMPLATE.md)
- [EVIDENCE_LEDGER.md](EVIDENCE_LEDGER.md)
- [R-005_PRINT_ON_DEMAND_SCOUT.md](R-005_PRINT_ON_DEMAND_SCOUT.md)
- [COMMAND_BRIEF_TEMPLATE.md](COMMAND_BRIEF_TEMPLATE.md)
- [EXECUTION_SUPPORT_SPRINT.md](EXECUTION_SUPPORT_SPRINT.md)
- [OPERATIONS_HUB.md](OPERATIONS_HUB.md)
- [STABILIZATION_STATUS.md](STABILIZATION_STATUS.md)
- [REPOSITORY_CONSOLIDATION_PLAN.md](REPOSITORY_CONSOLIDATION_PLAN.md)
- [GRID_SYSTEM_PROMPT.md](GRID_SYSTEM_PROMPT.md)
- [OBSIDIAN_SYNC_MAP.md](OBSIDIAN_SYNC_MAP.md)
- [MISSION_BOARD.md](MISSION_BOARD.md)
- [INTELLIGENCE_CORPS_STATUS.md](INTELLIGENCE_CORPS_STATUS.md)
- [RESEARCH_ROUTER.md](RESEARCH_ROUTER.md)
- [OBSIDIAN_VAULT_STRUCTURE.md](OBSIDIAN_VAULT_STRUCTURE.md)
- [RESEARCH_SCHEDULER_STATUS.md](RESEARCH_SCHEDULER_STATUS.md)
- [GIT_WORKFLOW.md](GIT_WORKFLOW.md)
- [FOUNDING_COUNCIL_BRIEF.md](FOUNDING_COUNCIL_BRIEF.md)
- [NERVOUS_SYSTEM_STATUS.md](NERVOUS_SYSTEM_STATUS.md)
- [SCOUT_OFFICER_STATUS.md](SCOUT_OFFICER_STATUS.md)
- [QUANT_SCOUT_MISSION_001.md](QUANT_SCOUT_MISSION_001.md)
- [QUANT_RESEARCH_SCOUTS_STATUS.md](QUANT_RESEARCH_SCOUTS_STATUS.md)
- [docs/QUANT_RESEARCH_WORKFLOW.md](docs/QUANT_RESEARCH_WORKFLOW.md)
- [QUANT_RESEARCH_TASK_001_ORION.md](QUANT_RESEARCH_TASK_001_ORION.md)
- [TRADING_RESEARCH_CORPS_STATUS.md](TRADING_RESEARCH_CORPS_STATUS.md)
- [VENTURE_SCOUTS_STATUS.md](VENTURE_SCOUTS_STATUS.md)
- [OPPORTUNITY_RADAR_STATUS.md](OPPORTUNITY_RADAR_STATUS.md)
- [OBSIDIAN_VAULT_STATUS.md](OBSIDIAN_VAULT_STATUS.md)
- [docs/OBSIDIAN_BRIDGE.md](docs/OBSIDIAN_BRIDGE.md)
- [SCOUT_REPORTS_STATUS.md](SCOUT_REPORTS_STATUS.md)
- [REVENUE_CORPS_STATUS.md](REVENUE_CORPS_STATUS.md)
- [LAUNCH_CENTER_STATUS.md](LAUNCH_CENTER_STATUS.md)
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

## Alpha Lab v1.0

- Added Alpha Lab as THE GRID's permanent alpha-generation system.
- Added ALPHA_LAB_STATUS.md and ALPHA_GENERATION_DOCTRINE.md.
- Added src/data/alphaLab.ts and src/pages/AlphaLab.tsx.
- Added alpha families for Price Action, Market Microstructure, Statistical Arbitrage, Options / Volatility, Machine Learning, and Alternative Data.
- Added ALPHA-501 Sequential Liquidation Model to connect WRAITH-LSTM research to the Alpha Library.
- Integrated Alpha Lab with Mission Control, The Bridge, Trading Research Corps, Quant Research Scouts, The Academy, Evidence Ledger, Obsidian Sync Map, and GRID_SYSTEM_PROMPT.md.
- Doctrine: no strategy is permanent, every hypothesis competes against evidence, every model must continually earn its place, and the research engine is the edge.
- Boundary: no fake alpha, fake backtests, fake data, live trading, exchange connections, broker connections, or strategy promotion without evidence.
