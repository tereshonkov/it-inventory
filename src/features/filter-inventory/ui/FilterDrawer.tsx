import { Button } from "@/shared/ui/Button";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerFooter, DrawerClose } from "@/shared/ui/Drawer";
import { InventoryBadge } from "@/entities/inventory/ui/InventoryBadge";

interface FilterDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function FilterDrawer({ isOpen, onClose }: FilterDrawerProps) {
  return (
    <Drawer open={isOpen} onOpenChange={onClose}>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Filter Assets</DrawerTitle>
        </DrawerHeader>
        
        <div className="p-6 space-y-6">
          <div>
            <label className="block text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-3">Category</label>
            <div className="grid grid-cols-2 gap-2">
              {["Laptop", "Monitor", "Desktop", "Network", "Phone", "Other"].map(cat => (
                <Button key={cat} variant="outline" className="justify-start font-normal h-10 px-4">
                  {cat}
                </Button>
              ))}
            </div>
          </div>
          
          <div>
            <label className="block text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-3">Status</label>
            <div className="space-y-2">
              {["On Balance", "Repair", "Reserved", "Written Off"].map(status => (
                <Button key={status} variant="outline" className="w-full justify-start font-normal h-11 px-4">
                  <InventoryBadge status={status as any} />
                </Button>
              ))}
            </div>
          </div>
        </div>

        <DrawerFooter className="border-t border-zinc-800">
          <Button onClick={onClose} className="w-full h-12 text-sm font-semibold">
            Apply Filters
          </Button>
          <DrawerClose asChild>
            <Button variant="ghost" className="w-full h-11 text-zinc-500 hover:text-zinc-300">
              Reset to default
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
