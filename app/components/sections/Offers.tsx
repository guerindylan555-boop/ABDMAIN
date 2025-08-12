import { ButtonLink } from "@/app/components/ui/button";
import { Sparkles, Zap, Shield } from "lucide-react";

type Offer = {
  badge: string;
  title: string;
  desc: string;
  href: string;
  cta: string;
  icon: React.ComponentType<{ className?: string }>;
};

export default function Offers() {
  const offers: Offer[] = [
    {
      badge: "DIY",
      title: "Templates & snapshots prêts à déployer",
      desc:
        "Modèles de sites, funnels, agents IA et workflows prêts à l’emploi. Guides pas‑à‑pas et vidéos inclus.",
      href: "/solutions/diy",
      cta: "Découvrir le DIY",
      icon: Sparkles,
    },
    {
      badge: "DWY",
      title: "Plateforme + coaching pour avancer ensemble",
      desc:
        "Sous‑compte tout‑en‑un (CRM, tunnels, calendriers, facturation) + templates + coaching hebdo. Sprints d’implémentation en direct.",
      href: "/solutions/dwy",
      cta: "Découvrir le DWY",
      icon: Zap,
    },
    {
      badge: "DFY",
      title: "Nous concevons et implémentons pour vous",
      desc:
        "Conseil + exécution clé en main: site/funnel, SEO local, agents IA et automations d’appels/SMS. Délai moyen: 2–6 semaines.",
      href: "/solutions/dfy",
      cta: "Découvrir le DFY",
      icon: Shield,
    },
  ];

  return (
    <section id="offres-modes" className="py-16 md:py-20 scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rounded-2xl glass-panel p-8 md:p-10">
          <div className="md:grid md:grid-cols-[1fr_420px] md:items-start md:gap-10">
            {/* Left: title + lead */}
            <div className="max-w-2xl">
              <h2 className="text-h2 font-bold tracking-tight">
                Trois façons de <span style={{ color: "var(--brand)" }}>travailler</span> avec nous
              </h2>
              <p className="mt-3 text-lead text-neutral-700 dark:text-neutral-300">
                Couverts tous les niveaux de budget et de maturité, avec la même qualité d’exécution.
              </p>
            </div>

            {/* Right: stacked cards */}
            <div className="relative mt-8 md:mt-0">
              {/* Subtle brand-toned backdrop to tie with the gradient/glass theme */}
              <div className="pointer-events-none absolute -top-6 -left-6 h-40 w-40 rounded-full bg-brand-10 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-6 -right-4 h-40 w-40 rounded-full bg-brand-10 blur-3xl" />

              <div className="relative flex flex-col gap-5">
                {offers.map((o) => {
                  const Icon = o.icon;
                  return (
                    <div key={o.badge} className="glass-card relative rounded-xl border border-white/10 p-6 transition-all duration-300 hover:shadow-lg">
                      <div className="flex items-center gap-2">
                        <div className="grid h-9 w-9 place-items-center rounded-full bg-white/10 text-brand">
                          <Icon className="h-4 w-4" />
                        </div>
                        <span className="inline-flex items-center rounded-full border border-white/10 bg-white/10 px-2 py-1 text-[10px] uppercase tracking-wide">
                          {o.badge}
                        </span>
                      </div>

                      <div className="mt-4 flex h-full flex-col">
                        <h3 className="text-lg font-semibold text-foreground">{o.title}</h3>
                        <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300">
                          {o.desc}
                        </p>
                        <div className="mt-4 md:mt-6 lg:mt-8 xl:mt-10 2xl:mt-12" />
                        <div className="mt-auto">
                          <ButtonLink href={o.href} variant="default" size="md" className="w-full justify-center">
                            {o.cta}
                          </ButtonLink>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


