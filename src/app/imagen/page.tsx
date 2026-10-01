import React from "react";
import type { Metadata } from "next";
import {
  Building2,
  Maximize2,
  Layers,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Compass,
  Zap,
  Phone,
  Mail,
  ArrowUpRight,
  ShieldCheck,
  Eye,
  Box,
  Hammer,
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { PrimaryButton, SecondaryButton } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Imagen — Espacios, Visualización & Grandes Formatos | SySo Co.",
  description:
    "División 02 de SySo Co. especializada en Remodelación Corporativa, Interiorismo Comercial, Visualización 3D y Grandes Formatos Arquitectónicos para sedes empresariales de alto calibre.",
  openGraph: {
    title: "Imagen — Espacios, Visualización & Grandes Formatos | SySo Co.",
    description:
      "Transformamos metros cuadrados en entornos corporativos de clase mundial que inspiran, optimizan la productividad y proyectan liderazgo indiscutible.",
    url: "https://imagen.sysolat.com",
    siteName: "SySo Co. Imagen",
    locale: "es_MX",
    type: "website",
  },
};

const IMAGEN_SERVICES = [
  {
    id: "remodelacion",
    title: "Remodelación Corporativa & Fit-Out",
    tagline: "Arquitectura Comercial & Obra Civil",
    description:
      "Transformamos sedes corporativas, edificios y pisos de oficinas ejecutivas con ingeniería de obra rápida, acabados de alto estándar y mínima disrupción a tus operaciones.",
    icon: Building2,
    accent: "#42A5F5",
    features: [
      "Adecuación Integral de Oficinas y Pisos Corporativos",
      "Tabiquería Acústica, Cancelería de Cristal & Plafones",
      "Ingeniería Eléctrica, Iluminación LED & Climatización",
      "Pisos Técnicos, Alfombras Modulares & Viniles de Tráfico Pesado",
      "Dirección y Supervisión de Obra Certificada",
      "Entrega Llave en Mano con Cronograma Blindado",
    ],
    deliverable: "Sede Ejecutiva 100% Operativa + Planos As-Built",
  },
  {
    id: "interiorismo",
    title: "Interiorismo & Branding Espacial",
    tagline: "Experiencia Física de Marca",
    description:
      "Alineamos el espacio físico con la cultura y prestigio de tu empresa. Diseñamos entornos donde el talento colabora al máximo y los clientes perciben liderazgo desde la recepción.",
    icon: Sparkles,
    accent: "#1E88E5",
    features: [
      "Diseño de Interiores Corporativo & Commercial Layouts",
      "Mobiliario Ergonómico de Vanguardia & Estaciones de Trabajo",
      "Salas de Consejo, Boardrooms & Cabinas Acústicas",
      "Integración Gráfica de Identidad en Cristales y Muros",
      "Zonas de Bienestar, Cafeterías & Espacios de Co-Creation",
      "Acústica Ambiental y Confort Térmico Optimizado",
    ],
    deliverable: "Book de Diseño de Interiores + Mobiliario Instalado",
  },
  {
    id: "visualizacion",
    title: "Visualización 3D & Renders Hiperrealistas",
    tagline: "Modelado BIM & Recorridos 8K",
    description:
      "Permite a los directores y comités de inversión ver, sentir y aprobar cada detalle del proyecto antes de ejecutar el presupuesto de obra, eliminando costos ocultos.",
    icon: Eye,
    accent: "#42A5F5",
    features: [
      "Renders Fotorrealistas 8K de Interiores y Fachadas",
      "Recorridos Virtuales Interactivos 360° en Tiempo Real",
      "Simulación de Iluminación Diurna y Nocturna",
      "Modelado Arquitectónico BIM & Renders de Detalle",
      "Presentaciones Ejecutivas para Comités y Fondos",
      "Animación de Recorrido Cinematográfico en Video",
    ],
    deliverable: "Masterpack de Renders 8K + Video-Recorrido Virtual",
  },
  {
    id: "grandes-formatos",
    title: "Grandes Formatos, Señalética & Fachadas",
    tagline: "Monumentalidad & Comunicación Visual",
    description:
      "Impacto exterior y orientación impecable en complejos corporativos, naves industriales y desarrollos comerciales mediante señalética de alta durabilidad y fachadas vanguardistas.",
    icon: Maximize2,
    accent: "#1E88E5",
    features: [
      "Fachadas Ventiladas, Paneles de Aluminio (ACM) & Muros Cortina",
      "Rótulos Monumentales 3D Iluminados en Acero y Acrílico",
      "Sistemas de Señalética Arquitectónica & Wayfinding",
      "Impresión Monumental en Gran Formato y Viniles Especiales",
      "Totems Informativos, Letras Volumétricas & Unipolares",
      "Montaje Industrial con Póliza de Seguridad y Resistencia",
    ],
    deliverable: "Instalación Certificada de Señalética + Fachada Monumental",
  },
];

const IMAGEN_METHODOLOGY = [
  {
    number: "01",
    phase: "Levantamiento & Análisis Espacial",
    duration: "Semana 1",
    description:
      "Levantamiento topográfico y arquitectónico in situ, escaneo de requerimientos operativos, normativas y proyección de crecimiento de personal.",
  },
  {
    number: "02",
    phase: "Conceptualización & Renders 3D",
    duration: "Semana 2-3",
    description:
      "Presentación del Layout funcional maestro, selección de acabados y renders fotorrealistas en 3D para validación del comité directivo.",
  },
  {
    number: "03",
    phase: "Ejecución, Fabricación & Obra",
    duration: "Semana 4-8",
    description:
      "Coordinación de obra civil, suministro de acabados y manufactura de señalética en taller industrial con supervisión técnica permanente.",
  },
  {
    number: "04",
    phase: "Entrega Llave en Mano & Garantía",
    duration: "Día de Entrega",
    description:
      "Pruebas de todas las instalaciones, auditoría de calidad de acabados, entrega de planos finales y activación de póliza de garantía extendida.",
  },
];

export default function ImagenPage() {
  return (
    <div className="relative bg-[#111111] min-h-screen text-white overflow-hidden">
      {/* Ecosystem Breadcrumb / Top Bar */}
      <div className="bg-[#171A21] border-b border-white/10 pt-28 pb-3 px-6 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#8C8C8C]">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#42A5F5] animate-pulse" />
            <span className="text-[#D9D9D9] font-medium">SySo Co. Imagen</span>
            <span className="text-white/20">|</span>
            <span>División 02: Espacios, Visualización & Grandes Formatos</span>
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
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#42A5F5]/10 blur-[140px] pointer-events-none" />
        <div className="absolute top-10 left-10 w-96 h-96 bg-[#1E88E5]/10 blur-[120px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#42A5F5]/10 border border-[#42A5F5]/30 text-xs font-semibold uppercase tracking-wider text-[#42A5F5] mb-8">
            <Building2 className="w-3.5 h-3.5 text-[#42A5F5]" />
            <span>Imagen • División de Espacios Corporativos</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white font-heading max-w-5xl mx-auto leading-[1.08] mb-8">
            Diseñamos espacios y grandes formatos que{" "}
            <span className="bg-gradient-to-r from-white via-[#42A5F5] to-[#1E88E5] bg-clip-text text-transparent">
              imponen liderazgo y autoridad.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-[#8C8C8C] max-w-3xl mx-auto leading-relaxed mb-12">
            Transformamos metros cuadrados en sedes de clase mundial. Desde remodelación integral de oficinas y branding ambiental, hasta visualización 3D fotorrealista y fachadas monumentales de alto impacto.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <a href="#diagnostico" className="w-full sm:w-auto">
              <PrimaryButton className="w-full sm:w-auto text-base px-8 py-4 shadow-lg shadow-[#1E88E5]/20">
                <span>Solicitar Diagnóstico Espacial</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </PrimaryButton>
            </a>
            <a href="#servicios" className="w-full sm:w-auto">
              <SecondaryButton className="w-full sm:w-auto text-base px-8 py-4">
                <span>Explorar Capacidades</span>
              </SecondaryButton>
            </a>
          </div>

          {/* Quick Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 pt-12 border-t border-white/10 max-w-4xl mx-auto text-left">
            <div>
              <p className="text-2xl sm:text-3xl font-extrabold text-white font-mono">Llave en Mano</p>
              <p className="text-xs text-[#8C8C8C] mt-1">Gestión integral desde el plano hasta la inauguración</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-extrabold text-[#42A5F5] font-mono">Visualización 8K</p>
              <p className="text-xs text-[#8C8C8C] mt-1">Renders y recorridos 3D antes de construir</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-extrabold text-white font-mono">Monumental</p>
              <p className="text-xs text-[#8C8C8C] mt-1">Fachadas, señalética y gran formato industrial</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-extrabold text-[#42A5F5] font-mono">1 Ecosistema</p>
              <p className="text-xs text-[#8C8C8C] mt-1">Conexión con Studio (Marca) y Tecnología</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section id="servicios" className="relative py-24 sm:py-32 bg-[#14171D] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <Badge variant="primary" className="mb-4">
              Capacidades Arquitectónicas & Visuales
            </Badge>
            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight font-heading mb-6">
              Servicios Clave de Imagen
            </h2>
            <p className="text-base sm:text-lg text-[#8C8C8C] leading-relaxed">
              Ingeniería espacial, interiorismo corporativo y comunicación monumental para organizaciones que buscan proyectar solidez en cada centímetro.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {IMAGEN_SERVICES.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  className="
                    group relative flex flex-col justify-between
                    rounded-[32px] border border-white/10
                    bg-[#171A21] p-8 sm:p-10
                    transition-all duration-300
                    hover:border-[#42A5F5]/50 hover:shadow-[0_20px_50px_rgba(0,0,0,0.6),0_0_30px_rgba(66,165,245,0.15)]
                    hover:-translate-y-1
                  "
                >
                  {/* Service Card Header */}
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-[#42A5F5]/10 border border-[#42A5F5]/30 flex items-center justify-center text-[#42A5F5] group-hover:scale-110 group-hover:bg-[#42A5F5]/20 transition-all duration-300">
                        <Icon className="w-7 h-7 text-[#42A5F5]" />
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
                        Alcances Técnicos & Entregables
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {service.features.map((feature, fIdx) => (
                          <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#D9D9D9]">
                            <CheckCircle2 className="w-4 h-4 text-[#42A5F5] flex-shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Deliverable Badge */}
                  <div className="p-4 rounded-2xl bg-[#111317] border border-white/5 flex items-center justify-between text-xs">
                    <span className="text-[#8C8C8C]">Compromiso Clave:</span>
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
              Metodología Constructiva & Espacial
            </Badge>
            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight font-heading mb-6">
              El Proceso de Imagen en 4 Fases
            </h2>
            <p className="text-base sm:text-lg text-[#8C8C8C] leading-relaxed">
              Cero improvisación. Un cronograma riguroso que garantiza calidad de materiales, cumplimiento de tiempos de entrega y presupuestos respetados al centavo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {IMAGEN_METHODOLOGY.map((step) => (
              <div
                key={step.number}
                className="relative rounded-3xl border border-white/10 bg-[#171A21] p-6 sm:p-8 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-extrabold font-mono text-[#42A5F5]">
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
                  <span>Fase de Ejecución</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diagnostic Section / Action Box */}
      <section id="diagnostico" className="relative py-24 sm:py-32 bg-[#14171D] overflow-hidden">
        {/* Glow ambient background */}
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[300px] bg-[#42A5F5]/10 blur-[140px] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <div className="rounded-[36px] border border-white/10 bg-gradient-to-b from-[#1C2029] to-[#12141A] p-8 sm:p-14 shadow-2xl relative overflow-hidden">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2.5 h-2.5 rounded-full bg-[#42A5F5] animate-pulse" />
              <span className="text-xs font-mono font-semibold text-[#42A5F5] tracking-wider uppercase">
                Auditoría Arquitectónica & Espacial
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7">
                <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight font-heading mb-6 leading-tight">
                  Solicita una Visita Técnica o Diagnóstico de Espacios
                </h2>
                <p className="text-base text-[#8C8C8C] leading-relaxed mb-8">
                  Nuestros directores arquitectónicos evalúan el estado de tus oficinas actuales, analizan la viabilidad de tus proyectos de expansión y diseñan una propuesta integral con estimación de costos y tiempos reales.
                </p>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3 text-sm text-[#D9D9D9]">
                    <CheckCircle2 className="w-5 h-5 text-[#42A5F5] flex-shrink-0" />
                    <span>Visita y levantamiento técnico de áreas físicas sin compromiso.</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-[#D9D9D9]">
                    <CheckCircle2 className="w-5 h-5 text-[#42A5F5] flex-shrink-0" />
                    <span>Asesoría en distribución ergonómica y optimización de m².</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-[#D9D9D9]">
                    <CheckCircle2 className="w-5 h-5 text-[#42A5F5] flex-shrink-0" />
                    <span>Presupuesto desglosado con alternativas de acabados y mobiliario.</span>
                  </div>
                </div>
              </div>

              {/* Action Box */}
              <div className="lg:col-span-5 bg-[#171A21] border border-white/10 rounded-3xl p-6 sm:p-8 flex flex-col gap-5 text-center">
                <div className="w-12 h-12 rounded-2xl bg-[#42A5F5]/15 border border-[#42A5F5]/30 flex items-center justify-center text-[#42A5F5] mx-auto">
                  <Hammer className="w-6 h-6 text-[#42A5F5]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white font-heading">
                    Agendar con el Equipo de Imagen
                  </h3>
                  <p className="text-xs text-[#8C8C8C] mt-1">
                    Atención directa con la dirección de arquitectura y obra.
                  </p>
                </div>

                <a
                  href={`mailto:${SITE_CONFIG.contactEmail}?subject=Solicitud%20de%20Diagnostico%20Espacial%20-%20Imagen`}
                  className="w-full"
                >
                  <PrimaryButton className="w-full py-3.5 text-sm">
                    <Mail className="w-4 h-4 mr-2 text-[#1E88E5]" />
                    <span>Solicitar Visita Técnica</span>
                  </PrimaryButton>
                </a>

                <a
                  href="https://wa.me/5215655217048?text=Hola,%20deseo%20solicitar%20un%20diagnóstico%20de%20espacios%20y%20remodelación%20con%20SySo%20Co.%20Imagen."
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
            Imagen interactúa con la totalidad del Ecosistema SySo Co.
          </h3>
          <p className="text-sm text-[#8C8C8C] max-w-2xl mx-auto mb-8">
            Los espacios creados por Imagen integran la infraestructura de redes (División Infraestructura), el blindaje de contratos de obra (División Jurídico) y la identidad visual (División Studio).
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
