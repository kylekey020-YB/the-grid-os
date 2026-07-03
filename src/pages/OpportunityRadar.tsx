import { useMemo, useState } from "react";
import { BarChart3, BrainCircuit, Factory, Filter, GitBranch, Radar, Rocket, ShieldCheck, Target } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { StatusBadge } from "@/components/StatusBadge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  dealFlowIncubatorStages,
  experimentLabItems,
  filterPresets,
  marketplaceIntelligencePanels,
  opportunityPipelineStages,
  opportunityQueue,
  opportunityRadarItems,
  opportunityRadarRules,
  opportunityRadarSummary,
  productFoundryLines,
  rankOpportunities,
  revenueFlywheel,
  revenueForecastScenarios,
  type ConfidenceLevel,
  type FilterPreset,
  type OpportunityPipelineStage,
  type OpportunityRadarItem,
  type OpportunityStatus,
} from "@/data/opportunityRadar";
import { opportunityScorecard, ventureScoutDivisions, ventureScoutMetrics, ventureScouts, ventureScoutsSummary } from "@/data/ventureScouts";

const statusTone: Record<OpportunityStatus, "success" | "manual" | "beta" | "muted" | "danger"> = {
  Idea: "muted",
  Research: "manual",
  "Awaiting Evidence": "beta",
  "Awaiting Approval": "manual",
  "Active Experiment": "success",
  "Live Monitoring": "success",
  Parked: "muted",
  Rejected: "danger",
};

const confidenceTone: Record<ConfidenceLevel, "success" | "manual" | "beta" | "muted"> = {
  "N/A": "muted",
  Low: "beta",
  Medium: "manual",
  High: "success",
};

const pipelineTone: Record<OpportunityPipelineStage, "success" | "manual" | "beta" | "muted"> = {
  Idea: "muted",
  Research: "manual",
  Evidence: "beta",
  Approval: "manual",
  Launch: "success",
  Revenue: "success",
  Scale: "beta",
  Automation: "muted",
};

export function OpportunityRadar() {
  const [activeFilter, setActiveFilter] = useState<FilterPreset>("All");
  const ranked = useMemo(() => rankOpportunities(activeFilter), [activeFilter]);
  const totalQueue = opportunityQueue.reduce((sum, item) => sum + item.count, 0);

  return (
    <div className="space-y-7">
      <section className="relative overflow-hidden rounded-lg border border-cyan-300/30 bg-card/85 p-6 shadow-[0_0_90px_rgba(34,211,238,0.14)] md:p-8">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(34,211,238,0.18),transparent_24rem),linear-gradient(rgba(34,211,238,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(52,211,153,0.04)_1px,transparent_1px)] bg-[size:auto,38px_38px,38px_38px]" />
        <div className="relative grid gap-6 xl:grid-cols-[1.1fr_0.9fr] xl:items-end">
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/35 bg-cyan-300/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-cyan-100">
              <Radar className="h-3.5 w-3.5" /> {opportunityRadarSummary.version} Opportunity Radar
            </div>
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">Revenue Corps opportunity intelligence</p>
              <h1 className="font-display text-4xl font-semibold leading-tight md:text-6xl">Opportunity Radar</h1>
              <p className="max-w-3xl text-base leading-7 text-muted-foreground md:text-lg">{opportunityRadarSummary.mission}</p>
            </div>
            <div className="grid gap-3 md:grid-cols-4">
              <Metric label="Opportunities" value={String(opportunityRadarItems.length)} />
              <Metric label="Queue Total" value={String(totalQueue)} />
              <Metric label="Live Monitoring" value={String(opportunityRadarItems.filter((item) => item.status === "Live Monitoring").length)} />
              <Metric label="Revenue Claims" value="0" />
            </div>
          </div>
          <Card className="border-red-300/30 bg-red-950/15">
            <CardHeader className="flex-row items-start gap-3">
              <ShieldCheck className="mt-1 h-5 w-5 text-red-200" />
              <div>
                <CardTitle className="text-red-100">Future-ready, evidence-first</CardTitle>
                <CardDescription>{opportunityRadarSummary.safety}</CardDescription>
              </div>
            </CardHeader>
          </Card>
        </div>
      </section>

      <section className="space-y-4">
        <SectionHeader eyebrow="Doctrine" title="Opportunity hunting is permanent" description={opportunityRadarSummary.doctrine} />
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-5">
          {opportunityRadarRules.map((rule) => <div key={rule} className="rounded-md border border-cyan-300/20 bg-cyan-300/10 p-3 text-sm leading-6 text-cyan-100">{rule}</div>)}
        </div>
      </section>

      <VentureScoutScorecard />

      <section className="space-y-4">
        <SectionHeader eyebrow="Mission Commander Filters" title="Rank opportunities by operating priority" description="Filters sort by typed ranking signals. If evidence is missing, opportunities stay N/A instead of pretending certainty." />
        <div className="flex flex-wrap gap-2">
          {filterPresets.map((preset) => (
            <Button key={preset} variant={preset === activeFilter ? "default" : "outline"} size="sm" onClick={() => setActiveFilter(preset)}>
              <Filter className="h-4 w-4" />{preset}
            </Button>
          ))}
        </div>
        <div className="grid gap-4 xl:grid-cols-2">
          {ranked.map((item) => <OpportunityCard key={item.id} item={item} />)}
        </div>
      </section>

      <section className="space-y-4">
        <SectionHeader eyebrow="Pipeline" title="Idea to automation" description="Every opportunity moves through the same gates. Nothing skips evidence or approval." />
        <div className="grid gap-3 md:grid-cols-4 xl:grid-cols-8">
          {opportunityPipelineStages.map((stage) => <div key={stage} className="rounded-md border border-border/70 bg-background/50 p-3 text-center"><StatusBadge label={stage} tone={pipelineTone[stage]} /></div>)}
        </div>
      </section>

      <section className="grid gap-4 xl:grid-cols-[1.1fr_0.9fr]">
        <ExperimentLab />
        <OpportunityQueue />
      </section>

      <section className="grid gap-4 xl:grid-cols-[0.9fr_1.1fr]">
        <RevenueForecasting />
        <RevenueFlywheel />
      </section>

      <ProductFoundry />
      <MarketplaceIntelligence />
      <DealFlowIncubator />
    </div>
  );
}


function VentureScoutScorecard() {
  return (
    <section className="space-y-4">
      <SectionHeader eyebrow="Venture Scouts" title="One scorecard for every business model" description={ventureScoutsSummary.doctrine} />
      <div className="grid gap-4 xl:grid-cols-[0.95fr_1.05fr]">
        <Card className="border-emerald-300/30 bg-emerald-950/15">
          <CardHeader>
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-200">{ventureScoutsSummary.version}</p>
                <CardTitle className="mt-2 text-2xl text-emerald-100">Scouts discover demand</CardTitle>
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
        <Card className="border-cyan-300/30 bg-cyan-950/15">
          <CardHeader>
            <CardTitle className="text-2xl text-cyan-100">Score to compare lanes</CardTitle>
            <CardDescription>Revenue Architect can compare a YouTube opportunity, GitHub tool, Fiverr service, bounty, or DealFlow concept with the same questions.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-3 md:grid-cols-2">
            {opportunityScorecard.map((question) => <Info key={question.id} label={question.field} value={question.question} />)}
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        {ventureScoutDivisions.map((division) => (
          <Card key={division.id} className="border-cyan-300/20 bg-card/80">
            <CardHeader>
              <CardTitle className="text-lg">{division.name}</CardTitle>
              <CardDescription>{division.scouts.length} scouts / {division.lead}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              {ventureScouts.filter((scout) => scout.division === division.name).slice(0, 3).map((scout) => (
                <div key={scout.id} className="rounded-md border border-border/70 bg-background/50 p-3">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-sm font-medium text-foreground/90">{scout.emoji} {scout.name}</span>
                    <span className="text-xs text-muted-foreground">{String(scout.opportunityScore)}</span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

function OpportunityCard({ item }: { item: OpportunityRadarItem }) {
  return (
    <Card className="overflow-hidden border-cyan-300/25 bg-card/80">
      <div className="h-1 bg-gradient-to-r from-cyan-300 via-emerald-300 to-amber-300" />
      <CardHeader>
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200">{item.id} / {item.marketplace}</p>
            <CardTitle className="mt-2 text-xl">{item.name}</CardTitle>
          </div>
          <div className="flex flex-wrap gap-2">
            <StatusBadge label={item.status} tone={statusTone[item.status]} />
            <StatusBadge label={item.pipeline} tone={pipelineTone[item.pipeline]} />
          </div>
        </div>
        <CardDescription>{item.rankReason}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-3 md:grid-cols-3">
          <Info label="Estimated MRR" value={item.estimatedMonthlyRevenue} />
          <Info label="Time to First Dollar" value={item.timeToFirstDollar} />
          <Info label="Difficulty" value={item.difficulty} />
          <Info label="Evidence Level" value={item.evidenceLevel} />
          <Info label="Competition" value={item.competition} />
          <Info label="Margin" value={item.margin} />
          <Info label="Recurring" value={item.recurringRevenuePotential} />
          <Info label="Launch Cost" value={item.launchCost} />
          <Info label="Mission Fit" value={item.missionFit} />
        </div>
        <div className="grid gap-3 md:grid-cols-[0.5fr_1.5fr]">
          <div className="rounded-md border border-border/70 bg-background/50 p-3">
            <p className="mb-2 text-xs uppercase tracking-[0.14em] text-muted-foreground">Confidence</p>
            <StatusBadge label={item.confidence} tone={confidenceTone[item.confidence]} />
          </div>
          <Info label="Next Action" value={item.nextAction} />
        </div>
      </CardContent>
    </Card>
  );
}

function ExperimentLab() {
  return (
    <Card className="border-purple-300/30 bg-purple-950/15">
      <CardHeader>
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-purple-200">Priority 2</p>
            <CardTitle className="mt-2 text-2xl text-purple-100">Experiment Lab</CardTitle>
          </div>
          <BrainCircuit className="h-5 w-5 text-purple-200" />
        </div>
        <CardDescription>Track many ideas while only a few become active experiments.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        {experimentLabItems.map((experiment) => (
          <div key={experiment.id} className="rounded-md border border-purple-300/20 bg-background/50 p-3">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">{experiment.id} / {experiment.owner}</p>
                <h3 className="mt-1 text-sm font-semibold text-purple-100">{experiment.name}</h3>
              </div>
              <StatusBadge label={experiment.status} tone={statusTone[experiment.status]} />
            </div>
            <div className="mt-3 grid gap-2 md:grid-cols-2">
              <Info label="Confidence" value={experiment.confidence} />
              <Info label="Next Step" value={experiment.nextStep} />
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

function OpportunityQueue() {
  const total = opportunityQueue.reduce((sum, item) => sum + item.count, 0);
  return (
    <Card className="border-emerald-300/30 bg-emerald-950/15">
      <CardHeader>
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-200">Priority 8</p>
            <CardTitle className="mt-2 text-2xl text-emerald-100">Opportunity Queue</CardTitle>
          </div>
          <Target className="h-5 w-5 text-emerald-200" />
        </div>
        <CardDescription>Counts are derived from typed Opportunity Radar records, not invented backlog totals.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        {opportunityQueue.map((item) => <Metric key={item.lane} label={item.lane} value={String(item.count)} />)}
        <Metric label="Total" value={String(total)} />
      </CardContent>
    </Card>
  );
}

function RevenueForecasting() {
  return (
    <Card className="border-amber-300/30 bg-amber-950/15">
      <CardHeader>
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-200">Priority 3</p>
            <CardTitle className="mt-2 text-2xl text-amber-100">Revenue Forecasting</CardTitle>
          </div>
          <BarChart3 className="h-5 w-5 text-amber-200" />
        </div>
        <CardDescription>Forecasts are planning models only. They make assumptions explicit; they do not predict reality.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        {revenueForecastScenarios.map((scenario) => (
          <div key={scenario.id} className="rounded-md border border-amber-300/20 bg-background/50 p-3">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">{scenario.id}</p>
                <h3 className="mt-1 text-sm font-semibold text-amber-100">{scenario.name}</h3>
              </div>
              <StatusBadge label={scenario.probability} tone={confidenceTone[scenario.probability]} />
            </div>
            <div className="mt-3 grid gap-2">
              {scenario.assumptions.map((assumption) => <div key={assumption} className="rounded-md border border-border/70 bg-background/50 px-3 py-2 text-sm text-foreground/90">{assumption}</div>)}
            </div>
            <div className="mt-3 grid gap-2 md:grid-cols-2">
              <Info label="Estimated MRR" value={scenario.estimatedMonthlyRevenue} />
              <Info label="Caveat" value={scenario.caveat} />
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

function RevenueFlywheel() {
  return (
    <Card className="border-cyan-300/30 bg-cyan-950/15">
      <CardHeader>
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200">Priority 4</p>
            <CardTitle className="mt-2 text-2xl text-cyan-100">Revenue Flywheel</CardTitle>
          </div>
          <GitBranch className="h-5 w-5 text-cyan-200" />
        </div>
        <CardDescription>Every successful mission should strengthen the next one through playbooks and evidence.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-3 md:grid-cols-4">
        {revenueFlywheel.map((step, index) => (
          <div key={step} className="rounded-md border border-cyan-300/20 bg-background/50 p-3 text-center">
            <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">{String(index + 1).padStart(2, "0")}</p>
            <p className="mt-1 text-sm font-semibold text-cyan-100">{step}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

function ProductFoundry() {
  return (
    <section className="space-y-4">
      <SectionHeader eyebrow="Priority 5" title="Product Foundry" description="Revenue Corps discovers. Product Foundry builds original work only after approved opportunities." />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {productFoundryLines.map((forge) => (
          <Card key={forge.id} className="border-purple-300/25 bg-card/80">
            <CardHeader>
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-md border border-purple-300/30 bg-purple-300/10 text-2xl">{forge.emoji}</span>
                  <div>
                    <CardTitle className="text-lg">{forge.name}</CardTitle>
                    <CardDescription>{forge.status}</CardDescription>
                  </div>
                </div>
                <Factory className="h-5 w-5 text-purple-200" />
              </div>
            </CardHeader>
            <CardContent><p className="text-sm leading-6 text-foreground/85">{forge.purpose}</p></CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

function MarketplaceIntelligence() {
  return (
    <section className="space-y-4">
      <SectionHeader eyebrow="Priority 6" title="Marketplace Intelligence" description="Manual evidence panels for marketplaces. Future automation can plug into this shape only after approval." />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {marketplaceIntelligencePanels.map((panel) => (
          <Card key={panel.id} className="border-emerald-300/25 bg-card/80">
            <CardHeader>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-200">{panel.marketplace}</p>
                  <CardTitle className="mt-2 text-lg">Intelligence Panel</CardTitle>
                </div>
                <StatusBadge label={panel.currentStatus} tone={panel.currentStatus === "Watching" ? "success" : "manual"} />
              </div>
              <CardDescription>Last reviewed: {panel.lastReviewed}</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-2 md:grid-cols-2">
              {panel.fields.map((field) => <div key={field} className="rounded-md border border-border/70 bg-background/50 px-3 py-2 text-sm text-foreground/90">{field}</div>)}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

function DealFlowIncubator() {
  return (
    <section className="space-y-4">
      <SectionHeader eyebrow="Priority 7" title="DealFlow Incubator" description="DealFlow is tracked as a strategic asset candidate with its own validation path." />
      <Card className="border-blue-300/30 bg-blue-950/15">
        <CardHeader>
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-200">Strategic Asset</p>
              <CardTitle className="mt-2 text-2xl text-blue-100">DealFlow</CardTitle>
            </div>
            <Rocket className="h-5 w-5 text-blue-200" />
          </div>
          <CardDescription>Idea, research, architecture, competitors, market size, screens, features, MVP, and roadmap remain gated by evidence.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          {dealFlowIncubatorStages.map((stage) => (
            <div key={stage.id} className="rounded-md border border-blue-300/20 bg-background/50 p-3">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-sm font-semibold text-blue-100">{stage.name}</h3>
                <StatusBadge label={stage.status} tone={stage.status === "Research" ? "manual" : "muted"} />
              </div>
              <p className="mt-2 text-sm leading-6 text-foreground/85">{stage.output}</p>
            </div>
          ))}
        </CardContent>
      </Card>
    </section>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return <div className="rounded-md border border-cyan-300/20 bg-background/50 p-3"><p className="mb-1 text-xs uppercase tracking-[0.14em] text-muted-foreground">{label}</p><p className="text-sm font-medium leading-6 text-foreground/90">{value}</p></div>;
}

function Info({ label, value }: { label: string; value: string }) {
  return <div className="rounded-md border border-border/70 bg-background/50 p-3"><p className="mb-1 text-xs uppercase tracking-[0.14em] text-muted-foreground">{label}</p><p className="text-sm leading-6 text-foreground/90">{value}</p></div>;
}
