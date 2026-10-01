import React from "react";
import { Compass, Lightbulb, Hammer, TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function MethodologySection() {
  const steps = [
    {
      phase: "01",
      name: "Crear",
      icon: Lightbulb,
      tagline: "Génesis & Fundación",
      desc: "Concebimos la identidad, la infraestructura de blindaje legal y la base operativa de nuevos modelos de negocio o divisiones corporativas.",
    },
    {
      phase: "02",
      name: "Fortalecer",
      icon: Hammer,
      tagline: "Consolidación & Procesos",
      desc: "Robustecemos las áreas críticas: finanzas, cultura de equipos, infraestructura de redes y digitalización de flujos de trabajo.",
    },
    {
      phase: "03",
      name: "Transformar",
      icon: Compass,
      tagline: "Innovación & IA",
      desc: "Implementamos agentes inteligentes, modernización tecnológica y reingeniería de imagen y espacios para liderar la categoría.",
    },
    {
      phase: "04",
      name: "Escalar",
      icon: TrendingUp,
      tagline: "Expansión & Capital",
      desc: "Apalancamos rondas de capital, replicabilidad operativa y automatización total para conquistar mercados a escala masiva.",
    },
  ];

  return (
    <section id="metodologia" className="relative py-24 bg-[#111111] border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <Badge variant="primary" className="mb-4">
            <Compass className="w-3.5 h-3.5 mr-1 text-[#1E88E5]" />
            Metodología del Ecosistema
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight font-heading mb-6">
            El Ciclo Estratégico de Evolución Continua
          </h2>
          <p className="text-base sm:text-lg text-[#8C8C8C] leading-relaxed">
            Una ruta de 4 etapas probada en múltiples sectores para diagnosticar, optimizar y catapultar organizaciones medianas y corporativos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="relative p-8 rounded-[28px] bg-[#171A20]/80 border border-white/10 hover:border-[#1E88E5]/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-3xl font-bold font-heading text-white/20">
                      {step.phase}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-[#1E88E5]/10 border border-[#1E88E5]/30 flex items-center justify-center text-[#42A5F5]">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <span className="text-xs uppercase tracking-wider text-[#1E88E5] font-semibold">
                    {step.tagline}
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-1 mb-4">
                    {step.name}
                  </h3>

                  <p className="text-sm text-[#8C8C8C] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
