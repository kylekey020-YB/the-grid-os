import { BarChart3, FileSearch, FlaskConical, ShieldCheck, Sigma, Trophy, Waves } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { StatusBadge } from "@/components/StatusBadge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  quantScoutMission001,
  top20QuantStrategyCandidates,
  topStrategiesByBot,
  tradingResearchCorpsSummary,
  tradingResearchMetrics,
  tradingResearchPrograms,
  tradingResearchRules,
  tradingResearchScouts,
  tradingScoutOutputs,
  type QuantCandidateRecommendation,
  type TradingProgramStatus,
  type TradingResearchProgram,
  type TradingScoutConfidence,
} from "@/data/tradingResearchCorps";
import { orionBacktestSpec001, quantResearchMetrics, quantResearchScoutsSummary, strategyCandidateQueue } from "@/data/quantResearchScouts";
import { researchSchedulerMetrics, researchSchedulerSummary, scheduledResearchMissions } from "@/data/researchScheduler";
import { alphaLabMetrics, alphaLabSummary, alphaRecords } from "@/data/alphaLab";

const statusTone: Record<TradingProgramStatus, "manual" | "beta" | "muted"> = {
  "Research Only": "manual",
  "Backtest Required": "beta",
  "Paper Only": "manual",
  Parked: "muted",
};

const confidenceTone: Record<TradingScoutConfidence, "success" | "manual" | "beta" | "muted"> = {
  "N/A": "muted",
  Low: "beta",
  Medium: "manual",
  High: "success",
};

const recommendationTone: Record<QuantCandidateRecommendation, "success" | "manual" | "danger"> = {
  Prototype: "success",
  "Research More": "manual",
  Reject: "danger",
};

export function TradingResearchCorps() {
  return (
    <div className="space-y-7">
      <section className="relative overflow-hidden rounded-lg border border-cyan-300/30 bg-card/85 p-6 shadow-[0_0_90px_rgba(34,211,238,0.14)] md:p-8">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(34,211,238,0.18),transparent_24rem),linear-gradient(rgba(34,211,238,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(251,191,36,0.04)_1px,transparent_1px)] bg-[size:auto,38px_38px,38px_38px]" />
        <div className="relative grid gap-6 xl:grid-cols-[1.1fr_0.9fr] xl:items-end">
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/35 bg-cyan-300/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-cyan-100">
              <Sigma className="h-3.5 w-3.5" /> {tradingResearchCorpsSummary.version} Trading Research Corps
            </div>
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">Trading Division research programs</p>
              <h1 className="font-display text-4xl font-semibold leading-tight md:text-6xl">Trading Research Corps</h1>
              <p className="max-w-3xl text-base leading-7 text-muted-foreground md:text-lg">{tradingResearchCorpsSummary.mission}</p>
            </div>
            <div className="grid gap-3 md:grid-cols-5">
              <Metric label="Programs" value={String(tradingResearchMetrics.programs)} />
              <Metric label="Scouts" value={String(tradingResearchMetrics.scouts)} />
              <Metric label="Candidates" value={String(tradingResearchMetrics.strategyCandidates)} />
              <Metric label="Live Trading" value={String(tradingResearchMetrics.liveTradingConnections)} />
              <Metric label="Proven Expectancy" value={String(tradingResearchMetrics.strategiesWithProvenExpectancy)} />
            </div>
          </div>
          <Card className="border-red-300/30 bg-red-950/15">
            <CardHeader className="flex-row items-start gap-3">
              <ShieldCheck className="mt-1 h-5 w-5 text-red-200" />
              <div>
                <CardTitle className="text-red-100">Research only</CardTitle>
                <CardDescription>{tradingResearchCorpsSummary.safety}</CardDescription>
              </div>
            </CardHeader>
          </Card>
        </div>
      </section>

      <section className="space-y-4">
        <SectionHeader eyebrow="Doctrine" title="Expectancy before promotion" description={tradingResearchCorpsSummary.doctrine} />
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {tradingResearchRules.map((rule) => <div key={rule} className="rounded-md border border-cyan-300/20 bg-cyan-300/10 p-3 text-sm leading-6 text-cyan-100">{rule}</div>)}
        </div>
      </section>

      <QuantScoutMission />

      <QuantResearchEnginePanel />

      <ResearchSchedulerTradingPanel />

      <AlphaLabTradingPanel />

      <OrionBacktestSpecSummary />

      <section className="space-y-4">
        <SectionHeader eyebrow="Programs" title="PAIRFORGE, VOLTA, ATLAS, ORION, and WRAITH" description="Each program is a research object with data requirements, validation gates, backtest requirements, and risk controls before paper mode." />
        <div className="grid gap-4 xl:grid-cols-2">
          {tradingResearchPrograms.map((program) => <ProgramCard key={program.id} program={program} />)}
        </div>
      </section>

      <section className="grid gap-4 xl:grid-cols-[0.9fr_1.1fr]">
        <ResearchScouts />
        <ScoutOutputs />
      </section>
    </div>
  );
}

function QuantResearchEnginePanel() {
  const lead = strategyCandidateQueue[0];

  return (
    <section className="space-y-4">
      <SectionHeader eyebrow="v2.7 Quant Research Scouts" title="Active research engine architecture" description={quantResearchScoutsSummary.doctrine} />
      <Card className="border-blue-300/30 bg-blue-950/15">
        <CardHeader>
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-200">{quantResearchScoutsSummary.version}</p>
              <CardTitle className="mt-2 text-2xl text-blue-100">Scout intake feeds strategy candidates</CardTitle>
            </div>
            <StatusBadge label="No execution" tone="manual" />
          </div>
          <CardDescription>{quantResearchScoutsSummary.safety}</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-3 md:grid-cols-5">
          <Metric label="Scouts" value={String(quantResearchMetrics.scouts)} />
          <Metric label="Reports" value={String(quantResearchMetrics.reports)} />
          <Metric label="Sources" value={String(quantResearchMetrics.sources)} />
          <Metric label="Prototype Candidates" value={String(quantResearchMetrics.prototypeCandidates)} />
          <Metric label="Lead" value={lead?.targetBot ?? "N/A"} />
        </CardContent>
      </Card>
    </section>
  );
}



function AlphaLabTradingPanel() {
  const wraithLstm = alphaRecords.find((record) => record.id === "ALPHA-501");
  return (
    <section className="space-y-4">
      <SectionHeader eyebrow="Alpha Lab" title="Alpha records before strategy promotion" description={alphaLabSummary.doctrine} />
      <Card className="border-purple-300/30 bg-purple-950/15">
        <CardHeader>
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-purple-200">{alphaLabSummary.version}</p>
              <CardTitle className="mt-2 text-2xl text-purple-100">Research engine, not one signal</CardTitle>
            </div>
            <StatusBadge label="Research only" tone="manual" />
          </div>
          <CardDescription>{alphaLabSummary.continuousImprovement}</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-3 md:grid-cols-5">
          <Metric label="Families" value={String(alphaLabMetrics.families)} />
          <Metric label="Alpha Records" value={String(alphaLabMetrics.records)} />
          <Metric label="Backtest Queue" value={String(alphaLabMetrics.backtestQueue)} />
          <Metric label="Live Candidates" value={String(alphaLabMetrics.liveCandidates)} />
          <Metric label="ALPHA-501" value={wraithLstm?.backtestStatus ?? "N/A"} />
        </CardContent>
      </Card>
    </section>
  );
}

function ResearchSchedulerTradingPanel() {
  const quantMissions = scheduledResearchMissions.filter((mission) => mission.division === "Quant Research Corps");
  return (
    <section className="space-y-4">
      <SectionHeader eyebrow="v2.8 Research Scheduler" title="Research cadence before paper mode" description={researchSchedulerSummary.doctrine} />
      <Card className="border-cyan-300/30 bg-cyan-950/15">
        <CardHeader>
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200">{researchSchedulerSummary.version}</p>
              <CardTitle className="mt-2 text-2xl text-cyan-100">Quant scheduled missions</CardTitle>
            </div>
            <StatusBadge label="Research only" tone="manual" />
          </div>
          <CardDescription>{researchSchedulerSummary.safety}</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-3 md:grid-cols-4">
          <Metric label="Quant Missions" value={String(researchSchedulerMetrics.quantMissions)} />
          <Metric label="Needs Review" value={String(researchSchedulerMetrics.needsReview)} />
          <Metric label="Lead" value={quantMissions[0]?.missionId ?? "N/A"} />
          <Metric label="Live Trading" value="0" />
        </CardContent>
      </Card>
    </section>
  );
}

function OrionBacktestSpecSummary() {
  return (
    <section className="space-y-4">
      <SectionHeader eyebrow={orionBacktestSpec001.id} title="ORION Backtest Spec 001" description={orionBacktestSpec001.doctrine} />
      <Card className="border-amber-300/30 bg-amber-950/15">
        <CardHeader>
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-200">{orionBacktestSpec001.version}</p>
              <CardTitle className="mt-2 text-2xl text-amber-100">Backtest before prototype</CardTitle>
            </div>
            <StatusBadge label="No paper mode" tone="manual" />
          </div>
          <CardDescription>{orionBacktestSpec001.recommendation}</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-3 md:grid-cols-5">
          <Metric label="Markets" value={orionBacktestSpec001.markets.join(" / ")} />
          <Metric label="Variants" value="5m / 15m / 30m" />
          <Metric label="Regime Tests" value={String(orionBacktestSpec001.regimeTests.length)} />
          <Metric label="Heatmaps" value={String(orionBacktestSpec001.visualizationOutputs.length)} />
          <Metric label="Pass Gates" value={String(orionBacktestSpec001.passFailCriteria.length)} />
        </CardContent>
      </Card>
    </section>
  );
}

function QuantScoutMission() {
  return (
    <section className="space-y-4">
      <SectionHeader eyebrow={quantScoutMission001.id} title={quantScoutMission001.title} description={quantScoutMission001.rankingRationale} />
      <div className="grid gap-4 xl:grid-cols-[0.8fr_1.2fr]">
        <Card className="border-emerald-300/30 bg-emerald-950/15">
          <CardHeader>
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-200">Recommended first bot</p>
                <CardTitle className="mt-2 text-2xl text-emerald-100">{quantScoutMission001.recommendedFirstBot}</CardTitle>
              </div>
              <Trophy className="h-5 w-5 text-emerald-200" />
            </div>
            <CardDescription>{quantScoutMission001.recommendedFirstSignal}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Info label="Status" value={quantScoutMission001.status} />
            <Info label="Objective" value={quantScoutMission001.objective} />
          </CardContent>
        </Card>
        <Card className="border-amber-300/30 bg-amber-950/15">
          <CardHeader>
            <CardTitle className="text-2xl text-amber-100">Required data and backtest plan</CardTitle>
            <CardDescription>No paper mode until historical validation passes and the Mission Commander approves review.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4 md:grid-cols-2">
            <PlanList title="Required Data" items={quantScoutMission001.requiredDataPlan} />
            <PlanList title="Backtest Plan" items={quantScoutMission001.backtestPlan} />
          </CardContent>
        </Card>
      </div>

      <section className="space-y-4">
        <SectionHeader eyebrow="Top 20 Overall" title="Broad first, then narrow" description="Ranking favors clean backtests, data availability, risk control, realistic execution, edge after fees/slippage, and speed to paper test." />
        <div className="grid gap-3">
          {top20QuantStrategyCandidates.map((candidate) => (
            <Card key={candidate.id} className="border-cyan-300/20 bg-card/80">
              <CardHeader>
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200">#{candidate.rank} / {candidate.bot} / {candidate.id}</p>
                    <CardTitle className="mt-2 text-lg">{candidate.strategyName}</CardTitle>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <StatusBadge label={candidate.recommendation} tone={recommendationTone[candidate.recommendation]} />
                    <StatusBadge label={String(candidate.confidenceScore)} tone={candidate.confidenceScore >= 70 ? "success" : candidate.confidenceScore >= 50 ? "manual" : "muted"} />
                  </div>
                </div>
                <CardDescription>{candidate.sourceEvidence}</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
                <Info label="Market" value={candidate.market} />
                <Info label="Timeframe" value={candidate.timeframe} />
                <Info label="Backtest" value={candidate.backtestFeasibility} />
                <Info label="Risk" value={candidate.riskProfile} />
                <Info label="Difficulty" value={candidate.difficulty} />
                <Info label="Overfitting" value={candidate.probabilityOfOverfitting} />
                <Info label="Capital" value={candidate.capitalRequirement} />
                <Info label="Prototype Time" value={candidate.estimatedFirstPrototypeTime} />
                <div className="md:col-span-2"><Info label="Entry Rule" value={candidate.entryRule} /></div>
                <div className="md:col-span-2"><Info label="Exit Rule" value={candidate.exitRule} /></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <SectionHeader eyebrow="Top 5 Per Bot" title="Program-level shortlist" description="These are ranked candidates, not approved strategies." />
        <div className="grid gap-4 xl:grid-cols-5">
          {Object.entries(topStrategiesByBot).map(([bot, candidates]) => (
            <Card key={bot} className="border-purple-300/25 bg-card/80">
              <CardHeader>
                <CardTitle className="text-lg">{bot}</CardTitle>
                <CardDescription>{candidates.length} ranked candidates</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                {candidates.map((candidate) => (
                  <div key={candidate.id} className="rounded-md border border-border/70 bg-background/50 p-3">
                    <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">#{candidate.rank} / {candidate.confidenceScore}</p>
                    <p className="mt-1 text-sm font-medium text-foreground/90">{candidate.strategyName}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </section>
  );
}

function ProgramCard({ program }: { program: TradingResearchProgram }) {
  return (
    <Card className="overflow-hidden border-cyan-300/25 bg-card/80">
      <div className="h-1 bg-gradient-to-r from-cyan-300 via-amber-300 to-emerald-300" />
      <CardHeader>
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-md border border-cyan-300/30 bg-cyan-300/10 text-2xl">{program.emoji}</span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200">{program.id} / {program.assetClass}</p>
              <CardTitle className="mt-1 text-xl">{program.name}</CardTitle>
            </div>
          </div>
          <StatusBadge label={program.currentStatus} tone={statusTone[program.currentStatus]} />
        </div>
        <CardDescription>{program.mission}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <ListBlock title="Strategy Candidates" items={program.strategyCandidates} icon="chart" />
        <ListBlock title="Required Data" items={program.requiredData} icon="data" />
        <ListBlock title="Validation Gates" items={program.validationGates} icon="gate" />
        <ListBlock title="Backtest Requirements" items={program.backtestRequirements} icon="test" />
        <ListBlock title="Risk Controls" items={program.riskControls} icon="risk" />
        <Info label="Next Research Task" value={program.nextResearchTask} />
      </CardContent>
    </Card>
  );
}

function ResearchScouts() {
  return (
    <Card className="border-emerald-300/30 bg-emerald-950/15">
      <CardHeader>
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-200">Research Scouts</p>
            <CardTitle className="mt-2 text-2xl text-emerald-100">Sources are evidence candidates</CardTitle>
          </div>
          <FileSearch className="h-5 w-5 text-emerald-200" />
        </div>
        <CardDescription>Scouts gather public/manual research. They do not recommend live trades or bypass validation.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-3 md:grid-cols-2">
        {tradingResearchScouts.map((scout) => (
          <div key={scout.id} className="rounded-md border border-emerald-300/20 bg-background/50 p-3">
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-sm font-semibold text-emerald-100">{scout.name}</h3>
              <StatusBadge label={scout.status} tone="manual" />
            </div>
            <p className="mt-2 text-sm leading-6 text-foreground/85">{scout.role}</p>
            <p className="mt-2 text-xs leading-5 text-muted-foreground">Watches: {scout.watches.join(" / ")}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

function ScoutOutputs() {
  return (
    <Card className="border-amber-300/30 bg-amber-950/15">
      <CardHeader>
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-200">Scout Output Template</p>
            <CardTitle className="mt-2 text-2xl text-amber-100">Unknowns remain N/A</CardTitle>
          </div>
          <FlaskConical className="h-5 w-5 text-amber-200" />
        </div>
        <CardDescription>Outputs capture source, strategy, evidence, backtest availability, framework links, risk notes, confidence, and recommendation.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        {tradingScoutOutputs.map((output) => (
          <div key={output.id} className="rounded-md border border-amber-300/20 bg-background/50 p-3">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">{output.id} / {output.scout}</p>
                <h3 className="mt-1 text-sm font-semibold text-amber-100">{output.strategy}</h3>
              </div>
              <StatusBadge label={output.confidence} tone={confidenceTone[output.confidence]} />
            </div>
            <div className="mt-3 grid gap-2 md:grid-cols-2">
              <Info label="Evidence" value={output.evidence} />
              <Info label="Backtest" value={output.backtestAvailability} />
              <Info label="Framework" value={output.codeFrameworkLinkPlaceholder} />
              <Info label="Risk" value={output.riskNotes} />
            </div>
            <p className="mt-3 text-sm leading-6 text-foreground/85">Recommendation: {output.recommendation}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

function ListBlock({ title, items, icon }: { title: string; items: string[]; icon: "chart" | "data" | "gate" | "test" | "risk" }) {
  const Icon = icon === "chart" ? BarChart3 : icon === "data" ? FileSearch : icon === "gate" ? ShieldCheck : icon === "test" ? FlaskConical : Waves;
  return (
    <div className="rounded-md border border-border/70 bg-background/50 p-3">
      <div className="mb-2 flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-muted-foreground"><Icon className="h-3.5 w-3.5 text-primary" />{title}</div>
      <div className="grid gap-2">
        {items.map((item) => <div key={item} className="rounded-md border border-border/70 bg-background/50 px-3 py-2 text-sm text-foreground/90">{item}</div>)}
      </div>
    </div>
  );
}

function PlanList({ title, items }: { title: string; items: string[] }) {
  return <div className="rounded-md border border-border/70 bg-background/50 p-3"><p className="mb-2 text-xs uppercase tracking-[0.14em] text-muted-foreground">{title}</p><div className="space-y-2">{items.map((item) => <p key={item} className="text-sm leading-6 text-foreground/85">{item}</p>)}</div></div>;
}

function Metric({ label, value }: { label: string; value: string }) {
  return <div className="rounded-md border border-cyan-300/20 bg-background/50 p-3"><p className="mb-1 text-xs uppercase tracking-[0.14em] text-muted-foreground">{label}</p><p className="text-sm font-medium leading-6 text-foreground/90">{value}</p></div>;
}

function Info({ label, value }: { label: string; value: string }) {
  return <div className="rounded-md border border-border/70 bg-background/50 p-3"><p className="mb-1 text-xs uppercase tracking-[0.14em] text-muted-foreground">{label}</p><p className="text-sm leading-6 text-foreground/90">{value}</p></div>;
}
