"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Command, Menu, X, ArrowUpRight } from "lucide-react";
import { CommandPalette } from "./CommandPalette";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    const handleCustomOpen = () => setCommandPaletteOpen(true);
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("open-command-palette", handleCustomOpen);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("open-command-palette", handleCustomOpen);
    };
  }, []);

  const navLinks = [
    { label: "Work", href: "#work" },
    { label: "Capabilities", href: "#capabilities" },
    { label: "Lab", href: "#automation" },
    { label: "About", href: "#about" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "py-3 bg-[#0B0B0C]/85 backdrop-blur-md border-b border-[#222228] shadow-sm"
            : "py-5 sm:py-6 bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo / Brand */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group focus:outline-none focus:ring-1 focus:ring-[#E5A84B] rounded"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#E5A84B] group-hover:scale-125 transition-transform" />
            <span className="font-semibold text-base sm:text-lg tracking-tight text-[#F5F5F3]">
              Rafayel
            </span>
            <span className="hidden sm:inline-block font-mono text-[11px] text-[#656570] border-l border-[#222228] pl-2.5 ml-1 uppercase tracking-wider">
              Product Lab
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-[#9E9EA8] hover:text-[#F5F5F3] transition-colors focus:outline-none focus:text-[#F5F5F3]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Area */}
          <div className="flex items-center gap-3">
            {/* Quick Command Trigger */}
            <button
              onClick={() => setCommandPaletteOpen(true)}
              aria-label="Open command palette"
              className="hidden sm:inline-flex items-center gap-2 px-2.5 py-1.5 rounded-md text-xs font-mono text-[#9E9EA8] bg-[#141418] border border-[#24242C] hover:border-[#3A3A46] hover:text-[#F5F5F3] transition-all"
            >
              <Command className="w-3.5 h-3.5 text-[#E5A84B]" />
              <span>⌘K</span>
            </button>

            {/* Primary CTA */}
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium rounded-lg bg-[#18181D] text-[#F5F5F3] border border-[#2E2E38] hover:border-[#E5A84B]/60 hover:bg-[#202028] transition-all focus:outline-none focus:ring-2 focus:ring-[#E5A84B]/40"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#E5A84B]" />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              className="md:hidden p-1.5 text-[#9E9EA8] hover:text-[#F5F5F3] rounded-md hover:bg-[#18181E] transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-[#222228] bg-[#0E0E12] px-6 py-5 space-y-4 animate-in fade-in slide-in-from-top-3">
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-[#9E9EA8] hover:text-[#F5F5F3] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="pt-3 border-t border-[#222228] flex items-center justify-between">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setCommandPaletteOpen(true);
                }}
                className="inline-flex items-center gap-2 text-xs font-mono text-[#9E9EA8]"
              >
                <Command className="w-3.5 h-3.5 text-[#E5A84B]" />
                <span>Search / Commands</span>
              </button>
              <span className="font-mono text-[10px] text-emerald-400 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Worldwide
              </span>
            </div>
          </div>
        )}
      </header>

      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
      />
    </>
  );
}
