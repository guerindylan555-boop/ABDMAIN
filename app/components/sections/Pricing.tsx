const plans = [
  {
    name: "DFY",
    price: "à partir de 1 500€",
    note: "Projets 2–6 semaines",
    description: "Consulting + builds clé en main: site/funnel, SEO local, agents IA, automations.",
    items: [
      "Diagnostic 90 min offert (déduit)",
      "Site/Funnel + tracking propre",
      "SEO local & Google Business",
      "Automatisations appels/SMS/IA",
    ],
  },
  {
    name: "DWY",
    price: "249–797€/mois",
    note: "Plateforme + coaching",
    description: "Sous‑compte tout‑en‑un (CRM, tunnels, calendriers, facturation) + sprints d’implémentation.",
    items: [
      "Templates & snapshots inclus",
      "Coaching hebdo + office hours",
      "Setup rapide (2 à 4 sessions)",
      "Support & amélioration continue",
    ],
  },
  {
    name: "DIY",
    price: "49–99€/mois",
    note: "Bibliothèque + updates",
    description: "Templates & snapshots de sites, funnels, agents IA et workflows. Guides pas‑à‑pas.",
    items: [
      "Modèles prêts à l’emploi",
      "Vidéos & checklists",
      "Mises à jour régulières",
      "Accès à la communauté (option)",
    ],
  },
];

export default function Pricing() {
  return (
      <section id="offres" className="py-24 scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rounded-2xl glass-panel p-8 md:p-10">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Offres</h2>
            <p className="mt-3 text-neutral-700 dark:text-neutral-300">Sans engagement, pilotés par les résultats.</p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3 items-stretch">
            {plans.map((p) => (
              <a key={p.name} href={p.name === "DFY" ? "/solutions/dfy" : p.name === "DWY" ? "/solutions/dwy" : "/solutions/diy"} className="flex flex-col rounded-xl p-6 border border-neutral-200/60 dark:border-neutral-800 bg-white/60 dark:bg-neutral-900/30 min-h-[360px] transition-transform hover:scale-[1.01] hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-[--ring] pressable">
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
                <span className="inline-flex w-full justify-center rounded-lg border border-white/20 bg-white/20 text-white px-4 py-2 font-medium backdrop-blur">Voir l’offre →</span>
              </a>
            ))}
          </div>
        </div>
      </div>
      </section>
  );
}


