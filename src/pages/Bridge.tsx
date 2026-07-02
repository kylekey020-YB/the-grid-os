import { Activity, ArrowRight, BrainCircuit, GitBranch, Network, RadioTower, ShieldCheck } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { StatusBadge } from "@/components/StatusBadge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CompanySeal, OfficerBadgeShell } from "@/components/identity/GridIdentity";
import { bridgeMetrics, bridgeOverview, bridgePanels, type BridgePanelStatus } from "@/data/bridge";
import { companyHealth, divisionKpiReports } from "@/data/companyKpis";
import { chronicleEntries } from "@/data/chronicle";
import { eventChannels, eventRegistrySummary, type EventRegistryStatus } from "@/data/eventRegistry";
import { missionEvents } from "@/data/missionEvents";
import { officerNetwork, officerNetworkDoctrine, type OfficerNetworkState } from "@/data/officerNetwork";
import { scoutOfficers } from "@/data/scoutOfficers";

const panelTone: Record<BridgePanelStatus, "success" | "manual" | "beta" | "muted"> = {
  Active: "success",
  "Awaiting Commander": "manual",
  Prepared: "beta",
  "Read-Only": "muted",
};

const officerTone: Record<OfficerNetworkState, "success" | "manual" | "beta"> = {
  Connected: "success",
  Dormant: "manual",
  Prepared: "beta",
};

const eventTone: Record<EventRegistryStatus, "success" | "manual" | "beta" | "muted"> = {
  Active: "success",
  Prepared: "beta",
  Planned: "manual",
  Dormant: "muted",
};

export function Bridge() {
  return (
    <div className="space-y-7">
      <section className="relative overflow-hidden rounded-lg border border-cyan-300/30 bg-card/85 p-6 shadow-[0_0_110px_rgba(34,211,238,0.16)] md:p-8">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(34,211,238,0.2),transparent_28rem),linear-gradient(rgba(34,211,238,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.05)_1px,transparent_1px)] bg-[size:auto,38px_38px,38px_38px]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300 to-transparent" />
        <div className="relative grid gap-6 xl:grid-cols-[1.1fr_0.9fr] xl:items-end">
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/35 bg-cyan-300/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-cyan-100">
              <Network className="h-3.5 w-3.5" /> v2.0 Nervous System
            </div>
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">The Bridge</p>
              <h1 className="font-display text-4xl font-semibold leading-tight md:text-6xl">Living Systems</h1>
              <p className="max-w-3xl text-base leading-7 text-muted-foreground md:text-lg">{bridgeOverview.mission}</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              <BridgeStat label="Phase" value={bridgeOverview.phase} />
              <BridgeStat label="Current Mission" value={bridgeOverview.currentMission} />
              <BridgeStat label="Connected Officers" value={String(bridgeMetrics.connectedOfficers)} />
              <BridgeStat label="Event Channels" value={String(bridgeMetrics.eventChannels)} />
            </div>
          </div>
          <Card className="border-purple-300/35 bg-purple-950/15">
            <CardHeader>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-purple-200">Operating Pattern</p>
                  <CardTitle className="mt-2 text-2xl text-purple-100">{bridgeOverview.doctrine}</CardTitle>
                </div>
                <GitBranch className="h-5 w-5 text-purple-200" />
              </div>
              <CardDescription>{bridgeOverview.safety}</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-3 md:grid-cols-2">
              <MetricLine label="Events" value={String(bridgeMetrics.events)} />
              <MetricLine label="Approvals Pending" value={String(bridgeMetrics.approvalsPending)} />
              <MetricLine label="Division Reports" value={String(bridgeMetrics.divisionReports)} />
              <MetricLine label="Chronicle Entries" value={String(bridgeMetrics.chronicleEntries)} />
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="grid gap-4 xl:grid-cols-[0.75fr_1.25fr]">
        <CompanySeal />
        <ScoutNetworkPanel />
      </section>

      <section className="space-y-4">
        <SectionHeader eyebrow="Bridge Panels" title="Operations floor, compressed" description="The Bridge gathers current mission state, officer network, event registry, division health, approvals, and Academy memory without controlling external systems." />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {bridgePanels.map((panel) => (
            <Card key={panel.id} className="border-cyan-300/25 bg-card/80">
              <CardHeader>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200">{panel.source}</p>
                    <CardTitle className="mt-2 text-lg">{panel.title}</CardTitle>
                  </div>
                  <StatusBadge label={panel.status} tone={panelTone[panel.status]} />
                </div>
                <CardDescription>{panel.signal}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <section className="grid gap-4 xl:grid-cols-[0.85fr_1.15fr]">
        <OfficerNetworkPanel />
        <EventRegistryPanel />
      </section>

      <section className="grid gap-4 xl:grid-cols-[1.15fr_0.85fr]">
        <DivisionHealthPanel />
        <ChroniclePanel />
      </section>

      <section className="space-y-4">
        <SectionHeader eyebrow="Operations Feed" title="Events flowing through the bus" description="These are local typed events only. Future producers should publish this shape instead of coupling directly to pages." />
        <Card className="border-blue-300/25 bg-card/80">
          <CardContent className="space-y-3 p-4">
            {missionEvents.slice(0, 6).map((event) => (
              <div key={event.type + event.id} className="rounded-md border border-border/70 bg-background/50 p-3">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">{event.source} / {event.type.replace(/_/g, " ")}</p>
                    <h3 className="mt-1 text-sm font-semibold text-blue-100">{event.title}</h3>
                  </div>
                  <StatusBadge label={event.status.replace(/_/g, " ")} tone={event.status === "awaiting_commander" ? "manual" : "beta"} />
                </div>
                <p className="mt-2 text-sm leading-6 text-foreground/85">{event.summary}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </section>
    </div>
  );
}

function ScoutNetworkPanel() {
  return (
    <Card className="border-emerald-300/30 bg-emerald-950/15">
      <CardHeader>
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-200">Scout Agent Layer</p>
            <CardTitle className="mt-2 text-2xl text-emerald-100">Opportunity discovery network</CardTitle>
          </div>
          <StatusBadge label="Research Only" tone="manual" />
        </div>
        <CardDescription>Scouts report to Revenue Architect. They do not publish, message, spend, or scrape against platform rules.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-3 md:grid-cols-3">
        {scoutOfficers.map((scout) => (
          <OfficerBadgeShell key={scout.id} emoji={scout.emoji} name={scout.name} role={scout.role} status={scout.status} />
        ))}
      </CardContent>
    </Card>
  );
}

function OfficerNetworkPanel() {
  return (
    <Card className="border-emerald-300/30 bg-emerald-950/15">
      <CardHeader>
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-200">Officer Network</p>
            <CardTitle className="mt-2 text-2xl text-emerald-100">Council state</CardTitle>
          </div>
          <BrainCircuit className="h-5 w-5 text-emerald-200" />
        </div>
        <CardDescription>Connected means represented in typed local state, not connected to external accounts.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        {officerNetwork.map((officer) => (
          <div key={officer.id} className="rounded-md border border-emerald-300/20 bg-background/50 p-3">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">{officer.role}</p>
                <h3 className="mt-1 text-sm font-semibold text-emerald-100">{officer.name}</h3>
              </div>
              <StatusBadge label={officer.state} tone={officerTone[officer.state]} />
            </div>
            <p className="mt-2 text-sm leading-6 text-foreground/85">{officer.currentSignal}</p>
          </div>
        ))}
        <div className="rounded-md border border-emerald-300/20 bg-emerald-300/10 p-3 text-sm leading-6 text-emerald-100">
          {officerNetworkDoctrine[2]}
        </div>
      </CardContent>
    </Card>
  );
}

function EventRegistryPanel() {
  return (
    <Card className="border-cyan-300/30 bg-cyan-950/15">
      <CardHeader>
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200">Event Registry</p>
            <CardTitle className="mt-2 text-2xl text-cyan-100">Mission Bus channels</CardTitle>
          </div>
          <RadioTower className="h-5 w-5 text-cyan-200" />
        </div>
        <CardDescription>{eventRegistrySummary.safetyBoundary}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        {eventChannels.map((channel) => (
          <div key={channel.id} className="rounded-md border border-cyan-300/20 bg-background/50 p-3">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">{channel.eventType.replace(/_/g, " ")}</p>
                <h3 className="mt-1 text-sm font-semibold text-cyan-100">{channel.name}</h3>
              </div>
              <StatusBadge label={channel.status} tone={eventTone[channel.status]} />
            </div>
            <p className="mt-2 text-sm leading-6 text-foreground/85">{channel.purpose}</p>
            <p className="mt-2 text-xs leading-5 text-muted-foreground">Boundary: {channel.evidenceBoundary}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

function DivisionHealthPanel() {
  return (
    <Card className="border-amber-300/30 bg-amber-950/15">
      <CardHeader>
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-200">Division Health</p>
            <CardTitle className="mt-2 text-2xl text-amber-100">Measurable divisions</CardTitle>
          </div>
          <Activity className="h-5 w-5 text-amber-200" />
        </div>
        <CardDescription>Each division reports through typed KPIs. Missing values remain N/A.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-3 md:grid-cols-2">
        {divisionKpiReports.map((report) => (
          <div key={report.id} className="rounded-md border border-amber-300/20 bg-background/50 p-3">
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-sm font-semibold text-amber-100">{report.division}</h3>
              <StatusBadge label={report.status} tone={report.status === "On Track" ? "success" : "manual"} />
            </div>
            <div className="mt-3 space-y-2">
              {report.kpis.slice(0, 3).map((kpi) => (
                <MetricLine key={kpi.label} label={kpi.label} value={String(kpi.value)} />
              ))}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

function ChroniclePanel() {
  const latest = chronicleEntries[0];
  return (
    <Card className="border-purple-300/30 bg-purple-950/15">
      <CardHeader>
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-purple-200">The Chronicle</p>
            <CardTitle className="mt-2 text-2xl text-purple-100">{latest.week}</CardTitle>
          </div>
          <ShieldCheck className="h-5 w-5 text-purple-200" />
        </div>
        <CardDescription>{latest.period}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <MetricLine label="Status" value={latest.status} />
        <MetricLine label="Revenue" value={latest.revenue} />
        <div className="rounded-md border border-purple-300/20 bg-background/50 p-3 text-sm leading-6 text-foreground/85">
          {latest.lessons[0]}
        </div>
        <div className="flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-muted-foreground">
          <ArrowRight className="h-3.5 w-3.5" /> Chronicle lives in The Academy
        </div>
      </CardContent>
    </Card>
  );
}

function BridgeStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md border border-cyan-300/20 bg-background/50 p-3">
      <p className="mb-1 text-xs uppercase tracking-[0.14em] text-muted-foreground">{label}</p>
      <p className="text-sm font-medium leading-6 text-foreground/90">{value}</p>
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
