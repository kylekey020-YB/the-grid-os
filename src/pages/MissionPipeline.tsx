import { ArrowDown, BrainCircuit, CheckCircle2, FileText, LockKeyhole, Route, ShieldCheck } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { StatusBadge } from "@/components/StatusBadge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { missionPipelineDoctrine, missionPipelineItems, missionPipelineStages, type MissionPipelineItem, type MissionPipelineStage, type MissionPipelineStageStatus } from "@/data/missionPipeline";

const stageTone: Record<MissionPipelineStageStatus, "success" | "manual" | "beta" | "muted"> = { Active: "success", "Manual Only": "manual", "Evidence Required": "beta", "Approval Required": "manual", "Future Gate": "beta", Locked: "muted" };

export function MissionPipeline() {
  return (
    <div className="space-y-7">
      <section className="relative overflow-hidden rounded-lg border border-cyan-300/25 bg-card/80 p-6 shadow-[0_0_80px_rgba(34,211,238,0.12)] md:p-8">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(34,211,238,0.2),transparent_26rem),linear-gradient(rgba(34,211,238,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(251,191,36,0.05)_1px,transparent_1px)] bg-[size:auto,38px_38px,38px_38px]" />
        <div className="relative grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div className="space-y-4"><div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-cyan-200"><Route className="h-3.5 w-3.5" /> v1.4 Mission Pipeline</div><div className="space-y-3"><h1 className="font-display text-4xl font-semibold leading-tight md:text-6xl">Mission Pipeline</h1><p className="max-w-3xl text-base leading-7 text-muted-foreground md:text-lg">The company workflow from raw idea to institutional knowledge. Nothing skips the pipeline.</p></div></div>
          <Card className="border-amber-300/30 bg-amber-950/15"><CardHeader className="flex-row items-start gap-3"><ShieldCheck className="mt-1 h-5 w-5 text-amber-200" /><div><CardTitle className="text-amber-100">Pipeline Lock</CardTitle><CardDescription>Every irreversible move still requires evidence, approval, and a record. This page is read-only structure, not automation.</CardDescription></div></CardHeader></Card>
        </div>
      </section>

      <section className="space-y-4"><SectionHeader eyebrow="Doctrine" title="Company DNA" description="The pipeline turns doctrine into a repeatable operating sequence." /><div className="grid gap-3 md:grid-cols-2 xl:grid-cols-6">{missionPipelineDoctrine.map((item) => <div key={item} className="rounded-md border border-cyan-300/20 bg-cyan-300/10 p-3 text-sm leading-6 text-cyan-100">{item}</div>)}</div></section>
      <section className="space-y-4"><SectionHeader eyebrow="Pipeline" title="Idea to institutional knowledge" description="A stage cannot be skipped just because the next stage is more exciting." /><div className="grid gap-3 xl:grid-cols-4">{missionPipelineStages.map((stage, index) => <StageCard key={stage.id} stage={stage} showArrow={index < missionPipelineStages.length - 1} />)}</div></section>
      <section className="space-y-4"><SectionHeader eyebrow="Current Items" title="Tracked mission pipeline objects" description="These are examples of current ideas or campaigns moving through the pipeline. They are not live automations." /><div className="grid gap-4 lg:grid-cols-2">{missionPipelineItems.map((item) => <PipelineItemCard key={item.id} item={item} />)}</div></section>
      <section className="space-y-4"><SectionHeader eyebrow="Locked Gates" title="What cannot be skipped" description="Revenue, scale, playbooks, automation, divisions, and Programs require proof before promotion." /><div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4"><LockPanel title="Approval" body="Everything irreversible flows through the Approval Queue." /><LockPanel title="Revenue" body="No milestone is claimed without evidence." /><LockPanel title="Automation" body="Reality before automation. Playbooks come first." /><LockPanel title="Program" body="Programs are earned, not declared." /></div></section>
    </div>
  );
}

function StageCard({ stage, showArrow }: { stage: MissionPipelineStage; showArrow: boolean }) {
  return <Card className="relative overflow-hidden border-cyan-300/20 bg-card/80"><div className="h-1 bg-gradient-to-r from-cyan-300 via-amber-300 to-emerald-300" /><CardHeader><div className="flex items-start justify-between gap-3"><div><p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200">{String(stage.order).padStart(2, "0")}</p><CardTitle className="mt-2 text-lg">{stage.name}</CardTitle></div><StatusBadge label={stage.status} tone={stageTone[stage.status]} /></div><CardDescription>{stage.purpose}</CardDescription></CardHeader><CardContent className="space-y-3 text-sm"><Info label="Required Evidence" value={stage.requiredEvidence} icon={FileText} /><Info label="Approval Gate" value={stage.approvalGate} icon={CheckCircle2} /><Info label="Cannot Skip" value={stage.cannotSkipReason} icon={LockKeyhole} />{showArrow ? <div className="flex justify-center border-t border-border/70 pt-3 text-cyan-200"><ArrowDown className="h-4 w-4" /></div> : null}</CardContent></Card>;
}

function PipelineItemCard({ item }: { item: MissionPipelineItem }) {
  return <Card className="border-amber-300/25 bg-card/80"><CardHeader><div className="flex items-start justify-between gap-3"><div><p className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-200">{item.id} / {item.owner}</p><CardTitle className="mt-2 text-xl">{item.title}</CardTitle></div><StatusBadge label={item.status} tone={item.status === "Awaiting Commander" ? "manual" : item.status === "Active" ? "success" : "beta"} /></div><CardDescription>Current stage: {item.currentStage}</CardDescription></CardHeader><CardContent className="space-y-3 text-sm"><Info label="Evidence State" value={item.evidenceState} icon={FileText} /><Info label="Approval State" value={item.approvalState} icon={ShieldCheck} /><Info label="Next Gate" value={item.nextGate} icon={BrainCircuit} /></CardContent></Card>;
}

function LockPanel({ title, body }: { title: string; body: string }) { return <Card className="border-red-300/20 bg-red-950/10"><CardHeader className="flex-row items-start gap-3"><LockKeyhole className="mt-1 h-5 w-5 text-red-200" /><div><CardTitle className="text-lg text-red-100">{title}</CardTitle><CardDescription>{body}</CardDescription></div></CardHeader></Card>; }
function Info({ label, value, icon: Icon }: { label: string; value: string; icon: typeof FileText }) { return <div className="rounded-md border border-border/70 bg-background/50 p-3"><div className="mb-1 flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-muted-foreground"><Icon className="h-3.5 w-3.5 text-primary" />{label}</div><p className="leading-6 text-foreground/90">{value}</p></div>; }
