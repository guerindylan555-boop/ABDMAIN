import type { Metadata } from "next";
import SectionPage from "@/app/components/marketing/SectionPage";
// import SimplePricing from "@/components/mvpblocks/simple-pricing";
import Faq1 from "@/components/mvpblocks/faq-1";
import Badge from "@/app/components/ui/badge";
import { ButtonLink } from "@/app/components/ui/button";

export const metadata: Metadata = {
  title: "DFY — Conseil & Réalisations clés en main",
  description:
    "Nous concevons et implémentons pour vous: site/funnel, SEO local, agents IA et automatisations d’appels/SMS. Délai moyen 2–6 semaines.",
  alternates: { canonical: "/solutions/dfy" },
  openGraph: {
    title: "DFY — Conseil & Réalisations clés en main",
    description:
      "Diagnostic 90 min → Build & Implémentation → Optimisation & transfert. Sites & funnels, SEO local, agents IA, automations.",
    type: "website",
    url: "/solutions/dfy",
  },
};

export default function DFYPage() {
  return (
    <SectionPage
      title="DFY — Conseil & Réalisations clés en main"
      description="Résultats sans complexité: nous auditons, concevons et mettons en production votre stack (site/funnel, SEO local, agents IA, automations)."
      tag="Solutions"
      toc={[
        { id: "pour-qui", label: "Pour qui ?" },
        { id: "process", label: "Process en 3 étapes" },
        { id: "packages", label: "Packages" },
        { id: "cta", label: "Passer au diagnostic" },
        { id: "pricing", label: "Tarifs" },
        { id: "faq", label: "FAQ" },
      ]}
    >
      <section id="pour-qui" className="space-y-3">
        <h2 className="text-2xl font-semibold">Pour qui ?</h2>
        <p className="flex flex-wrap gap-2">
          <Badge>Local / Services</Badge>
          <Badge variant="secondary">PME</Badge>
          <Badge variant="outline">Coachs</Badge>
        </p>
        <p>Dirigeants qui veulent des résultats rapides sans construire eux‑mêmes, et qui valorisent la clarté et la mesure.</p>
      </section>

      <section id="process" className="space-y-3 mt-8">
        <h2 className="text-2xl font-semibold">Process en 3 étapes</h2>
        <ol className="list-decimal pl-5 space-y-1">
          <li><strong>Diagnostic 90 min</strong> — audit funnel/SEO/GB/appels/CRM/tracking → feuille de route priorisée.</li>
          <li><strong>Build & Implémentation</strong> — site/funnel, agents IA, automations, tracking, GB.</li>
          <li><strong>Optimisation & transfert</strong> — revues, KPIs, dashboard, handover et formation.</li>
        </ol>
      </section>

      <section id="packages" className="space-y-4 mt-8">
        <h2 className="text-2xl font-semibold">Packages</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="rounded-xl p-6 border border-white/10 bg-white/10">
            <h3 className="font-semibold">DFY Launch (2–3 semaines)</h3>
            <ul className="mt-2 list-disc pl-5 space-y-1 text-sm">
              <li>1 site ou funnel haute conversion</li>
              <li>CRM + pipeline + missed‑call text back</li>
              <li>Google Business: profil, posts, avis</li>
              <li>Tracking de base & reporting</li>
            </ul>
          </div>
          <div className="rounded-xl p-6 border border-white/10 bg-white/10">
            <h3 className="font-semibold">DFY Scale (4–6 semaines)</h3>
            <ul className="mt-2 list-disc pl-5 space-y-1 text-sm">
              <li>Tout Launch + agents IA SEO & Nurture</li>
              <li>Call AI (après‑heures) + voice drops</li>
              <li>A/B tests multi‑funnels + tracking avancé</li>
            </ul>
          </div>
        </div>
        <div className="rounded-xl p-6 border border-white/10 bg-white/10">
          <h3 className="font-semibold">DFY Pro (sur‑mesure)</h3>
          <p className="mt-2 text-sm text-neutral-300">Multi‑site/multi‑localisation, paid media, intégrations custom, data layer.</p>
        </div>
      </section>

      <section id="cta" className="space-y-3 mt-8">
        <h2 className="text-2xl font-semibold">Prêt à démarrer ?</h2>
        <ButtonLink href="/reservation-appel">Réserver le diagnostic 90 min</ButtonLink>
      </section>

      {/* Section tarifs simplifiée ou renvoyant vers /offres */}
      <section id="pricing" className="space-y-3 mt-8">
        <h2 className="text-2xl font-semibold">Tarifs</h2>
        <p className="text-neutral-300">Consultez les détails et comparatifs sur la page Offres.</p>
        <a href="/offres" className="inline-flex rounded-lg border border-white/20 bg-white/20 text-white px-3 py-2 hover:bg-white/30">Voir les offres →</a>
      </section>
      <section id="faq" className="space-y-3 mt-8">
        <Faq1 />
      </section>
    </SectionPage>
  );
}


