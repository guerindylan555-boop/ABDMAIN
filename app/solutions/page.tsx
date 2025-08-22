import type { Metadata } from "next";
import React from "react";
import { BentoGrid } from "@/components/bento-grid";
import { TestimonialsMarquee } from "@/components/testimonials-marquee";
import CTAOld from "@/components/cta-old";
import FaqSection from "@/components/faq-section";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nos solutions | AB Digital",
  description:
    "Sites performants, SEO local, automatisations IA et suivi du ROI. Découvrez nos solutions pour attirer, convertir et fidéliser.",
};

export default function SolutionsPage() {
  return (
    <main className="min-h-screen w-full">
      {/* Hero */}
      <section className="relative z-10 mx-auto w-full max-w-6xl px-6 pt-28 pb-12 sm:pt-32">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-wide">
            Nos expertises
          </div>
          <h1 className="mt-4 text-balance text-4xl font-semibold leading-tight tracking-tight text-foreground md:text-5xl">
            Nos solutions pour accélérer votre croissance
          </h1>
          <p className="mt-5 max-w-prose text-lg text-foreground/80">
            Un écosystème clair et performant : conception de sites et tunnels, SEO local,
            automatisations & IA, suivi du ROI et amélioration continue.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/audit-custom"
              className="inline-flex items-center justify-center rounded-md border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium hover:bg-white/15"
            >
              Demander un audit gratuit
            </Link>
            <a
              href="#solutions"
              className="inline-flex items-center justify-center rounded-md border border-white/10 px-4 py-2 text-sm font-medium hover:bg-white/5"
            >
              Parcourir les solutions
            </a>
          </div>
        </div>
      </section>

      {/* Overview grid */}
      <BentoGrid />

      {/* Detailed pillars */}
      <section className="relative z-10 mx-auto w-full max-w-6xl px-6 py-8 sm:py-10">
        <div className="grid gap-6 md:grid-cols-2">
          {/* Pillar 1 */}
          <div className="rounded-xl border border-white/10 bg-white/5 p-5">
            <h3 className="text-lg font-semibold tracking-tight">Sur‑mesure & rapide</h3>
            <p className="mt-2 text-sm text-white/80">
              Des sites et tunnels conçus pour convertir, rapides et accessibles, avec un design qui reflète votre marque.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-white/85">
              {[
                "Conception landing pages & tunnels complets",
                "Performance web (LCP < 2.5s) et accessibilité",
                "Intégration formulaires intelligents & calendriers",
                "AB testing sur les pages clés",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 inline-block size-1.5 rounded-full bg-white/70" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Pillar 2 */}
          <div className="rounded-xl border border-white/10 bg-white/5 p-5">
            <h3 className="text-lg font-semibold tracking-tight">Automatisations & IA</h3>
            <p className="mt-2 text-sm text-white/80">
              Des agents utiles qui travaillent 24/7 : relances, prise de rendez‑vous, nurturing, qualification.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-white/85">
              {[
                "Relances multicanales (SMS, email, appel)",
                "Prise de RDV automatique & rappels",
                "Qualification et scoring des leads",
                "Séquences de nurturing personnalisées",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 inline-block size-1.5 rounded-full bg-white/70" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Pillar 3 */}
          <div className="rounded-xl border border-white/10 bg-white/5 p-5">
            <h3 className="text-lg font-semibold tracking-tight">SEO local & réputation</h3>
            <p className="mt-2 text-sm text-white/80">
              Gagnez en visibilité là où vos clients vous cherchent vraiment : Google, Maps et avis.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-white/85">
              {[
                "Optimisation fiche Google Business",
                "Collecte & gestion d’avis clients",
                "Articles SEO réguliers et maillage",
                "Citations locales & suivi positionnements",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 inline-block size-1.5 rounded-full bg-white/70" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Pillar 4 */}
          <div className="rounded-xl border border-white/10 bg-white/5 p-5">
            <h3 className="text-lg font-semibold tracking-tight">Suivi & ROI</h3>
            <p className="mt-2 text-sm text-white/80">
              Des tableaux de bord compréhensibles et des tests continus pour des décisions claires.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-white/85">
              {[
                "Tracking propre (événements, conversions)",
                "Dashboards leads, RDV, revenus",
                "AB testing et itérations rapides",
                "Roadmap d’optimisation continue",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 inline-block size-1.5 rounded-full bg-white/70" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Social proof */}
      <section className="relative z-10 mx-auto w-full max-w-6xl px-6 py-16 sm:py-20">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold tracking-tight">Ils nous font confiance</h2>
          <p className="mt-2 max-w-2xl text-white/80">
            Des résultats concrets, visibles sur vos parcours clés.
          </p>
        </div>
        <TestimonialsMarquee
          speed={40}
          items={[
            { id: '1', name: 'Camille L.', role: 'Spa & Bien-être', quote: 'Refonte rapide et SEO en nette hausse, plus de réservations en 2 mois.' },
            { id: '2', name: 'Mathieu R.', role: 'Menuiserie', quote: 'Automatisations SMS et agents IA = rdv qualifiés sans relances manuelles.' },
            { id: '3', name: 'Sarah D.', role: 'Cabinet dentaire', quote: 'Téléphone désengorgé, formulaires intelligents et prises de rdv fluides.' },
            { id: '4', name: 'Imane K.', role: 'Formation', quote: 'Tracking fiable, A/B tests et tunnel optimisé: CPA en baisse, conversions en hausse.' },
            { id: '5', name: 'Louis P.', role: 'Rénovation', quote: 'Site rapide, leads mieux qualifiés, suivi centralisé: on gagne du temps.' },
          ]}
          className="[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
        />
      </section>

      {/* CTA */}
      <CTAOld />

      {/* FAQ */}
      <FaqSection />
    </main>
  );
}
