export type DivisionAccent = "cyan" | "blue" | "purple" | "magenta" | "red" | "gold" | "emerald";

export const divisionAccents: Record<DivisionAccent, { label: string; text: string; border: string; bg: string; glow: string; led: string; gradient: string }> = {
  cyan: { label: "Operations", text: "text-cyan-200", border: "border-cyan-300/35", bg: "bg-cyan-300/10", glow: "shadow-[0_0_34px_rgba(34,211,238,0.18)]", led: "bg-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.86)]", gradient: "from-cyan-300 via-blue-300 to-purple-300" },
  blue: { label: "Knowledge", text: "text-blue-200", border: "border-blue-300/35", bg: "bg-blue-300/10", glow: "shadow-[0_0_34px_rgba(96,165,250,0.16)]", led: "bg-blue-300 shadow-[0_0_18px_rgba(96,165,250,0.78)]", gradient: "from-blue-300 via-cyan-300 to-emerald-300" },
  purple: { label: "Architecture", text: "text-purple-200", border: "border-purple-300/35", bg: "bg-purple-300/10", glow: "shadow-[0_0_34px_rgba(216,180,254,0.16)]", led: "bg-purple-300 shadow-[0_0_18px_rgba(216,180,254,0.8)]", gradient: "from-purple-300 via-fuchsia-300 to-cyan-300" },
  magenta: { label: "Signal", text: "text-fuchsia-200", border: "border-fuchsia-300/35", bg: "bg-fuchsia-300/10", glow: "shadow-[0_0_34px_rgba(217,70,239,0.16)]", led: "bg-fuchsia-300 shadow-[0_0_18px_rgba(217,70,239,0.78)]", gradient: "from-fuchsia-300 via-pink-300 to-red-300" },
  red: { label: "Safety", text: "text-red-200", border: "border-red-300/35", bg: "bg-red-300/10", glow: "shadow-[0_0_34px_rgba(248,113,113,0.16)]", led: "bg-red-300 shadow-[0_0_18px_rgba(248,113,113,0.78)]", gradient: "from-red-300 via-fuchsia-300 to-amber-300" },
  gold: { label: "Commerce", text: "text-amber-200", border: "border-amber-300/35", bg: "bg-amber-300/10", glow: "shadow-[0_0_34px_rgba(251,191,36,0.16)]", led: "bg-amber-300 shadow-[0_0_18px_rgba(251,191,36,0.78)]", gradient: "from-amber-200 via-yellow-300 to-cyan-300" },
  emerald: { label: "Verified", text: "text-emerald-200", border: "border-emerald-300/35", bg: "bg-emerald-300/10", glow: "shadow-[0_0_34px_rgba(52,211,153,0.16)]", led: "bg-emerald-300 shadow-[0_0_18px_rgba(52,211,153,0.78)]", gradient: "from-emerald-300 via-cyan-300 to-blue-300" },
};

export type OfficerKey = "zenith" | "sentinel" | "apex" | "clu" | "gauntlet" | "merchant" | "quartermaster" | "archivist" | "grid";

export const officerProfiles: Record<OfficerKey, { name: string; role: string; accent: DivisionAccent; initials: string }> = {
  zenith: { name: "ZENITH", role: "Systems Architect", accent: "purple", initials: "ZN" },
  sentinel: { name: "SENTINEL", role: "Safety Monitor", accent: "red", initials: "ST" },
  apex: { name: "APEX WARDEN", role: "Trading Research Monitor", accent: "cyan", initials: "AW" },
  clu: { name: "CLU STRIKER", role: "Paper Shot Monitor", accent: "blue", initials: "CS" },
  gauntlet: { name: "GAUNTLET", role: "Backtest Monitor", accent: "emerald", initials: "GT" },
  merchant: { name: "MERCHANT FORGE", role: "Commerce Validation Monitor", accent: "gold", initials: "MF" },
  quartermaster: { name: "QUARTERMASTER", role: "Resource Constraint Monitor", accent: "gold", initials: "QM" },
  archivist: { name: "ARCHIVIST", role: "Knowledge Monitor", accent: "blue", initials: "AR" },
  grid: { name: "GRID CORE", role: "UI Foundation", accent: "cyan", initials: "GC" },
};
