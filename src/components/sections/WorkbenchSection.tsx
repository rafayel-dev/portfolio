"use client";

import React, { useState } from "react";
import { Code, Server, Database, Smartphone, GitBranch } from "lucide-react";
import { workbenchCategories } from "@/data/workbench";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function WorkbenchSection() {
  const [activeCategory, setActiveCategory] = useState<string>("FRONTEND");

  const getIcon = (cat: string) => {
    switch (cat) {
      case "FRONTEND":
        return Code;
      case "BACKEND":
        return Server;
      case "DATABASE":
        return Database;
      case "MOBILE":
        return Smartphone;
      case "TOOLS":
      default:
        return GitBranch;
    }
  };

  const selectedData =
    workbenchCategories.find((c) => c.category === activeCategory) ||
    workbenchCategories[0];

  return (
    <section id="workbench" className="py-24 sm:py-32 border-b border-[#1E1E24] bg-[#0E0E12]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          number="05"
          category="Technical Toolkit"
          title="Developer Workbench"
          subtitle="A disciplined, battle-tested engineering stack. Strictly verified technologies deployed across production systems — no speculative tool lists."
        />

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-10 border-b border-[#202028] pb-4">
          {workbenchCategories.map((cat) => {
            const Icon = getIcon(cat.category);
            const isSelected = activeCategory === cat.category;
            return (
              <button
                key={cat.category}
                onClick={() => setActiveCategory(cat.category)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-mono transition-all ${
                  isSelected
                    ? "bg-[#E5A84B] text-[#0B0B0C] font-semibold"
                    : "bg-[#141419] text-[#9E9EA8] hover:text-[#F5F5F3] border border-[#24242E] hover:border-[#343440]"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.category}</span>
                <span className={`text-[10px] ml-1 px-1.5 py-0.2 rounded ${isSelected ? "bg-black/20 text-[#0B0B0C]" : "bg-[#1E1E26] text-[#656570]"}`}>
                  {cat.skills.length}
                </span>
              </button>
            );
          })}
        </div>

        {/* Category Details & Skills Grid */}
        <div className="space-y-6">
          <div className="flex items-center justify-between text-xs font-mono text-[#9E9EA8]">
            <span>CATEGORY FOCUS: <strong className="text-[#F5F5F3]">{selectedData.category}</strong></span>
            <span>{selectedData.description}</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {selectedData.skills.map((skill) => (
              <div
                key={skill.name}
                className="p-5 rounded-xl bg-[#121217] border border-[#24242E] hover:border-[#383848] transition-all flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="text-base font-medium text-[#F5F5F3] group-hover:text-[#E5A84B] transition-colors">
                      {skill.name}
                    </h4>
                    <span className="font-mono text-[10px] text-[#E5A84B] px-2 py-0.5 rounded bg-[#E5A84B]/10 border border-[#E5A84B]/20">
                      {skill.level}
                    </span>
                  </div>
                  <p className="text-xs text-[#9E9EA8] leading-relaxed">
                    {skill.context}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#1C1C24] flex items-center justify-between text-[10px] font-mono text-[#62626E]">
                  <span>VERIFIED STATUS</span>
                  <span className="text-emerald-400">PRODUCTION TESTED</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
