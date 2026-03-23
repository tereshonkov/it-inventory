import { useState } from "react";
import { Activity, Filter, MoreHorizontal, Download, Plus, Search } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/shared/ui/Table";
import { Button } from "@/shared/ui/Button";
import { Input } from "@/shared/ui/Input";
import { InventoryBadge } from "@/entities/inventory/ui/InventoryBadge";
import { InventoryItem } from "@/entities/inventory/model/types";
import { INVENTORY } from "@/entities/inventory/model/constants";
import { FilterDrawer } from "@/features/filter-inventory/ui/FilterDrawer";
import { AssetDetailsDrawer } from "@/widgets/inventory-details/ui/AssetDetailsDrawer";

export function InventoryTable() {
  const [search, setSearch] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<InventoryItem | null>(null);

  const filteredRows = INVENTORY.filter((row) => {
    const q = search.toLowerCase();
    return (
      row.name.toLowerCase().includes(q) ||
      row.id.toLowerCase().includes(q) ||
      row.assigned.toLowerCase().includes(q)
    );
  });

  return (
    <div className="space-y-6">
      {/* Table Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="relative max-w-sm w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
          <Input
            placeholder="Search assets..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10"
          />
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" onClick={() => setIsFilterOpen(true)} className="h-10">
            <Filter className="h-4 w-4 mr-2" /> Filter
          </Button>
          <Button variant="outline" className="h-10">
            <Download className="h-4 w-4 mr-2" /> <span className="hidden sm:inline">Export</span>
          </Button>
          <Button className="h-10 font-semibold">
            <Plus className="h-4 w-4 mr-2" /> Add Asset
          </Button>
        </div>
      </div>

      <div className="bg-zinc-900/50 backdrop-blur-md border border-zinc-800 rounded-2xl overflow-hidden">
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800/60">
          <div className="flex items-center gap-3">
            <div className="p-1.5 rounded-lg bg-violet-500/10 border border-violet-500/20">
              <Activity size={14} className="text-violet-400" />
            </div>
            <span className="text-sm font-semibold text-zinc-200">Inventory Register</span>
            <span className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-zinc-800 text-zinc-400 border border-zinc-700">
              {filteredRows.length} items
            </span>
          </div>
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Inv. Number</TableHead>
              <TableHead>Asset Name</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Serial</TableHead>
              <TableHead>Assigned To</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredRows.map((row) => (
              <TableRow 
                key={row.id} 
                className="cursor-pointer"
                onClick={() => setSelectedItem(row)}
              >
                <TableCell className="font-mono text-[11px] text-zinc-400">{row.id}</TableCell>
                <TableCell className="font-medium text-zinc-200 group-hover:text-violet-400 transition-colors">
                  {row.name}
                </TableCell>
                <TableCell className="text-zinc-500">{row.category}</TableCell>
                <TableCell className="font-mono text-[11px] text-zinc-500">{row.serial}</TableCell>
                <TableCell>
                  <div className="text-zinc-300">{row.assigned}</div>
                  <div className="text-[10px] text-zinc-500">{row.dept}</div>
                </TableCell>
                <TableCell>
                  <InventoryBadge status={row.status} />
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="icon" className="h-8 w-8" onClick={(e) => e.stopPropagation()}>
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <FilterDrawer isOpen={isFilterOpen} onClose={() => setIsFilterOpen(false)} />
      <AssetDetailsDrawer item={selectedItem} onClose={() => setSelectedItem(null)} />
    </div>
  );
}
