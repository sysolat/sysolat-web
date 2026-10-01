"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { X, ArrowRight, ArrowUpRight } from "lucide-react";
import { MAIN_NAV_ITEMS, CTA_CONFIG } from "@/lib/navigation";
import { PrimaryButton } from "@/components/ui/button";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  isDivision?: boolean;
  divisionBadge?: string;
  divisionCta?: string;
}

export function MobileMenu({
  isOpen,
  onClose,
  isDivision = false,
  divisionBadge = "",
  divisionCta = "",
}: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 bottom-0 w-full max-w-xs bg-[#171A20] border-l border-white/10 p-6 flex flex-col justify-between shadow-2xl">
        <div>
          <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-8">
            <a
              href={isDivision ? "https://sysolat.com" : "/"}
              onClick={onClose}
              className="inline-block py-1"
            >
              <div className="relative h-8 w-40">
                <Image
                  src="/logos/logo_syso_full.png"
                  alt="SySo Co."
                  width={210}
                  height={50}
                  className="object-contain object-left w-auto h-8"
                  priority
                />
              </div>
            </a>
            <button
              onClick={onClose}
              aria-label="Cerrar menú"
              className="p-2 rounded-full text-[#8C8C8C] hover:text-white hover:bg-white/5"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {isDivision ? (
            <div className="flex flex-col gap-4">
              <span className="text-xs font-mono font-semibold text-[#42A5F5] uppercase tracking-wider mb-2">
                {divisionBadge} • División Especializada
              </span>
              <a
                href="#servicios"
                onClick={onClose}
                className="text-lg font-medium text-[#D9D9D9] hover:text-[#42A5F5] transition-colors py-2 flex items-center justify-between"
              >
                <span>Servicios</span>
                <ArrowRight className="w-4 h-4 text-[#1E88E5]" />
              </a>
              <a
                href="#metodologia"
                onClick={onClose}
                className="text-lg font-medium text-[#D9D9D9] hover:text-[#42A5F5] transition-colors py-2 flex items-center justify-between"
              >
                <span>Metodología</span>
                <ArrowRight className="w-4 h-4 text-[#1E88E5]" />
              </a>
              <a
                href="#diagnostico"
                onClick={onClose}
                className="text-lg font-medium text-[#D9D9D9] hover:text-[#42A5F5] transition-colors py-2 flex items-center justify-between"
              >
                <span>Diagnóstico</span>
                <ArrowRight className="w-4 h-4 text-[#1E88E5]" />
              </a>
              <div className="pt-4 border-t border-white/10 mt-2">
                <a
                  href="https://sysolat.com"
                  onClick={onClose}
                  className="text-base font-semibold text-[#42A5F5] hover:text-white transition-colors py-2 flex items-center justify-between"
                >
                  <span>Volver a sysolat.com</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ) : (
            <nav className="flex flex-col gap-4">
              {MAIN_NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className="text-lg font-medium text-[#D9D9D9] hover:text-[#42A5F5] transition-colors py-2 flex items-center justify-between group"
                >
                  <span>{item.label}</span>
                  <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#1E88E5]" />
                </Link>
              ))}
            </nav>
          )}
        </div>

        <div className="pt-8 border-t border-white/10">
          {isDivision ? (
            <a href="#diagnostico" onClick={onClose} className="w-full block">
              <PrimaryButton className="w-full justify-center">
                {divisionCta || "Diagnóstico"}
              </PrimaryButton>
            </a>
          ) : (
            <Link href={CTA_CONFIG.href} onClick={onClose} className="w-full block">
              <PrimaryButton className="w-full justify-center">
                {CTA_CONFIG.label}
              </PrimaryButton>
            </Link>
          )}
          <p className="text-xs text-[#8C8C8C] text-center mt-4">
            SYSOLAT 3.0 &copy; {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </div>
  );
}
