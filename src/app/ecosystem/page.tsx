import React from "react";
import type { Metadata } from "next";
import { OrbitalEcosystem } from "@/components/ecosystem/orbital";
import { Badge } from "@/components/ui/badge";
import { Sparkles } from "lucide-react";
import { INTEGRATION_AREAS } from "@/lib/constants";
import { CTASection } from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "Ecosistema",
  description: "Conoce la arquitectura orbital y el modelo integrado de SySo Co.",
};

export default function EcosystemPage() {
  return (
    <div className="pt-32 bg-[#111111] min-h-screen">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="primary" className="mb-4">
            <Sparkles className="w-3.5 h-3.5 mr-1 text-[#1E88E5]" />
            Arquitectura Orbital
          </Badge>
          <h1 className="text-4xl sm:text-6xl font-bold text-white tracking-tight font-heading mb-6">
            Ecosistema en Acción
          </h1>
          <p className="text-base sm:text-lg text-[#8C8C8C] leading-relaxed">
            Una plataforma de integración empresarial donde 10 divisiones de alto rendimiento giran de manera sincronizada para resolver los retos de crecimiento más complejos.
          </p>
        </div>

        {/* Interactive Orbital Visualization */}
        <OrbitalEcosystem />

        {/* Integration matrix */}
        <div className="my-24 p-8 sm:p-12 rounded-[32px] bg-[#171A20] border border-white/10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 text-center font-heading">
            Las 10 Dimensiones de Integración
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
            {INTEGRATION_AREAS.map((area, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-white/5 border border-white/5 text-center"
              >
                <span className="text-xs text-[#1E88E5] font-mono block mb-1">
                  0{idx + 1}
                </span>
                <span className="text-sm font-semibold text-white">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <CTASection />
    </div>
  );
}
