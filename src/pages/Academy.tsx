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
