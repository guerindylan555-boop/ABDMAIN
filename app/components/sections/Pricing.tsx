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
    items: ["SEO avancé", "Séquences IA", "Tests & itérations"],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Tarifs mensuels</h2>
          <p className="mt-3 text-neutral-600">Sans engagement, pilotés par les résultats.</p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {plans.map((p) => (
            <div key={p.name} className="rounded-xl border border-neutral-200 p-6 bg-white">
              <h3 className="font-semibold text-lg">{p.name}</h3>
              <div className="mt-2 text-3xl font-extrabold">{p.price}</div>
              <p className="mt-2 text-sm text-neutral-600">{p.description}</p>
              <ul className="mt-4 space-y-2 text-sm">
                {p.items.map((i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-[--color-brand]" />
                    {i}
                  </li>
                ))}
              </ul>
              <a
                href="/contact#contact"
                className="mt-6 inline-flex w-full justify-center rounded-lg bg-neutral-900 text-white px-4 py-2 font-medium"
              >
                Choisir ce plan
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


