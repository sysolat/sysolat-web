"use client";

import React, { useState } from "react";
import { ArrowUpRight, Palette, Building2, Sparkles, ShieldCheck, Users, Code, Server, Cpu, TrendingUp, Settings, ExternalLink } from "lucide-react";
import { Division } from "@/lib/divisions";
import { DivisionModal } from "./division-modal";

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

interface DivisionCardProps {
  division: Division;
}

export function DivisionCard({ division }: DivisionCardProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const IconComponent = iconMap[division.icon] || Code;

  return (
    <>
      <div
        onClick={() => setModalOpen(true)}
        className="
          group relative cursor-pointer
          rounded-[28px] border border-white/10
          bg-[#171A20]/80 backdrop-blur-xl
          p-6 sm:p-8
          transition-all duration-300
          hover:border-[#1E88E5]/50
          hover:shadow-[0_0_30px_rgba(30,136,229,.25)]
          hover:-translate-y-1.5
          flex flex-col justify-between
        "
      >
        {/* Glow ambient highlight */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#1E88E5]/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

        <div>
          {/* Header with Icon and Subdomain badge */}
          <div className="flex items-center justify-between mb-6">
            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#42A5F5] group-hover:border-[#1E88E5]/40 group-hover:bg-[#1E88E5]/10 transition-colors">
              <IconComponent className="w-6 h-6" />
            </div>
            <span className="text-xs font-mono text-[#8C8C8C] group-hover:text-[#42A5F5] transition-colors flex items-center gap-1">
              {division.subdomain}
              <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </div>

          {/* Division Title and Promise */}
          <div className="mb-4">
            <span className="text-xs uppercase tracking-wider text-[#1E88E5] font-semibold">
              {division.tagline}
            </span>
            <h3 className="text-2xl font-bold text-white mt-1 group-hover:text-[#42A5F5] transition-colors">
              {division.name}
            </h3>
          </div>

          <p className="text-sm text-[#8C8C8C] leading-relaxed mb-6">
            {division.promise}
          </p>
        </div>

        {/* Services / Tags */}
        <div>
          <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
            {division.services.slice(0, 3).map((service, idx) => (
              <span
                key={idx}
                className="text-[11px] px-2.5 py-1 rounded-lg bg-white/5 text-[#D9D9D9] border border-white/5"
              >
                {service}
              </span>
            ))}
          </div>

          <div className="mt-4 flex items-center justify-between text-xs text-[#1E88E5] font-medium pt-2">
            <span>Ver detalles & capacidades</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
          </div>
        </div>
      </div>

      <DivisionModal
        division={division}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}
