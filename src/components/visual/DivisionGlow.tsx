import { divisionAccents, type DivisionAccent } from "@/data/designTokens";
import { cn } from "@/lib/utils";

export function DivisionGlow({ accent = "cyan", className }: { accent?: DivisionAccent; className?: string }) {
  const token = divisionAccents[accent];
  return <span className={cn("grid-led", token.led, className)} aria-hidden="true" />;
}
