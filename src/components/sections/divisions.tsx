import React from "react";
import Link from "next/link";
import { ArrowRight, Layers } from "lucide-react";
import { DIVISIONS } from "@/lib/divisions";
import { DivisionCard } from "@/components/divisions/division-card";
import { Badge } from "@/components/ui/badge";
import { SecondaryButton } from "@/components/ui/button";

export function DivisionsSection() {
  return (
    <section id="divisiones" className="relative py-24 bg-[#111111] border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-3xl">
            <Badge variant="primary" className="mb-4">
              <Layers className="w-3.5 h-3.5 mr-1 text-[#1E88E5]" />
              Capacidades Corporativas
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight font-heading mb-4 leading-tight">
              10 Divisiones Especializadas,
              <br />
              Un Solo Cerebro.
            </h2>
            <p className="text-base sm:text-lg text-[#8C8C8C] leading-relaxed max-w-2xl">
              Cada división opera con autonomía técnica y excelencia en su disciplina, pero todas comparten la misma infraestructura de inteligencia y dirección estratégica.
            </p>
          </div>

          <Link href="/divisions" className="flex-shrink-0">
            <SecondaryButton className="text-sm">
              <span>Ver todas las divisiones</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </SecondaryButton>
          </Link>
        </div>

        {/* 10 Division Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DIVISIONS.map((division) => (
            <div key={division.id} id={division.id} className="scroll-mt-28">
              <DivisionCard division={division} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
