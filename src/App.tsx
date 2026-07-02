import { useEffect, useMemo, useState } from "react";
import { AppShell } from "@/components/layout/AppShell";
import { Commerce } from "@/pages/Commerce";
import { Dashboard } from "@/pages/Dashboard";
import { KnowledgeVault } from "@/pages/KnowledgeVault";
import { MissionControl } from "@/pages/MissionControl";
import { Programs } from "@/pages/Programs";
import { Research } from "@/pages/Research";
import { SettingsPage } from "@/pages/Settings";
import { Trading } from "@/pages/Trading";
import { WarRoom } from "@/pages/WarRoom";

export type PageId =
  | "dashboard"
  | "mission-control"
  | "trading"
  | "commerce"
  | "research"
  | "war-room"
  | "knowledge-vault"
  | "programs"
  | "settings";

const pages: Record<PageId, JSX.Element> = {
  dashboard: <Dashboard />,
  "mission-control": <MissionControl />,
  trading: <Trading />,
  commerce: <Commerce />,
  research: <Research />,
  "war-room": <WarRoom />,
  "knowledge-vault": <KnowledgeVault />,
  programs: <Programs />,
  settings: <SettingsPage />,
};

export function App() {
  const [activePage, setActivePage] = useState<PageId>("dashboard");
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    document.documentElement.classList.toggle("light", theme === "light");
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  useEffect(() => {
    const timer = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  const time = useMemo(
    () => now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" }),
    [now],
  );

  return (
    <AppShell
      activePage={activePage}
      onNavigate={setActivePage}
      time={time}
      theme={theme}
      onToggleTheme={() => setTheme((value) => (value === "dark" ? "light" : "dark"))}
    >
      {pages[activePage]}
    </AppShell>
  );
}
