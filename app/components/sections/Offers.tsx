import { ButtonLink } from "@/app/components/ui/button";
import { Sparkles, Zap, Shield, Check } from "lucide-react";

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
      badge: "Starter",
      title: "Démarrez avec l’essentiel",
      desc:
        "Site + blog (5 pages), 1 article/mois, Chat IA, CRM multi‑canal (Email/SMS/DM), Google Business (avis), tableaux de bord, support basic.",
      href: "/offres",
      cta: "Choisir Starter",
      icon: Sparkles,
    },
    {
      badge: "Croissance",
      title: "Accélérez votre acquisition",
      desc:
        "Tout Starter + pages illimitées, jusqu’à 50 articles/mois, Google Business (optimisation des notes), appels manqués, automatisations & déclencheurs, support prioritaire.",
      href: "/offres",
      cta: "Choisir Croissance",
      icon: Zap,
    },
    {
      badge: "Performance",
      title: "Sur‑mesure de bout en bout",
      desc:
        "Tout Croissance + audits personnalisés, conception & intégration, gestion des systèmes et/ou formation de vos équipes.",
      href: "/audit-custom",
      cta: "Réserver un audit",
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
                Trois offres pour <span style={{ color: "var(--brand)" }}>avancer</span> avec nous
              </h2>
              <p className="mt-3 text-lead text-foreground/90">
                Superchargez votre croissance avec <strong>LeadsFlowAI</strong>. Notre écosystème allie technologie de pointe et accompagnement humain pour permettre à chaque <strong>TPE</strong>, <strong>PME</strong> et <strong>grand compte</strong> de se développer efficacement.
              </p>
              {/* Highlights chips */}
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-foreground/90">
                  <Sparkles className="h-3.5 w-3.5 text-[--brand]" /> Écosystème tout‑en‑un
                </span>
                <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-foreground/90">
                  <Zap className="h-3.5 w-3.5 text-[--brand]" /> Expertise IA & Automatisation
                </span>
                <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-foreground/90">
                  <Check className="h-3.5 w-3.5 text-[--brand]" /> Communauté dynamique
                </span>
                <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-foreground/90">
                  <Shield className="h-3.5 w-3.5 text-[--brand]" /> Accompagnement premium
                </span>
              </div>
              <ul className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
                <li className="flex items-start gap-2 text-foreground/90">
                  <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/10 text-[--brand]"><Check className="h-3.5 w-3.5" /></span>
                  <span><strong>Starter</strong> — l’essentiel prêt à l’emploi dans un écosystème unifié.</span>
                </li>
                <li className="flex items-start gap-2 text-foreground/90">
                  <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/10 text-[--brand]"><Check className="h-3.5 w-3.5" /></span>
                  <span><strong>Croissance</strong> — accélération contenus et <strong>automatisations IA</strong>.</span>
                </li>
                <li className="flex items-start gap-2 text-foreground/90">
                  <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/10 text-[--brand]"><Check className="h-3.5 w-3.5" /></span>
                  <span><strong>Performance</strong> — consulting stratégique et <strong>intégrations sur‑mesure</strong>.</span>
                </li>
                <li className="flex items-start gap-2 text-foreground/90">
                  <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/10 text-[--brand]"><Check className="h-3.5 w-3.5" /></span>
                  <span><strong>Communauté</strong> — un réseau d’entrepreneurs pour grandir ensemble.</span>
                </li>
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink href="#offres" variant="glow" size="md">Voir Offres & Tarifs</ButtonLink>
                <ButtonLink href="/reservation-appel" variant="outline" size="md">Parler à un expert</ButtonLink>
              </div>
              <p className="mt-4 text-xs text-foreground/70">
                Un écosystème tout‑en‑un, boosté par l’IA et porté par un accompagnement humain exigeant.
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
                        <p className="mt-2 text-sm text-foreground/90">
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


