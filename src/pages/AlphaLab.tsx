import { FlaskConical, GitBranch, ShieldCheck } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { StatusBadge } from "@/components/StatusBadge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  alphaFamilies,
  alphaLabMetrics,
  alphaLabSummary,
  alphaRecords,
  botAlignments,
  type AlphaDifficulty,
  type AlphaQuality,
  type AlphaRisk,
  type AlphaVerdict,
} from "@/data/alphaLab";

const verdictTone: Record<AlphaVerdict, "success" | "manual" | "beta" | "danger" | "muted"> = {
  Reject: "danger",
  "Research More": "manual",
  Prototype: "beta",
  Backtest: "manual",
  "Paper Test": "success",
  "Live Candidate": "success",
  Retired: "muted",
};

const riskTone: Record<AlphaRisk, "success" | "manual" | "danger" | "muted"> = {
  "N/A": "muted",
  Low: "success",
  Medium: "manual",
  High: "danger",
  "Very High": "danger",
};

const qualityTone: Record<AlphaQuality, "success" | "manual" | "beta" | "muted"> = {
  "N/A": "muted",
  Low: "beta",
  Medium: "manual",
  High: "success",
};

const difficultyTone: Record<AlphaDifficulty, "success" | "manual" | "danger"> = {
  Low: "success",
  Medium: "manual",
  High: "danger",
  "Very High": "danger",
};

export function AlphaLab() {
  const wraithLstm = alphaRecords.find((record) => record.id === "ALPHA-501");

  return (
    <div className="space-y-7">
      <section className="relative overflow-hidden rounded-lg border border-cyan-300/30 bg-card/85 p-6 shadow-[0_0_100px_rgba(34,211,238,0.14)] md:p-8">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(34,211,238,0.18),transparent_26rem),radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.14),transparent_22rem),linear-gradient(rgba(34,211,238,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.04)_1px,transparent_1px)] bg-[size:auto,auto,38px_38px,38px_38px]" />
        <div className="relative grid gap-6 xl:grid-cols-[1.15fr_0.85fr] xl:items-end">
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/35 bg-cyan-300/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-cyan-100">
              <FlaskConical className="h-3.5 w-3.5" /> {alphaLabSummary.version} Alpha Lab
            </div>
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">Alpha generation system</p>
              <h1 className="font-display text-4xl font-semibold leading-tight md:text-6xl">Alpha Lab</h1>
              <p className="max-w-3xl text-base leading-7 text-muted-foreground md:text-lg">{alphaLabSummary.mission}</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-6">
              <Metric label="Families" value={String(alphaLabMetrics.families)} />
              <Metric label="Records" value={String(alphaLabMetrics.records)} />
              <Metric label="Backtest Queue" value={String(alphaLabMetrics.backtestQueue)} />
              <Metric label="Live Candidates" value={String(alphaLabMetrics.liveCandidates)} />
              <Metric label="Evidence Scored" value={String(alphaLabMetrics.evidenceScored)} />
              <Metric label="Live Connections" value={String(alphaLabMetrics.liveConnections)} />
            </div>
          </div>
          <Card className="border-red-300/30 bg-red-950/15">
            <CardHeader className="flex-row items-start gap-3">
              <ShieldCheck className="mt-1 h-5 w-5 text-red-200" />
              <div>
                <CardTitle className="text-red-100">Research only</CardTitle>
                <CardDescription>{alphaLabSummary.safety}</CardDescription>
              </div>
            </CardHeader>
          </Card>
        </div>
      </section>

      <section className="space-y-4">
        <SectionHeader eyebrow="Continuous Improvement Doctrine" title="The research engine is the edge" description={alphaLabSummary.continuousImprovement} />
        <Card className="border-purple-300/30 bg-purple-950/15">
          <CardHeader>
            <CardTitle className="text-2xl text-purple-100">No strategy is permanent</CardTitle>
            <CardDescription>{alphaLabSummary.doctrine}</CardDescription>
          </CardHeader>
        </Card>
      </section>

      <section className="space-y-4">
        <SectionHeader eyebrow="Alpha Library" title="Six families of hypotheses" description="Families organize research. They do not imply an edge exists. Each record must earn promotion through evidence." />
        <div className="grid gap-4 xl:grid-cols-2">
          {alphaFamilies.map((family) => (
            <Card key={family.id} className="border-cyan-300/25 bg-card/80">
              <CardHeader>
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200">{family.id}</p>
                    <CardTitle className="mt-2 text-xl">{family.name}</CardTitle>
                  </div>
                  <StatusBadge label={family.assignedBots.join(" / ")} tone="manual" />
                </div>
                <CardDescription>{family.focus}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {family.examples.map((example) => <span key={example} className="rounded-md border border-border/70 bg-background/50 px-2 py-1 text-xs text-muted-foreground">{example}</span>)}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {wraithLstm ? <WraithLstmPanel record={wraithLstm} /> : null}

      <section className="space-y-4">
        <SectionHeader eyebrow="Alpha Records" title="Hypotheses competing against evidence" description="Every alpha record carries its data requirements, model type, evidence status, overfitting risk, and current verdict." />
        <div className="grid gap-4 xl:grid-cols-2">
          {alphaRecords.map((record) => <AlphaRecordCard key={record.id} record={record} />)}
        </div>
      </section>

      <section className="space-y-4">
        <SectionHeader eyebrow="Bot Alignment" title="Research programs own families, not claims" description="ORION, WRAITH, PAIRFORGE, VOLTA, and ATLAS each receive a research mandate and a hard boundary." />
        <div className="grid gap-4 xl:grid-cols-2">
          {botAlignments.map((alignment) => (
            <Card key={alignment.bot} className="border-blue-300/25 bg-blue-950/10">
              <CardHeader>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-200">{alignment.alphaFamilies.join(" / ")}</p>
                    <CardTitle className="mt-2 text-xl text-blue-100">{alignment.bot}</CardTitle>
                  </div>
                  <GitBranch className="h-5 w-5 text-blue-200" />
                </div>
                <CardDescription>{alignment.mandate}</CardDescription>
              </CardHeader>
              <CardContent className="rounded-md border border-red-300/20 bg-red-950/10 p-3 text-sm leading-6 text-red-100">
                {alignment.hardBoundary}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}

function WraithLstmPanel({ record }: { record: (typeof alphaRecords)[number] }) {
  return (
    <section className="space-y-4">
      <SectionHeader eyebrow="WRAITH-LSTM Integration" title="ALPHA-501 Sequential Liquidation Model" description="The model does not assume liquidation patterns are momentum or contrarian. It tests both possibilities and lets evidence decide." />
      <Card className="border-amber-300/30 bg-amber-950/15">
        <CardHeader>
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-200">{record.id} / {record.assignedBot}</p>
              <CardTitle className="mt-2 text-2xl text-amber-100">{record.name}</CardTitle>
            </div>
            <StatusBadge label={record.currentVerdict} tone={verdictTone[record.currentVerdict]} />
          </div>
          <CardDescription>{record.hypothesis}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-3 md:grid-cols-4">
            <Metric label="Confidence" value={String(record.confidenceScore)} />
            <Metric label="Evidence" value={String(record.evidenceScore)} />
            <BadgeMetric label="Overfitting" value={record.overfittingRisk} tone={riskTone[record.overfittingRisk]} />
            <BadgeMetric label="Data Quality" value={record.dataQuality} tone={qualityTone[record.dataQuality]} />
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            <TheoryList title="Research theories" items={["Long liquidations may create forced selling momentum.", "Long liquidations may create oversold bounce conditions.", "Short liquidations may create forced buying momentum.", "Short liquidations may create overbought short opportunities.", "The model may discover nonlinear patterns not captured by simple interpretation."]} />
            <TheoryList title="Required data" items={record.requiredData} />
          </div>
          <div className="rounded-md border border-red-300/20 bg-red-950/10 p-3 text-sm leading-6 text-red-100">
            Hard rule: no alpha claim without real historical data and out-of-sample validation.
          </div>
        </CardContent>
      </Card>
    </section>
  );
}

function AlphaRecordCard({ record }: { record: (typeof alphaRecords)[number] }) {
  return (
    <Card className="border-border/70 bg-card/80">
      <CardHeader>
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">{record.id} / {record.family} / {record.assignedBot}</p>
            <CardTitle className="mt-2 text-xl">{record.name}</CardTitle>
          </div>
          <StatusBadge label={record.currentVerdict} tone={verdictTone[record.currentVerdict]} />
        </div>
        <CardDescription>{record.hypothesis}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm leading-6 text-foreground/85">{record.expectedEdgeSource}</p>
        <div className="grid gap-3 md:grid-cols-3">
          <Metric label="Backtest" value={record.backtestStatus} />
          <Metric label="Paper" value={record.paperStatus} />
          <Metric label="Live" value={record.liveStatus} />
          <BadgeMetric label="Overfit Risk" value={record.overfittingRisk} tone={riskTone[record.overfittingRisk]} />
          <BadgeMetric label="Data Quality" value={record.dataQuality} tone={qualityTone[record.dataQuality]} />
          <BadgeMetric label="Difficulty" value={record.implementationDifficulty} tone={difficultyTone[record.implementationDifficulty]} />
        </div>
        <div className="rounded-md border border-border/70 bg-background/50 p-3 text-xs leading-5 text-muted-foreground">{record.notes}</div>
      </CardContent>
    </Card>
  );
}

function TheoryList({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-md border border-amber-300/20 bg-background/50 p-3">
      <h3 className="text-sm font-semibold text-amber-100">{title}</h3>
      <ul className="mt-3 space-y-2 text-sm leading-6 text-foreground/85">
        {items.map((item) => <li key={item} className="flex gap-2"><span className="text-amber-200">-</span><span>{item}</span></li>)}
      </ul>
    </div>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md border border-border/70 bg-background/50 p-3">
      <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">{label}</p>
      <p className="mt-2 text-lg font-semibold text-foreground">{value}</p>
    </div>
  );
}

function BadgeMetric({ label, value, tone }: { label: string; value: string; tone: "success" | "manual" | "beta" | "danger" | "muted" }) {
  return (
    <div className="rounded-md border border-border/70 bg-background/50 p-3">
      <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">{label}</p>
      <div className="mt-2"><StatusBadge label={value} tone={tone} /></div>
    </div>
  );
}
