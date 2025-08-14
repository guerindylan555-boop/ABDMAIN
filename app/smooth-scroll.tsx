"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

export default function SmoothScroll() {
  useEffect(() => {
    // Toggle via URL param: enable only with ?lenis=on (ou 1/true)
    const searchParams = new URLSearchParams(window.location.search);
    const lenisParam = (searchParams.get("lenis") || "").toLowerCase();
    const enabledByQuery = ["on", "1", "true"].includes(lenisParam);

    // Respecte la préférence d'accessibilité
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Désactiver par défaut, sauf si explicitement activé via l'URL
    if (prefersReducedMotion || !enabledByQuery) {
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



