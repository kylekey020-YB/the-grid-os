# THE GRID Operations Floor

Current Version: v1.6.0

Introduced in: v1.5.0

## Purpose

The Operations Floor turns Mission Control into the executive headquarters of THE GRID. It consolidates mission events, officer presence, approvals, decision records, mission pipeline state, program status, and the current executive brief into one read-only command surface.

## Mission Event Bus

The Mission Event Bus is a typed local event model. It is not networking, polling, persistence, or automation.

Current event types:

- Mission Record
- Decision Record
- Approval
- Research Complete
- Experiment Started
- Experiment Complete
- Paper Trade
- Status Update

Shared event shape:

```ts
export type MissionEvent = {
  id: string;
  type: MissionEventType;
  source: MissionEventSource;
  timestamp: string;
  title: string;
  status: MissionEventStatus;
  summary: string;
  evidenceRef: string;
};
```

Current source of truth:

- src/data/missionEvents.ts
- src/data/approvalSystem.ts
- src/data/missionPipeline.ts
- src/data/revenueIntelligence.ts

## Operations Feed

The Operations Feed renders events from typed local data. Mission Control does not need to know which officer, Program, or division produced the event. Future systems should publish compatible events instead of requiring custom Mission Control wiring.

Unknown event dates should remain N/A. Do not fabricate live timestamps.

## Officer Presence

Officer Presence Cards track:

- Status
- Current assignment
- Last completed action
- Reports waiting
- Home division

Current source of truth:

- src/data/officerPresence.ts

Current officers:

- ZENITH
- Hermes
- Revenue Architect
- Revenue Intelligence
- Claude
- Claude Code
- Codex

## Safety Boundary

The Operations Floor is read-only.

It does not include:

- Backend
- Polling
- Networking
- Autonomous execution
- Live approvals
- External integrations
- Account actions
- Trading execution
- Marketplace publishing
- Fabricated metrics

Doctrine: Evidence informs. Officers advise. Mission Commander decides.
