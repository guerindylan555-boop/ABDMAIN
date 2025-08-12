import type { Metadata } from "next";
import SectionPage from "@/app/components/marketing/SectionPage";

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
    <SectionPage title="À propos" description="Agence orientée résultats: sites performants, SEO local et automatisations IA." tag="AB Digital">
      <p className="text-neutral-300">
        Nous aidons TPE/PME et indépendants à générer plus d’appels, de devis et de ventes via des sites performants, un SEO rigoureux et
        des automatisations IA pragmatiques. Sans engagement, avec un cycle d’itérations mensuel.
      </p>
    </SectionPage>
  );
}



