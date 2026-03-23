import { Laptop, Monitor, Shield, Package, Cpu } from "lucide-react";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerFooter } from "@/shared/ui/Drawer";
import { Button } from "@/shared/ui/Button";
import { InventoryBadge } from "@/entities/inventory/ui/InventoryBadge";
import { InventoryItem } from "@/entities/inventory/model/types";

interface AssetDetailsDrawerProps {
  item: InventoryItem | null;
  onClose: () => void;
}

export function AssetDetailsDrawer({ item, onClose }: AssetDetailsDrawerProps) {
  if (!item) return null;

  return (
    <Drawer open={!!item} onOpenChange={(open) => !open && onClose()}>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Asset Details</DrawerTitle>
        </DrawerHeader>

        <div className="p-6 space-y-8">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center">
              {item.category === "Laptop" ? <Laptop size={32} className="text-violet-400" /> : 
               item.category === "Monitor" ? <Monitor size={32} className="text-violet-400" /> :
               item.category === "Network" ? <Shield size={32} className="text-violet-400" /> :
               <Package size={32} className="text-violet-400" />}
            </div>
            <div>
              <h3 className="text-xl font-bold text-zinc-100">{item.name}</h3>
              <span className="text-xs font-mono text-zinc-500">{item.id}</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-zinc-900/50 border border-zinc-800">
              <span className="block text-[10px] text-zinc-500 uppercase tracking-widest font-bold mb-1">Status</span>
              <InventoryBadge status={item.status} />
            </div>
            <div className="p-4 rounded-2xl bg-zinc-900/50 border border-zinc-800">
              <span className="block text-[10px] text-zinc-500 uppercase tracking-widest font-bold mb-1">Category</span>
              <span className="text-sm text-zinc-200">{item.category}</span>
            </div>
          </div>

          <div className="space-y-4">
            {[
              { label: "Serial Number", value: item.serial, mono: true },
              { label: "Assigned To", value: item.assigned, sub: item.dept },
              { label: "Added to Inventory", value: item.date },
            ].map((row, i) => (
              <div key={i} className="flex items-center justify-between py-3 border-b border-zinc-800/50">
                <span className="text-sm text-zinc-500">{row.label}</span>
                <div className="text-right">
                  <div className={`text-sm text-zinc-200 ${row.mono ? "font-mono" : ""}`}>{row.value}</div>
                  {row.sub && <div className="text-[10px] text-zinc-500">{row.sub}</div>}
                </div>
              </div>
            ))}
          </div>

          <div>
            <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-4">Maintenance History</h4>
            <div className="space-y-3">
              {[
                { date: "Feb 12, 2024", type: "Security Patch", icon: Shield },
                { date: "Dec 05, 2023", type: "Hardware Upgrade", icon: Cpu },
              ].map((log, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-zinc-900/30 border border-zinc-800/50">
                  <log.icon size={14} className="text-zinc-500" />
                  <div className="flex-1">
                    <div className="text-xs text-zinc-200 font-medium">{log.type}</div>
                    <div className="text-[10px] text-zinc-600">{log.date}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <DrawerFooter className="grid grid-cols-2 gap-3 pt-4 border-t border-zinc-800">
          <Button variant="outline" className="h-11">Edit Asset</Button>
          <Button variant="outline" className="h-11 text-red-400 hover:bg-red-500/10 hover:border-red-500/20 hover:text-red-400">
            Mark for Repair
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
