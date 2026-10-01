import React from "react";
import type { Metadata } from "next";
import {
  Code,
  Server,
  Network,
  ShieldAlert,
  ShieldCheck,
  Cpu,
  Wifi,
  HardDrive,
  Eye,
  Lock,
  ArrowRight,
  CheckCircle2,
  Phone,
  Mail,
  ArrowUpRight,
  Building2,
  Zap,
  Activity,
  Layers,
  Sparkles,
  Terminal,
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { PrimaryButton, SecondaryButton } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Tecnología — Infraestructura, Redes & Soluciones Tecnológicas | SySo Co.",
  description:
    "División 05 de SySo Co. especializada en Redes Estructuradas, Servidores de Misión Crítica, Centros de Datos, Ciberseguridad Perimetral y Soluciones Tecnológicas Empresariales.",
  openGraph: {
    title: "Tecnología — Infraestructura, Redes & Soluciones Tecnológicas | SySo Co.",
    description:
      "Garantizamos la conectividad, potencia y resiliencia tecnológica de tu organización con infraestructura certificada y disponibilidad 99.99%.",
    url: "https://tecnologia.sysolat.com",
    siteName: "SySo Co. Tecnología",
    locale: "es_MX",
    type: "website",
  },
};

const TECNOLOGIA_SERVICES = [
  {
    id: "redes-infraestructura",
    title: "Redes Estructuradas, Fibra Óptica & Conectividad",
    tagline: "Autopistas Digitales & Misión Crítica",
    description:
      "Diseñamos y canalizamos infraestructuras de cableado estructurado y fibra óptica certificadas que garantizan transferencias de ultra alta velocidad, cero caídas y orden impecable.",
    icon: Network,
    accent: "#1E88E5",
    features: [
      "Cableado Estructurado Cat 6A / Cat 7 Certificado por Fabricante",
      "Tendido y Fusión de Fibra Óptica Monomodo y Multimodo",
      "Redes Wi-Fi 6E/7 Empresariales de Alta Densidad con Roaming Inteligente",
      "Peinado de Racks, Gabinetes y Patch Panels con Estándar TIA/EIA",
      "Switches Administrables Capa 3, Routers Industriales y Balanceo SD-WAN",
      "Certificación con Escáner Fluke Networks y Entrega de Memoria Técnica",
    ],
    deliverable: "Garantía de Cableado de 25 Años + Certificación Fluke Networks",
  },
  {
    id: "servidores-datacenter",
    title: "Servidores, Data Centers & Nube Híbrida",
    tagline: "Cómputo Robusto & Alta Disponibilidad",
    description:
      "Montamos y optimizamos salas de cómputo y centros de datos empresariales. Servidores dedicados, virtualización avanzada y sistemas de respaldo redundantes a prueba de contingencias.",
    icon: Server,
    accent: "#42A5F5",
    features: [
      "Suministro y Configuración de Servidores Rackeables de Alta Densidad",
      "Virtualización Corporativa (VMware vSphere, Proxmox VE, Hyper-V)",
      "Almacenamiento SAN/NAS Centralizado con Arreglos RAID Redundantes",
      "Sistemas de Energía Ininterrumpida (UPS Trifásicos) y Plantas de Luz",
      "Climatización de Precisión para Salas de Servidores y Sensores de Humedad",
      "Estrategias de Respaldo Inmutable 3-2-1 y Recuperación ante Desastres (DRP)",
    ],
    deliverable: "Arquitectura de Servidores Operativa + Matriz DRP & Backups",
  },
  {
    id: "ciberseguridad-videovigilancia",
    title: "Ciberseguridad Perimetral & Seguridad Física IP",
    tagline: "Blindaje Digital & Protección de Espacios",
    description:
      "Protegemos los activos digitales y físicos de tu sede. Firewalls de próxima generación, control de acceso biométrico y sistemas de videovigilancia inteligente con analítica forense.",
    icon: Lock,
    accent: "#1E88E5",
    features: [
      "Firewalls de Próxima Generación (NGFW), VPNs Seguras y Segmentación Zero Trust",
      "Sistemas de Videovigilancia IP 4K con Reconocimiento Facial e IA",
      "Control de Acceso Biométrico, Torniquetes y Chapas Electromagnéticas",
      "Sistemas de Alarma, Detección de Intrusos y Sensores Perimetrales",
      "Protección Endpoint, Mitigación de Ransomware y Prevención de Fugas (DLP)",
      "Centro de Monitoreo Centralizado (CCTV) con Acceso Remoto Encriptado",
    ],
    deliverable: "Topología Perimetral Blindada + Sistema CCTV/Acceso Llave en Mano",
  },
  {
    id: "soluciones-sistemas",
    title: "Soluciones Tecnológicas & Ecosistemas Digitales",
    tagline: "Software Empresarial & Transformación Operativa",
    description:
      "Desarrollamos e implementamos soluciones de software a la medida, plataformas web escalables, telefonía IP y automatización que digitalizan el núcleo operativo de tu negocio.",
    icon: Cpu,
    accent: "#42A5F5",
    features: [
      "Desarrollo de Portales Web y Plataformas Empresariales a la Medida",
      "Telefonía IP Corporativa (VoIP en la Nube / Conmutadores Virtuales)",
      "Salas de Videoconferencia Inteligentes para Zoom Rooms y Microsoft Teams",
      "Integración de Sistemas vía APIs, Bases de Datos y Microservicios",
      "Mesa de Ayuda (Helpdesk) y Soporte Técnico de Mantenimiento Preventivo",
      "Auditorías de Madurez Digital y Consultoría Tecnológica Estratégica",
    ],
    deliverable: "Plataforma Implementada + Póliza de Soporte Técnico Especializado",
  },
];

const METHODOLOGY_STEPS = [
  {
    step: "01",
    phase: "Levantamiento Técnico & Site Survey",
    duration: "Semana 1",
    description:
      "Inspección en sitio de infraestructura actual, rutas de cableado, cargas de cómputo, mapa de calor Wi-Fi y puntos vulnerables de seguridad.",
    outputs: ["Dictamen de Infraestructura Actual", "Plano Preliminar de Distribución"],
  },
  {
    step: "02",
    phase: "Ingeniería de Detalle & Arquitectura",
    duration: "Semanas 1 - 2",
    description:
      "Diseño de la topología de red, selección de hardware empresarial homologado, cálculo de consumo energético, respaldo UPS y planes de contingencia.",
    outputs: ["Diagrama Unifilar y de Red L2/L3", "Catálogo de Conceptos y Hardware"],
  },
  {
    step: "03",
    phase: "Despliegue, Canalización & Montaje",
    duration: "Semanas 2 - 5",
    description:
      "Tendido de cableado/fibra, peinado de racks, montaje de servidores, configuración de VLANs, firewalls, cámaras IP y pruebas de estrés de red.",
    outputs: ["Instalación Llave en Mano", "Pruebas de Continuidad y Certificación"],
  },
  {
    step: "04",
    phase: "Certificación, Entrega & Monitoreo NOC",
    duration: "Gobernanza Continua",
    description:
      "Emisión de certificados Fluke, entrega de memorias técnicas As-Built, capacitación al equipo interno y enlace a monitoreo preventivo continuo.",
    outputs: ["Memoria Técnica As-Built Certificada", "Monitoreo Preventivo 24/7"],
  },
];

const COMPARISON_METRICS = [
  {
    aspect: "Infraestructura de Cableado",
    traditional: "Cables sueltos, patch cords enredados, sin etiquetar y con caídas frecuentes.",
    syso: "Cableado estructurado certificado, peinado impecable en racks y garantía a 25 años.",
  },
  {
    aspect: "Disponibilidad & Cómputo",
    traditional: "Servidores caseros sin respaldo eléctrico ni redundancia ante fallas.",
    syso: "Servidores rackeables con arreglo RAID, UPS trifásico y tolerancia a fallas 99.99%.",
  },
  {
    aspect: "Seguridad de Red",
    traditional: "Módem de proveedor básico sin firewall ni segmentación, expuesto a ciberataques.",
    syso: "Firewall NGFW, segmentación Zero Trust, VPNs encriptadas y monitoreo de tráfico.",
  },
  {
    aspect: "Soporte & Respuesta",
    traditional: "Técnico externo que atiende días después de que el sistema ya colapsó.",
    syso: "Póliza ejecutiva, monitoreo proactivo NOC y tiempo de respuesta crítico garantizado.",
  },
];

export default function TecnologiaPage() {
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
              DIVISIÓN 05 // TECNOLOGÍA
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <Badge variant="primary" className="mb-6">
                <Network className="w-3.5 h-3.5 mr-1.5 text-[#1E88E5]" />
                Infraestructura, Redes & Soluciones Tecnológicas
              </Badge>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight font-heading leading-[1.08] mb-6">
                Conectividad de misión crítica, infraestructura resiliente y{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#90CAF9] to-[#1E88E5]">
                  tecnología de vanguardia.
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-[#D9D9D9] max-w-2xl leading-relaxed mb-8">
                Diseñamos, desplegamos y administramos redes empresariales de alta velocidad, centros de datos, servidores de alto rendimiento, ciberseguridad perimetral y soluciones tecnológicas integradas para organizaciones que no pueden detenerse.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center pt-2">
                <a href="#diagnostico">
                  <PrimaryButton className="w-full sm:w-auto text-sm px-7 py-3.5 shadow-lg shadow-[#1E88E5]/25">
                    <span>Solicitar Diagnóstico Tecnológico</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </PrimaryButton>
                </a>
                <a href="#servicios">
                  <SecondaryButton className="w-full sm:w-auto text-sm px-6 py-3.5">
                    <span>Explorar Infraestructura & Redes</span>
                  </SecondaryButton>
                </a>
              </div>
            </div>

            {/* Right Highlight Box / Tech Telemetry */}
            <div className="lg:col-span-5">
              <div className="relative p-8 rounded-3xl bg-gradient-to-b from-[#1E232F] via-[#171A21] to-[#101217] border border-white/10 shadow-2xl">
                <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#42A5F5]">
                      Telemetría de Red & Cómputo
                    </span>
                    <h3 className="text-lg font-bold text-white font-heading mt-0.5">
                      Infraestructura Blindada 24/7
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
                        Disponibilidad 99.99% Garantizada
                      </h4>
                      <p className="text-xs text-[#8C8C8C] mt-0.5">
                        Enlaces redundantes, conmutación automática de tráfico y tolerancia a fallas.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 flex items-start gap-3.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-white">
                        Cableado Certificado & Fibra Óptica
                      </h4>
                      <p className="text-xs text-[#8C8C8C] mt-0.5">
                        Norma TIA-568 con certificación Fluke Networks y memorias técnicas completas.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 flex items-start gap-3.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-white">
                        Ciberseguridad Perimetral Activa
                      </h4>
                      <p className="text-xs text-[#8C8C8C] mt-0.5">
                        Filtrado NGFW, VPNs corporativas y mitigación preventiva de intrusiones.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 flex items-start gap-3.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-white">
                        Videovigilancia IP & Biometría
                      </h4>
                      <p className="text-xs text-[#8C8C8C] mt-0.5">
                        CCTV 4K inteligente con reconocimiento facial y control de acceso vehicular/peatonal.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between text-xs text-[#8C8C8C]">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Sistemas Operativos
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
              Ingeniería & Soluciones
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight font-heading mb-4">
              Capacidades Tecnológicas de Alta Gama
            </h2>
            <p className="text-base sm:text-lg text-[#8C8C8C] leading-relaxed">
              Soluciones diseñadas bajo los estándares internacionales más estrictos para garantizar estabilidad, seguridad y velocidad sin compromisos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TECNOLOGIA_SERVICES.map((service, index) => {
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
              Diferencia Técnica
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight font-heading mb-4">
              TI Convencional vs. Infraestructura SySo Tecnología
            </h2>
            <p className="text-base sm:text-lg text-[#8C8C8C] leading-relaxed">
              La diferencia entre solucionar fallas de red sobre la marcha o contar con una infraestructura certificada que nunca se detiene.
            </p>
          </div>

          <div className="overflow-x-auto">
            <div className="min-w-[700px] rounded-3xl border border-white/10 bg-[#171A21] overflow-hidden shadow-2xl">
              <div className="grid grid-cols-12 bg-white/5 p-5 text-xs font-mono font-bold uppercase tracking-wider text-[#8C8C8C] border-b border-white/10">
                <div className="col-span-3 text-white">Dimensión</div>
                <div className="col-span-4 text-rose-400/90 flex items-center gap-1.5">
                  <ShieldAlert className="w-3.5 h-3.5" />
                  <span>TI Convencional / Desordenado</span>
                </div>
                <div className="col-span-5 text-[#42A5F5] flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>SySo Co. Tecnología (Certificado)</span>
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
              Metodología de Despliegue en 4 Fases
            </h2>
            <p className="text-base sm:text-lg text-[#8C8C8C] leading-relaxed">
              Desde el levantamiento inicial en sitio hasta la certificación con equipo de laboratorio y soporte preventivo continuo.
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
                Inspección en Sitio
              </Badge>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight font-heading mb-4">
                Solicita un Diagnóstico de Infraestructura & Redes
              </h2>
              <p className="text-base text-[#D9D9D9] leading-relaxed mb-8">
                Nuestros ingenieros certificados visitan tus instalaciones o realizan una auditoría remota para evaluar la salud de tus redes, servidores y ciberseguridad, entregándote una propuesta técnica clara.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
                <a
                  href={`mailto:${SITE_CONFIG.contactEmail}?subject=Diagn%C3%B3stico%20de%20Infraestructura%20y%20Redes%20-%20SySo%20Co.%20Tecnolog%C3%ADa`}
                >
                  <PrimaryButton className="w-full sm:w-auto text-sm px-8 py-3.5 shadow-xl shadow-[#1E88E5]/30">
                    <Mail className="w-4 h-4 mr-2" />
                    <span>Solicitar Diagnóstico por Correo</span>
                  </PrimaryButton>
                </a>
                <a
                  href={`${SITE_CONFIG.whatsappUrl}?text=Hola,%20deseo%20solicitar%20un%20diagn%C3%B3stico%20de%20infraestructura%20y%20redes%20con%20SySo%20Co.%20Tecnolog%C3%ADa`}
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
                  <span>Ingenieros Certificados</span>
                </div>
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-[#42A5F5]" />
                  <span>Memoria Técnica & Dictamen</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-amber-400" />
                  <span>Visita y Diagnóstico Rápido</span>
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
