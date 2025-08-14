"use client";

import { useEffect } from "react";

const clamp01 = (n: number) => Math.max(0, Math.min(1, n));
const toPct = (n: number) => `${Math.round(clamp01(n) * 100)}%`;

export default function GradientLoader() {
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("/api/gradient", { cache: "no-store" });
        if (!res.ok) return;
        const cfg: { shape: string; x: number; y: number; stops: { color: string; pos: number }[] } = await res.json();
        const root = document.body;
        root.style.setProperty("--g-shape", cfg.shape);
        root.style.setProperty("--g-x", toPct(cfg.x));
        root.style.setProperty("--g-y", toPct(cfg.y));
        for (let i = 0; i < 7; i++) {
          const stop = cfg.stops[i];
          if (!stop) continue;
          root.style.setProperty(`--g${i + 1}`, stop.color);
          root.style.setProperty(`--p${i + 1}`, toPct(stop.pos));
        }
      } catch {}
    })();
  }, []);

  return null;
}
