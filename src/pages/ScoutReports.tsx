import { ClipboardList, FileSearch, ShieldCheck, Signal } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { StatusBadge } from "@/components/StatusBadge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  scoutReportMetrics,
  scoutReports,
  scoutReportsDoctrine,
  scoutReportsSummary,
  type ScoutReport,
  type ScoutReportConfidence,
  type ScoutReportStatus,
} from "@/data/scoutReports";
import { opportunityScorecard, ventureScoutDivisions, ventureScoutMetrics, ventureScoutsSummary } from "@/data/ventureScouts";

const statusTone: Record<ScoutReportStatus, "success" | "manual" | "beta" | "muted"> = {
  "Not Started": "muted",
  "Manual Research": "manual",
  "Awaiting Evidence": "beta",
  "Ready for Review": "success",
  Parked: "muted",
};

const confidenceTone: Record<ScoutReportConfidence, "success" | "manual" | "beta" | "muted"> = {
  "N/A": "muted",
  Low: "beta",
  Medium: "manual",
  High: "success",
};

export function ScoutReports() {
  return (
    <div className="space-y-7">
      <section className="relative overflow-hidden rounded-lg border border-cyan-300/30 bg-card/85 p-6 shadow-[0_0_90px_rgba(34,211,238,0.14)] md:p-8">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(34,211,238,0.18),transparent_24rem),linear-gradient(rgba(34,211,238,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(52,211,153,0.04)_1px,transparent_1px)] bg-[size:auto,38px_38px,38px_38px]" />
        <div className="relative grid gap-6 xl:grid-cols-[1.1fr_0.9fr] xl:items-end">
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/35 bg-cyan-300/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-cyan-100">
              <FileSearch className="h-3.5 w-3.5" /> {scoutReportsSummary.version} Scout Reports
            </div>
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">Revenue Corps intelligence intake</p>
              <h1 className="font-display text-4xl font-semibold leading-tight md:text-6xl">Scout Reports</h1>
              <p className="max-w-3xl text-base leading-7 text-muted-foreground md:text-lg">Structured manual reports for opportunity hunting. Scouts gather public evidence, Revenue Architect ranks opportunities, and Mission Commander approves experiments.</p>
            </div>
            <div className="grid gap-3 md:grid-cols-4">
              <Metric label="Reports" value={String(scoutReportMetrics.totalReports)} />
              <Metric label="Manual Research" value={String(scoutReportMetrics.manualResearch)} />
              <Metric label="Awaiting Evidence" value={String(scoutReportMetrics.awaitingEvidence)} />
              <Metric label="Ready" value={String(scoutReportMetrics.readyForReview)} />
            </div>
          </div>
          <Card className="border-red-300/30 bg-red-950/15">
            <CardHeader className="flex-row items-start gap-3">
              <ShieldCheck className="mt-1 h-5 w-5 text-red-200" />
              <div>
                <CardTitle className="text-red-100">Manual evidence only</CardTitle>
                <CardDescription>{scoutReportsSummary.safety}</CardDescription>
              </div>
            </CardHeader>
          </Card>
        </div>
      </section>

      <section className="space-y-4">
        <SectionHeader eyebrow="Doctrine" title="Demand before product" description={scoutReportsDoctrine} />
        <div className="grid gap-3 md:grid-cols-3">
          <Metric label="Reports to" value={scoutReportsSummary.reportsTo} />
          <Metric label="Ranking owner" value={scoutReportsSummary.rankingOwner} />
          <Metric label="Approval owner" value={scoutReportsSummary.approvalOwner} />
        </div>
      </section>

      <VentureScoutReportTemplate />

      <section className="space-y-4">
        <SectionHeader eyebrow="Scout Teams" title="Opportunity reports" description="Every report uses the same fields so Revenue Architect can compare lanes without inventing scores." />
        <div className="grid gap-4 xl:grid-cols-2">
          {scoutReports.map((report) => <ScoutReportCard key={report.id} report={report} />)}
        </div>
      </section>
    </div>
  );
}


function VentureScoutReportTemplate() {
  return (
    <section className="space-y-4">
      <SectionHeader eyebrow="Venture Scouts" title="Common scorecard for every scout" description={ventureScoutsSummary.doctrine} />
      <Card className="border-emerald-300/30 bg-emerald-950/15">
        <CardHeader>
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-200">{ventureScoutsSummary.version}</p>
              <CardTitle className="mt-2 text-2xl text-emerald-100">Venture report architecture</CardTitle>
            </div>
            <StatusBadge label="N/A until evidence" tone="muted" />
          </div>
          <CardDescription>{ventureScoutsSummary.safety}</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-3 md:grid-cols-4">
          <Metric label="Divisions" value={String(ventureScoutMetrics.divisions)} />
          <Metric label="Scouts" value={String(ventureScoutMetrics.scouts)} />
          <Metric label="Manual Research" value={String(ventureScoutMetrics.manualResearch)} />
          <Metric label="Scored" value={String(ventureScoutMetrics.scored)} />
        </CardContent>
      </Card>
      <div className="grid gap-4 xl:grid-cols-[1fr_1fr]">
        <Card className="border-cyan-300/25 bg-card/80">
          <CardHeader>
            <CardTitle className="text-xl">Scorecard fields</CardTitle>
            <CardDescription>Every future venture report answers the same questions before Revenue Architect ranks it.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {opportunityScorecard.map((question) => <Info key={question.id} label={question.field} value={question.scoringRule} icon={ClipboardList} />)}
          </CardContent>
        </Card>
        <Card className="border-purple-300/25 bg-card/80">
          <CardHeader>
            <CardTitle className="text-xl">Scout divisions</CardTitle>
            <CardDescription>Venture Scouts look for business models across marketplaces, media, software, time-bound opportunities, and assets.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {ventureScoutDivisions.map((division) => <Info key={division.id} label={division.name} value={division.scouts.join(" / ")} icon={FileSearch} />)}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

function ScoutReportCard({ report }: { report: ScoutReport }) {
  return (
    <Card className="overflow-hidden border-cyan-300/25 bg-card/80">
      <div className="h-1 bg-gradient-to-r from-cyan-300 via-emerald-300 to-amber-300" />
      <CardHeader>
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-md border border-cyan-300/30 bg-cyan-300/10 text-2xl">{report.emoji}</span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200">{report.id} / {report.lane}</p>
              <CardTitle className="mt-1 text-xl">{report.scoutName}</CardTitle>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <StatusBadge label={report.currentStatus} tone={statusTone[report.currentStatus]} />
            <StatusBadge label={report.confidence} tone={confidenceTone[report.confidence]} />
          </div>
        </div>
        <CardDescription>{report.recommendation}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Info label="Evidence source placeholder" value={report.evidenceSourcePlaceholder} icon={FileSearch} />
        <div className="grid gap-3 md:grid-cols-2">
          <Info label="Opportunity findings" value={report.opportunityFindings} icon={Signal} />
          <Info label="Buyer pain" value={report.buyerPain} icon={ClipboardList} />
          <Info label="Competition notes" value={report.competitionNotes} icon={ClipboardList} />
          <Info label="Margin potential" value={report.marginPotential} icon={Signal} />
          <Info label="Speed to launch" value={report.speedToLaunch} icon={Signal} />
          <Info label="Next action" value={report.nextAction} icon={FileSearch} />
        </div>
        <div className="rounded-md border border-red-300/20 bg-red-950/10 p-3">
          <p className="mb-2 text-xs uppercase tracking-[0.14em] text-red-200">Risk flags</p>
          <div className="flex flex-wrap gap-2">
            {report.riskFlags.map((flag) => (
              <span key={flag} className="rounded-md border border-red-300/20 bg-red-300/10 px-2 py-1 text-xs text-red-100">{flag}</span>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md border border-cyan-300/20 bg-background/50 p-3">
      <p className="mb-1 text-xs uppercase tracking-[0.14em] text-muted-foreground">{label}</p>
      <p className="text-sm font-medium leading-6 text-foreground/90">{value}</p>
    </div>
  );
}

function Info({ label, value, icon: Icon }: { label: string; value: string; icon: typeof FileSearch }) {
  return (
    <div className="rounded-md border border-border/70 bg-background/50 p-3">
      <div className="mb-1 flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-muted-foreground">
        <Icon className="h-3.5 w-3.5 text-primary" />{label}
      </div>
      <p className="text-sm leading-6 text-foreground/90">{value}</p>
    </div>
  );
}
