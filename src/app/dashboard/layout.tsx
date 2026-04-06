"use client";

import Link from "next/link";
import React from "react";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="flex justify-between items-center px-8 h-16 w-full fixed top-0 z-50 bg-[#0e131f]/80 backdrop-blur-xl font-headline tracking-tight">
        <Link href="/" className="text-xl font-bold text-[#b0c6ff] flex items-center gap-2">
          <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
            shield_with_heart
          </span>
          <span>ThreatShield AI</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-slate-400 hover:text-[#b0c6ff] transition-colors duration-300">
            Product
          </Link>
          <Link href="/solutions" className="text-slate-400 hover:text-[#b0c6ff] transition-colors duration-300">
            Solutions
          </Link>
          <Link href="/pricing" className="text-slate-400 hover:text-[#b0c6ff] transition-colors duration-300">
            Pricing
          </Link>
        </nav>
        <div className="flex items-center gap-6">
          <div className="hidden lg:flex items-center gap-4 px-4 py-1.5 bg-surface-container-low rounded-full border border-outline-variant/10">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 emerald-pulse"></span>
            <span className="text-[10px] uppercase tracking-widest font-headline font-bold text-on-surface-variant">
              Posture: Optimal
            </span>
          </div>
          <button onClick={() => alert("Upgrade request received. Our enterprise team will contact you shortly.")} className="bg-primary text-on-primary px-5 py-2 rounded-lg font-headline font-bold text-sm scale-95 active:scale-90 hover:scale-100 transition-all shadow-[0_0_15px_rgba(176,198,255,0.3)]">
            Upgrade Plan
          </button>
        </div>
      </header>

      {/* SideNavBar */}
      <aside className="fixed left-0 top-16 h-[calc(100vh-64px)] w-20 hidden md:flex flex-col items-center py-8 z-40 bg-[#0e131f]/60 backdrop-blur-2xl shadow-[0_0_20px_rgba(176,198,255,0.05)]">
        <div className="flex flex-col gap-8 w-full">
          <Link href="/" className="flex flex-col items-center gap-1 text-slate-500 hover:text-[#b0c6ff] hover:bg-white/5 py-3 transition-all font-headline text-[10px] uppercase tracking-widest group">
            <span className="material-symbols-outlined text-2xl group-hover:text-[#b0c6ff]">terminal</span>
            <span>Dash</span>
          </Link>
          <Link href="/dashboard" className="flex flex-col items-center gap-1 bg-[#b0c6ff]/10 text-[#b0c6ff] border-r-2 border-[#b0c6ff] py-3 transition-all relative font-headline text-[10px] uppercase tracking-widest">
            <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
              dashboard
            </span>
            <span>Logs</span>
          </Link>
          <Link href="/agents" className="flex flex-col items-center gap-1 text-slate-500 hover:text-[#b0c6ff] hover:bg-white/5 py-3 transition-all font-headline text-[10px] uppercase tracking-widest group">
            <span className="material-symbols-outlined text-2xl group-hover:text-[#b0c6ff]">security</span>
            <span>Agents</span>
          </Link>
        </div>
        <div className="mt-auto flex flex-col items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center micro-glow overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="System Status"
              className="w-8 h-8"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDY1OAKlsxY9-GV076S97cAaXyIusnGs_f6KVRvEQGzOM9m2cvYRhIBDAyToI8pPleHq9G46M9MMIo3peqwcmUoBbJHjCjbIX5CWyrcctkI5X-3f0BNoOYIsrugu5-RSQAgff7Pn145JdzyxkKi1pmFryACETddrcUyuo0ccNjuiRy3etWBp0LWCmJtZa8VvK0ixXLDQqMbCGTp4jRMy8uuuotXdyR9G5P8nO18qY3yOWLikh83aaLHCFo3HzP5vtv1qHwPJX4qM_n0"
            />
          </div>
          <div className="text-center">
            <div className="font-headline text-[8px] uppercase tracking-tighter text-primary">Node Alpha</div>
          </div>
        </div>
      </aside>

      <main className="md:ml-20 mt-16 p-8 min-h-[calc(100vh-4rem)] bg-surface status-scanline">
        {children}
      </main>
    </>
  );
}
