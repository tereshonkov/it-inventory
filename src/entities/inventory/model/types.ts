import { LucideIcon } from "lucide-react";

export type InventoryStatus = "On Balance" | "Repair" | "Reserved" | "Written Off";

export interface InventoryItem {
  id: string;
  name: string;
  category: string;
  serial: string;
  assigned: string;
  dept: string;
  status: InventoryStatus;
  date: string;
}

export interface StatCardConfig {
  icon: LucideIcon;
  label: string;
  value: string;
  trend: string;
  spark: number[];
  color: string;
}
