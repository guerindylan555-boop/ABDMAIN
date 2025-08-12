import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Réserver un appel — AB Digital",
  description:
    "Planifiez un appel de découverte de 15 à 45 minutes pour parler de votre projet: site web, SEO (Google Business) et automatisations IA.",
  alternates: { canonical: "/reservation-appel" },
  openGraph: {
    title: "Réserver un appel — AB Digital",
    description:
      "Planifiez un appel de découverte de 15 à 45 minutes pour parler de votre projet: site web, SEO (Google Business) et automatisations IA.",
    type: "website",
    url: "/reservation-appel",
  },
};

import ReservationForm from "./ReservationForm";

export default function ReservationAppelPage() {

  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
      {/* En‑tête */}
      <header className="rounded-2xl glass p-8 md:p-10">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
          Réserver un appel de découverte
        </h1>
        <p className="mt-3 text-neutral-300 max-w-3xl">
          Sélectionnez une durée, choisissez un créneau et renseignez vos coordonnées. Nous vous envoyons une
          confirmation et un rappel automatique.
        </p>
      </header>

      {/* Contenu */}
      <div className="mt-8 grid md:grid-cols-[1fr_360px] gap-8 items-start">
        {/* Colonne principale */}
        <ReservationForm />

        {/* Aside */}
        <aside className="space-y-4">
          <section className="rounded-2xl glass p-5">
            <h3 className="font-semibold text-white">Pourquoi réserver ?</h3>
            <ul className="mt-3 space-y-2 text-sm text-neutral-300">
              <li>• Analyse rapide de votre situation et de vos objectifs</li>
              <li>• Conseils concrets et plan d’action priorisé</li>
              <li>• Sans engagement</li>
            </ul>
          </section>
          <section className="rounded-2xl glass p-5">
            <h3 className="font-semibold text-white">Pré-requis utiles</h3>
            <ul className="mt-3 space-y-2 text-sm text-neutral-300">
              <li>• URL de votre site / fiche Google Business</li>
              <li>• Cible, offres, zone d’intervention</li>
              <li>• Outils utilisés (CRM, analytics, etc.)</li>
            </ul>
          </section>
          <section className="rounded-2xl glass p-5">
            <h3 className="font-semibold text-white">Vous préférez un email ?</h3>
            <p className="mt-2 text-sm text-neutral-300">Écrivez-nous via la page Contact, on vous répond dans la journée.</p>
            <a href="/contact#contact" className="mt-3 inline-flex rounded-lg border border-white/10 bg-white/10 px-3 py-2 text-sm text-white hover:bg-white/20">
              Aller au formulaire
            </a>
          </section>
        </aside>
      </div>
    </main>
  );
}


