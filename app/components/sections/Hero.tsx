"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Hero() {
  const rootRef = useRef<HTMLElement | null>(null);
  const glassRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      // Intro reveal for text
      // Initial states to avoid transform mismatch before hover
      gsap.set([".hero-title"], { autoAlpha: 0, y: 20 });
      gsap.set([".hero-lead"], { autoAlpha: 0, y: 16 });
      gsap.set([".hero-chip"], { autoAlpha: 0, y: 10 });
      gsap.set([".hero-cta"], { autoAlpha: 0, y: 12 });

      // Reveal on scroll, not on mount
      const tl = gsap.timeline({
        defaults: { ease: "power3.out", duration: reducedMotion ? 0.25 : 0.55 },
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top 70%",
          once: true,
        },
      });
      tl
        .to(".hero-title", { autoAlpha: 1, y: 0 }, 0)
        .to(".hero-lead", { autoAlpha: 1, y: 0 }, 0.05)
        .to(".hero-chip", { autoAlpha: 1, y: 0, stagger: 0.06 }, 0.15)
        .to(".hero-cta", { autoAlpha: 1, y: 0, stagger: 0.12 }, 0.15);

      // Prism Glass Sweep + breathe (sans glint souris)
      if (glassRef.current) {
        const glass = glassRef.current;
        gsap.set(glass, { transformPerspective: 700 });
        gsap.fromTo(
          glass,
          { scale: reducedMotion ? 1 : 1.01 },
          { scale: 1, duration: reducedMotion ? 0.2 : 0.7, ease: "power2.out" }
        );
        gsap.fromTo(
          glass,
          { css: { "--sweep": "-20%" } },
          { css: { "--sweep": "120%" }, duration: reducedMotion ? 0.4 : 0.9, ease: "power2.out" }
        );

        // Scroll-driven parallax + blur/saturate intensity
        ScrollTrigger.create({
          trigger: glass,
          start: "top top+=120",
          end: "+=420",
          scrub: true,
          onUpdate: (self) => {
            const p = self.progress; // 0..1
            const y = gsap.utils.interpolate(0, -12, p);
            const blur = gsap.utils.interpolate(10, 14, p);
            const sat = gsap.utils.interpolate(160, 175, p);
            gsap.set(glass, { y });
            glass.style.setProperty('backdrop-filter', `blur(${blur}px) saturate(${sat}%)`);
            glass.style.setProperty('-webkit-backdrop-filter', `blur(${blur}px) saturate(${sat}%)`);
          },
        });

        // Pointer tilt (glint supprimé)
        if (!reducedMotion) {
          const setRX = gsap.quickSetter(glass, "rotationX", "deg");
          const setRY = gsap.quickSetter(glass, "rotationY", "deg");
          const onMove = (e: MouseEvent) => {
            const rect = glass.getBoundingClientRect();
            const cx = rect.left + rect.width / 2;
            const cy = rect.top + rect.height / 2;
            const dx = e.clientX - cx;
            const dy = e.clientY - cy;
            const rx = gsap.utils.clamp(-3, 3, (-dy / rect.height) * 10);
            const ry = gsap.utils.clamp(-3, 3, (dx / rect.width) * 10);
            setRX(rx);
            setRY(ry);
          };
          const onLeave = () => {
            gsap.to(glass, { rotationX: 0, rotationY: 0, duration: 0.4, ease: "power3.out" });
          };
          glass.addEventListener("mousemove", onMove);
          glass.addEventListener("mouseleave", onLeave);
          // cleanup
          return () => {
            glass.removeEventListener("mousemove", onMove);
            glass.removeEventListener("mouseleave", onLeave);
          };
        }
      }
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={rootRef} className="relative overflow-hidden scroll-mt-24 min-h-[65vh]" id="accueil">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 md:py-24 text-left">
        <div ref={glassRef} className="relative rounded-2xl glass glass-hero p-8 md:p-12 md:pr-[280px]">
          <div className="md:grid md:grid-cols-[1fr_auto] md:gap-10 md:items-start">
            <div>
              <h1 className="hero-title text-[44px] md:text-[64px] font-extrabold tracking-tight text-neutral-900 dark:text-white max-w-4xl">
                Accélérez votre croissance avec des sites IA, SEO local et automatisations.
              </h1>
              <p className="hero-lead mt-5 text-[18px] md:text-[22px] leading-relaxed text-neutral-700 dark:text-neutral-300 max-w-4xl">
                Centralisez votre CRM, Google Business, appels et tunnels dans un même écosystème. Convertissez plus grâce à des agents IA qui suivent et relancent pendant que vous dormez.
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                <li className="hero-chip opacity-0 translate-y-2 rounded-full border border-neutral-200/60 dark:border-neutral-800 bg-white/60 dark:bg-neutral-900/30 px-3 py-1.5 text-sm text-neutral-700 dark:text-neutral-300">Sites & Funnels</li>
                <li className="hero-chip opacity-0 translate-y-2 rounded-full border border-neutral-200/60 dark:border-neutral-800 bg-white/60 dark:bg-neutral-900/30 px-3 py-1.5 text-sm text-neutral-700 dark:text-neutral-300">SEO local & Google Business</li>
                <li className="hero-chip opacity-0 translate-y-2 rounded-full border border-neutral-200/60 dark:border-neutral-800 bg-white/60 dark:bg-neutral-900/30 px-3 py-1.5 text-sm text-neutral-700 dark:text-neutral-300">CRM & Suivi</li>
                <li className="hero-chip opacity-0 translate-y-2 rounded-full border border-neutral-200/60 dark:border-neutral-800 bg-white/60 dark:bg-neutral-900/30 px-3 py-1.5 text-sm text-neutral-700 dark:text-neutral-300">Agents IA & Automations</li>
              </ul>
            </div>
            <div className="mt-8 md:mt-0 md:absolute md:inset-y-0 md:right-10 flex flex-col justify-center items-stretch md:items-end gap-3 w-full md:w-max">
              <div className="glow-wrap w-full md:w-auto">
                <div className="glow" />
                <a
                  href="/reservation-appel"
                  className="hero-cta opacity-0 translate-y-2 inline-flex w-full items-center justify-center rounded-xl border border-white/30 dark:border-white/10 bg-white/30 dark:bg-neutral-900/20 px-7 py-3.5 font-medium text-neutral-900 dark:text-white hover:bg-white/40 dark:hover:bg-neutral-900/30 backdrop-blur-md shadow-sm pressable"
                  data-magnetic
                >
                  Réserver un diagnostic 90 min
                </a>
              </div>
              <div className="glow-wrap w-full md:w-auto">
                <div className="glow" />
                <a
                  href="#services"
                  className="hero-cta opacity-0 translate-y-2 inline-flex w-full items-center justify-center rounded-xl border border-white/30 dark:border-white/10 bg-white/30 dark:bg-neutral-900/20 px-7 py-3.5 font-medium text-neutral-900 dark:text-white hover:bg-white/40 dark:hover:bg-neutral-900/30 backdrop-blur-md shadow-sm pressable"
                  data-magnetic
                >
                  Explorer les solutions
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 -z-10" />
      <style jsx>{`
        @property --a {
          syntax: '<angle>';
          initial-value: 0deg;
          inherits: false;
        }
        @keyframes a { to { --a: 1turn; } }
        .glow-wrap { position: relative; display: inline-block; }
        .glow-wrap .glow {
          position: absolute;
          z-index: -1;
          inset: -0.5em;
          border: solid 0.5em;
          border-image: conic-gradient(
            from var(--a),
            #669900,
            #99cc33,
            #ccee66,
            #006699,
            #3399cc,
            #990066,
            #cc3399,
            #ff6600,
            #ff9900,
            #ffcc00,
            #669900
          ) 1;
          filter: blur(0.35em);
          animation: a 4s linear infinite;
          pointer-events: none;
          border-radius: 0.75rem; /* match rounded-xl */
        }
      `}</style>
    </section>
  );
}


