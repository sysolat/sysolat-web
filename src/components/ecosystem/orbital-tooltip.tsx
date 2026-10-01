import React from "react";
import { Division } from "@/lib/divisions";

interface OrbitalTooltipProps {
  division: Division;
  isVisible: boolean;
}

export function OrbitalTooltip({ division, isVisible }: OrbitalTooltipProps) {
  if (!isVisible) return null;

  return (
    <div className="absolute -top-16 left-1/2 -translate-x-1/2 z-30 pointer-events-none min-w-[180px] max-w-xs">
      <div className="p-3 rounded-xl bg-[#171A20] border border-[#1E88E5]/50 shadow-xl shadow-black/50 text-center animate-in fade-in zoom-in-95 duration-200">
        <div className="text-xs font-semibold text-[#42A5F5]">{division.name}</div>
        <p className="text-[11px] text-[#D9D9D9] mt-0.5 line-clamp-2 leading-tight">
          {division.promise}
        </p>
      </div>
    </div>
  );
}
