import React from "react";

export function Divider({ className = "" }: { className?: string }) {
  return (
    <div
      className={`w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-8 ${className}`}
    />
  );
}

export function GlowingDivider({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative w-full h-px bg-gradient-to-r from-transparent via-[#1E88E5]/50 to-transparent my-12 ${className}`}
    >
      <div className="absolute inset-0 bg-[#1E88E5] blur-sm opacity-50" />
    </div>
  );
}
