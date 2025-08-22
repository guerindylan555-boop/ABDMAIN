"use client";

import { MeshGradient } from "@paper-design/shaders-react";

export const GeneratedBackground = () => {
  return (
    <div className="relative w-full h-full overflow-hidden bg-black gradient-background">
      <MeshGradient
        speed={0.4}
        colors={["#000000", "#1e3a8a", "#3b82f6", "#06b6d4"]}
        className="absolute inset-0"
      />
      <MeshGradient
        speed={0.4}
        colors={["#8b5cf6", "#a855f7", "#c084fc", "#e879f9"]}
        className="absolute inset-0"
        style={{ opacity: 0 }}
      />
      {/* Darkening overlay to increase contrast */}
      <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
    </div>
  );
};
