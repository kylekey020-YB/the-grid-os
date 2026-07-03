import { BarChart3, FileSearch, ShieldCheck, Sigma } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeader } from "@/components/SectionHeader";
import { StatusBadge } from "@/components/StatusBadge";
import { tradingResearchCorpsSummary, tradingResearchMetrics, tradingResearchPrograms } from "@/data/tradingResearchCorps";
import { quantResearchMetrics, quantResearchScoutsSummary, strategyCandidateQueue } from "@/data/quantResearchScouts";

export function Trading() {
  return (
    <div className="space-y-6">
      <SectionHeader eyebrow="Trading" title="Trading Division Research Workstation" description="Trading remains a research surface for data collection, backtests, paper architecture, and evidence review. No fake trades or synthetic performance are shown." />
      <div className="grid gap-4 lg:grid-cols-[0.8fr_1.2fr]">
        <Card>
          <CardHeader>
            <div className="flex items-start justify-between gap-3">
              <CardTitle>APEX</CardTitle>
              <StatusBadge label="Beta" tone="beta" />
            </div>
            <CardDescription>Current status: data collection and research summary.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-muted-foreground">
            <p>Purpose: collect structured observations for future review.</p>
            <p>Research summary: price-based strategies tested. Derivatives research active.</p>
            <p>Autonomy status: not enabled.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <div className="flex items-start justify-between gap-3">
              <div>
                <CardTitle>Trading Research Corps</CardTitle>
                <CardDescription>{tradingResearchCorpsSummary.doctrine}</CardDescription>
              </div>
              <Sigma className="h-5 w-5 text-cyan-200" />
            </div>
          </CardHeader>
          <CardContent className="grid gap-3 md:grid-cols-3">
            <Metric label="Programs" value={String(tradingResearchMetrics.programs)} />
            <Metric label="Scouts" value={String(tradingResearchMetrics.scouts)} />
            <Metric label="Live Trading" value={String(tradingResearchMetrics.liveTradingConnections)} />
          </CardContent>
        </Card>
      </div>

      <Card className="border-blue-300/30 bg-blue-950/15">
        <CardHeader>
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-200">Quant Research Scouts</p>
              <CardTitle className="mt-2 text-2xl text-blue-100">Research intake before backtests</CardTitle>
            </div>
            <FileSearch className="h-5 w-5 text-blue-200" />
          </div>
          <CardDescription>{quantResearchScoutsSummary.doctrine}</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-3 md:grid-cols-4">
          <Metric label="Scouts" value={String(quantResearchMetrics.scouts)} />
          <Metric label="Reports" value={String(quantResearchMetrics.reports)} />
          <Metric label="Lead Bot" value={strategyCandidateQueue[0]?.targetBot ?? "N/A"} />
          <Metric label="Lead Signal" value={strategyCandidateQueue[0]?.strategy ?? "N/A"} />
        </CardContent>
      </Card>

      <section className="space-y-4">
        <SectionHeader eyebrow="Research Programs" title="Backtest before paper, paper before anything else" description={tradingResearchCorpsSummary.safety} />
        <div className="grid gap-4 md:grid-cols-3">
          {tradingResearchPrograms.map((program) => (
            <Card key={program.id} className="border-cyan-300/25 bg-card/80">
              <CardHeader>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200">{program.id}</p>
                    <CardTitle className="mt-2 text-lg">{program.emoji} {program.name}</CardTitle>
                  </div>
                  <StatusBadge label={program.currentStatus} tone={program.currentStatus === "Backtest Required" ? "beta" : "manual"} />
                </div>
                <CardDescription>{program.mission}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Metric label="Asset Class" value={program.assetClass} />
                <Metric label="Next Task" value={program.nextResearchTask} />
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Card className="border-red-300/30 bg-red-950/15">
        <CardHeader className="flex-row items-start gap-3">
          <ShieldCheck className="mt-1 h-5 w-5 text-red-200" />
          <div>
            <CardTitle className="text-red-100">Hard boundary</CardTitle>
            <CardDescription>No brokerage connection, no options execution, no money at risk, no live trading, and no strategy promotion before historical validation.</CardDescription>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return <div className="rounded-md border border-border/70 bg-background/50 p-3"><p className="mb-1 text-xs uppercase tracking-[0.14em] text-muted-foreground">{label}</p><p className="text-sm leading-6 text-foreground/90">{value}</p></div>;
}
