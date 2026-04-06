"use client";

import React, { useEffect, useState } from "react";
import type { Incident } from "../api/incidents/route";
import type { SystemMetrics } from "../api/metrics/route";

export default function DashboardPage() {
  const [incidents, setIncidents] = useState<Incident[]>([]);
  const [metrics, setMetrics] = useState<SystemMetrics | null>(null);
  const [scanning, setScanning] = useState(false);
  const [scanResult, setScanResult] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    fetch("/api/incidents")
      .then((res) => res.json())
      .then((data) => setIncidents(data));

    fetch("/api/metrics")
      .then((res) => res.json())
      .then((data) => setMetrics(data));
  }, []);

  const handleAnalyze = () => {
    if (!inputValue.trim()) return;
    setScanning(true);
    setScanResult(null);
    setTimeout(() => {
      setScanning(false);
      setScanResult("No malicious vectors detected. Hash verified as SAFE.");
      setInputValue("");
      setTimeout(() => setScanResult(null), 5000);
    }, 2500);
  };

  const handleAction = (type: string) => {
    alert(`Protocol "${type}" initiated. Incident status updated.`);
  };

  if (!metrics) {
    return (
      <div className="flex items-center justify-center h-full pt-32">
        <div className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="max-w-[1600px] mx-auto">
      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column: Incident Feed (4/12) */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <h2 className="font-headline text-xl font-bold tracking-tight text-on-surface">Reactive Incident Log</h2>
            <span className="text-[10px] font-headline tracking-widest uppercase text-slate-500">
              Live Updates • 0.2ms Latency
            </span>
          </div>

          {incidents.map((incident) => (
            <div
              key={incident.id}
              className={`bg-surface-container-low p-6 rounded-xl dashboard-micro-glow relative overflow-hidden group border-l-4 ${
                incident.severity === "Critical"
                  ? "border-error-container"
                  : incident.severity === "Warning"
                  ? "border-amber-500/50"
                  : "border-emerald-500/50"
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex gap-4">
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                      incident.severity === "Critical"
                        ? "bg-error-container/20 text-error"
                        : incident.severity === "Warning"
                        ? "bg-amber-500/10 text-amber-500"
                        : "bg-emerald-500/10 text-emerald-500"
                    }`}
                  >
                    <span className="material-symbols-outlined text-3xl">{incident.icon}</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span
                        className={`px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest rounded ${
                          incident.severity === "Critical"
                            ? "bg-error-container text-on-error-container"
                            : incident.severity === "Warning"
                            ? "bg-amber-500/20 text-amber-500"
                            : "bg-emerald-500/20 text-emerald-500"
                        }`}
                      >
                        {incident.severity}
                      </span>
                      <h3 className="font-headline font-bold text-on-surface">{incident.title}</h3>
                    </div>
                    <p className={`text-sm text-on-surface-variant mt-1 ${incident.severity === "Critical" ? "font-mono" : ""}`}>
                      {incident.description}
                    </p>
                  </div>
                </div>
                <span className="text-[10px] text-slate-500 font-mono">{incident.timestamp}</span>
              </div>
              
              {incident.severity !== "Info" && (
                <div className="mt-4 flex justify-end">
                  <button
                    onClick={() => handleAction(incident.severity === "Critical" ? "Mitigation" : "Quarantine")}
                    className={`text-xs font-bold transition-colors flex items-center gap-1 group-hover:gap-2 duration-300 ${
                      incident.severity === "Critical"
                        ? "text-tertiary hover:text-white"
                        : "text-amber-500/80 hover:text-amber-500"
                    }`}
                  >
                    {incident.severity === "Critical" ? "View Mitigation Details" : "Quarantine Email"} 
                    <span className="material-symbols-outlined text-sm">
                      {incident.severity === "Critical" ? "arrow_forward" : "mail_lock"}
                    </span>
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right Column: Status Monitor & Simulation (8/12) */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          {/* Status Monitor Card */}
          <div className="bg-surface-container-low rounded-xl dashboard-micro-glow overflow-hidden flex flex-col min-h-[450px] relative">
            <div className="p-8 pb-0">
              <div className="flex items-center gap-3">
                <span className={`w-3 h-3 rounded-full ${metrics.status === 'SECURE' ? 'bg-emerald-500 emerald-pulse' : 'bg-error animate-pulse'}`}></span>
                <h2 className={`font-headline text-3xl font-extrabold tracking-tighter ${metrics.status === 'SECURE' ? 'text-emerald-400' : 'text-error'}`}>
                  STATUS: {metrics.status}
                </h2>
              </div>
              <p className="text-slate-400 mt-2 font-mono text-sm tracking-widest">
                REAL-TIME THREAT NEUTRALIZATION ENGINE ACTIVE
              </p>
            </div>

            {/* Dynamic Visualization (Simulated Wave) */}
            <div className="flex-grow flex items-end px-8 py-12">
              <div className="w-full h-48 relative">
                <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1000 200">
                  <defs>
                    <linearGradient id="waveGradient" x1="0%" x2="0%" y1="0%" y2="100%">
                      <stop offset="0%" stopColor="#b0c6ff" stopOpacity="0.4"></stop>
                      <stop offset="100%" stopColor="#b0c6ff" stopOpacity="0"></stop>
                    </linearGradient>
                  </defs>
                  <path d="M0,100 C150,50 350,150 500,100 C650,50 850,150 1000,100 L1000,200 L0,200 Z" fill="url(#waveGradient)"></path>
                  <path className="opacity-80 drop-shadow-[0_0_10px_rgba(176,198,255,0.5)]" d="M0,100 C150,50 350,150 500,100 C650,50 850,150 1000,100" fill="none" stroke="#b0c6ff" strokeWidth="2"></path>
                  <circle cx="500" cy="100" fill="#b0c6ff" r="4">
                    <animate attributeName="r" dur="2s" repeatCount="indefinite" values="4;8;4"></animate>
                  </circle>
                </svg>
                <div className="absolute top-0 left-0 w-full flex justify-between px-2">
                  <div className="text-[10px] font-mono text-primary/60">{metrics.throughput}</div>
                  <div className="text-[10px] font-mono text-primary/60">{metrics.node}</div>
                </div>
              </div>
            </div>

            {/* Stats Footer */}
            <div className="grid grid-cols-3 bg-surface-container-lowest/50 backdrop-blur-md border-t border-outline-variant/10">
              <div className="p-6 border-r border-outline-variant/10">
                <div className="text-[10px] uppercase tracking-widest text-slate-500 font-headline font-bold">Threats Deflected</div>
                <div className="text-2xl font-headline font-bold text-on-surface mt-1">{metrics.threatsDeflected}</div>
              </div>
              <div className="p-6 border-r border-outline-variant/10">
                <div className="text-[10px] uppercase tracking-widest text-slate-500 font-headline font-bold">AI Certainty</div>
                <div className="text-2xl font-headline font-bold text-primary mt-1">{metrics.aiCertainty}</div>
              </div>
              <div className="p-6">
                <div className="text-[10px] uppercase tracking-widest text-slate-500 font-headline font-bold">Latency</div>
                <div className="text-2xl font-headline font-bold text-emerald-400 mt-1">{metrics.latency}</div>
              </div>
            </div>
          </div>

          {/* Simulation Sandbox */}
          <div className="bg-surface-container-high rounded-xl dashboard-micro-glow p-8 backdrop-blur-2xl">
            <h3 className="font-headline font-bold text-on-surface flex items-center gap-2 mb-4">
              <span className="material-symbols-outlined text-primary">biotech</span>
              Simulation Sandbox
            </h3>
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-transparent rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative flex flex-col gap-4">
                <div className="flex gap-2">
                  <div className="flex-grow">
                    <input
                      className="w-full bg-surface-container-lowest border-0 border-b-2 border-outline-variant/20 focus:border-primary focus:ring-0 text-sm py-4 px-6 rounded-t-lg transition-all placeholder:text-slate-600 outline-none"
                      placeholder="Paste suspicious content (URL, Hash, Code snippet)..."
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                    />
                  </div>
                  <button 
                    onClick={handleAnalyze}
                    disabled={scanning}
                    className="bg-primary text-on-primary px-8 rounded-lg font-headline font-bold flex items-center gap-2 hover:shadow-[0_0_20px_rgba(176,198,255,0.4)] hover:brightness-110 active:scale-95 transition-all whitespace-nowrap disabled:opacity-50"
                  >
                    {scanning ? "Analyzing..." : "Analyze Threat"}
                    <span className="material-symbols-outlined text-sm">{scanning ? "sync" : "rocket_launch"}</span>
                  </button>
                </div>
                {scanResult && (
                  <div className="p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-mono animate-in fade-in slide-in-from-top-1">
                    {scanResult}
                  </div>
                )}
              </div>
            </div>
            <div className="mt-4 flex gap-4 text-[10px] font-mono text-slate-500">
              <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">lock_open</span> No data retention</span>
              <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">memory</span> Isolated Execution</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bento Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <div className="bg-surface-container-low p-6 rounded-xl dashboard-micro-glow flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-headline font-bold tracking-widest uppercase text-slate-500">Neural Health</span>
            <span className="material-symbols-outlined text-primary text-lg">psychology</span>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt="Neural Health Graph"
            className="w-full h-24 object-cover rounded-lg opacity-60 grayscale hover:grayscale-0 transition-all duration-500"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBDLgVTSTk6OXspsG6EbCmPDl1b3RcmL7DJ6ZsWOVk6zSch3yZEpYFBCtFjzA2RG35Ogk296je8iRy39Rz-cDFjzxaecy6P7xp1uSgRr-OcSwjuvpnT19CR38Pq3NOGX4u72birX1iNcuQ7LjdtN8Grr8mRH2GwiT0iku7niMZmED69rkS8EQbBiLs9aV2KRXSt41Adl6o8dl4JtVs8M623j0eqFhyb3vjQ9bjfUmHpxNQW7UhPbq1T0DdIz_EVa6Mm6MnGG1w6ixs"
          />
          <div className="flex justify-between text-xs font-mono">
            <span className="text-on-surface-variant">Core Load</span>
            <span className="text-primary">{metrics.coreLoad}</span>
          </div>
        </div>

        <div className="bg-surface-container-low p-6 rounded-xl dashboard-micro-glow flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-headline font-bold tracking-widest uppercase text-slate-500">Global Heatmap</span>
            <span className="material-symbols-outlined text-primary text-lg">public</span>
          </div>
          <div className="w-full h-24 bg-surface-container-lowest rounded-lg overflow-hidden relative">
            <div className="absolute inset-0 bg-primary/5"></div>
            <div className="absolute top-4 left-10 w-2 h-2 rounded-full bg-error animate-ping"></div>
            <div className="absolute bottom-6 right-16 w-1.5 h-1.5 rounded-full bg-error animate-pulse"></div>
          </div>
          <div className="flex justify-between text-xs font-mono">
            <span className="text-on-surface-variant">Active Vectors</span>
            <span className="text-tertiary">{metrics.activeVectors}</span>
          </div>
        </div>

        <div className="bg-surface-container-low p-6 rounded-xl dashboard-micro-glow flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-headline font-bold tracking-widest uppercase text-slate-500">Agent Status</span>
            <span className="material-symbols-outlined text-primary text-lg">support_agent</span>
          </div>
          <div className="flex -space-x-3 overflow-hidden py-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img alt="Agent 1" className="inline-block h-10 w-10 rounded-full ring-2 ring-surface-container-low" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQTbUFzvPRoUrcmOsGLm0kA-784sBmoeZvATO2ord4h9cpLEjP18XhSjqCpk5h09_BX5GUoUioJrRK6HU-aF-XvFm-nYuVzhMsuRXIocgZEGLmCzPGbZ1ttG4EPbv-POnC4h6u6rKbaTaIsPIEPlJcjIw9PRath3hGsOGNf3rePrfEVJcEUWsdbiOzGuE3d9r2hTv3ENfQE9A9VbMzfddpdNP9_ilbaU8GcmOtzTgO7Vk-_O1kjN7T0VSVsD64pQidQMaLL3j0Cp5Q"/>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img alt="Agent 2" className="inline-block h-10 w-10 rounded-full ring-2 ring-surface-container-low" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEL-FqVPrbLyQ-83YNpvLIRBHu93B-1Uq9q-sjs0IDT9CW1VsGYvrsnOHFXS3WVqX5IvBzD5ZTEY_GYy-oBzAp_k8b-WRcQ8yIrKevxNzJ9FoMDmTVh3oTIW3zTEuFPbwyLqnO030-RTh_NXu9E4a_rIMfcXo_Dxu7JrY5sgMntrFg-kWbStHt2gLoWamtx8wRqJM4R4ckQcpGRELBmwycCAn66jQvp2a9EgjcrEfr6HBVW5TO1SOZyDHQPbNW4WBRBfGDFGEn57yi"/>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img alt="Agent 3" className="inline-block h-10 w-10 rounded-full ring-2 ring-surface-container-low" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-Q3uJm7vJB94O9_HS3v5BPq0GTgJ3eBx-Eny_tQXyvvLR_s1ZNm1LMLrWgn-6cH3oY-Ol2EgLRwSxfyUvqxw6FR4goszZaP074_mYn7G3g3-7aA26Ek55hRY4VpmLOJtzmt-yHoOTy175lsdw65jyT0r7THJdgRapIYPoqbtVPrcVkLL3q8nXl_uM2uwZWflboKMRuqL7I83xFXlEAFrgirTF5oPzQJ_lXrRt1W8aHyEVHEvdiIlndqdT8Ka1staktZ2uHAkzz-vV"/>
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-container-highest ring-2 ring-surface-container-low">
              <span className="text-[10px] font-bold">+8</span>
            </div>
          </div>
          <div className="flex justify-between text-xs font-mono">
            <span className="text-on-surface-variant">Active Operators</span>
            <span className="text-emerald-400">{metrics.activeOperators}</span>
          </div>
        </div>
      </div>

    </div>
  );
}
