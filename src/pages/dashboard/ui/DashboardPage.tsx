import { useState } from "react";
import { Sidebar } from "@/widgets/sidebar/ui/Sidebar";
import { Header } from "@/widgets/header/ui/Header";
import { InventoryTable } from "@/widgets/inventory-table/ui/InventoryTable";
import { StatCard } from "@/entities/inventory/ui/StatCard";
import { STAT_CARDS } from "@/entities/inventory/model/constants";

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-zinc-950 flex flex-col lg:flex-row font-sans">
      <Sidebar 
        activeLabel="Dashboard" 
        mobileOpen={sidebarOpen} 
        onClose={() => setSidebarOpen(false)} 
      />

      <div className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
        <Header onMenuOpen={() => setSidebarOpen(true)} />

        <main className="flex-1 p-4 lg:p-8 space-y-6 lg:space-y-8 overflow-y-auto">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-xl font-bold text-zinc-100 tracking-tight">Asset Overview</h1>
              <p className="text-sm text-zinc-500 mt-0.5">Manage and monitor all company hardware</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-6">
            {STAT_CARDS.map((card) => (
              <StatCard key={card.label} {...card} />
            ))}
          </div>

          <InventoryTable />
        </main>
      </div>
    </div>
  );
}
