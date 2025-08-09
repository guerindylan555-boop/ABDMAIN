"use client";

import { useEffect } from "react";

type FloatState = {
  el: HTMLElement;
  amplitude: number;
  depth: number;
  phase: number; // 1 or -1
  y: number;
  vy: number;
  hovered: boolean;
};

export default function FloatScroll() {
  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-float]"));
    if (elements.length === 0) return;

    const states: FloatState[] = elements.map((el) => ({
      el,
      amplitude: Number(el.getAttribute("data-float-amplitude")) || 10,
      depth: Number(el.getAttribute("data-float-depth")) || 0.8,
      phase: Number(el.getAttribute("data-float-phase")) === -1 ? -1 : 1,
      y: 0,
      vy: 0,
      hovered: false,
    }));

    let lastY = window.scrollY;
    let velocity = 0;
    let raf = 0;
    let freezeUntil = 0;

    const onHash = () => {
      freezeUntil = performance.now() + 380; // neutralise brièvement après un jump d'ancre
    };
    window.addEventListener("hashchange", onHash);

    const hoverHandlers = states.map((s) => {
      const onEnter = () => (s.hovered = true);
      const onLeave = () => (s.hovered = false);
      s.el.addEventListener("pointerenter", onEnter);
      s.el.addEventListener("pointerleave", onLeave);
      s.el.addEventListener("focusin", onEnter);
      s.el.addEventListener("focusout", onLeave);
      return () => {
        s.el.removeEventListener("pointerenter", onEnter);
        s.el.removeEventListener("pointerleave", onLeave);
        s.el.removeEventListener("focusin", onEnter);
        s.el.removeEventListener("focusout", onLeave);
      };
    });

    const onLenis = (e: Event) => {
      const detail = (e as CustomEvent).detail as { velocity?: number };
      if (typeof detail?.velocity === "number") {
        velocity = detail.velocity;
      }
    };
    window.addEventListener("lenis-scroll", onLenis as EventListener);

    // Snap-to-center effect: si une section porte data-snap="true", on la centre quand elle est proche du viewport
    const snapCandidates = states.filter((s) => s.el.hasAttribute("data-snap"));

    const tick = () => {
      const now = performance.now();
      const y = window.scrollY;
      const dy = y - lastY;
      lastY = y;

      // normaliser la vitesse et lisser
      const instVel = Math.max(-1, Math.min(1, (velocity || dy / 40) / 1));
      velocity = velocity * 0.88 + instVel * 0.12;

      for (const s of states) {
        const ampBase = s.amplitude * s.depth * s.phase;
        const amp = s.hovered ? ampBase * 0.35 : ampBase;
        const target = now < freezeUntil ? 0 : Math.max(-Math.abs(amp) * 1.2, Math.min(Math.abs(amp) * 1.2, velocity * amp));

        // inertie simple: v = v*damper + (target - y)*stiffness; y += v
        s.vy = s.vy * 0.82 + (target - s.y) * 0.18;
        s.y = s.y + s.vy;

        // clamp final et appliquer transform
        if (s.y > Math.abs(amp) * 1.25) s.y = Math.abs(amp) * 1.25;
        if (s.y < -Math.abs(amp) * 1.25) s.y = -Math.abs(amp) * 1.25;
        s.el.style.transform = `translateY(${s.y.toFixed(2)}px)`;
        s.el.style.willChange = "transform";
      }

      // Snap: détecte la section la plus proche du centre et la pousse au centre si on est quasi à l'arrêt
      if (Math.abs(velocity) < 0.05 && snapCandidates.length > 0) {
        let best: { s: FloatState; dist: number } | null = null;
        for (const s of snapCandidates) {
          const rect = s.el.getBoundingClientRect();
          const center = rect.top + rect.height / 2;
          const dist = Math.abs(center - window.innerHeight / 2);
          if (!best || dist < best.dist) best = { s, dist };
        }
        if (best && best.dist < Math.min(120, window.innerHeight * 0.25)) {
          // scroll jusqu'au centre
          const el = best.s.el;
          const elCenter = window.scrollY + el.getBoundingClientRect().top + el.offsetHeight / 2;
          const targetY = Math.max(0, elCenter - window.innerHeight / 2);
          window.scrollTo({ top: targetY, behavior: "smooth" });
          freezeUntil = performance.now() + 420; // évite oscillations
        }
      }

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("hashchange", onHash);
      window.removeEventListener("lenis-scroll", onLenis as EventListener);
      hoverHandlers.forEach((off) => off());
      // reset transforms
      states.forEach((s) => (s.el.style.transform = ""));
    };
  }, []);

  return null;
}


