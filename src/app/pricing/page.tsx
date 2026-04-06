"use client";

import Link from "next/link";

export default function PricingPage() {
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
          <Link href="/solutions" className="text-slate-400 hover:text-[#b0c6ff] transition-colors duration-300">
            Solutions
          </Link>
          <Link href="/pricing" className="text-[#b0c6ff] border-b-2 border-[#b0c6ff] pb-1 transition-colors duration-300 font-bold">
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
          <div className="text-center mb-20 space-y-4">
            <h1 className="text-5xl font-headline font-bold text-on-surface">Transparent <span className="text-primary">Pricing</span></h1>
            <p className="text-xl text-on-surface-variant max-w-2xl mx-auto">Secure your entire team starting today. Flexible plans that scale with your growth and threat complexity.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {/* Startup Tier */}
            <div className="glass-card p-10 rounded-2xl border border-outline-variant/10 flex flex-col justify-between hover:bg-surface-container-high transition-all">
              <div>
                <div className="text-lg font-headline font-bold mb-2">Startup Sentinel</div>
                <div className="text-4xl font-headline font-bold mb-6">$0<span className="text-sm text-slate-500 font-normal">/mo</span></div>
                <hr className="border-outline-variant/10 mb-8" />
                <ul className="text-sm text-on-surface-variant space-y-4 mb-12">
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-sm">check_circle</span> 3 Shield Nodes</li>
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-sm">check_circle</span> Automated Log Analysis</li>
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-sm">check_circle</span> Community Edge Feeds</li>
                  <li className="flex items-center gap-2 opacity-30"><span className="material-symbols-outlined text-sm">cancel</span> 24/7 Agent Support</li>
                </ul>
              </div>
              <Link href="/dashboard" className="block w-full py-4 text-center glass-card rounded-xl font-bold hover:bg-surface-container transition-all">
                Start Free
              </Link>
            </div>

            {/* Pro Tier */}
            <div className="glass-card p-10 rounded-2xl border-2 border-primary/40 relative scale-105 z-10 flex flex-col justify-between bg-primary/[0.03] shadow-[0_0_30px_rgba(176,198,255,0.1)]">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-on-primary text-[10px] uppercase font-bold tracking-widest rounded-full">Most Popular</div>
              <div>
                <div className="text-lg font-headline font-bold mb-2">Growth Shield</div>
                <div className="text-4xl font-headline font-bold mb-6">$299<span className="text-sm text-slate-500 font-normal">/mo</span></div>
                <hr className="border-outline-variant/20 mb-8" />
                <ul className="text-sm text-on-surface-variant space-y-4 mb-12">
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-sm">check_circle</span> 50 Shield Nodes</li>
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-sm">check_circle</span> Real-time Neutralization</li>
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-sm">check_circle</span> Custom Threat Simulations</li>
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-sm">check_circle</span> Priority Support Node</li>
                </ul>
              </div>
              <Link href="/dashboard" className="block w-full py-4 text-center bg-primary text-on-primary rounded-xl font-bold micro-glow hover:brightness-110 active:scale-95 transition-all">
                Select Pro
              </Link>
            </div>

            {/* Enterprise Tier */}
            <div className="glass-card p-10 rounded-2xl border border-outline-variant/10 flex flex-col justify-between hover:bg-surface-container-high transition-all">
              <div>
                <div className="text-lg font-headline font-bold mb-2">Global Bastion</div>
                <div className="text-4xl font-headline font-bold mb-6">Custom</div>
                <hr className="border-outline-variant/10 mb-8" />
                <ul className="text-sm text-on-surface-variant space-y-4 mb-12">
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-sm">check_circle</span> Unlimited Nodes</li>
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-sm">check_circle</span> Dedicated Security Agent</li>
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-sm">check_circle</span> Compliance Audit Engine</li>
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-sm">check_circle</span> White-label Dashboard</li>
                </ul>
              </div>
              <button onClick={() => alert("Connecting to enterprise team...")} className="block w-full py-4 text-center glass-card rounded-xl font-bold hover:bg-surface-container transition-all">
                Talk to Sales
              </button>
            </div>
          </div>
          
          <div className="mt-20 text-center text-on-surface-variant text-sm">
            Interested in annual billing? <span className="text-primary cursor-pointer hover:underline">Save 20% by switching to yearly.</span>
          </div>
        </div>
      </div>
    </>
  );
}
