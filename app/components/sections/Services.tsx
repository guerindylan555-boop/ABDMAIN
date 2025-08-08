const services: Array<{
  title: string;
  description: string;
  features: string[];
}> = [
  {
    title: "Site web sur-mesure",
    description:
      "Vitrine moderne, rapide et SEO-ready pour convertir vos visiteurs.",
    features: ["Design responsive", "Performance optimale", "CMS simple"],
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
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Nos services</h2>
          <p className="mt-3 text-neutral-600">
            Accompagnements mensuels pour créer, attirer et convertir.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <article
              key={s.title}
              className="rounded-xl border border-neutral-200 p-6 bg-white shadow-[0_1px_0_0_rgba(0,0,0,0.02)]"
            >
              <h3 className="font-semibold text-lg">{s.title}</h3>
              <p className="mt-2 text-sm text-neutral-600">{s.description}</p>
              <ul className="mt-4 space-y-2 text-sm text-neutral-700">
                {s.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-[--color-brand]" />
                    {f}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


