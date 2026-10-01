import React from "react";
import Link from "next/link";
import { ArrowRight, Box } from "lucide-react";
import { MiniAppGrid } from "@/components/miniapps/miniapp-grid";
import { Badge } from "@/components/ui/badge";
import { SecondaryButton } from "@/components/ui/button";

export function MiniAppsSection() {
  return (
    <section id="miniapps" className="relative py-24 bg-[#111111] border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <Badge variant="primary" className="mb-4">
              <Box className="w-3.5 h-3.5 mr-1 text-[#1E88E5]" />
              Marketplace de Software Especializado
            </Badge>
            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight font-heading mb-4">
              MiniApps de Alto Rendimiento
            </h2>
            <p className="text-base sm:text-lg text-[#8C8C8C] leading-relaxed">
              Micro-soluciones verticales construidas por nuestra división de Tecnología e Inteligencia para resolver problemas de nicho con agilidad e interoperabilidad inmediata.
            </p>
          </div>

          <Link href="/miniapps" className="flex-shrink-0">
            <SecondaryButton className="text-sm">
              <span>Explorar Marketplace</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </SecondaryButton>
          </Link>
        </div>

        <MiniAppGrid />
      </div>
    </section>
  );
}
