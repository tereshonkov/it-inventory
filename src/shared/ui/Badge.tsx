import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/shared/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[11px] font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-zinc-900 text-zinc-50 hover:bg-zinc-900/80",
        secondary:
          "border-transparent bg-zinc-100 text-zinc-900 hover:bg-zinc-100/80",
        destructive:
          "border-transparent bg-red-500 text-zinc-50 hover:bg-red-500/80",
        outline: "text-zinc-50",
        success: "bg-emerald-950 text-emerald-400 border border-emerald-800/60",
        repair: "bg-red-950 text-red-400 border border-red-800/60",
        reserved: "bg-amber-950 text-amber-400 border border-amber-800/60",
        writtenOff: "bg-zinc-800 text-zinc-400 border border-zinc-700/60",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
