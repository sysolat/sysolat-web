import React from "react";
import type { Metadata } from "next";
import {
  TrendingUp,
  DollarSign,
  PieChart,
  BarChart3,
  Landmark,
  ShieldCheck,
  CheckCircle2,
  Phone,
  Mail,
  ArrowRight,
  ArrowUpRight,
  Building2,
  Zap,
  Activity,
  Layers,
  FileCheck2,
  Coins,
  BadgePercent,
  SlidersHorizontal,
  Flame,
  Scale,
  Briefcase,
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { PrimaryButton, SecondaryButton } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Capital — Gestión Financiera, Capital de Inversión & Soluciones Estratégicas | SySo Co.",
  description:
    "División 10 de SySo Co. especializada en Planeación Financiera Estratégica, Optimización de Flujo de Caja, Levantamiento de Capital, M&A y Valoración de Compañías.",
  openGraph: {
    title: "Capital — Gestión Financiera, Capital de Inversión & Soluciones Estratégicas | SySo Co.",
    description:
      "Estructuramos el músculo financiero de tu organización: liquidez blindada, modelado estratégico y acceso a capital de expansión.",
    url: "https://capital.sysolat.com",
    siteName: "SySo Co. Capital",
    locale: "es_MX",
    type: "website",
  },
};

const CAPITAL_SERVICES = [
  {
    id: "fpa-estrategia",
    title: "Estructuración Financiera & Planeación Estratégica (FP&A)",
    tagline: "Gobernanza de Cifras & Presupuestación de Élite",
    description:
      "Transformamos estados financieros contables en un sistema de inteligencia de negocio. Modelado predictivo a 3 y 5 años, análisis de escenarios, optimización de estructura de capital y comités de finanzas.",
    icon: BarChart3,
    accent: "#1E88E5",
    features: [
      "Modelado Financiero Multianual con Análisis de Sensibilidad y Estrés",
      "Presupuestación Estratégica y Control de Variaciones por Centro de Costos",
      "Optimización de Costo de Capital (WACC) y Políticas de Endeudamiento",
      "Identificación y Erradicación de Fugas de Rentabilidad en Unidades de Negocio",
      "Implementación de Comités de Finanzas y Gobernanza Directiva",
      "Definición y Seguimiento de Indicadores Críticos (EBITDA, ROIC, Margen Neto)",
    ],
    deliverable: "Modelo Financiero Maestro Dinámico + Protocolo de Gobernanza de Finanzas",
  },
  {
    id: "tesoreria-flujo",
    title: "Gestión de Tesorería, Flujo de Caja & Capital de Trabajo",
    tagline: "Liquidez Continua & Protección Financiera",
    description:
      "Protegemos el oxígeno de tu empresa: la liquidez. Proyecciones a 13 semanas para prevenir asfixias de caja, optimización del ciclo de conversión de efectivo y blindaje ante imprevistos comerciales.",
    icon: DollarSign,
    accent: "#42A5F5",
    features: [
      "Modelo de Flujo de Caja Continuo a 13 Semanas (13-Week Cash Flow Forecast)",
      "Optimización del Ciclo de Conversión de Efectivo (Cobranza, Inventarios y Pagos)",
      "Estrategias de Negociación y Reestructuración de Pasivos con Proveedores",
      "Mecanismos de Cobertura Cambiaria y Mitigación de Volatilidad de Divisas",
      "Políticas de Custodia Segura de Excedentes de Liquidez y Rendimiento de Tesorería",
      "Tableros Diarios de Posición de Caja y Disponibilidad Inmediata",
    ],
    deliverable: "Dashboard de Flujo de Caja en Tiempo Real + Manual de Políticas de Tesorería",
  },
  {
    id: "fondeo-capital",
    title: "Fondeo, Deuda Estructurada & Levantamiento de Capital",
    tagline: "Inyección de Recursos para Acelerar la Expansión",
    description:
      "Conectamos proyectos sólidos con capital inteligente. Estructuración de líneas de crédito sindicadas, factoraje, emisión de deuda privada y preparación para rondas de inversión institucionales.",
    icon: Landmark,
    accent: "#1E88E5",
    features: [
      "Estructuración y Gestión de Deuda Bancaria, Créditos Simples y Factoraje",
      "Preparación de Rondas de Inversión (Seed, Serie A/B, Growth Equity)",
      "Elaboración de Investment Teasers, Memorandos Confidenciales (CIM) y Data Rooms",
      "Negociación Estratégica de Term Sheets, Notas Convertibles y Acuerdos SAFE",
      "Vinculación con Family Offices, Fondos de Capital Privado y Banca Corporativa",
      "Blindaje Accionario para Evitar Diluciones Excesivas de los Socios Fundadores",
    ],
    deliverable: "Data Room para Inversionistas + Teaser Ejecutivo & Hoja de Términos",
  },
  {
    id: "valoracion-mya",
    title: "Valoración de Compañías, M&A & Estrategias de Salida",
    tagline: "Crecimiento Inorgánico & Maximización de Valor Patrimonial",
    description:
      "Determinamos el valor real de tu compañía con rigor técnico internacional. Asesoramos en fusiones y adquisiciones estratégicas, procesos de due diligence financiero y preparación para eventos de liquidez.",
    icon: TrendingUp,
    accent: "#42A5F5",
    features: [
      "Valoración Formal mediante Flujos de Caja Descontados (DCF) y Múltiplos",
      "Due Diligence Financiero de Adquisición para Compra o Fusión de Empresas",
      "Estrategias de Crecimiento Inorgánico (M&A) e Integración Post-Cierre",
      "Diseño de Planes de Salida Patrimonial (Exit Strategies) para Fundadores",
      "Identificación de Palancas Operativas para Multiplicar el Enterprise Value",
      "Acompañamiento en Asambleas Extraordinarias y Acuerdos de Compraventa",
    ],
    deliverable: "Dictamen Técnico de Valoración + Reporte Due Diligence Financiero",
  },
];

const METHODOLOGY_STEPS = [
  {
    step: "01",
    phase: "Diagnóstico Financiero & Due Diligence",
    duration: "Semanas 1 - 2",
    description:
      "Auditoría profunda de estados financieros históricos, estructura de márgenes, ciclo de capital de trabajo, endeudamiento actual y calidad del EBITDA.",
    outputs: ["Diagnóstico Financiero Ejecutivo", "Radiografía de Liquidez y Rentabilidad"],
  },
  {
    step: "02",
    phase: "Modelado Financiero & Valoración",
    duration: "Semanas 2 - 4",
    description:
      "Construcción del modelo dinámico de proyección a 3-5 años, cálculo del flujo de caja libre, análisis de sensibilidad de escenarios y valoración corporativa formal.",
    outputs: ["Modelo Financiero Maestro Dinámico", "Dictamen de Valoración Preliminar"],
  },
  {
    step: "03",
    phase: "Estructuración de Estrategia & Data Room",
    duration: "Semanas 4 - 6",
    description:
      "Diseño del plan de fondeo o reingeniería de capital: armado de Data Room virtual, redacción del Investment Teaser y definición de metas presupuestales.",
    outputs: ["Data Room para Inversionistas / Bancos", "Investment Teaser y Memorando"],
  },
  {
    step: "04",
    phase: "Ejecución, Negociación & Gobernanza FP&A",
    duration: "Gobernanza Continua",
    description:
      "Acompañamiento en mesas de negociación con bancos o fondos de inversión, cierre de contratos financieros y seguimiento mensual en comité directivo.",
    outputs: ["Cierre de Financiamiento / Inversión", "Comités Mensuales de Rendición de Cuentas"],
  },
];

const COMPARISON_METRICS = [
  {
    aspect: "Enfoque de Números",
    traditional: "Contabilidad meramente fiscal, enfocada en calcular impuestos sin visión estratégica.",
    syso: "Finanzas estratégicas y predictivas enfocadas en maximizar el valor de la empresa y la rentabilidad.",
  },
  {
    aspect: "Control de Flujo de Caja",
    traditional: "Revisar el saldo bancario día a día, con sorpresas de iliquidez a fin de mes.",
    syso: "Proyecciones a 13 semanas con monitoreo diario, anticipando cualquier requerimiento de caja.",
  },
  {
    aspect: "Acceso a Financiamiento",
    traditional: "Dependencia de créditos personales caros o rechazos bancarios por falta de expediente formal.",
    syso: "Estructuración de deuda corporativa y rondas de inversión con Data Room institucional de alto calibre.",
  },
  {
    aspect: "Valoración de la Empresa",
    traditional: "Conjeturas emocionales sin respaldo técnico que alejan a compradores o socios potenciales.",
    syso: "Valoración rigurosa por Flujos Descontados y múltiplos de mercado reconocida por fondos globales.",
  },
];

export default function CapitalPage() {
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
              DIVISIÓN 10 // CAPITAL
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <Badge variant="primary" className="mb-6">
                <TrendingUp className="w-3.5 h-3.5 mr-1.5 text-[#1E88E5]" />
                Gestión Financiera, Capital de Inversión & Soluciones Estratégicas
              </Badge>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight font-heading leading-[1.08] mb-6">
                Estructuración de capital, planeación financiera y{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#90CAF9] to-[#1E88E5]">
                  fondeo estratégico de alto impacto.
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-[#D9D9D9] max-w-2xl leading-relaxed mb-8">
                Acompañamos a directores y accionistas en la toma de decisiones financieras complejas: optimización del flujo de caja, valoración de compañías, preparación para rondas de financiamiento y acceso a capital para acelerar la expansión.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center pt-2">
                <a href="#diagnostico">
                  <PrimaryButton className="w-full sm:w-auto text-sm px-7 py-3.5 shadow-lg shadow-[#1E88E5]/25">
                    <span>Solicitar Diagnóstico Financiero</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </PrimaryButton>
                </a>
                <a href="#servicios">
                  <SecondaryButton className="w-full sm:w-auto text-sm px-6 py-3.5">
                    <span>Explorar Soluciones de Capital</span>
                  </SecondaryButton>
                </a>
              </div>
            </div>

            {/* Right Highlight Box / Financial Telemetry */}
            <div className="lg:col-span-5">
              <div className="relative p-8 rounded-3xl bg-gradient-to-b from-[#1E232F] via-[#171A21] to-[#101217] border border-white/10 shadow-2xl">
                <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#42A5F5]">
                      Matriz de Ingeniería Financiera
                    </span>
                    <h3 className="text-lg font-bold text-white font-heading mt-0.5">
                      Gobernanza Financiera 360°
                    </h3>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-[#1E88E5]/15 border border-[#1E88E5]/30 flex items-center justify-center text-[#42A5F5]">
                    <Landmark className="w-5 h-5 text-[#1E88E5]" />
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 flex items-start gap-3.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-white">
                        Modelado Predictivo de Alto Calibre
                      </h4>
                      <p className="text-xs text-[#8C8C8C] mt-0.5">
                        Proyecciones multianuales con sensibilidad de escenarios para toma de decisiones directivas.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 flex items-start gap-3.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-white">
                        Liquidez Blindada a 13 Semanas
                      </h4>
                      <p className="text-xs text-[#8C8C8C] mt-0.5">
                        Visibilidad precisa del flujo de caja para evitar estrés de tesorería y optimizar cobranza.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 flex items-start gap-3.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-white">
                        Acceso a Fondeo Institucional
                      </h4>
                      <p className="text-xs text-[#8C8C8C] mt-0.5">
                        Vinculación con family offices, fondos de inversión y líneas de crédito sindicadas.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 flex items-start gap-3.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-white">
                        Valoración Rigurosa DCF & M&A
                      </h4>
                      <p className="text-xs text-[#8C8C8C] mt-0.5">
                        Dictámenes de valor formalizados que respaldan compras, fusiones o rondas accionarias.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between text-xs text-[#8C8C8C]">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Músculo Financiero Activo
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
              Soluciones Financieras
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight font-heading mb-4">
              Capacidades Estratégicas de Capital
            </h2>
            <p className="text-base sm:text-lg text-[#8C8C8C] leading-relaxed">
              Herramientas de banca de inversión y consultoría financiera diseñadas para blindar la liquidez y catapultar el valor patrimonial de tu empresa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {CAPITAL_SERVICES.map((service, index) => {
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
              Visión de Negocio
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight font-heading mb-4">
              Contabilidad Tradicional vs. Finanzas Estratégicas SySo
            </h2>
            <p className="text-base sm:text-lg text-[#8C8C8C] leading-relaxed">
              La diferencia entre ver cifras históricas para pagar impuestos o tener un tablero financiero predictivo que genera riqueza.
            </p>
          </div>

          <div className="overflow-x-auto">
            <div className="min-w-[700px] rounded-3xl border border-white/10 bg-[#171A21] overflow-hidden shadow-2xl">
              <div className="grid grid-cols-12 bg-white/5 p-5 text-xs font-mono font-bold uppercase tracking-wider text-[#8C8C8C] border-b border-white/10">
                <div className="col-span-3 text-white">Dimensión</div>
                <div className="col-span-4 text-rose-400/90 flex items-center gap-1.5">
                  <Flame className="w-3.5 h-3.5" />
                  <span>Enfoque Contable Tradicional / Pasivo</span>
                </div>
                <div className="col-span-5 text-[#42A5F5] flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>SySo Co. Capital (Banca & FP&A Estratégico)</span>
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
              Protocolo de Ingeniería Financiera en 4 Fases
            </h2>
            <p className="text-base sm:text-lg text-[#8C8C8C] leading-relaxed">
              Un enfoque metódico para auditar los estados de cuenta, modelar proyecciones, armar el Data Room institucional y cerrar acuerdos de fondeo.
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
                Solicita un Diagnóstico Financiero Estratégico
              </h2>
              <p className="text-base text-[#D9D9D9] leading-relaxed mb-8">
                Evaluamos la estructura de capital, el flujo de caja libre y las palancas de valoración de tu empresa bajo estricto acuerdo de confidencialidad (NDA).
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
                <a
                  href={`mailto:${SITE_CONFIG.contactEmail}?subject=Diagn%C3%B3stico%20Financiero%20Estrat%C3%A9gico%20-%20SySo%20Co.%20Capital`}
                >
                  <PrimaryButton className="w-full sm:w-auto text-sm px-8 py-3.5 shadow-xl shadow-[#1E88E5]/30">
                    <Mail className="w-4 h-4 mr-2" />
                    <span>Solicitar Diagnóstico por Correo</span>
                  </PrimaryButton>
                </a>
                <a
                  href={`${SITE_CONFIG.whatsappUrl}?text=Hola,%20deseo%20solicitar%20un%20diagn%C3%B3stico%20financiero%20y%20de%20capital%20con%20SySo%20Co.%20Capital`}
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
                  <span>Acuerdo de Confidencialidad (NDA)</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileCheck2 className="w-4 h-4 text-[#42A5F5]" />
                  <span>Dictamen de Viabilidad de Fondeo</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-amber-400" />
                  <span>Atención por Directores de Finanzas</span>
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
