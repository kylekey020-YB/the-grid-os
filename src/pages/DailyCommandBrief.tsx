import { ClipboardCheck, FileText, ShieldCheck } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { StatusBadge } from "@/components/StatusBadge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  commandBriefMetrics,
  commandBriefRecommendation,
  commandBriefSchema,
  commandBriefSections,
  commandBriefSummary,
  type CommandBriefSection,
  type CommandBriefStatus,
} from "@/data/dailyCommandBrief";

const statusTone: Record<CommandBriefStatus, "success" | "manual" | "danger" | "beta" | "muted"> = {
  "On Track": "success",
  "Needs Review": "manual",
  Blocked: "danger",
  Monitoring: "beta",
  "N/A": "muted",
};

export function DailyCommandBrief() {
  return (
    <div className="space-y-7">
      <section className="relative overflow-hidden rounded-lg border border-amber-300/30 bg-card/85 p-6 shadow-[0_0_90px_rgba(251,191,36,0.14)] md:p-8">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(251,191,36,0.18),transparent_24rem),linear-gradient(rgba(34,211,238,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(251,191,36,0.05)_1px,transparent_1px)] bg-[size:auto,38px_38px,38px_38px]" />
        <div className="relative grid gap-6 xl:grid-cols-[1.15fr_0.85fr] xl:items-end">
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-300/35 bg-amber-300/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-amber-100"><ClipboardCheck className="h-3.5 w-3.5" /> {commandBriefSummary.version}</div>
            <div className="space-y-3"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200">Morning command page</p><h1 className="font-display text-4xl font-semibold leading-tight md:text-6xl">Daily Command Brief</h1><p className="max-w-3xl text-base leading-7 text-muted-foreground md:text-lg">{commandBriefSummary.purpose}</p></div>
            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4"><Metric label="Sections" value={String(commandBriefMetrics.sections)} /><Metric label="Blockers" value={String(commandBriefMetrics.blockers)} /><Metric label="Needs Review" value={String(commandBriefMetrics.needsReview)} /><Metric label="Recommendation" value="1" /></div>
          </div>
          <Card className="border-red-300/30 bg-red-950/15"><CardHeader className="flex-row items-start gap-3"><ShieldCheck className="mt-1 h-5 w-5 text-red-200" /><div><CardTitle className="text-red-100">Coordination rule</CardTitle><CardDescription>{commandBriefSummary.rule}</CardDescription></div></CardHeader><CardContent><p className="rounded-md border border-red-300/20 bg-background/50 p-3 text-sm leading-6 text-red-100">Doctrine source: {commandBriefSummary.doctrineSource}</p></CardContent></Card>
        </div>
      </section>

      <section className="space-y-4"><SectionHeader eyebrow="Shared Schema" title="Every division reports the same way" description="The brief removes translation work. Each lane uses the same fields and links back to a Mission ID and Obsidian note." /><div className="grid gap-3 md:grid-cols-4 xl:grid-cols-7">{commandBriefSchema.map((field) => <div key={field} className="rounded-md border border-amber-300/20 bg-amber-300/10 p-3 text-center text-sm font-medium text-amber-100">{field}</div>)}</div></section>

      <section className="space-y-4"><SectionHeader eyebrow="Command Brief" title="Division reports" description="Only evidence-backed signals belong here. Unknown values stay N/A." /><div className="grid gap-4 xl:grid-cols-3">{commandBriefSections.map((section) => <BriefSectionCard key={section.name} section={section} />)}</div></section>

      <section className="space-y-4"><SectionHeader eyebrow="One Recommendation" title="The decision support line" description="The morning brief ends with one recommendation so the next move is clear." /><Card className="border-emerald-300/30 bg-emerald-950/15"><CardHeader><div className="flex items-start justify-between gap-3"><div><p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-200">{commandBriefRecommendation.missionId} / {commandBriefRecommendation.owner}</p><CardTitle className="mt-2 text-2xl text-emerald-100">{commandBriefRecommendation.title}</CardTitle></div><StatusBadge label="Recommended" tone="success" /></div><CardDescription>{commandBriefRecommendation.rationale}</CardDescription></CardHeader><CardContent><div className="rounded-md border border-emerald-300/20 bg-background/50 p-3 text-sm leading-6 text-foreground/90">{commandBriefRecommendation.nextAction}</div></CardContent></Card></section>
    </div>
  );
}

function BriefSectionCard({ section }: { section: CommandBriefSection }) {
  return <Card className="border-cyan-300/25 bg-card/80"><CardHeader><div className="flex items-start justify-between gap-3"><div><p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200">{section.relatedMissionId}</p><CardTitle className="mt-2 text-xl">{section.name}</CardTitle></div><StatusBadge label={section.status} tone={statusTone[section.status]} /></div><CardDescription>{section.signal}</CardDescription></CardHeader><CardContent className="space-y-3"><Info label="Evidence" value={section.evidence} /><Info label="Blocker" value={section.blocker} /><Info label="Next Action" value={section.nextAction} /><Info label="Obsidian Note" value={section.obsidianNote} /></CardContent></Card>;
}

function Info({ label, value }: { label: string; value: string }) { return <div className="rounded-md border border-border/70 bg-background/50 p-3"><div className="mb-1 flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-muted-foreground"><FileText className="h-3.5 w-3.5 text-primary" />{label}</div><p className="text-sm leading-6 text-foreground/90">{value}</p></div>; }
function Metric({ label, value }: { label: string; value: string }) { return <div className="rounded-md border border-amber-300/20 bg-background/50 p-3"><p className="mb-1 text-xs uppercase tracking-[0.14em] text-muted-foreground">{label}</p><p className="text-sm font-medium leading-6 text-foreground/90">{value}</p></div>; }
