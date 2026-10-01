"use client";

import React from "react";

interface CounterProps {
  value: string;
  label: string;
  description?: string;
}

export function Counter({ value, label, description }: CounterProps) {
  return (
    <div className="flex flex-col items-center text-center p-4">
      <div className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-2 font-heading">
        <span className="bg-gradient-to-r from-white via-white to-[#42A5F5] bg-clip-text text-transparent">
          {value}
        </span>
      </div>
      <div className="text-sm sm:text-base font-medium text-white mb-1">{label}</div>
      {description && <p className="text-xs sm:text-sm text-[#8C8C8C] max-w-xs">{description}</p>}
    </div>
  );
}
