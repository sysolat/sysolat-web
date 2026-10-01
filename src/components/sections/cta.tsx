import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, Calendar } from "lucide-react";
import { PrimaryButton, SecondaryButton } from "@/components/ui/button";
import { SITE_CONFIG } from "@/lib/constants";

export function CTASection() {
  return (
    <section className="relative py-28 bg-[#111111] overflow-hidden border-t border-white/10">
      {/* Background radial blue ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#1E88E5]/20 blur-[160px] pointer-events-none" />

      <div className="relative mx-auto max-w-5xl px-6 sm:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-[#42A5F5] uppercase tracking-wider mb-6">
          <Sparkles className="w-3.5 h-3.5 text-[#1E88E5]" />
          Sesión Estratégica de Diagnóstico
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-heading mb-6 leading-tight">
          ¿Listo para integrar todas las soluciones de tu empresa?
        </h2>

        <p className="text-base sm:text-xl text-[#8C8C8C] max-w-2xl mx-auto mb-10 leading-relaxed">
          Agenda una sesión privada con nuestro equipo directivo para diagnosticar tu organización y diseñar la hoja de ruta en el Ecosistema SySo Co.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/contact" className="w-full sm:w-auto">
            <PrimaryButton className="w-full sm:w-auto text-base px-8 py-4">
              <Calendar className="w-5 h-5 mr-2" />
              <span>Agendar Reunión Estratégica</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </PrimaryButton>
          </Link>
          <a
            href={`mailto:${SITE_CONFIG.contactEmail}`}
            className="w-full sm:w-auto"
          >
            <SecondaryButton className="w-full sm:w-auto text-base px-8 py-4">
              <span>Contactar por Email</span>
            </SecondaryButton>
          </a>
        </div>

        <p className="text-xs text-[#8C8C8C] mt-6">
          Sin compromisos. Evaluación inicial confidencial para CEOs y dueños de negocio.
        </p>
      </div>
    </section>
  );
}
