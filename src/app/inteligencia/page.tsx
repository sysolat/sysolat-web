import React from "react";
import type { Metadata } from "next";
import {
  Cpu,
  Bot,
  Database,
  Workflow,
  Sparkles,
  LineChart,
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
  BrainCircuit,
  Binary,
  Gauge,
  Network,
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { PrimaryButton, SecondaryButton } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Inteligencia — Inteligencia Artificial, Ecosistema de Datos & Automatización | SySo Co.",
  description:
    "División 06 de SySo Co. especializada en Agentes Autónomos de IA, Arquitectura de Datos en Tiempo Real, Automatización de Procesos (RPA) y Modelos Predictivos para empresas de alto calibre.",
  openGraph: {
    title: "Inteligencia — Inteligencia Artificial, Ecosistema de Datos & Automatización | SySo Co.",
    description:
      "Transformamos datos dispersos y operaciones manuales en ecosistemas inteligentes de alta rentabilidad con IA y automatización continua.",
    url: "https://inteligencia.sysolat.com",
    siteName: "SySo Co. Inteligencia",
    locale: "es_MX",
    type: "website",
  },
};

const INTELIGENCIA_SERVICES = [
  {
    id: "agentes-autonomos",
    title: "Agentes Autónomos de IA & Asistentes Cognitivos",
    tagline: "Fuerza de Trabajo Digital 24/7",
    description:
      "Diseñamos agentes de IA autónomos entrenados con las reglas y datos de tu empresa, capaces de ejecutar tareas complejas, atender clientes y cualificar prospectos sin supervisión manual constante.",
    icon: Bot,
    accent: "#1E88E5",
    features: [
      "Agentes Multi-Rol para Ventas, Atención a Clientes y Soporte 24/7",
      "Asistentes Directivos para Análisis Documental y Resúmenes Ejecutivos",
      "Orquestación Multi-Agente con Toma de Decisiones Basada en Reglas",
      "Integración Nativa con WhatsApp, Slack, Teams y Sistemas ERP/CRM",
      "Bases de Conocimiento Dinámicas con Arquitectura RAG Avanzada",
      "Garantía de Privacidad y Blindaje de Datos Confidenciales Corporativos",
    ],
    deliverable: "Agente de IA en Producción + Manual de Gobernanza y Métricas",
  },
  {
    id: "ecosistema-datos",
    title: "Ecosistema, Arquitectura & Pipelines de Datos",
    tagline: "Data Lakes, ETL & Analítica en Tiempo Real",
    description:
      "Unificamos bases de datos aisladas, hojas de cálculo y sistemas transaccionales en un Data Lake corporativo gobernado, con pipelines de procesamiento continuo y tableros BI interactivos.",
    icon: Database,
    accent: "#42A5F5",
    features: [
      "Diseño de Arquitecturas Modernas de Datos (Data Lakehouse)",
      "Pipelines Automatizados de Extracción, Transformación y Carga (ETL/ELT)",
      "Tableros de Control Ejecutivos (BI) con KPIs Financieros y Operativos",
      "Gobernanza, Calidad y Limpieza Automatizada de Fuentes de Información",
      "Detección de Anomalías Operativas y Desviaciones en Tiempo Real",
      "Monitoreo Continuo del Rendimiento del Ecosistema de Información",
    ],
    deliverable: "Repositorio Central de Datos + Dashboards Ejecutivos Activos",
  },
  {
    id: "automatizacion-rpa",
    title: "Automatización Robótica de Procesos (RPA) & Workflows",
    tagline: "Operaciones Sin Fricción & Cero Error",
    description:
      "Eliminamos tareas repetitivas de alta carga administrativa. Procesamiento inteligente de facturas, conciliaciones bancarias y actualización de inventarios ejecutados en segundos.",
    icon: Workflow,
    accent: "#1E88E5",
    features: [
      "Extracción Inteligente de Datos en Facturas y Contratos (OCR con IA)",
      "Automatización de Conciliaciones Contables y Procesos de Nómina",
      "Interconexión de Sistemas Legados sin Necesidad de APIs Nativas",
      "Flujos de Aprobación Automatizados con Notificaciones Inteligentes",
      "Reducción de Tiempos Operativos de Horas a Segundos con Trazabilidad Total",
      "Monitoreo y Alertas Inmediatas ante Excepciones en los Flujos",
    ],
    deliverable: "Flujo RPA Automatizado + Matriz de Ahorro en Horas/Hombre",
  },
  {
    id: "modelos-predictivos",
    title: "Modelos Predictivos, Machine Learning & MiniApps",
    tagline: "Forecasting, Patrones & Decisiones Algorítmicas",
    description:
      "Modelos matemáticos aplicados a predecir la demanda de productos, comportamiento de clientes y proyecciones de flujo de caja, transformando conjeturas en decisiones certeras.",
    icon: BrainCircuit,
    accent: "#42A5F5",
    features: [
      "Forecasting y Proyecciones Predictivas de Demanda y Flujo de Caja",
      "Modelos de Scoring de Clientes y Probabilidad de Abandono (Churn)",
      "Despliegue de Mini-Aplicaciones de IA Especializadas para Operaciones",
      "Fine-Tuning de Modelos LLM Privados en Servidores Seguros Propios",
      "Algoritmos de Recomendación Personalizada para E-commerce y B2B",
      "Consultoría Estratégica en Madurez Digital y Ética de la IA",
    ],
    deliverable: "Modelo Predictivo Desplegado + API de Inferencia Integrada",
  },
];

const METHODOLOGY_STEPS = [
  {
    step: "01",
    phase: "Auditoría de Procesos & Datos (AI Readiness)",
    duration: "Semanas 1 - 2",
    description:
      "Evaluación exhaustiva de la infraestructura de datos actual, calidad de la información, cuellos de botella manuales y oportunidades de automatización con mayor ROI.",
    outputs: ["Diagnóstico de Madurez de IA", "Matriz de Priorización de Casos de Uso"],
  },
  {
    step: "02",
    phase: "Diseño de Arquitectura & PoC (Prueba de Concepto)",
    duration: "Semanas 2 - 4",
    description:
      "Modelado de la solución tecnológica, diseño de pipelines, pruebas preliminares con modelos LLM y validación rápida de viabilidad técnica y precisión algorítmica.",
    outputs: ["Prototipo Funcional Validado", "Arquitectura Técnica Definitiva"],
  },
  {
    step: "03",
    phase: "Integración, Entrenamiento & Despliegue",
    duration: "Semanas 4 - 8",
    description:
      "Conexión con sistemas de producción (ERP/CRM), entrenamiento de modelos con datos de la empresa, pruebas de estrés y despliegue seguro con monitoreo continuo.",
    outputs: ["Solución Operativa en Producción", "Integración de Sistemas y APIs"],
  },
  {
    step: "04",
    phase: "Gobernanza MLOps & Optimización Continua",
    duration: "Gobernanza Trimestral",
    description:
      "Monitoreo activo para evitar sesgos o alucinaciones, ajuste fino de prompts y modelos ante nuevos datos y auditorías trimestrales de ahorro de costos.",
    outputs: ["Tablero de Rendimiento de IA", "Ajustes Algorítmicos Periódicos"],
  },
];

const COMPARISON_METRICS = [
  {
    aspect: "Atención & Tareas Operativas",
    traditional: "Dependencia total del horario de oficina, errores manuales y cuellos de botella.",
    syso: "Agentes autónomos de IA y flujos RPA activos 24/7 con respuesta instantánea.",
  },
  {
    aspect: "Silos de Información",
    traditional: "Datos repartidos en Excel, Whatsapps y software antiguo sin cruce analítico.",
    syso: "Data Lake unificado con pipelines automáticos y tableros BI en tiempo real.",
  },
  {
    aspect: "Toma de Decisiones",
    traditional: "Basada en suposiciones, intuición personal e informes desactualizados.",
    syso: "Respaldada por modelos predictivos, analítica continua y proyecciones basadas en datos.",
  },
  {
    aspect: "Escalabilidad",
    traditional: "Cada nuevo volumen de trabajo requiere contratar y entrenar más personal manual.",
    syso: "La capacidad operativa escala exponencialmente con costos marginales controlados.",
  },
];

export default function InteligenciaPage() {
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
              DIVISIÓN 06 // INTELIGENCIA
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <Badge variant="primary" className="mb-6">
                <Cpu className="w-3.5 h-3.5 mr-1.5 text-[#1E88E5]" />
                Inteligencia Artificial, Datos & Automatización
              </Badge>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight font-heading leading-[1.08] mb-6">
                Agentes autónomos de IA, analítica de datos y{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#90CAF9] to-[#1E88E5]">
                  automatización de alto impacto.
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-[#D9D9D9] max-w-2xl leading-relaxed mb-8">
                Multiplicamos la productividad de tu organización mediante modelos avanzados de Inteligencia Artificial generativa, pipelines de datos en tiempo real y automatización de procesos para convertir información en decisiones estratégicas.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center pt-2">
                <a href="#diagnostico">
                  <PrimaryButton className="w-full sm:w-auto text-sm px-7 py-3.5 shadow-lg shadow-[#1E88E5]/25">
                    <span>Solicitar Diagnóstico de IA</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </PrimaryButton>
                </a>
                <a href="#servicios">
                  <SecondaryButton className="w-full sm:w-auto text-sm px-6 py-3.5">
                    <span>Explorar Capacidades de Automatización</span>
                  </SecondaryButton>
                </a>
              </div>
            </div>

            {/* Right Highlight Box / AI Matrix Telemetry */}
            <div className="lg:col-span-5">
              <div className="relative p-8 rounded-3xl bg-gradient-to-b from-[#1E232F] via-[#171A21] to-[#101217] border border-white/10 shadow-2xl">
                <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#42A5F5]">
                      Matriz de Inteligencia Activa
                    </span>
                    <h3 className="text-lg font-bold text-white font-heading mt-0.5">
                      Operación Autónoma 24/7
                    </h3>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-[#1E88E5]/15 border border-[#1E88E5]/30 flex items-center justify-center text-[#42A5F5]">
                    <Sparkles className="w-5 h-5 text-[#1E88E5]" />
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 flex items-start gap-3.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-white">
                        Agentes Autónomos Multi-Rol
                      </h4>
                      <p className="text-xs text-[#8C8C8C] mt-0.5">
                        Resolución de dudas, atención comercial y análisis documental continuo sin pausas.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 flex items-start gap-3.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-white">
                        Pipelines de Datos en Tiempo Real
                      </h4>
                      <p className="text-xs text-[#8C8C8C] mt-0.5">
                        Integración y limpieza de información de todas tus herramientas en un solo Data Lake.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 flex items-start gap-3.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-white">
                        Automatización RPA Zero-Error
                      </h4>
                      <p className="text-xs text-[#8C8C8C] mt-0.5">
                        Procesamiento masivo de facturas, conciliaciones y nómina en segundos sin error humano.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 flex items-start gap-3.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-white">
                        Privacidad de Datos Enterprise
                      </h4>
                      <p className="text-xs text-[#8C8C8C] mt-0.5">
                        Modelos privados que respetan el secreto industrial y no entrenan con información pública.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between text-xs text-[#8C8C8C]">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Motor Cognitivo Activo
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
              Capacidades Cognitivas
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight font-heading mb-4">
              Soluciones Integrales de IA & Datos
            </h2>
            <p className="text-base sm:text-lg text-[#8C8C8C] leading-relaxed">
              Herramientas de última generación implementadas para elevar la agilidad operativa, recortar costos repetitivos y acelerar la toma de decisiones.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {INTELIGENCIA_SERVICES.map((service, index) => {
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
              Salto Cuántico
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight font-heading mb-4">
              Operación Manual Tradicional vs. Ecosistema Inteligente SySo
            </h2>
            <p className="text-base sm:text-lg text-[#8C8C8C] leading-relaxed">
              La diferencia entre saturar a tu equipo con tareas mecánicas o dotarlos de agentes inteligentes que multiplican su alcance.
            </p>
          </div>

          <div className="overflow-x-auto">
            <div className="min-w-[700px] rounded-3xl border border-white/10 bg-[#171A21] overflow-hidden shadow-2xl">
              <div className="grid grid-cols-12 bg-white/5 p-5 text-xs font-mono font-bold uppercase tracking-wider text-[#8C8C8C] border-b border-white/10">
                <div className="col-span-3 text-white">Dimensión</div>
                <div className="col-span-4 text-rose-400/90 flex items-center gap-1.5">
                  <Binary className="w-3.5 h-3.5" />
                  <span>Operación Manual / Silos Tradicionales</span>
                </div>
                <div className="col-span-5 text-[#42A5F5] flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5" />
                  <span>SySo Co. Inteligencia (Autónomo)</span>
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
              Protocolo de Transformación de IA en 4 Fases
            </h2>
            <p className="text-base sm:text-lg text-[#8C8C8C] leading-relaxed">
              Un enfoque estructurado que mitiga riesgos, valida resultados rápidamente mediante PoCs y garantiza un despliegue seguro en producción.
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
                Evaluación de Madurez de IA
              </Badge>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight font-heading mb-4">
                Solicita un Diagnóstico de Inteligencia Artificial & Datos
              </h2>
              <p className="text-base text-[#D9D9D9] leading-relaxed mb-8">
                Identifica qué procesos manuales de tu compañía pueden automatizarse de inmediato y cómo unificar tus fuentes de datos para maximizar el retorno de inversión.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
                <a
                  href={`mailto:${SITE_CONFIG.contactEmail}?subject=Diagn%C3%B3stico%20de%20IA%20y%20Automatizaci%C3%B3n%20-%20SySo%20Co.%20Inteligencia`}
                >
                  <PrimaryButton className="w-full sm:w-auto text-sm px-8 py-3.5 shadow-xl shadow-[#1E88E5]/30">
                    <Mail className="w-4 h-4 mr-2" />
                    <span>Solicitar Diagnóstico por Correo</span>
                  </PrimaryButton>
                </a>
                <a
                  href={`${SITE_CONFIG.whatsappUrl}?text=Hola,%20deseo%20solicitar%20un%20diagn%C3%B3stico%20de%20IA%20y%20automatizaci%C3%B3n%20con%20SySo%20Co.%20Inteligencia`}
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
                  <span>Seguridad y Privacidad Empresarial</span>
                </div>
                <div className="flex items-center gap-2">
                  <Gauge className="w-4 h-4 text-[#42A5F5]" />
                  <span>Estimación Precisa de ROI</span>
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
