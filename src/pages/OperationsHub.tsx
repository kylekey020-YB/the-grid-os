import { Archive, CheckCircle2, ClipboardList, FileText, Inbox, Link2, ShieldCheck } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { StatusBadge } from "@/components/StatusBadge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  activeLaunches,
  approvalsWaiting,
  backtestsRunning,
  customerMessages,
  dailyOperationsWorkflow,
  executionGateQuestions,
  executionMetrics,
  executionPriorityOrder,
  operationsActions,
  operationsBlockers,
  operationsHubMetrics,
  operationsHubSummary,
  operationsMissions,
  operationsStatuses,
  todaysFocusMissions,
  type FocusItem,
  type OperationsMission,
  type OperationsMissionStatus,
  type OperationsPriority,
} from "@/data/operationsHub";
import { commandBriefRecommendation, commandBriefSummary } from "@/data/dailyCommandBrief";
import { launchExecutionMetrics, launchIntelligenceSummary, launchMarketMetrics } from "@/data/launchIntelligence";
import { playbookMetrics } from "@/data/playbooks";

const statusTone: Record<OperationsMissionStatus, "success" | "manual" | "beta" | "danger" | "muted"> = {
  Draft: "muted",
  Assigned: "beta",
  Researching: "manual",
  "Awaiting Review": "manual",
  Approved: "success",
  Building: "manual",
  Launching: "success",
  Measuring: "success",
  Completed: "success",
  Archived: "muted",
};

const priorityTone: Record<OperationsPriority, "danger" | "manual" | "beta" | "success"> = {
  P0: "danger",
  P1: "manual",
  P2: "beta",
  P3: "success",
};

export function OperationsHub() {
  return (
    <div className="space-y-7">
      <section className="relative overflow-hidden rounded-lg border border-cyan-300/30 bg-card/85 p-6 shadow-[0_0_90px_rgba(34,211,238,0.14)] md:p-8">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(34,211,238,0.18),transparent_24rem),linear-gradient(rgba(34,211,238,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(251,191,36,0.04)_1px,transparent_1px)] bg-[size:auto,38px_38px,38px_38px]" />
        <div className="relative grid gap-6 xl:grid-cols-[1.15fr_0.85fr] xl:items-end">
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/35 bg-cyan-300/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-cyan-100"><Inbox className="h-3.5 w-3.5" /> {operationsHubSummary.version}</div>
            <div className="space-y-3"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">One screen / one queue</p><h1 className="font-display text-4xl font-semibold leading-tight md:text-6xl">Operations Hub</h1><p className="max-w-3xl text-base leading-7 text-muted-foreground md:text-lg">{operationsHubSummary.purpose}</p></div>
            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-6"><Metric label="Missions" value={String(operationsHubMetrics.totalMissions)} /><Metric label="Active" value={String(operationsHubMetrics.activeMissions)} /><Metric label="Blockers" value={String(operationsHubMetrics.blockers)} /><Metric label="Approvals" value={String(operationsHubMetrics.approvalsWaiting)} /><Metric label="Launches" value={String(operationsHubMetrics.launches)} /><Metric label="Backtests" value={String(operationsHubMetrics.backtestsRunning)} /></div>
          </div>
          <Card className="border-red-300/30 bg-red-950/15"><CardHeader className="flex-row items-start gap-3"><ShieldCheck className="mt-1 h-5 w-5 text-red-200" /><div><CardTitle className="text-red-100">Mission ID gate</CardTitle><CardDescription>{operationsHubSummary.rule}</CardDescription></div></CardHeader><CardContent><p className="rounded-md border border-red-300/20 bg-background/50 p-3 text-sm leading-6 text-red-100">{operationsHubSummary.safety}</p></CardContent></Card>
        </div>
      </section>

      <CommandBriefOperationsPanel />

      <ExecutionPriorityPanel />

      <section className="space-y-4"><SectionHeader eyebrow="Today's Focus" title="Only the work that needs attention" description="Top 5 active missions, top 3 blockers, approvals waiting, customer messages, launches, and backtests." /><div className="grid gap-4 xl:grid-cols-[1.2fr_0.8fr]"><Card className="border-cyan-300/25 bg-card/80"><CardHeader><CardTitle className="text-cyan-100">Top 5 active missions</CardTitle><CardDescription>Sorted by priority and active status.</CardDescription></CardHeader><CardContent className="space-y-3">{todaysFocusMissions.map((mission) => <MissionRow key={mission.missionId} mission={mission} />)}</CardContent></Card><div className="space-y-4"><FocusPanel title="Top 3 blockers" items={operationsBlockers.slice(0, 3)} tone="red" /><FocusPanel title="Approvals waiting" items={approvalsWaiting} tone="amber" /></div></div></section>

      <ExecutionMetricsPanel />

      <LaunchIntelligenceOperationsPanel />

      <PlaybookOperationsPanel />

      <section className="grid gap-4 xl:grid-cols-3"><FocusPanel title="Customer messages" items={customerMessages} tone="cyan" /><FocusPanel title="Launches" items={activeLaunches} tone="emerald" /><FocusPanel title="Backtests running" items={backtestsRunning} tone="purple" /></section>

      <section className="space-y-4"><SectionHeader eyebrow="Mission Inbox" title="Every mission has an ID" description="The inbox is the operating queue. Mission Control should only consume records with Mission IDs." /><div className="grid gap-4 xl:grid-cols-2">{operationsMissions.map((mission) => <MissionCard key={mission.missionId} mission={mission} />)}</div></section>

      <section className="grid gap-4 xl:grid-cols-[0.8fr_1.2fr]"><Card className="border-amber-300/30 bg-amber-950/15"><CardHeader><div className="flex items-start justify-between gap-3"><div><p className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-200">Daily Workflow</p><CardTitle className="mt-2 text-2xl text-amber-100">Morning to archive</CardTitle></div><ClipboardList className="h-5 w-5 text-amber-200" /></div><CardDescription>The loop reduces commander coordination by routing work through one queue.</CardDescription></CardHeader><CardContent className="space-y-2">{dailyOperationsWorkflow.map((step, index) => <div key={step} className="flex items-center gap-3 rounded-md border border-amber-300/20 bg-background/50 p-3"><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-amber-300/30 bg-amber-300/10 text-xs text-amber-100">{index + 1}</span><span className="text-sm text-foreground/90">{step}</span></div>)}</CardContent></Card><Card className="border-cyan-300/25 bg-card/80"><CardHeader><CardTitle className="text-cyan-100">Mission actions</CardTitle><CardDescription>Actions are operating intents in v1.0. They do not execute external systems.</CardDescription></CardHeader><CardContent className="grid gap-3 md:grid-cols-2">{operationsActions.map((item) => <div key={item.action} className="rounded-md border border-cyan-300/20 bg-background/50 p-3"><p className="text-sm font-semibold text-cyan-100">{item.action}</p><p className="mt-2 text-sm leading-6 text-foreground/85">{item.purpose}</p><p className="mt-2 text-xs leading-5 text-muted-foreground">{item.boundary}</p></div>)}</CardContent></Card></section>

      <section className="space-y-4"><SectionHeader eyebrow="Statuses" title="Lifecycle states" description="Every mission moves through the same status language." /><div className="grid gap-3 md:grid-cols-5">{operationsStatuses.map((status) => <div key={status} className="rounded-md border border-border/70 bg-background/50 p-3 text-center"><StatusBadge label={status} tone={statusTone[status]} /></div>)}</div></section>
    </div>
  );
}



function LaunchIntelligenceOperationsPanel() {
  return (
    <section className="space-y-4">
      <SectionHeader eyebrow="Launch Intelligence" title="Real evidence split by control" description="Execution metrics are controlled by THE GRID. Market metrics are controlled by customers and platforms, so unknowns remain Unknown or Awaiting Evidence." />
      <div className="grid gap-4 xl:grid-cols-2">
        <Card className="border-emerald-300/30 bg-emerald-950/15">
          <CardHeader>
            <CardTitle className="text-emerald-100">Execution Metrics</CardTitle>
            <CardDescription>{launchIntelligenceSummary.evidenceSource}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            {launchExecutionMetrics.map((metric) => <Metric key={metric.label} label={metric.label} value={String(metric.value)} />)}
          </CardContent>
        </Card>
        <Card className="border-amber-300/30 bg-amber-950/15">
          <CardHeader>
            <CardTitle className="text-amber-100">Market Metrics</CardTitle>
            <CardDescription>{launchIntelligenceSummary.marketEvidenceStatus}</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-2 md:grid-cols-2">
            {launchMarketMetrics.map((metric) => <Metric key={metric.label} label={metric.label} value={String(metric.value)} />)}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

function PlaybookOperationsPanel() {
  return (
    <section className="space-y-4">
      <SectionHeader eyebrow="Playbooks" title="Validated processes become reusable" description="Playbooks are execution infrastructure. Drafts can exist, but validation requires evidence." />
      <Card className="border-purple-300/30 bg-purple-950/15">
        <CardHeader>
          <CardTitle className="text-purple-100">Playbook registry</CardTitle>
          <CardDescription>No fake wins. No fake lessons. No completed playbooks unless evidence exists.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-3 md:grid-cols-4">
          <Metric label="Total" value={String(playbookMetrics.total)} />
          <Metric label="Draft" value={String(playbookMetrics.draft)} />
          <Metric label="Tested" value={String(playbookMetrics.tested)} />
          <Metric label="Validated" value={String(playbookMetrics.validated)} />
        </CardContent>
      </Card>
    </section>
  );
}

function CommandBriefOperationsPanel() {
  return (
    <Card className="border-amber-300/30 bg-amber-950/15">
      <CardHeader>
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-200">Daily Command Brief</p>
            <CardTitle className="mt-2 text-2xl text-amber-100">Start here, then execute from the queue</CardTitle>
          </div>
          <StatusBadge label={commandBriefSummary.version} tone="manual" />
        </div>
        <CardDescription>{commandBriefSummary.purpose}</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-3 md:grid-cols-2">
        <Metric label="Recommendation" value={commandBriefRecommendation.title} />
        <Metric label="Related Mission" value={commandBriefRecommendation.missionId} />
      </CardContent>
    </Card>
  );
}

function ExecutionPriorityPanel() {
  return (
    <section className="grid gap-4 xl:grid-cols-[1fr_1fr]">
      <Card className="border-emerald-300/30 bg-emerald-950/15">
        <CardHeader>
          <CardTitle className="text-emerald-100">Execution priority order</CardTitle>
          <CardDescription>Everything else enters the backlog.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          {executionPriorityOrder.map((item) => (
            <div key={item.rank} className="rounded-md border border-emerald-300/20 bg-background/50 p-3">
              <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">Priority {item.rank}</p>
              <p className="mt-1 text-sm font-semibold text-emerald-100">{item.name}</p>
              <p className="mt-2 text-sm leading-6 text-foreground/85">{item.reason}</p>
            </div>
          ))}
        </CardContent>
      </Card>
      <Card className="border-amber-300/30 bg-amber-950/15">
        <CardHeader>
          <CardTitle className="text-amber-100">Feature gate</CardTitle>
          <CardDescription>If the answer is no, recommend postponing it.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          {executionGateQuestions.map((item) => (
            <div key={item.question} className="rounded-md border border-amber-300/20 bg-background/50 p-3">
              <p className="text-sm font-semibold text-amber-100">{item.question}</p>
              <p className="mt-2 text-sm leading-6 text-foreground/85">{item.passCondition}</p>
            </div>
          ))}
        </CardContent>
      </Card>
    </section>
  );
}

function ExecutionMetricsPanel() {
  return (
    <section className="space-y-4">
      <SectionHeader eyebrow="Execution Metrics" title="Only real metrics" description="Unknown values remain N/A until evidence exists. No placeholders pretending to be live." />
      <div className="grid gap-3 md:grid-cols-3 xl:grid-cols-5">
        {executionMetrics.map((metric) => (
          <div key={metric.label} className="rounded-md border border-cyan-300/20 bg-background/50 p-3">
            <p className="mb-1 text-xs uppercase tracking-[0.14em] text-muted-foreground">{metric.label}</p>
            <p className="text-lg font-semibold text-cyan-100">{metric.value}</p>
            <p className="mt-2 text-xs leading-5 text-muted-foreground">{metric.evidence}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function MissionRow({ mission }: { mission: OperationsMission }) { return <div className="rounded-md border border-cyan-300/20 bg-background/50 p-3"><div className="flex flex-wrap items-start justify-between gap-3"><div><p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200">{mission.missionId} / {mission.division}</p><h3 className="mt-1 text-sm font-semibold text-foreground">{mission.title}</h3></div><div className="flex gap-2"><StatusBadge label={mission.priority} tone={priorityTone[mission.priority]} /><StatusBadge label={mission.status} tone={statusTone[mission.status]} /></div></div><p className="mt-2 text-sm leading-6 text-muted-foreground">Owner: {mission.owner}</p></div>; }

function MissionCard({ mission }: { mission: OperationsMission }) { return <Card className="border-cyan-300/25 bg-card/80"><CardHeader><div className="flex flex-wrap items-start justify-between gap-3"><div><p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200">{mission.missionId} / {mission.division}</p><CardTitle className="mt-2 text-xl">{mission.title}</CardTitle></div><div className="flex flex-wrap gap-2"><StatusBadge label={mission.priority} tone={priorityTone[mission.priority]} /><StatusBadge label={mission.status} tone={statusTone[mission.status]} /></div></div><CardDescription>{mission.owner} / {mission.assignedIntelligence}</CardDescription></CardHeader><CardContent className="grid gap-3 md:grid-cols-2"><Info label="Created" value={mission.created} icon={FileText} /><Info label="Due" value={mission.due} icon={CheckCircle2} /><Info label="Evidence" value={mission.evidence} icon={Archive} /><Info label="Related Obsidian Note" value={mission.relatedObsidianNote} icon={Link2} /></CardContent></Card>; }

function FocusPanel({ title, items, tone }: { title: string; items: FocusItem[]; tone: "red" | "amber" | "cyan" | "emerald" | "purple" }) { const classes = { red: "border-red-300/30 bg-red-950/15 text-red-100", amber: "border-amber-300/30 bg-amber-950/15 text-amber-100", cyan: "border-cyan-300/30 bg-cyan-950/15 text-cyan-100", emerald: "border-emerald-300/30 bg-emerald-950/15 text-emerald-100", purple: "border-purple-300/30 bg-purple-950/15 text-purple-100" }[tone]; return <Card className={classes}><CardHeader><CardTitle className="text-lg">{title}</CardTitle><CardDescription>Mission-linked items only.</CardDescription></CardHeader><CardContent className="space-y-2">{items.map((item) => <div key={item.id} className="rounded-md border border-white/10 bg-background/50 p-3"><p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">{item.id} / {item.missionId}</p><p className="mt-1 text-sm font-semibold">{item.title}</p><p className="mt-2 text-sm leading-6 text-foreground/85">{item.nextAction}</p></div>)}</CardContent></Card>; }

function Info({ label, value, icon: Icon }: { label: string; value: string; icon: typeof FileText }) { return <div className="rounded-md border border-border/70 bg-background/50 p-3"><div className="mb-1 flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-muted-foreground"><Icon className="h-3.5 w-3.5 text-primary" />{label}</div><p className="break-words text-sm leading-6 text-foreground/90">{value}</p></div>; }
function Metric({ label, value }: { label: string; value: string }) { return <div className="rounded-md border border-cyan-300/20 bg-background/50 p-3"><p className="mb-1 text-xs uppercase tracking-[0.14em] text-muted-foreground">{label}</p><p className="text-sm font-medium leading-6 text-foreground/90">{value}</p></div>; }
