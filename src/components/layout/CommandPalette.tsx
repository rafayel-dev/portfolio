"use client";

import React, { useEffect, useState, useMemo } from "react";
import { Search, FolderKanban, Cpu, Wrench, User, Mail, ArrowUpRight, Check, X } from "lucide-react";
import { projects } from "@/data/projects";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const [query, setQuery] = useState("");
  const [copied, setCopied] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          window.dispatchEvent(new CustomEvent("open-command-palette"));
        }
      } else if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const items = useMemo(() => {
    const defaultItems = [
      {
        id: "nav-work",
        title: "Selected Work",
        category: "Navigation",
        icon: FolderKanban,
        action: () => {
          document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
          onClose();
        },
      },
      {
        id: "nav-capabilities",
        title: "Capabilities (What I Build)",
        category: "Navigation",
        icon: Cpu,
        action: () => {
          document.getElementById("capabilities")?.scrollIntoView({ behavior: "smooth" });
          onClose();
        },
      },
      {
        id: "nav-pipeline",
        title: "Behind The Build (Pipeline)",
        category: "Navigation",
        icon: Wrench,
        action: () => {
          document.getElementById("pipeline")?.scrollIntoView({ behavior: "smooth" });
          onClose();
        },
      },
      {
        id: "nav-automation",
        title: "Automation Lab (Bots & Workflows)",
        category: "Navigation",
        icon: Cpu,
        action: () => {
          document.getElementById("automation")?.scrollIntoView({ behavior: "smooth" });
          onClose();
        },
      },
      {
        id: "nav-workbench",
        title: "Developer Workbench (Tech Stack)",
        category: "Navigation",
        icon: Wrench,
        action: () => {
          document.getElementById("workbench")?.scrollIntoView({ behavior: "smooth" });
          onClose();
        },
      },
      {
        id: "nav-about",
        title: "About Rafayel",
        category: "Navigation",
        icon: User,
        action: () => {
          document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
          onClose();
        },
      },
      {
        id: "nav-contact",
        title: "Start a Project (Contact Form)",
        category: "Action",
        icon: Mail,
        action: () => {
          document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
          onClose();
        },
      },
      {
        id: "action-copy-email",
        title: "Copy Email Address",
        category: "Action",
        icon: Mail,
        action: () => {
          navigator.clipboard.writeText("contact@rafayel.dev");
          setCopied(true);
          setTimeout(() => {
            setCopied(false);
            onClose();
          }, 1000);
        },
      },
    ];

    const projectItems = projects.map((p) => ({
      id: `proj-${p.id}`,
      title: `${p.title} — ${p.category}`,
      category: "Projects",
      icon: FolderKanban,
      action: () => {
        document.getElementById(`project-${p.id}`)?.scrollIntoView({ behavior: "smooth" });
        onClose();
      },
    }));

    const all = [...defaultItems, ...projectItems];

    if (!query.trim()) return all;

    return all.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.category.toLowerCase().includes(query.toLowerCase())
    );
  }, [query, onClose]);

  const handleKeyNavigation = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % items.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + items.length) % items.length);
    } else if (e.key === "Enter" && items[selectedIndex]) {
      e.preventDefault();
      items[selectedIndex].action();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Command Palette"
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-28 px-4 bg-black/75 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl bg-[#121215] border border-[#2A2A33] rounded-xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={handleKeyNavigation}
      >
        <div className="flex items-center px-4 py-3 border-b border-[#222228] gap-3">
          <Search className="w-4 h-4 text-[#9E9EA8]" />
          <input
            autoFocus
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder="Search sections, projects, or actions..."
            className="flex-1 bg-transparent text-[#F5F5F3] placeholder-[#656570] text-sm focus:outline-none"
          />
          <kbd className="hidden sm:inline-flex items-center gap-1 font-mono text-[10px] text-[#9E9EA8] bg-[#1E1E24] px-1.5 py-0.5 rounded border border-[#2E2E38]">
            ESC
          </kbd>
          <button
            onClick={onClose}
            aria-label="Close Command Palette"
            className="text-[#9E9EA8] hover:text-[#F5F5F3] p-1"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="max-h-80 overflow-y-auto p-2 space-y-1">
          {items.length === 0 ? (
            <div className="py-8 text-center text-sm text-[#656570]">
              No matching commands or projects found.
            </div>
          ) : (
            items.map((item, index) => {
              const Icon = item.icon;
              const isSelected = index === selectedIndex;
              return (
                <button
                  key={item.id}
                  onClick={item.action}
                  onMouseEnter={() => setSelectedIndex(index)}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-left text-sm transition-colors ${
                    isSelected
                      ? "bg-[#1E1E26] text-[#F5F5F3] border border-[#32323E]"
                      : "text-[#9E9EA8] hover:bg-[#18181E] hover:text-[#F5F5F3] border border-transparent"
                  }`}
                >
                  <div className="flex items-center gap-3 truncate">
                    <Icon className={`w-4 h-4 shrink-0 ${isSelected ? "text-[#E5A84B]" : "text-[#656570]"}`} />
                    <span className="truncate">{item.title}</span>
                  </div>
                  <div className="flex items-center gap-2 shrink-0 ml-3">
                    {item.id === "action-copy-email" && copied ? (
                      <span className="inline-flex items-center gap-1 font-mono text-xs text-emerald-400">
                        <Check className="w-3 h-3" /> Copied!
                      </span>
                    ) : (
                      <span className="font-mono text-[10px] uppercase text-[#656570] px-1.5 py-0.5 rounded bg-[#18181D]">
                        {item.category}
                      </span>
                    )}
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#656570]" />
                  </div>
                </button>
              );
            })
          )}
        </div>

        <div className="px-4 py-2 bg-[#0E0E11] border-t border-[#222228] flex items-center justify-between text-[11px] text-[#656570] font-mono">
          <div className="flex items-center gap-3">
            <span>↑↓ Navigate</span>
            <span>↵ Select</span>
          </div>
          <span>Digital Workshop / Product Lab</span>
        </div>
      </div>
    </div>
  );
}
