"use client";

import React, { useState } from "react";
import { CheckCircle2, ChevronRight, Sparkles } from "lucide-react";
import { pipelineStages } from "@/data/pipeline";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function BehindTheBuildSection() {
  const [selectedStage, setSelectedStage] = useState<string>(pipelineStages[0].id);

  const current = pipelineStages.find((s) => s.id === selectedStage) || pipelineStages[0];

  return (
    <section id="pipeline" className="py-24 sm:py-32 border-b border-[#1E1E24] bg-[#0C0C0F]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          number="03"
          category="Engineering Lifecycle"
          title="Behind The Build"
          subtitle="An interactive product development pipeline demonstrating how complex concepts transition into stable, high-performance production software."
        />

        {/* Pipeline Progression Stepper (Horizontal on desktop / scrollable on mobile) */}
        <div className="mb-10 overflow-x-auto pb-4 scrollbar-none">
          <div className="flex items-center min-w-max gap-2 p-1.5 rounded-xl bg-[#111116] border border-[#22222B]">
            {pipelineStages.map((stage, idx) => {
              const isSelected = stage.id === selectedStage;
              return (
                <button
                  key={stage.id}
                  onClick={() => setSelectedStage(stage.id)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-lg font-mono text-xs transition-all ${
                    isSelected
                      ? "bg-[#E5A84B] text-[#0B0B0C] font-semibold shadow-sm"
                      : "text-[#9E9EA8] hover:text-[#F5F5F3] hover:bg-[#181820]"
                  }`}
                >
                  <span className={`text-[10px] ${isSelected ? "text-[#0B0B0C]/80" : "text-[#62626E]"}`}>
                    {stage.step}
                  </span>
                  <span>{stage.name}</span>
                  {idx < pipelineStages.length - 1 && (
                    <ChevronRight className={`w-3.5 h-3.5 ml-1 ${isSelected ? "text-[#0B0B0C]/60" : "text-[#3A3A46]"}`} />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Stage Detail Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Explanation Block */}
          <div className="lg:col-span-8 p-6 sm:p-8 rounded-xl bg-[#121217] border border-[#252532] space-y-6">
            <div className="flex items-center justify-between border-b border-[#1E1E26] pb-4">
              <div className="flex items-center gap-3">
                <span className="font-mono text-sm px-2.5 py-1 rounded bg-[#E5A84B]/10 border border-[#E5A84B]/20 text-[#E5A84B]">
                  STAGE {current.step}
                </span>
                <h3 className="text-xl sm:text-2xl font-semibold text-[#F5F5F3]">
                  {current.name}
                </h3>
              </div>
              <span className="font-mono text-xs text-[#9E9EA8] hidden sm:inline">
                {current.shortDesc}
              </span>
            </div>

            <div className="space-y-4">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#656570]">
                Methodology & Execution
              </h4>
              <p className="text-sm sm:text-base text-[#9E9EA8] leading-relaxed">
                {current.details}
              </p>
            </div>

            {/* Practical Project Application */}
            <div className="p-4 rounded-lg bg-[#16161D] border border-[#22222A] space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-[#E5A84B]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>REAL-WORLD PROJECT IMPLEMENTATION</span>
              </div>
              <p className="text-xs sm:text-sm text-[#F5F5F3]">
                {current.projectExample}
              </p>
            </div>
          </div>

          {/* Tools & Artifacts Column */}
          <div className="lg:col-span-4 p-6 sm:p-8 rounded-xl bg-[#121217] border border-[#252532] flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="border-b border-[#1E1E26] pb-4">
                <span className="font-mono text-xs text-[#E5A84B] uppercase tracking-wider block">
                  Stage Telemetry
                </span>
                <span className="text-sm font-medium text-[#F5F5F3]">
                  Core Tools & Deliverables
                </span>
              </div>

              <div className="space-y-2">
                {current.tools.map((tool) => (
                  <div
                    key={tool}
                    className="flex items-center gap-2.5 p-2.5 rounded-lg bg-[#16161D] border border-[#202028] text-xs font-mono text-[#F5F5F3]"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#E5A84B] shrink-0" />
                    <span>{tool}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-[#1E1E26]">
              <div className="flex items-center justify-between text-[11px] font-mono text-[#62626E]">
                <span>STAGE STATUS</span>
                <span className="text-emerald-400">ACTIVE WORKFLOW</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
