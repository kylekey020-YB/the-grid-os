# Hermes Agent Architecture

Current Version: v0.9.0

## Purpose

Hermes is the planned agent-profile layer for THE GRID. It is not a live automation system. The purpose of v0.9.0 is to define how future specialist profiles should be represented before any external integrations are authorized.

## Architecture Boundary

Hermes profiles are static typed data and UI surfaces. They do not connect to:

- Telegram
- Etsy, Fiverr, Gumroad, YouTube, affiliate platforms, or other marketplaces
- Payment processors
- Wallets or trading systems
- Supplier accounts
- Customer messaging systems

## Profile Model

Each profile defines:

- Role
- Personality
- Allowed autonomy level
- Prohibited actions
- Telegram bot placeholder
- SOUL.md placeholder
- Playbooks placeholder
- Recurring jobs placeholder
- Approval gates

The active source of truth is src/data/hermesAgents.ts.

## Autonomy Ladder

### Level 1 Draft

The profile may prepare local drafts for review. It cannot publish, message, purchase, or modify external systems.

### Level 2 Research

The profile may organize evidence from approved sources. Unknowns must remain unknown.

### Level 3 Build

The profile may help create local UI, documents, assets, and workflow scaffolds after a mission directive approves the work.

### Level 4 Publish requires approval

The profile may prepare publishable packages, but publishing remains a manual approval gate.

### Level 5 Money/actions forbidden for now

Money movement, trading, wallet actions, customer messaging, supplier outreach, marketplace publishing, and account operations are outside the current authorization boundary.

## Future Operations Officer Pattern

As Hermes grows, officers should not all report directly to Mission Commander. A future Operations Officer should gather specialist reports into a single daily executive briefing containing:

- Priorities
- Blockers
- Recommendations
- Decisions that require approval

This keeps THE GRID scalable as the number of officers grows. Specialist officers advise within their domains; the Operations Officer summarizes; Mission Commander decides.

## Future Integration Path

A future Hermes implementation should require:

- Explicit mission approval
- Per-profile scopes
- Secrets isolation
- Audit logs
- Dry-run mode
- Manual approval gates
- Rollback plan
- Platform terms review
- Sentinel safety review

## Doctrine

Evidence informs. Officers advise. Profiles prepare. Programs execute only after validation. Mission Commander decides.
