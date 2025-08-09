import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "À propos — AB Digital",
  description:
    "AB Digital conçoit des sites web performants, optimise votre SEO (Google Business) et automatise vos relances grâce à l’IA. Sans engagement.",
  alternates: { canonical: "/a-propos" },
  openGraph: {
    title: "À propos — AB Digital",
    description:
      "Agence digitale orientée résultats: sites rapides, SEO local et automatisations IA.",
    type: "website",
    url: "/a-propos",
  },
};

export default function AboutPage() {
  return (
    <main className="max-w-3xl mx-auto p-6 space-y-6">
      <h1 className="text-4xl font-bold tracking-tight">À propos</h1>
      <p className="text-neutral-700 dark:text-neutral-300">
        Nous aidons TPE/PME et indépendants à générer plus d’appels, de devis et de ventes via des sites performants, un SEO rigoureux et
        des automatisations IA pragmatiques. Sans engagement, avec un cycle d’itérations mensuel.
      </p>
    </main>
  );
}



