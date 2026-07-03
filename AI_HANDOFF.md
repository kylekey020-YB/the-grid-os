# THE GRID AI Handoff

Current Version: v3.2.0

## First Read

Before continuing work in THE GRID, read FOUNDING_COUNCIL_BRIEF.md first. It is the onboarding packet for Claude, Claude Code, ChatGPT / ZENITH, Hermes profiles, Codex, and future contributors.

## Purpose

This document allows any AI or human engineer to join THE GRID project quickly without inventing context. THE GRID is an AI Operating System for coordinating validated workflows. At this stage, it is a frontend foundation with manual workstations only.

## Team

- Mission Commander: Kyle
- Systems Architect: ChatGPT
- Engineering Discipline: Claude
- Lead Engineer: Claude Code
- Implementation Engineer: Codex

## Development Doctrine

- Reality before automation.
- Architecture before complexity.
- Evidence before expansion.
- Every module earns its place.
- Workstations precede Programs.
- Programs earn autonomy only after validated, repeated workflows.

## Workstations vs Programs

### Workstation

- Human initiated.
- Manual.
- Produces a repeatable workflow.
- Exists before automation.

### Program

- Automated.
- Background execution.
- Only created after validation.
- Must be earned by repeated workflow evidence.

At v0.1.1, everything is manual. No Program is autonomous.

## Current Pages

- Dashboard
- Mission Control
- Mission Pipeline
- The Academy
- World Map
- Council
- Income Division
- Revenue Intelligence
- Hermes Agents
- Trading
- Trading Research Corps
- Quant Research Scouts
- Research Scheduler
- Intelligence Corps
- Research Router
- Commerce
- Research
- War Room
- Knowledge Vault
- Programs
- Settings

## Current Workstation Focus

Commerce is the first real manual workstation.

Current Commerce purpose:

- Validate Shopify opportunities manually.
- Capture evidence before expansion.
- Keep the workflow grounded until repeatable value is demonstrated.

Trading remains research only. APEX is Beta and focused on data collection and research. No fake trades, fake PnL, or live execution metrics should be added.




## ORION v0.1 Backtester Prototype

Current source of truth:

- ORION_BACKTEST_SPEC_001.md
- research/orion/README.md
- research/orion/orion_config.json
- research/orion/src/orion_backtest.py

Purpose:

- Run local CSV-only historical research for SPY/QQQ 15-minute Opening Range Breakout.

Inputs:

- research/orion/data/SPY.csv
- research/orion/data/QQQ.csv

Expected CSV columns:

- timestamp
- open
- high
- low
- close
- volume

Outputs:

- trade_log.csv
- summary.json
- equity_curve.csv
- heatmap_time_of_day.csv
- heatmap_day_of_week.csv
- regime_breakdown.csv
- ema_filter_comparison.csv

No-lookahead rule:

- Signals are formed on completed bars.
- Entries happen at the next bar open.
- Opening range values are used only after the opening range window closes.

Hard boundaries:

- No live trading.
- No broker connection.
- No orders.
- No paper trading yet.
- No money at risk.
- No paid/live data fetching.

## ORION Backtest Spec 001

Current source of truth:

- ORION_BACKTEST_SPEC_001.md
- QUANT_RESEARCH_TASK_001_ORION.md
- src/data/quantResearchScouts.ts

Purpose:

- Convert ORION SPY/QQQ Opening Range Breakout research into exact backtest rules before any prototype code is built.

Spec includes:

- 5-minute ORB.
- 15-minute ORB.
- 30-minute ORB.
- SPY and QQQ.
- VWAP, ATR, volume, previous day high/low, premarket high/low if available, and time-of-day fields.
- Markov/regime research.
- EMA ribbon / trend heatmap research.
- Required heatmaps, output tables, and pass/fail gates.

Recommendation:

- Code the 15-minute ORB first.

Doctrine:

- Indicators are not edge. Indicators are hypotheses. Every signal must prove value through out-of-sample testing.

Hard boundaries:

- No live trading.
- No broker connection.
- No paper trading yet.
- No options execution.
- No autonomous execution.
- No money at risk.
- No profitability claim without historical test evidence.

## Quant Research Scouts v2.7.1

Current source of truth:

- QUANT_RESEARCH_SCOUTS_STATUS.md
- docs/QUANT_RESEARCH_WORKFLOW.md
- QUANT_RESEARCH_TASK_001_ORION.md
- src/data/quantResearchScouts.ts
- src/pages/QuantResearchScouts.tsx

Quant Scouts turn Trading Research Corps into a research intake engine. Scouts collect, summarize, score, assign, and rank trading research before any backtest or paper trade is authorized.

Scout roles:

- GitHub Quant Scout.
- QuantConnect Scout.
- Reddit Quant Scout.
- Academic Paper Scout.
- Options Strategy Scout.
- ICT Mechanics Scout.
- Data Vendor Scout.
- Backtest Feasibility Scout.

Doctrine: Quant Scouts research. Backtesters validate. Programs paper trade. Mission Commander approves live risk.

Current recommendation: ORION should be the first prototype candidate, focused on SPY/QQQ Opening Range Breakout. This is a recommendation to create a backtest specification only. Do not claim profitability without independent historical test evidence.

Hard boundaries: no live trading, broker connection, wallet connection, options execution, paper mode, autonomous execution, money at risk, fake PnL, fake expectancy, fake win rate, or strategy promotion before validation.

## Quant Scout Mission 001

Current source of truth:

- QUANT_SCOUT_MISSION_001.md
- TRADING_RESEARCH_CORPS_STATUS.md
- src/data/tradingResearchCorps.ts
- src/pages/TradingResearchCorps.tsx

Programs now include:

- PAIRFORGE: pairs/statistical arbitrage research.
- VOLTA: options/volatility research.
- ATLAS: factor/buy-and-hold portfolio research.
- ORION: SPY/QQQ-only chart research.
- WRAITH: mechanical liquidity sweep / FVG research.

Recommended first prototype: ORION.

Recommended first signal: SPY/QQQ Opening Range Breakout.

WRAITH rule: if an ICT/FVG/liquidity concept cannot be defined mechanically, it does not enter the bot. No live trading, broker connection, options execution, wallet execution, or money at risk is authorized.

## Trading Research Corps v2.6

Current source of truth:

- TRADING_RESEARCH_CORPS_STATUS.md
- src/data/tradingResearchCorps.ts
- src/pages/TradingResearchCorps.tsx

Programs:

- PAIRFORGE: pairs trading / statistical arbitrage research.
- VOLTA: options / volatility research.
- ATLAS: long-term buy-and-hold / factor portfolio research.

Doctrine: Trading programs are research programs until evidence proves expectancy. Every strategy must pass historical validation before paper mode.

Hard boundaries: no live trading, no brokerage connection, no options execution, no money at risk, no fake PnL, no fake expectancy, no fake win rate, and no strategy promotion before historical validation.

## Venture Scouts v2.7

Current source of truth:

- VENTURE_SCOUTS_STATUS.md
- src/data/ventureScouts.ts

Venture Scouts expand Revenue Corps into business-model discovery across Marketplace, Media, Software, Opportunity, and Asset divisions. They report to Revenue Architect, not directly to Mission Commander.

Every scout uses the same Opportunity Scorecard:

- Evidence people are paying.
- Time to first dollar.
- Originality and differentiation.
- Fit with THE GRID's current capabilities.
- Recurring revenue potential.
- Confidence score from 0 to 100.

Scores remain N/A until evidence exists. Scouts may gather public/manual evidence and create reports only. They may not publish, message customers, spend money, automate accounts, scrape against platform rules, copy protected work, or start experiments without Mission Commander approval.

## Launch Center v2.2

THE GRID has entered the marketplace.

Current source of truth:

- LAUNCH_CENTER_STATUS.md
- src/data/launchCenter.ts
- src/pages/LaunchCenter.tsx

Current launch:

- EXP-1 - Fiverr AI Automation Consulting.
- Status: LIVE.
- Launch Date: July 2, 2026.
- Mission: Operation First Revenue.

Current KPI focus:

- Impressions.
- Click-through rate.
- Messages.
- Consultations.
- Orders.
- Reviews.
- Revenue.

Do not fabricate metrics. Unknown values remain N/A until platform evidence exists. Do not over-edit the new live gig while indexing starts unless there is an obvious mistake.

## Identity System + Scout Agent Layer v2.1

THE GRID now has a reusable visual identity layer and the first Scout Officer layer.

Current source of truth:

- IDENTITY_SYSTEM_STATUS.md
- SCOUT_OFFICER_STATUS.md
- src/data/identitySystem.ts
- src/components/identity/GridIdentity.tsx
- src/data/scoutOfficers.ts

Identity components:

- Company Seal
- Founding Day Plaque
- Operation First Revenue Campaign Patch
- Division Insignias
- Officer Badge shell
- Mission Ribbons

Scout Officers:

- Market Scout: reports to Revenue Architect; Planned / Research Only.
- Demand Scout: reports to Revenue Architect; Planned / Research Only.
- Risk Scout: reports to Sentinel and Revenue Architect; Planned / Advisory Only.

Scout boundaries: no publishing, customer messaging, spending, account automation, scraping against platform rules, copied listings, copied designs, fake reviews, or fabricated metrics. Scouts gather public evidence and create reports only.

## Phase II - Living Systems v2.0

Phase I Foundation is complete. Phase II begins with THE GRID Nervous System.

Current source of truth:

- NERVOUS_SYSTEM_STATUS.md
- src/data/eventRegistry.ts
- src/data/officerNetwork.ts
- src/data/bridge.ts
- src/data/chronicle.ts
- src/pages/Bridge.tsx

Operating pattern:

- Officer
- Event
- Mission Bus
- Mission Control
- Executive Brief

Current v2.0 features:

- Event Registry
- Officer Network
- The Bridge
- Launch Center
- Division Health
- Company Health
- Chronicle
- Event-driven Mission Control references

Article 0 - The Mission is now part of THE_GRID_CONSTITUTION.md.

Hard boundaries: no backend, networking, polling, account actions, external writes, autonomous execution, fabricated live activity, or fake metrics.

## The Academy v1.7

THE GRID now includes The Academy, the permanent institutional learning division.

Current source of truth:

- src/data/academy.ts
- src/pages/Academy.tsx
- Mission Control Academy Snapshot
- World Map Academy District

Academy wings:

- Founding Hall
- Playbooks
- Master Classes
- Hall of Wins
- Hall of Failures
- Evolution Lab
- Hall of Command

Founding Day:

- July 2, 2026.

Purpose:

- Every lesson learned becomes permanent institutional knowledge.

Hard boundaries: typed static data only; no backend, persistence, fake wins, invented failures, fake metrics, autonomous learning system, or claims that unvalidated playbooks are proven.

## Operations Floor v1.5

Mission Control is now the Operations Floor.

Current source of truth:

- OPERATIONS_FLOOR.md
- src/data/missionEvents.ts
- src/data/officerPresence.ts
- src/pages/MissionControl.tsx

The Mission Event Bus is a typed local event model only. It lets future officers, Programs, and divisions publish compatible events without Mission Control knowing every producer.

Current Operations Floor modules:

- Mission Countdown
- Company Health
- Operations Feed
- Officer Presence
- Approval Queue
- Decision Records
- Mission Pipeline Snapshot
- Program Status
- Current Executive Brief
- Recently Completed Experiments
- Current Top Priorities

Hard boundaries: no backend, no polling, no networking, no autonomous execution, no live approvals, no external integrations, and no fabricated activity.

## Operations Intelligence v1.6

Mission Control now includes standardized company and division KPIs.

Current source of truth:

- OPERATIONS_INTELLIGENCE.md
- src/data/companyKpis.ts
- src/pages/MissionControl.tsx

Current division reports:

- Income Division
- Commerce
- APEX
- CLU
- Operations

KPI doctrine:

- No vanity metrics.
- Unknown values remain N/A.
- Every KPI cites evidence.
- Real values require records.
- Do not fabricate revenue, conversion, trades, users, inquiries, or performance.

Hard boundaries: typed static reporting only; no external reads, account connections, jobs, automation, or fake metrics.

## Mission Pipeline v1.4

Every idea in THE GRID starts in the Mission Pipeline.

Current source of truth:

- MISSION_PIPELINE.md
- src/data/missionPipeline.ts
- src/pages/MissionPipeline.tsx
- Mission Control Mission Pipeline Snapshot

Pipeline:

- Idea
- Research
- Evidence Score
- Approval
- Experiment
- Revenue
- Scale
- Playbook
- Automation
- Division
- Program
- Institutional Knowledge

Doctrine:

- Nothing skips the pipeline.
- Evidence gates precede approval gates.
- Revenue precedes scale.
- Playbooks precede automation.
- Programs earn autonomy only after validated repeated workflows.

Hard boundaries: no backend, no persistence, no live stage advancement, no account action, no publishing, no spending, no scraping, and no automation.

## Approval System v1.3

Approvals and Decision Records are now first-class objects inside THE GRID.

Current source of truth:

- APPROVAL_SYSTEM.md
- DECISION_RECORDS.md
- src/data/approvalSystem.ts
- Revenue Intelligence page
- Mission Control Approval Queue Snapshot

Current approval:

- AR-001: Revenue Architect / Income Lane Scoring Sprint / Awaiting Commander / LOW risk / $0 cost.

Current decision record:

- DR-001: Income Division becomes primary offensive effort.

Doctrine:

- Everything irreversible flows through the Approval Queue.
- Mission Records answer what happened.
- Decision Records answer why the choice was made.
- Mission Commander remains final approval authority.

Hard boundaries: no backend, no persistence, no live approval execution, no account actions, no publishing, no spending, no scraping, and no automation.

## Founding Constitution v1.2

THE_GRID_CONSTITUTION.md is now the foundational governing document of THE GRID. FOUNDING_COUNCIL_BRIEF.md is the first-read onboarding packet for every AI or human joining the project.

It consolidates existing doctrine for:

- Mission Commander authority
- Executive Council advisory boundaries
- Officer doctrine
- Program doctrine
- Mission lifecycle
- Approval gates
- Institutional memory
- Promotion and activation rules
- Engineering doctrine
- Mission records and amendments

Treat the constitution as the canonical governance reference. Do not add doctrine, autonomy, integrations, or business claims that conflict with it.

## Hermes Agents v0.9

THE GRID now includes a Hermes agent profile preparation layer. This is not live automation. It defines future specialist identities, allowed autonomy levels, prohibited actions, placeholders, and approval gates before any account connection exists.

Current source of truth:

- HERMES_AGENT_STATUS.md
- docs/HERMES_AGENT_ARCHITECTURE.md
- src/data/hermesAgents.ts
- src/pages/HermesAgents.tsx

Profiles:

- ZENITH
- REVENUE ARCHITECT
- DESIGN FORGE
- COPY ROOM
- SENTINEL

Autonomy levels:

- Level 1 Draft
- Level 2 Research
- Level 3 Build
- Level 4 Publish requires approval
- Level 5 Money/actions forbidden for now

Hard prohibitions: no connected accounts, Telegram bots, autonomous publishing, customer messaging, spending, trading, account automation, marketplace interaction, ToS-violating scraping, credential handling, or fabricated agent activity.

Doctrine: prepare identity before integration, define boundaries before autonomy, draft and research before publishing, human approval before external action, Mission Commander decides.

Future Operations Officer pattern: once Hermes has multiple active officers, do not route every officer directly to Mission Commander. A future Operations Officer should aggregate specialist updates into one daily executive briefing with priorities, blockers, recommendations, and decisions that need approval.

## Revenue Architect Activation

Revenue Architect is now the first operating department inside THE GRID.

Current source of truth:

- REVENUE_ARCHITECT_STATUS.md
- src/data/revenueArchitect.ts
- Revenue Intelligence page

Status:

- ACTIVE / ADVISORY ONLY

Mission:

- Help turn Operation First Revenue into one manual, evidence-backed income system before automation is considered.

Reporting line:

- Reports to Mission Commander through Revenue Intelligence and Mission Control.
- ZENITH provides architecture and doctrine oversight.
- SENTINEL provides safety and compliance review.
- Future Operations Officer should eventually aggregate officer reports into one daily executive briefing.

Hard boundaries: no automation, no scraping, no account actions, no autonomous publishing, no customer or supplier messaging, no spending, and no fabricated metrics.

## Revenue Intelligence v0.8

THE GRID now includes a read-only Revenue Intelligence Engine for the Income Division. It helps Mission Commander identify, validate, prioritize, and systematize profitable digital business opportunities without automating marketplace behavior.

Current source of truth:

- src/data/revenueIntelligence.ts
- src/data/senate.ts
- src/pages/RevenueIntelligence.tsx

Modules:

- Market Scanner
- Opportunity Pipeline
- Revenue Score
- Experiment Tracker
- Revenue Dashboard
- Hall of Wins
- Opportunity Radar
- Playbook Library
- The Senate

Senate doctrine:

- Evidence informs
- Officers advise
- Mission Commander decides

Hard prohibitions: no autonomous publishing, automated marketplace interaction, scraping that violates platform ToS, account automation, purchasing, customer messaging, or fabricated metrics. Unknown values must remain Unknown.

## Income Factory v0.7

THE GRID now includes an assisted Income Division revenue factory foundation. It is operational planning UI only, not autonomous marketplace software.

Current source of truth:

- INCOME_FACTORY_STATUS.md
- src/data/incomeFactory.ts
- src/pages/IncomeDivision.tsx

Rooms:

- Market Lab
- Offer Builder
- Asset Factory
- Fiverr Room
- Etsy Room
- Publishing Room
- Revenue War Room
- Compliance Sentinel

Officer references:

- REVENUE ARCHITECT
- DESIGN FORGE
- COPY ROOM
- PUBLISHING ROOM
- SENTINEL

Hard prohibitions: no autonomous publishing, platform scraping violations, fake reviews, copied listings, copyrighted characters, trademarks, auto-DMs, ad spend without approval, spending money, or account automation.

Doctrine: research demand, create original differentiated offers, publish manually, track real results, automate only proven repeated workflows.

## World Map + Council v0.6

THE GRID now includes a World Map and Council layer. Treat these as UI/worldbuilding and information architecture only.

Current source of truth:

- src/data/gridWorld.ts
- src/data/council.ts
- src/pages/WorldMap.tsx
- src/pages/Council.tsx

Architecture model:

- APEX and CLU are independent Programs inside their own arenas.
- Commerce, Publishing, Income Division, and future pipelines are districts inside THE GRID.
- Officers advise. Programs execute. Mission Commander decides.

Do not add backend, autonomous execution, APEX or CLU changes, secrets, live integrations, fake metrics, or research/output folders to git.

## Income Division v0.5

THE GRID now includes an Income Division planning foundation. It is for future Etsy digital products, Fiverr productized services, affiliate / SEO assets, digital products, and creative workflow experiments.

Current source of truth:

- INCOME_DIVISION_STATUS.md
- src/data/incomeDivision.ts
- Mission Control Income Division planning section

Approved lanes:

- Etsy digital products
- Fiverr productized services
- Affiliate / SEO content assets

Do not build scraping bots, live marketplace integrations, Telegram bots, copied product systems, fake review systems, or autonomous posting. The doctrine is: study patterns, create original products, validate demand, publish manually first, automate only repeated workflows.

## Visual Identity v0.4

THE GRID now has a reusable visual identity foundation. Future UI work should use:

- src/data/designTokens.ts for division accents and officer identity
- DesignBackdrop for the global layered background
- OfficerBadge for officer identity surfaces
- DivisionGlow for status LEDs
- GlassPanel for accent-aware glass surfaces
- design-system/ docs for color, typography, glow, cards, backgrounds, iconography, and status LEDs

v0.4 is presentation only. Do not infer new business capabilities from the visual upgrade.

## Forbidden Additions

Do not:

- Invent fake revenue.
- Invent fake users.
- Invent fake trades.
- Invent fake AI activity.
- Simulate autonomous agents.
- Fabricate analytics.
- Claim backend functionality exists.
- Claim persistence exists.
- Claim API wiring exists.
- Claim authentication exists.
- Claim external integrations exist.

## Safe Future Work

- Knowledge Vault
- Mission Logs
- Prompt Library
- Decision History
- Persistence
- Real validated Commerce workflow

## Validation Commands

Use npm for this project.

```bash
npm install
npm run check
npm run build
npm run dev
```

Before committing a milestone, `npm run check` and `npm run build` should pass in the local environment.


## Revenue Corps

Current version: v2.3.0

Revenue Corps is the official name for the former Income Division. It reports through Revenue Architect and exists to create disciplined revenue discovery, product creation, and manual launch preparation.

Structure:

- Revenue Architect: commander.
- Revenue Intelligence: general staff / evidence ranking.
- Scout Corps: Marketplace Scout, Publishing Scout, Bounty Hunter, Asset Scout, Affiliate Scout, Trend Scout, and specialist scouts.
- Product Corps: eBook Foundry, Asset Forge, Game Forge, Thumbnail Forge.
- Launch Corps: Etsy Officer, Fiverr Officer, Gumroad Officer, Blog Officer.

Rules:

- Scouts do not create products.
- Product Corps does not research markets.
- Launch Corps does not invent offers.
- Mission Commander approves irreversible actions.
- Unknown metrics remain N/A.
- No scraping against platform terms, autonomous publishing, customer messaging, spending, account automation, fake reviews, fake revenue, or copied products.


## Scout Reports

Current version: v2.4.0

Scout Reports are the structured manual evidence intake for Revenue Corps.

Scout teams:

- Etsy Scout
- Fiverr Scout
- Gumroad Scout
- Asset Scout
- Bounty Scout
- Trend Scout
- Review Scout
- Pricing Scout

Rules:

- Scouts report to Revenue Architect.
- Revenue Architect ranks opportunities.
- Mission Commander approves experiments.
- Unknown values stay N/A.
- No scraping integrations, account automation, autonomous publishing, customer messaging, fake marketplace data, fake reviews, copied products, or fabricated opportunity scores.

Doctrine:

Scouts discover demand. Product Corps creates original assets. Launch Corps publishes only after Mission Commander approval.


## Obsidian Knowledge Vault Bridge

Current version: v2.5.0

Obsidian is the long-term second brain. Hermes remains institutional memory. THE GRID remains the visual command center.

Key files:

- OBSIDIAN_VAULT_STATUS.md
- docs/OBSIDIAN_BRIDGE.md
- scripts/exportObsidianVault.js
- src/data/obsidianBridge.ts
- obsidian-vault/

Rules:

- No Obsidian API yet.
- No sync automation yet.
- No secrets.
- No .env files.
- No API keys.
- No raw logs unless sanitized.
- The export script must never delete files and must back up before overwrite.


## Opportunity Radar

Current version: v2.6.0

Opportunity Radar is the permanent opportunity hunting surface for Revenue Corps.

Every opportunity is documented, scored, reviewed, and ranked before Mission Pipeline entry.

Included modules:

- Opportunity Radar
- Experiment Lab
- Revenue Forecasting
- Revenue Flywheel
- Product Foundry
- Marketplace Intelligence
- DealFlow Incubator
- Opportunity Queue

Rules:

- Unknown values stay N/A.
- Forecasts are planning models only.
- Revenue Architect ranks opportunities.
- Mission Commander approves experiments.
- No backend, scraping integrations, account automation, autonomous publishing, spending, fake data, or fabricated scores.

## Research Scheduler v2.8.0

Current source of truth:

- RESEARCH_SCHEDULER_STATUS.md
- GIT_WORKFLOW.md
- src/data/researchScheduler.ts
- src/pages/ResearchScheduler.tsx

Purpose:

Research Scheduler coordinates semi-autonomous research missions for Revenue Corps and Quant Research Corps. It is a typed schedule and report queue only. No external scheduler, networking, account connection, broker connection, marketplace action, or autonomous execution exists.

Doctrine:

Scouts may research on schedule. Scouts may create reports. Scouts may rank opportunities. Scouts may recommend experiments. Scouts may not publish, trade, message, spend, or execute.

Current scheduled missions:

- Revenue Corps: Etsy, Fiverr, Gumroad, YouTube / Shorts, Bounty, and GitHub Opportunity daily scans.
- Quant Research Corps: ORION, WRAITH, PAIRFORGE, VOLTA, and ATLAS research missions.

Hard boundaries:

- No publishing.
- No trading.
- No broker connection.
- No customer messages.
- No spending.
- No account automation.
- No irreversible actions.
- Research reports only.
- Mission Commander approves experiments.

## Intelligence Corps v3.0.0

Current source of truth:

- INTELLIGENCE_CORPS_STATUS.md
- RESEARCH_ROUTER.md
- OBSIDIAN_VAULT_STRUCTURE.md
- src/data/intelligenceCorps.ts
- src/data/researchRouter.ts
- src/data/scoutRegistry.ts
- src/data/obsidianVault.ts
- src/pages/IntelligenceCorps.tsx
- src/pages/ResearchRouter.tsx

Principle:

Knowledge belongs to THE GRID, not to any individual AI. Hermes, Claude, ChatGPT, Claude Code, Codex, and future providers are contributors. The durable memory belongs in THE GRID records and Obsidian.

Divisions:

- Revenue Scouts
- Quant Scouts
- Engineering Scouts
- DealFlow Scouts
- AI Research Scouts

Research Router platforms:

- ChatGPT
- Hermes
- Claude
- Claude Code
- Codex
- Future providers

Hard boundaries:

- No live AI provider routing.
- No API calls.
- No Obsidian sync automation.
- No publishing.
- No trading.
- No broker connection.
- No customer messaging.
- No spending.
- No account automation.
- No irreversible actions.
- No autonomous execution.

## Headquarters v3.2.0

Start every future AI session by reading GRID_SYSTEM_PROMPT.md.

GRID_SYSTEM_PROMPT.md is the single source of truth for doctrine, roles, loops, approval boundaries, and knowledge ownership. Do not duplicate doctrine in new docs; reference the system prompt.

Current headquarters documents:

- GRID_SYSTEM_PROMPT.md
- OBSIDIAN_SYNC_MAP.md
- MISSION_BOARD.md
- RESEARCH_ROUTER.md

Chief Engineer doctrine:

Claude Code is Chief Engineer. Engineering decisions are made from the root GRID repository, not isolated APEX or CLU sessions.

Documentation doctrine:

Future reports should be Obsidian-compatible Markdown and should naturally belong inside the Second Brain.

## Operations Hub v1.0

Current source of truth:

- OPERATIONS_HUB.md
- src/data/operationsHub.ts
- src/pages/OperationsHub.tsx

Rule:

Nothing enters Mission Control unless it has a Mission ID.

Purpose:

Operations Hub reduces Mission Commander coordination by routing work through one mission queue before it reaches the command floor.

Hard boundary:

Mission actions are operating intents only. They do not execute publishing, trading, customer messaging, spending, backtests, approvals, or Obsidian writes.

## Execution Support Sprint

Current priority order:

1. Customer acquisition.
2. Product launches.
3. Operations Hub.
4. Obsidian integration.
5. Trading validation.

Everything else enters the backlog.

Engineering rule:

Every feature must answer whether it increases revenue, reduces coordination, or improves validated learning. If not, recommend postponing it.

ORION Backtester is now Engineering's highest Trading priority. No live trading, broker connection, paper mode, options execution, wallet execution, or money at risk is authorized.

## Daily Command Brief v1.0

Current source of truth:

- COMMAND_BRIEF_TEMPLATE.md
- src/data/dailyCommandBrief.ts
- src/pages/DailyCommandBrief.tsx

Daily Command Brief is the first page Mission Commander sees every morning. It reports Operations, Revenue, Engineering, Trading, Knowledge, Customers, Launches, Backtests, and Mission Records with the same schema and ends with ONE Recommendation.

Do not add extra brief sections without approval. Unknown values remain N/A. Evidence must link back to Mission IDs and Obsidian notes.


## Stabilization And Repository Consolidation

Current source of truth:

- STABILIZATION_STATUS.md
- REPOSITORY_CONSOLIDATION_PLAN.md
- GIT_WORKFLOW.md

Canonical working tree:

`C:\Users\NovaI\Documents\Codex\2026-06-30\mission-create-the-first-version-of`

Do not move, merge, reset, clean, stage, or commit active work unless Mission Commander approves. Treat the Codex repository as canonical and preserve Git history during any future relocation.


## Launch Intelligence v1.0

Current source of truth:

- src/data/launchIntelligence.ts
- EVIDENCE_LEDGER.md
- src/data/launchCenter.ts
- src/data/operationsHub.ts

Launch Intelligence tracks only real launch evidence. It separates execution metrics controlled by THE GRID from market metrics controlled by customers and platforms. Unknown market values remain Unknown or Awaiting Evidence until Mission Commander records actual evidence.

R-005 Print-on-Demand Scout is a persistent Revenue Corps research mission. It researches POD demand, competition, pricing, production cost, margin, difficulty, time to revenue, and confidence only. It may output Proceed, Hold, or Reject for Revenue Architect review, but it does not authorize launch, product creation, design generation, listings, storefronts, supplier outreach, scraping, or spending.


## Playbook System v1.0

Current source of truth:

- GRID_PLAYBOOKS.md
- PLAYBOOK_TEMPLATE.md
- src/data/playbooks.ts
- src/pages/Playbooks.tsx

Doctrine:

THE GRID does not merely remember outcomes. It converts validated experience into reusable playbooks.

All initial playbooks PB-001 through PB-008 are Draft placeholders. Do not mark a playbook Tested or Validated unless real Evidence Ledger entries, Mission Records, lessons learned, and Mission Commander review support the promotion.

## WRAITH-LSTM v0.1

Current source of truth:

- research/wraith_lstm/README.md
- research/wraith_lstm/config.json
- research/wraith_lstm/src/features.py
- research/wraith_lstm/src/dataset.py
- research/wraith_lstm/src/model.py
- research/wraith_lstm/src/train.py
- research/wraith_lstm/src/evaluate.py
- research/wraith_lstm/src/baselines.py

Purpose:

- Experimental local CSV-only sequential model for WRAITH crypto liquidation research.

Expected input columns:

- timestamp
- open
- high
- low
- close
- volume
- long_liquidations
- short_liquidations
- open_interest
- funding_rate

Outputs:

- metrics.json
- predictions.csv
- feature_summary.csv
- evaluation_report.md

Validation commands:

- python research/wraith_lstm/src/train.py --help
- python research/wraith_lstm/src/evaluate.py --help

Doctrine:

LSTM is a signal generator, not a trading system. No model can advance unless it beats simple baselines out-of-sample.

Hard boundaries:

No live trading, exchange execution, wallet connection, broker connection, money at risk, or alpha claim without evidence.

## WRAITH-LSTM v0.2 Data Contract

Current source of truth:

- research/wraith_lstm/README.md
- research/wraith_lstm/config.json
- research/wraith_lstm/src/validate_data.py
- research/wraith_lstm/data/sample_data_format.csv
- research/wraith_lstm/DATA_PROVIDER_RESEARCH.md

Strict required columns:

- timestamp
- symbol
- open
- high
- low
- close
- volume
- long_liquidations_usd
- short_liquidations_usd
- long_liquidations_count
- short_liquidations_count
- largest_long_liquidation_usd
- largest_short_liquidation_usd
- open_interest
- funding_rate

Validation commands:

- python research/wraith_lstm/src/validate_data.py --help
- python research/wraith_lstm/src/train.py --help
- python research/wraith_lstm/src/evaluate.py --help

The sample CSV is schema-only dummy structure. Do not use it for training, metrics, model claims, or alpha claims.

## Alpha Lab v1.0

Current source of truth:

- ALPHA_LAB_STATUS.md
- ALPHA_GENERATION_DOCTRINE.md
- src/data/alphaLab.ts
- src/pages/AlphaLab.tsx

Purpose:

Alpha Lab is THE GRID's permanent alpha-generation system. It organizes trading hypotheses into alpha families and records each hypothesis with data requirements, expected edge source, model type, evidence score, overfitting risk, implementation difficulty, and current verdict.

Core doctrine:

- No strategy is permanent.
- Every hypothesis competes against evidence.
- Every model must continually earn its place.
- The edge is not one signal.
- The edge is the research engine.

ALPHA-501 maps WRAITH-LSTM to the Alpha Library as Sequential Liquidation Model. It does not assume liquidation patterns are momentum or contrarian. It tests both possibilities and lets evidence decide.

Hard boundaries:

No fake alpha, fake backtests, fake data, live trading, exchange connection, wallet connection, broker connection, paper trading authorization, money at risk, or strategy promotion without evidence.

## ORION v0.2 First Backtest Gate

Current source of truth:

- ORION_BACKTEST_RUNBOOK.md
- research/orion/README.md
- research/orion/data/README.md
- research/orion/src/validate_data.py
- research/orion/src/orion_backtest.py

Expected data files:

- research/orion/data/SPY.csv
- research/orion/data/QQQ.csv

Expected CSV schema:

- timestamp
- open
- high
- low
- close
- volume

Validation command:

- python research/orion/src/validate_data.py --spy research/orion/data/SPY.csv --qqq research/orion/data/QQQ.csv

First backtest command after validation passes:

- python research/orion/src/orion_backtest.py --config research/orion/orion_config.json

Current blocker:

Mission Commander must provide real SPY/QQQ intraday CSV data.

No fake data, profitability claim, live trading, broker connection, paper mode, money at risk, or strategy promotion is authorized.
