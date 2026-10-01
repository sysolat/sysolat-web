import React from "react";
import { MINIAPPS } from "@/lib/miniapps";
import { MiniAppCard } from "./miniapp-card";

export function MiniAppGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {MINIAPPS.map((app) => (
        <MiniAppCard key={app.id} app={app} />
      ))}
    </div>
  );
}
