import type { Metadata } from "next";
import SectionPage from "@/app/components/marketing/SectionPage";
import { Card, CardHeader, CardTitle, CardContent } from "@/app/components/ui/card";

export const metadata: Metadata = {
  title: "Hubs — SEO, Réputation, Appels & Messages, Lead Gen",
  description:
    "Des modules packagés pour répondre à vos besoins récurrents: SEO local & IA, réputation & avis, appels & messages, lead gen.",
  alternates: { canonical: "/hubs" },
};

const hubs = [
  { title: "SEO Hub (Local + IA)", href: "/hubs/seo", items: ["Calendrier éditorial IA", "Maillage & schémas", "Citations & GMB"] },
  { title: "Réputation Hub", href: "/hubs/reputation", items: ["Capture d’avis", "Réponses IA", "Déflection négatifs"] },
  { title: "Appels & Messages Hub", href: "/hubs/call-messaging", items: ["Missed‑call text back", "Call AI", "Bots mots‑clés"] },
  { title: "Lead Gen Hub", href: "/hubs/lead-gen", items: ["Aimants à leads", "Funnels", "Nurture"] },
];

export default function HubsIndexPage() {
  return (
    <SectionPage title="Hubs" description="Des modules prêts à l’emploi pour accélérer sans complexité." tag="Modules" hideAside>
      <div className="grid sm:grid-cols-2 gap-4">
        {hubs.map((h) => (
          <a key={h.title} href={h.href}>
            <Card className="pressable">
              <CardHeader>
                <CardTitle>{h.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  {h.items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </a>
        ))}
      </div>
    </SectionPage>
  );
}


