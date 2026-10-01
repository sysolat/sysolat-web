import React from "react";
import type { Metadata } from "next";
import { MiniAppGrid } from "@/components/miniapps/miniapp-grid";
import { Badge } from "@/components/ui/badge";
import { CTASection } from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "MiniApps Marketplace",
  description: "Marketplace de aplicaciones de nicho y plataformas SaaS del Ecosistema SySo Co.",
};

export default function MiniAppsPage() {
  return (
    <div className="pt-32 bg-[#111111] min-h-screen">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="primary" className="mb-4">
            Marketplace de Soluciones
          </Badge>
          <h1 className="text-4xl sm:text-6xl font-bold text-white tracking-tight font-heading mb-6">
            MiniApps & SaaS de Nicho
          </h1>
          <p className="text-base sm:text-lg text-[#8C8C8C] leading-relaxed">
            Plataformas especializadas desarrolladas por SySo Co. para resolver dinámicas operativas específicas de diferentes industrias.
          </p>
        </div>

        <div className="mb-24">
          <MiniAppGrid />
        </div>
      </div>

      <CTASection />
    </div>
  );
}
