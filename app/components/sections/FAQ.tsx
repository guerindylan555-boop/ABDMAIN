"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Y a-t-il un engagement ?",
    a: "Non. Les accompagnements sont mensuels, résiliables à tout moment.",
  },
  {
    q: "Combien de temps pour voir des résultats ?",
    a: "Généralement sous 4 à 8 semaines sur le trafic et les conversions.",
  },
  { q: "Travaillez-vous avec mon secteur ?", a: "Oui, TPE/PME, services, local et e-commerce." },
  {
    q: "Que comprend le setup initial ?",
    a: "Audit, plan d’action, tracking (GA4, Search Console), CRM et base SEO/Google Business.",
  },
  {
    q: "Proposez-vous la création de contenus ?",
    a: "Oui, pages stratégiques, articles de blog et posts Google Business optimisés SEO.",
  },
  {
    q: "Puis-je fournir mes contenus et visuels ?",
    a: "Bien sûr. Nous les optimisons et intégrons pour maximiser la conversion.",
  },
  {
    q: "Avez-vous des garanties de résultats ?",
    a: "Nous privilégions la transparence : pas de promesses irréalistes, mais un cycle d’itérations rapides et un reporting clair.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-24 scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rounded-2xl glass p-8 md:p-10">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Questions fréquentes</h2>
            <p className="mt-3 text-neutral-700 dark:text-neutral-300">Transparence et simplicité.</p>
          </div>

          <div className="mt-10 divide-y divide-neutral-200/60 dark:divide-neutral-800 rounded-xl bg-white/60 dark:bg-neutral-900/30">
            {faqs.map((item) => (
              <FAQItem key={item.q} q={item.q} a={item.a} />)
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        className="w-full text-left px-6 py-4 flex items-center justify-between"
        onClick={() => setOpen((v) => !v)}
      >
        <span className="font-medium">{q}</span>
        <span className="text-neutral-400">{open ? "−" : "+"}</span>
      </button>
      {open && <p className="px-6 pb-4 text-sm text-neutral-700 dark:text-neutral-300">{a}</p>}
    </div>
  );
}


