"use client";

import React from "react";
import { MeshGradient } from "@paper-design/shaders-react";

export const GeneratedBackground = () => {
  const [showEffect, setShowEffect] = React.useState(false);

  React.useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return; // Skip heavy shader for reduced motion users

    const schedule = (cb: () => void) => {
      // Defer to idle or after a small delay to avoid blocking TTI
      type WindowRIC = { requestIdleCallback?: (cb: IdleRequestCallback, opts?: IdleRequestOptions) => number };
      const rif = (window as unknown as Window & WindowRIC).requestIdleCallback;
      if (typeof rif === "function") {
        rif(cb, { timeout: 1500 });
      } else {
        setTimeout(cb, 1200);
      }
    };

    schedule(() => setShowEffect(true));
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden bg-black gradient-background" aria-hidden>
      {/* Lightweight fallback gradient for initial render */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.15),transparent_60%),radial-gradient(circle_at_0%_100%,rgba(56,189,248,0.1),transparent_50%)]" />
      {showEffect && (
        <MeshGradient
          speed={0.2}
          colors={["#000000", "#1e3a8a", "#3b82f6", "#06b6d4"]}
          className="absolute inset-0 will-change-transform"
        />
      )}
      {/* Darkening overlay to increase contrast */}
      <div className="absolute inset-0 bg-black/60" />
    </div>
  );
};
