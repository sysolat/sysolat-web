import React from "react";

export default function Loading() {
  return (
    <div className="min-h-screen bg-[#111111] flex flex-col items-center justify-center">
      <div className="relative flex items-center justify-center">
        <div className="w-16 h-16 rounded-full border-2 border-white/10 border-t-[#1E88E5] animate-spin" />
        <div className="absolute w-8 h-8 rounded-full bg-[#1E88E5]/20 animate-pulse" />
      </div>
      <div className="mt-6 text-sm font-semibold tracking-wider text-white uppercase font-heading">
        SySo<span className="text-[#1E88E5]">Co.</span>
      </div>
      <p className="text-xs text-[#8C8C8C] mt-1">Cargando Ecosistema...</p>
    </div>
  );
}
