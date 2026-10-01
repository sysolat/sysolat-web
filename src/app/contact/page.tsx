"use client";

import React, { useState } from "react";
import { Mail, Phone, Calendar, Send, CheckCircle2, AlertCircle, MessageCircle, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { PrimaryButton } from "@/components/ui/button";
import { SITE_CONFIG } from "@/lib/constants";
import { DIVISIONS } from "@/lib/divisions";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    role: "CEO / Director General",
    divisionInterest: "Diagnóstico General",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || "Error al enviar el formulario.");
      }

      setStatus("success");
    } catch (err: unknown) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Error inesperado");
    }
  };

  return (
    <div className="pt-32 pb-24 bg-[#111111] min-h-screen">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="primary" className="mb-4">
            Alianza Estratégica
          </Badge>
          <h1 className="text-4xl sm:text-6xl font-bold text-white tracking-tight font-heading mb-6">
            Hablemos de la Transformación de tu Empresa
          </h1>
          <p className="text-base sm:text-lg text-[#8C8C8C] leading-relaxed">
            Agenda una reunión privada para evaluar tus retos de negocio y diseñar una solución integrada con las divisiones de SySo Co.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
          {/* Contact Details Card */}
          <div className="lg:col-span-5 flex flex-col justify-between p-8 rounded-[32px] bg-[#171A20] border border-white/10">
            <div>
              <h2 className="text-2xl font-bold text-white font-heading mb-4">
                SySo Co. Headquarters
              </h2>
              <p className="text-sm text-[#8C8C8C] leading-relaxed mb-8">
                Estamos listos para atender a dueños de negocio, directores generales y comités ejecutivos en México y Latinoamérica.
              </p>

              <div className="space-y-4">
                {/* Email row with explicit mailto */}
                <a
                  href={`mailto:${SITE_CONFIG.contactEmail}`}
                  className="group flex items-start gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-[#1E88E5]/40 hover:bg-[#1E88E5]/5 transition-all duration-300"
                  aria-label={`Enviar correo a ${SITE_CONFIG.contactEmail}`}
                >
                  <div className="w-11 h-11 rounded-xl bg-[#1E88E5]/15 border border-[#1E88E5]/30 flex items-center justify-center text-[#42A5F5] group-hover:scale-105 transition-transform flex-shrink-0">
                    <Mail className="w-5 h-5 text-[#1E88E5]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[11px] uppercase text-[#8C8C8C] font-semibold tracking-wider flex items-center justify-between">
                      <span>Correo Electrónico</span>
                      <span className="text-[10px] font-mono text-[#42A5F5] opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-0.5">
                        mailto <ArrowUpRight className="w-3 h-3" />
                      </span>
                    </div>
                    <div className="text-sm sm:text-base font-semibold text-white group-hover:text-[#42A5F5] transition-colors truncate">
                      {SITE_CONFIG.contactEmail}
                    </div>
                    <span className="text-xs text-[#8C8C8C] block mt-0.5">
                      Haz clic para abrir tu cliente de correo
                    </span>
                  </div>
                </a>

                {/* WhatsApp row with explicit wa.me */}
                <a
                  href={SITE_CONFIG.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-emerald-500/40 hover:bg-emerald-500/5 transition-all duration-300"
                  aria-label={`Abrir chat de WhatsApp al ${SITE_CONFIG.phone}`}
                >
                  <div className="w-11 h-11 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform flex-shrink-0">
                    <MessageCircle className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[11px] uppercase text-[#8C8C8C] font-semibold tracking-wider flex items-center justify-between">
                      <span>Teléfono / WhatsApp</span>
                      <span className="text-[10px] font-mono text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-0.5">
                        wa.me <ArrowUpRight className="w-3 h-3" />
                      </span>
                    </div>
                    <div className="text-sm sm:text-base font-semibold text-white group-hover:text-emerald-400 transition-colors truncate">
                      {SITE_CONFIG.phone}
                    </div>
                    <span className="text-xs text-[#8C8C8C] block mt-0.5">
                      Haz clic para chatear directamente por WhatsApp
                    </span>
                  </div>
                </a>

                {/* Horario de atencion */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                  <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#42A5F5] flex-shrink-0">
                    <Calendar className="w-5 h-5 text-[#1E88E5]" />
                  </div>
                  <div>
                    <div className="text-[11px] uppercase text-[#8C8C8C] font-semibold tracking-wider">
                      Horario de Atención
                    </div>
                    <div className="text-sm sm:text-base font-semibold text-white mt-0.5">
                      {SITE_CONFIG.schedule}
                    </div>
                    <span className="text-xs text-[#8C8C8C] block mt-0.5">
                      Respuesta en menos de 24 horas hábiles
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 rounded-2xl bg-[#111111]/60 border border-white/5">
              <div className="text-xs uppercase tracking-wider text-[#42A5F5] font-semibold mb-1">
                Garantía de Confidencialidad
              </div>
              <p className="text-xs text-[#8C8C8C] leading-relaxed">
                Toda la información compartida está protegida bajo estándares estrictos de confidencialidad y acuerdos NDA previa solicitud.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-[32px] bg-[#171A20] border border-white/10">
            {status === "success" ? (
              <div className="py-16 text-center">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto mb-6">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 font-heading">
                  ¡Solicitud Recibida con Éxito!
                </h3>
                <p className="text-sm text-[#8C8C8C] max-w-md mx-auto mb-8">
                  Uno de nuestros directores estratégicos se comunicará contigo en menos de 24 horas hábiles para coordinar la reunión diagnóstica.
                </p>
                <PrimaryButton onClick={() => setStatus("idle")}>
                  Enviar otro mensaje
                </PrimaryButton>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {status === "error" && (
                  <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#8C8C8C] mb-2">
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ej. Roberto Garza"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#111111] border border-white/10 text-white placeholder-[#8C8C8C]/50 focus:outline-none focus:border-[#1E88E5]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#8C8C8C] mb-2">
                      Correo Corporativo *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="rgarza@empresa.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#111111] border border-white/10 text-white placeholder-[#8C8C8C]/50 focus:outline-none focus:border-[#1E88E5]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#8C8C8C] mb-2">
                      Teléfono / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+52 ..."
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#111111] border border-white/10 text-white placeholder-[#8C8C8C]/50 focus:outline-none focus:border-[#1E88E5]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#8C8C8C] mb-2">
                      Empresa u Organización *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Nombre de tu empresa"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#111111] border border-white/10 text-white placeholder-[#8C8C8C]/50 focus:outline-none focus:border-[#1E88E5]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#8C8C8C] mb-2">
                      Tu Rol Directivo
                    </label>
                    <select
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#111111] border border-white/10 text-white focus:outline-none focus:border-[#1E88E5]"
                    >
                      <option value="CEO / Director General">CEO / Director General</option>
                      <option value="Dueño de Negocio / Fundador">Dueño de Negocio / Fundador</option>
                      <option value="Director de Operaciones (COO)">Director de Operaciones (COO)</option>
                      <option value="Director de Tecnología (CTO)">Director de Tecnología (CTO)</option>
                      <option value="Director Financiero (CFO)">Director Financiero (CFO)</option>
                      <option value="Otro">Otro cargo directivo</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#8C8C8C] mb-2">
                      Área de Interés Principal
                    </label>
                    <select
                      value={formData.divisionInterest}
                      onChange={(e) => setFormData({ ...formData, divisionInterest: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#111111] border border-white/10 text-white focus:outline-none focus:border-[#1E88E5]"
                    >
                      <option value="Diagnóstico General">Diagnóstico General (Ecosistema Completo)</option>
                      {DIVISIONS.map((d) => (
                        <option key={d.id} value={d.name}>
                          División {d.name} ({d.tagline})
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#8C8C8C] mb-2">
                    Detalles del reto o meta empresarial *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Cuéntanos brevemente sobre la situación actual de tu empresa, objetivos o áreas críticas a resolver..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#111111] border border-white/10 text-white placeholder-[#8C8C8C]/50 focus:outline-none focus:border-[#1E88E5]"
                  />
                </div>

                <PrimaryButton
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full py-4 text-base justify-center"
                >
                  <Send className="w-4 h-4 mr-2" />
                  <span>{status === "loading" ? "Procesando..." : "Solicitar Reunión Estratégica"}</span>
                </PrimaryButton>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
