"use client";

import React from "react";
import Image from "next/image";
import { ArrowDown, ArrowUpRight, ShieldCheck, Terminal, MapPin, Globe } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 border-b border-[#1E1E24] overflow-hidden bg-workshop-grid">
      {/* Subtle top ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-radial-subtle pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial & Statements */}
          <div className="lg:col-span-7 space-y-8">
            {/* Top Identity Meta */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-md bg-[#141418] border border-[#26262F]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]" />
              <span className="font-mono text-xs text-[#9E9EA8]">
                Rafayel <span className="text-[#62626E]">/</span> Full Stack & React Native Developer
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-[#F5F5F3] leading-[1.08]">
                I build digital products,{" "}
                <span className="text-[#E5A84B]">not just websites.</span>
              </h1>
              <p className="text-base sm:text-lg text-[#9E9EA8] max-w-xl leading-relaxed">
                Full-stack web applications, mobile experiences, backend systems, and automation built around real business needs.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#work"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-medium bg-[#E5A84B] text-[#0B0B0C] hover:bg-[#F3B65B] transition-all font-sans shadow-sm"
              >
                <span>Explore My Work</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-medium bg-[#141418] text-[#F5F5F3] border border-[#282832] hover:border-[#3E3E4D] hover:bg-[#1A1A22] transition-all"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="w-4 h-4 text-[#9E9EA8]" />
              </a>

              <a
                href="#workbench"
                className="inline-flex items-center gap-1.5 px-4 py-3 rounded-lg text-xs font-mono text-[#9E9EA8] hover:text-[#F5F5F3] transition-colors"
              >
                <Terminal className="w-3.5 h-3.5 text-[#E5A84B]" />
                <span>Workbench</span>
              </a>
            </div>

            {/* System Status Panel */}
            <div className="p-4 sm:p-5 rounded-lg bg-[#111114] border border-[#222228] space-y-3 max-w-xl">
              <div className="flex items-center justify-between border-b border-[#1E1E24] pb-2.5">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#E5A84B]" />
                  <span className="font-mono text-[11px] font-semibold tracking-wider uppercase text-[#F5F5F3]">
                    System Status
                  </span>
                </div>
                <span className="font-mono text-[10px] text-[#62626E]">
                  RUNNING NORMALLY
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
                <div className="flex items-center justify-between px-2.5 py-1.5 rounded bg-[#16161B] border border-[#202026]">
                  <span className="text-[#9E9EA8]">WEB APPS</span>
                  <span className="text-emerald-400 flex items-center gap-1.5 text-[11px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    ONLINE
                  </span>
                </div>

                <div className="flex items-center justify-between px-2.5 py-1.5 rounded bg-[#16161B] border border-[#202026]">
                  <span className="text-[#9E9EA8]">MOBILE APPS</span>
                  <span className="text-emerald-400 flex items-center gap-1.5 text-[11px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    ONLINE
                  </span>
                </div>

                <div className="flex items-center justify-between px-2.5 py-1.5 rounded bg-[#16161B] border border-[#202026]">
                  <span className="text-[#9E9EA8]">BACKEND SYSTEMS</span>
                  <span className="text-emerald-400 flex items-center gap-1.5 text-[11px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    ONLINE
                  </span>
                </div>

                <div className="flex items-center justify-between px-2.5 py-1.5 rounded bg-[#16161B] border border-[#202026]">
                  <span className="text-[#9E9EA8]">AUTOMATION</span>
                  <span className="text-[#E5A84B] flex items-center gap-1.5 text-[11px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E5A84B]" />
                    READY
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Integrated Portrait & Technical Framing */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              {/* Technical Frame Housing */}
              <div className="relative rounded-xl overflow-hidden border border-[#282834] bg-[#121216] shadow-xl group">
                {/* Header telemetry strip */}
                <div className="flex items-center justify-between px-3.5 py-2.5 bg-[#16161C] border-b border-[#24242E] text-[11px] font-mono text-[#9E9EA8]">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400/80" />
                    <span>OPERATIONAL</span>
                  </div>
                  <span className="text-[#62626E]">ENG_ID: RF-0924</span>
                </div>

                {/* Portrait */}
                <div className="relative aspect-square w-full bg-[#0D0D10]">
                  <Image
                    src="/images/rafayel.jpg"
                    alt="Rafayel — Full Stack & React Native Developer"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                    priority
                    className="object-cover object-center filter grayscale contrast-[1.05] brightness-95 group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C] via-transparent to-transparent opacity-60" />
                </div>

                {/* Bottom Spec Footer */}
                <div className="p-3.5 bg-[#121217] border-t border-[#22222A] space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <div className="flex items-center gap-1.5 text-[#9E9EA8]">
                      <MapPin className="w-3.5 h-3.5 text-[#E5A84B]" />
                      <span>Bangladesh</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-emerald-400">
                      <Globe className="w-3.5 h-3.5" />
                      <span>Working Worldwide</span>
                    </div>
                  </div>
                  <div className="text-[11px] text-[#62626E] font-mono border-t border-[#1C1C22] pt-2 flex items-center justify-between">
                    <span>DIGITAL WORKSHOP</span>
                    <span>NEXT.JS + REACT NATIVE</span>
                  </div>
                </div>
              </div>

              {/* Decorative engineering corner accents */}
              <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-[#E5A84B]/40 pointer-events-none" />
              <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-[#E5A84B]/40 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
