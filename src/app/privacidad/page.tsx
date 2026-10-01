import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import { PrivacyContent } from "@/components/layout/legal-modal";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Aviso de Privacidad",
  description: "Aviso de Privacidad Integral de SYSOLAT 3.0 / SySo Co.",
};

export default function PrivacidadPage() {
  return (
    <div className="pt-32 pb-24 bg-[#111111] min-h-screen">
      <div className="mx-auto max-w-4xl px-6 sm:px-8">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#8C8C8C] hover:text-[#42A5F5] transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Volver al Ecosistema Principal</span>
        </Link>

        {/* Page Header */}
        <div className="flex items-center gap-4 pb-6 border-b border-white/10 mb-8">
          <div className="w-12 h-12 rounded-2xl bg-[#1E88E5]/15 border border-[#1E88E5]/30 flex items-center justify-center text-[#42A5F5]">
            <ShieldCheck className="w-6 h-6 text-[#1E88E5]" />
          </div>
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-white font-heading tracking-tight">
              Aviso de Privacidad Integral
            </h1>
            <p className="text-xs sm:text-sm text-[#8C8C8C] mt-1">
              {SITE_CONFIG.name} — SySo Co. • Vigente a partir de 2026
            </p>
          </div>
        </div>

        {/* Legal Body */}
        <div className="p-8 sm:p-10 rounded-[28px] bg-[#171A21] border border-white/10 shadow-2xl">
          <PrivacyContent />
        </div>

        {/* Back Bottom CTA */}
        <div className="mt-8 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-[#42A5F5] hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Regresar a la página de inicio de SySo Co.</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
