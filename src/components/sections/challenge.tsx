import React from "react";
import { AlertCircle, Layers, ZapOff, DollarSign, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function ChallengeSection() {
  const painPoints = [
    {
      icon: Layers,
      title: "Múltiples Proveedores Desconectados",
      description:
        "Contratar agencias, despachos legales, firmas de TI y consultores que no se comunican entre sí fragmenta la estrategia corporativa.",
    },
    {
      icon: DollarSign,
      title: "Costos Inflados y Doble Gasto",
      description:
        "Pagar fees redundantes a intermediarios que no entienden el panorama completo de tu negocio reduce tu margen y rentabilidad.",
    },
    {
      icon: ZapOff,
      title: "Falta de Alineación y Fricción Operativa",
      description:
        "Cuando el software no dialoga con las operaciones, ni la marca con la cultura de la empresa, el crecimiento se detiene.",
    },
    {
      icon: Clock,
      title: "Pérdida Crítica de Tiempo Directivo",
      description:
        "Los CEOs y directores pasan el 40% de su tiempo coordinando proveedores en lugar de liderar el escalamiento del negocio.",
    },
  ];

  return (
    <section className="relative py-24 bg-[#111111] border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4">
            <AlertCircle className="w-3.5 h-3.5 text-amber-400 mr-1" />
            El Desafío Empresarial Actual
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight font-heading mb-6">
            La fragmentación es el principal enemigo del crecimiento
          </h2>
          <p className="text-base sm:text-lg text-[#8C8C8C] leading-relaxed">
            Las organizaciones tradicionales operan contratando servicios aislados. El resultado es falta de control, proveedores que se culpan mutuamente y una visión corporativa rota.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {painPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-[24px] bg-[#171A20]/60 border border-white/5 hover:border-red-500/20 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 mb-6">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{point.title}</h3>
                <p className="text-sm text-[#8C8C8C] leading-relaxed">{point.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
