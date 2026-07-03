import { BrainCircuit, ShieldCheck } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { StatusBadge } from "@/components/StatusBadge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { councilDoctrine, councilOfficers, type CouncilOfficer, type OfficerConfidence } from "@/data/council";
import { hermesAgentProfiles } from "@/data/hermesAgents";
import { revenueCorpsSummary, revenueCorpsUnits, revenueCorpsWaves } from "@/data/revenueCorps";
import { senateDoctrine, senateRecommendations, type SenateConfidence } from "@/data/senate";
import { scoutDoctrine, scoutOfficers } from "@/data/scoutOfficers";

const confidenceTone: Record<OfficerConfidence | SenateConfidence, "success" | "manual" | "beta"> = { High: "success", Medium: "manual", Low: "beta" };

export function Council() {
  return (
    <div className="space-y-7">
      <section className="relative overflow-hidden rounded-lg border border-purple-300/25 bg-card/80 p-6 shadow-[0_0_80px_rgba(168,85,247,0.12)] md:p-8">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(168,85,247,0.18),transparent_26rem),linear-gradient(rgba(168,85,247,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.04)_1px,transparent_1px)] bg-[size:auto,42px_42px,42px_42px]" />
        <div className="relative grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end"><div className="space-y-4"><div className="inline-flex items-center gap-2 rounded-full border border-purple-300/30 bg-purple-300/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-purple-200"><BrainCircuit className="h-3.5 w-3.5" /> Executive Council</div><div className="space-y-3"><h1 className="font-display text-4xl font-semibold leading-tight md:text-6xl">Council</h1><p className="max-w-3xl text-base leading-7 text-muted-foreground md:text-lg">AI officers as advisory roles. They provide read-only guidance, evidence summaries, and recommendations. They do not act autonomously.</p></div></div><Card className="border-cyan-300/30 bg-cyan-950/15"><CardHeader className="flex-row items-start gap-3"><ShieldCheck className="mt-1 h-5 w-5 text-cyan-200" /><div><CardTitle className="text-cyan-100">Council Doctrine</CardTitle><CardDescription>{councilDoctrine}</CardDescription></div></CardHeader></Card></div>
      </section>

      <section className="space-y-4"><SectionHeader eyebrow="The Senate" title="Revenue decision support" description={senateDoctrine} /><div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">{senateRecommendations.map((item) => <SenateCard key={item.id} item={item} />)}</div></section>

      <RevenueCorpsCouncil />

      <section className="space-y-4"><SectionHeader eyebrow="Scout Officers" title="Opportunity discovery layer" description="Scouts report to Revenue Architect. They gather public evidence and create reports only." /><div className="grid gap-3 md:grid-cols-2 xl:grid-cols-5">{scoutDoctrine.map((item) => <div key={item} className="rounded-md border border-emerald-300/20 bg-emerald-300/10 p-3 text-sm leading-6 text-emerald-100">{item}</div>)}</div><div className="grid gap-4 md:grid-cols-3">{scoutOfficers.map((scout) => <Card key={scout.id} className="border-emerald-300/25 bg-card/80"><CardHeader><div className="flex items-start justify-between gap-3"><div className="flex items-center gap-3"><span className="flex h-11 w-11 items-center justify-center rounded-md border border-emerald-300/30 bg-emerald-300/10 text-2xl">{scout.emoji}</span><div><p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-200">{scout.reportsTo}</p><CardTitle className="mt-1 text-lg">{scout.name}</CardTitle></div></div><StatusBadge label={scout.status} tone="beta" /></div><CardDescription>{scout.role}</CardDescription></CardHeader><CardContent className="space-y-3 text-sm"><Info label="Mission" value={scout.mission} /><Info label="Output" value={scout.output} /></CardContent></Card>)}</div></section>

      <section className="space-y-4"><SectionHeader eyebrow="Hermes Profiles" title="Prepared specialist identities" description="Hermes profiles define future live-agent boundaries. They are not connected to accounts and cannot act autonomously." /><div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">{hermesAgentProfiles.map((profile) => <Card key={profile.id} className="border-cyan-300/20 bg-card/80"><CardHeader><div className="flex items-start justify-between gap-3"><div className="flex items-center gap-3"><span className="flex h-11 w-11 items-center justify-center rounded-md border border-cyan-300/30 bg-cyan-300/10 text-2xl">{profile.emoji}</span><div><p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200">{profile.allowedAutonomyLevel}</p><CardTitle className="mt-1 text-lg">{profile.name}</CardTitle></div></div><StatusBadge label={profile.status} tone="beta" /></div><CardDescription>{profile.role}</CardDescription></CardHeader><CardContent className="space-y-3 text-sm"><Info label="Personality" value={profile.personality} /><Info label="Approval gates" value={profile.approvalGates.join(" / ")} /></CardContent></Card>)}</div></section>

      <section className="space-y-4"><SectionHeader eyebrow="Officers" title="Read-only advisory layer" description="Each officer has a domain, current signal, recommendation placeholder, confidence, and evidence source." /><div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">{councilOfficers.map((officer) => <OfficerCard key={officer.id} officer={officer} />)}</div></section>
    </div>
  );
}

function RevenueCorpsCouncil() {
  const waveOne = revenueCorpsWaves[0];

  return (
    <section className="space-y-4">
      <SectionHeader eyebrow="Revenue Corps" title="Scout Corps reports to Revenue Architect" description={revenueCorpsSummary.doctrine} />
      <Card className="border-emerald-300/35 bg-emerald-950/15">
        <CardHeader>
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-200">{waveOne.name}</p>
              <CardTitle className="mt-2 text-2xl text-emerald-100">Research-only opportunity hunters</CardTitle>
            </div>
            <StatusBadge label="Advisory Only" tone="manual" />
          </div>
          <CardDescription>{revenueCorpsSummary.safety}</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-3">
          {revenueCorpsUnits.filter((unit) => unit.activationWave === "Wave 1").map((unit) => (
            <div key={unit.id} className="rounded-md border border-emerald-300/20 bg-background/50 p-3">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className="text-xl">{unit.emoji}</span>
                  <div>
                    <h3 className="text-sm font-semibold text-emerald-100">{unit.name}</h3>
                    <p className="text-xs text-muted-foreground">Reports to {unit.reportsTo}</p>
                  </div>
                </div>
                <StatusBadge label={unit.status} tone="manual" />
              </div>
              <p className="mt-3 text-sm leading-6 text-foreground/85">{unit.mission}</p>
            </div>
          ))}
        </CardContent>
      </Card>
    </section>
  );
}

function SenateCard({ item }: { item: typeof senateRecommendations[number] }) { return <Card className="overflow-hidden border-emerald-300/25 bg-card/80"><div className="h-1 bg-gradient-to-r from-emerald-300 via-cyan-300 to-purple-300" /><CardHeader><div className="flex items-start justify-between gap-3"><div className="flex items-center gap-3"><span className="flex h-12 w-12 items-center justify-center rounded-md border border-emerald-300/30 bg-emerald-300/10 text-2xl">{item.emoji}</span><div><p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-200">{item.domain}</p><CardTitle className="mt-1 text-lg">{item.advisor}</CardTitle></div></div><StatusBadge label={item.confidence} tone={confidenceTone[item.confidence]} /></div><CardDescription>{item.recommendation}</CardDescription></CardHeader><CardContent><Info label="Evidence" value={item.evidence} /></CardContent></Card>; }

function OfficerCard({ officer }: { officer: CouncilOfficer }) {
  return <Card className="overflow-hidden border-purple-300/25 bg-card/80"><div className="h-1 bg-gradient-to-r from-purple-300 via-cyan-300 to-emerald-300" /><CardHeader><div className="flex items-start justify-between gap-3"><div className="flex items-center gap-3"><span className="flex h-12 w-12 items-center justify-center rounded-md border border-purple-300/30 bg-purple-300/10 text-2xl">{officer.emoji}</span><div><p className="text-xs font-semibold uppercase tracking-[0.16em] text-purple-200">{officer.division}</p><CardTitle className="mt-1 text-lg">{officer.name}</CardTitle></div></div><StatusBadge label="READ-ONLY ADVISORY" tone="beta" /></div><CardDescription>{officer.role}</CardDescription></CardHeader><CardContent className="space-y-3 text-sm"><Info label="Personality" value={officer.personalityStyle} /><Info label="Watches" value={officer.watches} /><Info label="Current Signal" value={officer.currentSignal} /><Info label="Recommendation" value={officer.recommendation} /><div className="grid gap-2 sm:grid-cols-2"><div className="rounded-md border border-border/70 bg-background/50 p-3"><p className="mb-2 text-xs uppercase tracking-[0.14em] text-muted-foreground">Confidence</p><StatusBadge label={officer.confidence} tone={confidenceTone[officer.confidence]} /></div><Info label="Evidence Source" value={officer.evidenceSource} /></div></CardContent></Card>;
}

function Info({ label, value }: { label: string; value: string }) {
  return <div className="rounded-md border border-border/70 bg-background/50 p-3"><p className="mb-1 text-xs uppercase tracking-[0.14em] text-muted-foreground">{label}</p><p className="leading-6 text-foreground/90">{value}</p></div>;
}
