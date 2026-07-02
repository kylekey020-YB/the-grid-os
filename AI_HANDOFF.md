# THE GRID AI Handoff

Current Version: v0.7.0

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
- World Map
- Council
- Income Division
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
