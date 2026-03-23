import { useState } from "react";
import { EyeOff, Eye, LogIn, Shield } from "lucide-react";
import { Button } from "@/shared/ui/Button";
import { Input } from "@/shared/ui/Input";
import { Card } from "@/shared/ui/Card";

interface LoginFormProps {
  onLogin: () => void;
}

export function LoginForm({ onLogin }: LoginFormProps) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onLogin();
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-zinc-950 flex font-sans">
      <div className="flex-1 flex flex-col justify-center px-6 lg:px-20 max-w-xl mx-auto lg:mx-0">
        <div className="mb-12">
          <div className="flex items-center gap-2.5 mb-2">
            <div className="p-2 rounded-xl bg-gradient-to-br from-violet-500 to-violet-700 shadow-lg shadow-violet-500/20">
              <Shield size={18} className="text-white" />
            </div>
            <span className="text-zinc-100 font-semibold text-lg tracking-tight">
              IT Inventory
            </span>
          </div>
          <div className="w-8 h-0.5 rounded-full bg-violet-500" />
        </div>

        <h1 className="text-3xl font-bold text-zinc-100 mb-2 tracking-tight">
          Welcome back
        </h1>
        <p className="text-zinc-500 text-sm mb-10">
          Sign in to access the asset management dashboard
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <label className="text-xs font-medium text-zinc-400 uppercase tracking-wide">
              Email Address
            </label>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@company.ua"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-medium text-zinc-400 uppercase tracking-wide">
              Password
            </label>
            <div className="relative">
              <Input
                type={showPass ? "text" : "password"}
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                placeholder="••••••••••••"
                className="pr-11"
                required
              />
              <button
                type="button"
                onClick={() => setShowPass(!showPass)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-zinc-600 hover:text-zinc-400 transition-colors"
              >
                {showPass ? <EyeOff size={15} /> : <Eye size={15} />}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between pt-1">
            <label className="flex items-center gap-2 text-xs text-zinc-500 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 rounded border-zinc-700 bg-zinc-900 accent-violet-500" />
              Remember me
            </label>
            <button type="button" className="text-xs text-violet-400 hover:text-violet-300 transition-colors">
              Forgot password?
            </button>
          </div>

          <Button type="submit" className="w-full h-12 text-sm font-semibold" disabled={loading}>
            {loading ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="white" strokeWidth="3" />
                  <path className="opacity-75" fill="white" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                Authenticating…
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <LogIn size={15} /> Sign In
              </span>
            )}
          </Button>
        </form>

        <p className="mt-10 text-xs text-zinc-600 text-center">
          © 2024 Inventory Management System. All rights reserved.
        </p>
      </div>

      <div className="hidden lg:flex flex-1 bg-zinc-950 items-center justify-center border-l border-zinc-800/50 relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 opacity-[0.08]" 
          style={{ 
            backgroundImage: `linear-gradient(#8b5cf6 1.5px, transparent 1px), linear-gradient(90deg, #8b5cf6 1.5px, transparent 1px)`,
            backgroundSize: '40px 40px' 
          }} 
        />
        <div className="absolute inset-0 opacity-[0.05]" 
          style={{ 
            backgroundImage: `linear-gradient(#a78bfa 1px, transparent 1px), linear-gradient(90deg, #a78bfa 1px, transparent 1px)`,
            backgroundSize: '200px 200px',
            transform: 'rotate(15deg) scale(2)'
          }} 
        />
        
        {/* New Glow Colors */}
        <div className="absolute -inset-[50%] blur-[120px] opacity-30 bg-[radial-gradient(circle,rgba(139,92,246,0.4)_0%,rgba(30,27,75,0.8)_100%)] rounded-full" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 blur-[100px] opacity-20 bg-indigo-500 rounded-full" />
        
        <Card className="relative p-8 w-80 shadow-2xl border-violet-500/20 bg-zinc-950/40 backdrop-blur-2xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
            <div className="w-3 h-3 rounded-full bg-amber-500/20 border border-amber-500/50" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/20 border border-emerald-500/50" />
          </div>
          <div className="space-y-4">
            <div className="h-2 w-2/3 bg-zinc-800 rounded-full" />
            <div className="h-2 w-full bg-zinc-800/50 rounded-full" />
            <div className="h-2 w-1/2 bg-zinc-800/50 rounded-full" />
            <div className="pt-4 flex gap-2">
              <div className="h-8 w-8 rounded-lg bg-violet-500/20 border border-violet-500/30" />
              <div className="h-8 w-8 rounded-lg bg-zinc-800 border border-zinc-700/50" />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
