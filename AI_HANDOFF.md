# THE GRID AI Handoff

Current Version: v2.1.0

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
