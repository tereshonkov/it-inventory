import { Settings, Shield, X, LayoutDashboard, Package, Laptop, Monitor, Wrench, Users, Server } from "lucide-react";
import { cn } from "@/shared/lib/utils";
import { Button } from "@/shared/ui/Button";

interface SidebarProps {
  activeLabel?: string;
  mobileOpen?: boolean;
  onClose?: () => void;
}

const NAV_ITEMS = [
  { icon: LayoutDashboard, label: "Dashboard", section: "main" },
  { icon: Package, label: "Inventory", section: "main" },
  { icon: Laptop, label: "Laptops", section: "main" },
  { icon: Monitor, label: "Monitors", section: "main" },
  { icon: Wrench, label: "Repairs", section: "main" },
  { icon: Users, label: "Employees", section: "system" },
  { icon: Server, label: "Network", section: "system" },
  { icon: Shield, label: "Audit Log", section: "system" },
];

export function Sidebar({ activeLabel = "Dashboard", mobileOpen = false, onClose = () => {} }: SidebarProps) {
  return (
    <>
      {/* Mobile Backdrop */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-zinc-950/80 backdrop-blur-sm lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-64 bg-zinc-950 border-r border-zinc-800/80 flex flex-col transition-transform duration-300 lg:static lg:translate-x-0",
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* Brand */}
        <div className="px-5 py-5 border-b border-zinc-800/50 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 rounded-lg bg-gradient-to-br from-violet-500 to-violet-700 shadow-lg shadow-violet-500/20">
              <Shield size={15} className="text-white" />
            </div>
            <span className="text-zinc-100 font-semibold text-sm tracking-tight">
              IT Inventory
            </span>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose} className="lg:hidden text-zinc-500 h-8 w-8">
            <X size={18} />
          </Button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 py-4 space-y-0.5 overflow-y-auto">
          {(["main", "system"] as const).map((section) => (
            <div key={section}>
              <div className="px-2 py-2 mb-1">
                <span className="text-[10px] font-semibold text-zinc-600 uppercase tracking-widest">
                  {section === "main" ? "Main" : "System"}
                </span>
              </div>
              {NAV_ITEMS.filter((item) => item.section === section).map(({ icon: Icon, label }) => {
                const isActive = label === activeLabel;
                return (
                  <Button
                    key={label}
                    variant={isActive ? "secondary" : "ghost"}
                    className={cn(
                      "w-full justify-start gap-3 px-3 h-10 rounded-xl relative",
                      isActive ? "bg-violet-500/10 text-violet-300 hover:bg-violet-500/20" : "text-zinc-500 hover:text-zinc-300"
                    )}
                  >
                    {isActive && (
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-5 rounded-full bg-violet-500" />
                    )}
                    <Icon size={16} className={isActive ? "text-violet-400" : ""} />
                    <span className="font-medium text-sm">{label}</span>
                  </Button>
                );
              })}
            </div>
          ))}
        </nav>

        {/* User footer */}
        <div className="px-3 py-4 border-t border-zinc-800/50">
          <div className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-zinc-800/40 cursor-pointer transition-colors group">
            <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-violet-300 bg-gradient-to-br from-violet-900 to-zinc-900 border border-violet-500/20">A</div>
            <div className="flex-1 min-w-0">
              <div className="text-xs font-medium text-zinc-300 truncate">Admin</div>
              <div className="text-[10px] text-zinc-600 truncate">admin@company.ua</div>
            </div>
            <Settings size={14} className="text-zinc-600 group-hover:text-zinc-400 transition-colors" />
          </div>
        </div>
      </aside>
    </>
  );
}
