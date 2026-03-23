import { Menu, ChevronRight, Bell } from "lucide-react";
import { Button } from "@/shared/ui/Button";

interface HeaderProps {
  onMenuOpen: () => void;
}

export function Header({ onMenuOpen }: HeaderProps) {
  return (
    <header className="sticky top-0 z-30 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800/60 px-4 lg:px-8 py-4 flex items-center gap-4 lg:gap-6">
      <Button
        variant="ghost"
        size="icon"
        className="lg:hidden -ml-2 text-zinc-400"
        onClick={onMenuOpen}
      >
        <Menu size={20} />
      </Button>

      <div className="hidden sm:flex items-center gap-1.5 text-xs text-zinc-600">
        <span>Platform</span>
        <ChevronRight size={11} />
        <span className="text-zinc-400 font-medium">Dashboard</span>
      </div>

      <div className="flex-1" />

      <Button variant="ghost" size="icon" className="relative text-zinc-500 rounded-xl">
        <Bell size={18} />
        <span className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-violet-500" />
      </Button>
    </header>
  );
}
