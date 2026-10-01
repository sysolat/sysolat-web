"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  CheckCircle2,
  Calendar,
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
import { DIVISIONS, Division } from "@/lib/divisions";
import { OrbitalNode } from "./orbital-node";
import { PrimaryButton, SecondaryButton } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

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

export function OrbitalEcosystem() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedDivision = DIVISIONS[selectedIndex];
  const IconComponent = iconMap[selectedDivision.icon] || Code;

  // Radius for outer orbit placement (percentage)
  const radius = 38;

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev === 0 ? DIVISIONS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setSelectedIndex((prev) => (prev === DIVISIONS.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto py-8">
      {/* 2-Column Responsive Layout for Desktop */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
        {/* LEFT COLUMN: The Interactive Orbit (7 cols) */}
        <div className="lg:col-span-7 flex flex-col items-center justify-center">
          <div className="relative w-full aspect-square max-w-[440px] sm:max-w-[480px] lg:max-w-[510px] flex items-center justify-center mx-auto">
            {/* Ambient radial glow */}
            <div className="absolute inset-0 bg-radial-gradient from-[#1E88E5]/15 via-transparent to-transparent pointer-events-none" />

            {/* Concentric Orbit Rings */}
            <div className="absolute w-[76%] h-[76%] rounded-full border border-dashed border-[#1E88E5]/25 animate-orbit-slow pointer-events-none" />
            <div className="absolute w-[54%] h-[54%] rounded-full border border-white/10 pointer-events-none" />
            <div className="absolute w-[32%] h-[32%] rounded-full border border-white/5 pointer-events-none" />

            {/* Central Core (SySo Co. Nucleus) - No Star Icon */}
            <div className="relative z-10 flex flex-col items-center justify-center w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-gradient-to-b from-[#171A20] via-[#14171D] to-[#111111] border border-[#1E88E5]/80 shadow-[0_0_40px_rgba(30,136,229,0.45)] text-center p-3 select-none">
              <span className="text-xs sm:text-sm font-bold tracking-tight text-white font-heading">
                SySo co.
              </span>
              <span className="text-[11px] text-[#1E88E5] font-semibold my-0.5 leading-none">
                |
              </span>
              <span className="text-[9px] sm:text-[10px] text-[#8C8C8C] font-semibold leading-tight tracking-wider uppercase">
                ecosistema central
              </span>
            </div>

            {/* 10 Division Orbit Nodes with Premium Icons */}
            {DIVISIONS.map((division, idx) => {
              const angleDeg = (idx * 360) / DIVISIONS.length - 90;
              const angleRad = (angleDeg * Math.PI) / 180;
              const x = 50 + radius * Math.cos(angleRad);
              const y = 50 + radius * Math.sin(angleRad);

              return (
                <OrbitalNode
                  key={division.id}
                  division={division}
                  x={x}
                  y={y}
                  isSelected={selectedIndex === idx}
                  onSelect={() => setSelectedIndex(idx)}
                />
              );
            })}
          </div>

          {/* Quick interaction hint for user */}
          <div className="mt-4 flex items-center justify-center gap-2 text-xs text-[#8C8C8C]">
            <span className="inline-block w-2 h-2 rounded-full bg-[#1E88E5] animate-ping" />
            <span>Haz clic en cualquier nodo para inspeccionar sus capacidades</span>
          </div>
        </div>

        {/* RIGHT COLUMN: Real-time Synchronized Division Details Card (5 cols) */}
        <div className="lg:col-span-5 w-full">
          <div className="relative rounded-[28px] border border-white/10 bg-[#171A20]/95 backdrop-blur-xl p-6 sm:p-8 shadow-2xl transition-all duration-300 hover:border-[#1E88E5]/40">
            {/* Top metadata & Navigator controls */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
              <div className="flex items-center gap-2">
                <Badge variant="primary" className="text-[11px] py-1">
                  {selectedDivision.tagline}
                </Badge>
                <span className="text-xs font-mono text-[#8C8C8C]">
                  {String(selectedIndex + 1).padStart(2, "0")} / 10
                </span>
              </div>

              {/* Prev / Next Division Arrows */}
              <div className="flex items-center gap-1">
                <button
                  onClick={handlePrev}
                  className="p-1.5 rounded-lg border border-white/10 text-[#8C8C8C] hover:text-white hover:bg-white/5 transition-colors"
                  aria-label="División anterior"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  className="p-1.5 rounded-lg border border-white/10 text-[#8C8C8C] hover:text-white hover:bg-white/5 transition-colors"
                  aria-label="División siguiente"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Division Title and Subsite Link */}
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#1E88E5]/15 border border-[#1E88E5]/30 flex items-center justify-center text-[#42A5F5] flex-shrink-0">
                  <IconComponent className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white font-heading tracking-tight">
                    {selectedDivision.name}
                  </h3>
                  <a
                    href={selectedDivision.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-[#42A5F5] hover:text-white inline-flex items-center gap-1 transition-colors"
                  >
                    <span>{selectedDivision.subdomain}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Value Promise */}
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 mb-4">
              <p className="text-sm font-medium text-white leading-snug">
                &ldquo;{selectedDivision.promise}&rdquo;
              </p>
            </div>

            {/* Description */}
            <p className="text-sm text-[#8C8C8C] leading-relaxed mb-5">
              {selectedDivision.description}
            </p>

            {/* Services / Deliverables */}
            <div className="mb-6">
              <div className="text-xs font-semibold uppercase tracking-wider text-[#8C8C8C] mb-2.5">
                Capacidades & Servicios Clave
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedDivision.services.map((svc, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 p-2 rounded-xl bg-white/[0.03] border border-white/5 text-xs text-[#D9D9D9]"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#1E88E5] flex-shrink-0" />
                    <span className="truncate">{svc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Actions */}
            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center gap-3">
              <a
                href={selectedDivision.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:flex-1"
              >
                <PrimaryButton className="w-full justify-center text-xs sm:text-sm py-2.5">
                  <span>Ir a {selectedDivision.subdomain}</span>
                  <ExternalLink className="w-4 h-4 ml-1" />
                </PrimaryButton>
              </a>

              <Link href="/contact" className="w-full sm:w-auto">
                <SecondaryButton className="w-full justify-center text-xs sm:text-sm py-2.5">
                  <Calendar className="w-3.5 h-3.5 mr-1" />
                  <span>Diagnóstico</span>
                </SecondaryButton>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
