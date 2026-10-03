"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, FileText } from "lucide-react";
import { projects } from "@/data/projects";
import { Project } from "@/types";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { CaseStudyModal } from "./CaseStudyModal";

export function FeaturedWorkSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const heroProject = projects.find((p) => p.id === "bestkid") || projects[0];
  const secondaryProjects = projects.filter((p) => p.id !== heroProject.id);

  return (
    <section id="work" className="py-24 sm:py-32 border-b border-[#1E1E24]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          number="02"
          category="Portfolio"
          title="Selected Work"
          subtitle="A few digital products I've designed and built — focusing on real business operations, user flow clarity, and high-performance engineering."
        />

        {/* Major Showcase Project: BESTKID */}
        <div
          id={`project-${heroProject.id}`}
          className="mb-16 rounded-2xl bg-[#111116] border border-[#252530] overflow-hidden group hover:border-[#383848] transition-all"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Visual Screen */}
            <div className="lg:col-span-7 relative bg-[#0D0D10] overflow-hidden border-b lg:border-b-0 lg:border-r border-[#22222B]">
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src={heroProject.image}
                  alt={heroProject.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover object-top filter brightness-95 group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
              <div className="absolute top-4 left-4 z-10">
                <span className="font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 rounded bg-[#0B0B0C]/85 backdrop-blur-md border border-[#252530] text-[#E5A84B]">
                  FEATURED BUILD
                </span>
              </div>
            </div>

            {/* Editorial Content */}
            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-[#E5A84B]">
                    {heroProject.category}
                  </span>
                  <StatusBadge status={heroProject.status} />
                </div>

                <h3 className="text-2xl sm:text-3xl font-semibold text-[#F5F5F3] tracking-tight">
                  {heroProject.title}
                </h3>

                <p className="text-sm sm:text-base text-[#9E9EA8] leading-relaxed">
                  {heroProject.tagline}
                </p>

                <div className="space-y-2 pt-2 border-t border-[#1F1F28]">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-[#656570]">ROLE</span>
                    <span className="text-[#F5F5F3]">{heroProject.role}</span>
                  </div>
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-[#656570]">PRIMARY TECH</span>
                    <span className="text-[#E5A84B]">React Router 7</span>
                  </div>
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-[#656570]">DELIVERY</span>
                    <span className="text-[#F5F5F3]">{heroProject.timeline}</span>
                  </div>
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {heroProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-[11px] px-2 py-0.5 rounded bg-[#181822] text-[#9E9EA8] border border-[#252532]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-[#1F1F28] flex items-center justify-between">
                <button
                  onClick={() => setSelectedProject(heroProject)}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-mono bg-[#E5A84B] text-[#0B0B0C] hover:bg-[#F3B65B] font-medium transition-all"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>View Case Study</span>
                </button>
                <span className="font-mono text-[11px] text-[#656570]">
                  Full technical breakdown
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary Editorial Project Cards: Panto, Sokher Baksho, Eclipse Denim */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {secondaryProjects.map((project) => (
            <div
              key={project.id}
              id={`project-${project.id}`}
              className="rounded-xl bg-[#111116] border border-[#24242E] overflow-hidden flex flex-col justify-between group hover:border-[#383848] transition-all"
            >
              <div>
                {/* Project Image */}
                <div className="relative aspect-[16/10] w-full bg-[#0D0D10] overflow-hidden border-b border-[#202028]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3">
                    <StatusBadge status={project.status} />
                  </div>
                </div>

                {/* Details */}
                <div className="p-5 space-y-3">
                  <span className="font-mono text-[11px] text-[#E5A84B] block">
                    {project.category}
                  </span>
                  <h3 className="text-lg font-medium text-[#F5F5F3]">
                    {project.title}
                  </h3>
                  <p className="text-xs text-[#9E9EA8] line-clamp-3 leading-relaxed">
                    {project.tagline}
                  </p>

                  <div className="flex flex-wrap gap-1 pt-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-[#181820] text-[#9E9EA8] border border-[#24242E]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Button */}
              <div className="p-5 pt-0">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-mono bg-[#16161D] text-[#F5F5F3] border border-[#2A2A36] hover:border-[#E5A84B]/50 hover:bg-[#1C1C24] transition-all"
                >
                  <span>View Case Study</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#E5A84B]" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
