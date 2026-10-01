"use client";

import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
}

export function PrimaryButton({
  children,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`
        inline-flex items-center justify-center gap-2
        px-6 py-3 rounded-2xl
        bg-gradient-to-r from-[#1565C0] via-[#1E88E5] to-[#42A5F5]
        text-white font-medium text-sm md:text-base
        border border-white/20
        shadow-[0_4px_20px_rgba(30,136,229,0.35)]
        transition-all duration-300
        hover:from-[#1E88E5] hover:via-[#42A5F5] hover:to-[#64B5F6]
        hover:scale-[1.02]
        hover:shadow-[0_0_35px_rgba(30,136,229,0.55)]
        active:scale-[0.98]
        disabled:opacity-50 disabled:pointer-events-none
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}

export function SecondaryButton({
  children,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`
        inline-flex items-center justify-center gap-2
        px-6 py-3 rounded-2xl
        bg-gradient-to-b from-[#262B35] via-[#1E222A] to-[#171A20]
        text-white font-medium text-sm md:text-base
        border border-white/10
        shadow-[0_4px_20px_rgba(0,0,0,0.4)]
        transition-all duration-300
        hover:from-[#2F3542] hover:via-[#262B35] hover:to-[#1E222A]
        hover:border-[#1E88E5]/40
        hover:shadow-[0_0_25px_rgba(30,136,229,0.25)]
        hover:scale-[1.02]
        active:scale-[0.98]
        disabled:opacity-50 disabled:pointer-events-none
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}

export function OutlineButton({
  children,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`
        inline-flex items-center justify-center gap-2
        px-6 py-3 rounded-2xl
        border border-[#1E88E5]/50 text-[#42A5F5]
        bg-transparent
        font-medium text-sm md:text-base
        transition-all duration-300
        hover:border-[#1E88E5] hover:bg-[#1E88E5]/10 hover:text-white
        hover:shadow-[0_0_20px_rgba(30,136,229,.25)]
        active:scale-[0.98]
        disabled:opacity-50 disabled:pointer-events-none
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}

export function GhostButton({
  children,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`
        inline-flex items-center justify-center gap-2
        px-4 py-2 rounded-xl
        text-[#8C8C8C] hover:text-white
        hover:bg-white/5
        transition-all duration-200
        disabled:opacity-50 disabled:pointer-events-none
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}
