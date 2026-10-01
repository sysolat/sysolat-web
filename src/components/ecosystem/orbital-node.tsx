"use client";

import React, { useState } from "react";
import {
  Palette,
  Building2,
  Sparkles,
  ShieldCheck,
  Users,
  Code,
  Server,
  Cpu,
  TrendingUp,
  Settings,
} from "lucide-react";
import { Division } from "@/lib/divisions";
import { OrbitalTooltip } from "./orbital-tooltip";

const iconMap: Record<string, React.ElementType> = {
  Palette,
  Building2,
  Sparkles,
  ShieldCheck,
  Users,
  Code,
  Server,
  Cpu,
  TrendingUp,
  Settings,
};

interface OrbitalNodeProps {
  division: Division;
  x: number; // percentage
  y: number; // percentage
  isSelected?: boolean;
  onSelect?: (division: Division) => void;
}

export function OrbitalNode({
  division,
  x,
  y,
  isSelected = false,
  onSelect,
}: OrbitalNodeProps) {
  const [isHovered, setIsHovered] = useState(false);
  const IconComponent = iconMap[division.icon] || Code;

  return (
    <div
      style={{
        left: `${x}%`,
        top: `${y}%`,
        transform: "translate(-50%, -50%)",
      }}
      className="absolute z-20 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onSelect?.(division)}
    >
      <OrbitalTooltip division={division} isVisible={isHovered} />

      <button
        type="button"
        aria-label={`División ${division.name}`}
        className={`
          relative flex items-center justify-center
          w-11 h-11 sm:w-12 sm:h-12 rounded-full
          transition-all duration-300 cursor-pointer
          ${
            isSelected
              ? "bg-[#1E88E5] text-white scale-125 shadow-[0_0_30px_rgba(30,136,229,0.9)] border-2 border-white ring-4 ring-[#1E88E5]/30"
              : isHovered
              ? "bg-[#1E88E5]/90 text-white scale-115 shadow-[0_0_20px_rgba(30,136,229,0.6)] border border-[#42A5F5]"
              : "bg-[#171A20] text-[#42A5F5] border border-white/20 hover:border-[#1E88E5]"
          }
        `}
      >
        <IconComponent
          className={`w-5 h-5 transition-transform duration-300 ${
            isSelected || isHovered ? "scale-110 text-white" : "text-[#42A5F5]"
          }`}
        />

        {/* Ambient pulse ring on hover / active */}
        <span
          className={`absolute inset-0 rounded-full border border-[#1E88E5] transition-all duration-500 pointer-events-none ${
            isSelected
              ? "opacity-100 scale-140 animate-pulse-slow"
              : isHovered
              ? "opacity-80 scale-130"
              : "opacity-0"
          }`}
        />
      </button>

      {/* Division Name Label under node */}
      <span
        className={`
          absolute top-full left-1/2 -translate-x-1/2 mt-2
          text-[11px] sm:text-xs font-semibold tracking-tight whitespace-nowrap
          transition-all duration-200 pointer-events-none
          ${
            isSelected
              ? "text-[#42A5F5] scale-105 font-bold"
              : isHovered
              ? "text-white"
              : "text-[#8C8C8C]"
          }
        `}
      >
        {division.name}
      </span>
    </div>
  );
}
