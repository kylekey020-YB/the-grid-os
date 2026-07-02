import { approvalQueue, decisionRecords } from "@/data/approvalSystem";
import { experimentTracker } from "@/data/revenueIntelligence";
import { missionPipelineItems } from "@/data/missionPipeline";

export type MissionEventType =
  | "MISSION_RECORD"
  | "DECISION_RECORD"
  | "APPROVAL"
  | "RESEARCH_COMPLETE"
  | "EXPERIMENT_STARTED"
  | "EXPERIMENT_COMPLETE"
  | "PAPER_TRADE"
  | "STATUS_UPDATE";

export type MissionEventStatus = "completed" | "awaiting_commander" | "active" | "research" | "pending_evidence" | "blocked";

export type MissionEventSource = "ZENITH" | "Hermes" | "Revenue Architect" | "Revenue Intelligence" | "APEX" | "CLU" | "Commerce" | "Mission Pipeline" | "Codex";

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

const currentRecordDate = "2026-07-02";

const approvalEvents: MissionEvent[] = approvalQueue.map((approval) => ({
  id: approval.id,
  type: "APPROVAL",
  source: "Revenue Architect",
  timestamp: currentRecordDate,
  title: approval.title,
  status: approval.status === "Awaiting Commander" ? "awaiting_commander" : "completed",
  summary: approval.requestedDecision,
  evidenceRef: approval.evidence,
}));

const decisionEvents: MissionEvent[] = decisionRecords.map((record) => ({
  id: record.id,
  type: "DECISION_RECORD",
  source: "Revenue Architect",
  timestamp: record.date,
  title: record.decision,
  status: "completed",
  summary: record.reason,
  evidenceRef: record.evidence,
}));

const pipelineEvents: MissionEvent[] = missionPipelineItems.map((item) => ({
  id: item.id,
  type: "STATUS_UPDATE",
  source: item.owner === "Commerce" ? "Commerce" : "Mission Pipeline",
  timestamp: "N/A",
  title: item.title + " entered " + item.currentStage,
  status: item.status === "Awaiting Commander" ? "awaiting_commander" : item.status === "Research" ? "research" : "active",
  summary: item.nextGate,
  evidenceRef: item.evidenceState,
}));

const experimentEvents: MissionEvent[] = experimentTracker.map((experiment) => ({
  id: experiment.id,
  type: "EXPERIMENT_STARTED",
  source: "Revenue Intelligence",
  timestamp: "N/A",
  title: experiment.hypothesis,
  status: "pending_evidence",
  summary: experiment.decision,
  evidenceRef: experiment.evidence,
}));

function sortKey(event: MissionEvent) {
  return event.timestamp === "N/A" ? "" : event.timestamp;
}

export const missionEvents: MissionEvent[] = [...approvalEvents, ...decisionEvents, ...pipelineEvents, ...experimentEvents].sort((a, b) => sortKey(b).localeCompare(sortKey(a)));

export const recentlyCompletedExperiments = experimentTracker.filter((experiment) => experiment.result !== "Unknown");
