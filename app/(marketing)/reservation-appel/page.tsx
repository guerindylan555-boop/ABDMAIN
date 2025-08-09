"use client";

import type { Metadata } from "next";
import { useMemo, useState } from "react";

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

export default function ReservationAppelPage() {
  const durations = [15, 30, 45] as const;
  const [duration, setDuration] = useState<(typeof durations)[number]>(30);
  const [slot, setSlot] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const slots = useMemo(
    () => [
      "09:30",
      "10:00",
      "10:30",
      "11:00",
      "14:00",
      "14:30",
      "15:00",
      "15:30",
      "16:00",
    ],
    []
  );

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
        <section className="rounded-2xl glass p-6 md:p-8 space-y-8">
          {/* Étape 1: Durée */}
          <div>
            <h2 className="text-lg font-semibold text-white">1. Choisir la durée</h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {durations.map((d) => {
                const active = duration === d;
                return (
                  <button
                    key={d}
                    type="button"
                    onClick={() => setDuration(d)}
                    className={
                      "rounded-xl px-3.5 py-2 text-sm border backdrop-blur " +
                      (active
                        ? "border-white/30 bg-white/30 text-white"
                        : "border-white/10 bg-white/10 text-neutral-200 hover:bg-white/20")
                    }
                  >
                    {d} min
                  </button>
                );
              })}
            </div>
          </div>

          {/* Étape 2: Créneau */}
          <div>
            <h2 className="text-lg font-semibold text-white">2. Choisir un créneau</h2>
            <div className="mt-3 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2">
              {slots.map((s) => {
                const active = slot === s;
                return (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setSlot(s)}
                    className={
                      "rounded-lg px-3 py-2 text-sm border backdrop-blur " +
                      (active
                        ? "border-white/30 bg-white/30 text-white"
                        : "border-white/10 bg-white/10 text-neutral-200 hover:bg-white/20")
                    }
                  >
                    {s}
                  </button>
                );
              })}
            </div>
            <p className="mt-2 text-xs text-neutral-400">Heure locale détectée. Durée: {duration} min.</p>
          </div>

          {/* Étape 3: Coordonnées */}
          <div>
            <h2 className="text-lg font-semibold text-white">3. Vos informations</h2>
            <form
              className="mt-3 grid sm:grid-cols-2 gap-3"
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
            >
              <input className="rounded-lg bg-white/10 border border-white/10 px-3 py-2 text-sm placeholder:text-neutral-400 sm:col-span-1" placeholder="Nom" required />
              <input className="rounded-lg bg-white/10 border border-white/10 px-3 py-2 text-sm placeholder:text-neutral-400 sm:col-span-1" placeholder="Email" type="email" required />
              <input className="rounded-lg bg-white/10 border border-white/10 px-3 py-2 text-sm placeholder:text-neutral-400 sm:col-span-1" placeholder="Téléphone" type="tel" />
              <input className="rounded-lg bg-white/10 border border-white/10 px-3 py-2 text-sm placeholder:text-neutral-400 sm:col-span-1" placeholder="Société (optionnel)" />
              <textarea className="rounded-lg bg-white/10 border border-white/10 px-3 py-2 text-sm placeholder:text-neutral-400 sm:col-span-2" rows={4} placeholder="Contexte, objectifs, lien vers votre site..." />

              <div className="sm:col-span-2 flex items-center justify-between mt-2">
                <p className="text-xs text-neutral-400">
                  En cliquant, vous recevrez une confirmation avec lien de visioconférence.
                </p>
                <button
                  className="rounded-xl border border-white/20 bg-white/20 hover:bg-white/30 backdrop-blur px-4 py-2 text-sm text-white"
                  disabled={!slot}
                >
                  Confirmer la réservation
                </button>
              </div>
            </form>

            {submitted && (
              <div className="mt-4 rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-sm text-neutral-100">
                Merci ! Votre demande a été enregistrée (maquette). Nous revenons vers vous très vite.
              </div>
            )}
          </div>
        </section>

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


