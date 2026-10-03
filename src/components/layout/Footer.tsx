"use client";

import React from "react";
import { ArrowUp, Mail } from "lucide-react";

function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function LinkedinIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-16 sm:py-20 bg-[#08080A] border-t border-[#1C1C22]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#1A1A20]">
          {/* Brand & Identity Column */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#E5A84B]" />
              <span className="font-semibold text-lg tracking-tight text-[#F5F5F3]">
                Rafayel
              </span>
            </div>
            <p className="text-sm text-[#9E9EA8] max-w-sm leading-relaxed">
              Full Stack & React Native Developer. Designing and building resilient web applications, mobile experiences, backend systems, and operational automations.
            </p>
            <div className="flex items-center gap-2 font-mono text-xs text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>Based in Bangladesh · Working Worldwide</span>
            </div>
          </div>

          {/* Site Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="font-mono text-xs uppercase tracking-wider text-[#62626E] block">
              Navigation
            </span>
            <ul className="space-y-2 text-sm text-[#9E9EA8]">
              <li>
                <a href="#work" className="hover:text-[#F5F5F3] transition-colors">
                  Selected Work
                </a>
              </li>
              <li>
                <a href="#capabilities" className="hover:text-[#F5F5F3] transition-colors">
                  Capabilities
                </a>
              </li>
              <li>
                <a href="#pipeline" className="hover:text-[#F5F5F3] transition-colors">
                  Behind The Build
                </a>
              </li>
              <li>
                <a href="#automation" className="hover:text-[#F5F5F3] transition-colors">
                  Automation Lab
                </a>
              </li>
              <li>
                <a href="#workbench" className="hover:text-[#F5F5F3] transition-colors">
                  Developer Workbench
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#F5F5F3] transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#F5F5F3] transition-colors">
                  Start a Project
                </a>
              </li>
            </ul>
          </div>

          {/* Channels & Connect */}
          <div className="md:col-span-3 space-y-3">
            <span className="font-mono text-xs uppercase tracking-wider text-[#62626E] block">
              Direct Channels
            </span>
            <ul className="space-y-2 text-sm text-[#9E9EA8]">
              <li>
                <a
                  href="mailto:contact@rafayel.dev"
                  className="hover:text-[#F5F5F3] transition-colors flex items-center gap-2"
                >
                  <Mail className="w-3.5 h-3.5 text-[#E5A84B]" />
                  <span>contact@rafayel.dev</span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#F5F5F3] transition-colors flex items-center gap-2"
                >
                  <GithubIcon className="w-3.5 h-3.5 text-[#9E9EA8]" />
                  <span>GitHub</span>
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#F5F5F3] transition-colors flex items-center gap-2"
                >
                  <LinkedinIcon className="w-3.5 h-3.5 text-[#9E9EA8]" />
                  <span>LinkedIn</span>
                </a>
              </li>
            </ul>

            <div className="pt-4">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-mono text-[#9E9EA8] hover:text-[#F5F5F3] bg-[#141419] border border-[#22222B] hover:border-[#33333F] transition-all"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>Return to Top</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Telemetry */}
        <div className="pt-8 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#62626E]">
          <div>
            © {new Date().getFullYear()} Rafayel. All rights reserved.
          </div>
          <div className="flex items-center gap-3">
            <span>ENGINEERED WITH NEXT.JS & TYPESCRIPT</span>
            <span>·</span>
            <span>NO TEMPLATES</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
