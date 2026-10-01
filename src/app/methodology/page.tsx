import React from "react";
import type { Metadata } from "next";
import { MethodologySection } from "@/components/sections/methodology";
import { JourneySection } from "@/components/sections/journey";
import { ComparisonSection } from "@/components/sections/comparison";
import { CTASection } from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "Metodología",
  description: "La metodología de transformación de 4 fases de SySo Co: Crear, Fortalecer, Transformar y Escalar.",
};

export default function MethodologyPage() {
  return (
    <div className="pt-24 bg-[#111111] min-h-screen">
      <MethodologySection />
      <JourneySection />
      <ComparisonSection />
      <CTASection />
    </div>
  );
}
