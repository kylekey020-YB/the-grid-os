import { Activity, AlertTriangle, BrainCircuit, Compass, DatabaseZap, Eye, RadioTower, ShieldCheck, Sparkles } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeader } from "@/components/SectionHeader";
import { StatusBadge } from "@/components/StatusBadge";
import { missionStatuses, watcherStatuses, zenithProfile, type ArchitectProfile, type MissionStatus, type WatcherStatus } from "@/data/missionStatus";
import { cn } from "@/lib/utils";

const accentClasses: Record<MissionStatus["accent"], { border: string; glow: string; text: string; strip: string; bg: string }> = {
  cyan: {
    border: "border-cyan-300/40",
    glow: "hover:shadow-[0_0_34px_rgba(34,211,238,0.22)]",
    text: "text-cyan-200",
    strip: "from-cyan-300 via-blue-400 to-purple-400",
    bg: "bg-cyan-300/10",
  },
  blue: {
    border: "border-blue-300/40",
    glow: "hover:shadow-[0_0_34px_rgba(96,165,250,0.22)]",
    text: "text-blue-200",
    strip: "from-blue-300 via-cyan-300 to-emerald-300",
    bg: "bg-blue-300/10",
  },
  purple: {
    border: "border-purple-300/40",
    glow: "hover:shadow-[0_0_34px_rgba(216,180,254,0.22)]",
    text: "text-purple-200",
    strip: "from-purple-300 via-fuchsia-300 to-cyan-300",
    bg: "bg-purple-300/10",
  },
  magenta: {
    border: "border-fuchsia-300/40",
    glow: "hover:shadow-[0_0_34px_rgba(217,70,239,0.22)]",
    text: "text-fuchsia-200",
    strip: "from-fuchsia-300 via-pink-400 to-red-300",
    bg: "bg-fuchsia-300/10",
  },
  red: {
    border: "border-red-300/40",
    glow: "hover:shadow-[0_0_34px_rgba(248,113,113,0.22)]",
    text: "text-red-200",
    strip: "from-red-300 via-fuchsia-400 to-amber-300",
    bg: "bg-red-300/10",
  },
  gold: {
    border: "border-amber-300/40",
    glow: "hover:shadow-[0_0_34px_rgba(251,191,36,0.22)]",
    text: "text-amber-200",
    strip: "from-amber-200 via-yellow-300 to-cyan-300",
    bg: "bg-amber-300/10",
  },
  emerald: {
    border: "border-emerald-300/40",
    glow: "hover:shadow-[0_0_34px_rgba(52,211,153,0.22)]",
    text: "text-emerald-200",
    strip: "from-emerald-300 via-cyan-300 to-blue-300",
    bg: "bg-emerald-300/10",
  },
};

export function MissionControl() {
  return (
    <div className="space-y-7">
      <section className="relative overflow-hidden rounded-lg border border-cyan-300/25 bg-card/80 p-6 shadow-[0_0_80px_rgba(34,211,238,0.12)] md:p-8">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(217,70,239,0.06)_1px,transparent_1px)] bg-[size:32px_32px] opacity-50" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300 to-transparent" />
        <div className="relative grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-cyan-200">
              <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.9)]" />
              v0.2 Mission Control
            </div>
            <div className="space-y-3">
              <h1 className="font-display text-4xl font-semibold leading-tight md:text-6xl">Mission Control</h1>
              <p className="max-w-3xl text-base leading-7 text-muted-foreground md:text-lg">
                One-screen command center for paper systems, research missions, Commerce validation, and THE GRID itself. Watchers are read-only monitors, not autonomous Programs.
              </p>
            </div>
          </div>
          <SafetyBanner />
        </div>
      </section>

      <section className="space-y-4">
        <SectionHeader
          eyebrow="Systems Architect"
          title="ZENITH coordinates the grid"
          description="ChatGPT's command profile inside THE GRID. This is strategic coordination and architecture, not autonomous execution."
        />
        <ZenithProfileCard profile={zenithProfile} />
      </section>

      <section className="space-y-4">
        <SectionHeader
          eyebrow="Active Missions"
          title="Every mission at Kyle's fingertips"
          description="Static handoff data only. Mission cards are designed for later log ingestion, but nothing here executes trades, buys inventory, signs wallets, or automates decisions."
        />
        <div className="grid gap-4 xl:grid-cols-5 lg:grid-cols-2">
          {missionStatuses.map((mission) => (
            <MissionCard key={mission.id} mission={mission} />
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <SectionHeader
          eyebrow="Watcher Team"
          title="Read-only workstation monitors"
          description="These Watchers give the command center personality and visibility. They are not autonomous agents and cannot act on their own."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {watcherStatuses.map((watcher) => (
            <WatcherCard key={watcher.id} watcher={watcher} />
          ))}
        </div>
      </section>
    </div>
  );
}

function ZenithProfileCard({ profile }: { profile: ArchitectProfile }) {
  const accent = accentClasses[profile.accent];

  return (
    <Card className={cn("relative overflow-hidden border-purple-300/40 bg-purple-950/20 shadow-[0_0_58px_rgba(168,85,247,0.18)]", accent.glow)}>
      <div className={cn("h-1 bg-gradient-to-r", accent.strip)} />
      <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full border border-purple-300/25 shadow-[0_0_70px_rgba(168,85,247,0.18)]" />
      <CardHeader className="relative grid gap-5 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-md border border-purple-300/35 bg-purple-300/10 text-2xl shadow-[0_0_28px_rgba(168,85,247,0.2)]">
              {profile.emoji}
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-purple-200">{profile.title}</p>
              <CardTitle className="mt-1 text-2xl text-purple-100">{profile.name}</CardTitle>
            </div>
          </div>
          <StatusBadge label={profile.status} tone="success" />
          <CardDescription>{profile.mission}</CardDescription>
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          <InfoBlock label="Current focus" value={profile.currentFocus} icon={Compass} />
          <InfoBlock label="Data source" value={profile.dataSource} icon={DatabaseZap} />
        </div>
      </CardHeader>
      <CardContent className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-md border border-border/70 bg-background/50 p-4">
          <div className="mb-3 flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-muted-foreground">
            <BrainCircuit className="h-3.5 w-3.5 text-primary" />
            Responsibilities
          </div>
          <div className="grid gap-2 sm:grid-cols-2">
            {profile.responsibilities.map((item) => (
              <span key={item} className="rounded-md border border-purple-300/20 bg-purple-300/10 px-3 py-2 text-sm text-purple-100">
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="rounded-md border border-border/70 bg-background/50 p-4">
          <div className="mb-3 flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-muted-foreground">
            <ShieldCheck className="h-3.5 w-3.5 text-primary" />
            Safety doctrine
          </div>
          <div className="space-y-2">
            {profile.safety.map((item) => (
              <p key={item} className="rounded-md border border-cyan-300/20 bg-cyan-300/10 px-3 py-2 text-sm text-cyan-100">
                {item}
              </p>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function SafetyBanner() {
  return (
    <Card className="border-red-300/35 bg-red-950/20 shadow-[0_0_44px_rgba(248,113,113,0.14)]">
      <CardHeader className="flex-row items-start gap-3 pb-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-red-300/30 bg-red-300/10">
          <ShieldCheck className="h-5 w-5 text-red-200" />
        </div>
        <div>
          <CardTitle className="text-red-100">Safety Lock Active</CardTitle>
          <CardDescription className="text-red-100/75">
            THE GRID is monitoring paper/research systems only. No live trading, wallet signing, inventory purchase, supplier spend, or autonomous execution is authorized.
          </CardDescription>
        </div>
      </CardHeader>
    </Card>
  );
}

function MissionCard({ mission }: { mission: MissionStatus }) {
  const accent = accentClasses[mission.accent];

  return (
    <Card className={cn("group relative overflow-hidden transition duration-300", accent.border, accent.glow)}>
      <div className={cn("h-1 bg-gradient-to-r", accent.strip)} />
      <div className="pointer-events-none absolute right-4 top-4 h-16 w-16 rounded-full border border-current opacity-10 transition group-hover:scale-110" />
      <CardHeader className="space-y-3">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className={cn("text-xs font-semibold uppercase tracking-[0.16em]", accent.text)}>{mission.callsign}</p>
            <CardTitle className="mt-2 text-xl">{mission.name}</CardTitle>
          </div>
          <span className={cn("rounded-full px-2.5 py-1 text-xs font-medium", accent.bg, accent.text)}>{mission.riskLevel}</span>
        </div>
        <StatusBadge label={mission.status} tone={mission.safetyState === "Inventory blocked" ? "manual" : "beta"} />
      </CardHeader>
      <CardContent className="space-y-4 text-sm">
        <InfoLine label="Phase" value={mission.phase} icon={Activity} />
        <InfoLine label="Objective" value={mission.currentObjective} icon={RadioTower} />
        <InfoLine label="Safety" value={mission.safetyState} icon={ShieldCheck} />
        <InfoLine label="Next" value={mission.nextAction} icon={Sparkles} />
        <div className="rounded-md border border-border/70 bg-background/50 p-3">
          <p className="mb-1 text-xs uppercase tracking-[0.14em] text-muted-foreground">Truth</p>
          <p className="leading-6 text-foreground/90">{mission.truth}</p>
        </div>
        <div className="flex items-center justify-between gap-3 border-t border-border/70 pt-3 text-xs text-muted-foreground">
          <span>{mission.lastKnownUpdate}</span>
          <span>{mission.dataSource}</span>
        </div>
      </CardContent>
    </Card>
  );
}

function WatcherCard({ watcher }: { watcher: WatcherStatus }) {
  const accent = accentClasses[watcher.accent];

  return (
    <Card className={cn("relative overflow-hidden transition duration-300", accent.border, accent.glow)}>
      <div className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-full border border-current text-xl opacity-80 shadow-[0_0_28px_rgba(34,211,238,0.12)]">
        {watcher.emoji}
      </div>
      <CardHeader className="pr-20">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
          <span className={cn("h-2 w-2 animate-pulse rounded-full", accent.bg)} />
          {watcher.statusBadge}
        </div>
        <CardTitle className={cn("text-lg", accent.text)}>{watcher.name}</CardTitle>
        <CardDescription>{watcher.role}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4 text-sm">
        <InfoBlock label="Watches" value={watcher.watches} icon={Eye} />
        <InfoBlock label="Current signal" value={watcher.currentSignal} icon={DatabaseZap} />
        <InfoBlock label="Promotion status" value={watcher.promotionStatus} icon={AlertTriangle} />
        <p className="border-t border-border/70 pt-3 text-xs text-muted-foreground">Last update: {watcher.lastUpdate}</p>
      </CardContent>
    </Card>
  );
}

function InfoLine({ label, value, icon: Icon }: { label: string; value: string; icon: React.ElementType }) {
  return (
    <div className="flex gap-3">
      <Icon className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
      <div>
        <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">{label}</p>
        <p className="mt-1 leading-6 text-foreground/90">{value}</p>
      </div>
    </div>
  );
}

function InfoBlock({ label, value, icon: Icon }: { label: string; value: string; icon: React.ElementType }) {
  return (
    <div className="rounded-md border border-border/70 bg-background/50 p-3">
      <div className="mb-2 flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-muted-foreground">
        <Icon className="h-3.5 w-3.5 text-primary" />
        {label}
      </div>
      <p className="leading-6 text-foreground/90">{value}</p>
    </div>
  );
}
