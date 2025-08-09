"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const rootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".hero-title", { autoAlpha: 0, y: 20, duration: 0.8 })
        .from(".hero-lead", { autoAlpha: 0, y: 16, duration: 0.6 }, "-=0.35")
        .from(".hero-chip", { autoAlpha: 0, y: 10, duration: 0.4, stagger: 0.06 }, "-=0.2")
        .from(".hero-cta", { autoAlpha: 0, y: 12, duration: 0.5, stagger: 0.12 }, "-=0.1");
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={rootRef} className="relative overflow-hidden scroll-mt-24 min-h-[65vh]" id="accueil">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 md:py-24 text-left">
        <div className="relative rounded-2xl glass p-8 md:p-12 md:pr-[280px]">
          <div className="md:grid md:grid-cols-[1fr_auto] md:gap-10 md:items-start">
            <div>
              <h1 className="hero-title text-5xl md:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-white max-w-4xl">
                Générez plus d’appels, de devis et de ventes.
              </h1>
              <p className="hero-lead mt-5 text-xl md:text-2xl leading-relaxed text-neutral-700 dark:text-neutral-300 max-w-4xl">
                Des sites rapides, un SEO maîtrisé (dont Google Business) et des automatisations appels/SMS pilotées par l’IA.
                Sans engagement, accompagnement mensuel.
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                <li className="hero-chip rounded-full border border-neutral-200/60 dark:border-neutral-800 bg-white/60 dark:bg-neutral-900/30 px-3 py-1.5 text-sm text-neutral-700 dark:text-neutral-300">Sites rapides</li>
                <li className="hero-chip rounded-full border border-neutral-200/60 dark:border-neutral-800 bg-white/60 dark:bg-neutral-900/30 px-3 py-1.5 text-sm text-neutral-700 dark:text-neutral-300">SEO maîtrisé</li>
                <li className="hero-chip rounded-full border border-neutral-200/60 dark:border-neutral-800 bg-white/60 dark:bg-neutral-900/30 px-3 py-1.5 text-sm text-neutral-700 dark:text-neutral-300">Google Business</li>
                <li className="hero-chip rounded-full border border-neutral-200/60 dark:border-neutral-800 bg-white/60 dark:bg-neutral-900/30 px-3 py-1.5 text-sm text-neutral-700 dark:text-neutral-300">Automatisations appels/SMS</li>
                <li className="hero-chip rounded-full border border-neutral-200/60 dark:border-neutral-800 bg-white/60 dark:bg-neutral-900/30 px-3 py-1.5 text-sm text-neutral-700 dark:text-neutral-300">IA</li>
              </ul>
            </div>
            <div className="mt-8 md:mt-0 md:absolute md:inset-y-0 md:right-10 flex flex-col justify-center items-stretch md:items-end gap-3 w-full md:w-max">
              <a
                href="/reservation-appel"
                className="hero-cta inline-flex w-full items-center justify-center rounded-xl border border-white/30 dark:border-white/10 bg-white/30 dark:bg-neutral-900/20 px-7 py-3.5 font-medium text-neutral-900 dark:text-white hover:bg-white/40 dark:hover:bg-neutral-900/30 backdrop-blur-md shadow-sm"
              >
                Audit gratuit
              </a>
              <a
                href="#services"
                className="hero-cta inline-flex w-full items-center justify-center rounded-xl border border-white/30 dark:border-white/10 bg-white/30 dark:bg-neutral-900/20 px-7 py-3.5 font-medium text-neutral-900 dark:text-white hover:bg-white/40 dark:hover:bg-neutral-900/30 backdrop-blur-md shadow-sm"
              >
                Découvrir nos services
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 -z-10" />
    </section>
  );
}


