"use client";

import React from "react";
import dynamic from "next/dynamic";
import { useAdaptiveQuality } from "@/lib/use-adaptive-quality";

const DynamicMeshGradient = dynamic(
  () => import("@paper-design/shaders-react").then((m) => m.MeshGradient),
  { ssr: false, loading: () => null }
);

export const GeneratedBackground = () => {
  const [active, setActive] = React.useState(false);

  React.useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return; // Skip heavy shader for reduced motion users

    const isWide = typeof window !== "undefined" && window.innerWidth >= 1024; // desktop only
    type NavPerf = { hardwareConcurrency?: number; deviceMemory?: number };
    const { hardwareConcurrency: cores, deviceMemory } = navigator as unknown as NavPerf;
    const isLowPower = (cores && cores <= 4) || (deviceMemory && deviceMemory < 4);
    if (!isWide || isLowPower) return; // avoid on small/low-power devices

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

    const onVisibility = () => setActive(!document.hidden);
    const root = document.getElementById('app-root');
    let io: IntersectionObserver | null = null;
    if (root) {
      io = new IntersectionObserver((entries) => {
        const entry = entries[0];
        if (entry) {
          setActive(entry.isIntersecting && !document.hidden);
        }
      }, { root: null, rootMargin: '0px', threshold: 0.01 });
      io.observe(root);
    }
    document.addEventListener("visibilitychange", onVisibility, { passive: true });
    schedule(() => {
      setActive(true);
    });
    return () => {
      document.removeEventListener("visibilitychange", onVisibility);
      if (io) io.disconnect();
    };
  }, []);

  const { renderScale, speed, levelIndex } = useAdaptiveQuality({ isActive: active, startLevelIndex: 2 });

  return (
    <div className="relative w-full h-full overflow-hidden bg-black gradient-background" aria-hidden>
      {/* Lightweight fallback gradient for initial render */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.15),transparent_60%),radial-gradient(circle_at_0%_100%,rgba(56,189,248,0.1),transparent_50%)]" />
      {active && (
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            width: `${renderScale * 100}%`,
            height: `${renderScale * 100}%`,
            transform: `scale(${1 / renderScale})`,
            transformOrigin: "top left",
            willChange: "transform",
          }}
          data-quality-level={levelIndex}
        >
          <DynamicMeshGradient
            speed={speed}
            colors={["#000000", "#1e3a8a", "#3b82f6", "#06b6d4"]}
            className="absolute inset-0"
          />
        </div>
      )}
      {/* Darkening overlay to increase contrast */}
      <div className="absolute inset-0 bg-black/60" />
    </div>
  );
};
