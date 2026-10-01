import React from "react";
import { HeroSection } from "@/components/sections/hero";
import { ChallengeSection } from "@/components/sections/challenge";
import { ResponseSection } from "@/components/sections/response";
import { DivisionsSection } from "@/components/sections/divisions";
import { MiniAppsSection } from "@/components/sections/miniapps";
import { MethodologySection } from "@/components/sections/methodology";
import { JourneySection } from "@/components/sections/journey";
import { ComparisonSection } from "@/components/sections/comparison";
import { ResultsSection } from "@/components/sections/results";
import { CTASection } from "@/components/sections/cta";
import { OrbitalEcosystem } from "@/components/ecosystem/orbital";
import { Badge } from "@/components/ui/badge";
import { Sparkles } from "lucide-react";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero */}
      <HeroSection />

      {/* 2. Challenge */}
      <ChallengeSection />

      {/* 3. Response */}
      <ResponseSection />

      {/* 4. Orbital Ecosystem Feature Section */}
      <section id="ecosistema" className="relative py-28 bg-[#111111] overflow-hidden border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <Badge variant="primary" className="mb-4">
              <Sparkles className="w-3.5 h-3.5 mr-1 text-[#1E88E5]" />
              Arquitectura Orbital
            </Badge>
            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight font-heading mb-6">
              Ecosistema en Acción
            </h2>
            <p className="text-base sm:text-lg text-[#8C8C8C] leading-relaxed">
              Descubre cómo las 10 divisiones orbitan e interactúan alrededor de la estrategia central de tu organización.
            </p>
          </div>

          <OrbitalEcosystem />
        </div>
      </section>

      {/* 5. Divisions Grid */}
      <DivisionsSection />

      {/* 6. MiniApps Marketplace Teaser */}
      <MiniAppsSection />

      {/* 7. Methodology (Crear, Fortalecer, Transformar, Escalar) */}
      <MethodologySection />

      {/* 8. Customer Journey */}
      <JourneySection />

      {/* 9. Comparison Matrix */}
      <ComparisonSection />

      {/* 10. Impact & Results */}
      <ResultsSection />

      {/* 11. Final CTA */}
      <CTASection />
    </>
  );
}
