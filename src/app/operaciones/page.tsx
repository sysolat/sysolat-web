import React from "react";
import type { Metadata } from "next";
import {
  Settings,
  Truck,
  TrendingUp,
  Workflow,
  Sparkles,
  BarChart3,
  ArrowRight,
  CheckCircle2,
  Phone,
  Mail,
  ArrowUpRight,
  ShieldCheck,
  Building2,
  Zap,
  Activity,
  Layers,
  Clock,
  Boxes,
  Gauge,
  SlidersHorizontal,
  Flame,
  Award,
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { PrimaryButton, SecondaryButton } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Operaciones — Logística, Procesos & Optimización Operativa | SySo Co.",
  description:
    "División 07 de SySo Co. especializada en Cadena de Suministro, Logística Integral, Reingeniería de Procesos, KPIs Operativos y Metodologías Lean/Kaizen.",
  openGraph: {
    title: "Operaciones — Logística, Procesos & Optimización Operativa | SySo Co.",
    description:
      "Sistematizamos y perfeccionamos las operaciones de tu empresa reduciendo costos, eliminando cuellos de botella e implantando mejora continua.",
    url: "https://operaciones.sysolat.com",
    siteName: "SySo Co. Operaciones",
    locale: "es_MX",
    type: "website",
  },
};

const OPERACIONES_SERVICES = [
  {
    id: "logistica-cadena-suministro",
    title: "Logística Integral & Cadena de Suministro (Supply Chain)",
    tagline: "Flujos de Entrega & Control de Inventarios",
    description:
      "Diseñamos y optimizamos redes de abastecimiento, centros de distribución y última milla. Control riguroso de inventarios, reducción drástica de tiempos de entrega y trazabilidad en tiempo real.",
    icon: Truck,
    accent: "#1E88E5",
    features: [
      "Optimización de Redes de Distribución y Almacenes (Layouts de Flujo Continuo)",
      "Gestión de Inventarios Just-In-Time (JIT) y Reducción de Costo de Almacenaje",
      "Auditoría y Negociación Estratégica con Proveedores Logísticos y Transportistas",
      "Trazabilidad de Envíos en Tiempo Real e Indicadores OTIF (On-Time In-Full)",
      "Implementación de Sistemas de Gestión de Almacenes (WMS) y Ruteo Dinámico",
      "Planes de Mitigación ante Quiebres de Stock y Contingencias de Cadena",
    ],
    deliverable: "Arquitectura de Cadena de Suministro + Manual de Operación Logística",
  },
  {
    id: "reingenieria-procesos",
    title: "Reingeniería de Procesos & Erradicación de Cuellos de Botella",
    tagline: "Mapeo de Valor & Fluidez Operativa",
    description:
      "Mapeamos cada eslabón operativo de tu organización para identificar y extirpar actividades redundantes, reprocesos y tiempos muertos que drenan el margen financiero.",
    icon: Workflow,
    accent: "#42A5F5",
    features: [
      "Mapeo de la Cadena de Valor (Value Stream Mapping - VSM) de Punta a Punta",
      "Identificación y Destrabe de Cuellos de Botella en la Línea de Operación",
      "Estandarización de Procedimientos Operativos (SOPs) con Criterios Claros",
      "Rediseño de Flujos Interdepartamentales para Acortar Tiempos de Ciclo",
      "Transición de Operaciones Caóticas a Procesos Replicables y Escalables",
      "Protocolos de Control de Calidad y Cero Defectos en la Entrega Final",
    ],
    deliverable: "Matriz VSM As-Is / To-Be + Catálogo de Procedimientos Estandarizados (SOPs)",
  },
  {
    id: "productividad-kpis",
    title: "Productividad Operativa, Dashboards & Tableros de Control",
    tagline: "Mando de Control & Rendimiento Medible",
    description:
      "Lo que no se mide no se puede optimizar. Implantamos tableros en vivo que reflejan la salud de la operación al segundo, alineando a supervisores y directores con la rentabilidad.",
    icon: Gauge,
    accent: "#1E88E5",
    features: [
      "Implementación de Dashboards Operativos con Métricas en Tiempo Real",
      "Definición de KPIs Críticos: OEE, Lead Time, Costo Unitario y Merma",
      "Estructuración de Rutinas de Gestión Diaria (Daily Standups Operacionales)",
      "Detección Preventiva de Desviaciones de Costo y Caídas de Rendimiento",
      "Alineación de Bonos e Incentivos con Metas Objetivas de Productividad",
      "Auditorías Mensuales de Cumplimiento de Metas y Análisis de Variaciones",
    ],
    deliverable: "Tablero de Control de KPIs Operativos + Protocolo de Gobernanza Diaria",
  },
  {
    id: "mejora-continua-lean",
    title: "Mejora Continua, Metodologías Lean & Eventos Kaizen",
    tagline: "Cultura de Eficiencia & Cero Desperdicio",
    description:
      "Transformamos la mentalidad de los equipos en piso para adoptar una cultura permanente de eliminación de desperdicios (Muda), orden riguroso y resolución rápida de problemas.",
    icon: Settings,
    accent: "#42A5F5",
    features: [
      "Implantación Práctica de Metodología 5S en Almacenes, Plantas y Oficinas",
      "Eventos Kaizen para Solución Acelerada de Problemas Crónicos en 5 Días",
      "Filosofía Lean Manufacturing / Lean Services para Reducción de Desperdicios",
      "Capacitación Inmersiva y Formación de Líderes de Mejora Continua Internos",
      "Sistemas Visuales de Gestión (Kanban, Andon y Gestión a la Vista)",
      "Certificación Interna de Madurez Operativa y Planes de Sostenibilidad",
    ],
    deliverable: "Certificación de Implantación 5S/Lean + Hoja de Ruta Kaizen Continua",
  },
];

const METHODOLOGY_STEPS = [
  {
    step: "01",
    phase: "Diagnóstico en Sitio & Gemba Walk",
    duration: "Semanas 1 - 2",
    description:
      "Inspección directa donde ocurren las operaciones: mapeo visual de flujos, entrevistas con personal en piso, medición de tiempos reales y detección de cuellos de botella.",
    outputs: ["Diagnóstico Operativo de Piso", "Mapa VSM Actual (As-Is)"],
  },
  {
    step: "02",
    phase: "Rediseño de Procesos & Modelo Objetivo",
    duration: "Semanas 2 - 4",
    description:
      "Diseño de la operación futura (To-Be): reconfiguración de layouts, simplificación de pasos, cálculo de capacidad óptima y definición de nuevos estándares.",
    outputs: ["Mapa VSM Objetivo (To-Be)", "Plan Maestro de Transformación"],
  },
  {
    step: "03",
    phase: "Implantación en Piso & Tableros de Control",
    duration: "Semanas 4 - 8",
    description:
      "Despliegue de los nuevos procedimientos con el equipo, eventos Kaizen de destrabe rápido, capacitación en el puesto y montaje de los tableros de KPIs en tiempo real.",
    outputs: ["Nuevos Estándares SOPs Operativos", "Dashboards de KPIs en Vivo"],
  },
  {
    step: "04",
    phase: "Gobernanza Kaizen & Sostenibilidad Continua",
    duration: "Gobernanza Trimestral",
    description:
      "Auditorías periódicas de apego a los estándares, revisiones de indicadores de costo/merma y acompañamiento a líderes internos para asegurar que los logros perduren.",
    outputs: ["Auditorías Trimestrales de Eficiencia", "Planes de Mejora Evolutiva"],
  },
];

const COMPARISON_METRICS = [
  {
    aspect: "Flujo de Trabajo",
    traditional: "Procesos empíricos y no documentados con cuellos de botella y reprocesos continuos.",
    syso: "Flujos de valor mapeados (VSM), estandarizados (SOPs) y optimizados sin fricción.",
  },
  {
    aspect: "Control Logístico & Stock",
    traditional: "Inventarios inflados por miedo al desabasto o quiebres imprevistos frecuentes.",
    syso: "Gestión Just-In-Time con stocks de seguridad calculados científicamente y OTIF >98%.",
  },
  {
    aspect: "Visibilidad de Desempeño",
    traditional: "Datos históricos que se revisan un mes después cuando el sobrecosto ya ocurrió.",
    syso: "Dashboards de control en tiempo real con alertas tempranas y reuniones diarias ágiles.",
  },
  {
    aspect: "Cultura Organizacional",
    traditional: "Cultura de 'siempre se ha hecho así' y resistencia pasiva a cualquier cambio.",
    syso: "Cultura Lean/Kaizen de mejora continua donde cada colaborador propone optimizaciones.",
  },
];

export default function OperacionesPage() {
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
              DIVISIÓN 07 // OPERACIONES
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <Badge variant="primary" className="mb-6">
                <Settings className="w-3.5 h-3.5 mr-1.5 text-[#1E88E5]" />
                Logística, Procesos & Optimización Operativa
              </Badge>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight font-heading leading-[1.08] mb-6">
                Sistematización de procesos, gestión logística y{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#90CAF9] to-[#1E88E5]">
                  optimización operativa de élite.
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-[#D9D9D9] max-w-2xl leading-relaxed mb-8">
                Eliminamos cuellos de botella, optimizamos cadenas de suministro e implementamos metodologías Lean para acelerar la entrega de valor, reducir mermas y maximizar los márgenes de rentabilidad.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center pt-2">
                <a href="#diagnostico">
                  <PrimaryButton className="w-full sm:w-auto text-sm px-7 py-3.5 shadow-lg shadow-[#1E88E5]/25">
                    <span>Solicitar Diagnóstico Operativo</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </PrimaryButton>
                </a>
                <a href="#servicios">
                  <SecondaryButton className="w-full sm:w-auto text-sm px-6 py-3.5">
                    <span>Explorar Capacidades Operativas</span>
                  </SecondaryButton>
                </a>
              </div>
            </div>

            {/* Right Highlight Box / Operational Blueprint */}
            <div className="lg:col-span-5">
              <div className="relative p-8 rounded-3xl bg-gradient-to-b from-[#1E232F] via-[#171A21] to-[#101217] border border-white/10 shadow-2xl">
                <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#42A5F5]">
                      Matriz de Eficiencia Operativa
                    </span>
                    <h3 className="text-lg font-bold text-white font-heading mt-0.5">
                      Gobernanza de Piso & Lean 360°
                    </h3>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-[#1E88E5]/15 border border-[#1E88E5]/30 flex items-center justify-center text-[#42A5F5]">
                    <Activity className="w-5 h-5 text-[#1E88E5]" />
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 flex items-start gap-3.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-white">
                        Cadena de Suministro Blindada
                      </h4>
                      <p className="text-xs text-[#8C8C8C] mt-0.5">
                        Indicadores OTIF superiores al 98% con control estricto de mermas y fletes.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 flex items-start gap-3.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-white">
                        Cero Cuellos de Botella Crónicos
                      </h4>
                      <p className="text-xs text-[#8C8C8C] mt-0.5">
                        Mapeo de valor (VSM) y reingeniería aplicada para destrabar flujos saturados.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 flex items-start gap-3.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-white">
                        Control en Vivo por Dashboards
                      </h4>
                      <p className="text-xs text-[#8C8C8C] mt-0.5">
                        Visibilidad de OEE, Lead Time y costos unitarios al minuto para toma de decisiones.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 flex items-start gap-3.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-white">
                        Cultura Kaizen / Lean Certificada
                      </h4>
                      <p className="text-xs text-[#8C8C8C] mt-0.5">
                        Equipos capacitados para resolver problemas en piso con metodología 5S permanente.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between text-xs text-[#8C8C8C]">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Flujo Continuo Activo
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
              Ingeniería Operativa
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight font-heading mb-4">
              Pilares de Rendimiento y Optimización
            </h2>
            <p className="text-base sm:text-lg text-[#8C8C8C] leading-relaxed">
              Intervenciones estructuradas diseñadas para transformar operaciones complejas en sistemas predecibles, eficientes y altamente rentables.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {OPERACIONES_SERVICES.map((service, index) => {
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
              Impacto en Rentabilidad
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight font-heading mb-4">
              Operación Empírica Tradicional vs. Ecosistema SySo Operaciones
            </h2>
            <p className="text-base sm:text-lg text-[#8C8C8C] leading-relaxed">
              La diferencia entre vivir apagando fuegos diarios o liderar una operación blindada con métricas claras y mejora continua.
            </p>
          </div>

          <div className="overflow-x-auto">
            <div className="min-w-[700px] rounded-3xl border border-white/10 bg-[#171A21] overflow-hidden shadow-2xl">
              <div className="grid grid-cols-12 bg-white/5 p-5 text-xs font-mono font-bold uppercase tracking-wider text-[#8C8C8C] border-b border-white/10">
                <div className="col-span-3 text-white">Dimensión</div>
                <div className="col-span-4 text-rose-400/90 flex items-center gap-1.5">
                  <Flame className="w-3.5 h-3.5" />
                  <span>Operación Tradicional / Reactiva</span>
                </div>
                <div className="col-span-5 text-[#42A5F5] flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5" />
                  <span>SySo Co. Operaciones (Sistematizado)</span>
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
              Protocolo de Optimización en 4 Fases
            </h2>
            <p className="text-base sm:text-lg text-[#8C8C8C] leading-relaxed">
              Un enfoque comprobado que va directo al piso operativo (Gemba) para identificar pérdidas, rediseñar estándares y anclar la mejora permanente.
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
                Auditoría en Piso
              </Badge>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight font-heading mb-4">
                Solicita un Diagnóstico de Procesos & Logística
              </h2>
              <p className="text-base text-[#D9D9D9] leading-relaxed mb-8">
                Descubre dónde están tus principales cuellos de botella, pérdidas de merma o costos ocultos en la cadena de suministro con una visita diagnóstica de consultores senior.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
                <a
                  href={`mailto:${SITE_CONFIG.contactEmail}?subject=Diagn%C3%B3stico%20de%20Operaciones%20y%20Log%C3%ADstica%20-%20SySo%20Co.%20Operaciones`}
                >
                  <PrimaryButton className="w-full sm:w-auto text-sm px-8 py-3.5 shadow-xl shadow-[#1E88E5]/30">
                    <Mail className="w-4 h-4 mr-2" />
                    <span>Solicitar Diagnóstico por Correo</span>
                  </PrimaryButton>
                </a>
                <a
                  href={`${SITE_CONFIG.whatsappUrl}?text=Hola,%20deseo%20solicitar%20un%20diagn%C3%B3stico%20de%20operaciones%20y%20log%C3%ADstica%20con%20SySo%20Co.%20Operaciones`}
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
                  <span>Consultores Senior en Piso</span>
                </div>
                <div className="flex items-center gap-2">
                  <Gauge className="w-4 h-4 text-[#42A5F5]" />
                  <span>Dictamen de Cuellos de Botella</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-amber-400" />
                  <span>Estimación de Ahorro Económico</span>
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
