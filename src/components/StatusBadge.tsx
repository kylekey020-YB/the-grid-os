import { Badge } from "@/components/ui/badge";
type StatusTone = "default" | "manual" | "success" | "danger" | "muted" | "beta";
export function StatusBadge({ label, tone = "default" }: { label: string; tone?: StatusTone }) { return <Badge variant={tone} className="uppercase tracking-[0.12em]">{label}</Badge>; }
