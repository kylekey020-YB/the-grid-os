import { BarChart3, ClipboardCheck, Network, Radar, ShieldCheck, Trophy } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { StatusBadge } from "@/components/StatusBadge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  opportunityIntelligenceQueue,
  revenueCorpsProhibitions,
  revenueCorpsSummary,
  revenueCorpsUnits,
  revenueCorpsWaves,
  scoreToBeatQuestions,
  type RevenueCorpsBranch,
  type RevenueCorpsStatus,
  type RevenueCorpsUnit,
} from "@/data/revenueCorps";
import { scoutReportMetrics, scoutReports, scoutReportsDoctrine } from "@/data/scoutReports";
import { opportunityRadarItems, opportunityRadarSummary, opportunityQueue } from "@/data/opportunityRadar";
import { opportunityScorecard, ventureScoutDivisions, ventureScoutMetrics, ventureScouts, ventureScoutsSummary, type VentureScoutStatus } from "@/data/ventureScouts";
import { researchSchedulerSummary, scheduledResearchMissions } from "@/data/researchScheduler";

const statusTone: Record<RevenueCorpsStatus, "success" | "manual" | "beta" | "muted"> = {
  Active: "success",
  Planned: "beta",
  "Research Only": "manual",
  "Advisory Only": "manual",
  "Manual Only": "manual",
  Backlog: "muted",
};

const branchTone: Record<RevenueCorpsBranch, string> = {
  Command: "border-amber-300/35 bg-amber-950/15 text-amber-100",
  "Scout Corps": "border-cyan-300/30 bg-cyan-950/15 text-cyan-100",
  "Product Corps": "border-purple-300/30 bg-purple-950/15 text-purple-100",
  "Launch Corps": "border-emerald-300/30 bg-emerald-950/15 text-emerald-100",
};

const branches: RevenueCorpsBranch[] = ["Command", "Scout Corps", "Product Corps", "Launch Corps"];

const ventureStatusTone: Record<VentureScoutStatus, "success" | "manual" | "beta" | "muted"> = {
  Planned: "beta",
  "Manual Research": "manual",
  "Research Only": "manual",
  "Awaiting Evidence": "beta",
  Parked: "muted",
};

export function RevenueCorps() {
  return (
    <div className="space-y-7">
      <section className="relative overflow-hidden rounded-lg border border-emerald-300/30 bg-card/85 p-6 shadow-[0_0_90px_rgba(52,211,153,0.14)] md:p-8">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(52,211,153,0.18),transparent_24rem),linear-gradient(rgba(52,211,153,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.04)_1px,transparent_1px)] bg-[size:auto,38px_38px,38px_38px]" />
        <div className="relative grid gap-6 xl:grid-cols-[1.1fr_0.9fr] xl:items-end">
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/35 bg-emerald-300/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-emerald-100">
              <Network className="h-3.5 w-3.5" /> {revenueCorpsSummary.version} Revenue Corps
            </div>
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200">Operation First Revenue</p>
              <h1 className="font-display text-4xl font-semibold leading-tight md:text-6xl">Revenue Corps</h1>
              <p className="max-w-3xl text-base leading-7 text-muted-foreground md:text-lg">{revenueCorpsSummary.mission}</p>
            </div>
            <div className="grid gap-3 md:grid-cols-3">
              <CommandStat label="Commander" value={revenueCorpsSummary.commander} />
              <CommandStat label="Units Planned" value={String(revenueCorpsUnits.length)} />
              <CommandStat label="Current Status" value={revenueCorpsSummary.status} />
            </div>
          </div>
          <Card className="border-red-300/30 bg-red-950/15">
            <CardHeader className="flex-row items-start gap-3">
              <ShieldCheck className="mt-1 h-5 w-5 text-red-200" />
              <div>
                <CardTitle className="text-red-100">Read-only operating layer</CardTitle>
                <CardDescription>{revenueCorpsSummary.safety}</CardDescription>
              </div>
            </CardHeader>
          </Card>
        </div>
      </section>

      <section className="space-y-4">
        <SectionHeader eyebrow="Command Structure" title="Revenue Architect now leads a corps" description={revenueCorpsSummary.doctrine} />
        <div className="grid gap-4 xl:grid-cols-4">
          {branches.map((branch) => (
            <BranchPanel key={branch} branch={branch} units={revenueCorpsUnits.filter((unit) => unit.branch === branch)} />
          ))}
        </div>
      </section>

      <ResearchSchedulerRevenueSection />

      <VentureScoutsSection />

      <section className="grid gap-4 xl:grid-cols-[0.85fr_1.15fr]">
        <Card className="border-amber-300/30 bg-amber-950/15">
          <CardHeader>
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-200">Score to Beat</p>
                <CardTitle className="mt-2 text-2xl text-amber-100">Nothing skips the evidence gate</CardTitle>
              </div>
              <ClipboardCheck className="h-5 w-5 text-amber-200" />
            </div>
            <CardDescription>Each opportunity must answer these questions before it advances toward build, launch, scale, or automation.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {scoreToBeatQuestions.map((question) => (
              <div key={question.id} className="rounded-md border border-amber-300/20 bg-background/50 p-3">
                <h3 className="text-sm font-semibold text-amber-100">{question.question}</h3>
                <p className="mt-2 text-sm leading-6 text-foreground/85">{question.passCondition}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="border-cyan-300/30 bg-cyan-950/15">
          <CardHeader>
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200">Opportunity Intelligence</p>
                <CardTitle className="mt-2 text-2xl text-cyan-100">Reports before products</CardTitle>
              </div>
              <Radar className="h-5 w-5 text-cyan-200" />
            </div>
            <CardDescription>Unknown values stay N/A. Revenue Corps gathers evidence; Mission Pipeline decides what advances.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {opportunityIntelligenceQueue.map((item) => (
              <div key={item.id} className="rounded-md border border-cyan-300/20 bg-background/50 p-3">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">{item.id} / {item.owner}</p>
                    <h3 className="mt-1 text-sm font-semibold text-cyan-100">{item.opportunity}</h3>
                  </div>
                  <StatusBadge label={item.currentGate} tone={item.currentGate === "Experiment" ? "success" : "manual"} />
                </div>
                <div className="mt-3 grid gap-2 md:grid-cols-3">
                  <MetricLine label="Confidence" value={String(item.confidence)} />
                  <MetricLine label="Time to Launch" value={item.timeToLaunch} />
                  <MetricLine label="Revenue Potential" value={item.revenuePotential} />
                </div>
                <p className="mt-3 text-sm leading-6 text-foreground/85">{item.nextAction}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </section>

      <ScoutReportsSection />

      <OpportunityRadarSection />

      <section className="space-y-4">
        <SectionHeader eyebrow="Activation Waves" title="Build the corps in waves" description="Revenue Corps grows as capability is earned. Wave 1 is research-only; product and launch functions remain planned until evidence and approval exist." />
        <div className="grid gap-4 lg:grid-cols-4">
          {revenueCorpsWaves.map((wave) => (
            <Card key={wave.id} className="border-emerald-300/25 bg-card/80">
              <CardHeader>
                <div className="flex items-start justify-between gap-3">
                  <CardTitle className="text-lg">{wave.name}</CardTitle>
                  <StatusBadge label={wave.status} tone={statusTone[wave.status]} />
                </div>
                <CardDescription>{wave.objective}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                {wave.units.map((unit) => (
                  <div key={unit} className="rounded-md border border-border/70 bg-background/50 px-3 py-2 text-sm text-foreground/90">{unit}</div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="grid gap-4 xl:grid-cols-[1.1fr_0.9fr]">
        <Card className="border-purple-300/30 bg-purple-950/15">
          <CardHeader>
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-purple-200">Product + Launch Boundaries</p>
                <CardTitle className="mt-2 text-2xl text-purple-100">Build only after evidence</CardTitle>
              </div>
              <BarChart3 className="h-5 w-5 text-purple-200" />
            </div>
            <CardDescription>Product Corps does not research. Launch Corps does not invent. Scouts do not build. This keeps the operating system clean.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-3 md:grid-cols-2">
            <Boundary label="Scout Corps" value="Find money through public evidence and disciplined reports." />
            <Boundary label="Product Corps" value="Create original assets only after approved opportunity evidence." />
            <Boundary label="Launch Corps" value="Package approved offers for manual publishing and measurement." />
            <Boundary label="Revenue Architect" value="Ranks reports and recommends what enters the Mission Pipeline." />
          </CardContent>
        </Card>

        <Card className="border-red-300/30 bg-red-950/15">
          <CardHeader>
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-red-200">Prohibited</p>
                <CardTitle className="mt-2 text-2xl text-red-100">Hard safety rails</CardTitle>
              </div>
              <Trophy className="h-5 w-5 text-red-200" />
            </div>
            <CardDescription>Revenue Corps is a planning and evidence system. It does not control marketplaces or accounts.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            {revenueCorpsProhibitions.map((rule) => (
              <div key={rule} className="rounded-md border border-red-300/20 bg-background/50 px-3 py-2 text-sm text-red-100">{rule}</div>
            ))}
          </CardContent>
        </Card>
      </section>
    </div>
  );
}





function ResearchSchedulerRevenueSection() {
  const revenueMissions = scheduledResearchMissions.filter((mission) => mission.division === "Revenue Corps");

  return (
    <section className="space-y-4">
      <SectionHeader eyebrow="Research Scheduler" title="Daily scout missions" description={researchSchedulerSummary.doctrine} />
      <div className="grid gap-4 lg:grid-cols-3">
        {revenueMissions.map((mission) => (
          <Card key={mission.missionId} className="border-emerald-300/25 bg-card/80">
            <CardHeader>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-200">{mission.missionId}</p>
                  <CardTitle className="mt-2 text-lg">{mission.title}</CardTitle>
                </div>
                <StatusBadge label={mission.currentStatus} tone="manual" />
              </div>
              <CardDescription>{mission.scoutOfficer} / {mission.cadence}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <MetricLine label="Report" value={mission.reportOutputPathPlaceholder} />
              <MetricLine label="Approval" value={mission.approvalRequirement} />
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

function VentureScoutsSection() {
  const activeScouts = ventureScouts.filter((scout) => scout.status === "Manual Research" || scout.status === "Research Only");

  return (
    <section className="space-y-4">
      <SectionHeader eyebrow="Venture Scouts" title="Business-model discovery layer" description={ventureScoutsSummary.doctrine} />
      <div className="grid gap-4 xl:grid-cols-[1.1fr_0.9fr]">
        <Card className="border-emerald-300/30 bg-emerald-950/15">
          <CardHeader>
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-200">{ventureScoutsSummary.version}</p>
                <CardTitle className="mt-2 text-2xl text-emerald-100">Revenue Architect gets a venture network</CardTitle>
              </div>
              <StatusBadge label="Manual Evidence" tone="manual" />
            </div>
            <CardDescription>{ventureScoutsSummary.mission}</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-3 md:grid-cols-4">
            <MetricLine label="Divisions" value={String(ventureScoutMetrics.divisions)} />
            <MetricLine label="Scouts" value={String(ventureScoutMetrics.scouts)} />
            <MetricLine label="Manual Research" value={String(ventureScoutMetrics.manualResearch)} />
            <MetricLine label="Scored" value={String(ventureScoutMetrics.scored)} />
          </CardContent>
        </Card>
        <Card className="border-amber-300/30 bg-amber-950/15">
          <CardHeader>
            <CardTitle className="text-2xl text-amber-100">Opportunity Scorecard</CardTitle>
            <CardDescription>Every scout answers the same questions so Revenue Architect can compare YouTube, GitHub, Fiverr, bounties, DealFlow, and assets on one scale.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-3 md:grid-cols-2">
            {opportunityScorecard.slice(0, 4).map((question) => (
              <Boundary key={question.id} label={question.field} value={question.question} />
            ))}
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        {ventureScoutDivisions.map((division) => (
          <Card key={division.id} className="border-cyan-300/25 bg-card/80">
            <CardHeader>
              <CardTitle className="text-lg">{division.name}</CardTitle>
              <CardDescription>{division.mission}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <MetricLine label="Lead" value={division.lead} />
              {division.scouts.map((scout) => (
                <div key={scout} className="rounded-md border border-border/70 bg-background/50 px-3 py-2 text-sm text-foreground/90">{scout}</div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="grid gap-3 md:grid-cols-3">
        {activeScouts.slice(0, 6).map((scout) => (
          <div key={scout.id} className="rounded-md border border-emerald-300/20 bg-background/50 p-3">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">{scout.id} / {scout.division}</p>
                <h3 className="mt-1 text-sm font-semibold text-emerald-100">{scout.emoji} {scout.name}</h3>
              </div>
              <StatusBadge label={scout.status} tone={ventureStatusTone[scout.status]} />
            </div>
            <p className="mt-2 text-sm leading-6 text-foreground/85">{scout.nextRecommendedExperiment}</p>
            <div className="mt-3 grid gap-2 md:grid-cols-2">
              <MetricLine label="Score" value={String(scout.opportunityScore)} />
              <MetricLine label="Pipeline" value={scout.missionPipelineLink} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function OpportunityRadarSection() {
  const totalQueue = opportunityQueue.reduce((sum, item) => sum + item.count, 0);
  return (
    <section className="space-y-4">
      <SectionHeader eyebrow="Opportunity Radar" title="Every idea enters here" description={opportunityRadarSummary.doctrine} />
      <Card className="border-emerald-300/30 bg-emerald-950/15">
        <CardHeader>
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-200">{opportunityRadarSummary.version}</p>
              <CardTitle className="mt-2 text-2xl text-emerald-100">Queue before pipeline</CardTitle>
            </div>
            <StatusBadge label="Evidence Required" tone="manual" />
          </div>
          <CardDescription>{opportunityRadarSummary.mission}</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-3 md:grid-cols-3">
          <MetricLine label="Opportunities" value={String(opportunityRadarItems.length)} />
          <MetricLine label="Queue Total" value={String(totalQueue)} />
          <MetricLine label="Next Gate" value="Revenue Architect review" />
        </CardContent>
      </Card>
    </section>
  );
}

function ScoutReportsSection() {
  return (
    <section className="space-y-4">
      <SectionHeader eyebrow="Scout Reports" title="Structured reports become the corps intake" description={scoutReportsDoctrine} />
      <Card className="border-cyan-300/30 bg-cyan-950/15">
        <CardHeader>
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200">Manual/public evidence</p>
              <CardTitle className="mt-2 text-2xl text-cyan-100">Eight report lanes</CardTitle>
            </div>
            <StatusBadge label="No fake data" tone="manual" />
          </div>
          <CardDescription>Reports keep the scout layer disciplined: findings, buyer pain, competition notes, risk flags, recommendation, confidence, and next action.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-3 md:grid-cols-4">
          <MetricLine label="Reports" value={String(scoutReportMetrics.totalReports)} />
          <MetricLine label="Manual Research" value={String(scoutReportMetrics.manualResearch)} />
          <MetricLine label="Awaiting Evidence" value={String(scoutReportMetrics.awaitingEvidence)} />
          <MetricLine label="Ready" value={String(scoutReportMetrics.readyForReview)} />
        </CardContent>
      </Card>
      <div className="grid gap-3 md:grid-cols-4">
        {scoutReports.map((report) => (
          <div key={report.id} className="rounded-md border border-cyan-300/20 bg-background/50 p-3">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">{report.id}</p>
                <h3 className="mt-1 text-sm font-semibold text-cyan-100">{report.emoji} {report.scoutName}</h3>
              </div>
              <StatusBadge label={report.currentStatus} tone={report.currentStatus === "Manual Research" ? "manual" : "beta"} />
            </div>
            <p className="mt-2 text-sm leading-6 text-foreground/85">{report.nextAction}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function BranchPanel({ branch, units }: { branch: RevenueCorpsBranch; units: RevenueCorpsUnit[] }) {
  return (
    <Card className={branchTone[branch]}>
      <CardHeader>
        <CardTitle className="text-xl">{branch}</CardTitle>
        <CardDescription>{units.length} represented units</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        {units.map((unit) => (
          <div key={unit.id} className="rounded-md border border-white/10 bg-background/45 p-3">
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-2">
                <span className="text-xl">{unit.emoji}</span>
                <div>
                  <h3 className="text-sm font-semibold text-foreground">{unit.name}</h3>
                  <p className="text-xs text-muted-foreground">Reports to {unit.reportsTo}</p>
                </div>
              </div>
              <StatusBadge label={unit.status} tone={statusTone[unit.status]} />
            </div>
            <p className="mt-3 text-sm leading-6 text-foreground/85">{unit.mission}</p>
            <p className="mt-2 text-xs uppercase tracking-[0.14em] text-muted-foreground">{unit.activationWave}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

function CommandStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md border border-emerald-300/20 bg-background/50 p-3">
      <p className="mb-1 text-xs uppercase tracking-[0.14em] text-muted-foreground">{label}</p>
      <p className="text-sm font-medium leading-6 text-foreground/90">{value}</p>
    </div>
  );
}

function MetricLine({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="flex items-center justify-between gap-3 rounded-md border border-border/70 bg-background/50 px-3 py-2 text-sm">
      <span className="text-muted-foreground">{label}</span>
      <span className="text-right text-foreground/90">{value}</span>
    </div>
  );
}

function Boundary({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md border border-purple-300/20 bg-background/50 p-3">
      <p className="mb-1 text-xs uppercase tracking-[0.14em] text-muted-foreground">{label}</p>
      <p className="text-sm leading-6 text-foreground/90">{value}</p>
    </div>
  );
}
