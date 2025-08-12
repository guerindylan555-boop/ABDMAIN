import type { Metadata } from "next";
import SectionPage from "@/app/components/marketing/SectionPage";

export const metadata: Metadata = {
  title: "Lead Gen Hub",
  description: "Aimants à leads, funnels, chat widget et séquences de nurturing. Option paid ads.",
  alternates: { canonical: "/hubs/lead-gen" },
};

export default function LeadGenHubPage() {
  return (
    <SectionPage title="Lead Gen Hub" description="Un socle pour capter et transformer plus de prospects." tag="Hub">
      <ul className="list-disc pl-5 space-y-1">
        <li>Lead magnet + pages de capture</li>
        <li>Widget chat + qualification</li>
        <li>Séquences de nurture multi‑canal</li>
        <li>Option gestion paid ads</li>
      </ul>
    </SectionPage>
  );
}


