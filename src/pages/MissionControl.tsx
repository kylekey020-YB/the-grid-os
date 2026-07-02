import { type ElementType } from "react";
import {
  Activity,
  AlertTriangle,
  BarChart3,
  BrainCircuit,
  CheckCircle2,
  CircleDollarSign,
  Clock3,
  FileText,
  GitBranch,
  Landmark,
  RadioTower,
} from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { StatusBadge } from "@/components/StatusBadge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CampaignPatch } from "@/components/identity/GridIdentity";
import { academyOverview, academyWings, foundingDay } from "@/data/academy";
import { approvalQueue, decisionRecords, type ApprovalRequest, type DecisionRecord } from "@/data/approvalSystem";
import { bridgeMetrics, bridgeOverview } from "@/data/bridge";
import { companyHealth, divisionKpiReports, type DivisionKpiReport } from "@/data/companyKpis";
import { missionEvents, recentlyCompletedExperiments, type MissionEvent } from "@/data/missionEvents";
import { missionPipelineItems, missionPipelineStages } from "@/data/missionPipeline";
import { officerPresence, type OfficerPresence } from "@/data/officerPresence";
import { scoutOfficers } from "@/data/scoutOfficers";

const executiveBrief = [
  "Operation First Revenue remains the primary offensive mission.",
  "Revenue Architect is active in advisory-only mode.",
  "AR-001 is awaiting Mission Commander approval before the income lane scoring sprint begins.",
  "Commerce remains research-only until live quote unknowns are resolved through an approved phase.",
];

const topPriorities = [
  "Decide AR-001: approve, decline, or request revision.",
  "Select the first revenue lane using evidence, operator fit, and compliance risk.",
  "Keep all unknown KPI values marked as N/A until real records exist.",
  "Preserve Mission Records and Decision Records as institutional memory.",
  "Preserve Founding Day and new lessons inside The Academy.",
];

const programStatus = [
  { name: "APEX", state: "Research", signal: "No current status feed connected to this repo.", boundary: "No live trading integration in THE GRID." },
  { name: "CLU", state: "Research", signal: "No current status feed connected to this repo.", boundary: "No autonomous execution in THE GRID." },
  { name: "Hermes", state: "Prepared", signal: "Agent profiles are documented for future activation.", boundary: "No Telegram or account actions connected." },
  { name: "Revenue Architect", state: "Advisory Only", signal: "Income lane scoring is awaiting approval.", boundary: "No publishing, spending, or scraping." },
];

const eventTone: Record<MissionEvent["status"], "success" | "manual" | "beta" | "danger" | "muted"> = {
  active: "success",
  awaiting_commander: "manual",
  blocked: "danger",
  completed: "success",
  pending_evidence: "beta",
  research: "muted",
};

export function MissionControl() {
  const openApprovals = approvalQueue.filter((approval) => approval.status === "Awaiting Commander");

  return (
    <div className="space-y-7">
      <OperationsHero />

      <section className="grid gap-4 xl:grid-cols-4">
        <CompanyHealthPanel />
        <BridgePreview />
        <CampaignPatch />
        <ExecutiveBrief />
      </section>

      <section className="grid gap-4 xl:grid-cols-[1.25fr_0.75fr]">
        <OperationsFeed />
        <div className="space-y-4">
          <ApprovalQueue approvals={openApprovals} />
          <DecisionRecords records={decisionRecords} />
        </div>
      </section>

      <section className="space-y-4">
        <SectionHeader
          eyebrow="Officer Presence"
          title="Who is watching the floor"
          description="Presence cards describe current assignments and reports waiting. They do not imply autonomous action."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {officerPresence.map((officer) => (
            <OfficerPresenceCard key={officer.id} officer={officer} />
          ))}
        </div>
      </section>

      <section className="grid gap-4 xl:grid-cols-[0.85fr_1.15fr]">
        <MissionPipelineSnapshot />
        <ProgramStatusPanel />
      </section>

      <ScoutLayerSnapshot />

      <section className="space-y-4">
        <SectionHeader
          eyebrow="Operations Intelligence"
          title="Standardized division KPIs"
          description="Every division reports through the same pattern. Unknown values stay N/A until real evidence exists."
        />
        <div className="grid gap-4 lg:grid-cols-2">
          {divisionKpiReports.map((report) => (
            <DivisionKpiCard key={report.id} report={report} />
          ))}
        </div>
      </section>

      <section className="grid gap-4 xl:grid-cols-3">
        <CompletedExperiments />
        <AcademySnapshot />
        <TopPriorities />
      </section>
    </div>
  );
}

function OperationsHero() {
  return (
    <section className="relative overflow-hidden rounded-lg border border-cyan-300/30 bg-card/85 p-6 shadow-[0_0_90px_rgba(34,211,238,0.14)] md:p-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(34,211,238,0.18),transparent_24rem),linear-gradient(rgba(34,211,238,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(251,191,36,0.04)_1px,transparent_1px)] bg-[size:auto,34px_34px,34px_34px] opacity-90" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300 to-transparent" />
      <div className="relative grid gap-6 xl:grid-cols-[1.15fr_0.85fr] xl:items-end">
        <div className="space-y-5">
          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/35 bg-cyan-300/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-cyan-100">
              v2.0 Nervous System / Phase II
            </div>
            <StatusBadge label="Read-only command center" tone="success" />
          </div>
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">Operation First Revenue</p>
            <h1 className="font-display text-4xl font-semibold leading-tight md:text-6xl">Mission Control</h1>
            <p className="max-w-3xl text-base leading-7 text-muted-foreground md:text-lg">
              The homepage is now the operations floor: event timeline, officer presence, approvals, decision records, pipeline state, program status, and company KPIs.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            <CommandStat label="Commander" value="Maximus Titus Antony" />
            <CommandStat label="Days Remaining" value={String(companyHealth.daysRemaining)} />
            <CommandStat label="MRR Goal" value={companyHealth.mrrGoal} />
            <CommandStat label="Revenue" value={companyHealth.revenue} />
          </div>
        </div>
        <Card className="border-amber-300/35 bg-amber-950/15">
          <CardHeader>
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-200">Mission Countdown</p>
                <CardTitle className="mt-2 text-2xl text-amber-100">{companyHealth.daysRemaining} days remaining</CardTitle>
              </div>
              <Clock3 className="h-5 w-5 text-amber-200" />
            </div>
            <CardDescription>
              Countdown is mission state, not a claim of revenue progress. Real money values only appear after evidence exists.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.14em] text-muted-foreground">
                <span>Mission Progress</span>
                <span>{companyHealth.missionProgress}</span>
              </div>
              <div className="h-3 overflow-hidden rounded-full border border-amber-300/20 bg-background/70">
                <div className="h-full w-1/3 rounded-full bg-gradient-to-r from-amber-300 via-cyan-300 to-emerald-300 shadow-[0_0_22px_rgba(251,191,36,0.42)]" />
              </div>
            </div>
            <div className="rounded-md border border-cyan-300/20 bg-cyan-300/10 p-3 text-sm leading-6 text-cyan-100">
              Evidence informs. Officers advise. Mission Commander decides.
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

function CompanyHealthPanel() {
  return (
    <Card className="border-emerald-300/35 bg-emerald-950/15">
      <CardHeader>
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-200">Company Health</p>
            <CardTitle className="mt-2 text-2xl text-emerald-100">{companyHealth.mission}</CardTitle>
          </div>
          <BarChart3 className="h-5 w-5 text-emerald-200" />
        </div>
        <CardDescription>Company-wide health is derived from local typed state. Unknown metrics remain N/A.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        <MetricLine label="Approvals Pending" value={String(companyHealth.approvalsPending)} />
        <MetricLine label="Active Experiments" value={String(companyHealth.activeExperiments)} />
        <MetricLine label="Revenue" value={companyHealth.revenue} />
        <MetricLine label="MRR Goal" value={companyHealth.mrrGoal} />
        <MetricLine label="Days Remaining" value={String(companyHealth.daysRemaining)} />
        <MetricLine label="Mission Progress" value={companyHealth.missionProgress} />
      </CardContent>
    </Card>
  );
}

function BridgePreview() {
  return (
    <Card className="border-cyan-300/30 bg-cyan-950/15">
      <CardHeader>
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200">The Bridge doctrine</p>
            <CardTitle className="mt-2 text-2xl text-cyan-100">{bridgeOverview.phase}</CardTitle>
          </div>
          <RadioTower className="h-5 w-5 text-cyan-200" />
        </div>
        <CardDescription>{bridgeOverview.doctrine}</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-3 md:grid-cols-2">
        <MetricLine label="Events" value={String(bridgeMetrics.events)} />
        <MetricLine label="Channels" value={String(bridgeMetrics.eventChannels)} />
        <MetricLine label="Connected Officers" value={String(bridgeMetrics.connectedOfficers)} />
        <MetricLine label="Chronicles" value={String(bridgeMetrics.chronicleEntries)} />
      </CardContent>
    </Card>
  );
}

function ExecutiveBrief() {
  return (
    <Card className="border-blue-300/30 bg-blue-950/15">
      <CardHeader>
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-200">Current Executive Brief</p>
            <CardTitle className="mt-2 text-2xl text-blue-100">Single command summary</CardTitle>
          </div>
          <BrainCircuit className="h-5 w-5 text-blue-200" />
        </div>
        <CardDescription>Future Operations Officer briefings can aggregate officer reports into this panel.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        {executiveBrief.map((item) => (
          <p key={item} className="rounded-md border border-blue-300/20 bg-blue-300/10 p-3 text-sm leading-6 text-blue-100">
            {item}
          </p>
        ))}
      </CardContent>
    </Card>
  );
}

function OperationsFeed() {
  return (
    <section className="space-y-4">
      <SectionHeader
        eyebrow="Mission Event Bus"
        title="Live Operations Feed"
        description="A chronological feed from local typed events. No networking, polling, or fabricated live activity."
      />
      <Card className="border-cyan-300/30 bg-card/85">
        <CardContent className="space-y-3 p-4">
          {missionEvents.map((event) => (
            <EventRow key={event.type + "-" + event.id} event={event} />
          ))}
        </CardContent>
      </Card>
    </section>
  );
}

function EventRow({ event }: { event: MissionEvent }) {
  return (
    <div className="rounded-md border border-border/70 bg-background/50 p-4">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="space-y-1">
          <div className="flex flex-wrap items-center gap-2">
            <StatusBadge label={event.status.replace(/_/g, " ")} tone={eventTone[event.status]} />
            <span className="text-xs uppercase tracking-[0.14em] text-muted-foreground">{event.type.replace(/_/g, " ")}</span>
          </div>
          <h3 className="text-base font-semibold text-foreground">{event.title}</h3>
        </div>
        <div className="text-right text-xs leading-5 text-muted-foreground">
          <p>{event.id}</p>
          <p>{event.timestamp}</p>
        </div>
      </div>
      <div className="mt-3 grid gap-3 md:grid-cols-[0.8fr_1.2fr]">
        <InfoLine label="Source" value={event.source} icon={RadioTower} />
        <InfoLine label="Evidence" value={event.evidenceRef} icon={FileText} />
      </div>
      <p className="mt-3 text-sm leading-6 text-foreground/85">{event.summary}</p>
    </div>
  );
}

function ApprovalQueue({ approvals }: { approvals: ApprovalRequest[] }) {
  return (
    <Card className="border-amber-300/35 bg-amber-950/15">
      <CardHeader>
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-200">Approval Queue</p>
            <CardTitle className="mt-2 text-xl text-amber-100">Awaiting Commander</CardTitle>
          </div>
          <StatusBadge label={String(approvals.length)} tone="manual" />
        </div>
        <CardDescription>Everything irreversible must flow through this queue.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        {approvals.length ? approvals.map((approval) => <ApprovalCard key={approval.id} approval={approval} />) : <EmptyState text="No approvals awaiting Commander." />}
      </CardContent>
    </Card>
  );
}

function ApprovalCard({ approval }: { approval: ApprovalRequest }) {
  return (
    <div className="rounded-md border border-amber-300/20 bg-background/50 p-3">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">{approval.id} / {approval.requester}</p>
          <h3 className="mt-1 text-sm font-semibold text-amber-100">{approval.title}</h3>
        </div>
        <StatusBadge label={approval.risk} tone="manual" />
      </div>
      <div className="mt-3 space-y-2">
        <MetricLine label="Cost" value={approval.cost} />
        <MetricLine label="Status" value={approval.status} />
      </div>
      <p className="mt-3 text-sm leading-6 text-foreground/85">{approval.summary}</p>
    </div>
  );
}

function DecisionRecords({ records }: { records: DecisionRecord[] }) {
  return (
    <Card className="border-purple-300/30 bg-purple-950/15">
      <CardHeader>
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-purple-200">Decision Records</p>
            <CardTitle className="mt-2 text-xl text-purple-100">Why choices were made</CardTitle>
          </div>
          <FileText className="h-5 w-5 text-purple-200" />
        </div>
        <CardDescription>Mission Records answer what happened. Decision Records answer why.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        {records.map((record) => (
          <div key={record.id} className="rounded-md border border-purple-300/20 bg-background/50 p-3">
            <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">{record.id} / {record.date}</p>
            <h3 className="mt-1 text-sm font-semibold text-purple-100">{record.decision}</h3>
            <p className="mt-2 text-sm leading-6 text-foreground/85">{record.reason}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

function OfficerPresenceCard({ officer }: { officer: OfficerPresence }) {
  const tone = officer.status === "Active" ? "success" : officer.status === "Advisory Only" ? "manual" : "beta";

  return (
    <Card className="border-cyan-300/25 bg-card/80">
      <CardHeader>
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200">{officer.homeDivision}</p>
            <CardTitle className="mt-2 text-lg">{officer.name}</CardTitle>
          </div>
          <StatusBadge label={officer.status} tone={tone} />
        </div>
        <CardDescription>{officer.currentAssignment}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <MetricLine label="Reports waiting" value={String(officer.reportsWaiting)} />
        <InfoLine label="Last completed action" value={officer.lastCompletedAction} icon={CheckCircle2} />
      </CardContent>
    </Card>
  );
}

function MissionPipelineSnapshot() {
  return (
    <Card className="border-cyan-300/30 bg-cyan-950/15">
      <CardHeader>
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200">Mission Pipeline Snapshot</p>
            <CardTitle className="mt-2 text-2xl text-cyan-100">Nothing skips the pipeline</CardTitle>
          </div>
          <GitBranch className="h-5 w-5 text-cyan-200" />
        </div>
        <CardDescription>Ideas move through evidence, approval, experiment, revenue, scale, playbook, automation, division, program, and institutional knowledge.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="grid gap-3 md:grid-cols-3">
          <MetricLine label="Stages" value={String(missionPipelineStages.length)} />
          <MetricLine label="Tracked items" value={String(missionPipelineItems.length)} />
          <MetricLine label="Lead item" value={missionPipelineItems[0]?.id ?? "N/A"} />
        </div>
        {missionPipelineItems.map((item) => (
          <div key={item.id} className="rounded-md border border-cyan-300/20 bg-background/50 p-3">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">{item.id} / {item.owner}</p>
                <h3 className="mt-1 text-sm font-semibold text-cyan-100">{item.title}</h3>
              </div>
              <StatusBadge label={item.currentStage} tone={item.status === "Awaiting Commander" ? "manual" : "beta"} />
            </div>
            <p className="mt-2 text-sm leading-6 text-foreground/85">{item.nextGate}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

function ScoutLayerSnapshot() {
  return (
    <section className="space-y-4">
      <SectionHeader eyebrow="Scout Agent Layer" title="Opportunity discovery reports to Revenue Architect" description="Scouts are planned research/advisory officers. They gather public evidence and create reports only." />
      <div className="grid gap-4 md:grid-cols-3">
        {scoutOfficers.map((scout) => (
          <Card key={scout.id} className="border-emerald-300/25 bg-card/80">
            <CardHeader>
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-md border border-emerald-300/30 bg-emerald-300/10 text-2xl">{scout.emoji}</span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-200">Reports to {scout.reportsTo}</p>
                    <CardTitle className="mt-1 text-lg">{scout.name}</CardTitle>
                  </div>
                </div>
                <StatusBadge label={scout.status} tone="beta" />
              </div>
              <CardDescription>{scout.role}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <MetricLine label="Output" value={scout.output} />
              <MetricLine label="Boundary" value="Public evidence reports only" />
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

function ProgramStatusPanel() {
  return (
    <Card className="border-blue-300/30 bg-blue-950/15">
      <CardHeader>
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-200">Program Status</p>
            <CardTitle className="mt-2 text-2xl text-blue-100">Arenas and officers</CardTitle>
          </div>
          <Activity className="h-5 w-5 text-blue-200" />
        </div>
        <CardDescription>Status is informational only. Programs are not connected to execution controls.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-3 md:grid-cols-2">
        {programStatus.map((program) => (
          <div key={program.name} className="rounded-md border border-blue-300/20 bg-background/50 p-3">
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-sm font-semibold text-blue-100">{program.name}</h3>
              <StatusBadge label={program.state} tone={program.state === "Advisory Only" ? "manual" : "beta"} />
            </div>
            <p className="mt-2 text-sm leading-6 text-foreground/85">{program.signal}</p>
            <p className="mt-2 text-xs leading-5 text-muted-foreground">{program.boundary}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

function DivisionKpiCard({ report }: { report: DivisionKpiReport }) {
  return (
    <Card className="border-emerald-300/25 bg-card/80">
      <CardHeader>
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-200">{report.status}</p>
            <CardTitle className="mt-2 text-xl">{report.division}</CardTitle>
          </div>
          <CircleDollarSign className="h-5 w-5 text-emerald-200" />
        </div>
        <CardDescription>KPI values cite their evidence source. Missing records stay N/A.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        {report.kpis.map((kpi) => (
          <div key={kpi.label} className="rounded-md border border-border/70 bg-background/50 p-3">
            <div className="flex items-center justify-between gap-3 text-sm">
              <span className="text-muted-foreground">{kpi.label}</span>
              <span className="text-right font-medium text-foreground">{String(kpi.value)}</span>
            </div>
            <p className="mt-2 text-xs leading-5 text-muted-foreground">{kpi.evidence}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

function CompletedExperiments() {
  return (
    <Card className="border-emerald-300/25 bg-card/80">
      <CardHeader>
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-200">Recently Completed Experiments</p>
            <CardTitle className="mt-2 text-xl">Evidence results</CardTitle>
          </div>
          <CheckCircle2 className="h-5 w-5 text-emerald-200" />
        </div>
        <CardDescription>Only completed experiments with real results appear here.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        {recentlyCompletedExperiments.length ? (
          recentlyCompletedExperiments.map((experiment) => (
            <div key={experiment.id} className="rounded-md border border-emerald-300/20 bg-background/50 p-3">
              <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">{experiment.id}</p>
              <p className="mt-1 text-sm leading-6 text-foreground/85">{experiment.result}</p>
            </div>
          ))
        ) : (
          <EmptyState text="No completed experiments recorded." />
        )}
      </CardContent>
    </Card>
  );
}

function AcademySnapshot() {
  return (
    <Card className="border-amber-300/25 bg-card/80">
      <CardHeader>
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-200">The Academy</p>
            <CardTitle className="mt-2 text-xl">Institutional learning campus</CardTitle>
          </div>
          <Landmark className="h-5 w-5 text-amber-200" />
        </div>
        <CardDescription>{academyOverview.mission}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <MetricLine label="Status" value={academyOverview.status} />
        <MetricLine label="Wings" value={String(academyWings.length)} />
        <MetricLine label="Founding Day" value={foundingDay.date} />
        <div className="rounded-md border border-amber-300/20 bg-amber-300/10 p-3 text-sm leading-6 text-amber-100">
          {academyOverview.safety}
        </div>
      </CardContent>
    </Card>
  );
}

function TopPriorities() {
  return (
    <Card className="border-amber-300/25 bg-card/80">
      <CardHeader>
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-200">Current Top Priorities</p>
            <CardTitle className="mt-2 text-xl">Next commander decisions</CardTitle>
          </div>
          <AlertTriangle className="h-5 w-5 text-amber-200" />
        </div>
        <CardDescription>Priorities are review prompts, not automated tasks.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        {topPriorities.map((priority) => (
          <p key={priority} className="rounded-md border border-amber-300/20 bg-amber-300/10 p-3 text-sm leading-6 text-amber-100">
            {priority}
          </p>
        ))}
      </CardContent>
    </Card>
  );
}

function CommandStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md border border-cyan-300/20 bg-background/50 p-3">
      <p className="mb-1 text-xs uppercase tracking-[0.14em] text-muted-foreground">{label}</p>
      <p className="text-sm font-medium leading-6 text-foreground/90">{value}</p>
    </div>
  );
}

function InfoLine({ label, value, icon: Icon }: { label: string; value: string; icon: ElementType }) {
  return (
    <div className="flex gap-3">
      <Icon className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
      <div>
        <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">{label}</p>
        <p className="mt-1 leading-6 text-foreground/90">{value}</p>
      </div>
    </div>
  );
}

function MetricLine({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-3 rounded-md border border-border/70 bg-background/50 px-3 py-2 text-sm">
      <span className="text-muted-foreground">{label}</span>
      <span className="text-right text-foreground/90">{value}</span>
    </div>
  );
}

function EmptyState({ text }: { text: string }) {
  return (
    <div className="rounded-md border border-border/70 bg-background/50 p-3 text-sm leading-6 text-muted-foreground">
      {text}
    </div>
  );
}
