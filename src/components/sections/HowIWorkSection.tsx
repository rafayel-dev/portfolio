"use client";

import React from "react";
import { Check } from "lucide-react";
import { workflowSteps } from "@/data/workflow";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function HowIWorkSection() {
  return (
    <section className="py-24 sm:py-32 border-b border-[#1E1E24]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          number="06"
          category="Methodology"
          title="How I Work"
          subtitle="A structured, six-stage product delivery process engineered to eliminate ambiguities, maintain velocity, and ship dependable software."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workflowSteps.map((step) => (
            <div
              key={step.number}
              className="p-6 rounded-xl bg-[#111116] border border-[#24242E] hover:border-[#383848] transition-all flex flex-col justify-between space-y-6 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-[#1E1E26] pb-3">
                  <span className="font-mono text-xs text-[#E5A84B] px-2 py-0.5 rounded bg-[#E5A84B]/10 border border-[#E5A84B]/20">
                    STEP {step.number}
                  </span>
                  <span className="font-mono text-[10px] text-[#62626E] uppercase">
                    STAGE
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-lg font-semibold text-[#F5F5F3] group-hover:text-[#E5A84B] transition-colors">
                    {step.title}
                  </h3>
                  <span className="text-xs font-mono text-[#9E9EA8] block">
                    {step.subtitle}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#9E9EA8] leading-relaxed">
                  {step.summary}
                </p>
              </div>

              {/* Deliverables */}
              <div className="space-y-2 pt-4 border-t border-[#1C1C24]">
                <span className="font-mono text-[10px] uppercase text-[#62626E] block">
                  Key Deliverables
                </span>
                <div className="space-y-1.5">
                  {step.deliverables.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-2 text-xs text-[#F5F5F3]"
                    >
                      <Check className="w-3.5 h-3.5 text-[#E5A84B] shrink-0 mt-0.5" />
                      <span className="text-[11px] text-[#9E9EA8]">{item}</span>
                    </div>
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
