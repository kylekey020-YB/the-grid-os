import { Archive, BrainCircuit, Database, FileSearch, GitBranch, Library, Radar, ShieldCheck, Trophy } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { StatusBadge } from "@/components/StatusBadge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  botAssignmentMatrix,
  quantResearchMetrics,
  quantResearchScouts,
  quantResearchScoutsSummary,
  quantResearchWorkflow,
  quantScoutReports,
  rejectedStrategyGraveyard,
  sourceLibrary,
  strategyCandidateQueue,
  topStrategyRecommendations,
  type QuantDifficulty,
  type QuantEvidenceQuality,
  type QuantRecommendation,
  type QuantRisk,
  type QuantScoutReport,
  type QuantScoutRoleStatus,
  type QuantWorkflowStage,
} from "@/data/quantResearchScouts";

const statusTone: Record<QuantScoutRoleStatus, "manual" | "beta"> = {
  "Research Only": "manual",
  "Manual Review": "manual",
  Planned: "beta",
};

const evidenceTone: Record<QuantEvidenceQuality, "success" | "manual" | "beta" | "muted"> = {
  "N/A": "muted",
  Low: "beta",
  Medium: "manual",
  High: "success",
};

const difficultyTone: Record<QuantDifficulty, "success" | "manual" | "danger"> = {
  Low: "success",
  Medium: "manual",
  High: "danger",
};

const riskTone: Record<QuantRisk, "success" | "manual" | "danger"> = {
  Low: "success",
  Medium: "manual",
  High: "danger",
  "Very High": "danger",
};

const recommendationTone: Record<QuantRecommendation, "success" | "manual" | "danger"> = {
  Prototype: "success",
  "Research More": "manual",
  Reject: "danger",
};

const workflowTone: Record<QuantWorkflowStage, "success" | "manual" | "beta" | "danger" | "muted"> = {
  "Source Found": "muted",
  Summarized: "beta",
  Scored: "manual",
  "Assigned to Bot": "manual",
  "Backtest Plan": "manual",
  "Prototype Candidate": "success",
  "Paper Test Candidate": "success",
  Rejected: "danger",
  Advanced: "success",
};

export function QuantResearchScouts() {
  return (
    <div className="space-y-7">
      <section className="relative overflow-hidden rounded-lg border border-blue-300/30 bg-card/85 p-6 shadow-[0_0_90px_rgba(96,165,250,0.14)] md:p-8">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(96,165,250,0.18),transparent_24rem),linear-gradient(rgba(34,211,238,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.05)_1px,transparent_1px)] bg-[size:auto,38px_38px,38px_38px]" />
        <div className="relative grid gap-6 xl:grid-cols-[1.15fr_0.85fr] xl:items-end">
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-300/35 bg-blue-300/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-blue-100">
              <Radar className="h-3.5 w-3.5" /> {quantResearchScoutsSummary.version} Quant Research Scouts
            </div>
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-200">Trading intelligence engine</p>
              <h1 className="font-display text-4xl font-semibold leading-tight md:text-6xl">Quant Scout Command Center</h1>
              <p className="max-w-3xl text-base leading-7 text-muted-foreground md:text-lg">{quantResearchScoutsSummary.mission}</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-6">
              <Metric label="Scouts" value={String(quantResearchMetrics.scouts)} />
              <Metric label="Reports" value={String(quantResearchMetrics.reports)} />
              <Metric label="Sources" value={String(quantResearchMetrics.sources)} />
              <Metric label="Queue" value={String(quantResearchMetrics.queueItems)} />
              <Metric label="Prototype" value={String(quantResearchMetrics.prototypeCandidates)} />
              <Metric label="Rejected" value={String(quantResearchMetrics.rejected)} />
            </div>
          </div>
          <Card className="border-red-300/30 bg-red-950/15">
            <CardHeader className="flex-row items-start gap-3">
              <ShieldCheck className="mt-1 h-5 w-5 text-red-200" />
              <div>
                <CardTitle className="text-red-100">Research only</CardTitle>
                <CardDescription>{quantResearchScoutsSummary.safety}</CardDescription>
              </div>
            </CardHeader>
          </Card>
        </div>
      </section>

      <section className="space-y-4">
        <SectionHeader eyebrow="Doctrine" title="Research before risk" description={quantResearchScoutsSummary.doctrine} />
        <div className="grid gap-3 md:grid-cols-3">
          {quantResearchWorkflow.map((stage, index) => (
            <div key={stage} className="flex items-center gap-3 rounded-md border border-blue-300/20 bg-blue-300/10 p-3 text-sm leading-6 text-blue-100">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-blue-300/30 bg-background/50 text-xs">{index + 1}</span>
              {stage}
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <SectionHeader eyebrow="Research Inbox" title="Scout reports waiting for review" description="Reports capture evidence candidates. They do not authorize trades, broker connections, or paper mode." />
        <div className="grid gap-4 xl:grid-cols-2">
          {quantScoutReports.map((report) => (
            <ReportCard key={report.id} report={report} />
          ))}
        </div>
      </section>

      <section className="grid gap-4 xl:grid-cols-[0.85fr_1.15fr]">
        <ScoutRoster />
        <StrategyQueue />
      </section>

      <section className="grid gap-4 xl:grid-cols-[1.1fr_0.9fr]">
        <SourceLibrary />
        <BacktestReadiness />
      </section>

      <section className="grid gap-4 xl:grid-cols-[0.8fr_1.2fr]">
        <RejectedGraveyard />
        <TopRecommendations />
      </section>
    </div>
  );
}

function ReportCard({ report }: { report: QuantScoutReport }) {
  return (
    <Card className="border-blue-300/25 bg-card/80">
      <CardHeader>
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-200">{report.id} / {report.targetBot} / {report.sourceType}</p>
            <CardTitle className="mt-2 text-xl">{report.title}</CardTitle>
          </div>
          <div className="flex flex-wrap gap-2">
            <StatusBadge label={report.workflowStage} tone={workflowTone[report.workflowStage]} />
            <StatusBadge label={report.recommendation} tone={recommendationTone[report.recommendation]} />
          </div>
        </div>
        <CardDescription>{report.summary}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          <Metric label="Confidence" value={String(report.confidenceScore)} />
          <BadgeMetric label="Evidence" value={report.evidenceQuality} tone={evidenceTone[report.evidenceQuality]} />
          <BadgeMetric label="Rule Clarity" value={report.mechanicalRuleClarity} tone={evidenceTone[report.mechanicalRuleClarity]} />
          <BadgeMetric label="Backtest" value={report.backtestDifficulty} tone={difficultyTone[report.backtestDifficulty]} />
          <BadgeMetric label="Overfitting" value={report.overfittingRisk} tone={riskTone[report.overfittingRisk]} />
          <BadgeMetric label="Paper Readiness" value={report.paperTestReadiness} tone={evidenceTone[report.paperTestReadiness]} />
        </div>
        <Info label="Data Requirements" value={report.dataRequirements} icon={Database} />
        <Info label="Source Link Placeholder" value={report.sourceLinkPlaceholder} icon={FileSearch} />
      </CardContent>
    </Card>
  );
}

function ScoutRoster() {
  return (
    <Card className="border-emerald-300/30 bg-emerald-950/15">
      <CardHeader>
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-200">Scout Roles</p>
            <CardTitle className="mt-2 text-2xl text-emerald-100">Discovery layer</CardTitle>
          </div>
          <BrainCircuit className="h-5 w-5 text-emerald-200" />
        </div>
        <CardDescription>Scouts find sources and summarize them. Analysts, backtesters, and validators decide what survives.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        {quantResearchScouts.map((scout) => (
          <div key={scout.id} className="rounded-md border border-emerald-300/20 bg-background/50 p-3">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">Reports to {scout.reportsTo}</p>
                <h3 className="mt-1 text-sm font-semibold text-emerald-100">{scout.emoji} {scout.name}</h3>
              </div>
              <StatusBadge label={scout.status} tone={statusTone[scout.status]} />
            </div>
            <p className="mt-2 text-sm leading-6 text-foreground/85">{scout.mission}</p>
            <p className="mt-2 text-xs leading-5 text-muted-foreground">Outputs: {scout.outputs.join(" / ")}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

function StrategyQueue() {
  return (
    <Card className="border-cyan-300/30 bg-cyan-950/15">
      <CardHeader>
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200">Strategy Candidate Queue</p>
            <CardTitle className="mt-2 text-2xl text-cyan-100">Ranked research candidates</CardTitle>
          </div>
          <GitBranch className="h-5 w-5 text-cyan-200" />
        </div>
        <CardDescription>Only Prototype recommendations can move toward a backtest specification. Paper mode remains locked.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        {strategyCandidateQueue.map((item) => (
          <div key={item.id} className="rounded-md border border-cyan-300/20 bg-background/50 p-3">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">{item.id} / {item.targetBot}</p>
                <h3 className="mt-1 text-sm font-semibold text-cyan-100">{item.strategy}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <StatusBadge label={item.stage} tone={workflowTone[item.stage]} />
                <StatusBadge label={item.recommendation} tone={recommendationTone[item.recommendation]} />
              </div>
            </div>
            <p className="mt-2 text-sm leading-6 text-foreground/85">{item.nextAction}</p>
            <Metric label="Confidence" value={String(item.confidenceScore)} />
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

function SourceLibrary() {
  return (
    <Card className="border-purple-300/30 bg-purple-950/15">
      <CardHeader>
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-purple-200">Source Library</p>
            <CardTitle className="mt-2 text-2xl text-purple-100">Research inputs</CardTitle>
          </div>
          <Library className="h-5 w-5 text-purple-200" />
        </div>
        <CardDescription>Links are evidence leads or references, not proof that a strategy is profitable.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        {sourceLibrary.map((source) => (
          <div key={source.id} className="rounded-md border border-purple-300/20 bg-background/50 p-3">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">{source.id} / {source.sourceType} / {source.assignedBot}</p>
                <h3 className="mt-1 text-sm font-semibold text-purple-100">{source.title}</h3>
              </div>
              <StatusBadge label={source.reviewStatus} tone={source.reviewStatus === "Reviewed" ? "success" : "manual"} />
            </div>
            <p className="mt-2 text-sm leading-6 text-foreground/85">{source.relevance}</p>
            <p className="mt-2 break-words text-xs leading-5 text-muted-foreground">{source.link}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

function BacktestReadiness() {
  return (
    <Card className="border-amber-300/30 bg-amber-950/15">
      <CardHeader>
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-200">Bot Assignment Matrix</p>
            <CardTitle className="mt-2 text-2xl text-amber-100">Backtest readiness board</CardTitle>
          </div>
          <Trophy className="h-5 w-5 text-amber-200" />
        </div>
        <CardDescription>Research candidates are assigned to bots before any code or paper-test work begins.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        {botAssignmentMatrix.map((row) => (
          <div key={row.bot} className="rounded-md border border-amber-300/20 bg-background/50 p-3">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">{row.bot}</p>
                <h3 className="mt-1 text-sm font-semibold text-amber-100">{row.currentLead}</h3>
              </div>
              <StatusBadge label={row.readiness} tone={row.readiness === "Prototype" ? "success" : "manual"} />
            </div>
            <p className="mt-2 text-xs leading-5 text-muted-foreground">Scouts: {row.assignedScouts.join(" / ")}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

function RejectedGraveyard() {
  return (
    <Card className="border-red-300/30 bg-red-950/15">
      <CardHeader>
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-red-200">Rejected Strategy Graveyard</p>
            <CardTitle className="mt-2 text-2xl text-red-100">Rejected until evidence improves</CardTitle>
          </div>
          <Archive className="h-5 w-5 text-red-200" />
        </div>
        <CardDescription>Rejection is not failure. It is a record of why THE GRID should not waste validation time yet.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        {rejectedStrategyGraveyard.map((item) => (
          <div key={item.id} className="rounded-md border border-red-300/20 bg-background/50 p-3">
            <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">{item.id}</p>
            <h3 className="mt-1 text-sm font-semibold text-red-100">{item.strategy}</h3>
            <p className="mt-2 text-sm leading-6 text-foreground/85">{item.reason}</p>
            <p className="mt-2 text-xs leading-5 text-muted-foreground">Revisit when: {item.revisitCondition}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

function TopRecommendations() {
  return (
    <Card className="border-emerald-300/30 bg-emerald-950/15">
      <CardHeader>
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-200">Top Strategy Recommendations</p>
            <CardTitle className="mt-2 text-2xl text-emerald-100">Next research actions</CardTitle>
          </div>
          <FileSearch className="h-5 w-5 text-emerald-200" />
        </div>
        <CardDescription>These recommendations authorize research specifications only. They do not authorize trading.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        {topStrategyRecommendations.map((item, index) => (
          <div key={item} className="rounded-md border border-emerald-300/20 bg-emerald-300/10 p-3 text-sm leading-6 text-emerald-100">
            {index + 1}. {item}
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

function BadgeMetric({ label, value, tone }: { label: string; value: string; tone: "success" | "manual" | "beta" | "danger" | "muted" }) {
  return (
    <div className="flex items-center justify-between gap-3 rounded-md border border-border/70 bg-background/50 px-3 py-2 text-sm">
      <span className="text-muted-foreground">{label}</span>
      <StatusBadge label={value} tone={tone} />
    </div>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md border border-border/70 bg-background/50 p-3">
      <p className="mb-1 text-xs uppercase tracking-[0.14em] text-muted-foreground">{label}</p>
      <p className="text-sm font-medium leading-6 text-foreground/90">{value}</p>
    </div>
  );
}

function Info({ label, value, icon: Icon }: { label: string; value: string; icon: typeof Database }) {
  return (
    <div className="rounded-md border border-border/70 bg-background/50 p-3">
      <div className="mb-1 flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-muted-foreground">
        <Icon className="h-3.5 w-3.5 text-primary" /> {label}
      </div>
      <p className="break-words text-sm leading-6 text-foreground/90">{value}</p>
    </div>
  );
}
