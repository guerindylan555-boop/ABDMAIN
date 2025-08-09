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
      description="Relances intelligentes multi‑canales (appels, emails, SMS), qualification et prise de rendez‑vous automatisées. Intégrations CRM et conformité."
      tag="Automations"
      toc={[
        { id: "usages", label: "Cas d’usage" },
        { id: "workflows", label: "Workflows types" },
        { id: "integrations", label: "Intégrations" },
        { id: "conformite", label: "Conformité RGPD/SMS" },
        { id: "kpi", label: "KPI" },
      ]}
    >
      <section id="usages" className="space-y-3">
        <h2 className="text-2xl font-semibold">Cas d’usage</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Relance de devis, paniers abandonnés et formulaires non finalisés</li>
          <li>Prise de rendez‑vous automatisée, rappels et réduction du no‑show</li>
          <li>Qualification, scoring et routage des leads, réactivation de la base CRM</li>
        </ul>
      </section>

      <section id="workflows" className="space-y-3 mt-8">
        <h2 className="text-2xl font-semibold">Workflows types</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Séquences SMS + email + appel si non‑réponse</li>
          <li>Voice drops et messages pré‑enregistrés (base clients)</li>
          <li>Calendly + Click‑to‑call + rappels automatiques</li>
        </ul>
      </section>

      <section id="integrations" className="space-y-3 mt-8">
        <h2 className="text-2xl font-semibold">Intégrations</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>HubSpot, Pipedrive, Notion et Google Sheets</li>
          <li>Webhooks, Zapier/Make et APIs</li>
          <li>Tracking des conversions (GA4)</li>
        </ul>
      </section>

      <section id="conformite" className="space-y-3 mt-8">
        <h2 className="text-2xl font-semibold">Conformité RGPD/SMS</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Opt‑in explicite, message STOP pour SMS, preuve de consentement</li>
          <li>Gestion des préférences et plages horaires d’envoi</li>
          <li>Journalisation et conservation des preuves</li>
        </ul>
      </section>

      <section id="kpi" className="space-y-3 mt-8">
        <h2 className="text-2xl font-semibold">KPI</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Taux d’ouverture, de clics et de réponse</li>
          <li>Rendez‑vous bookés et no‑show</li>
          <li>Coût par lead et conversions</li>
        </ul>
      </section>
    </SectionPage>
  );
}



