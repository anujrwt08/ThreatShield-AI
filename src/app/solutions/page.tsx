"use client";

import Link from "next/link";

export default function SolutionsPage() {
  return (
    <>
      {/* TopNavBar */}
      <nav className="flex justify-between items-center px-8 h-16 w-full fixed top-0 z-50 bg-[#0e131f]/80 backdrop-blur-xl font-headline tracking-tight">
        <Link href="/" className="text-xl font-bold text-[#b0c6ff] flex items-center gap-2">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
            security
          </span>
          <span>ThreatShield AI</span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-slate-400 hover:text-[#b0c6ff] transition-colors duration-300">
            Product
          </Link>
          <Link href="/solutions" className="text-[#b0c6ff] border-b-2 border-[#b0c6ff] pb-1 transition-colors duration-300 font-bold">
            Solutions
          </Link>
          <Link href="/pricing" className="text-slate-400 hover:text-[#b0c6ff] transition-colors duration-300">
            Pricing
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/dashboard" className="bg-primary text-on-primary px-5 py-2 rounded-xl font-medium text-sm scale-95 hover:scale-100 active:scale-95 transition-all shadow-[0_0_15px_rgba(176,198,255,0.3)]">
            Open Dashboard
          </Link>
        </div>
      </nav>

      {/* SideNavBar - Order: Dash, Logs, Agents */}
      <aside className="fixed left-0 top-16 h-[calc(100vh-64px)] hidden md:flex flex-col items-center py-8 z-40 w-20 bg-[#0e131f]/60 backdrop-blur-2xl shadow-[0_0_20px_rgba(176,198,255,0.05)]">
        <div className="flex flex-col gap-8 w-full">
          <Link href="/" className="flex flex-col items-center gap-1 cursor-pointer group">
            <div className="p-3 rounded-xl transition-all hover:bg-white/5 text-slate-500 group-hover:text-[#b0c6ff]">
              <span className="material-symbols-outlined">terminal</span>
            </div>
            <span className="font-headline text-[10px] uppercase tracking-widest text-slate-500">Dash</span>
          </Link>
          <Link href="/dashboard" className="flex flex-col items-center gap-1 cursor-pointer group">
            <div className="p-3 rounded-xl transition-all hover:bg-white/5 text-slate-500 group-hover:text-[#b0c6ff]">
              <span className="material-symbols-outlined">dashboard</span>
            </div>
            <span className="font-headline text-[10px] uppercase tracking-widest text-slate-500">Logs</span>
          </Link>
          <Link href="/agents" className="flex flex-col items-center gap-1 cursor-pointer group">
            <div className="p-3 rounded-xl transition-all hover:bg-white/5 text-slate-500 group-hover:text-[#b0c6ff]">
              <span className="material-symbols-outlined">security</span>
            </div>
            <span className="font-headline text-[10px] uppercase tracking-widest text-slate-500">Agents</span>
          </Link>
        </div>
      </aside>

      <div className="md:ml-20 pt-32 pb-20 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h1 className="text-5xl font-headline font-bold text-on-surface">Integrated <span className="text-primary">Defense Solutions</span></h1>
            <p className="text-xl text-on-surface-variant max-w-2xl mx-auto">AI-native security modules designed to work in harmony. Protect every layer of your digital infrastructure.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="glass-card p-10 rounded-2xl border border-primary/10 hover:border-primary/30 transition-all group">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 transition-transform group-hover:scale-110">
                <span className="material-symbols-outlined text-3xl">cloud</span>
              </div>
              <h3 className="text-2xl font-headline font-bold mb-4">Cloud Sentinel</h3>
              <p className="text-on-surface-variant leading-relaxed mb-6">Automated security posture management for multi-cloud environments. Detect misconfigurations and data leaks before they escalate.</p>
              <button className="text-primary font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                Learn More <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>

            <div className="glass-card p-10 rounded-2xl border border-tertiary/10 hover:border-tertiary/30 transition-all group">
              <div className="w-14 h-14 bg-tertiary/10 rounded-xl flex items-center justify-center text-tertiary mb-6 transition-transform group-hover:scale-110">
                <span className="material-symbols-outlined text-3xl">phone_android</span>
              </div>
              <h3 className="text-2xl font-headline font-bold mb-4">Endpoint Neural</h3>
              <p className="text-on-surface-variant leading-relaxed mb-6">AI-driven protection for every device. Neutralize zero-day malware and phishing attempts at the edge of your network.</p>
              <button className="text-tertiary font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                Learn More <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>

            <div className="glass-card p-10 rounded-2xl border border-emerald-500/10 hover:border-emerald-500/30 transition-all group">
              <div className="w-14 h-14 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-500 mb-6 transition-transform group-hover:scale-110">
                <span className="material-symbols-outlined text-3xl">hub</span>
              </div>
              <h3 className="text-2xl font-headline font-bold mb-4">Network Flux</h3>
              <p className="text-on-surface-variant leading-relaxed mb-6">Adaptive encryption and traffic analysis. Protect internal data flows and isolate suspicious network segments automatically.</p>
              <button className="text-emerald-500 font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                Learn More <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </div>
          
          <div className="mt-20 glass-card p-12 rounded-3xl text-center space-y-6 micro-glow border-l-4 border-l-primary">
            <h2 className="text-3xl font-headline font-bold">Custom Enterprise Security?</h2>
            <p className="text-on-surface-variant max-w-xl mx-auto">Our security architects can design a tailored defense matrix specific to your compliance requirements and threat landscape.</p>
            <button className="px-8 py-4 bg-primary text-on-primary rounded-xl font-bold hover:scale-105 transition-all">
              Consult an Architect
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
