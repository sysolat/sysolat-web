"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, Shield, ChevronDown } from "lucide-react";
import { PrimaryButton, SecondaryButton } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#111111] pt-24 pb-16">
      {/* Background radial glow & mesh */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] sm:w-[1000px] h-[500px] bg-[#1E88E5]/15 blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#42A5F5]/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 py-20 flex flex-col items-center text-center">
        {/* Top Announcement Badge */}
        <div className="mb-6 animate-in fade-in slide-in-from-top-4 duration-500">
          <Badge variant="primary" className="py-1.5 px-4 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-[#1E88E5]" />
            SYSOLAT 3.0 • Ecosistema Integral de Soluciones Empresariales
          </Badge>
        </div>

        {/* Master Heading */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-white font-heading max-w-5xl leading-[1.1] mb-8">
          Un Ecosistema.
          <br />
          <span className="bg-gradient-to-r from-[#1E88E5] via-[#42A5F5] to-white bg-clip-text text-transparent">
            Todas las Soluciones.
          </span>
          <br />
          Un Solo Aliado Estratégico.
        </h1>

        {/* Subtitle / Proposition */}
        <p className="text-lg sm:text-xl text-[#8C8C8C] max-w-3xl leading-relaxed mb-10">
          Dejamos de ser una empresa de servicios aislados. Integramos{" "}
          <span className="text-[#D9D9D9] font-medium">Marca, Espacios, Protección, Personas, Tecnología, Inteligencia y Operaciones</span>{" "}
          para crear, transformar y escalar tu organización hacia su máximo potencial.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-16">
          <Link href="/contact" className="w-full sm:w-auto">
            <PrimaryButton className="w-full sm:w-auto text-base px-8 py-4">
              <span>Agendar Reunión Estratégica</span>
              <ArrowRight className="w-4 h-4" />
            </PrimaryButton>
          </Link>
          <Link href="/ecosystem" className="w-full sm:w-auto">
            <SecondaryButton className="w-full sm:w-auto text-base px-8 py-4">
              <span>Explorar el Ecosistema Orbital</span>
            </SecondaryButton>
          </Link>
        </div>

        {/* Scroll Indicator to Divisions */}
        <a
          href="#divisiones"
          className="pt-4 flex flex-col items-center gap-2 text-xs text-[#8C8C8C] hover:text-[#42A5F5] transition-all cursor-pointer group"
          aria-label="Ir a la sección de las 10 divisiones"
        >
          <span className="group-hover:text-white transition-colors">
            Descubre las 10 divisiones integradas
          </span>
          <ChevronDown className="w-4 h-4 animate-bounce text-[#1E88E5] group-hover:text-[#42A5F5] group-hover:scale-125 transition-transform" />
        </a>
      </div>
    </section>
  );
}
