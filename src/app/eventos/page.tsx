import React from "react";
import type { Metadata } from "next";
import {
  Sparkles,
  Video,
  Mic2,
  Tv,
  Radio,
  Cast,
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
  Calendar,
  MonitorPlay,
  Volume2,
  Maximize,
  Sliders,
  Award,
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { PrimaryButton, SecondaryButton } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Eventos — Producción de Eventos, Streaming & Experiencias en Vivo | SySo Co.",
  description:
    "División 08 de SySo Co. especializada en Producción Audiovisual de Clase Mundial, Streaming Broadcast, Convenciones Corporativas y Lanzamientos de Marca Inmersivos.",
  openGraph: {
    title: "Eventos — Producción de Eventos, Streaming & Experiencias en Vivo | SySo Co.",
    description:
      "Transformamos eventos corporativos en experiencias escénicas memorables con producción cinematográfica, streaming 4K y logística impecable.",
    url: "https://eventos.sysolat.com",
    siteName: "SySo Co. Eventos",
    locale: "es_MX",
    type: "website",
  },
};

const EVENTOS_SERVICES = [
  {
    id: "produccion-escenica",
    title: "Producción Técnica, Escenografía & Audiovisual",
    tagline: "Escenarios de Impacto & Rigor Técnico",
    description:
      "Diseño y montaje integral de escenarios imponentes con pantallas LED curvas de alta densidad, diseño de iluminación inteligente computarizada, microfonía profesional y sistemas de audio Line Array con acústica perfecta.",
    icon: Sparkles,
    accent: "#1E88E5",
    features: [
      "Diseño y Renderizado Previo 3D de Escenografías, Tarimas y Backdrops",
      "Pantallas LED Modulares de Alta Definición (P1.9 a P2.6) para Escenarios",
      "Diseño de Iluminación Robótica (Beams, Spots, Washes) calibrada para Video",
      "Microfonía Inalámbrica Digital de Grado Broadcast y Audio Line Array",
      "Estructuras de Truss Certificadas y Generadores de Energía Trifásica Redundante",
      "Dirección Técnica de Escena y Control Centralizado de Señales AV",
    ],
    deliverable: "Renders 3D Aprobados + Montaje Escénico Llave en Mano con Certificación",
  },
  {
    id: "streaming-broadcast",
    title: "Streaming Multicámara Broadcast & Eventos Híbridos",
    tagline: "Calidad Televisiva & Conexión Sin Caídas",
    description:
      "Transmisiones en vivo con estándares de televisión digital. Unidades móviles de switchers 4K, cámaras de cine con operadores expertos, enlaces de internet satelital de respaldo y plataformas interactivas para audiencias globales.",
    icon: Video,
    accent: "#42A5F5",
    features: [
      "Producción de Video Multicámara 4K con Cámaras de Cine y Grúas Robóticas",
      "Switchers Broadcast Profesionales (Blackmagic / Tricaster) con Replay Instantáneo",
      "Transmisión Encriptada a Plataformas Privadas (Teams, Zoom, Vimeo Enterprise)",
      "Enlaces Dedicados de Internet Satelital (Starlink / Bonding Celular de Alta Velocidad)",
      "Traducción Simultánea en Múltiples Idiomas y Closed Caption en Tiempo Real",
      "Interacción de Audiencia: Votaciones en Vivo, Q&A y Proyección de Comentarios",
    ],
    deliverable: "Transmisión en Vivo Ininterrumpida + Master de Video Grabado en 4K Pro",
  },
  {
    id: "convenciones-congresos",
    title: "Convenciones, Congresos & Cumbres Corporativas",
    tagline: "Logística Impecable para Cientos o Miles de Asistentes",
    description:
      "Gestión audiovisual y logística de punta a punta para convenciones directivas, asambleas de accionistas y congresos sectoriales de 100 a 5,000 participantes con coordinación de salones simultáneos y cronograma blindado.",
    icon: Calendar,
    accent: "#1E88E5",
    features: [
      "Gestión Audiovisual Centralizada para Salones Plenarios y Breakout Rooms",
      "Acreditación Digital Ágil con Códigos QR e Impresión Instantánea de Gafetes",
      "Producción de Openers Audiovisuales, Bumpers Institucionales y Cortinillas 3D",
      "Stage Management Minuto a Minuto con Cronometraje en Pantallas de Confort",
      "Coordinación de Presentadores, Monitores de Retorno y Punteros Digitales",
      "Grabación de Todas las Ponencias y Edición de Cápsulas Resumen para Redes",
    ],
    deliverable: "Operación Minuto a Minuto del Congreso + Memoria Audiovisual Completa",
  },
  {
    id: "lanzamientos-experiencias",
    title: "Lanzamientos de Marca, Expos & Experiencias Inmersivas",
    tagline: "Efecto WOW & Máxima Cobertura de Impacto",
    description:
      "Revelaciones dramáticas de productos, vehículos o tecnologías que dejan una huella imborrable en el público y medios de comunicación. Mapeo de proyección (Video Mapping), stands premium y activaciones de marca inmersivas.",
    icon: MonitorPlay,
    accent: "#42A5F5",
    features: [
      "Mecanismos de Revelación Espectacular (Reveals de Producto, Pirotecnia Fría)",
      "Mapeo de Proyección 3D (Video Mapping) en Fachadas y Superficies Irregulares",
      "Diseño y Construcción de Stands Comerciales para Expos Internacionales",
      "Instalaciones Interactivas con Sensores, Túneles LED y Realidad Aumentada",
      "Producción Integral de After-Parties Ejecutivos con Iluminación Ambiental y DJ",
      "Producción de Contenido 'After-Movie' para Prensa y Redes Sociales",
    ],
    deliverable: "Producción de Lanzamiento + Kit de Prensa Audiovisual High-Res",
  },
];

const METHODOLOGY_STEPS = [
  {
    step: "01",
    phase: "Conceptualización & Renders 3D (Preproducción)",
    duration: "Semanas 1 - 3",
    description:
      "Diseño de la experiencia escénica: modelado 3D del venue, definición del rider técnico (pantallas, audio, luces), redacción de la escaleta y planeación logística de carga.",
    outputs: ["Renders 3D Fotorrealistas del Escenario", "Rider Técnico y Cronograma"],
  },
  {
    step: "02",
    phase: "Guion Técnico, Ensayos & Media Assets",
    duration: "Semanas 2 - 4",
    description:
      "Creación de contenidos audiovisuales (openers, cortinillas), pruebas de streaming en laboratorio, asignación de operadores y ensayos con los voceros y directivos.",
    outputs: ["Guion Técnico Minuto a Minuto", "Assets Audiovisuales Masterizados"],
  },
  {
    step: "03",
    phase: "Montaje, Pruebas Generales & Show en Vivo",
    duration: "Días del Evento",
    description:
      "Montaje de estructuras, cableado invisible, calibración de audio Line Array, ensayo general con timing real y operación impecable del evento con dirección de cámaras.",
    outputs: ["Ejecución Técnica Impecable", "Transmisión en Vivo Broadcast 4K"],
  },
  {
    step: "04",
    phase: "Desmontaje Seguro & Entrega de Memorias",
    duration: "Post-Evento (48h)",
    description:
      "Desmontaje ordenado y seguro del venue, entrega de grabaciones completas en discos duros, edición de cápsulas resumen y entrega del informe de audiencia conectada.",
    outputs: ["Masters de Grabación en 4K", "After-Movie Resumen Ejecutivo"],
  },
];

const COMPARISON_METRICS = [
  {
    aspect: "Calidad Visual & Escénica",
    traditional: "Pantallas de proyección borrosas, cables a la vista y fondos planos sin impacto.",
    syso: "Pantallas LED modulares de ultra alta definición, renders 3D previos e iluminación cinematográfica.",
  },
  {
    aspect: "Audio & Microfonía",
    traditional: "Chillidos de retroalimentación (feedback), micrófonos que se cortan y audio disparejo.",
    syso: "Sistemas Line Array calibrados, microfonía inalámbrica digital y monitoreo constante en sala.",
  },
  {
    aspect: "Streaming & Conectividad",
    traditional: "Transmisiones desde una laptop con Wi-Fi inestable que se congela a mitad del evento.",
    syso: "Unidad móvil broadcast con switchers 4K, operadores de cámara y respaldo satelital Starlink.",
  },
  {
    aspect: "Rigor Logístico & Timing",
    traditional: "Retrasos de horas, ponentes desorientados y falta de un director de escena calificado.",
    syso: "Stage Management profesional, cronómetros digitales de confort y guion técnico minuto a minuto.",
  },
];

export default function EventosPage() {
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
              DIVISIÓN 08 // EVENTOS
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <Badge variant="primary" className="mb-6">
                <Sparkles className="w-3.5 h-3.5 mr-1.5 text-[#1E88E5]" />
                Producción de Eventos, Streaming & Experiencias en Vivo
              </Badge>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight font-heading leading-[1.08] mb-6">
                Producción escénica de clase mundial, streaming broadcast y{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#90CAF9] to-[#1E88E5]">
                  experiencias en vivo inolvidables.
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-[#D9D9D9] max-w-2xl leading-relaxed mb-8">
                Diseñamos, producimos y operamos convenciones corporativas, congresos internacionales, lanzamientos de producto y transmisiones híbridas con estándares cinematográficos, tecnología de vanguardia y precisión milimétrica.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center pt-2">
                <a href="#diagnostico">
                  <PrimaryButton className="w-full sm:w-auto text-sm px-7 py-3.5 shadow-lg shadow-[#1E88E5]/25">
                    <span>Cotizar Producción de Evento</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </PrimaryButton>
                </a>
                <a href="#servicios">
                  <SecondaryButton className="w-full sm:w-auto text-sm px-6 py-3.5">
                    <span>Ver Capacidades de Producción</span>
                  </SecondaryButton>
                </a>
              </div>
            </div>

            {/* Right Highlight Box / Production Telemetry */}
            <div className="lg:col-span-5">
              <div className="relative p-8 rounded-3xl bg-gradient-to-b from-[#1E232F] via-[#171A21] to-[#101217] border border-white/10 shadow-2xl">
                <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#42A5F5]">
                      Matriz de Producción Escénica
                    </span>
                    <h3 className="text-lg font-bold text-white font-heading mt-0.5">
                      Transmisión & Show 360°
                    </h3>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-[#1E88E5]/15 border border-[#1E88E5]/30 flex items-center justify-center text-[#42A5F5]">
                    <Video className="w-5 h-5 text-[#1E88E5]" />
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 flex items-start gap-3.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-white">
                        Pantallas LED Curvas & Escenografía 3D
                      </h4>
                      <p className="text-xs text-[#8C8C8C] mt-0.5">
                        Resolución ultra fina, calibración de color profesional e integración arquitectónica.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 flex items-start gap-3.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-white">
                        Streaming Multicámara Broadcast 4K
                      </h4>
                      <p className="text-xs text-[#8C8C8C] mt-0.5">
                        Switches de televisión, cámaras de cine y enlace satelital Starlink sin interrupciones.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 flex items-start gap-3.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-white">
                        Audio Line Array & Microfonía Digital
                      </h4>
                      <p className="text-xs text-[#8C8C8C] mt-0.5">
                        Claridad cristalina para conferencistas con monitores y cero retroalimentación.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 flex items-start gap-3.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-white">
                        Stage Management & Minuto a Minuto
                      </h4>
                      <p className="text-xs text-[#8C8C8C] mt-0.5">
                        Coordinación ejecutiva en vivo para que cada intervención ocurra con exactitud suiza.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between text-xs text-[#8C8C8C]">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Señal en Vivo / Enlace Estable
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
              Capacidades de Producción
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight font-heading mb-4">
              Soluciones Integrales para Eventos & En Vivo
            </h2>
            <p className="text-base sm:text-lg text-[#8C8C8C] leading-relaxed">
              Equipamiento técnico de última generación, talento audiovisual y logística ejecutiva para proyectar el máximo prestigio de tu marca.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {EVENTOS_SERVICES.map((service, index) => {
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
              Rigor vs. Improvisación
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight font-heading mb-4">
              Producción Convencional vs. Experiencia SySo Eventos
            </h2>
            <p className="text-base sm:text-lg text-[#8C8C8C] leading-relaxed">
              La diferencia entre vivir con la tensión de fallas técnicas o tener un equipo de producción broadcast que ejecuta tu evento a la perfección.
            </p>
          </div>

          <div className="overflow-x-auto">
            <div className="min-w-[700px] rounded-3xl border border-white/10 bg-[#171A21] overflow-hidden shadow-2xl">
              <div className="grid grid-cols-12 bg-white/5 p-5 text-xs font-mono font-bold uppercase tracking-wider text-[#8C8C8C] border-b border-white/10">
                <div className="col-span-3 text-white">Dimensión</div>
                <div className="col-span-4 text-rose-400/90 flex items-center gap-1.5">
                  <Sliders className="w-3.5 h-3.5" />
                  <span>Producción Convencional / Proveedor Local</span>
                </div>
                <div className="col-span-5 text-[#42A5F5] flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>SySo Co. Eventos (Estándar Broadcast)</span>
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
              Protocolo de Producción Ejecutiva en 4 Fases
            </h2>
            <p className="text-base sm:text-lg text-[#8C8C8C] leading-relaxed">
              Planificación minuciosa desde los primeros renders 3D hasta la entrega de grabaciones maestras y memorias del evento.
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
                Cotización & Rider Técnico
              </Badge>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight font-heading mb-4">
                Cotiza la Producción de tu Próximo Evento
              </h2>
              <p className="text-base text-[#D9D9D9] leading-relaxed mb-8">
                Cuéntanos los detalles de tu convención, lanzamiento o congreso. Te entregaremos una propuesta técnica completa con renders 3D preliminares y desglose de producción.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
                <a
                  href={`mailto:${SITE_CONFIG.contactEmail}?subject=Cotizaci%C3%B3n%20de%20Producci%C3%B3n%20de%20Eventos%20-%20SySo%20Co.%20Eventos`}
                >
                  <PrimaryButton className="w-full sm:w-auto text-sm px-8 py-3.5 shadow-xl shadow-[#1E88E5]/30">
                    <Mail className="w-4 h-4 mr-2" />
                    <span>Cotizar Evento por Correo</span>
                  </PrimaryButton>
                </a>
                <a
                  href={`${SITE_CONFIG.whatsappUrl}?text=Hola,%20deseo%20cotizar%20la%20producci%C3%B3n%20de%20un%20evento%20o%20streaming%20con%20SySo%20Co.%20Eventos`}
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
                  <span>Respaldo de Energía e Internet</span>
                </div>
                <div className="flex items-center gap-2">
                  <MonitorPlay className="w-4 h-4 text-[#42A5F5]" />
                  <span>Renders 3D Previos al Show</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-amber-400" />
                  <span>Respuesta y Propuesta en &lt; 24h</span>
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
