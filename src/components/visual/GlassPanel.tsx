import type { HTMLAttributes } from "react";
import { divisionAccents, type DivisionAccent } from "@/data/designTokens";
import { cn } from "@/lib/utils";

export function GlassPanel({ accent = "cyan", className, children, ...props }: HTMLAttributes<HTMLDivElement> & { accent?: DivisionAccent }) {
  const token = divisionAccents[accent];

  return (
    <div className={cn("grid-glass-panel", token.border, className)} {...props}>
      <div className={cn("grid-glass-panel__line bg-gradient-to-r", token.gradient)} />
      {children}
    </div>
  );
}
