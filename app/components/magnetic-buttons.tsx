"use client";

import { useEffect } from "react";

/**
 * Lightweight magnetic hover for elements with data-magnetic attribute.
 * Uses transform translate based on pointer position; resets on leave.
 */
export default function MagneticButtons() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-magnetic]"));
    const cleanup: Array<() => void> = [];

    elements.forEach((el) => {
      const strength = Number(el.getAttribute("data-magnetic-strength")) || 12;
      const onMove = (e: MouseEvent) => {
        const rect = el.getBoundingClientRect();
        const offsetX = e.clientX - (rect.left + rect.width / 2);
        const offsetY = e.clientY - (rect.top + rect.height / 2);
        const dx = Math.max(-strength, Math.min(strength, (offsetX / rect.width) * strength));
        const dy = Math.max(-strength, Math.min(strength, (offsetY / rect.height) * strength));
        el.style.transform = `translate(${dx}px, ${dy}px)`;
        el.classList.add("magnetic-active");
      };
      const onLeave = () => {
        el.style.transform = "translate(0,0)";
        el.classList.remove("magnetic-active");
      };
      el.addEventListener("mousemove", onMove);
      el.addEventListener("mouseleave", onLeave);
      cleanup.push(() => {
        el.removeEventListener("mousemove", onMove);
        el.removeEventListener("mouseleave", onLeave);
      });
    });

    return () => cleanup.forEach((fn) => fn());
  }, []);

  return null;
}



