import React from "react";
import type { Metadata } from "next";
import { DIVISIONS } from "@/lib/divisions";
import { DivisionCard } from "@/components/divisions/division-card";
import { Badge } from "@/components/ui/badge";
import { CTASection } from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "Divisiones",
  description: "Catálogo completo de las 10 divisiones especializadas de SySo Co.",
};

export default function DivisionsPage() {
  return (
    <div className="pt-32 bg-[#111111] min-h-screen">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="primary" className="mb-4">
            Catálogo Corporativo
          </Badge>
          <h1 className="text-4xl sm:text-6xl font-bold text-white tracking-tight font-heading mb-6">
            10 Divisiones Especializadas
          </h1>
          <p className="text-base sm:text-lg text-[#8C8C8C] leading-relaxed">
            Cada división cuenta con sus propios directores técnicos, estándares rigurosos y subsitio dedicado, operando bajo una sola gobernanza estratégica.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {DIVISIONS.map((division) => (
            <div key={division.id} id={division.id} className="scroll-mt-32">
              <DivisionCard division={division} />
            </div>
          ))}
        </div>
      </div>

      <CTASection />
    </div>
  );
}
