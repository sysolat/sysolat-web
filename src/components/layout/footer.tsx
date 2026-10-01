"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ArrowUpRight,
  Mail,
  Phone,
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
import { SITE_CONFIG, INTEGRATION_AREAS } from "@/lib/constants";
import { DIVISIONS } from "@/lib/divisions";
import { FOOTER_LINKS } from "@/lib/navigation";
import { LegalModal, LegalTab } from "@/components/layout/legal-modal";

const areaIcons: Record<string, React.ElementType> = {
  Marca: Palette,
  Espacios: Building2,
  Experiencias: Sparkles,
  Protección: ShieldCheck,
  Personas: Users,
  Tecnología: Code,
  Infraestructura: Server,
  Inteligencia: Cpu,
  Capital: TrendingUp,
  Operaciones: Settings,
};

const areaDivisionMap: Record<string, { id: string; name: string }> = {
  Marca: { id: "studio", name: "Studio" },
  Espacios: { id: "imagen", name: "Imagen" },
  Experiencias: { id: "eventos", name: "Eventos" },
  Protección: { id: "proteccion", name: "Protección" },
  Personas: { id: "personas", name: "Personas" },
  Tecnología: { id: "tecnologia", name: "Tecnología" },
  Infraestructura: { id: "infraestructura", name: "Infraestructura" },
  Inteligencia: { id: "inteligencia", name: "Inteligencia" },
  Capital: { id: "capital", name: "Capital" },
  Operaciones: { id: "operaciones", name: "Operaciones" },
};

export function Footer() {
  const [legalModalOpen, setLegalModalOpen] = useState(false);
  const [activeLegalTab, setActiveLegalTab] = useState<LegalTab>("privacidad");
  const pathname = usePathname();
  const isStudio = pathname?.startsWith("/studio");
  const isImagen = pathname?.startsWith("/imagen");
  const isProteccion = pathname?.startsWith("/proteccion");
  const isPersonas = pathname?.startsWith("/personas");
  const isDivision = isStudio || isImagen || isProteccion || isPersonas;

  const handleOpenLegalModal = (tab: LegalTab, e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    setActiveLegalTab(tab);
    setLegalModalOpen(true);
  };

  return (
    <footer className="relative bg-[#0d0f12] border-t border-white/10 pt-20 pb-12 overflow-hidden text-[#8C8C8C]">
      {/* Background ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#1E88E5]/5 blur-[140px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
        {/* If on Studio division page, show connection back to the central ecosystem */}
        {isStudio && (
          <div className="mb-14 p-6 sm:p-8 rounded-3xl bg-[#171A21] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#1E88E5]/15 border border-[#1E88E5]/30 flex items-center justify-center text-[#42A5F5] flex-shrink-0">
                <Palette className="w-6 h-6 text-[#1E88E5]" />
              </div>
              <div>
                <p className="text-base font-bold text-white font-heading">
                  SySo Co. Studio • Marca & Crecimiento
                </p>
                <p className="text-xs text-[#8C8C8C] mt-0.5">
                  Estás navegando en la división creativa de SySo Co. Todas las divisiones comparten el mismo cerebro y gobernanza.
                </p>
              </div>
            </div>
            <a
              href="https://sysolat.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1E88E5] text-white text-xs font-semibold hover:bg-[#1976D2] transition-colors flex-shrink-0 shadow-lg shadow-[#1E88E5]/25"
            >
              <span>Volver al Ecosistema Principal (sysolat.com)</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        )}

        {/* If on Imagen division page, show connection back to the central ecosystem */}
        {isImagen && (
          <div className="mb-14 p-6 sm:p-8 rounded-3xl bg-[#171A21] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#1E88E5]/15 border border-[#1E88E5]/30 flex items-center justify-center text-[#42A5F5] flex-shrink-0">
                <Building2 className="w-6 h-6 text-[#1E88E5]" />
              </div>
              <div>
                <p className="text-base font-bold text-white font-heading">
                  SySo Co. Imagen • Espacios, Visualización & Grandes Formatos
                </p>
                <p className="text-xs text-[#8C8C8C] mt-0.5">
                  Estás navegando en la división espacial y arquitectónica de SySo Co. Todas las divisiones comparten el mismo cerebro y gobernanza.
                </p>
              </div>
            </div>
            <a
              href="https://sysolat.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1E88E5] text-white text-xs font-semibold hover:bg-[#1976D2] transition-colors flex-shrink-0 shadow-lg shadow-[#1E88E5]/25"
            >
              <span>Volver al Ecosistema Principal (sysolat.com)</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        )}

        {/* If on Protección division page, show connection back to the central ecosystem */}
        {isProteccion && (
          <div className="mb-14 p-6 sm:p-8 rounded-3xl bg-[#171A21] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#1E88E5]/15 border border-[#1E88E5]/30 flex items-center justify-center text-[#42A5F5] flex-shrink-0">
                <ShieldCheck className="w-6 h-6 text-[#1E88E5]" />
              </div>
              <div>
                <p className="text-base font-bold text-white font-heading">
                  SySo Co. Protección • Seguridad, Blindaje & Protección Corporativa
                </p>
                <p className="text-xs text-[#8C8C8C] mt-0.5">
                  Estás navegando en la división de blindaje legal, cumplimiento y seguridad patrimonial de SySo Co. Todas las divisiones comparten el mismo cerebro y gobernanza.
                </p>
              </div>
            </div>
            <a
              href="https://sysolat.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1E88E5] text-white text-xs font-semibold hover:bg-[#1976D2] transition-colors flex-shrink-0 shadow-lg shadow-[#1E88E5]/25"
            >
              <span>Volver al Ecosistema Principal (sysolat.com)</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        )}

        {/* If on Personas division page, show connection back to the central ecosystem */}
        {isPersonas && (
          <div className="mb-14 p-6 sm:p-8 rounded-3xl bg-[#171A21] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#1E88E5]/15 border border-[#1E88E5]/30 flex items-center justify-center text-[#42A5F5] flex-shrink-0">
                <Users className="w-6 h-6 text-[#1E88E5]" />
              </div>
              <div>
                <p className="text-base font-bold text-white font-heading">
                  SySo Co. Personas • Capital Humano, Talento & Desarrollo Organizacional
                </p>
                <p className="text-xs text-[#8C8C8C] mt-0.5">
                  Estás navegando en la división de talento directivo, desarrollo humano y cultura de alto rendimiento de SySo Co. Todas las divisiones comparten el mismo cerebro y gobernanza.
                </p>
              </div>
            </div>
            <a
              href="https://sysolat.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1E88E5] text-white text-xs font-semibold hover:bg-[#1976D2] transition-colors flex-shrink-0 shadow-lg shadow-[#1E88E5]/25"
            >
              <span>Volver al Ecosistema Principal (sysolat.com)</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        )}

        {/* Top Section: Brand Statement & Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          <div className="lg:col-span-5 flex flex-col gap-4">
            {/* Brand Title */}
            <a
              href={isDivision ? "https://sysolat.com" : "/"}
              className="inline-block group mb-1"
              title={isDivision ? "Volver a sysolat.com" : "Inicio"}
            >
              <span className="text-2xl font-bold tracking-tight text-white font-heading">
                SySo<span className="text-[#1E88E5]">Co.</span>
              </span>
            </a>

            <p className="text-base text-[#D9D9D9] max-w-md font-medium">
              {SITE_CONFIG.tagline}
            </p>
            <p className="text-sm text-[#8C8C8C] max-w-md leading-relaxed">
              Evolucionamos de servicios tradicionales hacia un Ecosistema Integral de Soluciones Empresariales diseñado para la transformación continua de organizaciones de alto calibre.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2 text-sm text-[#D9D9D9]">
              <a
                href={`mailto:${SITE_CONFIG.contactEmail}`}
                className="inline-flex items-center gap-2 hover:text-[#42A5F5] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#1E88E5]" />
                {SITE_CONFIG.contactEmail}
              </a>
              <span className="hidden sm:inline text-white/20">|</span>
              <a
                href={SITE_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-[#42A5F5] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#1E88E5]" />
                {SITE_CONFIG.phone}
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
                  Áreas de Integración Corporativa (10)
                </h4>
                <span className="text-[11px] text-[#8C8C8C] hidden sm:inline">
                  Desliza u hojea las fichas &rarr;
                </span>
              </div>

              {/* Vertical book-page style discrete cards - widened & fully readable on scroll */}
              <div className="flex items-end overflow-x-auto pb-4 pt-6 px-1 gap-2 sm:gap-2.5 scrollbar-thin scrollbar-thumb-white/10 hover:scrollbar-thumb-[#1E88E5]/40 scroll-smooth">
                {INTEGRATION_AREAS.map((area, idx) => {
                  const Icon = areaIcons[area] || Sparkles;
                  const divisionInfo = areaDivisionMap[area];
                  const href = divisionInfo ? `/divisions#${divisionInfo.id}` : "/divisions";

                  return (
                    <Link
                      key={area}
                      href={href}
                      title={`Conoce más sobre la división ${divisionInfo?.name || area} (${area})`}
                      className="
                        group relative flex flex-col justify-between flex-shrink-0
                        w-24 sm:w-28 md:w-[108px] min-w-[96px] sm:min-w-[108px] h-36 sm:h-40
                        rounded-t-2xl rounded-b-lg
                        bg-gradient-to-b from-[#212631] via-[#171A21] to-[#101217]
                        border-t border-r border-l border-white/15
                        border-b-2 border-b-[#1E88E5]/30
                        p-2.5 sm:p-3
                        shadow-[0_8px_20px_rgba(0,0,0,0.6)]
                        cursor-pointer select-none
                        transition-all duration-300 ease-out
                        hover:-translate-y-3 hover:scale-105 hover:z-20
                        hover:border-t-[#42A5F5] hover:border-r-white/30 hover:border-l-white/30
                        hover:shadow-[0_15px_30px_rgba(0,0,0,0.8),0_0_20px_rgba(30,136,229,0.3)]
                      "
                      style={{
                        zIndex: idx + 1,
                      }}
                    >
                      {/* Top folio page number */}
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono font-semibold text-[#42A5F5]/70 group-hover:text-[#42A5F5] transition-colors">
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                        <div className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-[#1E88E5] transition-colors" />
                      </div>

                      {/* Icon */}
                      <div className="flex items-center justify-center my-auto text-[#8C8C8C] group-hover:text-white group-hover:scale-110 transition-all duration-200">
                        <Icon className="w-5 h-5" />
                      </div>

                      {/* Bottom area label (completely visible, no ellipses) */}
                      <div className="border-t border-white/10 pt-2 text-center min-h-[30px] flex items-center justify-center">
                        <span className="text-[10.5px] sm:text-[11px] font-medium tracking-tight text-[#D9D9D9] group-hover:text-white group-hover:font-semibold transition-colors leading-tight text-center break-words">
                          {area}
                        </span>
                      </div>

                      {/* Subtle spine line highlight on left border */}
                      <div className="absolute left-0 top-3 bottom-3 w-[1px] bg-gradient-to-b from-white/20 via-[#1E88E5]/30 to-transparent pointer-events-none" />
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Note & active ecosystem status without inactive socials */}
            <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs text-[#8C8C8C]">
                Inspirado en la excelencia de consultoría de clase mundial.
              </span>
              <div className="flex items-center gap-2 text-xs text-[#8C8C8C]">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-mono text-[11px] text-[#D9D9D9]/80">Ecosistema Activo • Soporte 24/7</span>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Section: Divisions Grid & Ecosystem Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 py-14 border-b border-white/10">
          <div className="col-span-2 md:col-span-3 lg:col-span-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-6">
              Divisiones del Ecosistema (10)
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-3 gap-x-4">
              {DIVISIONS.map((division) => (
                <a
                  key={division.id}
                  href={division.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between text-sm hover:text-white transition-colors py-1"
                >
                  <span className="group-hover:translate-x-1 transition-transform">
                    {division.name}
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#1E88E5] opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-6">
              Ecosistema
            </h4>
            <ul className="space-y-3 text-sm">
              {FOOTER_LINKS.ecosystem.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-6">
              Legal & Cumplimiento
            </h4>
            <ul className="space-y-3 text-sm">
              {FOOTER_LINKS.legal.map((link) => {
                let tab: LegalTab = "privacidad";
                if (link.href.includes("terminos")) tab = "terminos";
                else if (link.href.includes("compliance")) tab = "compliance";

                return (
                  <li key={link.href}>
                    <button
                      type="button"
                      onClick={(e) => handleOpenLegalModal(tab, e)}
                      className="hover:text-[#42A5F5] transition-colors text-left inline-flex items-center gap-1.5 group cursor-pointer"
                    >
                      <span className="group-hover:translate-x-0.5 transition-transform">
                        {link.label}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8C8C8C]">
          <p>
            &copy; {new Date().getFullYear()} {SITE_CONFIG.name} — SySo Co. Todos los derechos reservados.
          </p>
        </div>
      </div>

      {/* Interactive In-Place Legal PopUp Modal */}
      <LegalModal
        isOpen={legalModalOpen}
        onClose={() => setLegalModalOpen(false)}
        initialTab={activeLegalTab}
      />
    </footer>
  );
}
