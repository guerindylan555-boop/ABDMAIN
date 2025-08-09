const plans = [
  {
    name: "Starter",
    price: "490€/mois",
    description: "Idéal pour démarrer et valider l\'offre.",
    items: ["Site vitrine", "Google Business", "Suivi mensuel"],
  },
  {
    name: "Croissance",
    price: "890€/mois",
    description: "Pour accélérer l\'acquisition et la conversion.",
    items: ["SEO + contenus", "Automations SMS", "Tableau de bord"],
  },
  {
    name: "Performance",
    price: "1290€/mois",
    description: "Le pack complet pour scaler.",
    items: [
      "SEO avancé + Netlinking",
      "Séquences IA personnalisées",
      "Tests A/B multi‑canaux",
      "Workshop mensuel",
      "Support prioritaire",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rounded-2xl glass p-8 md:p-10">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Tarifs mensuels</h2>
            <p className="mt-3 text-neutral-700 dark:text-neutral-300">Sans engagement, pilotés par les résultats.</p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3 items-stretch">
            {plans.map((p) => (
              <div key={p.name} className="flex flex-col rounded-xl p-6 border border-neutral-200/60 dark:border-neutral-800 bg-white/60 dark:bg-neutral-900/30 min-h-[360px]">
                <h3 className="font-semibold text-lg">{p.name}</h3>
                <div className="mt-2 text-3xl font-extrabold">{p.price}</div>
                <p className="text-xs text-neutral-500">Sans engagement</p>
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
                <a
                  href="/reservation-appel"
                  className="inline-flex w-full justify-center rounded-lg border border-white/20 bg-white/20 text-white px-4 py-2 font-medium backdrop-blur hover:bg-white/30"
                >
                  Audit gratuit
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


