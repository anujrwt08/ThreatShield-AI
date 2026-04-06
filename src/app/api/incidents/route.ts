import { NextResponse } from "next/server";

export type Incident = {
  id: string;
  type: string;
  severity: "Critical" | "Warning" | "Info";
  title: string;
  description: string;
  timestamp: string;
  icon: string;
};

export async function GET() {
  const incidents: Incident[] = [
    {
      id: "inc-001",
      type: "database",
      severity: "Critical",
      title: "SQL Injection Blocked",
      description: "Source IP: 185.212.44.102",
      timestamp: "14:22:01",
      icon: "database"
    },
    {
      id: "inc-002",
      type: "phishing",
      severity: "Warning",
      title: "Phishing Attempt Flagged",
      description: "92% Confidence Score • External Gateway",
      timestamp: "14:18:45",
      icon: "phishing"
    },
    {
      id: "inc-003",
      type: "system",
      severity: "Info",
      title: "System Scan Complete",
      description: "10,402 logs analyzed across 4 clusters",
      timestamp: "13:55:12",
      icon: "fact_check"
    }
  ];

  return NextResponse.json(incidents);
}
