import {
  BarChart3,
  BookOpen,
  BrainCircuit,
  FlaskConical,
  Home,
  Map,
  Radar,
  Settings,
  UsersRound,
  DollarSign,
  ShoppingCart,
  Swords,
} from "lucide-react";
import type { ElementType } from "react";
import type { PageId } from "@/App";

export type NavItem = {
  id: PageId;
  label: string;
  icon: ElementType;
};

export const navItems: NavItem[] = [
  { id: "dashboard", label: "Dashboard", icon: Home },
  { id: "mission-control", label: "Mission Control", icon: Radar },
  { id: "world-map", label: "World Map", icon: Map },
  { id: "council", label: "Council", icon: UsersRound },
  { id: "trading", label: "Trading", icon: BarChart3 },
  { id: "commerce", label: "Commerce", icon: ShoppingCart },
  { id: "income-division", label: "Income Division", icon: DollarSign },
  { id: "research", label: "Research", icon: FlaskConical },
  { id: "war-room", label: "War Room", icon: Swords },
  { id: "knowledge-vault", label: "Knowledge Vault", icon: BookOpen },
  { id: "programs", label: "Programs", icon: BrainCircuit },
  { id: "settings", label: "Settings", icon: Settings },
];

export const mobileNavItems = navItems.filter((item) =>
  ["dashboard", "mission-control", "world-map", "income-division", "settings"].includes(item.id),
);
