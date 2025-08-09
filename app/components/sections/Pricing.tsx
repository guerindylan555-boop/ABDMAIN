const plans = [
  {
    name: "Starter",
    price: "300€",
    note: "Maintenance: 69€/mois",
    description: "Site 5 pages sur‑mesure + SEO Basic",
    items: [
      "Site sur‑mesure (5 pages) optimisé",
      "Suivi SEO mensuel Basic",
      "5 modifications/mois incluses",
      "Formulaires & conformité RGPD",
      "Tracking de base (GA4/GSC)",
    ],
  },
  {
    name: "Croissance",
    price: "Sur devis",
    note: "Abonnement minimum: 3 mois",
    description: "Inclut Starter + modifs illimitées, SEO complet, Google Business, automations (début)",
    items: [
      "Inclut Starter",
      "Modifications illimitées (fair use)",
      "SEO complet (technique, contenus, maillage)",
      "Gestion Google Business (posts/avis/NAP)",
      "Automatisation de base (emails/SMS)",
    ],
  },
  {
    name: "Performance",
    price: "Sur devis",
    note: "Abonnement minimum: 6 mois",
    description: "Inclut Croissance + SEO avancé, automations complètes, publicités (Ads)",
    items: [
      "Inclut Croissance",
      "SEO avancé + Netlinking",
      "Automatisations complètes (appels/SMS/IA)",
      "Publicité payante (Google/Meta)",
      "A/B testing & dashboard",
    ],
  },
];

export default function Pricing() {
  return (
      <section id="offres" className="py-24 scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rounded-2xl glass-panel p-8 md:p-10" data-float data-float-amplitude="9" data-float-depth="0.85" data-snap>
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Offres</h2>
            <p className="mt-3 text-neutral-700 dark:text-neutral-300">Sans engagement, pilotés par les résultats.</p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3 items-stretch">
            {plans.map((p) => (
              <a key={p.name} href={p.name === "Starter" ? "/offres#starter" : p.name === "Croissance" ? "/offres#croissance" : "/offres#performance"} className="flex flex-col rounded-xl p-6 border border-neutral-200/60 dark:border-neutral-800 bg-white/60 dark:bg-neutral-900/30 min-h-[360px] transition-transform hover:scale-[1.01] hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-[--ring] pressable">
                <h3 className="font-semibold text-lg">{p.name}</h3>
                <div className="mt-2 text-3xl font-extrabold whitespace-nowrap">{p.price}</div>
                {p.note && (
                  <p className="text-xs text-neutral-500">{p.note}</p>
                )}
                <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300">{p.description}</p>
                <ul className="mt-4 space-y-2 text-sm flex-1">
                  {p.items.map((i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="inline-block h-1.5 w-1.5 rounded-full bg-[--brand]" />
                      {i}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-1" />
                <span className="inline-flex w-full justify-center rounded-lg border border-white/20 bg-white/20 text-white px-4 py-2 font-medium backdrop-blur">Voir le détail →</span>
              </a>
            ))}
          </div>
        </div>
      </div>
      </section>
  );
}


