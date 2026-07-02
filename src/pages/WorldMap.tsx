import { ArrowRight, Compass, Map, ShieldCheck, Sparkles } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { StatusBadge } from "@/components/StatusBadge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { gridDistricts, worldMapDoctrine, worldSpaces, type DistrictAccent, type GridDistrict, type WorldSpace, type WorldStatus } from "@/data/gridWorld";
import { cn } from "@/lib/utils";

const accentClasses: Record<DistrictAccent, { border: string; text: string; bg: string; glow: string; line: string }> = {
  cyan: { border: "border-cyan-300/35", text: "text-cyan-200", bg: "bg-cyan-300/10", glow: "hover:shadow-[0_0_34px_rgba(34,211,238,0.20)]", line: "from-cyan-300 via-blue-300 to-purple-300" },
  blue: { border: "border-blue-300/35", text: "text-blue-200", bg: "bg-blue-300/10", glow: "hover:shadow-[0_0_34px_rgba(96,165,250,0.18)]", line: "from-blue-300 via-cyan-300 to-emerald-300" },
  purple: { border: "border-purple-300/35", text: "text-purple-200", bg: "bg-purple-300/10", glow: "hover:shadow-[0_0_34px_rgba(216,180,254,0.18)]", line: "from-purple-300 via-fuchsia-300 to-cyan-300" },
  magenta: { border: "border-fuchsia-300/35", text: "text-fuchsia-200", bg: "bg-fuchsia-300/10", glow: "hover:shadow-[0_0_34px_rgba(217,70,239,0.18)]", line: "from-fuchsia-300 via-pink-300 to-red-300" },
  red: { border: "border-red-300/35", text: "text-red-200", bg: "bg-red-300/10", glow: "hover:shadow-[0_0_34px_rgba(248,113,113,0.18)]", line: "from-red-300 via-fuchsia-300 to-amber-300" },
  gold: { border: "border-amber-300/35", text: "text-amber-200", bg: "bg-amber-300/10", glow: "hover:shadow-[0_0_34px_rgba(251,191,36,0.18)]", line: "from-amber-200 via-yellow-300 to-cyan-300" },
  emerald: { border: "border-emerald-300/35", text: "text-emerald-200", bg: "bg-emerald-300/10", glow: "hover:shadow-[0_0_34px_rgba(52,211,153,0.18)]", line: "from-emerald-300 via-cyan-300 to-blue-300" },
};

const statusTone: Record<WorldStatus, "success" | "manual" | "beta" | "muted"> = {
  Active: "success",
  Planned: "beta",
  Research: "manual",
  Parked: "muted",
  "Pending Integration": "manual",
  "Manual Only": "manual",
  "Read-Only": "beta",
};

export function WorldMap() {
  return (
    <div className="space-y-7">
      <section className="relative overflow-hidden rounded-lg border border-cyan-300/25 bg-card/80 p-6 shadow-[0_0_80px_rgba(34,211,238,0.12)] md:p-8">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.16),transparent_26rem),linear-gradient(rgba(34,211,238,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(96,165,250,0.05)_1px,transparent_1px)] bg-[size:auto,40px_40px,40px_40px]" />
        <div className="relative grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-cyan-200"><Map className="h-3.5 w-3.5" /> v0.6 World Map</div>
            <div className="space-y-3"><h1 className="font-display text-4xl font-semibold leading-tight md:text-6xl">Grid World Map</h1><p className="max-w-3xl text-base leading-7 text-muted-foreground md:text-lg">A visual map of THE GRID's districts, arenas, and advisory spaces. This is information architecture only: no backend, no live integrations, no autonomous execution.</p></div>
          </div>
          <Card className="border-purple-300/30 bg-purple-950/15"><CardHeader className="flex-row items-start gap-3"><ShieldCheck className="mt-1 h-5 w-5 text-purple-200" /><div><CardTitle className="text-purple-100">World Doctrine</CardTitle><CardDescription>{worldMapDoctrine}</CardDescription></div></CardHeader></Card>
        </div>
      </section>

      <section className="space-y-4"><SectionHeader eyebrow="Districts" title="Travel through THE GRID" description="Each district is a separate arena with its own purpose, watcher, and safety boundary." /><div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">{gridDistricts.map((district) => <DistrictCard key={district.id} district={district} />)}</div></section>

      <section className="space-y-4"><SectionHeader eyebrow="World Spaces" title="Planning and memory areas" description="Immersive spaces for review, strategy, validated wins, and parked experiments. No fake milestones or synthetic activity." /><div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">{worldSpaces.map((space) => <WorldSpaceCard key={space.id} space={space} />)}</div></section>
    </div>
  );
}

function DistrictCard({ district }: { district: GridDistrict }) {
  const accent = accentClasses[district.accent];
  return <Card className={cn("group overflow-hidden transition duration-300", accent.border, accent.glow)}><div className={cn("h-1 bg-gradient-to-r", accent.line)} /><CardHeader><div className="flex items-start justify-between gap-3"><div className="flex items-center gap-3"><span className={cn("flex h-12 w-12 items-center justify-center rounded-md border text-2xl", accent.border, accent.bg)}>{district.emoji}</span><div><p className={cn("text-xs font-semibold uppercase tracking-[0.16em]", accent.text)}>{district.connectedWatcher}</p><CardTitle className="mt-1 text-xl">{district.name}</CardTitle></div></div><StatusBadge label={district.currentStatus} tone={statusTone[district.currentStatus]} /></div><CardDescription>{district.purpose}</CardDescription></CardHeader><CardContent className="flex items-center justify-between gap-3"><div className="flex items-center gap-2 text-xs text-muted-foreground"><Compass className="h-3.5 w-3.5" /> District route placeholder</div><Button variant="outline" size="sm" disabled><ArrowRight className="h-4 w-4" />Enter district</Button></CardContent></Card>;
}

function WorldSpaceCard({ space }: { space: WorldSpace }) {
  const accent = accentClasses[space.accent];
  return <Card className={cn("overflow-hidden", accent.border)}><div className={cn("h-1 bg-gradient-to-r", accent.line)} /><CardHeader><div className="flex items-start justify-between gap-3"><span className={cn("flex h-11 w-11 items-center justify-center rounded-md border text-2xl", accent.border, accent.bg)}>{space.emoji}</span><StatusBadge label={space.status} tone={statusTone[space.status]} /></div><CardTitle className="text-lg">{space.name}</CardTitle><CardDescription>{space.purpose}</CardDescription></CardHeader><CardContent><div className="rounded-md border border-border/70 bg-background/50 p-3 text-sm leading-6 text-foreground/90"><Sparkles className={cn("mb-2 h-4 w-4", accent.text)} />{space.safetyNote}</div></CardContent></Card>;
}
