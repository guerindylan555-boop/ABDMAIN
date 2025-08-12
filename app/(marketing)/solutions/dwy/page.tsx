import type { Metadata } from "next";
import SectionPage from "@/app/components/marketing/SectionPage";
import { Card, CardHeader, CardTitle, CardContent } from "@/app/components/ui/card";
// import SimplePricing from "@/components/mvpblocks/simple-pricing";
import Faq1 from "@/components/mvpblocks/faq-1";
import { ButtonLink } from "@/app/components/ui/button";

export const metadata: Metadata = {
  title: "DWY — Plateforme + Coaching",
  description:
    "Sous‑compte tout‑en‑un (CRM, tunnels, sites, calendriers, facturation) + coaching hebdomadaire + sprints d’implémentation.",
  alternates: { canonical: "/solutions/dwy" },
  openGraph: {
    title: "DWY — Plateforme + Coaching",
    description:
      "Votre stack prête à l’emploi + accompagnement hebdo. Fast Start (2 sessions) ou Pro Setup (4 sessions).",
    type: "website",
    url: "/solutions/dwy",
  },
};

export default function DWYPage() {
  return (
    <SectionPage
      title="DWY — Plateforme + Coaching"
      description="Votre sous‑compte (CRM, tunnels, sites, pipelines, calendriers, facturation) + templates/snapshots + coaching chaque semaine."
      tag="Solutions"
      toc={[
        { id: "contenu", label: "Ce que vous obtenez" },
        { id: "setup", label: "Options de setup" },
        { id: "cta", label: "Démarrer" },
        { id: "pricing", label: "Tarifs" },
      ]}
    >
      <section id="contenu" className="space-y-3">
        <h2 className="text-2xl font-semibold">Ce que vous obtenez</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Sous‑compte: CRM, tunnels, sites, pipelines, calendriers, facturation, formulaires</li>
          <li>Templates & snapshots: review engine, nurture, booking, GMB</li>
          <li>Coaching hebdomadaire + office hours</li>
          <li>Sprints d’implémentation en live</li>
        </ul>
      </section>

      <section id="setup" className="space-y-3 mt-8">
        <h2 className="text-2xl font-semibold">Options de setup</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Fast Start (2 sessions)</strong>: domaines, calendriers, messagerie, 1er funnel</li>
          <li><strong>Pro Setup (4 sessions)</strong>: + agents IA, SEO workflows, analytics, GMB</li>
        </ul>
      </section>

      <section id="cta" className="space-y-3 mt-8">
        <h2 className="text-2xl font-semibold">Démarrer</h2>
        <ButtonLink href="/reservation-appel">Réserver le diagnostic 90 min</ButtonLink>
      </section>

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


