import { BrainCircuit, Database, FileSearch, Network, ShieldCheck } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { StatusBadge } from "@/components/StatusBadge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { intelligenceCorpsMetrics, intelligenceCorpsSummary, intelligenceDivisions, scoutsByDivision, type IntelligenceDivisionStatus } from "@/data/intelligenceCorps";
import { scoutRegistryDoctrine, type ScoutStatus } from "@/data/scoutRegistry";

const divisionTone: Record<IntelligenceDivisionStatus, "manual" | "beta"> = {
  "Research Only": "manual",
  Planned: "beta",
  "Manual Review": "manual",
};

const scoutTone: Record<ScoutStatus, "success" | "manual" | "beta" | "muted"> = {
  Active: "success",
  "Research Only": "manual",
  Planned: "beta",
  "Manual Review": "manual",
  Dormant: "muted",
};

export function IntelligenceCorps() {
  return (
    <div className="space-y-7">
      <section className="relative overflow-hidden rounded-lg border border-cyan-300/30 bg-card/85 p-6 shadow-[0_0_90px_rgba(34,211,238,0.14)] md:p-8">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(34,211,238,0.18),transparent_24rem),linear-gradient(rgba(34,211,238,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.05)_1px,transparent_1px)] bg-[size:auto,38px_38px,38px_38px]" />
        <div className="relative grid gap-6 xl:grid-cols-[1.15fr_0.85fr] xl:items-end">
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/35 bg-cyan-300/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-cyan-100"><Network className="h-3.5 w-3.5" /> {intelligenceCorpsSummary.version} Intelligence Corps</div>
            <div className="space-y-3"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">Discovery engine</p><h1 className="font-display text-4xl font-semibold leading-tight md:text-6xl">Intelligence Corps</h1><p className="max-w-3xl text-base leading-7 text-muted-foreground md:text-lg">{intelligenceCorpsSummary.mission}</p></div>
            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
              <Metric label="Divisions" value={String(intelligenceCorpsMetrics.divisions)} />
              <Metric label="Scouts" value={String(intelligenceCorpsMetrics.registeredScouts)} />
              <Metric label="Research Only" value={String(intelligenceCorpsMetrics.researchOnlyScouts)} />
              <Metric label="Planned" value={String(intelligenceCorpsMetrics.plannedScouts)} />
              <Metric label="External Actions" value="0" />
            </div>
          </div>
          <Card className="border-purple-300/30 bg-purple-950/15">
            <CardHeader className="flex-row items-start gap-3"><Database className="mt-1 h-5 w-5 text-purple-200" /><div><CardTitle className="text-purple-100">Institutional memory principle</CardTitle><CardDescription>{intelligenceCorpsSummary.doctrine}</CardDescription></div></CardHeader>
          </Card>
        </div>
      </section>

      <section className="space-y-4"><SectionHeader eyebrow="Doctrine" title="Discovery without execution" description={intelligenceCorpsSummary.safety} /><div className="grid gap-3 md:grid-cols-2 xl:grid-cols-5">{scoutRegistryDoctrine.map((item) => <div key={item} className="rounded-md border border-cyan-300/20 bg-cyan-300/10 p-3 text-sm leading-6 text-cyan-100">{item}</div>)}</div></section>

      <section className="space-y-4"><SectionHeader eyebrow="Divisions" title="Five discovery teams" description="Each division has a mission, lead, knowledge destination, and hard boundaries before action." /><div className="grid gap-4 xl:grid-cols-2">{intelligenceDivisions.map((division) => <Card key={division.id} className="border-cyan-300/25 bg-card/80"><CardHeader><div className="flex items-start justify-between gap-3"><div><p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200">{division.lead}</p><CardTitle className="mt-2 text-xl">{division.name}</CardTitle></div><StatusBadge label={division.status} tone={divisionTone[division.status]} /></div><CardDescription>{division.mission}</CardDescription></CardHeader><CardContent className="space-y-3"><Info label="Current Focus" value={division.currentFocus} /><Info label="Knowledge Destination" value={division.knowledgeDestination} /><List title="Boundaries" items={division.boundaries} /></CardContent></Card>)}</div></section>

      <section className="space-y-4"><SectionHeader eyebrow="Scout Registry" title="Capabilities, outputs, cadence, and approvals" description="The registry keeps scout responsibilities portable across ChatGPT, Hermes, Claude, Claude Code, Codex, and future providers." /><div className="grid gap-4 xl:grid-cols-2">{scoutsByDivision.map((group) => group.scouts.map((scout) => <Card key={scout.id} className="border-emerald-300/25 bg-card/80"><CardHeader><div className="flex items-start justify-between gap-3"><div><p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-200">{scout.id} / {scout.division}</p><CardTitle className="mt-2 text-xl">{scout.name}</CardTitle></div><StatusBadge label={scout.status} tone={scoutTone[scout.status]} /></div><CardDescription>{scout.mission}</CardDescription></CardHeader><CardContent className="grid gap-3 md:grid-cols-2"><List title="Capabilities" items={scout.capabilities} /><List title="Outputs" items={scout.outputs} /><Info label="Cadence" value={scout.cadence} /><Info label="Destination" value={scout.knowledgeDestination} /><List title="Approval Requirements" items={scout.approvalRequirements} /></CardContent></Card>))}</div></section>
    </div>
  );
}

function Info({ label, value }: { label: string; value: string }) { return <div className="rounded-md border border-border/70 bg-background/50 p-3"><p className="mb-1 text-xs uppercase tracking-[0.14em] text-muted-foreground">{label}</p><p className="text-sm leading-6 text-foreground/90">{value}</p></div>; }
function List({ title, items }: { title: string; items: string[] }) { return <div className="rounded-md border border-border/70 bg-background/50 p-3"><p className="mb-2 text-xs uppercase tracking-[0.14em] text-muted-foreground">{title}</p><div className="space-y-2">{items.map((item) => <p key={item} className="rounded-md border border-cyan-300/15 bg-cyan-300/10 p-2 text-sm leading-5 text-cyan-100">{item}</p>)}</div></div>; }
function Metric({ label, value }: { label: string; value: string }) { return <div className="rounded-md border border-cyan-300/20 bg-background/50 p-3"><p className="mb-1 text-xs uppercase tracking-[0.14em] text-muted-foreground">{label}</p><p className="text-sm font-medium leading-6 text-foreground/90">{value}</p></div>; }
