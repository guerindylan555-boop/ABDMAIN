import type { Metadata } from "next";

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
    <main className="max-w-3xl mx-auto p-6 space-y-6">
      <h1 className="text-4xl font-bold tracking-tight">Automatisations appels & SMS</h1>
      <p className="text-neutral-700 dark:text-neutral-300">
        Nous mettons en place des séquences efficaces pour relancer vos prospects, diminuer le no‑show et récupérer des paniers.
      </p>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Capacités</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Rappels & relances (appels/SMS)</li>
          <li>Intégrations CRM (HubSpot, Notion…)</li>
          <li>Calendly / Click‑to‑call</li>
          <li>A/B testing et suivi des conversions</li>
        </ul>
      </section>
    </main>
  );
}



