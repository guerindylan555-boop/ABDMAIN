import type { Metadata } from "next";
import SectionPage from "@/app/components/marketing/SectionPage";

export const metadata: Metadata = {
  title: "Appels & Messages Hub",
  description: "Missed‑call text back, Call AI (après‑heures), bots mots‑clés & voicemail‑to‑SMS.",
  alternates: { canonical: "/hubs/call-messaging" },
};

export default function CallMessagingHubPage() {
  return (
    <SectionPage title="Appels & Messages Hub" description="Captez plus de leads et réduisez le no‑show automatiquement." tag="Hub">
      <ul className="list-disc pl-5 space-y-1">
        <li>Missed‑call text back & click‑to‑call</li>
        <li>Call AI après‑heures + voice drops</li>
        <li>Bots mots‑clés & routage</li>
        <li>Voicemail → SMS</li>
      </ul>
    </SectionPage>
  );
}


