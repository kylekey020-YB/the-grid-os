import { cn } from "@/lib/utils";

export function DesignBackdrop({ className }: { className?: string }) {
  return (
    <div className={cn("grid-environment pointer-events-none absolute inset-0 overflow-hidden", className)} aria-hidden="true">
      <div className="grid-environment__aura" />
      <div className="grid-environment__scan" />
      <div className="grid-environment__plane-wrap">
        <div className="grid-environment__plane" />
      </div>
      <div className="grid-environment__vignette" />
    </div>
  );
}
