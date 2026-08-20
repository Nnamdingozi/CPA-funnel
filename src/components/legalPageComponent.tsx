

interface LegalPageProps {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}

export default function LegalPage({ title, lastUpdated, children }: LegalPageProps) {
  return (
    <div className="min-h-screen bg-white flex flex-col">

      <main className="flex-grow max-w-3xl mx-auto px-6 py-16 md:py-24">
        <div className="space-y-2 mb-12 border-b border-slate-100 pb-8">
          <h1 className="text-4xl font-black uppercase italic tracking-tight text-slate-900">{title}</h1>
          <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Last Updated: {lastUpdated}</p>
        </div>
        <div className="prose prose-slate max-w-none prose-headings:uppercase prose-headings:italic prose-headings:font-black prose-p:text-slate-600 prose-p:leading-relaxed prose-li:text-slate-600">
          {children}
        </div>
      </main>
  
    </div>
  );
}