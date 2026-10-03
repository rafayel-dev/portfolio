"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight, Terminal } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function AboutSection() {
  return (
    <section id="about" className="py-24 sm:py-32 border-b border-[#1E1E24] bg-[#0E0E12]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          number="07"
          category="Background"
          title="About Me"
          subtitle="A perspective on software craftsmanship, engineering discipline, and turning complex product briefs into dependable software."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Portrait Visual Column */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden border border-[#262633] bg-[#121217] shadow-xl group">
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src="/images/rafayel.jpg"
                  alt="Rafayel — Full Stack & React Native Developer"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center filter grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E12] via-transparent to-transparent opacity-70" />
              </div>

              <div className="p-5 bg-[#121217] border-t border-[#202028] space-y-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-[#F5F5F3] font-medium">Rafayel</span>
                  <span className="text-[#E5A84B]">Full Stack & Mobile Engineer</span>
                </div>
                <div className="text-[11px] font-mono text-[#62626E] flex items-center justify-between">
                  <span>LOCATION: BANGLADESH</span>
                  <span className="text-emerald-400">WORKING WORLDWIDE</span>
                </div>
              </div>
            </div>
          </div>

          {/* Editorial Content Column */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div className="space-y-4">
              <span className="font-mono text-xs uppercase tracking-widest text-[#E5A84B]">
                Product Philosophy
              </span>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#F5F5F3] tracking-tight leading-tight">
                I turn ideas into working products.
              </h3>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-[#9E9EA8] leading-relaxed">
              <p>
                I am a full-stack engineer and React Native developer based in Bangladesh, collaborating with founders, startups, and product teams across the globe.
              </p>
              <p>
                Too often, software gets stuck in an unnatural split: beautiful interfaces that break on unstable backends, or powerful architectures crippled by clunky, confusing user interfaces. I bridge that gap by treating design, frontend performance, data models, and automation as one continuous discipline.
              </p>
              <p>
                Whether building a high-velocity e-commerce engine like BESTKID, architecting an artisanal marketplace with custom inventory states, or deploying event-driven Telegram automation bots, my focus remains constant: clean, dependable code that solves tangible business challenges.
              </p>
            </div>

            {/* Principles Matrix */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 rounded-lg bg-[#141419] border border-[#22222A] space-y-1">
                <span className="font-mono text-xs text-[#E5A84B] block">END-TO-END OWNERSHIP</span>
                <p className="text-xs text-[#9E9EA8]">From wireframe to deployment pipeline, delivering full operational solutions.</p>
              </div>

              <div className="p-3.5 rounded-lg bg-[#141419] border border-[#22222A] space-y-1">
                <span className="font-mono text-xs text-[#E5A84B] block">PERFORMANCE FIRST</span>
                <p className="text-xs text-[#9E9EA8]">Zero layout shift, responsive layouts, sub-second responses, and lightweight bundles.</p>
              </div>
            </div>

            {/* Direct Connect */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-mono bg-[#E5A84B] text-[#0B0B0C] hover:bg-[#F3B65B] font-medium transition-all"
              >
                <span>Discuss Your Project</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-xs font-mono text-[#9E9EA8] hover:text-[#F5F5F3] border border-[#22222B] hover:border-[#383848] transition-all"
              >
                <Terminal className="w-3.5 h-3.5 text-[#E5A84B]" />
                <span>GitHub Profile</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
