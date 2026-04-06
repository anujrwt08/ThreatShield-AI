"use client";

import Link from "next/link";

export default function LandingPage() {
  return (
    <>
      {/* TopNavBar Execution */}
      <nav className="flex justify-between items-center px-8 h-16 w-full fixed top-0 z-50 bg-[#0e131f]/80 backdrop-blur-xl font-headline tracking-tight">
        <div className="text-xl font-bold text-[#b0c6ff] flex items-center gap-2">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
            security
          </span>
          <span>ThreatShield AI</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-[#b0c6ff] border-b-2 border-[#b0c6ff] pb-1 hover:text-[#b0c6ff] transition-colors duration-300">
            Product
          </Link>
          <Link href="/solutions" className="text-slate-400 hover:text-[#b0c6ff] transition-colors duration-300">
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

      {/* SideNavBar Execution (Hidden on Mobile) */}
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
        <div className="mt-auto pb-4">
          <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center overflow-hidden border border-outline-variant/30">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="System Status Avatar"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAx-_8syiYQtv0jmWrqSKXMuA19wVy3kkbznN_iyHDvL8pXoMJaNj6dq6LMJYAI_XuopkkD-B5reepK-Z59AYVu7QZR6gl_ygBp3mZVYh6iyho5gKhl7C1uBkuI2aJqk_k6VeJ_fKW9wWYACJfn7jwSH8arhCI3E_4NMDUfuTlOuxPYCL7kR8BCchdyED_jqZTONMysOcYbMyMsCqspmBi7m0sSM0CBDhMDen7_fEScf9wY3_hVjb84aAmY-k3ob1IF4kbbat3buZKN"
            />
          </div>
        </div>
      </aside>

      <div className="md:ml-20">
        {/* Hero Section */}
        <main className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none"></div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] hero-gradient pointer-events-none"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Hero Content */}
              <div className="lg:col-span-7 space-y-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                  <span className="text-xs font-label uppercase tracking-widest text-primary">System Online: v2.4.0</span>
                </div>
                <h1 className="text-5xl lg:text-7xl font-headline font-bold leading-tight tracking-tighter text-on-surface">
                  Protect Your Data Before <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-surface-tint">Hackers Strike</span>
                </h1>
                <p className="text-xl text-on-surface-variant max-w-xl leading-relaxed">
                  AI-Native, Enterprise-Grade Security for SMEs. Proactive detection, zero complexity. Neutralize threats at the edge before they breach your perimeter.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <Link href="/dashboard" className="px-8 py-4 bg-primary text-on-primary rounded-xl font-bold flex items-center gap-2 micro-glow hover:brightness-110 active:scale-95 transition-all">
                    Initialize Protocol
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </Link>
                  <button onClick={() => alert("ThreatShield AI Technical Whitepaper v2.4 initialized for secure download.")} className="px-8 py-4 glass-card text-on-surface rounded-xl font-bold flex items-center gap-2 hover:bg-surface-container-high active:scale-95 transition-all">
                    Review Whitepaper
                  </button>
                </div>
                <div className="flex items-center gap-8 pt-8 opacity-60">
                  <div className="flex flex-col">
                    <span className="text-2xl font-headline font-bold">99.9%</span>
                    <span className="text-[10px] uppercase tracking-widest">Threat Mitigation</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-2xl font-headline font-bold">&lt;10ms</span>
                    <span className="text-[10px] uppercase tracking-widest">Response Latency</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-2xl font-headline font-bold">SOC2</span>
                    <span className="text-[10px] uppercase tracking-widest">Compliant Node</span>
                  </div>
                </div>
              </div>
              
              {/* Hero Visual (Futuristic Node) */}
              <div className="lg:col-span-5 relative">
                <div className="relative w-full aspect-square glass-card rounded-full flex items-center justify-center p-8 overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-tertiary/5"></div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    alt="AI Network Node Visualization"
                    className="w-full h-full object-cover rounded-full mix-blend-screen opacity-60 scale-110 transition-transform duration-700 group-hover:scale-100"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-W2fhnT9pfNZ6PhtmkV9eALPO4yhRQcLnrjUO1VVdfBLrOuTBX5TIsWxUd-dQq5y8LWNaKa5stckKOdsW-qHJDfz3S05MLPZOONm2vHzojZGOk6T5A7LlyHivC3G0_y8EJ1qnFTk2ItuIGO-2ls8jZnyiqw8vxyigtc-MGBePLoExA6SZDnWwOls94XDVSjB7XZ9hm7GzqCsQv1Wkq0dCJzuHAZU4IOSW4_XJhcccFv2xY1wiNN_lpViWGM0_-j5lBpaSEd2vTpJ5"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-64 h-64 border-2 border-primary/30 rounded-full animate-[spin_20s_linear_infinite] border-dashed"></div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-48 h-48 border border-tertiary/20 rounded-full animate-[spin_15s_linear_infinite_reverse] border-dotted"></div>
                  </div>
                  <div className="relative z-20 bg-surface/80 p-6 rounded-2xl glass-card text-center micro-glow">
                    <span className="material-symbols-outlined text-4xl text-primary mb-2" style={{ fontVariationSettings: "'FILL' 1" }}>
                      shield_with_heart
                    </span>
                    <div className="text-sm font-label uppercase tracking-tighter text-on-surface">Active Protection</div>
                    <div className="text-xs text-on-surface-variant">Shield Level: Maximum</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Bento Grid Section (Use Cases / Solutions) */}
        <section id="solutions" className="py-24 bg-surface-container-lowest relative">
          <div className="container mx-auto px-6">
            <div className="flex flex-col items-center mb-16 text-center">
              <h2 className="text-3xl font-headline font-bold mb-4">Securing Every Frontier</h2>
              <p className="text-on-surface-variant max-w-lg">Tailored defense protocols designed for specific industry challenges, from high-frequency finance to agile tech.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Banks Bento Card */}
              <div className="glass-card p-8 rounded-xl micro-glow flex flex-col justify-between group hover:bg-surface-container-high transition-all">
                <div>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 text-primary">
                    <span className="material-symbols-outlined text-2xl">account_balance</span>
                  </div>
                  <h3 className="text-xl font-headline font-bold mb-3">Banks</h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed mb-6">
                    Military-grade encryption and real-time fraud detection for legacy infrastructure and neo-banking stacks.
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-label uppercase tracking-widest text-primary/70">Vault Protocol</span>
                  <span className="material-symbols-outlined text-primary group-hover:translate-x-2 transition-transform">arrow_right_alt</span>
                </div>
              </div>

              {/* Startups Bento Card */}
              <div className="glass-card p-8 rounded-xl micro-glow flex flex-col justify-between group hover:bg-surface-container-high transition-all">
                <div>
                  <div className="w-12 h-12 bg-tertiary/10 rounded-lg flex items-center justify-center mb-6 text-tertiary">
                    <span className="material-symbols-outlined text-2xl">rocket_launch</span>
                  </div>
                  <h3 className="text-xl font-headline font-bold mb-3">Startups</h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed mb-6">
                    Zero-trust access control that scales with your growth. Protect your IP without slowing down your dev velocity.
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-label uppercase tracking-widest text-tertiary/70">Agile Shield</span>
                  <span className="material-symbols-outlined text-tertiary group-hover:translate-x-2 transition-transform">arrow_right_alt</span>
                </div>
              </div>

              {/* Government Bento Card */}
              <div className="glass-card p-8 rounded-xl micro-glow flex flex-col justify-between group hover:bg-surface-container-high transition-all">
                <div>
                  <div className="w-12 h-12 bg-[#0070ff]/10 rounded-lg flex items-center justify-center mb-6 text-[#0070ff]">
                    <span className="material-symbols-outlined text-2xl">account_balance</span>
                  </div>
                  <h3 className="text-xl font-headline font-bold mb-3">Government</h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed mb-6">
                    FedRAMP ready architecture designed to withstand state-sponsored intrusion and protect citizen data.
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-label uppercase tracking-widest text-[#0070ff]/70">Capitol Node</span>
                  <span className="material-symbols-outlined text-[#0070ff] group-hover:translate-x-2 transition-transform">arrow_right_alt</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer / Transactional Suppression (CTA section) */}
        <section className="py-20 container mx-auto px-6">
          <div className="glass-card rounded-2xl p-12 micro-glow flex flex-col md:flex-row items-center justify-between gap-8 border-l-4 border-l-primary">
            <div className="space-y-4">
              <h2 className="text-3xl font-headline font-bold">Ready to Fortify Your Perimeter?</h2>
              <p className="text-on-surface-variant">Deploy Sentinel AI in under 15 minutes. No infrastructure changes required.</p>
            </div>
            <div className="flex gap-4">
              <Link href="/dashboard" className="px-8 py-4 bg-primary text-on-primary rounded-xl font-bold micro-glow hover:scale-105 transition-all">
                Start Protocol Free
              </Link>
              <button onClick={() => alert("Connecting to a live security agent... please wait.")} className="px-8 py-4 text-on-surface rounded-xl font-bold border border-outline-variant hover:bg-surface-container active:scale-95 transition-all">
                Talk to an Agent
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
