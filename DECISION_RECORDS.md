# Decision Records

Current Version: v1.3.0

## Purpose

Mission Records answer: what happened?

Decision Records answer: why did we choose this?

Decision Records preserve reasoning so future contributors do not need to rediscover why THE GRID moved in a certain direction.

## Doctrine

- Evidence before expansion.
- Mission Commander decides.
- Officers advise.
- Unknown values remain Unknown.
- If a decision matters, record it.

## Decision Record Format

Each decision record should include:

- Decision Record ID.
- Decision.
- Reason.
- Evidence.
- Approved by.
- Date.
- Outcome.

## Current Records

### DR-001

Decision:

- Income Division becomes primary offensive effort.

Reason:

- Operation First Revenue has a 31-day urgency window while Commerce remains in Gate A validation.

Evidence:

- Revenue Architect assessment.
- Active Operation First Revenue objective.
- Current Commerce gate status.

Approved by:

- Mission Commander.

Date:

- July 2, 2026.

Outcome:

- Revenue Architect activated as ACTIVE / ADVISORY ONLY.
- Income board became the first operating department surface.

## Current Implementation

The current implementation is static and read-only:

- Source data: src/data/approvalSystem.ts.
- UI surface: Revenue Intelligence.
- No backend or persistence exists yet.
