import type { MissionEventSource, MissionEventType } from "@/data/missionEvents";

export type EventRegistryStatus = "Active" | "Prepared" | "Planned" | "Dormant";

export type EventChannel = {
  id: string;
  name: string;
  eventType: MissionEventType;
  purpose: string;
  publishers: MissionEventSource[];
  consumers: string[];
  status: EventRegistryStatus;
  evidenceBoundary: string;
};

export type EventRegistrySummary = {
  version: string;
  phase: string;
  doctrine: string[];
  safetyBoundary: string;
};

export const eventRegistrySummary: EventRegistrySummary = {
  version: "v2.0.0",
  phase: "Phase II - Living Systems",
  doctrine: [
    "Everything publishes events.",
    "Nothing directly controls anything else.",
    "Mission Control renders the latest picture.",
    "Executive Briefs summarize evidence, blockers, recommendations, and decisions needed.",
    "No event claims live activity unless a real producer exists.",
  ],
  safetyBoundary: "Typed architecture only. No backend, no networking, no polling, no external writes, no autonomous execution.",
};

export const eventChannels: EventChannel[] = [
  {
    id: "event-mission-record",
    name: "Mission Record",
    eventType: "MISSION_RECORD",
    purpose: "Record what happened inside a mission.",
    publishers: ["Hermes", "Codex", "Mission Pipeline"],
    consumers: ["Mission Control", "The Academy", "Chronicle"],
    status: "Prepared",
    evidenceBoundary: "Requires an actual mission event or human-entered record.",
  },
  {
    id: "event-decision-record",
    name: "Decision Record",
    eventType: "DECISION_RECORD",
    purpose: "Record why a choice was made.",
    publishers: ["Revenue Architect", "ZENITH"],
    consumers: ["Mission Control", "The Academy", "Executive Brief"],
    status: "Active",
    evidenceBoundary: "Requires a documented decision, reason, evidence, and approver.",
  },
  {
    id: "event-approval",
    name: "Approval",
    eventType: "APPROVAL",
    purpose: "Route irreversible decisions to Mission Commander.",
    publishers: ["Revenue Architect", "Mission Pipeline"],
    consumers: ["Mission Control", "Bridge", "Executive Brief"],
    status: "Active",
    evidenceBoundary: "Requires risk, cost, boundary, evidence, and requested decision.",
  },
  {
    id: "event-research-complete",
    name: "Research Complete",
    eventType: "RESEARCH_COMPLETE",
    purpose: "Signal that a research item has enough evidence for review.",
    publishers: ["Revenue Intelligence", "Commerce", "APEX", "CLU"],
    consumers: ["Mission Pipeline", "The Academy", "Executive Brief"],
    status: "Prepared",
    evidenceBoundary: "Requires sourced notes and unknowns clearly marked.",
  },
  {
    id: "event-experiment-started",
    name: "Experiment Started",
    eventType: "EXPERIMENT_STARTED",
    purpose: "Record a bounded manual experiment and its hypothesis.",
    publishers: ["Revenue Intelligence", "Commerce"],
    consumers: ["Mission Control", "The Academy", "Division Health"],
    status: "Active",
    evidenceBoundary: "Requires hypothesis, owner, approval boundary, and evidence requirement.",
  },
  {
    id: "event-experiment-complete",
    name: "Experiment Complete",
    eventType: "EXPERIMENT_COMPLETE",
    purpose: "Record experiment outcome and scale, kill, or retry decision.",
    publishers: ["Revenue Intelligence", "Commerce"],
    consumers: ["Mission Control", "The Academy", "Chronicle"],
    status: "Prepared",
    evidenceBoundary: "Requires result evidence. Unknown remains Unknown.",
  },
  {
    id: "event-paper-trade",
    name: "Paper Trade",
    eventType: "PAPER_TRADE",
    purpose: "Future normalized event for paper trading research summaries.",
    publishers: ["APEX", "CLU"],
    consumers: ["Mission Control", "Division Health", "The Academy"],
    status: "Dormant",
    evidenceBoundary: "No current trading feed is connected to this repo.",
  },
  {
    id: "event-status-update",
    name: "Status Update",
    eventType: "STATUS_UPDATE",
    purpose: "Report state changes without coupling pages together.",
    publishers: ["ZENITH", "Hermes", "Revenue Architect", "Mission Pipeline", "Codex"],
    consumers: ["Mission Control", "Bridge", "Executive Brief"],
    status: "Active",
    evidenceBoundary: "Requires typed source, status, summary, and evidence reference.",
  },
];
