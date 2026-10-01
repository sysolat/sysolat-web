"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, ArrowUpRight } from "lucide-react";
import { MAIN_NAV_ITEMS, CTA_CONFIG } from "@/lib/navigation";
import { PrimaryButton } from "@/components/ui/button";
import { MobileMenu } from "./mobile-menu";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isStudio = pathname?.startsWith("/studio");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 w-full transition-all duration-300">
        <nav
          className={`mx-auto max-w-7xl px-6 sm:px-8 transition-all duration-300 ${
            isScrolled
              ? "py-3 bg-[#111111]/85 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20"
              : "py-5 bg-transparent"
          }`}
        >
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <div className="flex items-center gap-3">
              <a
                href={isStudio ? "https://sysolat.com" : "/"}
                className="inline-block group py-1"
                title={isStudio ? "Volver al Ecosistema Principal (sysolat.com)" : "Inicio"}
              >
                <div className="relative h-8 sm:h-9 w-40 sm:w-48 transition-transform duration-300 group-hover:scale-105">
                  <Image
                    src="/logos/logo_syso_full.png"
                    alt="SySo Co."
                    width={210}
                    height={50}
                    className="object-contain object-left w-auto h-8 sm:h-9"
                    priority
                  />
                </div>
              </a>
              {isStudio && (
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold bg-[#1E88E5]/20 text-[#42A5F5] border border-[#1E88E5]/40 tracking-wider">
                  STUDIO
                </span>
              )}
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-8">
              {isStudio ? (
                <>
                  <a
                    href="#servicios"
                    className="text-sm font-medium text-[#D9D9D9] hover:text-[#42A5F5] transition-colors duration-200"
                  >
                    Servicios
                  </a>
                  <a
                    href="#metodologia"
                    className="text-sm font-medium text-[#D9D9D9] hover:text-[#42A5F5] transition-colors duration-200"
                  >
                    Metodología
                  </a>
                  <a
                    href="#diagnostico"
                    className="text-sm font-medium text-[#D9D9D9] hover:text-[#42A5F5] transition-colors duration-200"
                  >
                    Diagnóstico
                  </a>
                  <a
                    href="https://sysolat.com"
                    className="text-sm font-semibold text-[#42A5F5] hover:text-white transition-colors duration-200 flex items-center gap-1 group"
                  >
                    <span>sysolat.com</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </>
              ) : (
                MAIN_NAV_ITEMS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-sm font-medium text-[#D9D9D9] hover:text-[#42A5F5] transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                ))
              )}
            </div>

            {/* CTA & Mobile Trigger */}
            <div className="flex items-center gap-4">
              <div className="hidden sm:block">
                {isStudio ? (
                  <a href="#diagnostico">
                    <PrimaryButton className="text-sm px-5 py-2.5 shadow-md shadow-[#1E88E5]/20">
                      Diagnóstico de Marca
                    </PrimaryButton>
                  </a>
                ) : (
                  <Link href={CTA_CONFIG.href}>
                    <PrimaryButton className="text-sm px-5 py-2.5">
                      {CTA_CONFIG.label}
                    </PrimaryButton>
                  </Link>
                )}
              </div>

              <button
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden p-2 rounded-xl text-[#8C8C8C] hover:text-white hover:bg-white/5 transition-colors"
                aria-label="Abrir menú"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </nav>
      </header>

      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        isStudio={isStudio}
      />
    </>
  );
}
