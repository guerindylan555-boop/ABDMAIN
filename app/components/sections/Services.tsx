const services: Array<{
  title: string;
  description: string;
  features: string[];
}> = [
  {
    title: "Site web sur-mesure",
    description:
      "Vitrine moderne, rapide et pensée conversion (UX). Optimisée Core Web Vitals et SEO dès le départ.",
    features: [
      "Design responsive & UX",
      "Vitesse 95+ Lighthouse",
      "Core Web Vitals",
      "CMS headless (Prismic)",
      "Formulaires & RGPD",
    ],
  },
  {
    title: "SEO & Google Business",
    description:
      "Optimisations techniques, contenus et fiche Google pour capter la demande locale.",
    features: ["Audit & plan d\'action", "Suivi mensuel", "Rapports clairs"],
  },
  {
    title: "Automatisation appels & SMS",
    description:
      "Rappels, relances et qualification automatiques pour ne plus perdre de leads.",
    features: ["Workflows no-code", "Intégrations CRM", "A/B testing"],
  },
  {
    title: "Offres IA",
    description:
      "Promotions intelligentes et messages personnalisés pour booster vos conversions.",
    features: ["Segmentation", "Personnalisation", "Expérimentations"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rounded-2xl glass p-8 md:p-10">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Nos services</h2>
            <p className="mt-3 text-neutral-700 dark:text-neutral-300">
              Accompagnements mensuels pour créer un site performant, attirer via le SEO (dont Google Business) et convertir grâce à l’automatisation.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <article key={s.title} className="rounded-xl p-6 border border-neutral-200/60 dark:border-neutral-800 bg-white/60 dark:bg-neutral-900/30 transition-transform hover:scale-[1.01]">
                <h3 className="font-semibold text-lg">{s.title}</h3>
                <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300">{s.description}</p>
                <ul className="mt-4 space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <span className="inline-block h-1.5 w-1.5 rounded-full bg-[--brand]" />
                      {f}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


