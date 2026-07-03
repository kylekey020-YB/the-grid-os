import { BookOpenCheck, FileText, ShieldCheck } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { StatusBadge } from "@/components/StatusBadge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { playbookDoctrine, playbookMetrics, playbookRules, playbookTypes, playbooks, type Playbook, type PlaybookStatus } from "@/data/playbooks";

const statusTone: Record<PlaybookStatus, "success" | "manual" | "beta" | "muted"> = {
  Draft: "manual",
  Tested: "beta",
  Validated: "success",
  Retired: "muted",
};

export function Playbooks() {
  return (
    <div className="space-y-7">
      <section className="relative overflow-hidden rounded-lg border border-purple-300/30 bg-card/85 p-6 shadow-[0_0_90px_rgba(168,85,247,0.14)] md:p-8">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(168,85,247,0.18),transparent_24rem),linear-gradient(rgba(34,211,238,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(251,191,36,0.04)_1px,transparent_1px)] bg-[size:auto,38px_38px,38px_38px]" />
        <div className="relative grid gap-6 xl:grid-cols-[1.15fr_0.85fr] xl:items-end">
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-300/35 bg-purple-300/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-purple-100"><BookOpenCheck className="h-3.5 w-3.5" /> Playbook System v1.0</div>
            <div className="space-y-3"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-purple-200">Reusable institutional knowledge</p><h1 className="font-display text-4xl font-semibold leading-tight md:text-6xl">Playbooks</h1><p className="max-w-3xl text-base leading-7 text-muted-foreground md:text-lg">Every repeatable success becomes a playbook. Every major failure becomes a lesson. Every validated process becomes reusable institutional knowledge.</p></div>
            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4"><Metric label="Total" value={String(playbookMetrics.total)} /><Metric label="Draft" value={String(playbookMetrics.draft)} /><Metric label="Tested" value={String(playbookMetrics.tested)} /><Metric label="Validated" value={String(playbookMetrics.validated)} /></div>
          </div>
          <Card className="border-red-300/30 bg-red-950/15"><CardHeader className="flex-row items-start gap-3"><ShieldCheck className="mt-1 h-5 w-5 text-red-200" /><div><CardTitle className="text-red-100">Evidence rule</CardTitle><CardDescription>No completed playbooks unless evidence exists.</CardDescription></div></CardHeader><CardContent><p className="rounded-md border border-red-300/20 bg-background/50 p-3 text-sm leading-6 text-red-100">All initial playbooks are Draft placeholders. Validation requires repeated outcomes, Mission Records, Evidence Ledger entries, and Mission Commander review.</p></CardContent></Card>
        </div>
      </section>

      <section className="space-y-4"><SectionHeader eyebrow="Doctrine" title="Experience becomes reusable" description={playbookDoctrine} /><div className="grid gap-3 md:grid-cols-2 xl:grid-cols-5">{playbookRules.map((rule) => <div key={rule} className="rounded-md border border-purple-300/20 bg-purple-300/10 p-3 text-sm leading-6 text-purple-100">{rule}</div>)}</div></section>

      <section className="space-y-4"><SectionHeader eyebrow="Types" title="Every division can produce playbooks" description="A playbook type does not imply validation. It only defines where the reusable process belongs." /><div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">{playbookTypes.map((type) => <div key={type} className="rounded-md border border-cyan-300/20 bg-cyan-300/10 p-3 text-sm font-medium text-cyan-100">{type}</div>)}</div></section>

      <section className="space-y-4"><SectionHeader eyebrow="Registry" title="Initial draft playbooks" description="Placeholders are useful only when they are honest. Every item below is Draft until evidence proves the process." /><div className="grid gap-4 xl:grid-cols-2">{playbooks.map((playbook) => <PlaybookCard key={playbook.playbookId} playbook={playbook} />)}</div></section>
    </div>
  );
}

function PlaybookCard({ playbook }: { playbook: Playbook }) {
  return (
    <Card className="border-purple-300/25 bg-card/80">
      <CardHeader>
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div><p className="text-xs font-semibold uppercase tracking-[0.16em] text-purple-200">{playbook.playbookId} / {playbook.type}</p><CardTitle className="mt-2 text-xl">{playbook.title}</CardTitle></div>
          <StatusBadge label={playbook.status} tone={statusTone[playbook.status]} />
        </div>
        <CardDescription>{playbook.whenToUse}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-3 md:grid-cols-2"><Info label="Division" value={playbook.division} /><Info label="Owner" value={playbook.owner} /><Info label="Trigger" value={playbook.trigger} /><Info label="Obsidian Note" value={playbook.relatedObsidianNote} /></div>
        <List title="Inputs Required" items={playbook.inputsRequired} />
        <List title="Step-by-step Procedure" items={playbook.procedure} />
        <div className="grid gap-3 md:grid-cols-2"><List title="Success Criteria" items={playbook.successCriteria} /><List title="Failure Conditions" items={playbook.failureConditions} /></div>
        <div className="rounded-md border border-amber-300/20 bg-amber-300/10 p-3 text-sm leading-6 text-amber-100"><FileText className="mb-2 h-4 w-4" />{playbook.evidenceRule}</div>
      </CardContent>
    </Card>
  );
}

function List({ title, items }: { title: string; items: string[] }) { return <div className="rounded-md border border-border/70 bg-background/50 p-3"><p className="mb-2 text-xs uppercase tracking-[0.14em] text-muted-foreground">{title}</p><div className="space-y-2">{items.map((item) => <p key={item} className="text-sm leading-6 text-foreground/85">{item}</p>)}</div></div>; }
function Info({ label, value }: { label: string; value: string }) { return <div className="rounded-md border border-border/70 bg-background/50 p-3"><p className="mb-1 text-xs uppercase tracking-[0.14em] text-muted-foreground">{label}</p><p className="break-words text-sm leading-6 text-foreground/90">{value}</p></div>; }
function Metric({ label, value }: { label: string; value: string }) { return <div className="rounded-md border border-purple-300/20 bg-background/50 p-3"><p className="mb-1 text-xs uppercase tracking-[0.14em] text-muted-foreground">{label}</p><p className="text-sm font-medium leading-6 text-foreground/90">{value}</p></div>; }
