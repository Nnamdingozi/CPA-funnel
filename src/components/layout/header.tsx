import Link from "next/link";
import { Sparkles, ShieldCheck, LayoutGrid } from "lucide-react";

/**
 * VAULT HEADER
 * Logic: Sticky navigation with a focus on "Academic Security" to increase CPA conversion.
 */
export default function Header() {
  return (
    <header className="border-b border-slate-100 py-5 bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        
        {/* Logo - Links back to the Gallery */}
        <Link href="/" className="flex items-center gap-2 group">
          <Sparkles className="text-indigo-600 h-6 w-6 fill-current group-hover:rotate-12 transition-transform duration-300" />
          <span className="font-black text-2xl tracking-tighter uppercase italic text-slate-800">
            CITADELY<span className="text-indigo-600">HUB</span>
          </span>
        </Link>

        {/* Desktop Navigation & Status */}
        <div className="flex items-center gap-6">
          <Link 
            href="/" 
            className="hidden md:flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-indigo-600 transition-colors"
          >
            <LayoutGrid className="h-3 w-3" /> Browse Vault
          </Link>
          
          <div className="h-4 w-px bg-slate-200 hidden md:block"></div>

          <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
            <ShieldCheck className="h-4 w-4 text-indigo-500" />
            <span className="hidden sm:inline">Academic Registry Secure</span>
            <span className="sm:hidden">Secure</span>
          </div>
        </div>

      </div>
    </header>
  );
}