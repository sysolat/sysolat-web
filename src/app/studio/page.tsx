import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Palette,
  Sparkles,
  TrendingUp,
  Target,
  ArrowRight,
  CheckCircle2,
  Share2,
  Layers,
  FileCheck,
  Compass,
  ArrowUpRight,
  ShieldCheck,
  Building2,
  Phone,
  Mail,
  Zap,
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { PrimaryButton, SecondaryButton } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Studio — Marca & Crecimiento | SySo Co.",
  description:
    "División 01 de SySo Co. especializada en Branding & Identidad, Marketing Digital & Inbound, Estrategia de Contenido y Posicionamiento de Marca para empresas de alto calibre.",
  openGraph: {
    title: "Studio — Marca & Crecimiento | SySo Co.",
    description:
      "Construimos marcas de alto impacto que proyectan liderazgo, dominan su categoría y aceleran la atracción comercial continua.",
    url: "https://studio.sysolat.com",
    siteName: "SySo Co. Studio",
    locale: "es_MX",
    type: "website",
  },
};

const STUDIO_SERVICES = [
  {
    id: "branding",
    title: "Branding & Identidad",
    tagline: "Arquitectura Visual & Propósito",
    description:
      "Transformamos el valor intangible de tu compañía en una identidad visual imponente que proyecta solvencia, liderazgo y memorabilidad indiscutible en su industria.",
    icon: Palette,
    accent: "#1E88E5",
    features: [
      "Naming Estratégico & Arquitectura de Marca",
      "Diseño de Logotipo Maestro & Sistema Visual",
      "Manual de Identidad Corporativa (Brand Guidelines)",
      "Tipografía Corporativa & Paleta Cromática",
      "Papelería Ejecutiva & Aplicaciones Físicas/Digitales",
      "Supervisión & Gobierno de Marca Continuo",
    ],
    deliverable: "Manual de Identidad Maestro + Kit Vectorial Completo",
  },
  {
    id: "marketing-digital",
    title: "Marketing Digital & Inbound",
    tagline: "Demanda Calificada & Conversión",
    description:
      "Diseñamos y ejecutamos sistemas de adquisición digital orientados a resultados medibles, captando prospectos de alto valor mediante pauta inteligente y embudos de conversión.",
    icon: TrendingUp,
    accent: "#42A5F5",
    features: [
      "Embudos de Conversión y Ventas (Sales Funnels)",
      "Pauta Digital de Precisión (Meta Ads, Google, LinkedIn)",
      "Estrategia de Inbound Marketing B2B & B2C",
      "Optimización de Tasa de Conversión (CRO)",
      "Automatización de Nutrición & CRM Lead Scoring",
      "Dashboards de Rendimiento y Atribución de ROI",
    ],
    deliverable: "Pipeline de Prospectos Pre-Calificados & Reportes ROI",
  },
  {
    id: "estrategia-contenido",
    title: "Estrategia de Contenido",
    tagline: "Narrativa, Autoridad & Storytelling",
    description:
      "Producimos narrativas institucionales y contenido multimedia de nivel cinematográfico que educan a tu mercado, generan confianza inmediata y consolidan tu autoridad de marca.",
    icon: Sparkles,
    accent: "#1E88E5",
    features: [
      "Narrativa Institucional & Storytelling de Marca",
      "Producción Audiovisual Corporativa & Publicitaria",
      "Contenido Estratégico para Redes Ejecutivas",
      "Whitepapers, Casos de Estudio & Artículos de Liderazgo",
      "Estrategia de Contenido para Voceros y CEOs",
      "Calendario Editorial Estratégico Omnicanal",
    ],
    deliverable: "Ecosistema Editorial Mensual + Banco Multimedia 4K",
  },
  {
    id: "posicionamiento",
    title: "Posicionamiento de Marca",
    tagline: "Dominio de Categoría & Diferenciación",
    description:
      "Posicionamos a tu organización en el Top-of-Mind de sus decisores clave, desmarcándola radicalmente de competidores tradicionales mediante propuestas de valor inexpugnables.",
    icon: Target,
    accent: "#42A5F5",
    features: [
      "Auditoría de Percepción & Benchmarking Competitivo",
      "Definición de Propuesta Única de Valor (UVP)",
      "Estrategia de Diferenciación en el Mercado",
      "Gestión de Reputación y Relaciones Públicas",
      "Discurso Comercial Institucional para Fuerzas de Venta",
      "Monitoreo Continuo de Sentimiento de Marca",
    ],
    deliverable: "Matriz de Posicionamiento + Script Comercial Institucional",
  },
];

const METHODOLOGY_STEPS = [
  {
    number: "01",
    phase: "Diagnóstico & Auditoría",
    duration: "Semana 1-2",
    description:
      "Evaluamos la percepción actual de tu marca, el entorno competitivo, el perfil del comprador ideal y las inconsistencias visuales o de mensaje.",
  },
  {
    number: "02",
    phase: "Arquitectura & Concepto",
    duration: "Semana 3-4",
    description:
      "Diseñamos el núcleo estratégico de la marca, los lineamientos visuales, el tono de voz y el plan de adquisición digital multicanal.",
  },
  {
    number: "03",
    phase: "Despliegue & Producción",
    duration: "Semana 5-8",
    description:
      "Lanzamos la nueva identidad, activamos las campañas de pauta digital, desplegamos los activos de contenido y capacitamos a los equipos clave.",
  },
  {
    number: "04",
    phase: "Optimización & Escalamiento",
    duration: "Continuo",
    description:
      "Medimos métricas de conversión, ajustamos la pauta con base en ROI real y gobernamos la marca para garantizar coherencia en cada punto de contacto.",
  },
];

export default function StudioPage() {
  return (
    <div className="relative bg-[#111111] min-h-screen text-white overflow-hidden">
      {/* Ecosystem Breadcrumb / Top Bar */}
      <div className="bg-[#171A21] border-b border-white/10 pt-28 pb-3 px-6 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#8C8C8C]">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#1E88E5] animate-pulse" />
            <span className="text-[#D9D9D9] font-medium">SySo Co. Studio</span>
            <span className="text-white/20">|</span>
            <span>División 01: Marca & Crecimiento</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://sysolat.com"
              className="inline-flex items-center gap-1.5 text-[#42A5F5] hover:text-white transition-colors font-medium"
            >
              <span>← Volver al Ecosistema Principal (sysolat.com)</span>
            </a>
            <span className="text-white/20 hidden sm:inline">|</span>
            <a
              href="https://sysolat.com/divisions"
              className="text-[#8C8C8C] hover:text-white transition-colors hidden sm:inline"
            >
              Ver las 10 Divisiones
            </a>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-16 pb-24 md:pt-24 md:pb-32 overflow-hidden border-b border-white/5">
        {/* Glow ambient background */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#1E88E5]/15 blur-[140px] pointer-events-none" />
        <div className="absolute top-10 right-10 w-96 h-96 bg-[#42A5F5]/10 blur-[120px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1E88E5]/10 border border-[#1E88E5]/30 text-xs font-semibold uppercase tracking-wider text-[#42A5F5] mb-8">
            <Palette className="w-3.5 h-3.5 text-[#1E88E5]" />
            <span>Studio • División de Marca & Crecimiento</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white font-heading max-w-5xl mx-auto leading-[1.08] mb-8">
            Construimos marcas de alto impacto que{" "}
            <span className="bg-gradient-to-r from-white via-[#42A5F5] to-[#1E88E5] bg-clip-text text-transparent">
              convierten y trascienden.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-[#8C8C8C] max-w-3xl mx-auto leading-relaxed mb-12">
            Transformamos el valor de tu organización en una marca de referencia a través de branding de nivel mundial, estrategias inbound de alta precisión y posicionamiento de liderazgo en tu sector.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <a href="#diagnostico" className="w-full sm:w-auto">
              <PrimaryButton className="w-full sm:w-auto text-base px-8 py-4 shadow-lg shadow-[#1E88E5]/20">
                <span>Solicitar Diagnóstico de Marca</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </PrimaryButton>
            </a>
            <a href="#servicios" className="w-full sm:w-auto">
              <SecondaryButton className="w-full sm:w-auto text-base px-8 py-4">
                <span>Explorar Servicios</span>
              </SecondaryButton>
            </a>
          </div>

          {/* Quick Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 pt-12 border-t border-white/10 max-w-4xl mx-auto text-left">
            <div>
              <p className="text-2xl sm:text-3xl font-extrabold text-white font-mono">100%</p>
              <p className="text-xs text-[#8C8C8C] mt-1">Alineado al Ecosistema Central SySo Co.</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-extrabold text-[#42A5F5] font-mono">4 Pilares</p>
              <p className="text-xs text-[#8C8C8C] mt-1">Branding, Inbound, Contenido y Posicionamiento</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-extrabold text-white font-mono">B2B & B2C</p>
              <p className="text-xs text-[#8C8C8C] mt-1">Estrategias de Atracción y Cierre</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-extrabold text-[#42A5F5] font-mono">1 Cerebro</p>
              <p className="text-xs text-[#8C8C8C] mt-1">Interoperable con las 9 divisiones restantes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section id="servicios" className="relative py-24 sm:py-32 bg-[#14171D] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <Badge variant="primary" className="mb-4">
              Capacidades Especializadas
            </Badge>
            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight font-heading mb-6">
              Servicios Clave de Studio
            </h2>
            <p className="text-base sm:text-lg text-[#8C8C8C] leading-relaxed">
              Soluciones integrales de comunicación estratégica y diseño diseñadas para acelerar el crecimiento de organizaciones de alto calibre.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {STUDIO_SERVICES.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  className="
                    group relative flex flex-col justify-between
                    rounded-[32px] border border-white/10
                    bg-[#171A21] p-8 sm:p-10
                    transition-all duration-300
                    hover:border-[#1E88E5]/50 hover:shadow-[0_20px_50px_rgba(0,0,0,0.6),0_0_30px_rgba(30,136,229,0.15)]
                    hover:-translate-y-1
                  "
                >
                  {/* Service Card Header */}
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-[#1E88E5]/10 border border-[#1E88E5]/30 flex items-center justify-center text-[#42A5F5] group-hover:scale-110 group-hover:bg-[#1E88E5]/20 transition-all duration-300">
                        <Icon className="w-7 h-7 text-[#1E88E5] group-hover:text-[#42A5F5]" />
                      </div>
                      <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#8C8C8C] group-hover:text-[#42A5F5] transition-colors">
                        0{index + 1}
                      </span>
                    </div>

                    <span className="text-xs font-semibold uppercase tracking-wider text-[#42A5F5]">
                      {service.tagline}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white font-heading mt-1 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-sm sm:text-base text-[#8C8C8C] leading-relaxed mb-8">
                      {service.description}
                    </p>

                    {/* Features list */}
                    <div className="border-t border-white/10 pt-6 mb-8">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-[#D9D9D9] mb-4">
                        Alcances & Componentes
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {service.features.map((feature, fIdx) => (
                          <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#D9D9D9]">
                            <CheckCircle2 className="w-4 h-4 text-[#1E88E5] flex-shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Deliverable Badge */}
                  <div className="p-4 rounded-2xl bg-[#111317] border border-white/5 flex items-center justify-between text-xs">
                    <span className="text-[#8C8C8C]">Entregable Clave:</span>
                    <span className="text-white font-medium text-right ml-2">{service.deliverable}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section id="metodologia" className="relative py-24 sm:py-32 bg-[#111111] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <Badge variant="primary" className="mb-4">
              Metodología Comprobada
            </Badge>
            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight font-heading mb-6">
              El Proceso de Estudio en 4 Fases
            </h2>
            <p className="text-base sm:text-lg text-[#8C8C8C] leading-relaxed">
              Un marco metódico y estructurado que asegura que cada decisión visual y comercial responda a los objetivos estratégicos de la alta dirección.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {METHODOLOGY_STEPS.map((step) => (
              <div
                key={step.number}
                className="relative rounded-3xl border border-white/10 bg-[#171A21] p-6 sm:p-8 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-extrabold font-mono text-[#1E88E5]">
                      {step.number}
                    </span>
                    <span className="text-xs font-mono text-[#8C8C8C] bg-white/5 px-2.5 py-1 rounded-full border border-white/10">
                      {step.duration}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white font-heading mb-3">
                    {step.phase}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#8C8C8C] leading-relaxed">
                    {step.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center text-xs text-[#42A5F5] font-medium">
                  <span>Fase Estratégica</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Diagnostic Section / CTA Module */}
      <section id="diagnostico" className="relative py-24 sm:py-32 bg-[#14171D] overflow-hidden">
        {/* Glow ambient background */}
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[300px] bg-[#1E88E5]/10 blur-[140px] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <div className="rounded-[36px] border border-white/10 bg-gradient-to-b from-[#1C2029] to-[#12141A] p-8 sm:p-14 shadow-2xl relative overflow-hidden">
            {/* Top accent badge */}
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2.5 h-2.5 rounded-full bg-[#1E88E5] animate-pulse" />
              <span className="text-xs font-mono font-semibold text-[#42A5F5] tracking-wider uppercase">
                Evaluación Estratégica Directiva
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7">
                <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight font-heading mb-6 leading-tight">
                  Solicita tu Diagnóstico de Marca & Crecimiento
                </h2>
                <p className="text-base text-[#8C8C8C] leading-relaxed mb-8">
                  Analizamos los puntos de fricción en la percepción de tu marca, evaluamos la solidez de tu identidad frente a competidores y estructuramos una hoja de ruta para acelerar tu adquisición comercial.
                </p>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3 text-sm text-[#D9D9D9]">
                    <CheckCircle2 className="w-5 h-5 text-[#1E88E5] flex-shrink-0" />
                    <span>Auditoría de identidad visual y coherencia de marca.</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-[#D9D9D9]">
                    <CheckCircle2 className="w-5 h-5 text-[#1E88E5] flex-shrink-0" />
                    <span>Evaluación de canales de atracción y conversión digital.</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-[#D9D9D9]">
                    <CheckCircle2 className="w-5 h-5 text-[#1E88E5] flex-shrink-0" />
                    <span>Recomendación ejecutiva personalizada sin costo.</span>
                  </div>
                </div>
              </div>

              {/* Action Box */}
              <div className="lg:col-span-5 bg-[#171A21] border border-white/10 rounded-3xl p-6 sm:p-8 flex flex-col gap-5 text-center">
                <div className="w-12 h-12 rounded-2xl bg-[#1E88E5]/15 border border-[#1E88E5]/30 flex items-center justify-center text-[#42A5F5] mx-auto">
                  <Zap className="w-6 h-6 text-[#1E88E5]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white font-heading">
                    Agendar Sesión con Directores
                  </h3>
                  <p className="text-xs text-[#8C8C8C] mt-1">
                    Atención personalizada por la dirección de Studio.
                  </p>
                </div>

                <a
                  href={`mailto:${SITE_CONFIG.contactEmail}?subject=Solicitud%20de%20Diagnostico%20de%20Marca%20-%20Studio`}
                  className="w-full"
                >
                  <PrimaryButton className="w-full py-3.5 text-sm">
                    <Mail className="w-4 h-4 mr-2 text-[#1E88E5]" />
                    <span>Solicitar por Correo</span>
                  </PrimaryButton>
                </a>

                <a
                  href="https://wa.me/5215655217048?text=Hola,%20deseo%20solicitar%20un%20diagnóstico%20de%20marca%20para%20mi%20empresa%20con%20SySo%20Co.%20Studio."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <SecondaryButton className="w-full py-3.5 text-sm hover:border-[#42A5F5]/40">
                    <Phone className="w-4 h-4 mr-2 text-[#42A5F5]" />
                    <span>Consultar por WhatsApp</span>
                  </SecondaryButton>
                </a>

                <p className="text-[11px] text-[#8C8C8C]">
                  Horario de atención: {SITE_CONFIG.schedule}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Return to Central Ecosystem Section */}
      <section className="py-16 bg-[#111111] border-t border-white/10 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-xs uppercase tracking-widest text-[#42A5F5] font-semibold mb-3">
            Ecosistema Integral de Soluciones Empresariales
          </p>
          <h3 className="text-2xl sm:text-3xl font-bold text-white font-heading mb-4">
            Studio es solo la primera pieza de un cerebro unificado.
          </h3>
          <p className="text-sm text-[#8C8C8C] max-w-2xl mx-auto mb-8">
            Conoce cómo Studio interactúa con las divisiones de Imagen, Jurídico, Cultura, Tecnología, Inteligencia y Capital bajo una misma dirección estratégica.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://sysolat.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1E88E5]/15 border border-[#1E88E5]/30 text-sm font-semibold text-white hover:bg-[#1E88E5]/25 transition-colors"
            >
              <span>Ir al Sitio Principal: sysolat.com</span>
              <ArrowUpRight className="w-4 h-4 text-[#42A5F5]" />
            </a>
            <a
              href="https://sysolat.com/divisions"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-sm text-[#D9D9D9] hover:text-white hover:bg-white/10 transition-colors"
            >
              <span>Ver las 10 Divisiones</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
