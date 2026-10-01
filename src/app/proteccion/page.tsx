import React from "react";
import type { Metadata } from "next";
import {
  ShieldCheck,
  Lock,
  FileCheck2,
  Scale,
  ArrowRight,
  CheckCircle2,
  Compass,
  Zap,
  Phone,
  Mail,
  ArrowUpRight,
  AlertTriangle,
  Building2,
  FileText,
  BadgeAlert,
  Users2,
  Activity,
  Layers,
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { PrimaryButton, SecondaryButton } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Protección — Seguridad, Blindaje & Protección Corporativa | SySo Co.",
  description:
    "División 03 de SySo Co. especializada en Blindaje Corporativo, Estructuración Societaria, Ingeniería Contractual, Compliance Normativo y Salvaguarda Patrimonial Integral.",
  openGraph: {
    title: "Protección — Seguridad, Blindaje & Protección Corporativa | SySo Co.",
    description:
      "Blindamos el valor, la legalidad y la continuidad de tu empresa ante contingencias legales, fiscales, regulatorias y operativas.",
    url: "https://proteccion.sysolat.com",
    siteName: "SySo Co. Protección",
    locale: "es_MX",
    type: "website",
  },
};

const PROTECCION_SERVICES = [
  {
    id: "blindaje-societario",
    title: "Blindaje Corporativo & Estructuración Societaria",
    tagline: "Arquitectura Legal & Resiliencia Patrimonial",
    description:
      "Protegemos el patrimonio de socios y directores mediante estructuras societarias sofisticadas, holdings de control, protocolos de gobierno corporativo y estatutos a prueba de litigios.",
    icon: ShieldCheck,
    accent: "#1E88E5",
    features: [
      "Diseño de Holdings, Fideicomisos y Estructuras de Protección Patrimonial",
      "Pactos de Socios, Acuerdos de Accionistas & Cláusulas Drag/Tag Along",
      "Gobierno Corporativo y Formalización de Libros y Actas de Asamblea",
      "Separación de Riesgo Operativo vs. Activos Estratégicos e Inmuebles",
      "Estrategias de Sucesión Patrimonial y Continuidad de Negocio Familiar",
      "Auditoría Preventiva de Facultades y Poderes Notariales",
    ],
    deliverable: "Arquitectura Societaria Blindada + Libro de Actas Certificado",
  },
  {
    id: "ingenieria-contractual",
    title: "Ingeniería Contractual & Mitigación de Riesgos",
    tagline: "Contratos de Alta Protección & Due Diligence",
    description:
      "Blindamos tus relaciones comerciales, laborales y de provisión. Redactamos y auditamos instrumentos contractuales robustos que minimizan el riesgo de incumplimiento o litigio.",
    icon: FileCheck2,
    accent: "#42A5F5",
    features: [
      "Contratos Mercantiles y de Prestación de Servicios de Alta Complejidad",
      "Convenios de Confidencialidad Reforzada (NDA) y No Competencia Estricta",
      "Blindaje Laboral Estratégico y Prevención de Pasivos Contingentes",
      "Contratos Marco con Proveedores Críticos y Clientes Transnacionales",
      "Cláusulas Penales Específicas, Arbitraje y Resolución Acelerada",
      "Auditoría Exhaustiva (Due Diligence) de Contratos Vigentes",
    ],
    deliverable: "Repositorio Contractual Blindado + Matriz de Riesgo y Pasivos",
  },
  {
    id: "compliance-regulatorio",
    title: "Compliance Normativo & Integridad Operativa",
    tagline: "Gobernanza Regulatoria & Mitigación de Sanciones",
    description:
      "Garantizamos que tu operación cumpla cabalmente con las regulaciones mexicanas e internacionales más exigentes, evitando multas catastróficas, clausuras o cancelaciones de padrones.",
    icon: Scale,
    accent: "#1E88E5",
    features: [
      "Cumplimiento Laboral Normativo, Subcontratación Especializada y REPSE",
      "Avisos de Privacidad & Cumplimiento estricto LFPDPPP / Protección de Datos",
      "Programas de Prevención de Lavado de Dinero (PLD) y Anticorrupción",
      "Cumplimiento en Normas Oficiales Mexicanas de Trabajo y Seguridad (STPS)",
      "Canales de Denuncia Interna y Códigos de Ética y Conducta Corporativa",
      "Acompañamiento Técnico ante Inspecciones y Requerimientos de Autoridad",
    ],
    deliverable: "Certificación Interna de Compliance + Manuales Operativos",
  },
  {
    id: "gestion-crisis-activos",
    title: "Defensa Patrimonial, Ciber-Resiliencia & Gestión de Crisis",
    tagline: "Protección de Intangibles & Continuidad Crítica",
    description:
      "Salvaguardamos los activos intangibles más valiosos de tu compañía (marcas, patentes, secretos industriales) y desplegamos protocolos de respuesta legal inmediata ante contingencias o brechas de datos.",
    icon: Lock,
    accent: "#42A5F5",
    features: [
      "Registro, Custodia y Litigio de Marcas, Patentes y Secretos Industriales (IMPI)",
      "Protocolos Legales de Respuesta ante Brechas de Ciberseguridad y Fuga de Datos",
      "Defensa y Litigio Estratégico Civil, Mercantil y Administrativo",
      "Comité Legal de Gestión de Crisis y Daño Reputacional",
      "Estrategias de Mediación y Solución Alternativa de Controversias",
      "Salvaguarda de Licencias, Concesiones y Activos Clave de Operación",
    ],
    deliverable: "Título de Concesión IMPI + Plan Integral de Continuidad y Crisis",
  },
];

const METHODOLOGY_STEPS = [
  {
    step: "01",
    phase: "Auditoría de Vulnerabilidad (Due Diligence)",
    duration: "Semanas 1 - 2",
    description:
      "Radiografía profunda de la situación jurídica de la compañía: análisis de contratos, actas constitutivas, poderes, pasivos laborales y grado de cumplimiento regulatorio.",
    outputs: ["Reporte de Vulnerabilidad Integral", "Matriz Semáforo de Riesgos Críticos"],
  },
  {
    step: "02",
    phase: "Diseño del Modelo de Blindaje Integral",
    duration: "Semanas 2 - 3",
    description:
      "Estructuración de la estrategia a medida: definición de arquitectura corporativa, reordenamiento de relaciones comerciales, blindaje societario y plan maestro de compliance.",
    outputs: ["Plan Maestro de Blindaje Patrimonial", "Ruta Crítica de Instrumentación"],
  },
  {
    step: "03",
    phase: "Instrumentación Jurídica & Despliegue",
    duration: "Semanas 3 - 6",
    description:
      "Redacción, firma y protocolización notarial de los nuevos instrumentos: contratos marco, reformas estatutarias, actas de asamblea, políticas de privacidad y compliance.",
    outputs: ["Instrumentos Notariados", "Plantillas Contractuales Homologadas"],
  },
  {
    step: "04",
    phase: "Monitoreo Activo & Defensa Permanente",
    duration: "Gobernanza Continua",
    description:
      "Acompañamiento directivo continuo para auditorías periódicas, revisión de nuevas alianzas, soporte ante visitas de inspección y respuesta inmediata ante cualquier controversia.",
    outputs: ["Mesa de Ayuda Jurídica 24/7", "Auditorías Preventivas Semestrales"],
  },
];

const COMPARISON_METRICS = [
  {
    aspect: "Enfoque Operativo",
    traditional: "Reactivo: Acuden al abogado cuando la demanda, multa o auditoría ya sucedió.",
    syso: "Proactivo & Preventivo: Blindaje estructurado antes de que surja la contingencia.",
  },
  {
    aspect: "Protección Patrimonial",
    traditional: "Bienes personales y corporativos mezclados con alto riesgo de embargo.",
    syso: "Separación estricta y blindaje patrimonial de socios, directores y activos clave.",
  },
  {
    aspect: "Instrumentos Contractuales",
    traditional: "Contratos genéricos de machote con lagunas y cláusulas desactualizadas.",
    syso: "Ingeniería contractual a la medida con cláusulas penales e incentivos de cumplimiento.",
  },
  {
    aspect: "Cumplimiento y Regulatorio",
    traditional: "Vulnerables a clausuras, multas del IMSS/SAT/STPS o pérdida del REPSE.",
    syso: "Auditoría continua de cumplimiento normativo con protocolos blindados.",
  },
];

export default function ProteccionPage() {
  return (
    <div className="relative min-h-screen bg-[#111111] text-white selection:bg-[#1E88E5]/30">
      {/* Ambient background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-gradient-to-b from-[#1E88E5]/10 via-[#1E88E5]/5 to-transparent blur-[120px] pointer-events-none" />

      {/* Hero Section */}
      <section className="relative pt-36 pb-20 sm:pt-44 sm:pb-28 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          {/* Breadcrumb / Top Indicator */}
          <div className="flex flex-wrap items-center gap-3 mb-8">
            <a
              href="https://sysolat.com"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-[#8C8C8C] hover:text-white transition-colors"
            >
              <span>SYSOLAT.COM</span>
              <ArrowUpRight className="w-3 h-3 text-[#1E88E5]" />
            </a>
            <span className="text-[#8C8C8C]/40 text-xs">/</span>
            <span className="text-xs font-mono text-[#42A5F5] font-semibold tracking-wider">
              DIVISIÓN 03 // PROTECCIÓN
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <Badge variant="primary" className="mb-6">
                <ShieldCheck className="w-3.5 h-3.5 mr-1.5 text-[#1E88E5]" />
                Seguridad, Blindaje & Protección Corporativa
              </Badge>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight font-heading leading-[1.08] mb-6">
                Blindamos el valor, la legalidad y la{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#90CAF9] to-[#1E88E5]">
                  continuidad de tu empresa.
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-[#D9D9D9] max-w-2xl leading-relaxed mb-8">
                Estructuración societaria sólida, ingeniería contractual de alta cobertura, compliance normativo estricto y salvaguarda patrimonial estratégica para organizaciones que no dejan su futuro al azar.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center pt-2">
                <a href="#diagnostico">
                  <PrimaryButton className="w-full sm:w-auto text-sm px-7 py-3.5 shadow-lg shadow-[#1E88E5]/25">
                    <span>Solicitar Diagnóstico de Blindaje</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </PrimaryButton>
                </a>
                <a href="#servicios">
                  <SecondaryButton className="w-full sm:w-auto text-sm px-6 py-3.5">
                    <span>Explorar Coberturas Corporativas</span>
                  </SecondaryButton>
                </a>
              </div>
            </div>

            {/* Right Highlight Box / Metrics */}
            <div className="lg:col-span-5">
              <div className="relative p-8 rounded-3xl bg-gradient-to-b from-[#1E232F] via-[#171A21] to-[#101217] border border-white/10 shadow-2xl">
                <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#42A5F5]">
                      Matriz de Seguridad Activa
                    </span>
                    <h3 className="text-lg font-bold text-white font-heading mt-0.5">
                      Gobernanza & Blindaje 360°
                    </h3>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-[#1E88E5]/15 border border-[#1E88E5]/30 flex items-center justify-center text-[#42A5F5]">
                    <Lock className="w-5 h-5 text-[#1E88E5]" />
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 flex items-start gap-3.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-white">
                        Inmunidad Societaria & Patrimonial
                      </h4>
                      <p className="text-xs text-[#8C8C8C] mt-0.5">
                        Separación técnica de activos personales frente a contingencias operativas o fiscales.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 flex items-start gap-3.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-white">
                        Contratación Sin Fisuras
                      </h4>
                      <p className="text-xs text-[#8C8C8C] mt-0.5">
                        Convenios y NDAs con cláusulas de sanción objetiva y arbitraje de resolución expedita.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 flex items-start gap-3.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-white">
                        Riesgo Regulatorio Cero (Compliance)
                      </h4>
                      <p className="text-xs text-[#8C8C8C] mt-0.5">
                        Alineación plena con REPSE, STPS, LFPDPPP y estándares anticorrupción corporativos.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 flex items-start gap-3.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-white">
                        Respuesta Inmediata a Crisis
                      </h4>
                      <p className="text-xs text-[#8C8C8C] mt-0.5">
                        Comité de contingencia legal activable 24/7 ante incidentes críticos o inspecciones.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between text-xs text-[#8C8C8C]">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Protocolo Activo
                  </span>
                  <span className="font-mono text-[#D9D9D9]">Ecosistema SySo Co.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-24 bg-[#0d0f12] border-t border-white/5 relative">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="primary" className="mb-4">
              Coberturas Especializadas
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight font-heading mb-4">
              Pilares de Blindaje y Seguridad Empresarial
            </h2>
            <p className="text-base sm:text-lg text-[#8C8C8C] leading-relaxed">
              Diseñados para prevenir contingencias, salvaguardar el valor patrimonial y blindar cada frente de interacción de tu organización.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PROTECCION_SERVICES.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  className="group relative flex flex-col justify-between p-8 sm:p-10 rounded-3xl bg-[#171A21] border border-white/10 hover:border-[#1E88E5]/50 transition-all duration-300 shadow-xl hover:shadow-[0_10px_35px_rgba(30,136,229,0.15)]"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-[#1E88E5]/15 border border-[#1E88E5]/30 flex items-center justify-center text-[#42A5F5] group-hover:scale-110 transition-transform">
                        <Icon className="w-7 h-7 text-[#1E88E5]" />
                      </div>
                      <span className="text-xs font-mono font-bold text-[#8C8C8C] px-3 py-1 rounded-full bg-white/5 border border-white/10">
                        0{index + 1}
                      </span>
                    </div>

                    <span className="text-xs font-mono font-semibold text-[#42A5F5] uppercase tracking-wider block mb-1">
                      {service.tagline}
                    </span>
                    <h3 className="text-2xl font-bold text-white font-heading mb-3">
                      {service.title}
                    </h3>
                    <p className="text-sm text-[#8C8C8C] leading-relaxed mb-6">
                      {service.description}
                    </p>

                    <div className="space-y-2.5 mb-8">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-[#42A5F5] flex-shrink-0 mt-0.5" />
                          <span className="text-xs sm:text-sm text-[#D9D9D9]">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs">
                    <span className="text-[#8C8C8C]">Entregable Clave:</span>
                    <span className="font-semibold text-white font-mono bg-white/5 px-2.5 py-1 rounded-lg border border-white/10">
                      {service.deliverable}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparison Matrix Section */}
      <section className="py-24 bg-[#111111] border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="primary" className="mb-4">
              Valor Diferencial
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight font-heading mb-4">
              Asesoría Legal Tradicional vs. Blindaje Proactivo SySo
            </h2>
            <p className="text-base sm:text-lg text-[#8C8C8C] leading-relaxed">
              La diferencia entre solucionar un problema costoso en tribunales o tener una estructura diseñada para que nunca ocurra.
            </p>
          </div>

          <div className="overflow-x-auto">
            <div className="min-w-[700px] rounded-3xl border border-white/10 bg-[#171A21] overflow-hidden shadow-2xl">
              <div className="grid grid-cols-12 bg-white/5 p-5 text-xs font-mono font-bold uppercase tracking-wider text-[#8C8C8C] border-b border-white/10">
                <div className="col-span-3 text-white">Dimensión</div>
                <div className="col-span-4 text-rose-400/90 flex items-center gap-1.5">
                  <AlertTriangle className="w-3.5 h-3.5" />
                  <span>Enfoque Tradicional / Reactivo</span>
                </div>
                <div className="col-span-5 text-[#42A5F5] flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Ecosistema de Blindaje SySo Co. Protección</span>
                </div>
              </div>

              <div className="divide-y divide-white/5">
                {COMPARISON_METRICS.map((row) => (
                  <div key={row.aspect} className="grid grid-cols-12 p-5 text-sm items-center hover:bg-white/[0.02] transition-colors">
                    <div className="col-span-3 font-semibold text-white pr-4">
                      {row.aspect}
                    </div>
                    <div className="col-span-4 text-[#8C8C8C] text-xs sm:text-sm pr-6 leading-relaxed">
                      {row.traditional}
                    </div>
                    <div className="col-span-5 text-[#D9D9D9] text-xs sm:text-sm font-medium flex items-start gap-2 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-[#1E88E5] flex-shrink-0 mt-0.5" />
                      <span>{row.syso}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section id="metodologia" className="py-24 bg-[#0d0f12] border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="primary" className="mb-4">
              Metodología Rigurosa
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight font-heading mb-4">
              Protocolo de Blindaje en 4 Fases
            </h2>
            <p className="text-base sm:text-lg text-[#8C8C8C] leading-relaxed">
              Un proceso exhaustivo que diagnostica, estructura, instrumenta y monitorea la salud legal y patrimonial de tu empresa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {METHODOLOGY_STEPS.map((m) => (
              <div
                key={m.step}
                className="relative p-6 sm:p-7 rounded-3xl bg-[#171A21] border border-white/10 flex flex-col justify-between shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-3xl font-extrabold font-heading text-[#1E88E5]">
                      {m.step}
                    </span>
                    <span className="text-[11px] font-mono text-[#8C8C8C] px-2.5 py-1 rounded-full bg-white/5 border border-white/10">
                      {m.duration}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white font-heading mb-3 leading-snug">
                    {m.phase}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#8C8C8C] leading-relaxed mb-6">
                    {m.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <span className="text-[11px] font-mono uppercase text-[#42A5F5] block mb-2 font-semibold">
                    Entregables de Fase:
                  </span>
                  <ul className="space-y-1.5">
                    {m.outputs.map((out) => (
                      <li key={out} className="text-xs text-[#D9D9D9] flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-[#1E88E5]" />
                        <span>{out}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Diagnostic Section */}
      <section id="diagnostico" className="py-24 bg-[#111111] border-t border-white/5 relative">
        <div className="mx-auto max-w-5xl px-6 sm:px-8">
          <div className="relative p-8 sm:p-14 rounded-3xl bg-gradient-to-b from-[#1C222E] via-[#171A21] to-[#0F1116] border border-[#1E88E5]/30 shadow-2xl overflow-hidden text-center">
            {/* Background glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-[#1E88E5]/15 blur-[90px] pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto">
              <Badge variant="primary" className="mb-4 mx-auto">
                Auditoría Confidencial
              </Badge>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight font-heading mb-4">
                Solicita un Diagnóstico de Blindaje Corporativo
              </h2>
              <p className="text-base text-[#D9D9D9] leading-relaxed mb-8">
                Identifica riesgos ocultos en contratos, estructuras societarias o normativas laborales antes de que se conviertan en pasivos costosos. Evaluamos tu situación bajo estricto acuerdo de confidencialidad.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
                <a
                  href={`mailto:${SITE_CONFIG.contactEmail}?subject=Diagn%C3%B3stico%20de%20Blindaje%20Corporativo%20-%20SySo%20Co.%20Protecci%C3%B3n`}
                >
                  <PrimaryButton className="w-full sm:w-auto text-sm px-8 py-3.5 shadow-xl shadow-[#1E88E5]/30">
                    <Mail className="w-4 h-4 mr-2" />
                    <span>Solicitar Auditoría por Correo</span>
                  </PrimaryButton>
                </a>
                <a
                  href={`${SITE_CONFIG.whatsappUrl}?text=Hola,%20deseo%20solicitar%20un%20diagn%C3%B3stico%20de%20blindaje%20corporativo%20con%20SySo%20Co.%20Protecci%C3%B3n`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SecondaryButton className="w-full sm:w-auto text-sm px-8 py-3.5">
                    <Phone className="w-4 h-4 mr-2 text-[#42A5F5]" />
                    <span>Atención Directa por WhatsApp</span>
                  </SecondaryButton>
                </a>
              </div>

              <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-[#8C8C8C]">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Acuerdo de Confidencialidad (NDA) Previo</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-[#42A5F5]" />
                  <span>Dictamen Técnico Preliminar</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-amber-400" />
                  <span>Respuesta Ejecutiva en &lt; 24h</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Return to Central Ecosystem Bar */}
      <section className="py-12 bg-[#0c0e11] border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-6 rounded-2xl bg-[#171A21] border border-white/10">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#1E88E5]/15 border border-[#1E88E5]/30 flex items-center justify-center text-[#42A5F5] flex-shrink-0">
                <Building2 className="w-5 h-5 text-[#1E88E5]" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white font-heading">
                  Ecosistema SySo Co. • 10 Divisiones Especializadas
                </h4>
                <p className="text-xs text-[#8C8C8C]">
                  Explora todas las capacidades que integran nuestro modelo empresarial 360°.
                </p>
              </div>
            </div>
            <a
              href="https://sysolat.com"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1E88E5] text-white text-xs font-semibold hover:bg-[#1976D2] transition-colors flex-shrink-0 shadow-lg shadow-[#1E88E5]/25"
            >
              <span>Explorar sysolat.com</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
