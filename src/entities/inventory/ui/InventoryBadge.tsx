import { Badge } from "@/shared/ui/Badge";
import { InventoryStatus } from "../model/types";

interface InventoryBadgeProps {
  status: InventoryStatus;
  className?: string;
}

const STATUS_MAP: Record<InventoryStatus, { variant: any; label: string; dotColor: string }> = {
  "On Balance": { variant: "success", label: "On Balance", dotColor: "#34d399" },
  "Repair": { variant: "repair", label: "Repair", dotColor: "#f87171" },
  "Reserved": { variant: "reserved", label: "Reserved", dotColor: "#fbbf24" },
  "Written Off": { variant: "writtenOff", label: "Written Off", dotColor: "#71717a" },
};

export function InventoryBadge({ status, className }: InventoryBadgeProps) {
  const config = STATUS_MAP[status];
  
  return (
    <Badge variant={config.variant} className={className}>
      <span
        className="w-1.5 h-1.5 rounded-full"
        style={{ background: config.dotColor }}
      />
      {config.label}
    </Badge>
  );
}
