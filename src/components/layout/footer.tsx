import Link from "next/link";

/**
 * VAULT FOOTER
 * Logic: Provides institutional credibility and essential legal links for organic traffic safety.
 */
export default function Footer() {
  return (
    <footer className="py-16 border-t border-slate-50 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center space-y-10">
        
        {/* Brand & Copyright */}
        <div className="space-y-3">
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-300">
            The Open Access AI Vault &copy; {new Date().getFullYear()}
          </p>
          <p className="text-[9px] font-medium text-slate-400 max-w-md mx-auto leading-relaxed uppercase tracking-widest">
            Professional-grade AI prompts and digital assets for students and creators. 
            Hosted on the <span className="text-indigo-600 font-bold">FreeVault.space</span> network.
          </p>
        </div>

        {/* Legal & Support Links */}
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">
        <Link href="/privacy" className="hover:text-indigo-600 transition-colors">Privacy Policy</Link>
  <Link href="/terms" className="hover:text-indigo-600 transition-colors">Terms of Service</Link>
  <Link href="/dmca" className="hover:text-indigo-600 transition-colors">DMCA Policy</Link>
  <Link href="mailto:support@freevault.space" className="hover:text-indigo-600 transition-colors">Contact Support</Link>
        </div>

        {/* Technical Badge */}
        <div className="pt-4">
          <span className="inline-block border border-slate-100 rounded-full px-4 py-1 text-[8px] font-black uppercase tracking-widest text-slate-300">
            System Status: Operational
          </span>
        </div>

      </div>
    </footer>
  );
}