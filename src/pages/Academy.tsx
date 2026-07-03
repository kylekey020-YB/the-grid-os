import { ArrowRight, BookOpenCheck, BrainCircuit, CheckCircle2, Clock3, GraduationCap, Landmark, ShieldCheck, Sparkles } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { StatusBadge } from "@/components/StatusBadge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CompanySeal, DivisionInsigniaGrid, FoundingDayPlaque, MissionRibbonRack } from "@/components/identity/GridIdentity";
import {
  academyDoctrine,
  academyOverview,
  academyWings,
  evolutionRecords,
  foundingDay,
  hallOfCommandTimeline,
  type AcademyAccent,
  type AcademyStatus,
  type AcademyWing,
} from "@/data/academy";
import { chronicleDoctrine, chronicleEntries } from "@/data/chronicle";
import { scoutReportMetrics, scoutReports, scoutReportsDoctrine } from "@/data/scoutReports";
import { tradingResearchCorpsSummary, tradingResearchMetrics, tradingResearchPrograms } from "@/data/tradingResearchCorps";
import { orionBacktestSpec001, quantResearchMetrics, quantResearchScoutsSummary, quantScoutReports } from "@/data/quantResearchScouts";
import { obsidianBridgeSummary, obsidianVaultFolders } from "@/data/obsidianBridge";
import { researchSchedulerMetrics, researchSchedulerSummary } from "@/data/researchScheduler";
import { intelligenceCorpsMetrics, intelligenceCorpsSummary } from "@/data/intelligenceCorps";
import { obsidianVaultMetrics, obsidianVaultSummary } from "@/data/obsidianVault";
import { playbookDoctrine, playbookMetrics, playbooks } from "@/data/playbooks";
import { alphaLabMetrics, alphaLabSummary, alphaRecords } from "@/data/alphaLab";
import { cn } from "@/lib/utils";

const accentClasses: Record<AcademyAccent, { border: string; text: string; bg: string; glow: string; line: string }> = {
  cyan: { border: "border-cyan-300/35", text: "text-cyan-200", bg: "bg-cyan-300/10", glow: "hover:shadow-[0_0_34px_rgba(34,211,238,0.20)]", line: "from-cyan-300 via-blue-300 to-purple-300" },
  blue: { border: "border-blue-300/35", text: "text-blue-200", bg: "bg-blue-300/10", glow: "hover:shadow-[0_0_34px_rgba(96,165,250,0.18)]", line: "from-blue-300 via-cyan-300 to-emerald-300" },
  purple: { border: "border-purple-300/35", text: "text-purple-200", bg: "bg-purple-300/10", glow: "hover:shadow-[0_0_34px_rgba(216,180,254,0.18)]", line: "from-purple-300 via-fuchsia-300 to-cyan-300" },
  magenta: { border: "border-fuchsia-300/35", text: "text-fuchsia-200", bg: "bg-fuchsia-300/10", glow: "hover:shadow-[0_0_34px_rgba(217,70,239,0.18)]", line: "from-fuchsia-300 via-pink-300 to-red-300" },
  red: { border: "border-red-300/35", text: "text-red-200", bg: "bg-red-300/10", glow: "hover:shadow-[0_0_34px_rgba(248,113,113,0.18)]", line: "from-red-300 via-fuchsia-300 to-amber-300" },
  gold: { border: "border-amber-300/35", text: "text-amber-200", bg: "bg-amber-300/10", glow: "hover:shadow-[0_0_34px_rgba(251,191,36,0.18)]", line: "from-amber-200 via-yellow-300 to-cyan-300" },
  emerald: { border: "border-emerald-300/35", text: "text-emerald-200", bg: "bg-emerald-300/10", glow: "hover:shadow-[0_0_34px_rgba(52,211,153,0.18)]", line: "from-emerald-300 via-cyan-300 to-blue-300" },
};

const statusTone: Record<AcademyStatus, "success" | "manual" | "beta" | "muted"> = {
  Active: "success",
  Planned: "beta",
  "Awaiting Evidence": "manual",
  "Read-Only": "muted",
};

export function Academy() {
  return (
    <div className="space-y-7">
      <section className="relative overflow-hidden rounded-lg border border-amber-300/30 bg-card/85 p-6 shadow-[0_0_90px_rgba(251,191,36,0.14)] md:p-8">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(251,191,36,0.18),transparent_24rem),linear-gradient(rgba(251,191,36,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.04)_1px,transparent_1px)] bg-[size:auto,36px_36px,36px_36px] opacity-90" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent" />
        <div className="relative grid gap-6 xl:grid-cols-[1.15fr_0.85fr] xl:items-end">
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-300/35 bg-amber-300/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-amber-100">
              <GraduationCap className="h-3.5 w-3.5" /> v1.7 Academy
            </div>
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200">Institutional Learning Division</p>
              <h1 className="font-display text-4xl font-semibold leading-tight md:text-6xl">The Academy</h1>
              <p className="max-w-3xl text-base leading-7 text-muted-foreground md:text-lg">{academyOverview.mission}</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              <AcademyStat label="Status" value={academyOverview.status} />
              <AcademyStat label="Current Version" value={academyOverview.currentVersion} />
              <AcademyStat label="Wings" value={String(academyWings.length)} />
              <AcademyStat label="Safety" value="Evidence first" />
            </div>
          </div>
          <Card className="border-gold-300/35 border-amber-300/35 bg-amber-950/15">
            <CardHeader>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-200">Founding Hall</p>
                  <CardTitle className="mt-2 text-2xl text-amber-100">{foundingDay.title}</CardTitle>
                </div>
                <Landmark className="h-5 w-5 text-amber-200" />
              </div>
              <CardDescription>{foundingDay.date}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm leading-6 text-foreground/85">{foundingDay.summary}</p>
              <div className="rounded-md border border-amber-300/20 bg-amber-300/10 p-3 text-sm leading-6 text-amber-100">{foundingDay.evidence}</div>
            </CardContent>
          </Card>
        </div>
      </section>

      <IdentitySystemSection />

      <section className="space-y-4">
        <SectionHeader eyebrow="Academy Doctrine" title="Lessons become permanent" description="The Academy preserves learning without turning plans into claims or placeholders into proof." />
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {academyDoctrine.map((item) => (
            <div key={item} className="rounded-md border border-cyan-300/20 bg-cyan-300/10 p-3 text-sm leading-6 text-cyan-100">{item}</div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <SectionHeader eyebrow="Campus Map" title="Academy wings" description="Each wing is typed static data today and future-proofed for Mission Records, Decision Records, after-action reviews, and playbooks." />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {academyWings.map((wing) => <AcademyWingCard key={wing.id} wing={wing} />)}
        </div>
      </section>

      <section className="grid gap-4 xl:grid-cols-[1fr_1fr]">
        <HallOfCommand />
        <EvolutionLab />
      </section>

      <PlaybooksAcademy />

      <ScoutReportsAcademy />

      <TradingResearchAcademy />

      <QuantResearchAcademy />

      <AlphaLabAcademy />

      <ResearchSchedulerAcademy />

      <IntelligenceCorpsAcademy />

      <ObsidianAcademyBridge />

      <ChronicleSection />
    </div>
  );
}

function IdentitySystemSection() {
  return (
    <section className="space-y-4">
      <SectionHeader eyebrow="Identity System" title="Seal, plaque, ribbons, and insignias" description="A serious command identity layer for Founding Day, Operation First Revenue, divisions, and future mission honors." />
      <div className="grid gap-4 xl:grid-cols-[0.8fr_1.2fr]">
        <CompanySeal />
        <FoundingDayPlaque />
      </div>
      <MissionRibbonRack />
      <DivisionInsigniaGrid />
    </section>
  );
}

function AcademyWingCard({ wing }: { wing: AcademyWing }) {
  const accent = accentClasses[wing.accent];
  return (
    <Card className={cn("group overflow-hidden transition duration-300", accent.border, accent.glow)}>
      <div className={cn("h-1 bg-gradient-to-r", accent.line)} />
      <CardHeader>
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className={cn("flex h-12 w-12 items-center justify-center rounded-md border text-2xl", accent.border, accent.bg)}>{wing.emoji}</span>
            <div>
              <p className={cn("text-xs font-semibold uppercase tracking-[0.16em]", accent.text)}>{wing.steward}</p>
              <CardTitle className="mt-1 text-xl">{wing.name}</CardTitle>
            </div>
          </div>
          <StatusBadge label={wing.status} tone={statusTone[wing.status]} />
        </div>
        <CardDescription>{wing.mission}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-2">
          {wing.entries.map((entry) => (
            <div key={entry} className="flex items-center gap-2 rounded-md border border-border/70 bg-background/50 px-3 py-2 text-sm text-foreground/90">
              <CheckCircle2 className={cn("h-3.5 w-3.5", accent.text)} />
              {entry}
            </div>
          ))}
        </div>
        <div className="rounded-md border border-border/70 bg-background/50 p-3 text-sm leading-6 text-muted-foreground">
          <ShieldCheck className={cn("mb-2 h-4 w-4", accent.text)} />
          {wing.safetyNote}
        </div>
        <Button variant="outline" size="sm" disabled>
          <ArrowRight className="h-4 w-4" /> Open wing
        </Button>
      </CardContent>
    </Card>
  );
}

function HallOfCommand() {
  return (
    <Card className="border-fuchsia-300/30 bg-fuchsia-950/15">
      <CardHeader>
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-fuchsia-200">Hall of Command</p>
            <CardTitle className="mt-2 text-2xl text-fuchsia-100">Mission Commander timeline</CardTitle>
          </div>
          <Clock3 className="h-5 w-5 text-fuchsia-200" />
        </div>
        <CardDescription>Major decisions and company milestones, recorded as history rather than hype.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        {hallOfCommandTimeline.map((item) => (
          <div key={item.id} className="rounded-md border border-fuchsia-300/20 bg-background/50 p-3">
            <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">{item.id} / {item.date}</p>
            <h3 className="mt-1 text-sm font-semibold text-fuchsia-100">{item.title}</h3>
            <p className="mt-2 text-sm leading-6 text-foreground/85">{item.summary}</p>
            <p className="mt-2 text-xs leading-5 text-muted-foreground">Evidence: {item.evidence}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

function EvolutionLab() {
  return (
    <Card className="border-cyan-300/30 bg-cyan-950/15">
      <CardHeader>
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200">Evolution Lab</p>
            <CardTitle className="mt-2 text-2xl text-cyan-100">Systems improve with records</CardTitle>
          </div>
          <BrainCircuit className="h-5 w-5 text-cyan-200" />
        </div>
        <CardDescription>Officer, Program, and architecture versions should explain what changed and why.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        {evolutionRecords.map((record) => (
          <div key={record.id} className="rounded-md border border-cyan-300/20 bg-background/50 p-3">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">{record.id}</p>
                <h3 className="mt-1 text-sm font-semibold text-cyan-100">{record.subject}</h3>
              </div>
              <StatusBadge label={record.currentVersion} tone="beta" />
            </div>
            <p className="mt-2 text-sm leading-6 text-foreground/85">{record.lesson}</p>
            <p className="mt-2 text-xs leading-5 text-muted-foreground">Next review: {record.nextReview}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}


function PlaybooksAcademy() {
  return (
    <section className="space-y-4">
      <SectionHeader eyebrow="Playbooks" title="Validated experience becomes reusable" description={playbookDoctrine} />
      <div className="grid gap-4 xl:grid-cols-[0.8fr_1.2fr]">
        <Card className="border-purple-300/30 bg-purple-950/15">
          <CardHeader>
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-purple-200">Playbook System v1.0</p>
                <CardTitle className="mt-2 text-2xl text-purple-100">Draft registry</CardTitle>
              </div>
              <StatusBadge label="Evidence required" tone="manual" />
            </div>
            <CardDescription>No playbook is validated until the workflow has repeated evidence.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-3 md:grid-cols-2">
            <AcademyStat label="Playbooks" value={String(playbookMetrics.total)} />
            <AcademyStat label="Draft" value={String(playbookMetrics.draft)} />
            <AcademyStat label="Tested" value={String(playbookMetrics.tested)} />
            <AcademyStat label="Validated" value={String(playbookMetrics.validated)} />
          </CardContent>
        </Card>
        <Card className="border-cyan-300/30 bg-cyan-950/15">
          <CardHeader>
            <CardTitle className="text-cyan-100">Initial playbooks</CardTitle>
            <CardDescription>Every current playbook remains Draft until evidence promotes it.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-2 md:grid-cols-2">
            {playbooks.map((playbook) => <div key={playbook.playbookId} className="rounded-md border border-cyan-300/20 bg-background/50 px-3 py-2 text-sm text-foreground/90">{playbook.playbookId} / {playbook.title}</div>)}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

function ScoutReportsAcademy() {
  return (
    <section className="space-y-4">
      <SectionHeader eyebrow="Scout Reports" title="Demand research becomes institutional memory" description={scoutReportsDoctrine} />
      <div className="grid gap-4 xl:grid-cols-[0.8fr_1.2fr]">
        <Card className="border-cyan-300/30 bg-cyan-950/15">
          <CardHeader>
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200">Revenue Corps</p>
                <CardTitle className="mt-2 text-2xl text-cyan-100">Report archive pattern</CardTitle>
              </div>
              <StatusBadge label="Manual Only" tone="manual" />
            </div>
            <CardDescription>Scout Reports can later become case studies, playbooks, after-action reviews, or Hall of Failures entries after evidence exists.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-3 md:grid-cols-2">
            <AcademyStat label="Reports" value={String(scoutReportMetrics.totalReports)} />
            <AcademyStat label="Ready" value={String(scoutReportMetrics.readyForReview)} />
          </CardContent>
        </Card>
        <Card className="border-emerald-300/30 bg-emerald-950/15">
          <CardHeader>
            <CardTitle className="text-emerald-100">Report lanes</CardTitle>
            <CardDescription>No report becomes a lesson until it records real evidence and an outcome.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-2 md:grid-cols-4">
            {scoutReports.map((report) => (
              <div key={report.id} className="rounded-md border border-emerald-300/20 bg-background/50 px-3 py-2 text-sm text-foreground/90">{report.emoji} {report.lane}</div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}



function TradingResearchAcademy() {
  return (
    <section className="space-y-4">
      <SectionHeader eyebrow="Trading Research Corps" title="Research lessons before trading claims" description={tradingResearchCorpsSummary.doctrine} />
      <div className="grid gap-4 xl:grid-cols-[0.8fr_1.2fr]">
        <Card className="border-blue-300/30 bg-blue-950/15">
          <CardHeader>
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-200">{tradingResearchCorpsSummary.version}</p>
                <CardTitle className="mt-2 text-2xl text-blue-100">Trading research archive pattern</CardTitle>
              </div>
              <StatusBadge label="Research Only" tone="manual" />
            </div>
            <CardDescription>{tradingResearchCorpsSummary.safety}</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-3 md:grid-cols-2">
            <AcademyStat label="Programs" value={String(tradingResearchMetrics.programs)} />
            <AcademyStat label="Scouts" value={String(tradingResearchMetrics.scouts)} />
            <AcademyStat label="Live Trading" value={String(tradingResearchMetrics.liveTradingConnections)} />
            <AcademyStat label="Expectancy Proven" value={String(tradingResearchMetrics.strategiesWithProvenExpectancy)} />
          </CardContent>
        </Card>
        <Card className="border-cyan-300/30 bg-cyan-950/15">
          <CardHeader>
            <CardTitle className="text-cyan-100">Programs</CardTitle>
            <CardDescription>Backtest and paper-only research may later become case studies if evidence exists.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-2 md:grid-cols-3">
            {tradingResearchPrograms.map((program) => (
              <div key={program.id} className="rounded-md border border-cyan-300/20 bg-background/50 px-3 py-2 text-sm text-foreground/90">{program.emoji} {program.name}</div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

function QuantResearchAcademy() {
  return (
    <section className="space-y-4">
      <SectionHeader eyebrow="Quant Research Scouts" title="Trading research becomes institutional knowledge" description={quantResearchScoutsSummary.doctrine} />
      <div className="grid gap-4 xl:grid-cols-[0.8fr_1.2fr]">
        <Card className="border-blue-300/30 bg-blue-950/15">
          <CardHeader>
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-200">{quantResearchScoutsSummary.version}</p>
                <CardTitle className="mt-2 text-2xl text-blue-100">Research reports before backtests</CardTitle>
              </div>
              <StatusBadge label="Research Only" tone="manual" />
            </div>
            <CardDescription>{quantResearchScoutsSummary.safety}</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-3 md:grid-cols-2">
            <AcademyStat label="Scouts" value={String(quantResearchMetrics.scouts)} />
            <AcademyStat label="Reports" value={String(quantResearchMetrics.reports)} />
            <AcademyStat label="Sources" value={String(quantResearchMetrics.sources)} />
            <AcademyStat label="Prototype Candidates" value={String(quantResearchMetrics.prototypeCandidates)} />
            <AcademyStat label="ORION Spec" value={orionBacktestSpec001.version} />
            <AcademyStat label="Recommended Variant" value="15-minute ORB" />
          </CardContent>
        </Card>
        <Card className="border-cyan-300/30 bg-cyan-950/15">
          <CardHeader>
            <CardTitle className="text-cyan-100">Current report archive</CardTitle>
            <CardDescription>Research reports can become case studies after backtest evidence exists.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-2 md:grid-cols-2">
            {quantScoutReports.map((report) => (
              <div key={report.id} className="rounded-md border border-cyan-300/20 bg-background/50 px-3 py-2 text-sm text-foreground/90">{report.id} / {report.targetBot} / {report.recommendation}</div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}



function AlphaLabAcademy() {
  const wraithLstm = alphaRecords.find((record) => record.id === "ALPHA-501");
  return (
    <section className="space-y-4">
      <SectionHeader eyebrow="Alpha Lab" title="Alpha research becomes institutional knowledge" description={alphaLabSummary.continuousImprovement} />
      <Card className="border-purple-300/30 bg-purple-950/15">
        <CardHeader>
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-purple-200">{alphaLabSummary.version}</p>
              <CardTitle className="mt-2 text-2xl text-purple-100">Hypotheses, evidence, rejection, improvement</CardTitle>
            </div>
            <StatusBadge label="Evidence required" tone="manual" />
          </div>
          <CardDescription>{alphaLabSummary.doctrine}</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-3 md:grid-cols-5">
          <AcademyStat label="Families" value={String(alphaLabMetrics.families)} />
          <AcademyStat label="Alpha Records" value={String(alphaLabMetrics.records)} />
          <AcademyStat label="Live Candidates" value={String(alphaLabMetrics.liveCandidates)} />
          <AcademyStat label="Evidence Scored" value={String(alphaLabMetrics.evidenceScored)} />
          <AcademyStat label="ALPHA-501" value={wraithLstm?.currentVerdict ?? "N/A"} />
        </CardContent>
      </Card>
    </section>
  );
}

function ResearchSchedulerAcademy() {
  return (
    <section className="space-y-4">
      <SectionHeader eyebrow="Research Scheduler" title="Scheduled reports become institutional memory" description={researchSchedulerSummary.doctrine} />
      <Card className="border-cyan-300/30 bg-cyan-950/15">
        <CardHeader>
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200">{researchSchedulerSummary.version}</p>
              <CardTitle className="mt-2 text-2xl text-cyan-100">Research records before action</CardTitle>
            </div>
            <StatusBadge label="Reports only" tone="manual" />
          </div>
          <CardDescription>{researchSchedulerSummary.safety}</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-3 md:grid-cols-4">
          <AcademyStat label="Scheduled Missions" value={String(researchSchedulerMetrics.missions)} />
          <AcademyStat label="Revenue Corps" value={String(researchSchedulerMetrics.revenueMissions)} />
          <AcademyStat label="Quant Corps" value={String(researchSchedulerMetrics.quantMissions)} />
          <AcademyStat label="Irreversible Actions" value="0" />
        </CardContent>
      </Card>
    </section>
  );
}


function IntelligenceCorpsAcademy() {
  return (
    <section className="space-y-4">
      <SectionHeader eyebrow="Intelligence Corps" title="Research becomes durable institutional knowledge" description={intelligenceCorpsSummary.doctrine} />
      <Card className="border-purple-300/30 bg-purple-950/15">
        <CardHeader>
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-purple-200">{obsidianVaultSummary.root}</p>
              <CardTitle className="mt-2 text-2xl text-purple-100">Knowledge belongs to THE GRID</CardTitle>
            </div>
            <StatusBadge label="Canonical memory" tone="manual" />
          </div>
          <CardDescription>{obsidianVaultSummary.doctrine}</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-3 md:grid-cols-4">
          <AcademyStat label="Scout Divisions" value={String(intelligenceCorpsMetrics.divisions)} />
          <AcademyStat label="Registered Scouts" value={String(intelligenceCorpsMetrics.registeredScouts)} />
          <AcademyStat label="Vault Zones" value={String(obsidianVaultMetrics.zones)} />
          <AcademyStat label="Sync Automations" value="0" />
        </CardContent>
      </Card>
    </section>
  );
}

function ObsidianAcademyBridge() {
  return (
    <section className="space-y-4">
      <SectionHeader eyebrow="Obsidian Bridge" title="The Academy exports durable knowledge" description={obsidianBridgeSummary.mission} />
      <Card className="border-purple-300/30 bg-purple-950/15">
        <CardHeader>
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-purple-200">{obsidianBridgeSummary.rootFolder}</p>
              <CardTitle className="mt-2 text-2xl text-purple-100">Markdown second brain</CardTitle>
            </div>
            <StatusBadge label="No sync automation" tone="manual" />
          </div>
          <CardDescription>{obsidianBridgeSummary.safety}</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          {obsidianVaultFolders.slice(0, 8).map((folder) => (
            <AcademyStat key={folder.id} label={folder.path} value={folder.status} />
          ))}
        </CardContent>
      </Card>
    </section>
  );
}

function ChronicleSection() {
  const latest = chronicleEntries[0];

  return (
    <section className="space-y-4">
      <SectionHeader eyebrow="The Chronicle" title="Company history, not commit history" description="A weekly narrative record of what happened, what changed, what was learned, and what remains true." />
      <div className="grid gap-4 xl:grid-cols-[0.9fr_1.1fr]">
        <Card className="border-purple-300/30 bg-purple-950/15">
          <CardHeader>
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-purple-200">{latest.period}</p>
                <CardTitle className="mt-2 text-2xl text-purple-100">{latest.week}</CardTitle>
              </div>
              <StatusBadge label={latest.status} tone="beta" />
            </div>
            <CardDescription>{latest.missionStatus}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <ChronicleList title="What happened" items={latest.whatHappened} />
            <ChronicleList title="Lessons" items={latest.lessons} />
            <div className="rounded-md border border-purple-300/20 bg-background/50 p-3 text-sm leading-6 text-muted-foreground">Evidence: {latest.evidence}</div>
          </CardContent>
        </Card>
        <Card className="border-cyan-300/30 bg-cyan-950/15">
          <CardHeader>
            <CardTitle className="text-cyan-100">Chronicle doctrine</CardTitle>
            <CardDescription>Hermes can draft future weekly pages only after records exist and Mission Commander approves the record.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-3 md:grid-cols-2">
            {chronicleDoctrine.map((item) => (
              <div key={item} className="rounded-md border border-cyan-300/20 bg-cyan-300/10 p-3 text-sm leading-6 text-cyan-100">{item}</div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

function ChronicleList({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-md border border-border/70 bg-background/50 p-3">
      <p className="mb-2 text-xs uppercase tracking-[0.14em] text-muted-foreground">{title}</p>
      <div className="space-y-2">
        {items.map((item) => (
          <p key={item} className="text-sm leading-6 text-foreground/85">{item}</p>
        ))}
      </div>
    </div>
  );
}

function AcademyStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md border border-amber-300/20 bg-background/50 p-3">
      <p className="mb-1 text-xs uppercase tracking-[0.14em] text-muted-foreground">{label}</p>
      <p className="text-sm font-medium leading-6 text-foreground/90">{value}</p>
    </div>
  );
}
