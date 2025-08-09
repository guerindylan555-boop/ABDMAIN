import Link from "next/link";

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
      "Optimisations techniques, contenus et fiche Google pour capter la demande locale. Accompagnement mensuel orienté résultats.",
    features: ["Audit & plan d\'action", "On-page & contenus", "Suivi mensuel & KPI"],
  },
  {
    title: "Automatisations & IA",
    description:
      "Réactivation de votre base clients (CRM): offres personnalisées par email/SMS/appels et prise de RDV automatique.",
    features: ["Réactivation base CRM", "Emails/SMS personnalisés", "Workflows & intégrations"],
  },
  {
    title: "Publicité payante",
    description:
      "Google Ads & Meta Ads pour un trafic qualifié rapide. Tracking fiable et optimisation hebdo.",
    features: ["Google & Meta Ads", "Suivi des conversions", "Optimisation ROAS"],
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
              Accompagnements mensuels pour créer un site performant, attirer via le SEO (dont Google Business) et convertir grâce à l’automatisation, y compris la réactivation de votre base clients (CRM).
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <a
                key={s.title}
                href={
                  s.title === "Site web sur-mesure"
                    ? "/site-web-sur-mesure"
                    : s.title === "SEO & Google Business"
                    ? "/seo-google-business"
                  : s.title === "Automatisations & IA"
                    ? "/automatisations-appels-sms"
                    : s.title === "Publicité payante"
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


