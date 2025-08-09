import type { Metadata } from "next";
import SectionPage from "@/app/components/marketing/SectionPage";

export const metadata: Metadata = {
  title: "Automatisations appels & SMS — AB Digital",
  description:
    "Récupérez plus de leads grâce aux séquences d’appels/SMS, rappels et relances automatisées. Intégrations CRM et mesure des conversions.",
  alternates: { canonical: "/automatisations-appels-sms" },
  openGraph: {
    title: "Automatisations appels & SMS — AB Digital",
    description:
      "Rappels, relances et qualification automatiques, intégrées à votre CRM, pour convertir plus vite.",
    type: "website",
    url: "/automatisations-appels-sms",
  },
};

export default function AutomationsPage() {
  return (
    <SectionPage
      title="Automatisations appels & SMS"
      description="Relances efficaces, intégrées à votre CRM, pour convertir plus vite."
      tag="Automations"
      toc={[{ id: "capacites", label: "Capacités" }]}
    >
      <section id="capacites" className="space-y-3">
        <h2 className="text-2xl font-semibold">Capacités</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Rappels & relances (appels/SMS)</li>
          <li>Intégrations CRM (HubSpot, Notion…)</li>
          <li>Calendly / Click‑to‑call</li>
          <li>A/B testing et suivi des conversions</li>
        </ul>
      </section>
    </SectionPage>
  );
}



