import { type ElementType } from "react";
import { CalendarClock, FileText, RadioTower, ShieldCheck } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { StatusBadge } from "@/components/StatusBadge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  researchQueueStages,
  researchSchedulerMetrics,
  researchSchedulerSummary,
  scheduledResearchMissions,
  type ResearchPriority,
  type ResearchRiskLevel,
  type ScheduledMissionStatus,
  type ScheduledResearchMission,
} from "@/data/researchScheduler";

const statusTone: Record<ScheduledMissionStatus, "success" | "manual" | "beta" | "muted"> = {
  Pending: "beta",
  Running: "manual",
  Completed: "success",
  "Needs Review": "manual",
  Archived: "muted",
};

const priorityTone: Record<ResearchPriority, "success" | "manual" | "beta" | "danger"> = {
  P0: "danger",
  P1: "manual",
  P2: "beta",
  P3: "success",
};

const riskTone: Record<ResearchRiskLevel, "success" | "manual" | "danger"> = {
  LOW: "success",
  MEDIUM: "manual",
  HIGH: "danger",
};

export function ResearchScheduler() {
  const revenueMissions = scheduledResearchMissions.filter((mission) => mission.division === "Revenue Corps");
  const quantMissions = scheduledResearchMissions.filter((mission) => mission.division === "Quant Research Corps");

  return (
    <div className="space-y-7">
      <section className="relative overflow-hidden rounded-lg border border-cyan-300/30 bg-card/85 p-6 shadow-[0_0_90px_rgba(34,211,238,0.14)] md:p-8">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(34,211,238,0.18),transparent_24rem),linear-gradient(rgba(34,211,238,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(52,211,153,0.05)_1px,transparent_1px)] bg-[size:auto,38px_38px,38px_38px]" />
        <div className="relative grid gap-6 xl:grid-cols-[1.15fr_0.85fr] xl:items-end">
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/35 bg-cyan-300/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-cyan-100">
              <CalendarClock className="h-3.5 w-3.5" /> {researchSchedulerSummary.version} Research Scheduler
            </div>
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">Semi-autonomous research only</p>
              <h1 className="font-display text-4xl font-semibold leading-tight md:text-6xl">Research Scheduler</h1>
              <p className="max-w-3xl text-base leading-7 text-muted-foreground md:text-lg">{researchSchedulerSummary.mission}</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              <Metric label="Missions" value={String(researchSchedulerMetrics.missions)} />
              <Metric label="Revenue" value={String(researchSchedulerMetrics.revenueMissions)} />
              <Metric label="Quant" value={String(researchSchedulerMetrics.quantMissions)} />
              <Metric label="Actions Allowed" value={String(researchSchedulerMetrics.irreversibleActionsAllowed)} />
            </div>
          </div>
          <Card className="border-red-300/30 bg-red-950/15">
            <CardHeader className="flex-row items-start gap-3">
              <ShieldCheck className="mt-1 h-5 w-5 text-red-200" />
              <div>
                <CardTitle className="text-red-100">Hard boundary</CardTitle>
                <CardDescription>{researchSchedulerSummary.safety}</CardDescription>
              </div>
            </CardHeader>
          </Card>
        </div>
      </section>

      <section className="space-y-4">
        <SectionHeader eyebrow="Doctrine" title="Scheduled research without execution" description={researchSchedulerSummary.doctrine} />
        <div className="grid gap-3 md:grid-cols-5">
          {researchQueueStages.map((stage) => (
            <Card key={stage.status} className="border-cyan-300/20 bg-card/80">
              <CardHeader>
                <div className="flex items-start justify-between gap-3">
                  <CardTitle className="text-lg">{stage.status}</CardTitle>
                  <StatusBadge label={String(stage.count)} tone={statusTone[stage.status]} />
                </div>
                <CardDescription>{stage.purpose}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <MissionSection title="Revenue Corps Scheduled Research" description="Marketplace and business-model discovery missions. These create reports only." missions={revenueMissions} />
      <MissionSection title="Quant Research Corps Scheduled Research" description="Trading research missions. No broker connection, no paper mode, and no money at risk." missions={quantMissions} />
    </div>
  );
}

function MissionSection({ title, description, missions }: { title: string; description: string; missions: ScheduledResearchMission[] }) {
  return (
    <section className="space-y-4">
      <SectionHeader eyebrow="Scheduled Missions" title={title} description={description} />
      <div className="grid gap-4 xl:grid-cols-2">
        {missions.map((mission) => <MissionCard key={mission.missionId} mission={mission} />)}
      </div>
    </section>
  );
}

function MissionCard({ mission }: { mission: ScheduledResearchMission }) {
  return (
    <Card className="border-cyan-300/25 bg-card/80">
      <CardHeader>
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200">{mission.missionId} / {mission.division}</p>
            <CardTitle className="mt-2 text-xl">{mission.title}</CardTitle>
          </div>
          <div className="flex flex-wrap gap-2">
            <StatusBadge label={mission.currentStatus} tone={statusTone[mission.currentStatus]} />
            <StatusBadge label={mission.priority} tone={priorityTone[mission.priority]} />
            <StatusBadge label={mission.riskLevel} tone={riskTone[mission.riskLevel]} />
          </div>
        </div>
        <CardDescription>{mission.scoutOfficer} / {mission.cadence}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-3 md:grid-cols-2">
          <Info label="Next Run" value={mission.nextRunPlaceholder} icon={CalendarClock} />
          <Info label="Report Path" value={mission.reportOutputPathPlaceholder} icon={FileText} />
          <Info label="Approval" value={mission.approvalRequirement} icon={ShieldCheck} />
          <Info label="Mode" value="Research report only" icon={RadioTower} />
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          <List title="Allowed" items={mission.allowedActions} tone="emerald" />
          <List title="Prohibited" items={mission.prohibitedActions} tone="red" />
        </div>
      </CardContent>
    </Card>
  );
}

function List({ title, items, tone }: { title: string; items: string[]; tone: "emerald" | "red" }) {
  const classes = tone === "emerald" ? "border-emerald-300/20 bg-emerald-300/10 text-emerald-100" : "border-red-300/20 bg-red-300/10 text-red-100";
  return (
    <div className="rounded-md border border-border/70 bg-background/50 p-3">
      <p className="mb-2 text-xs uppercase tracking-[0.14em] text-muted-foreground">{title}</p>
      <div className="space-y-2">
        {items.slice(0, 5).map((item) => <p key={item} className={"rounded-md border p-2 text-sm leading-5 " + classes}>{item}</p>)}
      </div>
    </div>
  );
}

function Info({ label, value, icon: Icon }: { label: string; value: string; icon: ElementType }) {
  return (
    <div className="rounded-md border border-border/70 bg-background/50 p-3">
      <div className="mb-1 flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-muted-foreground"><Icon className="h-3.5 w-3.5 text-primary" />{label}</div>
      <p className="break-words text-sm leading-6 text-foreground/90">{value}</p>
    </div>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return <div className="rounded-md border border-cyan-300/20 bg-background/50 p-3"><p className="mb-1 text-xs uppercase tracking-[0.14em] text-muted-foreground">{label}</p><p className="text-sm font-medium leading-6 text-foreground/90">{value}</p></div>;
}
