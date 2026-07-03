import { useEffect, useMemo, useState } from "react";
import { AppShell } from "@/components/layout/AppShell";
import { AlphaLab } from "@/pages/AlphaLab";
import { Academy } from "@/pages/Academy";
import { Bridge } from "@/pages/Bridge";
import { Commerce } from "@/pages/Commerce";
import { Dashboard } from "@/pages/Dashboard";
import { DailyCommandBrief } from "@/pages/DailyCommandBrief";
import { HermesAgents } from "@/pages/HermesAgents";
import { IntelligenceCorps } from "@/pages/IntelligenceCorps";
import { RevenueCorps } from "@/pages/RevenueCorps";
import { KnowledgeVault } from "@/pages/KnowledgeVault";
import { LaunchCenter } from "@/pages/LaunchCenter";
import { MissionControl } from "@/pages/MissionControl";
import { MissionPipeline } from "@/pages/MissionPipeline";
import { OpportunityRadar } from "@/pages/OpportunityRadar";
import { OperationsHub } from "@/pages/OperationsHub";
import { Playbooks } from "@/pages/Playbooks";
import { Programs } from "@/pages/Programs";
import { QuantResearchScouts } from "@/pages/QuantResearchScouts";
import { ResearchScheduler } from "@/pages/ResearchScheduler";
import { ResearchRouter } from "@/pages/ResearchRouter";
import { Research } from "@/pages/Research";
import { RevenueIntelligence } from "@/pages/RevenueIntelligence";
import { ScoutReports } from "@/pages/ScoutReports";
import { SettingsPage } from "@/pages/Settings";
import { Trading } from "@/pages/Trading";
import { TradingResearchCorps } from "@/pages/TradingResearchCorps";
import { WarRoom } from "@/pages/WarRoom";
import { WorldMap } from "@/pages/WorldMap";
import { Council } from "@/pages/Council";

export type PageId =
  | "daily-command-brief"
  | "dashboard"
  | "mission-control"
  | "operations-hub"
  | "bridge"
  | "launch-center"
  | "mission-pipeline"
  | "opportunity-radar"
  | "academy"
  | "playbooks"
  | "world-map"
  | "council"
  | "trading"
  | "trading-research-corps"
  | "alpha-lab"
  | "quant-research-scouts"
  | "research-scheduler"
  | "intelligence-corps"
  | "research-router"
  | "commerce"
  | "revenue-corps"
  | "scout-reports"
  | "revenue-intelligence"
  | "hermes-agents"
  | "research"
  | "war-room"
  | "knowledge-vault"
  | "programs"
  | "settings";

const pages: Record<PageId, JSX.Element> = {
  "daily-command-brief": <DailyCommandBrief />,
  dashboard: <Dashboard />,
  "mission-control": <MissionControl />,
  "operations-hub": <OperationsHub />,
  bridge: <Bridge />,
  "launch-center": <LaunchCenter />,
  "mission-pipeline": <MissionPipeline />,
  "opportunity-radar": <OpportunityRadar />,
  academy: <Academy />,
  playbooks: <Playbooks />,
  "world-map": <WorldMap />,
  council: <Council />,
  trading: <Trading />,
  "trading-research-corps": <TradingResearchCorps />,
  "alpha-lab": <AlphaLab />,
  "quant-research-scouts": <QuantResearchScouts />,
  "research-scheduler": <ResearchScheduler />,
  "intelligence-corps": <IntelligenceCorps />,
  "research-router": <ResearchRouter />,
  commerce: <Commerce />,
  "revenue-corps": <RevenueCorps />,
  "scout-reports": <ScoutReports />,
  "revenue-intelligence": <RevenueIntelligence />,
  "hermes-agents": <HermesAgents />,
  research: <Research />,
  "war-room": <WarRoom />,
  "knowledge-vault": <KnowledgeVault />,
  programs: <Programs />,
  settings: <SettingsPage />,
};

export function App() {
  const [activePage, setActivePage] = useState<PageId>("daily-command-brief");
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
