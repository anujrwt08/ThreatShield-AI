import { NextResponse } from "next/server";

export type SystemMetrics = {
  status: "SECURE" | "WARNING" | "BREACH";
  threatsDeflected: string;
  aiCertainty: string;
  latency: string;
  throughput: string;
  node: string;
  coreLoad: string;
  activeVectors: string;
  activeOperators: string;
};

export async function GET() {
  const metrics: SystemMetrics = {
    status: "SECURE",
    threatsDeflected: "1,204",
    aiCertainty: "99.98%",
    latency: "12ms",
    throughput: "4.2 GB/s THROUGHPUT",
    node: "NODE: ALPHA-SEC-01",
    coreLoad: "24.5%",
    activeVectors: "14 Nodes",
    activeOperators: "11 Online"
  };

  return NextResponse.json(metrics);
}
