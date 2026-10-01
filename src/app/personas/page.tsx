import React from "react";
import type { Metadata } from "next";
import {
  Users,
  Compass,
  TrendingUp,
  Target,
  ArrowRight,
  CheckCircle2,
  Phone,
  Mail,
  ArrowUpRight,
  ShieldCheck,
  Building2,
  Award,
  Briefcase,
  HeartHandshake,
  Zap,
  Sparkles,
  BarChart3,
  Network,
  GraduationCap,
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { PrimaryButton, SecondaryButton } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Personas — Capital Humano, Talento & Desarrollo Organizacional | SySo Co.",
  description:
    "División 04 de SySo Co. especializada en Arquitectura Organizacional, Desarrollo de Liderazgo Ejecutivo, Headhunting Estratégico y Cultura Corporativa de Alto Rendimiento.",
  openGraph: {
    title: "Personas — Capital Humano, Talento & Desarrollo Organizacional | SySo Co.",
    description:
      "Transformamos el capital humano en la principal ventaja competitiva de tu organización mediante liderazgo directivo, estructura y cultura.",
    url: "https://personas.sysolat.com",
    siteName: "SySo Co. Personas",
    locale: "es_MX",
    type: "website",
  },
};

const PERSONAS_SERVICES = [
  {
    id: "arquitectura-organizacional",
    title: "Arquitectura Organizacional & Diseño de Estructuras",
    tagline: "Gobernanza del Talento & Eficiencia Operativa",
    description:
      "Diseñamos estructuras de trabajo ágiles y ordenadas que eliminan duplicidades, definen tramos de control claros y permiten a la empresa escalar sin caos operativo.",
    icon: Network,
    accent: "#1E88E5",
    features: [
      "Organigramas Evolutivos y Definición Clara de Líneas de Mando",
      "Perfiles de Puesto de Alta Definición y Matrices de Responsabilidad RACI",
      "Tabuladores de Sueldos y Bandas de Compensación Competitivas",
      "Headcount Planning y Dimensionamiento Técnico de Plantilla",
      "Manuales de Organización y Procesos de Gestión del Talento",
      "Evaluación y Alineación de Puestos Clave ante Objetivos del Negocio",
    ],
    deliverable: "Manual de Organización Integral + Tabulador Salarial & Matrices RACI",
  },
  {
    id: "liderazgo-ejecutivo",
    title: "Desarrollo de Liderazgo Ejecutivo & Mentoring Directivo",
    tagline: "Formación de Mandos & Capacidad de Decisión",
    description:
      "Forjamos directores y gerentes con visión estratégica, pensamiento crítico y liderazgo empático capaces de inspirar equipos autónomos y ejecutar planes de alta complejidad.",
    icon: GraduationCap,
    accent: "#42A5F5",
    features: [
      "Coaching Ejecutivo para Directores Generales, C-Levels y Socios",
      "Programas de Desarrollo Gerencial y Habilidades Directivas Clave",
      "Toma de Decisiones en Entornos de Alta Incertidumbre",
      "Comunicación Asertiva, Manejo de Conflictos y Negociación Interna",
      "Mapeo de Talento y Planes de Sucesión Directiva (9-Box Grid)",
      "Alineación y Cohesión de Comités Directivos y Juntas de Gobierno",
    ],
    deliverable: "Plan de Sucesión Directiva + Matriz de Competencias Ejecutivas",
  },
  {
    id: "atraccion-talento",
    title: "Atracción Estratégica, Headhunting & Retención",
    tagline: "Reclutamiento de Élite & Fidelización del Talento",
    description:
      "Conectamos a tu empresa con los líderes y perfiles técnicos que impulsarán la siguiente etapa de crecimiento, asegurando el fit técnico y la compatibilidad cultural.",
    icon: Target,
    accent: "#1E88E5",
    features: [
      "Headhunting Especializado para Puestos Directivos y Estratégicos",
      "Evaluación Psicométrica de Última Generación y Fit Cultural",
      "Estrategia de Propuesta de Valor al Empleado (EVP)",
      "Programas de Onboarding Inmersivo y Aceleración de Curva a 90 Días",
      "Mecanismos de Blindaje y Retención de Talento Crítico",
      "Indicadores de Atracción (Time-to-Hire, Cost-per-Hire, Rotación)",
    ],
    deliverable: "Contratación de Perfil Validado + Garantía de Retención Extendida",
  },
  {
    id: "cultura-alto-rendimiento",
    title: "Cultura Organizacional, Clima & Gestión del Cambio",
    tagline: "Alto Rendimiento, Bienestar & Resiliencia",
    description:
      "Construimos entornos de trabajo magnéticos donde las personas se comprometen al máximo, adoptan los cambios sin resistencia y viven los valores corporativos a diario.",
    icon: HeartHandshake,
    accent: "#42A5F5",
    features: [
      "Diagnósticos de Clima Laboral y Encuestas de Engagement con Analítica",
      "Diseño e Implementación de Cultura de Alto Rendimiento (Performance Culture)",
      "Gestión del Cambio Organizacional (Change Management) en Fusiones o Escalado",
      "Cumplimiento Integral en Bienestar Psicosocial (NOM-035 STPS)",
      "Programas de Reconocimiento, Incentivos No Económicos y Sentido de Pertenencia",
      "Estrategias de Comunicación Interna y Ritualización de Valores",
    ],
    deliverable: "Diagnóstico de Clima y Cultura + Hoja de Ruta de Transformación",
  },
];

const METHODOLOGY_STEPS = [
  {
    step: "01",
    phase: "Diagnóstico de Talento (People Due Diligence)",
    duration: "Semanas 1 - 2",
    description:
      "Evaluamos la estructura actual, perfiles de liderazgo, rotación, niveles de clima laboral y alineación de puestos con los objetivos de rentabilidad de la compañía.",
    outputs: ["Auditoría de Estructura Actual", "Mapa de Brechas de Talento y Clima"],
  },
  {
    step: "02",
    phase: "Arquitectura & Alineación Estratégica",
    duration: "Semanas 2 - 4",
    description:
      "Diseñamos los modelos organizacionales óptimos: organigrama futuro, perfiles de puesto clave, programas de liderazgo y políticas de retención a la medida.",
    outputs: ["Modelo Organizacional Futuro", "Plan de Intervención de Liderazgo"],
  },
  {
    step: "03",
    phase: "Despliegue & Formación de Equipos",
    duration: "Semanas 4 - 8",
    description:
      "Implantación de las nuevas herramientas, talleres de liderazgo para directivos, procesos de reclutamiento estratégico y comunicación interna del cambio.",
    outputs: ["Capacitación Directiva Ejecutada", "Nuevos Puestos y Políticas en Marcha"],
  },
  {
    step: "04",
    phase: "Medición de Impacto & Sucesión Continua",
    duration: "Gobernanza Trimestral",
    description:
      "Seguimiento puntual a KPIs de personas: retención de talento clave, evaluación de desempeño 360°, pulso de clima y planes de carrera activos.",
    outputs: ["Tablero de KPIs de Capital Humano", "Revisiones Semestrales de Talento"],
  },
];

const COMPARISON_METRICS = [
  {
    aspect: "Enfoque del Área",
    traditional: "Administrativo & Operativo: Enfocado únicamente en nómina, faltas y altas del IMSS.",
    syso: "Estratégico & de Negocio: El capital humano como palanca directa de rentabilidad y escala.",
  },
  {
    aspect: "Estructura & Puestos",
    traditional: "Organigramas desactualizados, duplicidad de tareas y 'hacer de todo' sin claridad.",
    syso: "Arquitectura organizacional precisa, perfiles por competencias y matrices RACI.",
  },
  {
    aspect: "Liderazgo Directivo",
    traditional: "Jefaturas tradicionales basadas en mando y control sin preparación ejecutiva.",
    syso: "Líderes formados en coaching, toma de decisiones, comunicación y visión global.",
  },
  {
    aspect: "Rotación & Cultura",
    traditional: "Alta fuga de talento clave, clima tenso y desinterés generalizado del equipo.",
    syso: "Cultura de alto rendimiento, sentido de propósito, baja rotación y retención blindada.",
  },
];

export default function PersonasPage() {
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
              DIVISIÓN 04 // PERSONAS
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <Badge variant="primary" className="mb-6">
                <Users className="w-3.5 h-3.5 mr-1.5 text-[#1E88E5]" />
                Capital Humano, Talento & Desarrollo Organizacional
              </Badge>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight font-heading leading-[1.08] mb-6">
                Diseñamos la estructura, el liderazgo y el talento que hacen{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#90CAF9] to-[#1E88E5]">
                  invencible a tu empresa.
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-[#D9D9D9] max-w-2xl leading-relaxed mb-8">
                Alineación estratégica de talento, formación de directores de alto calibre, arquitectura organizacional escalable y cultura corporativa de alto rendimiento para organizaciones que no improvisan su crecimiento.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center pt-2">
                <a href="#diagnostico">
                  <PrimaryButton className="w-full sm:w-auto text-sm px-7 py-3.5 shadow-lg shadow-[#1E88E5]/25">
                    <span>Solicitar Diagnóstico de Talento</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </PrimaryButton>
                </a>
                <a href="#servicios">
                  <SecondaryButton className="w-full sm:w-auto text-sm px-6 py-3.5">
                    <span>Ver Capacidades Organizacionales</span>
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
                      Matriz de Alineación Humana
                    </span>
                    <h3 className="text-lg font-bold text-white font-heading mt-0.5">
                      Talento & Gobernanza 360°
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
                        Estructura Clara & Cero Fricción
                      </h4>
                      <p className="text-xs text-[#8C8C8C] mt-0.5">
                        Roles delimitados, matrices RACI y tramos de control equilibrados para eliminar cuellos de botella.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 flex items-start gap-3.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-white">
                        Líderes que Empujan el Negocio
                      </h4>
                      <p className="text-xs text-[#8C8C8C] mt-0.5">
                        Mandos medios y directivos formados para resolver problemas complejos sin depender del fundador.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 flex items-start gap-3.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-white">
                        Atracción de Perfiles Top Tier
                      </h4>
                      <p className="text-xs text-[#8C8C8C] mt-0.5">
                        Headhunting riguroso que evalúa solvencia técnica, competencias de liderazgo y fit cultural.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 flex items-start gap-3.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-white">
                        Cultura de Alto Desempeño
                      </h4>
                      <p className="text-xs text-[#8C8C8C] mt-0.5">
                        Ambiente de trabajo inspirador con incentivos alineados a la rentabilidad y bienestar integral.
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
              Capacidades Estratégicas
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight font-heading mb-4">
              Soluciones Integrales de Capital Humano
            </h2>
            <p className="text-base sm:text-lg text-[#8C8C8C] leading-relaxed">
              Intervenciones de alto nivel diseñadas para profesionalizar a tu gente, alinear a los directivos y asegurar la retención de los perfiles indispensables.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PERSONAS_SERVICES.map((service, index) => {
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
              Recursos Humanos Tradicional vs. Ecosistema SySo Personas
            </h2>
            <p className="text-base sm:text-lg text-[#8C8C8C] leading-relaxed">
              La diferencia entre gestionar trámites administrativos o convertir a tu equipo en el motor de aceleración empresarial.
            </p>
          </div>

          <div className="overflow-x-auto">
            <div className="min-w-[700px] rounded-3xl border border-white/10 bg-[#171A21] overflow-hidden shadow-2xl">
              <div className="grid grid-cols-12 bg-white/5 p-5 text-xs font-mono font-bold uppercase tracking-wider text-[#8C8C8C] border-b border-white/10">
                <div className="col-span-3 text-white">Dimensión</div>
                <div className="col-span-4 text-rose-400/90 flex items-center gap-1.5">
                  <Briefcase className="w-3.5 h-3.5" />
                  <span>RH Tradicional (Operativo)</span>
                </div>
                <div className="col-span-5 text-[#42A5F5] flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5" />
                  <span>SySo Co. Personas (Estratégico)</span>
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
              Metodología Directiva
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight font-heading mb-4">
              Ruta de Evolución Organizacional en 4 Fases
            </h2>
            <p className="text-base sm:text-lg text-[#8C8C8C] leading-relaxed">
              Un proceso estructurado para diagnosticar el estado del talento, optimizar la arquitectura, empoderar a los líderes y medir resultados con rigor.
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
                Diagnóstico Confidencial
              </Badge>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight font-heading mb-4">
                Solicita un Diagnóstico de Capital Humano & Talento
              </h2>
              <p className="text-base text-[#D9D9D9] leading-relaxed mb-8">
                Descubre cómo optimizar la estructura de tu empresa, alinear al comité directivo y potenciar el rendimiento de tus equipos con una evaluación directiva sin compromiso.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
                <a
                  href={`mailto:${SITE_CONFIG.contactEmail}?subject=Diagn%C3%B3stico%20de%20Capital%20Humano%20-%20SySo%20Co.%20Personas`}
                >
                  <PrimaryButton className="w-full sm:w-auto text-sm px-8 py-3.5 shadow-xl shadow-[#1E88E5]/30">
                    <Mail className="w-4 h-4 mr-2" />
                    <span>Solicitar Diagnóstico por Correo</span>
                  </PrimaryButton>
                </a>
                <a
                  href={`${SITE_CONFIG.whatsappUrl}?text=Hola,%20deseo%20solicitar%20un%20diagn%C3%B3stico%20de%20capital%20humano%20y%20talento%20con%20SySo%20Co.%20Personas`}
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
                  <span>Confidencialidad Total Garantizada</span>
                </div>
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-4 h-4 text-[#42A5F5]" />
                  <span>Informe de Diagnóstico Ejecutivo</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-amber-400" />
                  <span>Atención por Consultores Senior</span>
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
