import type { Metadata } from "next";
import SectionPage from "@/app/components/marketing/SectionPage";

export const metadata: Metadata = {
  title: "Réputation Hub",
  description: "Capture d’avis, réponses IA, gestion des négatifs & vitrines d’avis.",
  alternates: { canonical: "/hubs/reputation" },
};

export default function ReputationHubPage() {
  return (
    <SectionPage title="Réputation Hub" description="Renforcez vos preuves sociales et votre visibilité locale." tag="Hub">
      <ul className="list-disc pl-5 space-y-1">
        <li>Flux de demande d’avis multi‑canal</li>
        <li>Assistant IA de réponse aux avis</li>
        <li>Gestion des avis négatifs</li>
        <li>Vitrines d’avis sur site/funnels</li>
      </ul>
    </SectionPage>
  );
}


