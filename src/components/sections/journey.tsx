import React from "react";
import { UserCheck, Network, Activity, Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function JourneySection() {
  const journeySteps = [
    {
      icon: UserCheck,
      title: "1. Diagnóstico Holístico 360°",
      desc: "Analizamos tu empresa en sus 10 dimensiones: finanzas, legal, procesos, tecnología, cultura y marca.",
    },
    {
      icon: Network,
      title: "2. Activación de Divisiones Clave",
      desc: "Convocamos únicamente las divisiones especializadas necesarias para tu meta de transformación inmediata.",
    },
    {
      icon: Activity,
      title: "3. Ejecución Sincronizada",
      desc: "Tecnología, marketing y operaciones trabajan bajo el mismo roadmap sin fricciones ni retrasos entre proveedores.",
    },
    {
      icon: Award,
      title: "4. Supervisión y Escalamiento Continuo",
      desc: "Reporteo unificado de KPIs, tableros directivos y evolución constante de la empresa hacia nuevos mercados.",
    },
  ];

  return (
    <section className="relative py-24 bg-[#111111] border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="primary" className="mb-4">
            Customer Journey
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight font-heading mb-6">
            La Experiencia de Colaborar{" "}
            <br className="hidden sm:inline" />
            con{" "}
            <span className="bg-gradient-to-r from-[#1E88E5] via-[#42A5F5] to-white bg-clip-text text-transparent">
              SySo Co.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#8C8C8C] leading-relaxed">
            Desde el primer contacto directivo hasta el despliegue a escala: un flujo transparente, riguroso y sin sorpresas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {journeySteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-[24px] bg-[#171A20] border border-white/10 hover:border-[#1E88E5]/40 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-[#1E88E5]/10 border border-[#1E88E5]/30 flex items-center justify-center text-[#42A5F5] mb-6">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-sm text-[#8C8C8C] leading-relaxed">{step.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
