
const services: Array<{
  title: string;
  description: string;
  features: string[];
}> = [
  {
    title: "Sites & Funnels",
    description:
      "Vitrines et tunnels rapides, pensés pour convertir. Performances (LCP/CLS/INP) et SEO intégrés dès le départ.",
    features: [
      "Design responsive & UX claire",
      "95+ Lighthouse (selon contenu)",
      "Core Web Vitals maîtrisés",
      "CMS headless (Prismic)",
      "Formulaires & conformité RGPD",
    ],
  },
  {
    title: "SEO local & Google Business",
    description:
      "Capter la demande locale: on‑page, maillage interne, pages locales, fiche Google Business active (posts/avis).",
    features: [
      "Audit initial & feuille de route 90 jours",
      "Optimisations on‑page & maillage",
      "Posts & stratégie d’avis",
    ],
  },
  {
    title: "Agents IA & Automations",
    description:
      "Relances intelligentes multi‑canales (appels/SMS/emails), prise de RDV et qualification. Intégrations CRM.",
    features: [
      "Réactivation base CRM",
      "Missed‑call text back & voice drops",
      "Workflows & intégrations (Zapier/Make)",
    ],
  },
  {
    title: "Publicité payante (Ads)",
    description:
      "Acquisition rapide et mesurable: Google Ads & Meta Ads. Structure de comptes, créas, suivi conversions et optimisation.",
    features: [
      "Google & Meta Ads",
      "Suivi des conversions (GA4)",
      "Optimisation ROAS hebdo",
    ],
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
              Construisez un socle performant (sites & funnels), gagnez en visibilité (SEO local & Google Business) et convertissez sans pertes (agents IA & automations), avec un levier d’acquisition maîtrisé (Ads).
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <a
                key={s.title}
                href={
                  s.title === "Sites & Funnels"
                    ? "/site-web-sur-mesure"
                    : s.title === "SEO local & Google Business"
                    ? "/seo-google-business"
                    : s.title === "Agents IA & Automations"
                    ? "/automatisations-appels-sms"
                    : s.title === "Publicité payante (Ads)"
                    ? "/publicite-payante"
                    : "/services"
                }
                className="rounded-xl p-6 border border-neutral-200/60 dark:border-neutral-800 bg-white/60 dark:bg-neutral-900/30 transition-transform hover:scale-[1.01] hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-[--ring] h-full flex flex-col pressable"
                aria-label={`En savoir plus sur ${s.title}`}
              >
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
                <span className="mt-auto pt-4 inline-flex items-center gap-1 text-sm text-[--brand]">En savoir plus →</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


