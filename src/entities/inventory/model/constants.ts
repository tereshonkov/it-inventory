import { Package, Laptop, Monitor, Wrench } from "lucide-react";
import { InventoryItem, StatCardConfig } from "./types";

export const INVENTORY: InventoryItem[] = [
  { id: "INV-00141", name: "Dell XPS 15 9530",     category: "Laptop",   serial: "DX15-KR9-2024", assigned: "Olena Kovalenko",  dept: "Engineering", status: "On Balance", date: "2024-03-15" },
  { id: "INV-00142", name: 'LG UltraWide 34"',     category: "Monitor",  serial: "LGM-34W-0091",  assigned: "Dmytro Petrenko",  dept: "Design",      status: "On Balance", date: "2024-01-22" },
  { id: "INV-00143", name: 'MacBook Pro M3 14"',   category: "Laptop",   serial: "MBP-M3-5512A",  assigned: "Service Desk",     dept: "IT",          status: "Repair",     date: "2024-07-08" },
  { id: "INV-00144", name: "HP EliteDesk 800",     category: "Desktop",  serial: "HPD-800-3321",  assigned: "Yana Moroz",       dept: "Finance",     status: "On Balance", date: "2023-11-30" },
  { id: "INV-00145", name: 'Dell U2722D 27"',      category: "Monitor",  serial: "DLU-27-8847",   assigned: "—",                dept: "—",           status: "Reserved",   date: "2024-09-01" },
  { id: "INV-00146", name: "Cisco IP Phone 8851",  category: "Phone",    serial: "CSC-88-7723",   assigned: "Reception",        dept: "Admin",       status: "On Balance", date: "2023-06-14" },
  { id: "INV-00147", name: "Lenovo ThinkPad X1",   category: "Laptop",   serial: "LNV-X1-2209",   assigned: "Mykola Sydorenko", dept: "Security",    status: "Repair",     date: "2024-08-19" },
  { id: "INV-00148", name: "Ubiquiti UAP-AC-Pro",  category: "Network",  serial: "UBQ-AC-6612",   assigned: "Server Room",      dept: "IT",          status: "On Balance", date: "2023-04-05" },
];

export const STAT_CARDS: StatCardConfig[] = [
  { icon: Package, label: "Total Assets", value: "148", trend: "+4 this month", color: "#8b5cf6", spark: [80,95,88,100,92,110,105,120,115,130,125,148] },
  { icon: Laptop,  label: "Laptops",      value: "67",  trend: "+2 this week",  color: "#a78bfa", spark: [40,45,42,50,48,55,52,58,55,61,60,67]         },
  { icon: Monitor, label: "Monitors",     value: "54",  trend: "stable",        color: "#7c3aed", spark: [30,32,31,35,33,38,36,40,39,42,41,54]         },
  { icon: Wrench,  label: "In Repair",    value: "12",  trend: "↑3 vs last wk", color: "#ef4444", spark: [5,7,6,8,9,7,10,9,11,10,12,12]               },
];
