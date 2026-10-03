"use client";

import React, { useState } from "react";
import { Mail, Check, Send, Copy, MessageSquare, Clock, Globe } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ContactSection() {
  const [projectType, setProjectType] = useState<string>("Web Application");
  const [budget, setBudget] = useState<string>("$2k - $5k");
  const [timeline, setTimeline] = useState<string>("Within 1 month");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const projectTypes = [
    "Web Application",
    "Mobile Application",
    "E-Commerce",
    "SaaS",
    "Automation",
    "Website",
    "Other",
  ];

  const budgetBrackets = ["< $2,000", "$2k - $5k", "$5k - $10k", "$10k+"];
  const timelineBrackets = ["Immediately", "Within 1 month", "1 - 3 months", "Flexible"];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("contact@rafayel.dev");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !description.trim()) return;

    // Direct mailto generation or state confirmation
    const subject = encodeURIComponent(`Project Inquiry: ${projectType} from ${name || "Client"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nProject Type: ${projectType}\nBudget: ${budget}\nTimeline: ${timeline}\n\nProject Scope:\n${description}`
    );

    // Open mail client as graceful fallback
    window.location.href = `mailto:contact@rafayel.dev?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 border-b border-[#1E1E24]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          number="08"
          category="Initiate Collaboration"
          title="Have an idea? Let's build it."
          subtitle="Tell me what you're building. I respond within 24 hours with architectural suggestions, timeline estimates, and feasibility insights."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Info & Availability Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-xl bg-[#111115] border border-[#22222A] space-y-5">
              <div>
                <span className="font-mono text-xs text-[#E5A84B] uppercase tracking-wider block mb-1">
                  DIRECT CHANNEL
                </span>
                <h4 className="text-lg font-medium text-[#F5F5F3]">
                  Direct Inquiries & Briefs
                </h4>
              </div>

              {/* Email Copy Card */}
              <div className="flex items-center justify-between p-3.5 rounded-lg bg-[#16161D] border border-[#24242E]">
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#E5A84B]" />
                  <span className="font-mono text-xs text-[#F5F5F3]">
                    contact@rafayel.dev
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-mono bg-[#1E1E28] hover:bg-[#282835] text-[#9E9EA8] hover:text-[#F5F5F3] transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Status Points */}
              <div className="space-y-3 pt-3 border-t border-[#1C1C24] text-xs font-mono">
                <div className="flex items-center justify-between text-[#9E9EA8]">
                  <span className="flex items-center gap-1.5">
                    <Globe className="w-3.5 h-3.5 text-[#E5A84B]" />
                    <span>Location</span>
                  </span>
                  <span className="text-[#F5F5F3]">Bangladesh (UTC+6)</span>
                </div>

                <div className="flex items-center justify-between text-[#9E9EA8]">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Availability</span>
                  </span>
                  <span className="text-emerald-400">Working Worldwide</span>
                </div>

                <div className="flex items-center justify-between text-[#9E9EA8]">
                  <span className="flex items-center gap-1.5">
                    <MessageSquare className="w-3.5 h-3.5 text-[#E5A84B]" />
                    <span>Response Time</span>
                  </span>
                  <span className="text-[#F5F5F3]">&lt; 24 hours</span>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#0F0F13] border border-[#202028] text-xs text-[#9E9EA8] leading-relaxed">
              <span className="font-mono text-[#E5A84B] font-semibold block mb-1">
                PRODUCT LAB POLICY
              </span>
              I handle a limited number of active builds concurrently to ensure each client gets dedicated technical focus, rigorous quality checks, and clean architecture.
            </div>
          </div>

          {/* Right Column: Project Scope Form */}
          <div className="lg:col-span-7">
            {submitted ? (
              <div className="p-8 rounded-xl bg-[#121217] border border-emerald-500/30 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-[#F5F5F3]">
                  Inquiry Dispatched
                </h3>
                <p className="text-sm text-[#9E9EA8] max-w-md mx-auto">
                  Your project details have been compiled. Your email client should open shortly with the pre-filled brief, or you can message directly at <code className="text-[#E5A84B]">contact@rafayel.dev</code>.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-4 py-2 rounded-lg text-xs font-mono bg-[#181820] text-[#F5F5F3] border border-[#262632] hover:bg-[#20202A]"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="p-6 sm:p-8 rounded-xl bg-[#111116] border border-[#24242E] space-y-6"
              >
                {/* 1. Project Type */}
                <div className="space-y-2.5">
                  <label className="font-mono text-xs text-[#9E9EA8] uppercase tracking-wider block">
                    01 / Project Type
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {projectTypes.map((type) => {
                      const isSelected = projectType === type;
                      return (
                        <button
                          type="button"
                          key={type}
                          onClick={() => setProjectType(type)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                            isSelected
                              ? "bg-[#E5A84B] text-[#0B0B0C] font-semibold"
                              : "bg-[#16161D] text-[#9E9EA8] hover:text-[#F5F5F3] border border-[#252530]"
                          }`}
                        >
                          {type}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 2. Budget Range */}
                <div className="space-y-2.5">
                  <label className="font-mono text-xs text-[#9E9EA8] uppercase tracking-wider block">
                    02 / Expected Budget Bracket
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {budgetBrackets.map((b) => (
                      <button
                        type="button"
                        key={b}
                        onClick={() => setBudget(b)}
                        className={`p-2 rounded-lg text-xs font-mono text-center transition-all ${
                          budget === b
                            ? "bg-[#1E1E26] text-[#E5A84B] border border-[#E5A84B]/60 font-semibold"
                            : "bg-[#16161D] text-[#9E9EA8] hover:text-[#F5F5F3] border border-[#252530]"
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 3. Timeline */}
                <div className="space-y-2.5">
                  <label className="font-mono text-xs text-[#9E9EA8] uppercase tracking-wider block">
                    03 / Target Timeline
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {timelineBrackets.map((t) => (
                      <button
                        type="button"
                        key={t}
                        onClick={() => setTimeline(t)}
                        className={`p-2 rounded-lg text-xs font-mono text-center transition-all ${
                          timeline === t
                            ? "bg-[#1E1E26] text-[#E5A84B] border border-[#E5A84B]/60 font-semibold"
                            : "bg-[#16161D] text-[#9E9EA8] hover:text-[#F5F5F3] border border-[#252530]"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 4. Contact Details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="font-mono text-xs text-[#9E9EA8] block">
                      Your Name
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Alex Mercer"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#16161D] border border-[#252530] text-sm text-[#F5F5F3] placeholder-[#62626E] focus:outline-none focus:border-[#E5A84B]/60"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-mono text-xs text-[#9E9EA8] block">
                      Your Email <span className="text-[#E5A84B]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="alex@company.com"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#16161D] border border-[#252530] text-sm text-[#F5F5F3] placeholder-[#62626E] focus:outline-none focus:border-[#E5A84B]/60"
                    />
                  </div>
                </div>

                {/* 5. Project Description */}
                <div className="space-y-1.5">
                  <label className="font-mono text-xs text-[#9E9EA8] block">
                    Project Scope & Objectives <span className="text-[#E5A84B]">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Briefly describe what you're building, key features, target users, or technical requirements..."
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#16161D] border border-[#252530] text-sm text-[#F5F5F3] placeholder-[#62626E] focus:outline-none focus:border-[#E5A84B]/60 resize-none"
                  />
                </div>

                {/* Submit CTA */}
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-lg text-sm font-medium bg-[#E5A84B] text-[#0B0B0C] hover:bg-[#F3B65B] font-mono flex items-center justify-center gap-2 transition-all shadow-md"
                >
                  <Send className="w-4 h-4" />
                  <span>Start a Conversation</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
