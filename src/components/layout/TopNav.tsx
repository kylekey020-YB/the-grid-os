
import { Bell, Moon, Sun, UserRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StatusBadge } from "@/components/StatusBadge";

export function TopNav({ time, theme, onToggleTheme }: { time: string; theme: "dark" | "light"; onToggleTheme: () => void }) {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-3 border-b border-cyan-300/15 bg-background/72 px-4 shadow-[0_18px_70px_rgba(0,0,0,0.22)] backdrop-blur-2xl md:px-6">
      <div className="min-w-0 flex-1">
        <p className="font-display text-sm font-semibold tracking-[0.08em] text-cyan-100 md:text-base">THE GRID</p>
        <p className="truncate text-xs text-muted-foreground">Visual operating system foundation</p>
      </div>
      <div className="hidden items-center gap-3 md:flex">
        <span className="font-mono text-xs text-muted-foreground">{time}</span>
        <StatusBadge label="Development Mode" tone="beta" />
        <StatusBadge label="System Online" tone="success" />
      </div>
      <Button variant="ghost" size="icon" onClick={onToggleTheme} aria-label="Toggle theme">{theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}</Button>
      <Button variant="ghost" size="icon" aria-label="Notifications placeholder"><Bell className="h-4 w-4" /></Button>
      <Button variant="outline" size="sm" className="hidden md:inline-flex"><UserRound className="h-4 w-4" />Mission Commander</Button>
    </header>
  );
}
