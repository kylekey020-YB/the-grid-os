import { Menu, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { navItems } from "@/data/navigation";
import { cn } from "@/lib/utils";
import type { PageId } from "@/App";

export function Sidebar({
  activePage,
  collapsed,
  onNavigate,
  onToggle,
}: {
  activePage: PageId;
  collapsed: boolean;
  onNavigate: (page: PageId) => void;
  onToggle: () => void;
}) {
  return (
    <aside
      className={cn(
        "hidden border-r border-border/70 bg-background/75 backdrop-blur-xl transition-all duration-300 lg:flex lg:flex-col",
        collapsed ? "lg:w-[86px]" : "lg:w-72",
      )}
    >
      <div className="flex h-16 items-center gap-3 px-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-md border border-primary/30 bg-primary/10 shadow-glow">
          <Shield className="h-5 w-5 text-primary" />
        </div>
        {!collapsed ? (
          <div>
            <p className="font-display text-sm font-semibold">THE GRID</p>
            <p className="text-xs text-muted-foreground">OS v0.1</p>
          </div>
        ) : null}
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
            <button
              key={item.id}
              type="button"
              onClick={() => onNavigate(item.id)}
              className={cn(
                "flex h-11 w-full items-center gap-3 rounded-md px-3 text-left text-sm transition",
                active
                  ? "bg-primary/10 text-primary shadow-glow"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground",
                collapsed && "justify-center px-0",
              )}
              title={collapsed ? item.label : undefined}
            >
              <Icon className="h-4 w-4 shrink-0" />
              {!collapsed ? <span className="truncate">{item.label}</span> : null}
            </button>
          );
        })}
      </nav>
      <div className="p-4">
        <div className={cn("rounded-md border border-border/70 bg-card/70 p-3", collapsed && "px-2 text-center")}>
          <div className="mx-auto h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_18px_rgba(110,231,183,0.9)]" />
          {!collapsed ? (
            <p className="mt-2 text-xs text-muted-foreground">System shell online. Awaiting validated workflows.</p>
          ) : null}
        </div>
      </div>
    </aside>
  );
}
