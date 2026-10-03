"use client";

import React, { useState } from "react";
import { Globe, Smartphone, Server, Cpu, CheckCircle2, ArrowRight } from "lucide-react";
import { capabilities } from "@/data/capabilities";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function CapabilitiesSection() {
  const [activeTab, setActiveTab] = useState<string>(capabilities[0].id);

  const getIcon = (id: string) => {
    switch (id) {
      case "web":
        return Globe;
      case "mobile":
        return Smartphone;
      case "systems":
        return Server;
      case "automation":
      default:
        return Cpu;
    }
  };

  return (
    <section id="capabilities" className="py-24 sm:py-32 border-b border-[#1E1E24] bg-[#0E0E11]/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          number="01"
          category="Capabilities"
          title="What I Build"
          subtitle="Four core engineering pillars engineered around real products, scalable systems, and operational automation."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Capability Selector Cards */}
          <div className="lg:col-span-5 space-y-3">
            {capabilities.map((cap) => {
              const Icon = getIcon(cap.id);
              const isActive = activeTab === cap.id;

              return (
                <div
                  key={cap.id}
                  onClick={() => setActiveTab(cap.id)}
                  onMouseEnter={() => setActiveTab(cap.id)}
                  className={`p-5 rounded-xl cursor-pointer border transition-all text-left relative overflow-hidden group ${
                    isActive
                      ? "bg-[#16161D] border-[#E5A84B]/50 shadow-lg"
                      : "bg-[#111115] border-[#222228] hover:border-[#32323D] hover:bg-[#141419]"
                  }`}
                >
                  {/* Subtle active left accent bar */}
                  {isActive && (
                    <div className="absolute top-0 bottom-0 left-0 w-1 bg-[#E5A84B]" />
                  )}

                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className={`p-2.5 rounded-lg border transition-colors ${
                          isActive
                            ? "bg-[#E5A84B]/10 border-[#E5A84B]/30 text-[#E5A84B]"
                            : "bg-[#181820] border-[#262630] text-[#9E9EA8] group-hover:text-[#F5F5F3]"
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-[10px] text-[#62626E]">
                            {cap.code}
                          </span>
                        </div>
                        <h3 className="text-base sm:text-lg font-medium text-[#F5F5F3]">
                          {cap.title}
                        </h3>
                      </div>
                    </div>
                    <ArrowRight
                      className={`w-4 h-4 mt-2 transition-transform ${
                        isActive
                          ? "text-[#E5A84B] translate-x-1"
                          : "text-[#62626E] group-hover:text-[#9E9EA8]"
                      }`}
                    />
                  </div>

                  <p className="mt-3 text-xs sm:text-sm text-[#9E9EA8] line-clamp-2">
                    {cap.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {cap.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-[11px] px-2 py-0.5 rounded bg-[#1A1A22] text-[#9E9EA8] border border-[#252530]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Deep-Dive Workshop Detail Panel */}
          <div className="lg:col-span-7">
            {capabilities.map((cap) => {
              if (cap.id !== activeTab) return null;
              const Icon = getIcon(cap.id);

              return (
                <div
                  key={cap.id}
                  className="h-full p-6 sm:p-8 rounded-xl bg-[#121217] border border-[#282834] flex flex-col justify-between space-y-6 animate-in fade-in duration-200"
                >
                  <div className="space-y-6">
                    {/* Header */}
                    <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#202028] pb-5">
                      <div className="flex items-center gap-3">
                        <div className="p-3 rounded-lg bg-[#E5A84B]/10 border border-[#E5A84B]/20 text-[#E5A84B]">
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <span className="font-mono text-xs text-[#E5A84B] uppercase tracking-wider">
                            {cap.code} — Specification
                          </span>
                          <h3 className="text-xl sm:text-2xl font-semibold text-[#F5F5F3]">
                            {cap.title}
                          </h3>
                        </div>
                      </div>
                      <span className="font-mono text-xs text-[#62626E]">
                        {cap.subtitle}
                      </span>
                    </div>

                    {/* Overview description */}
                    <p className="text-sm sm:text-base text-[#9E9EA8] leading-relaxed">
                      {cap.description}
                    </p>

                    {/* Architectural Focus */}
                    <div className="p-4 rounded-lg bg-[#17171F] border border-[#242430]">
                      <span className="font-mono text-[11px] uppercase tracking-wider text-[#E5A84B] block mb-1.5">
                        Architectural Standard
                      </span>
                      <p className="text-xs sm:text-sm text-[#F5F5F3] leading-relaxed">
                        {cap.architecturalFocus}
                      </p>
                    </div>

                    {/* Deliverables List */}
                    <div className="space-y-3">
                      <span className="font-mono text-xs uppercase tracking-wider text-[#9E9EA8] block">
                        What I Deliver
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {cap.deliverables.map((item) => (
                          <div
                            key={item}
                            className="flex items-start gap-2 p-2.5 rounded-lg bg-[#141419] border border-[#202028] text-xs text-[#F5F5F3]"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#E5A84B] shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Tech stack badge list */}
                  <div className="pt-6 border-t border-[#202028]">
                    <span className="font-mono text-[11px] uppercase text-[#62626E] block mb-2">
                      Primary Technologies
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {cap.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="font-mono text-xs px-2.5 py-1 rounded bg-[#181822] text-[#F5F5F3] border border-[#2E2E3C]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
