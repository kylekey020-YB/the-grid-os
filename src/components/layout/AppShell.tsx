import { AnimatePresence, motion } from "framer-motion";
import { useState, type ReactNode } from "react";
import { MobileNav } from "@/components/layout/MobileNav";
import { Sidebar } from "@/components/layout/Sidebar";
import { TopNav } from "@/components/layout/TopNav";
import type { PageId } from "@/App";

export function AppShell({
  activePage,
  onNavigate,
  time,
  theme,
  onToggleTheme,
  children,
}: {
  activePage: PageId;
  onNavigate: (page: PageId) => void;
  time: string;
  theme: "dark" | "light";
  onToggleTheme: () => void;
  children: ReactNode;
}) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="grid-surface pointer-events-none absolute inset-0" />
      <div className="relative flex min-h-screen">
        <Sidebar
          activePage={activePage}
          collapsed={collapsed}
          onNavigate={onNavigate}
          onToggle={() => setCollapsed((value) => !value)}
        />
        <div className="min-w-0 flex-1">
          <TopNav time={time} theme={theme} onToggleTheme={onToggleTheme} />
          <main className="mx-auto w-full max-w-7xl px-4 pb-24 pt-6 md:px-6 lg:py-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activePage}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
              >
                {children}
              </motion.div>
            </AnimatePresence>
          </main>
        </div>
      </div>
      <MobileNav activePage={activePage} onNavigate={onNavigate} />
    </div>
  );
}
