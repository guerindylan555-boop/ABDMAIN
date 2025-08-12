import type { Metadata } from "next";
import SectionPage from "@/app/components/marketing/SectionPage";
import { Accordion } from "@/app/components/ui/accordion";
import { ButtonLink } from "@/app/components/ui/button";

export const metadata: Metadata = {
  title: "Diagnostic croissance — 90 minutes",
  description:
    "Repartez avec une feuille de route priorisée pour augmenter les leads et automatiser le suivi (funnel, SEO/GB, appels, CRM, tracking).",
  alternates: { canonical: "/diagnostic-90-min" },
  openGraph: {
    title: "Diagnostic croissance — 90 minutes",
    description: "Audit funnel/SEO/GB/appels/CRM/tracking → plan d’action 7–14 jours.",
    type: "website",
    url: "/diagnostic-90-min",
  },
};

export default function DiagnosticPage() {
  return (
    <SectionPage
      title="Diagnostic croissance — 90 minutes"
      description="Un atelier concret pour comprendre, prioriser et chiffrer l’impact sur vos leads et vos conversions."
      tag="Offre"
      toc={[
        { id: "promesse", label: "La promesse" },
        { id: "inclus", label: "Ce qui est inclus" },
        { id: "livrable", label: "Livrable" },
        { id: "tarif", label: "Tarif" },
        { id: "faq", label: "FAQ" },
      ]}
    >
      <section id="promesse" className="space-y-3">
        <h2 className="text-2xl font-semibold">La promesse</h2>
        <p>Repartez avec un plan priorisé pour capter plus de leads et automatiser le suivi sans complexité.</p>
      </section>

      <section id="inclus" className="space-y-3 mt-8">
        <h2 className="text-2xl font-semibold">Ce qui est inclus</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Teardown site/funnel</li>
          <li>Audit Google Business</li>
          <li>Audit appels/speed‑to‑lead</li>
          <li>Quick wins SEO (mots‑clés, contenus, maillage)</li>
          <li>Review tracking & attribution</li>
        </ul>
      </section>

      <section id="livrable" className="space-y-3 mt-8">
        <h2 className="text-2xl font-semibold">Livrable</h2>
        <p>Plan d’action 7–14 jours avec estimation d’impact (leads, appels), jalons et responsabilités.</p>
      </section>

      <section id="tarif" className="space-y-3 mt-8">
        <h2 className="text-2xl font-semibold">Tarif</h2>
        <p>Gratuit ou 97–197€ (déduit de tout projet/abonnement).</p>
        <ButtonLink href="/reservation-appel">Réserver un créneau</ButtonLink>
      </section>

      <section id="faq" className="space-y-3 mt-8">
        <h2 className="text-2xl font-semibold">FAQ</h2>
        <Accordion
          items={[
            { id: "agenda", title: "Est‑ce que c’est un appel de vente ?", content: <p>Non, c’est un atelier cadrage. S’il y a match, on vous propose un plan.</p> },
            { id: "prix", title: "Le diagnostic est‑il remboursé ?", content: <p>Oui, déduit de toute offre DFY/DWY ou mise en place.</p> },
          ]}
        />
      </section>
    </SectionPage>
  );
}


