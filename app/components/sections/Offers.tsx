export default function Offers() {
  const offers = [
    {
      badge: "DIY",
      title: "Templates & snapshots prêts à déployer",
      desc:
        "Modèles de sites, funnels, agents IA et workflows prêts à l’emploi. Guides pas‑à‑pas et vidéos inclus.",
      href: "/solutions/diy",
      cta: "Découvrir le DIY",
    },
    {
      badge: "DWY",
      title: "Plateforme + coaching pour avancer ensemble",
      desc:
        "Sous‑compte tout‑en‑un (CRM, tunnels, calendriers, facturation) + templates + coaching hebdo. Sprints d’implémentation en direct.",
      href: "/solutions/dwy",
      cta: "Découvrir le DWY",
    },
    {
      badge: "DFY",
      title: "Nous concevons et implémentons pour vous",
      desc:
        "Conseil + exécution clé en main: site/funnel, SEO local, agents IA et automations d’appels/SMS. Délai moyen: 2–6 semaines.",
      href: "/solutions/dfy",
      cta: "Découvrir le DFY",
    },
  ] as const;

  return (
    <section id="offres-modes" className="py-16 md:py-20 scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rounded-2xl glass-panel p-8 md:p-10">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Trois façons de travailler avec nous</h2>
            <p className="mt-3 text-neutral-700 dark:text-neutral-300">
              Couvrez tous les niveaux de budget et de maturité, en gardant la même qualité d’exécution.
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {offers.map((o) => (
              <a
                key={o.badge}
                href={o.href}
                className="rounded-xl p-6 border border-neutral-200/60 dark:border-neutral-800 bg-white/60 dark:bg-neutral-900/30 h-full pressable transition-transform hover:scale-[1.01]"
                aria-label={o.title}
              >
                <span className="inline-flex items-center rounded-full border border-white/10 bg-white/10 px-2 py-1 text-[10px] uppercase tracking-wide">
                  {o.badge}
                </span>
                <h3 className="mt-3 font-semibold text-lg">{o.title}</h3>
                <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300">{o.desc}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm text-[--brand]">{o.cta} →</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


