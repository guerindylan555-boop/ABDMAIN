import type { Metadata } from "next";
import SectionPage from "@/app/components/marketing/SectionPage";
import { Card, CardHeader, CardTitle, CardContent } from "@/app/components/ui/card";
import SimplePricing from "@/components/mvpblocks/simple-pricing";
import { ButtonLink } from "@/app/components/ui/button";

export const metadata: Metadata = {
  title: "DIY — Templates & Snapshots",
  description:
    "Modèles de sites, funnels, agents IA et workflows prêts à l’emploi. Vidéos, checklists et mises à jour régulières.",
  alternates: { canonical: "/solutions/diy" },
  openGraph: {
    title: "DIY — Templates & Snapshots",
    description:
      "Démarrez en jours, pas en semaines: websites & funnels, agents IA et automations avec guides pas‑à‑pas.",
    type: "website",
    url: "/solutions/diy",
  },
};

export default function DIYPage() {
  return (
    <SectionPage
      title="DIY — Templates & Snapshots"
      description="Bibliothèque de modèles AB Digital pour lancer vite: sites/funnels, agents IA (SEO, nurture, GMB), automations (reviews, no‑show, onboarding)."
      tag="Solutions"
      toc={[
        { id: "categories", label: "Catégories" },
        { id: "usage", label: "Comment ça marche" },
        { id: "cta", label: "Accéder" },
        { id: "pricing", label: "Tarifs" },
      ]}
    >
      <section id="categories" className="space-y-3">
        <h2 className="text-2xl font-semibold">Catégories</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Websites & Funnels: homepage local service, landing lead‑gen</li>
          <li>Agents IA: SEO content, lead nurture, GMB messages, call agent</li>
          <li>Automations: review requests, missed‑call text back, onboarding, invoicing</li>
        </ul>
      </section>

      <section id="usage" className="space-y-3 mt-8">
        <h2 className="text-2xl font-semibold">Comment ça marche</h2>
        <p>Installez le snapshot, suivez la vidéo étape‑par‑étape, puis adaptez le contenu. Support disponible selon l’abonnement.</p>
      </section>

      <section id="cta" className="space-y-3 mt-8">
        <h2 className="text-2xl font-semibold">Accéder</h2>
        <ButtonLink href="/offres">Voir les offres</ButtonLink>
      </section>

      <section id="pricing" className="space-y-3 mt-8">
        <SimplePricing />
      </section>
    </SectionPage>
  );
}


