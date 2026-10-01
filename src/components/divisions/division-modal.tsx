"use client";

import React from "react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Division } from "@/lib/divisions";
import { Modal } from "@/components/ui/modal";
import { PrimaryButton, SecondaryButton } from "@/components/ui/button";

interface DivisionModalProps {
  division: Division;
  isOpen: boolean;
  onClose: () => void;
}

export function DivisionModal({ division, isOpen, onClose }: DivisionModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={`${division.name} — SySo Co.`}
    >
      <div className="space-y-6">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-[#1E88E5]">
            {division.tagline}
          </span>
          <p className="text-lg text-white font-medium mt-1 leading-snug">
            {division.promise}
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-sm text-[#D9D9D9] leading-relaxed">
          {division.description}
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-[#8C8C8C] mb-3">
            Servicios y Capacidades Clave
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {division.services.map((service, index) => (
              <div
                key={index}
                className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#21252D]/60 border border-white/5 text-sm text-white"
              >
                <CheckCircle2 className="w-4 h-4 text-[#1E88E5] flex-shrink-0" />
                <span>{service}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-[#8C8C8C]">
            Portal dedicado:{" "}
            <a
              href={division.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#42A5F5] underline hover:text-white transition-colors"
            >
              {division.subdomain}
            </a>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <SecondaryButton onClick={onClose} className="w-full sm:w-auto">
              Cerrar
            </SecondaryButton>
            <a
              href={division.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <PrimaryButton className="w-full sm:w-auto">
                <span>Visitar Subsitio</span>
                <ArrowUpRight className="w-4 h-4" />
              </PrimaryButton>
            </a>
          </div>
        </div>
      </div>
    </Modal>
  );
}
