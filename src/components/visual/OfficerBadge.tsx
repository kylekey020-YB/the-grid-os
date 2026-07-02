import { ShieldCheck } from "lucide-react";
import { divisionAccents, officerProfiles, type OfficerKey } from "@/data/designTokens";
import { cn } from "@/lib/utils";

export function OfficerBadge({ officer = "grid", compact = false, className }: { officer?: OfficerKey; compact?: boolean; className?: string }) {
  const profile = officerProfiles[officer];
  const accent = divisionAccents[profile.accent];

  return (
    <div className={cn("officer-badge", accent.border, accent.bg, accent.glow, compact && "officer-badge--compact", className)}>
      <div className={cn("officer-badge__mark", accent.text)}>
        <ShieldCheck className="h-4 w-4" />
        <span>{profile.initials}</span>
      </div>
      {!compact ? (
        <div className="min-w-0">
          <p className={cn("truncate text-xs font-semibold uppercase tracking-[0.16em]", accent.text)}>{profile.name}</p>
          <p className="truncate text-[11px] text-muted-foreground">{profile.role}</p>
        </div>
      ) : null}
    </div>
  );
}
