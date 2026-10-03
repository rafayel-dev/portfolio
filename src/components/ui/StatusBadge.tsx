import React from "react";

interface StatusBadgeProps {
  status: "ONLINE" | "AUTOMATED" | "ACTIVE" | "READY" | "PRODUCTION" | "LIVE";
  label?: string;
  size?: "sm" | "md";
}

export function StatusBadge({ status, label, size = "sm" }: StatusBadgeProps) {
  const getColors = () => {
    switch (status) {
      case "ONLINE":
      case "LIVE":
      case "ACTIVE":
        return {
          dot: "bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.5)]",
          border: "border-emerald-500/20",
          bg: "bg-emerald-500/10",
          text: "text-emerald-300",
        };
      case "AUTOMATED":
        return {
          dot: "bg-[#E5A84B] shadow-[0_0_8px_rgba(229,168,75,0.5)]",
          border: "border-[#E5A84B]/25",
          bg: "bg-[#E5A84B]/10",
          text: "text-[#E5A84B]",
        };
      case "READY":
      case "PRODUCTION":
      default:
        return {
          dot: "bg-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.5)]",
          border: "border-sky-500/20",
          bg: "bg-sky-500/10",
          text: "text-sky-300",
        };
    }
  };

  const style = getColors();

  return (
    <span
      className={`inline-flex items-center gap-1.5 font-mono uppercase tracking-wider rounded border ${style.bg} ${style.border} ${style.text} ${
        size === "sm" ? "px-2 py-0.5 text-[10px]" : "px-2.5 py-1 text-xs"
      }`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${style.dot}`} />
      <span>{label || status}</span>
    </span>
  );
}
