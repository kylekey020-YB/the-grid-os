# Operations Hub

Version: Operations Hub v1.0
Status: Central mission queue / no execution automation
Date: July 3, 2026

Doctrine source: [[GRID_SYSTEM_PROMPT]]

## Objective

Reduce Mission Commander coordination by routing all active work through one screen and one mission queue.

## Rule

Nothing enters Mission Control unless it has a Mission ID.

## Execution Support Priority

Priority order:

1. Customer acquisition.
2. Product launches.
3. Operations Hub.
4. Obsidian integration.
5. Trading validation.

Everything else enters the backlog.

## Engineering Rule

Every feature must answer:

1. Does this increase revenue?
2. Does this reduce coordination?
3. Does this improve validated learning?

If not, recommend postponing it.

## Mission Inbox Fields

Every mission must include:

- Mission ID
- Title
- Division
- Priority
- Owner
- Assigned Intelligence
- Status
- Created
- Due
- Evidence
- Related Obsidian Note

## Statuses

- Draft
- Assigned
- Researching
- Awaiting Review
- Approved
- Building
- Launching
- Measuring
- Completed
- Archived

## Today's Focus

The Operations Hub shows only:

- Top 5 active missions
- Top 3 blockers
- Approvals waiting
- Customer messages
- Launches
- Backtests running

## Execution Metrics

Only real metrics are allowed. Unknown values remain N/A until evidence exists.

Tracked examples:

- Revenue.
- Customers.
- Products Live.
- Products Pending.
- Research Missions.
- Experiments.
- Backtests.
- Mission Records.
- Executive Briefs.

## Mission Actions

- Create Mission
- Assign Mission
- Complete Mission
- Archive Mission
- Create Obsidian Note
- Open Obsidian Note

These are operating intents in v1.0. They do not execute external systems.

## Daily Workflow

Morning Brief

↓

Mission Queue

↓

Execution

↓

Evidence

↓

Executive Brief

↓

Archive

## Implementation

- src/data/operationsHub.ts
- src/pages/OperationsHub.tsx

## Boundaries

- No new divisions.
- No new officers.
- No decorative dashboards.
- No backend.
- No persistence.
- No external execution.
- No publishing.
- No trading.
- No customer messaging.
- No spending.
- No automatic Obsidian writes from the UI.

## Purpose Test

Operations Hub exists only to reduce time-to-revenue, improve execution, and preserve mission knowledge.
