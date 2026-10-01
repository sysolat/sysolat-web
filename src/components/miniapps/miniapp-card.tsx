import React from "react";
import { ArrowUpRight, Scissors, Truck, Utensils, FileCheck, Layers } from "lucide-react";
import { MiniApp } from "@/lib/miniapps";
import { Badge } from "@/components/ui/badge";

const iconMap: Record<string, React.ElementType> = {
  Scissors,
  Truck,
  Utensils,
  FileCheck,
};

interface MiniAppCardProps {
  app: MiniApp;
}

export function MiniAppCard({ app }: MiniAppCardProps) {
  const IconComponent = iconMap[app.icon] || Layers;

  const badgeVariant =
    app.badge === "En Producción"
      ? "success"
      : app.badge === "Beta"
      ? "primary"
      : "outline";

  return (
    <a
      href={app.url}
      target="_blank"
      rel="noopener noreferrer"
      className="
        group relative flex flex-col justify-between
        rounded-[24px] border border-white/10
        bg-[#171A20]/80 backdrop-blur-xl
        p-6 transition-all duration-300
        hover:border-[#1E88E5]/50
        hover:shadow-[0_0_25px_rgba(30,136,229,0.2)]
        hover:-translate-y-1
      "
    >
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#42A5F5] group-hover:bg-[#1E88E5]/10 group-hover:border-[#1E88E5]/40 transition-colors">
            <IconComponent className="w-5 h-5" />
          </div>
          <Badge variant={badgeVariant}>{app.badge}</Badge>
        </div>

        <div className="text-xs text-[#8C8C8C] uppercase tracking-wider mb-1 font-semibold">
          {app.category}
        </div>
        <h3 className="text-xl font-bold text-white group-hover:text-[#42A5F5] transition-colors flex items-center gap-1.5">
          <span>{app.name}</span>
          <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-[#1E88E5]" />
        </h3>

        <p className="text-xs text-[#8C8C8C] font-mono mt-0.5 mb-3">
          {app.subdomain}
        </p>

        <p className="text-sm text-[#D9D9D9] leading-relaxed mb-4">
          {app.description}
        </p>
      </div>

      <div>
        <div className="pt-3 border-t border-white/5 flex flex-wrap gap-1.5">
          {app.features.map((feat, idx) => (
            <span
              key={idx}
              className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-[#8C8C8C]"
            >
              {feat}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}
