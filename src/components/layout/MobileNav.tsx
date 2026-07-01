import type { PageId } from "@/App";
import { mobileNavItems } from "@/data/navigation";
import { cn } from "@/lib/utils";

export function MobileNav({
  activePage,
  onNavigate,
}: {
  activePage: PageId;
  onNavigate: (page: PageId) => void;
}) {
  return (
    <nav className="fixed inset-x-3 bottom-3 z-40 rounded-lg border border-border/80 bg-background/90 p-1 shadow-panel backdrop-blur-xl lg:hidden">
      <div className="grid grid-cols-5 gap-1">
        {mobileNavItems.map((item) => {
          const Icon = item.icon;
          const active = activePage === item.id;

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onNavigate(item.id)}
              className={cn(
                "flex h-12 flex-col items-center justify-center gap-1 rounded-md text-[10px] font-medium transition",
                active
                  ? "bg-primary/10 text-primary shadow-glow"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground",
              )}
              aria-label={item.label}
            >
              <Icon className="h-4 w-4" />
              <span className="max-w-full truncate px-1">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
