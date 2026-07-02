import { AlertTriangle, Bot, CheckCircle2, FileText, LockKeyhole, RadioTower, ShieldCheck, type LucideIcon } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { StatusBadge } from "@/components/StatusBadge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { hermesAgentProfiles, hermesAutonomyLevels, hermesDoctrine, hermesHardRules, type HermesAgentProfile, type HermesProfileStatus } from "@/data/hermesAgents";

const statusTone: Record<HermesProfileStatus, "success" | "manual" | "beta"> = { "Read-Only": "success", Planned: "manual", "Pending Integration": "beta" };

export function HermesAgents() {
  return (
    <div className="space-y-7">
      <section className="relative overflow-hidden rounded-lg border border-cyan-300/25 bg-card/80 p-6 shadow-[0_0_80px_rgba(34,211,238,0.12)] md:p-8">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_22%_20%,rgba(34,211,238,0.18),transparent_26rem),linear-gradient(rgba(34,211,238,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.05)_1px,transparent_1px)] bg-[size:auto,40px_40px,40px_40px]" />
        <div className="relative grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-cyan-200"><Bot className="h-3.5 w-3.5" /> v0.9 Hermes</div>
            <div className="space-y-3"><h1 className="font-display text-4xl font-semibold leading-tight md:text-6xl">Hermes Agents</h1><p className="max-w-3xl text-base leading-7 text-muted-foreground md:text-lg">Prepared live-agent profiles for future specialist workflows. No accounts are connected and no external action is authorized.</p></div>
          </div>
          <Card className="border-red-300/30 bg-red-950/15"><CardHeader className="flex-row items-start gap-3"><LockKeyhole className="mt-1 h-5 w-5 text-red-200" /><div><CardTitle className="text-red-100">Action Lock Active</CardTitle><CardDescription>No autonomous publishing, messaging, spending, trading, account automation, or marketplace interaction. Level 5 money/actions are forbidden for now.</CardDescription></div></CardHeader></Card>
        </div>
      </section>

      <section className="space-y-4"><SectionHeader eyebrow="Doctrine" title="Prepared profiles, not live agents" description="Hermes defines future specialist boundaries before any account connection exists." /><div className="grid gap-3 md:grid-cols-2 xl:grid-cols-5">{hermesDoctrine.map((item) => <div key={item} className="rounded-md border border-cyan-300/20 bg-cyan-300/10 p-3 text-sm leading-6 text-cyan-100">{item}</div>)}</div></section>
      <section className="space-y-4"><SectionHeader eyebrow="Autonomy Ladder" title="Explicit approval boundaries" description="Levels describe what may be prepared later. They do not grant live execution." /><div className="grid gap-4 lg:grid-cols-5">{hermesAutonomyLevels.map((level) => <Card key={level.id} className="border-blue-300/20 bg-card/80"><CardHeader><CardTitle className="text-lg">{level.name}</CardTitle><CardDescription>{level.summary}</CardDescription></CardHeader><CardContent className="space-y-3"><Info label="Allowed" value={level.allowed} icon={CheckCircle2} /><Info label="Boundary" value={level.boundary} icon={ShieldCheck} /></CardContent></Card>)}</div></section>
      <section className="space-y-4"><SectionHeader eyebrow="Profiles" title="Hermes specialist profiles" description="Each profile includes placeholders for Telegram, SOUL.md, playbooks, recurring jobs, and approval gates." /><div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-3">{hermesAgentProfiles.map((profile) => <ProfileCard key={profile.id} profile={profile} />)}</div></section>
      <section className="space-y-4"><SectionHeader eyebrow="Hard Rules" title="Blocked actions" description="These limits stay in force until a future mission explicitly approves a safer integration path." /><div className="grid gap-3 md:grid-cols-2 xl:grid-cols-5">{hermesHardRules.map((rule) => <div key={rule} className="rounded-md border border-red-300/25 bg-red-300/10 p-3 text-sm leading-6 text-red-100"><AlertTriangle className="mb-2 h-4 w-4 text-red-200" />{rule}</div>)}</div></section>
    </div>
  );
}

function ProfileCard({ profile }: { profile: HermesAgentProfile }) {
  return <Card className="overflow-hidden border-purple-300/25 bg-card/80"><div className="h-1 bg-gradient-to-r from-cyan-300 via-purple-300 to-emerald-300" /><CardHeader><div className="flex items-start justify-between gap-3"><div className="flex items-center gap-3"><span className="flex h-12 w-12 items-center justify-center rounded-md border border-purple-300/30 bg-purple-300/10 text-2xl">{profile.emoji}</span><div><p className="text-xs font-semibold uppercase tracking-[0.16em] text-purple-200">{profile.allowedAutonomyLevel}</p><CardTitle className="mt-1 text-lg">{profile.name}</CardTitle></div></div><StatusBadge label={profile.status} tone={statusTone[profile.status]} /></div><CardDescription>{profile.role}</CardDescription></CardHeader><CardContent className="space-y-3 text-sm"><Info label="Personality" value={profile.personality} icon={Bot} /><Info label="Telegram" value={profile.telegramBotPlaceholder} icon={RadioTower} /><Info label="SOUL.md" value={profile.soulMdPlaceholder} icon={FileText} /><Info label="Playbooks" value={profile.playbooksPlaceholder} icon={FileText} /><Info label="Recurring Jobs" value={profile.recurringJobsPlaceholder} icon={RadioTower} /><div className="rounded-md border border-border/70 bg-background/50 p-3"><p className="mb-2 text-xs uppercase tracking-[0.14em] text-muted-foreground">Approval Gates</p><div className="flex flex-wrap gap-2">{profile.approvalGates.map((gate) => <span key={gate} className="rounded-full border border-cyan-300/25 bg-cyan-300/10 px-2.5 py-1 text-xs text-cyan-100">{gate}</span>)}</div></div><div className="rounded-md border border-red-300/25 bg-red-300/10 p-3"><p className="mb-2 text-xs uppercase tracking-[0.14em] text-red-100/80">Prohibited Actions</p><p className="leading-6 text-red-100">{profile.prohibitedActions.join(" / ")}</p></div></CardContent></Card>;
}

function Info({ label, value, icon: Icon }: { label: string; value: string; icon: LucideIcon }) { return <div className="rounded-md border border-border/70 bg-background/50 p-3"><div className="mb-1 flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-muted-foreground"><Icon className="h-3.5 w-3.5 text-primary" />{label}</div><p className="leading-6 text-foreground/90">{value}</p></div>; }
