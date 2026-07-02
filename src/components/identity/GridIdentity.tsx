import { Award, BadgeCheck, CircleDot, Landmark, ShieldCheck, Sparkles } from "lucide-react";
import { StatusBadge } from "@/components/StatusBadge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { companySeal, divisionInsignias, foundingDayPlaque, missionRibbons, operationFirstRevenuePatch, type DivisionInsignia, type IdentityAccent, type MissionRibbon } from "@/data/identitySystem";
import { cn } from "@/lib/utils";

const accentClasses: Record<IdentityAccent, { border: string; text: string; bg: string; line: string; glow: string }> = {
  amber: { border: "border-amber-300/35", text: "text-amber-200", bg: "bg-amber-300/10", line: "from-amber-200 via-yellow-300 to-cyan-300", glow: "shadow-[0_0_34px_rgba(251,191,36,0.14)]" },
  blue: { border: "border-blue-300/35", text: "text-blue-200", bg: "bg-blue-300/10", line: "from-blue-300 via-cyan-300 to-emerald-300", glow: "shadow-[0_0_34px_rgba(96,165,250,0.12)]" },
  cyan: { border: "border-cyan-300/35", text: "text-cyan-200", bg: "bg-cyan-300/10", line: "from-cyan-300 via-blue-300 to-purple-300", glow: "shadow-[0_0_34px_rgba(34,211,238,0.14)]" },
  emerald: { border: "border-emerald-300/35", text: "text-emerald-200", bg: "bg-emerald-300/10", line: "from-emerald-300 via-cyan-300 to-blue-300", glow: "shadow-[0_0_34px_rgba(52,211,153,0.12)]" },
  magenta: { border: "border-fuchsia-300/35", text: "text-fuchsia-200", bg: "bg-fuchsia-300/10", line: "from-fuchsia-300 via-pink-300 to-red-300", glow: "shadow-[0_0_34px_rgba(217,70,239,0.12)]" },
  purple: { border: "border-purple-300/35", text: "text-purple-200", bg: "bg-purple-300/10", line: "from-purple-300 via-fuchsia-300 to-cyan-300", glow: "shadow-[0_0_34px_rgba(168,85,247,0.12)]" },
  red: { border: "border-red-300/35", text: "text-red-200", bg: "bg-red-300/10", line: "from-red-300 via-fuchsia-300 to-amber-300", glow: "shadow-[0_0_34px_rgba(248,113,113,0.12)]" },
};

export function CompanySeal() {
  return (
    <Card className="relative overflow-hidden border-cyan-300/35 bg-cyan-950/15 shadow-[0_0_64px_rgba(34,211,238,0.16)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_25%,rgba(34,211,238,0.18),transparent_18rem)]" />
      <CardContent className="relative flex flex-col items-center justify-center gap-4 p-6 text-center">
        <div className="flex h-28 w-28 items-center justify-center rounded-full border border-cyan-300/40 bg-background/60 shadow-[0_0_42px_rgba(34,211,238,0.22)]">
          <div className="flex h-20 w-20 items-center justify-center rounded-full border border-amber-300/35 bg-cyan-300/10">
            <Landmark className="h-9 w-9 text-cyan-100" />
          </div>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200">{companySeal.subtitle}</p>
          <h3 className="mt-2 font-display text-3xl font-semibold text-cyan-50">{companySeal.name}</h3>
          <p className="mt-2 text-sm text-muted-foreground">Founded {companySeal.foundingDate}</p>
        </div>
        <div className="rounded-md border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100">{companySeal.motto}</div>
      </CardContent>
    </Card>
  );
}

export function FoundingDayPlaque() {
  return (
    <Card className="border-amber-300/35 bg-amber-950/15 shadow-[0_0_44px_rgba(251,191,36,0.12)]">
      <CardHeader className="flex-row items-start gap-3">
        <BadgeCheck className="mt-1 h-5 w-5 text-amber-200" />
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-200">{foundingDayPlaque.date}</p>
          <CardTitle className="mt-2 text-2xl text-amber-100">{foundingDayPlaque.title}</CardTitle>
          <CardDescription>{foundingDayPlaque.authority}</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <p className="rounded-md border border-amber-300/20 bg-background/50 p-4 text-sm leading-6 text-foreground/90">{foundingDayPlaque.inscription}</p>
      </CardContent>
    </Card>
  );
}

export function CampaignPatch() {
  return (
    <Card className="overflow-hidden border-emerald-300/35 bg-emerald-950/15 shadow-[0_0_44px_rgba(52,211,153,0.12)]">
      <div className="h-1 bg-gradient-to-r from-emerald-300 via-cyan-300 to-amber-300" />
      <CardHeader>
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-200">Campaign Patch</p>
            <CardTitle className="mt-2 text-2xl text-emerald-100">{operationFirstRevenuePatch.title}</CardTitle>
          </div>
          <Award className="h-6 w-6 text-emerald-200" />
        </div>
        <CardDescription>{operationFirstRevenuePatch.objective}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <IdentityLine label="Commander" value={operationFirstRevenuePatch.commander} />
        <IdentityLine label="Status" value={operationFirstRevenuePatch.status} />
        <IdentityLine label="Doctrine" value={operationFirstRevenuePatch.doctrine} />
      </CardContent>
    </Card>
  );
}

export function DivisionInsigniaGrid() {
  return (
    <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
      {divisionInsignias.map((division) => <DivisionInsigniaCard key={division.id} division={division} />)}
    </div>
  );
}

export function DivisionInsigniaCard({ division }: { division: DivisionInsignia }) {
  const accent = accentClasses[division.accent];
  return (
    <Card className={cn("overflow-hidden bg-card/80", accent.border, accent.glow)}>
      <div className={cn("h-1 bg-gradient-to-r", accent.line)} />
      <CardHeader className="flex-row items-center gap-3">
        <span className={cn("flex h-12 w-12 items-center justify-center rounded-md border text-2xl", accent.border, accent.bg)}>{division.symbol}</span>
        <div>
          <CardTitle className="text-lg">{division.name}</CardTitle>
          <CardDescription>{division.motto}</CardDescription>
        </div>
      </CardHeader>
    </Card>
  );
}

export function MissionRibbonRack() {
  return (
    <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
      {missionRibbons.map((ribbon) => <MissionRibbonCard key={ribbon.id} ribbon={ribbon} />)}
    </div>
  );
}

function MissionRibbonCard({ ribbon }: { ribbon: MissionRibbon }) {
  const accent = accentClasses[ribbon.accent];
  const tone = ribbon.status === "Recorded" ? "success" : ribbon.status === "Awaiting Evidence" ? "manual" : "beta";
  return (
    <Card className={cn("overflow-hidden bg-card/80", accent.border)}>
      <div className={cn("h-2 bg-gradient-to-r", accent.line)} />
      <CardHeader>
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className={cn("text-xs font-semibold uppercase tracking-[0.16em]", accent.text)}>Mission Ribbon</p>
            <CardTitle className="mt-2 text-lg">{ribbon.label}</CardTitle>
          </div>
          <StatusBadge label={ribbon.status} tone={tone} />
        </div>
        <CardDescription>{ribbon.awardedFor}</CardDescription>
      </CardHeader>
    </Card>
  );
}

export function OfficerBadgeShell({ emoji, name, role, status }: { emoji: string; name: string; role: string; status: string }) {
  return (
    <div className="rounded-md border border-cyan-300/25 bg-background/50 p-3">
      <div className="flex items-center gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-md border border-cyan-300/30 bg-cyan-300/10 text-2xl">{emoji}</span>
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-cyan-100">{name}</p>
          <p className="truncate text-xs text-muted-foreground">{role}</p>
        </div>
      </div>
      <div className="mt-3 flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-muted-foreground">
        <CircleDot className="h-3.5 w-3.5 text-cyan-200" /> {status}
      </div>
    </div>
  );
}

export function IdentityLine({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-3 rounded-md border border-border/70 bg-background/50 px-3 py-2 text-sm">
      <span className="text-muted-foreground">{label}</span>
      <span className="text-right text-foreground/90">{value}</span>
    </div>
  );
}
