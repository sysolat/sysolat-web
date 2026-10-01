import React from "react";
import { TrendingUp, Award, Clock, DollarSign } from "lucide-react";
import { Counter } from "@/components/ui/counter";
import { Badge } from "@/components/ui/badge";

export function ResultsSection() {
  const metrics = [
    {
      value: "+45%",
      label: "Incremento en Eficiencia Operativa",
      desc: "Mediante la sincronización de procesos y agentes de IA.",
    },
    {
      value: "10x",
      label: "Capacidad de Escalamiento",
      desc: "Arquitecturas preparadas para crecer sin duplicar costos fijos.",
    },
    {
      value: "-60%",
      label: "Tiempo de Coordinación Directiva",
      desc: "Un solo punto de contacto para todas las áreas empresariales.",
    },
    {
      value: "100%",
      label: "Blindaje & Continuidad",
      desc: "Garantía contractual, legal y tecnológica centralizada.",
    },
  ];

  return (
    <section className="relative py-24 bg-[#171A20]/50 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="primary" className="mb-4">
            Impacto Comprobado
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight font-heading mb-6">
            Resultados que Transforman Balances
          </h2>
          <p className="text-base sm:text-lg text-[#8C8C8C] leading-relaxed">
            Nuestros clientes no evalúan métricas aisladas; evalúan crecimiento de EBITDA, retención de talento y aceleración de cuota de mercado.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 rounded-[32px] border border-white/10 bg-[#171A20] p-8 md:p-12 shadow-2xl">
          {metrics.map((m, idx) => (
            <Counter
              key={idx}
              value={m.value}
              label={m.label}
              description={m.desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
