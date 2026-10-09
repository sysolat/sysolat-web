import React from "react";
import type { Metadata } from "next";
import {
  Server,
  Cable,
  Network,
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
  HardDrive,
  Cpu,
  Flame,
  Gauge,
  SlidersHorizontal,
  FolderGit2,
  FileCheck2,
  Workflow,
  Wrench,
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { PrimaryButton, SecondaryButton } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Infraestructura — Infraestructura Física, Conectividad & Redes Estructuradas | SySo Co.",
  description:
    "División 09 de SySo Co. especializada en Cableado Estructurado Certificado Cat 6A/7, Fibra Óptica, Cuartos de Telecomunicaciones (MDF/IDF) y Canalizaciones Industriales.",
  openGraph: {
    title: "Infraestructura — Infraestructura Física, Conectividad & Redes Estructuradas | SySo Co.",
    description:
      "Diseñamos y desplegamos la infraestructura física pasiva que garantiza la conectividad ininterrumpida de tu organización con certificación Fluke y garantía a 25 años.",
    url: "https://infraestructura.sysolat.com",
    siteName: "SySo Co. Infraestructura",
    locale: "es_MX",
    type: "website",
  },
};

const INFRAESTRUCTURA_SERVICES = [
  {
    id: "cableado-estructurado",
    title: "Cableado Estructurado Certificado (Cat 6A / Cat 7 / Cat 8)",
    tagline: "Voz, Datos & Alimentación PoE de Alta Potencia",
    description:
      "Tendido y conectorización bajo normas estrictas ANSI/TIA-568. Garantizamos anchos de banda de 10 Gbps a 40 Gbps, peinado impecable de racks y certificación con escáner Fluke Networks.",
    icon: Cable,
    accent: "#1E88E5",
    features: [
      "Cableado UTP/FTP/STP Cat 6A, Cat 7 y Cat 8 para Oficinas y Plantas",
      "Peinado Artesanal de Racks con Organizadores Verticales y Horizontales",
      "Soporte Pleno para Dispositivos PoE+ y PoE++ (Hasta 90W por Puerto)",
      "Etiquetado Alfanumérico Estandarizado de Extremo a Extremo (ANSI/TIA-606-B)",
      "Certificación de Atenuación y NEXT con Escáner Fluke Networks DSX-8000",
      "Garantía Extendida de Sistema de Cableado de 25 Años por Fabricante",
    ],
    deliverable: "Certificado Fluke Networks PDF por Nodo + Garantía de 25 Años",
  },
  {
    id: "fibra-optica",
    title: "Fibra Óptica, Fusión por Arco & Enlaces de Campus",
    tagline: "Backbones de Ultra Velocidad & Latencia Cero",
    description:
      "Enlaces inter-edificios y troncales de alta densidad. Tendido aéreo y subterráneo de fibra monomodo y multimodo con empalmes de fusión de precisión milimétrica y atenuaciones mínimas.",
    icon: Network,
    accent: "#42A5F5",
    features: [
      "Tendido de Fibra Óptica Monomodo (OS2) y Multimodo (OM3, OM4, OM5)",
      "Empalmes por Fusión de Núcleo con Atenuación Menor a 0.05 dB",
      "Distribución en Paneles ODF, Conectores LC/SC y Cajas de Empalme Blindadas",
      "Pruebas de Reflectometría Óptica en el Dominio del Tiempo (OTDR)",
      "Topologías de Red en Anillo Redundante para Tolerancia a Cortes Físicos",
      "Instalaciones para Plantas Industriales, Campus y Parques Logísticos",
    ],
    deliverable: "Curvas OTDR Certificadas + Memoria de Enlaces de Fibra Operativos",
  },
  {
    id: "cuartos-telecom",
    title: "Cuartos de Telecomunicaciones (MDF / IDF) & Data Centers",
    tagline: "El Corazón Físico de tus Telecomunicaciones",
    description:
      "Diseño y adecuación integral de Sites Principales (MDF) y Secundarios (IDF). Gabinetes de 42U/45U, piso falso técnico, tierras físicas dedicadas y climatización de precisión continua.",
    icon: Server,
    accent: "#1E88E5",
    features: [
      "Distribución Arquitectónica de Sites conforme a Estándar TIA-942",
      "Gabinetes Cerrados de Servidores con Gestión Térmica y Chapa Electrónica",
      "Barra de Cobre de Tierra Física Equipotencial (TMGB) bajo Norma TIA-607",
      "Instalación de Piso Falso Elevado y Techos Técnicos Antipolvo",
      "Sistemas de Climatización de Precisión para Temperatura y Humedad Constante",
      "Detección Temprana de Humo por Aspiración (VESDA) y Supresión con Gas Limpio",
    ],
    deliverable: "Site Llave en Mano + Carpeta de Mantenimiento y Memoria As-Built",
  },
  {
    id: "canalizaciones-industriales",
    title: "Canalizaciones Industriales, Charola Malla & Conduit",
    tagline: "Rutas Protegidas, Ordenadas & Libres de Inducción",
    description:
      "Soportes y canalizaciones pesadas que protegen el cableado contra roedores, humedad, aplastamiento e interferencia electromagnética. Acabados industriales de máxima pulcritud.",
    icon: Wrench,
    accent: "#42A5F5",
    features: [
      "Canalización en Charola Portacable Tipo Malla de Acero Electrocincado",
      "Tubería Conduit Galvanizada Pared Gruesa y Delgada con Accesorios Certificados",
      "Sistemas Selladores Cortafuego (Firestop) en Cruces de Muros y Losas",
      "Ductería Subterránea y Pozos de Visita para Canalizaciones de Exteriores",
      "Aislamiento Físico de Cableado de Datos frente a Líneas de Alta Tensión",
      "Levantamiento y Planos As-Built Digitales en AutoCAD y Formato BIM",
    ],
    deliverable: "Rutas Canalizadas Certificadas + Planos As-Built en AutoCAD/BIM",
  },
];

const METHODOLOGY_STEPS = [
  {
    step: "01",
    phase: "Levantamiento Físico & Site Survey",
    duration: "Semanas 1 - 2",
    description:
      "Inspección de rutas, medición de distancias, cálculo de cargas electromagnéticas, verificación de cuartos de site existentes y planimetría arquitectónica.",
    outputs: ["Memoria de Inspección en Sitio", "Plano Preliminar de Trayectorias"],
  },
  {
    step: "02",
    phase: "Ingeniería de Rutas & Memoria de Cálculo",
    duration: "Semanas 2 - 3",
    description:
      "Cálculo de ocupación de tuberías/charolas, dimensionamiento de gabinetes, selección de marcas homologadas y diseño de diagramas unifilares y de parcheo.",
    outputs: ["Memoria de Cálculo de Canalizaciones", "Diagrama de Parcheo en Racks"],
  },
  {
    step: "03",
    phase: "Canalización, Tendido & Fusión en Sitio",
    duration: "Semanas 3 - 6",
    description:
      "Fijación de charolas/tuberías, tendido de cableado respetando radios de curvatura, fusiones de fibra óptica, peinado de racks y etiquetado TIA-606-B.",
    outputs: ["Instalación Física Completada", "Etiquetado en Ambos Extremos"],
  },
  {
    step: "04",
    phase: "Certificación Fluke & Entrega As-Built",
    duration: "Semana 7",
    description:
      "Escaneo nodo por nodo con equipo Fluke Networks calibrado, entrega de reportes en PDF, entrega de planos As-Built en AutoCAD y emisión de garantía de 25 años.",
    outputs: ["Reportes de Certificación Fluke", "Garantía de Fabricante a 25 Años"],
  },
];

const COMPARISON_METRICS = [
  {
    aspect: "Soporte & Canalización",
    traditional: "Cables amarrados con alambre sobre plafón sin soporte, expuestos a cortes y roedores.",
    syso: "Charola tipo malla y tubería conduit galvanizada con fijación estructural y sellado firestop.",
  },
  {
    aspect: "Peinado de Racks",
    traditional: "Madeja enredada de cables ('nido de pájaros'), sin organizadores ni identificación.",
    syso: "Peinado artesanal milimétrico con organizadores verticales/horizontales y parcheo estandarizado.",
  },
  {
    aspect: "Certificación Técnica",
    traditional: "Pruebas simples de continuidad con multímetro o 'probador de focos' sin reporte técnico.",
    syso: "Certificación nodo por nodo con escáner Fluke Networks entregando informe digital oficial.",
  },
  {
    aspect: "Garantía & Vida Útil",
    traditional: "Sin respaldo de fabricante; cuando falla, el instalador no se hace responsable.",
    syso: "Garantía de desempeño de 25 años respaldada directamente por el fabricante del cableado.",
  },
];

export default function InfraestructuraPage() {
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
              DIVISIÓN 09 // INFRAESTRUCTURA
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <Badge variant="primary" className="mb-6">
                <Server className="w-3.5 h-3.5 mr-1.5 text-[#1E88E5]" />
                Infraestructura Física, Conectividad & Redes Estructuradas
              </Badge>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight font-heading leading-[1.08] mb-6">
                Canalizaciones de alta gama, cableado certificado y{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#90CAF9] to-[#1E88E5]">
                  centros de conectividad resilientes.
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-[#D9D9D9] max-w-2xl leading-relaxed mb-8">
                Diseñamos, canalizamos e instalamos la infraestructura física pasiva que sostiene tus telecomunicaciones: cuartos de telecomunicaciones (MDF/IDF), fibra óptica de alta densidad y cableado estructurado Cat 6A/7 con certificación Fluke y garantía a 25 años.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center pt-2">
                <a href="#diagnostico">
                  <PrimaryButton className="w-full sm:w-auto text-sm px-7 py-3.5 shadow-lg shadow-[#1E88E5]/25">
                    <span>Solicitar Diagnóstico de Infraestructura</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </PrimaryButton>
                </a>
                <a href="#servicios">
                  <SecondaryButton className="w-full sm:w-auto text-sm px-6 py-3.5">
                    <span>Ver Capacidades de Canalización</span>
                  </SecondaryButton>
                </a>
              </div>
            </div>

            {/* Right Highlight Box / Physical Telemetry */}
            <div className="lg:col-span-5">
              <div className="relative p-8 rounded-3xl bg-gradient-to-b from-[#1E232F] via-[#171A21] to-[#101217] border border-white/10 shadow-2xl">
                <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#42A5F5]">
                      Matriz de Ingeniería Física
                    </span>
                    <h3 className="text-lg font-bold text-white font-heading mt-0.5">
                      Infraestructura Pasiva Certificada
                    </h3>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-[#1E88E5]/15 border border-[#1E88E5]/30 flex items-center justify-center text-[#42A5F5]">
                    <Cable className="w-5 h-5 text-[#1E88E5]" />
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 flex items-start gap-3.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-white">
                        Garantía de 25 Años por Fabricante
                      </h4>
                      <p className="text-xs text-[#8C8C8C] mt-0.5">
                        Instaladores certificados por marcas líderes globales de conectividad y cobre/fibra.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 flex items-start gap-3.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-white">
                        Certificación Fluke Networks Nodo por Nodo
                      </h4>
                      <p className="text-xs text-[#8C8C8C] mt-0.5">
                        Entrega de informe oficial digital que avala anchos de banda y cero pérdidas de señal.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 flex items-start gap-3.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-white">
                        Cuartos MDF / IDF de Alta Eficiencia
                      </h4>
                      <p className="text-xs text-[#8C8C8C] mt-0.5">
                        Tierras físicas TIA-607, piso falso técnico y orden milimétrico de cableado.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 flex items-start gap-3.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-white">
                        Canalización Pesada & Sellos Firestop
                      </h4>
                      <p className="text-xs text-[#8C8C8C] mt-0.5">
                        Charola tipo malla y tubería conduit con selladores cortafuego en muros y losas.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between text-xs text-[#8C8C8C]">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Norma ANSI/TIA Cumplida
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
              Ingeniería en Campo
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight font-heading mb-4">
              Soluciones de Conectividad e Infraestructura Física
            </h2>
            <p className="text-base sm:text-lg text-[#8C8C8C] leading-relaxed">
              Despliegues ejecutados con personal calificado, herramientas de laboratorio y cumplimiento estricto de estándares internacionales de telecomunicaciones.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {INFRAESTRUCTURA_SERVICES.map((service, index) => {
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
              Calidad Estructural
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight font-heading mb-4">
              Instalación Genérica vs. Ingeniería SySo Infraestructura
            </h2>
            <p className="text-base sm:text-lg text-[#8C8C8C] leading-relaxed">
              La diferencia entre convivir con fallas intermitentes de cableado o contar con una autopista digital certificada y garantizada por 25 años.
            </p>
          </div>

          <div className="overflow-x-auto">
            <div className="min-w-[700px] rounded-3xl border border-white/10 bg-[#171A21] overflow-hidden shadow-2xl">
              <div className="grid grid-cols-12 bg-white/5 p-5 text-xs font-mono font-bold uppercase tracking-wider text-[#8C8C8C] border-b border-white/10">
                <div className="col-span-3 text-white">Dimensión</div>
                <div className="col-span-4 text-rose-400/90 flex items-center gap-1.5">
                  <Flame className="w-3.5 h-3.5" />
                  <span>Instalación Tradicional / Genérica</span>
                </div>
                <div className="col-span-5 text-[#42A5F5] flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>SySo Co. Infraestructura (Normada)</span>
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
              Ingeniería Rigurosa
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight font-heading mb-4">
              Protocolo de Despliegue Físico en 4 Fases
            </h2>
            <p className="text-base sm:text-lg text-[#8C8C8C] leading-relaxed">
              Un proceso exhaustivo que inicia en los planos arquitectónicos y concluye con la entrega de certificados oficiales de laboratorio.
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
                Inspección & Site Survey
              </Badge>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight font-heading mb-4">
                Solicita un Diagnóstico de Infraestructura Física
              </h2>
              <p className="text-base text-[#D9D9D9] leading-relaxed mb-8">
                Nuestros ingenieros certificados visitan tus instalaciones para evaluar el estado actual de tu cableado, cuartos de site y canalizaciones, entregándote un reporte técnico sin costo ni compromiso.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
                <a
                  href={`mailto:${SITE_CONFIG.contactEmail}?subject=Diagn%C3%B3stico%20de%20Infraestructura%20F%C3%ADsica%20-%20SySo%20Co.%20Infraestructura`}
                >
                  <PrimaryButton className="w-full sm:w-auto text-sm px-8 py-3.5 shadow-xl shadow-[#1E88E5]/30">
                    <Mail className="w-4 h-4 mr-2" />
                    <span>Solicitar Diagnóstico por Correo</span>
                  </PrimaryButton>
                </a>
                <a
                  href={`${SITE_CONFIG.whatsappUrl}?text=Hola,%20deseo%20solicitar%20un%20diagn%C3%B3stico%20de%20infraestructura%20f%C3%ADsica%20y%20redes%20con%20SySo%20Co.%20Infraestructura`}
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
                  <span>Ingenieros Certificados en Campo</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileCheck2 className="w-4 h-4 text-[#42A5F5]" />
                  <span>Reporte Técnico con Escaneo Fluke</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-amber-400" />
                  <span>Garantía de Desempeño a 25 Años</span>
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
