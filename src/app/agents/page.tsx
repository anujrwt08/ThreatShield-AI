"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import type { Agent } from "../api/agents/route";

export default function AgentsPage() {
  const [agents, setAgents] = useState<Agent[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/agents")
      .then((res) => res.json())
      .then((data) => {
        setAgents(data);
        setLoading(false);
      });
  }, []);

  const toggleDeployment = (id: string) => {
    setAgents((prev) =>
      prev.map((agent) => {
        if (agent.id === id) {
          const newStatus = agent.status === "Online" ? "Offline" : "Online";
          return { ...agent, status: newStatus as any, load: newStatus === "Online" ? 25 : 0 };
        }
        return agent;
      })
    );
  };

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

      {/* SideNavBar */}
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
            <div className="p-3 rounded-xl transition-all bg-[#b0c6ff]/10 text-[#b0c6ff] border-r-2 border-[#b0c6ff]">
              <span className="material-symbols-outlined">security</span>
            </div>
            <span className="font-headline text-[10px] uppercase tracking-widest text-[#b0c6ff]">Agents</span>
          </Link>
        </div>
      </aside>

      <div className="md:ml-20 pt-32 pb-20 px-8">
        <div className="max-w-6xl mx-auto text-on-surface">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h1 className="text-5xl font-headline font-bold mb-4">Neural <span className="text-primary">Agent Fleet</span></h1>
              <p className="text-on-surface-variant max-w-xl">Configure and deploy autonomous security nodes across your perimeter. Each agent specializes in distinct neural defense protocols.</p>
            </div>
            <button className="px-6 py-3 bg-primary text-on-primary rounded-xl font-bold flex items-center gap-2 hover:brightness-110 active:scale-95 transition-all">
              <span className="material-symbols-outlined">add</span>
              Deploy New Agent
            </button>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((n) => (
                <div key={n} className="h-64 glass-card rounded-2xl animate-pulse"></div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {agents.map((agent) => (
                <div key={agent.id} className="glass-card p-8 rounded-2xl border border-outline-variant/10 relative overflow-hidden group">
                  <div className={`absolute top-0 right-0 px-4 py-1 text-[10px] font-bold uppercase tracking-widest rounded-bl-xl ${
                    agent.status === "Online" ? "bg-emerald-500/20 text-emerald-400" : 
                    agent.status === "Deploying" ? "bg-primary/20 text-primary animate-pulse" :
                    "bg-surface-container-high text-slate-500"
                  }`}>
                    {agent.status}
                  </div>

                  <div className="flex items-center gap-4 mb-8">
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${
                      agent.status === "Online" ? "bg-primary/10 text-primary" : "bg-surface-container-high text-slate-600"
                    }`}>
                      <span className="material-symbols-outlined text-3xl">{agent.icon}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-headline font-bold">{agent.name}</h3>
                      <div className="text-xs text-on-surface-variant">{agent.type}</div>
                    </div>
                  </div>

                  <div className="space-y-4 mb-8">
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-500 font-headline uppercase tracking-widest">Neural Load</span>
                      <span className="font-mono">{agent.load}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
                      <div 
                        className={`h-full transition-all duration-1000 ${agent.load > 60 ? "bg-tertiary" : "bg-primary"}`}
                        style={{ width: `${agent.load}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-slate-500">Certainty Rate</span>
                      <span className="text-primary">{agent.threatDetection}%</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button 
                      onClick={() => toggleDeployment(agent.id)}
                      className={`flex-grow py-2.5 rounded-lg text-sm font-bold transition-all border ${
                        agent.status === "Online" 
                        ? "border-error/20 text-error hover:bg-error/5" 
                        : "border-primary/20 text-primary hover:bg-primary/10"
                      }`}
                    >
                      {agent.status === "Online" ? "Deactivate" : "Deploy"}
                    </button>
                    <button className="p-2.5 rounded-lg bg-surface-container-high text-on-surface hover:bg-surface-container-highest transition-all">
                      <span className="material-symbols-outlined text-xl">settings</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
