import { CalendarClock, CircleDollarSign, Megaphone, Rocket, ShoppingBag, Star, Trophy } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { StatusBadge } from "@/components/StatusBadge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { launchCenterDoctrine, launchCenterSummary, launchLog, launchMilestones, liveProducts, marketingQueue, revenueTimeline, type LaunchMilestoneStatus, type LaunchStatus } from "@/data/launchCenter";

const launchTone: Record<LaunchStatus, "success" | "manual" | "beta" | "muted"> = {
  Live: "success",
  Preparing: "manual",
  Queued: "beta",
  Paused: "muted",
  Archived: "muted",
};

const milestoneTone: Record<LaunchMilestoneStatus, "success" | "manual" | "beta"> = {
  Recorded: "success",
  "Awaiting Evidence": "manual",
  Planned: "beta",
};

export function LaunchCenter() {
  return (
    <div className="space-y-7">
      <section className="relative overflow-hidden rounded-lg border border-emerald-300/30 bg-card/85 p-6 shadow-[0_0_90px_rgba(52,211,153,0.14)] md:p-8">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_22%_18%,rgba(52,211,153,0.18),transparent_24rem),linear-gradient(rgba(52,211,153,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(251,191,36,0.04)_1px,transparent_1px)] bg-[size:auto,36px_36px,36px_36px] opacity-90" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-300 to-transparent" />
        <div className="relative grid gap-6 xl:grid-cols-[1.15fr_0.85fr] xl:items-end">
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/35 bg-emerald-300/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-emerald-100">
              <Rocket className="h-3.5 w-3.5" /> v2.2 Launch Center
            </div>
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200">THE GRID entered the marketplace</p>
              <h1 className="font-display text-4xl font-semibold leading-tight md:text-6xl">Launch Center</h1>
              <p className="max-w-3xl text-base leading-7 text-muted-foreground md:text-lg">Every launch gets tracked here: Fiverr, Gumroad, DealFlow, Shopify, and future products. Real metrics start now; unknowns remain N/A.</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              <LaunchStat label="Status" value={launchCenterSummary.status} />
              <LaunchStat label="Live Products" value={String(launchCenterSummary.liveProducts)} />
              <LaunchStat label="Recorded Milestones" value={String(launchCenterSummary.recordedMilestones)} />
              <LaunchStat label="Revenue" value={launchCenterSummary.revenue} />
            </div>
          </div>
          <Card className="border-amber-300/35 bg-amber-950/15">
            <CardHeader>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-200">EXP-1</p>
                  <CardTitle className="mt-2 text-2xl text-amber-100">Fiverr AI Automation Consulting</CardTitle>
                </div>
                <StatusBadge label="LIVE" tone="success" />
              </div>
              <CardDescription>Mission stage: Idea / Research / Evidence / Approval / Experiment / Live.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <MetricLine label="Next KPI" value="Impressions / CTR / Messages / Consultations / Orders / Reviews / Revenue" />
              <div className="rounded-md border border-amber-300/20 bg-amber-300/10 p-3 text-sm leading-6 text-amber-100">Do not constantly edit the new live gig while indexing starts unless an obvious mistake exists.</div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="space-y-4">
        <SectionHeader eyebrow="Doctrine" title="Customer-facing execution begins" description="The mission is no longer only building a business. It is now serving customers and measuring real marketplace response." />
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-5">{launchCenterDoctrine.map((item) => <div key={item} className="rounded-md border border-emerald-300/20 bg-emerald-300/10 p-3 text-sm leading-6 text-emerald-100">{item}</div>)}</div>
      </section>

      <section className="space-y-4">
        <SectionHeader eyebrow="Live Products" title="Marketplace products now in the field" description="Live means published in the marketplace. Metrics remain N/A until real platform evidence exists." />
        <div className="grid gap-4 xl:grid-cols-2">{liveProducts.map((product) => <LiveProductCard key={product.id} product={product} />)}</div>
      </section>

      <section className="grid gap-4 xl:grid-cols-[1fr_1fr]">
        <RevenueTimeline />
        <LaunchMilestones />
      </section>

      <section className="grid gap-4 xl:grid-cols-[1fr_1fr]">
        <LaunchLog />
        <MarketingQueue />
      </section>
    </div>
  );
}

function LiveProductCard({ product }: { product: typeof liveProducts[number] }) {
  return (
    <Card className="border-emerald-300/30 bg-card/80">
      <CardHeader>
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-200">{product.id} / {product.platform}</p>
            <CardTitle className="mt-2 text-2xl">{product.name}</CardTitle>
          </div>
          <StatusBadge label={product.status} tone={launchTone[product.status]} />
        </div>
        <CardDescription>{product.evidence}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-3 md:grid-cols-2">
          <MetricLine label="Launch Date" value={product.launchDate} />
          <MetricLine label="Stage" value={product.stage} />
          <MetricLine label="Owner" value={product.owner} />
          <MetricLine label="Mission" value={product.mission} />
        </div>
        <div className="grid gap-2 md:grid-cols-2 xl:grid-cols-3">{product.kpis.map((kpi) => <div key={kpi.label} className="rounded-md border border-border/70 bg-background/50 p-3"><div className="flex items-center justify-between gap-3 text-sm"><span className="text-muted-foreground">{kpi.label}</span><span className="font-medium text-foreground">{String(kpi.value)}</span></div><p className="mt-2 text-xs leading-5 text-muted-foreground">{kpi.evidence}</p></div>)}</div>
        <div className="rounded-md border border-emerald-300/20 bg-emerald-300/10 p-3 text-sm leading-6 text-emerald-100">{product.nextAction}</div>
      </CardContent>
    </Card>
  );
}

function RevenueTimeline() {
  return <Card className="border-cyan-300/25 bg-card/80"><CardHeader><div className="flex items-start gap-3"><CircleDollarSign className="mt-1 h-5 w-5 text-cyan-200" /><div><CardTitle>Revenue Timeline</CardTitle><CardDescription>Revenue and launch history without invented numbers.</CardDescription></div></div></CardHeader><CardContent className="space-y-3">{revenueTimeline.map((entry) => <div key={entry.id} className="rounded-md border border-cyan-300/20 bg-background/50 p-3"><p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">{entry.id} / {entry.date}</p><h3 className="mt-1 text-sm font-semibold text-cyan-100">{entry.title}</h3><p className="mt-2 text-sm leading-6 text-foreground/85">{entry.summary}</p><MetricLine label="Amount" value={String(entry.amount)} /></div>)}</CardContent></Card>;
}

function LaunchMilestones() {
  return <Card className="border-amber-300/25 bg-card/80"><CardHeader><div className="flex items-start gap-3"><Trophy className="mt-1 h-5 w-5 text-amber-200" /><div><CardTitle>Milestones</CardTitle><CardDescription>Wins are recorded only when evidence exists.</CardDescription></div></div></CardHeader><CardContent className="space-y-3">{launchMilestones.map((milestone) => <div key={milestone.id} className="rounded-md border border-amber-300/20 bg-background/50 p-3"><div className="flex items-start justify-between gap-3"><div><p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">{milestone.id} / {milestone.date}</p><h3 className="mt-1 text-sm font-semibold text-amber-100">{milestone.title}</h3></div><StatusBadge label={milestone.status} tone={milestoneTone[milestone.status]} /></div><p className="mt-2 text-xs leading-5 text-muted-foreground">{milestone.evidence}</p></div>)}</CardContent></Card>;
}

function LaunchLog() {
  return <Card className="border-purple-300/25 bg-card/80"><CardHeader><div className="flex items-start gap-3"><CalendarClock className="mt-1 h-5 w-5 text-purple-200" /><div><CardTitle>Launch Log</CardTitle><CardDescription>Historical record of launch events.</CardDescription></div></div></CardHeader><CardContent className="space-y-3">{launchLog.map((entry) => <div key={entry.id} className="rounded-md border border-purple-300/20 bg-background/50 p-3"><p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">{entry.id} / {entry.date}</p><p className="mt-2 text-sm leading-6 text-foreground/85">{entry.entry}</p><p className="mt-2 text-xs leading-5 text-muted-foreground">Evidence: {entry.evidence}</p></div>)}</CardContent></Card>;
}

function MarketingQueue() {
  return <Card className="border-blue-300/25 bg-card/80"><CardHeader><div className="flex items-start gap-3"><Megaphone className="mt-1 h-5 w-5 text-blue-200" /><div><CardTitle>Marketing Queue</CardTitle><CardDescription>Supporting assets and next launches. No autonomous publishing.</CardDescription></div></div></CardHeader><CardContent className="space-y-3">{marketingQueue.map((item) => <div key={item.id} className="rounded-md border border-blue-300/20 bg-background/50 p-3"><div className="flex items-start justify-between gap-3"><div><p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">{item.id} / {item.channel}</p><h3 className="mt-1 text-sm font-semibold text-blue-100">{item.task}</h3></div><StatusBadge label={item.status} tone={item.status === "Blocked" ? "manual" : "beta"} /></div><p className="mt-2 text-xs leading-5 text-muted-foreground">{item.boundary}</p></div>)}</CardContent></Card>;
}

function LaunchStat({ label, value }: { label: string; value: string }) {
  return <div className="rounded-md border border-emerald-300/20 bg-background/50 p-3"><p className="mb-1 text-xs uppercase tracking-[0.14em] text-muted-foreground">{label}</p><p className="text-sm font-medium leading-6 text-foreground/90">{value}</p></div>;
}

function MetricLine({ label, value }: { label: string; value: string }) {
  return <div className="flex items-center justify-between gap-3 rounded-md border border-border/70 bg-background/50 px-3 py-2 text-sm"><span className="text-muted-foreground">{label}</span><span className="text-right text-foreground/90">{value}</span></div>;
}
