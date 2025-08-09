import type { Metadata } from "next";

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
    <main className="max-w-3xl mx-auto p-6 space-y-6">
      <h1 className="text-4xl font-bold tracking-tight">SEO local & Google Business</h1>
      <p className="text-neutral-700 dark:text-neutral-300">
        Nous optimisons votre présence sur Google (site + fiche) pour remonter sur les requêtes locales et générer plus d’appels et de demandes.
      </p>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Ce que nous faisons</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Audit technique & sémantique</li>
          <li>On‑Page, maillage interne et pages locales</li>
          <li>Optimisation Google Business (profil, posts, gestion d’avis)</li>
          <li>Reporting mensuel et plan d’actions</li>
        </ul>
      </section>
    </main>
  );
}



