"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

type HaloProps = {
  /** Force disable animation in addition to the data-attribute toggle */
  disabled?: boolean;
  /** Total duration in seconds for one full breathe cycle (default 24s) */
  durationSec?: number;
  /** Min/Max scale for the breathing effect (defaults 0.98 → 1.06) */
  minScale?: number;
  maxScale?: number;
  /** Min/Max opacity for the halo (defaults 0.70 → 0.82) */
  minOpacity?: number;
  maxOpacity?: number;
};

export default function Halo({
  disabled,
  durationSec = 24,
  minScale = 0.98,
  maxScale = 1.06,
  minOpacity = 0.70,
  maxOpacity = 0.82,
}: HaloProps) {
  const haloRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = haloRef.current;
    if (!element) return;

    const body = document.body;
    const attrDisabled = body.getAttribute("data-halo-anim") === "off";
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Initial static state (composite-only properties)
    gsap.set(element, {
      scale: 1,
      opacity: (minOpacity + maxOpacity) / 2,
      transformOrigin: "50% 50%",
      force3D: true,
      willChange: "transform, opacity",
    });

    if (disabled || attrDisabled) {
      return;
    }

    // prefers-reduced-motion: reduce amplitude by 3x and double duration (instead of cutting)
    const totalBase = Math.max(18, Math.min(28, durationSec));
    const total = prefersReduced ? totalBase * 2 : totalBase;
    const inDur = total * 0.4; // inhale
    const pauseDur = total * 0.1; // pause
    const outDur = total * 0.4; // exhale

    const scaleMin = prefersReduced ? (1 + (minScale - 1) / 3) : minScale;
    const scaleMax = prefersReduced ? (1 + (maxScale - 1) / 3) : maxScale;
    const midOpacity = (minOpacity + maxOpacity) / 2;
    const halfAmpOpacity = (maxOpacity - minOpacity) / 2;
    const opacityMin = prefersReduced ? midOpacity - halfAmpOpacity / 3 : minOpacity;
    const opacityMax = prefersReduced ? midOpacity + halfAmpOpacity / 3 : maxOpacity;

    const tl = gsap.timeline({ repeat: -1, defaults: { ease: "sine.inOut" } });
    tl.to(element, { scale: scaleMax, opacity: opacityMax, duration: inDur })
      .to({}, { duration: pauseDur })
      .to(element, { scale: scaleMin, opacity: opacityMin, duration: outDur })
      .to({}, { duration: pauseDur });

    return () => {
      tl.kill();
    };
  }, [disabled, durationSec, minScale, maxScale, minOpacity, maxOpacity]);

  return (
    <div
      aria-hidden
      ref={haloRef}
      className="absolute inset-0 pointer-events-none"
      style={{
        // Composite-only animation target
        contain: "layout paint size",
        willChange: "transform, opacity",
        // Premium, soft central radial halo (brand-tinted), kept clean (no blend modes)
        background:
          "radial-gradient(60% 50% at 50% 50%, rgba(255,128,96,0.78) 0%, rgba(255,128,96,0.24) 28%, rgba(255,118,160,0.14) 46%, rgba(255,118,160,0.04) 58%, rgba(255,118,160,0.00) 72%)",
      }}
    />
  );
}


