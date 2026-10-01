import React from "react";
import Link from "next/link";
import { ArrowLeft, Compass } from "lucide-react";
import { PrimaryButton } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#111111] flex flex-col items-center justify-center px-6 py-24 text-center">
      <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#42A5F5] mb-6">
        <Compass className="w-8 h-8 text-[#1E88E5]" />
      </div>

      <h1 className="text-6xl sm:text-8xl font-bold font-heading text-white tracking-tight mb-4">
        404
      </h1>

      <h2 className="text-xl sm:text-2xl font-semibold text-white mb-2">
        Coordenada No Encontrada en el Ecosistema
      </h2>

      <p className="text-sm sm:text-base text-[#8C8C8C] max-w-md mx-auto mb-8">
        La ruta a la que intentas acceder no existe o fue reubicada en una de nuestras 10 divisiones especializadas.
      </p>

      <Link href="/">
        <PrimaryButton>
          <ArrowLeft className="w-4 h-4 mr-2" />
          <span>Volver al Inicio del Ecosistema</span>
        </PrimaryButton>
      </Link>
    </div>
  );
}
