import type { Metadata } from "next";
import SectionPage from "@/app/components/marketing/SectionPage";

export const metadata: Metadata = {
  title: "SEO local & Google Business — AB Digital",
  description:
    "Gagnez en visibilité locale avec l’optimisation SEO et Google Business: audit, contenus, avis et posts. Accompagnement mensuel, sans engagement.",
  alternates: { canonical: "/seo-local-google-business" },
  openGraph: {
    title: "SEO local & Google Business — AB Digital",
    description:
      "Optimisation Google Business, contenus SEO local et maillage interne pour capter la demande qualifiée dans votre zone.",
    type: "website",
    url: "/seo-local-google-business",
  },
};

export default function SeoLocalPage() {
  return (
    <SectionPage
      title="SEO local & Google Business"
      description="Remontez sur les requêtes locales et captez la demande qualifiée."
      tag="SEO"
      toc={[{ id: "actions", label: "Ce que nous faisons" }]}
    >
      <section id="actions" className="space-y-3">
        <h2 className="text-2xl font-semibold">Ce que nous faisons</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Audit technique & sémantique</li>
          <li>On‑Page, maillage interne et pages locales</li>
          <li>Optimisation Google Business (profil, posts, gestion d’avis)</li>
          <li>Reporting mensuel et plan d’actions</li>
        </ul>
      </section>
    </SectionPage>
  );
}



