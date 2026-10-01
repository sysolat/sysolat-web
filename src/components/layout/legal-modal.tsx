"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { X, ShieldCheck, FileText, Scale, ExternalLink, Mail, Phone } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export type LegalTab = "privacidad" | "terminos" | "compliance";

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: LegalTab;
}

export function LegalModal({ isOpen, onClose, initialTab = "privacidad" }: LegalModalProps) {
  const [activeTab, setActiveTab] = useState<LegalTab>(initialTab);

  useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10"
    >
      {/* Backdrop with blur */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Container */}
      <div className="relative z-10 w-full max-w-4xl max-h-[90vh] flex flex-col rounded-[28px] border border-white/10 bg-[#14171D] shadow-[0_25px_60px_rgba(0,0,0,0.85)] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 sm:px-8 py-5 border-b border-white/10 bg-[#171A21]/90">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#1E88E5]/15 border border-[#1E88E5]/30 flex items-center justify-center text-[#42A5F5]">
              {activeTab === "privacidad" && <ShieldCheck className="w-5 h-5 text-[#1E88E5]" />}
              {activeTab === "terminos" && <FileText className="w-5 h-5 text-[#1E88E5]" />}
              {activeTab === "compliance" && <Scale className="w-5 h-5 text-[#1E88E5]" />}
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-white font-heading">
                {activeTab === "privacidad" && "Aviso de Privacidad Integral"}
                {activeTab === "terminos" && "Términos y Condiciones de Uso"}
                {activeTab === "compliance" && "Código de Compliance, Ética & Gobierno"}
              </h2>
              <p className="text-xs text-[#8C8C8C]">
                {SITE_CONFIG.name} — SySo Co. • Vigente a partir de 2026
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Link
              href={`/${activeTab}`}
              target="_blank"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-white/10 text-xs text-[#8C8C8C] hover:text-white hover:bg-white/5 transition-colors"
              title="Abrir en página completa"
            >
              <span>Página completa</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-[#8C8C8C] hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Cerrar modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-white/10 px-6 sm:px-8 bg-[#111317]">
          <button
            onClick={() => setActiveTab("privacidad")}
            className={`py-3 px-4 text-xs sm:text-sm font-medium border-b-2 transition-all ${
              activeTab === "privacidad"
                ? "border-[#1E88E5] text-[#42A5F5]"
                : "border-transparent text-[#8C8C8C] hover:text-white"
            }`}
          >
            Aviso de Privacidad
          </button>
          <button
            onClick={() => setActiveTab("terminos")}
            className={`py-3 px-4 text-xs sm:text-sm font-medium border-b-2 transition-all ${
              activeTab === "terminos"
                ? "border-[#1E88E5] text-[#42A5F5]"
                : "border-transparent text-[#8C8C8C] hover:text-white"
            }`}
          >
            Términos y Condiciones
          </button>
          <button
            onClick={() => setActiveTab("compliance")}
            className={`py-3 px-4 text-xs sm:text-sm font-medium border-b-2 transition-all ${
              activeTab === "compliance"
                ? "border-[#1E88E5] text-[#42A5F5]"
                : "border-transparent text-[#8C8C8C] hover:text-white"
            }`}
          >
            Compliance & Ética
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto px-6 sm:px-8 py-6 text-sm text-[#D9D9D9] leading-relaxed space-y-6">
          {activeTab === "privacidad" && <PrivacyContent />}
          {activeTab === "terminos" && <TermsContent />}
          {activeTab === "compliance" && <ComplianceContent />}
        </div>

        {/* Footer info bar */}
        <div className="px-6 sm:px-8 py-4 bg-[#111317] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#8C8C8C]">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-[#1E88E5]" />
              {SITE_CONFIG.contactEmail}
            </span>
            <span className="hidden sm:inline">|</span>
            <span className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-[#1E88E5]" />
              {SITE_CONFIG.phone}
            </span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-xl bg-white/10 hover:bg-white/15 text-white transition-colors text-xs font-medium"
          >
            Cerrar ventana
          </button>
        </div>
      </div>
    </div>
  );
}

export function PrivacyContent() {
  return (
    <div className="space-y-5 text-sm">
      <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs text-[#8C8C8C]">
        <strong className="text-white">SYSOLAT 3.0 / SySo Co.</strong>, con domicilio digital y portal principal en{" "}
        <a href={SITE_CONFIG.domain} className="text-[#42A5F5] underline">{SITE_CONFIG.domain}</a>, en estricto cumplimiento con la 
        Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP) y estándares internacionales de privacidad, 
        pone a su disposición el presente Aviso de Privacidad Integral.
      </div>

      <section>
        <h3 className="text-base font-semibold text-white mb-2">1. Responsable del Tratamiento de Datos</h3>
        <p>
          SySo Co. es una plataforma empresarial que integra 10 divisiones de servicios especializados (Studio, Imagen, Eventos, Jurídico, 
          Cultura, Tecnología, Infraestructura, Inteligencia, Capital y Operaciones). Somos responsables de salvaguardar la confidencialidad, 
          integridad y tratamiento legítimo de la información que usted o su organización nos proporcione.
        </p>
      </section>

      <section>
        <h3 className="text-base font-semibold text-white mb-2">2. Datos Personales Recabados</h3>
        <p>Recabamos únicamente los datos necesarios para brindar asesoría y diagnósticos estratégicos:</p>
        <ul className="list-disc pl-5 mt-2 space-y-1 text-[#8C8C8C]">
          <li><strong className="text-white">Datos de Identificación y Contacto:</strong> Nombre completo, correo corporativo, teléfono directo y WhatsApp.</li>
          <li><strong className="text-white">Datos Corporativos:</strong> Empresa o razón social, sector industrial, cargo directivo (CEO, Director General, etc.) y número de colaboradores.</li>
          <li><strong className="text-white">Datos Operativos y de Proyecto:</strong> Objetivos de transformación, áreas de interés (tecnología, branding, finanzas, legal) y notas diagnósticas provistas voluntariamente.</li>
        </ul>
      </section>

      <section>
        <h3 className="text-base font-semibold text-white mb-2">3. Finalidades Primarias y Secundarias</h3>
        <p>Los datos recabados serán utilizados para las siguientes finalidades primarias indispensables:</p>
        <ul className="list-disc pl-5 mt-2 space-y-1 text-[#8C8C8C]">
          <li>Coordinar reuniones ejecutivas y diagnósticos 360° solicitados a través del portal.</li>
          <li>Diseñar propuestas de solución e integración con las divisiones correspondientes del ecosistema.</li>
          <li>Formalizar contratos de prestación de servicios, acuerdos de confidencialidad (NDA) y facturación fiscal.</li>
        </ul>
      </section>

      <section>
        <h3 className="text-base font-semibold text-white mb-2">4. Derechos ARCO y Mecanismos de Contacto</h3>
        <p>
          Usted tiene derecho a ejercer en cualquier momento sus derechos de <strong>Acceso, Rectificación, Cancelación y Oposición (ARCO)</strong>, 
          así como a revocar el consentimiento otorgado. Para ejercerlos, basta con enviar una solicitud formal por escrito al correo institucional:
        </p>
        <div className="mt-3 p-3 rounded-xl bg-[#1E88E5]/10 border border-[#1E88E5]/20 text-xs font-mono text-white">
          Oficial de Privacidad: <a href={`mailto:${SITE_CONFIG.contactEmail}`} className="text-[#42A5F5] underline">{SITE_CONFIG.contactEmail}</a> con el asunto &quot;Solicitud ARCO - [Nombre / Empresa]&quot;.
        </div>
      </section>

      <section>
        <h3 className="text-base font-semibold text-white mb-2">5. Medidas de Seguridad y No Transferencia</h3>
        <p>
          Sus datos corporativos no se venden, alquilan ni transfieren a terceros ajenos a la prestación de los servicios solicitados dentro del ecosistema SySo Co. 
          Implementamos protocolos de cifrado TLS/SSL, bases de datos con control estricto de accesos y acuerdos contractuales de confidencialidad con todo nuestro personal.
        </p>
      </section>
    </div>
  );
}

export function TermsContent() {
  return (
    <div className="space-y-5 text-sm">
      <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs text-[#8C8C8C]">
        Bienvenido a <strong className="text-white">SYSOLAT 3.0 (SySo Co.)</strong>. El acceso y uso del portal principal{" "}
        <a href={SITE_CONFIG.domain} className="text-[#42A5F5] underline">{SITE_CONFIG.domain}</a> y cualquiera de sus subsitios 
        y MiniApps afiliadas se rige por los presentes Términos y Condiciones.
      </div>

      <section>
        <h3 className="text-base font-semibold text-white mb-2">1. Naturaleza de la Plataforma</h3>
        <p>
          SySo Co. es una plataforma empresarial que integra soluciones estratégicas, tecnológicas, operativas, legales y financieras 
          a través de 10 divisiones especializadas. El material informativo publicado en el sitio web tiene como propósito presentar 
          capacidades corporativas y no constituye por sí mismo un compromiso contractual definitivo hasta la suscripción de un Contrato Maestro de Servicios (MSA).
        </p>
      </section>

      <section>
        <h3 className="text-base font-semibold text-white mb-2">2. Propiedad Intelectual y Derechos Reservados</h3>
        <p>
          Todo el contenido de este sitio web, incluyendo de manera enunciativa más no limitativa: logotipos, isotipos, arquitectura gráfica, 
          código fuente, metodologías (&quot;Crear, Fortalecer, Transformar, Escalar&quot;), textos, imágenes y marcas de las divisiones y MiniApps, 
          son propiedad exclusiva de SySo Co. Queda estrictamente prohibida su copia, ingeniería inversa o reproducción no autorizada.
        </p>
      </section>

      <section>
        <h3 className="text-base font-semibold text-white mb-2">3. Uso Aceptable del Portal</h3>
        <p>El usuario se compromete a:</p>
        <ul className="list-disc pl-5 mt-2 space-y-1 text-[#8C8C8C]">
          <li>Proporcionar información fidedigna y veraz en los formularios de diagnóstico y contacto.</li>
          <li>No emplear herramientas automatizadas que comprometan el rendimiento, la disponibilidad o la ciberseguridad del servidor.</li>
          <li>Utilizar los enlaces a las MiniApps conforme a los términos particulares de cada plataforma.</li>
        </ul>
      </section>

      <section>
        <h3 className="text-base font-semibold text-white mb-2">4. Acuerdos de Confidencialidad (NDA)</h3>
        <p>
          Toda sesión de diagnóstico o análisis de información sensible de empresas prospecto se encuentra amparada por acuerdos de 
          confidencialidad mutua que pueden formalizarse previamente mediante nuestra división jurídica.
        </p>
      </section>

      <section>
        <h3 className="text-base font-semibold text-white mb-2">5. Legislación Aplicable y Jurisdicción</h3>
        <p>
          Para la interpretación y cumplimiento de estos términos, las partes se someten a la legislación mercantil aplicable en los Estados Unidos Mexicanos, 
          con renuncia expresa a cualquier otro fuero que pudiera corresponderles por razón de sus domicilios presentes o futuros.
        </p>
      </section>
    </div>
  );
}

export function ComplianceContent() {
  return (
    <div className="space-y-5 text-sm">
      <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs text-[#8C8C8C]">
        En <strong className="text-white">SySo Co.</strong> regimos nuestras operaciones bajo los más altos estándares de integridad, 
        transparencia, anticorrupción y responsabilidad social corporativa, alineados a lineamientos de firmas de consultoría global de clase mundial.
      </div>

      <section>
        <h3 className="text-base font-semibold text-white mb-2">1. Cero Tolerancia al Soborno y a la Corrupción</h3>
        <p>
          SySo Co. prohíbe categóricamente cualquier forma de soborno, extorsión, pago de facilitación o dádiva en la interacción con entidades públicas, 
          privadas, clientes, proveedores o socios de negocio. Todas las operaciones comerciales se registran y auditan de forma transparente y comprobable.
        </p>
      </section>

      <section>
        <h3 className="text-base font-semibold text-white mb-2">2. Gobierno Corporativo y Conflicto de Intereses</h3>
        <p>
          Cada una de las 10 divisiones de SySo Co. cuenta con directrices claras para evitar y declarar oportunamente cualquier posible 
          conflicto de interés que pudiera comprometer la objetividad técnica o la lealtad profesional debida a nuestros clientes.
        </p>
      </section>

      <section>
        <h3 className="text-base font-semibold text-white mb-2">3. Seguridad de la Información y Cumplimiento Normativo</h3>
        <p>
          Nuestras divisiones de Jurídico, Tecnología e Infraestructura supervisan continuamente que el despliegue de soluciones cumpla con 
          la normativa fiscal vigente, estándares de protección al consumidor, normas de seguridad informática (cifrado, copias de respaldo y redundancia) 
          y las leyes laborales aplicables para nuestros equipos multidisciplinarios.
        </p>
      </section>

      <section>
        <h3 className="text-base font-semibold text-white mb-2">4. Canal Ético y Línea de Denuncia Confidencial</h3>
        <p>
          Ponemos a disposición de colaboradores, clientes, aliados y terceros un canal confidencial y libre de represalias para reportar cualquier 
          conducta contraria a nuestro código de ética o sospecha de irregularidades:
        </p>
        <div className="mt-3 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-white">
          Comité de Ética SySo Co.: <a href={`mailto:${SITE_CONFIG.contactEmail}`} className="text-emerald-400 underline font-mono">{SITE_CONFIG.contactEmail}</a> con el asunto &quot;CONFIDENCIAL: Canal Ético&quot;.
        </div>
      </section>

      <section>
        <h3 className="text-base font-semibold text-white mb-2">5. Compromiso ESG (Ambiental, Social y Gobernanza)</h3>
        <p>
          Fomentamos activamente prácticas sostenibles en el diseño de espacios corporativos (División Imagen), inclusión y bienestar laboral 
          (División Cultura) y eficiencia energética en infraestructura digital (División Infraestructura y Tecnología).
        </p>
      </section>
    </div>
  );
}
