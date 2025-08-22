"use client";

import React from "react";
import Link from "next/link";
import { GeneratedBackground } from "@/components/generated-background";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
 

export type ABHeroProps = {
  ctaHref?: string;
  className?: string;
};

export function ABHero({ ctaHref = "#next", className }: ABHeroProps) {
  return (
    <section className={"relative min-h-[85vh] w-full overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-16 scroll-mt-32 " + (className ?? "")}
      aria-label="AB Digital - Hero">
      {/* Decorative: single subtle radial */}
      <div className="pointer-events-none absolute inset-0 -z-0">
        <div className="absolute left-1/2 top-[-10%] h-[55vh] w-[55vh] -translate-x-1/2 rounded-full bg-white/[0.06] blur-[100px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mx-auto max-w-5xl text-center"
        >
          <div className="inline-flex items-center rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-wide">
            Cabinet digital — Sites performants, SEO & IA
          </div>
          <h1 className="mt-4 text-balance text-5xl font-semibold leading-tight tracking-tight text-white md:text-6xl text-outline">
            Des sites qui convertissent.
            <br className="hidden md:block" />
            Des process qui travaillent pour vous.
          </h1>
          <p className="mt-6 text-pretty text-lg text-white/80 md:text-xl text-outline">
            Stratégie, design, SEO et automatisations IA — réunis dans un écosystème clair et exigeant.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" className="rounded-lg px-6">
              <Link href="/audit-custom">Demander un audit</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-lg px-6">
              <Link href="#solutions">Voir nos solutions</Link>
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm">
            {[
              "Chargement ultra‑rapide",
              "SEO local solide",
              "Relances IA utiles",
            ].map((b) => (
              <span key={b} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-white/80">
                <Check className="h-3.5 w-3.5 text-cyan-300" /> {b}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
