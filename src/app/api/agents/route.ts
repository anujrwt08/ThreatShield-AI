import { NextResponse } from "next/server";

export interface Agent {
  id: string;
  name: string;
  status: "Online" | "Idle" | "Deploying" | "Offline";
  type: string;
  load: number;
  threatDetection: number;
  icon: string;
}

const agents: Agent[] = [
  {
    id: "sentinel-alpha",
    name: "Sentinel Alpha",
    status: "Online",
    type: "Perimeter Defense",
    load: 42,
    threatDetection: 99.8,
    icon: "shield",
  },
  {
    id: "neural-node-02",
    name: "Neural Node-02",
    status: "Online",
    type: "AI Threat Neutralizer",
    load: 68,
    threatDetection: 99.98,
    icon: "psychology",
  },
  {
    id: "edge-guard-v4",
    name: "Edge Guard v4",
    status: "Idle",
    type: "Packet Inspector",
    load: 12,
    threatDetection: 98.4,
    icon: "radar",
  },
  {
    id: "flow-monitor",
    name: "Flow Monitor",
    status: "Offline",
    type: "Traffic Analysis",
    load: 0,
    threatDetection: 97.2,
    icon: "dynamic_feed",
  },
  {
    id: "stealth-probe",
    name: "Stealth Probe-X",
    status: "Deploying",
    type: "Reconnaissance",
    load: 15,
    threatDetection: 99.1,
    icon: "visibility",
  },
];

export async function GET() {
  return NextResponse.json(agents);
}
