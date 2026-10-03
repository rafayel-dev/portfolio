import React from "react";

interface SectionHeadingProps {
  number?: string;
  category?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  number,
  category,
  title,
  subtitle,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 md:mb-16 ${align === "center" ? "text-center max-w-2xl mx-auto" : "max-w-3xl"}`}>
      {(number || category) && (
        <div className={`flex items-center gap-2 mb-3 ${align === "center" ? "justify-center" : ""}`}>
          {number && (
            <span className="font-mono text-xs text-[#E5A84B] tracking-wider px-2 py-0.5 rounded bg-[#E5A84B]/10 border border-[#E5A84B]/20">
              {number}
            </span>
          )}
          {category && (
            <span className="font-mono text-xs uppercase tracking-widest text-[#9E9EA8]">
              {category}
            </span>
          )}
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-[#F5F5F3] leading-[1.15]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-[#9E9EA8] leading-relaxed font-normal">
          {subtitle}
        </p>
      )}
    </div>
  );
}
