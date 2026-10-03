"use client";

import React from "react";
import { Zap } from "lucide-react";
import { automationItems } from "@/data/automation";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StatusBadge } from "@/components/ui/StatusBadge";

export function AutomationLabSection() {
  return (
    <section id="automation" className="py-24 sm:py-32 border-b border-[#1E1E24]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          number="04"
          category="Automation Lab"
          title="Things I've Automated"
          subtitle="Engineering beyond user interfaces: autonomous background daemons, Telegram bots, and event-driven workflow integrations that run silently and reliably."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {automationItems.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-xl bg-[#111116] border border-[#24242E] hover:border-[#383848] transition-all flex flex-col justify-between space-y-6 group"
            >
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-[#E5A84B]">
                    {item.number}
                  </span>
                  <StatusBadge status={item.status} />
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-medium text-[#F5F5F3] group-hover:text-[#E5A84B] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#E5A84B]/90 font-mono">
                    {item.purpose}
                  </p>
                </div>

                <p className="text-xs text-[#9E9EA8] leading-relaxed">
                  {item.description}
                </p>

                {/* Trigger mechanism */}
                <div className="p-3 rounded-lg bg-[#16161D] border border-[#202028] space-y-1">
                  <span className="font-mono text-[10px] text-[#62626E] uppercase block">
                    Execution Trigger
                  </span>
                  <span className="font-mono text-xs text-[#F5F5F3] flex items-center gap-1.5">
                    <Zap className="w-3 h-3 text-[#E5A84B]" />
                    {item.triggerType}
                  </span>
                </div>
              </div>

              {/* Technologies */}
              <div className="pt-4 border-t border-[#1F1F27] space-y-2">
                <span className="font-mono text-[10px] uppercase text-[#62626E] block">
                  Tech Stack
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {item.technology.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-[11px] px-2 py-0.5 rounded bg-[#181822] text-[#9E9EA8] border border-[#262633]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
