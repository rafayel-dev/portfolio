"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { X, CheckCircle } from "lucide-react";
import { Project } from "@/types";
import { StatusBadge } from "@/components/ui/StatusBadge";

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export function CaseStudyModal({ project, onClose }: CaseStudyModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} Case Study`}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-[#111115] border border-[#2A2A35] rounded-xl shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-[#202028] bg-[#141419] shrink-0">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-[#E5A84B]">CASE STUDY</span>
            <span className="text-[#42424E]">/</span>
            <h3 className="text-base sm:text-lg font-semibold text-[#F5F5F3]">
              {project.title}
            </h3>
            <StatusBadge status={project.status} />
          </div>
          <button
            onClick={onClose}
            aria-label="Close case study"
            className="p-1.5 text-[#9E9EA8] hover:text-[#F5F5F3] rounded hover:bg-[#1E1E26] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-5 sm:p-8 space-y-8">
          {/* Hero Visual */}
          <div className="relative aspect-video w-full rounded-lg overflow-hidden border border-[#252530] bg-[#0E0E12]">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover object-top"
            />
          </div>

          {/* Metadata Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-lg bg-[#16161D] border border-[#22222B] text-xs font-mono">
            <div>
              <span className="text-[#656570] block mb-1">CATEGORY</span>
              <span className="text-[#F5F5F3] font-medium">{project.category}</span>
            </div>
            <div>
              <span className="text-[#656570] block mb-1">ROLE</span>
              <span className="text-[#F5F5F3] font-medium">{project.role}</span>
            </div>
            <div>
              <span className="text-[#656570] block mb-1">TIMELINE</span>
              <span className="text-[#F5F5F3] font-medium">{project.timeline}</span>
            </div>
            <div>
              <span className="text-[#656570] block mb-1">STATUS</span>
              <span className="text-emerald-400 font-medium">{project.status}</span>
            </div>
          </div>

          {/* 7-Step Case Study Structure */}
          <div className="space-y-6">
            {/* 01 Overview */}
            <div className="space-y-2">
              <span className="font-mono text-xs text-[#E5A84B]">01 — OVERVIEW</span>
              <p className="text-sm sm:text-base text-[#9E9EA8] leading-relaxed">
                {project.caseStudy.overview}
              </p>
            </div>

            {/* 02 Problem */}
            <div className="space-y-2">
              <span className="font-mono text-xs text-[#E5A84B]">02 — PROBLEM</span>
              <p className="text-sm sm:text-base text-[#9E9EA8] leading-relaxed">
                {project.caseStudy.problem}
              </p>
            </div>

            {/* 03 Approach */}
            <div className="space-y-2">
              <span className="font-mono text-xs text-[#E5A84B]">03 — APPROACH</span>
              <p className="text-sm sm:text-base text-[#9E9EA8] leading-relaxed">
                {project.caseStudy.approach}
              </p>
            </div>

            {/* 04 Build */}
            <div className="space-y-2">
              <span className="font-mono text-xs text-[#E5A84B]">04 — BUILD</span>
              <p className="text-sm sm:text-base text-[#9E9EA8] leading-relaxed">
                {project.caseStudy.build}
              </p>
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2">
                {project.caseStudy.keyFeatures.map((feat) => (
                  <div
                    key={feat}
                    className="flex items-start gap-2 p-2.5 rounded bg-[#16161D] border border-[#23232C] text-xs text-[#F5F5F3]"
                  >
                    <CheckCircle className="w-3.5 h-3.5 text-[#E5A84B] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 05 Result */}
            <div className="space-y-2">
              <span className="font-mono text-xs text-[#E5A84B]">05 — RESULT</span>
              <p className="text-sm sm:text-base text-[#9E9EA8] leading-relaxed">
                {project.caseStudy.result}
              </p>
            </div>

            {/* 06 Technology */}
            <div className="space-y-2">
              <span className="font-mono text-xs text-[#E5A84B]">06 — TECHNOLOGY STACK</span>
              <div className="flex flex-wrap gap-2 pt-1">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-xs px-2.5 py-1 rounded bg-[#1B1B22] text-[#F5F5F3] border border-[#2B2B36]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* 07 Live Product */}
            <div className="pt-4 border-t border-[#202028] flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="font-mono text-xs text-[#E5A84B] block mb-1">07 — LIVE PRODUCT</span>
                <span className="text-xs text-[#9E9EA8]">Production build deployed and operational.</span>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href="#contact"
                  onClick={onClose}
                  className="px-4 py-2 text-xs font-mono rounded bg-[#E5A84B] text-[#0B0B0C] hover:bg-[#F3B65B] font-medium"
                >
                  Discuss Similar Build
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
