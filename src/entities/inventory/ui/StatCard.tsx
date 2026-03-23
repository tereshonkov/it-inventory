import { ArrowUpRight } from "lucide-react";
import { Card } from "@/shared/ui/Card";
import { StatCardConfig } from "../model/types";

interface SparklineProps {
  data: number[];
  color?: string;
}

function Sparkline({ data, color = "#8b5cf6" }: SparklineProps) {
  const W = 64, H = 24, PAD = 2;
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;

  const points = data
    .map((v, i) => {
      const x = PAD + (i / (data.length - 1)) * (W - 2 * PAD);
      const y = H - PAD - ((v - min) / range) * (H - 2 * PAD);
      return `${x},${y}`;
    })
    .join(" ");

  const lastPoint = points.split(" ").at(-1);
  if (!lastPoint) return null;
  const [lastX, lastY] = lastPoint.split(",");

  return (
    <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} fill="none">
      <polyline
        points={points}
        stroke={color}
        strokeWidth="1.5"
        strokeLinejoin="round"
        strokeLinecap="round"
        opacity="0.9"
      />
      <circle cx={lastX} cy={lastY} r="2.5" fill={color} />
    </svg>
  );
}

export function StatCard({ icon: Icon, label, value, trend, spark, color }: StatCardConfig) {
  return (
    <Card className="relative p-5 overflow-hidden group hover:border-violet-500/30 transition-all duration-300">
      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="flex items-start justify-between mb-4">
        <div className="p-2 rounded-lg bg-zinc-800/80 border border-zinc-700/50">
          <Icon size={16} style={{ color }} />
        </div>
        <Sparkline data={spark} color={color} />
      </div>

      <div className="text-2xl font-bold text-zinc-100 tracking-tight mb-0.5">
        {value}
      </div>
      <div className="text-xs text-zinc-500 mb-2">{label}</div>

      <div className="flex items-center gap-1 text-emerald-400 text-[11px] font-medium">
        <ArrowUpRight size={11} />
        <span>{trend}</span>
      </div>
    </Card>
  );
}
