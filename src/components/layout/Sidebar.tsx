
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { DivisionGlow } from "@/components/visual/DivisionGlow";
import { OfficerBadge } from "@/components/visual/OfficerBadge";
import { navItems } from "@/data/navigation";
import { cn } from "@/lib/utils";
import type { PageId } from "@/App";

export function Sidebar({ activePage, collapsed, onNavigate, onToggle }: { activePage: PageId; collapsed: boolean; onNavigate: (page: PageId) => void; onToggle: () => void; }) {
  return (
    <aside className={cn("hidden border-r border-cyan-300/15 bg-background/72 shadow-[18px_0_80px_rgba(0,0,0,0.28)] backdrop-blur-2xl transition-all duration-300 lg:flex lg:flex-col", collapsed ? "lg:w-[86px]" : "lg:w-72")}>
      <div className="flex h-16 items-center gap-3 px-4">
        <OfficerBadge officer="grid" compact={collapsed} />
        <Button variant="ghost" size="icon" className="ml-auto" onClick={onToggle} aria-label="Collapse sidebar">
          <Menu className="h-4 w-4" />
        </Button>
      </div>
      <Separator />
      <nav className="flex-1 space-y-1 p-3">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = activePage === item.id;
          return (
            <button key={item.id} type="button" onClick={() => onNavigate(item.id)} className={cn("flex h-11 w-full items-center gap-3 rounded-md border px-3 text-left text-sm transition", active ? "border-primary/25 bg-primary/10 text-primary shadow-glow" : "border-transparent text-muted-foreground hover:border-border/70 hover:bg-muted/70 hover:text-foreground", collapsed && "justify-center px-0")} title={collapsed ? item.label : undefined}>
              <Icon className="h-4 w-4 shrink-0" />
              {!collapsed ? <span className="truncate">{item.label}</span> : null}
            </button>
          );
        })}
      </nav>
      <div className="p-4">
        <div className={cn("rounded-md border border-cyan-300/15 bg-card/70 p-3 shadow-glass", collapsed && "px-2 text-center")}>
          <DivisionGlow accent="emerald" className="mx-auto" />
          {!collapsed ? <p className="mt-2 text-xs text-muted-foreground">System shell online. Awaiting validated workflows.</p> : null}
        </div>
      </div>
    </aside>
  );
}
