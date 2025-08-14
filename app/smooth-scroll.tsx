"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

export default function SmoothScroll() {
  useEffect(() => {
    // Toggle simple via URL param: ?lenis=off (ou 0/false)
    const searchParams = new URLSearchParams(window.location.search);
    const lenisParam = (searchParams.get("lenis") || "").toLowerCase();
    const disabledByQuery = ["off", "0", "false"].includes(lenisParam);

    // Respecte la préférence d'accessibilité
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (disabledByQuery || prefersReducedMotion) {
      return;
    }

    const lenis = new Lenis({ autoRaf: true });
    // Re-émet la vélocité pour d'autres effets (flottement, etc.)
    lenis.on("scroll", (e: { velocity?: number } | Record<string, unknown>) => {
      const maybeVelocity = (e as Record<string, unknown>).velocity;
      const v = typeof maybeVelocity === "number" ? maybeVelocity : 0;
      window.dispatchEvent(new CustomEvent("lenis-scroll", { detail: { velocity: v } }));
    });
    return () => lenis.destroy();
  }, []);
  return null;
}



