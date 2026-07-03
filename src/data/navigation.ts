import {
  BarChart3,
  Bot,
  BookOpen,
  BookOpenCheck,
  BrainCircuit,
  CalendarClock,
  FileSearch,
  FlaskConical,
  GitBranch,
  Home,
  Landmark,
  Microscope,
  Map,
  Network,
  Radar,
  Rocket,
  Route,
  Settings,
  Sigma,
  UsersRound,
  CircleDollarSign,
  ClipboardCheck,
  ClipboardList,
  DollarSign,
  ShoppingCart,
  Swords,
  Target,
} from "lucide-react";
import type { ElementType } from "react";
import type { PageId } from "@/App";

export type NavItem = {
  id: PageId;
  label: string;
  icon: ElementType;
};

export const navItems: NavItem[] = [
  { id: "daily-command-brief", label: "Command Brief", icon: ClipboardCheck },
  { id: "dashboard", label: "Dashboard", icon: Home },
  { id: "mission-control", label: "Mission Control", icon: Radar },
  { id: "operations-hub", label: "Operations Hub", icon: ClipboardList },
  { id: "bridge", label: "The Bridge", icon: Network },
  { id: "launch-center", label: "Launch Center", icon: Rocket },
  { id: "mission-pipeline", label: "Mission Pipeline", icon: GitBranch },
  { id: "opportunity-radar", label: "Opportunity Radar", icon: Target },
  { id: "academy", label: "The Academy", icon: Landmark },
  { id: "playbooks", label: "Playbooks", icon: BookOpenCheck },
  { id: "world-map", label: "World Map", icon: Map },
  { id: "council", label: "Council", icon: UsersRound },
  { id: "trading", label: "Trading", icon: BarChart3 },
  { id: "trading-research-corps", label: "Trading Research", icon: Sigma },
  { id: "alpha-lab", label: "Alpha Lab", icon: Microscope },
  { id: "quant-research-scouts", label: "Quant Scouts", icon: FileSearch },
  { id: "research-scheduler", label: "Research Scheduler", icon: CalendarClock },
  { id: "intelligence-corps", label: "Intelligence Corps", icon: Network },
  { id: "research-router", label: "Research Router", icon: Route },
  { id: "commerce", label: "Commerce", icon: ShoppingCart },
  { id: "revenue-corps", label: "Revenue Corps", icon: DollarSign },
  { id: "scout-reports", label: "Scout Reports", icon: FileSearch },
  { id: "revenue-intelligence", label: "Revenue Intelligence", icon: CircleDollarSign },
  { id: "hermes-agents", label: "Hermes Agents", icon: Bot },
  { id: "research", label: "Research", icon: FlaskConical },
  { id: "war-room", label: "War Room", icon: Swords },
  { id: "knowledge-vault", label: "Knowledge Vault", icon: BookOpen },
  { id: "programs", label: "Programs", icon: BrainCircuit },
  { id: "settings", label: "Settings", icon: Settings },
];

export const mobileNavItems = navItems.filter((item) =>
  ["daily-command-brief", "operations-hub", "mission-control", "launch-center", "settings"].includes(item.id),
);
