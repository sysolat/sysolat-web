import React from "react";
import { Check, Sparkles, Shield, Cpu, Target, Rocket } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function ResponseSection() {
  const values = [
    {
      title: "Transformación Real",
      desc: "No vendemos consultoría teórica; reconfiguramos tu modelo de negocio de punta a punta.",
    },
    {
      title: "Escalabilidad Acelerada",
      desc: "Estructuras, tecnología y procesos preparados para soportar crecimientos de 10x sin colapsar.",
    },
    {
      title: "Innovación & IA",
      desc: "Automatización de vanguardia y agentes inteligentes integrados en tu operación cotidiana.",
    },
    {
      title: "Productividad Máxima",
      desc: "Eliminamos duplicidades y sincronizamos talento, espacios y software en un solo engranaje.",
    },
    {
      title: "Rentabilidad Medible",
      desc: "Cada intervención del ecosistema está anclada a KPIs financieros y retorno de inversión claro.",
    },
    {
      title: "Un Solo Aliado Responsable",
      desc: "Un solo punto de contacto con responsabilidad integral sobre los resultados corporativos.",
    },
  ];

  return (
    <section className="relative py-24 bg-[#111111] overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#1E88E5]/10 blur-[150px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <Badge variant="primary" className="mb-4">
              <Sparkles className="w-3.5 h-3.5 mr-1 text-[#1E88E5]" />
              La Respuesta SySo Co.
            </Badge>
            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight font-heading mb-6 leading-tight">
              Evoluciona a un Ecosistema que lo resuelve todo
            </h2>
            <p className="text-base sm:text-lg text-[#8C8C8C] leading-relaxed mb-6">
              En lugar de contratar servicios por separado, te asocias con una plataforma integral de negocios inspirada en los estándares de las mayores firmas globales (Microsoft, Accenture, IBM Consulting).
            </p>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 mb-8">
              <div className="text-xs uppercase tracking-wider text-[#42A5F5] font-semibold mb-2">
                Nuestra Promesa de Valor
              </div>
              <p className="text-white text-base sm:text-lg font-medium italic">
                &ldquo;No vendemos marketing, software o eventos sueltos. Entregamos transformación, productividad y escalabilidad continua.&rdquo;
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {values.map((val, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#171A20] border border-white/10 hover:border-[#1E88E5]/40 transition-colors"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-5 h-5 rounded-full bg-[#1E88E5]/20 flex items-center justify-center text-[#42A5F5]">
                    <Check className="w-3 h-3 text-[#1E88E5]" />
                  </div>
                  <h3 className="text-base font-semibold text-white">{val.title}</h3>
                </div>
                <p className="text-xs sm:text-sm text-[#8C8C8C] leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
