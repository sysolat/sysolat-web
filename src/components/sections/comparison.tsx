import React from "react";
import { Check, X, ShieldAlert, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function ComparisonSection() {
  const comparisonRows = [
    {
      factor: "Estructura de Contratación",
      traditional: "5 a 10 contratos distintos con agencias independientes",
      sysolat: "1 Solo Contrato Maestro Integral con SySo Co.",
    },
    {
      factor: "Alineación Estratégica",
      traditional: "Cada proveedor empuja su propia agenda e intereses",
      sysolat: "Mismo cerebro estratégico coordinando todas las divisiones",
    },
    {
      factor: "Responsabilidad y Garantías",
      traditional: "Culpas cruzadas cuando una integración falla",
      sysolat: "Responsabilidad total y unificada de principio a fin",
    },
    {
      factor: "Interoperabilidad Tecnológica",
      traditional: "Silos de datos y software incompatible que no conversa",
      sysolat: "Infraestructura, APIs y automatización de IA conectadas",
    },
    {
      factor: "Eficiencia de Costos",
      traditional: "Márgenes duplicados, intermediación y sobrecostos",
      sysolat: "Economías de escala y máxima eficiencia en inversión",
    },
  ];

  return (
    <section className="relative py-24 bg-[#111111] border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="primary" className="mb-4">
            Comparativa de Mercado
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight font-heading mb-6">
            Por Qué el Modelo Tradicional Ha Muerto
          </h2>
          <p className="text-base sm:text-lg text-[#8C8C8C] leading-relaxed">
            La brecha entre contratar servicios aislados y operar dentro de un Ecosistema de Soluciones de nivel corporativo.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[640px]">
            <thead>
              <tr className="border-b border-white/10">
                <th className="py-5 px-6 text-sm font-semibold uppercase tracking-wider text-[#8C8C8C] w-1/3">
                  Criterio
                </th>
                <th className="py-5 px-6 text-sm font-semibold uppercase tracking-wider text-red-400 w-1/3">
                  Modelo Tradicional Disperso
                </th>
                <th className="py-5 px-6 text-sm font-semibold uppercase tracking-wider text-[#42A5F5] w-1/3 bg-[#1E88E5]/5 rounded-t-2xl">
                  Ecosistema SYSOLAT 3.0
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {comparisonRows.map((row, idx) => (
                <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                  <td className="py-5 px-6 text-sm font-semibold text-white">
                    {row.factor}
                  </td>
                  <td className="py-5 px-6 text-sm text-[#8C8C8C] flex items-center gap-2">
                    <X className="w-4 h-4 text-red-400 flex-shrink-0" />
                    <span>{row.traditional}</span>
                  </td>
                  <td className="py-5 px-6 text-sm text-white font-medium bg-[#1E88E5]/5">
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#1E88E5] flex-shrink-0" />
                      <span>{row.sysolat}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
