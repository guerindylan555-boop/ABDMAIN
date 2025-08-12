import type { Metadata } from "next";
import SectionPage from "@/app/components/marketing/SectionPage";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Solutions — AB Digital",
  description:
    "Découvrez nos modes d'accompagnement: DIY (templates), DWY (plateforme + coaching), DFY (conseil & réalisations clés en main).",
  alternates: { canonical: "/solutions" },
};

export default function SolutionsIndex() {
  return (
    <SectionPage
      title="Solutions"
      description="Trois niveaux pour avancer selon vos besoins: faites-le vous‑même, avançons ensemble, ou laissez‑nous réaliser."
      tag="Solutions"
      toc={[]}
      hideAside
    >
      <div className="grid gap-4 md:grid-cols-3">
        {[
          { href: "/solutions/diy", label: "DIY", desc: "Templates & snapshots prêts à l'emploi" },
          { href: "/solutions/dwy", label: "DWY", desc: "Plateforme + coaching pour avancer ensemble" },
          { href: "/solutions/dfy", label: "DFY", desc: "Conseil & réalisations clés en main" },
        ].map((s) => (
          <Link key={s.href} href={s.href} className="glass-card rounded-xl p-5 border border-white/10 pressable">
            <h3 className="font-semibold">{s.label}</h3>
            <p className="text-sm text-neutral-300 mt-1">{s.desc}</p>
            <span className="mt-3 inline-flex items-center gap-1 text-sm text-brand">Explorer →</span>
          </Link>
        ))}
      </div>
    </SectionPage>
  );
}
