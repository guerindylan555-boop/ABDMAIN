"use client";

import { useState } from "react";
import { submitLead } from "./actions";

export default function ContactPage() {
  const [state, setState] = useState<"idle" | "ok" | "error">("idle");

  return (
    <main id="contact" className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
      <header className="rounded-2xl glass p-8 md:p-10">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">Parlons de votre projet</h1>
        <p className="mt-3 text-neutral-300 max-w-3xl">Dites-nous où vous en êtes et ce que vous voulez atteindre. Réponse sous 24h.</p>
      </header>

      <div className="mt-8 grid md:grid-cols-[1fr_360px] gap-8 items-start">
        <section className="rounded-2xl glass p-6 md:p-8">
          <form
            action={async (fd) => {
              const res = await submitLead(fd);
              setState(res.ok ? "ok" : "error");
            }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            <input className="rounded-lg bg-white/10 border border-white/10 px-3 py-2 text-sm placeholder:text-neutral-400" type="text" name="name" placeholder="Nom" required autoComplete="name" />
            <input className="rounded-lg bg-white/10 border border-white/10 px-3 py-2 text-sm placeholder:text-neutral-400" type="email" name="email" placeholder="Email" required autoComplete="email" />
            <input className="rounded-lg bg-white/10 border border-white/10 px-3 py-2 text-sm placeholder:text-neutral-400" type="tel" name="phone" placeholder="Téléphone" autoComplete="tel" />
            <input className="rounded-lg bg-white/10 border border-white/10 px-3 py-2 text-sm placeholder:text-neutral-400" type="text" name="company" placeholder="Société (optionnel)" />
            <textarea className="rounded-lg bg-white/10 border border-white/10 px-3 py-2 text-sm placeholder:text-neutral-400 sm:col-span-2" name="message" rows={6} placeholder="Décrivez vos besoins..." required />

            <div className="sm:col-span-2 flex items-center justify-between">
              <p className="text-xs text-neutral-400">Nous ne partageons jamais vos données. Voir la politique de confidentialité.</p>
              <button className="rounded-xl border border-white/20 bg-white/20 hover:bg-white/30 backdrop-blur px-4 py-2 text-sm text-white">Envoyer la demande</button>
            </div>
          </form>

          {state === "ok" && (
            <p className="mt-4 text-green-400">Merci, on revient vers vous rapidement.</p>
          )}
          {state === "error" && (
            <p className="mt-4 text-red-400">Vérifiez les champs et réessayez.</p>
          )}
        </section>

        <aside className="space-y-4">
          <section className="rounded-2xl glass p-5">
            <h3 className="font-semibold text-white">Contact direct</h3>
            <ul className="mt-2 text-sm text-neutral-300 space-y-1">
              <li>Email: contact@ab-digital.fr</li>
              <li>Téléphone: +33 6 12 34 56 78</li>
              <li>Horaires: 9h–18h (lun–ven)</li>
            </ul>
            <a href="/reservation-appel" className="mt-3 inline-flex rounded-lg border border-white/10 bg-white/10 px-3 py-2 text-sm text-white hover:bg-white/20">
              Réserver un appel
            </a>
          </section>

          <section className="rounded-2xl glass p-5">
            <h3 className="font-semibold text-white">Pourquoi nous écrire ?</h3>
            <ul className="mt-2 text-sm text-neutral-300 space-y-1">
              <li>• Audit rapide et plan d’action priorisé</li>
              <li>• Idées concrètes pour accélérer en 30 jours</li>
              <li>• Sans engagement</li>
            </ul>
          </section>
        </aside>
      </div>
    </main>
  );
}


