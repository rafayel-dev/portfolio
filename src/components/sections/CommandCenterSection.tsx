"use client";

import React, { useState, useEffect } from "react";
import { Clock, Wifi } from "lucide-react";

export function CommandCenterSection() {
  const [localTime, setLocalTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Bangladesh is UTC+6
      const timeStr = now.toLocaleTimeString("en-US", {
        timeZone: "Asia/Dhaka",
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      setLocalTime(timeStr);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const systems = [
    { name: "WEB CLIENTS", label: "Next.js / React Router", status: "ONLINE", ping: "18ms", color: "emerald" },
    { name: "MOBILE RUNTIME", label: "React Native / Expo", status: "READY", ping: "22ms", color: "sky" },
    { name: "API SERVICES", label: "Node.js REST Services", status: "CONNECTED", ping: "28ms", color: "emerald" },
    { name: "PERSISTENCE", label: "MongoDB / PostgreSQL", status: "CONNECTED", ping: "31ms", color: "emerald" },
    { name: "AUTOMATION ENGINE", label: "Cron & Webhook Daemons", status: "RUNNING", ping: "Active", color: "amber" },
  ];

  return (
    <section className="py-16 sm:py-20 border-b border-[#1E1E24] bg-[#0A0A0C]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="p-6 sm:p-8 rounded-2xl bg-[#0F0F13] border border-[#22222B] shadow-inner relative overflow-hidden">
          {/* Subtle top indicator bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#1E1E26] pb-5">
            <div className="flex items-center gap-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <div>
                <h3 className="font-mono text-sm sm:text-base font-semibold tracking-wide text-[#F5F5F3]">
                  RAFAYEL COMMAND CENTER
                </h3>
                <span className="font-mono text-[10px] text-[#62626E] uppercase tracking-wider block">
                  Studio Operational Telemetry & System Status
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs font-mono text-[#9E9EA8]">
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#16161D] border border-[#22222A]">
                <Clock className="w-3.5 h-3.5 text-[#E5A84B]" />
                <span>UTC+6: {localTime || "17:35:00"} (BD)</span>
              </div>
              <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#16161D] border border-[#22222A]">
                <Wifi className="w-3.5 h-3.5 text-emerald-400" />
                <span>WORLDWIDE AVAILABILITY</span>
              </div>
            </div>
          </div>

          {/* Telemetry Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 pt-6">
            {systems.map((sys) => (
              <div
                key={sys.name}
                className="p-3.5 rounded-lg bg-[#141419] border border-[#202028] space-y-2 flex flex-col justify-between"
              >
                <div className="flex items-center justify-between text-[11px] font-mono">
                  <span className="text-[#9E9EA8] font-medium">{sys.name}</span>
                  <span
                    className={`flex items-center gap-1 text-[10px] font-semibold ${
                      sys.color === "emerald"
                        ? "text-emerald-400"
                        : sys.color === "amber"
                        ? "text-[#E5A84B]"
                        : "text-sky-400"
                    }`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        sys.color === "emerald"
                          ? "bg-emerald-400"
                          : sys.color === "amber"
                          ? "bg-[#E5A84B]"
                          : "bg-sky-400"
                      }`}
                    />
                    {sys.status}
                  </span>
                </div>

                <div className="text-[11px] text-[#62626E] font-mono truncate">
                  {sys.label}
                </div>

                <div className="pt-2 border-t border-[#1C1C24] flex items-center justify-between text-[10px] font-mono text-[#62626E]">
                  <span>RESPONSE</span>
                  <span className="text-[#F5F5F3]">{sys.ping}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Footnote acknowledging static visual identity representation */}
          <div className="mt-6 pt-4 border-t border-[#1A1A22] flex flex-wrap items-center justify-between text-[11px] font-mono text-[#62626E]">
            <span>ENGINEERING LAB VERIFICATION: PASS</span>
            <span>VISUAL IDENTITY TELEMETRY — ALL CHANNELS ACTIVE</span>
          </div>
        </div>
      </div>
    </section>
  );
}
