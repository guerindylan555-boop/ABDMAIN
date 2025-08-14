export const dynamic = "force-static";
import type { Metadata } from "next";
import nextDynamic from "next/dynamic";
const Scheduler = nextDynamic(() => import("./Scheduler"), { ssr: false });
import { ButtonLink } from "@/app/components/ui/button";

export const metadata: Metadata = {
  title: "Audit sur‑mesure — Réserver une visio (60 min)",
  description:
    "Réservez une visio stratégique de 60 minutes: analyse personnalisée, plan d’action sur‑mesure et prochaines étapes concrètes.",
  alternates: { canonical: "/audit-custom" },
};

export default function AuditCustomPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
      <header className="rounded-2xl glass-highlight p-8 md:p-10">
        <span className="inline-flex items-center rounded-full border border-white/10 bg-white/10 px-2 py-1 text-[10px] tracking-wide uppercase">Audit</span>
        <h1 className="mt-2 text-h1 font-extrabold tracking-tight text-white">Audit sur‑mesure</h1>
        <p className="mt-3 text-neutral-300 text-lead max-w-3xl">
          Réservez une visio stratégique de 60 minutes. On analyse votre contexte, on priorise les leviers et
          vous repartez avec un plan d’action concret et actionnable. Pas de blabla — des résultats.
        </p>
      </header>

      <div className="mt-8 grid gap-8 md:grid-cols-[1.2fr_1fr]">
        <article className="rounded-2xl glass-panel p-6 md:p-8">
          <section>
            <h2 className="text-h2 font-bold">Ce que couvre le rendez‑vous</h2>
            <ul className="mt-4 space-y-2 text-neutral-300">
              {[ 
                "Analyse de votre site, Google Business et parcours d’acquisition",
                "Cartographie rapide de vos outils (CRM, tracking, messages, IA)",
                "Identification des gains rapides et des gisements d’opportunités",
                "Feuille de route priorisée pour les 30–60 prochains jours",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-[--brand]" />{item}
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-8">
            <h3 className="text-h3 font-semibold">Comment ça se passe</h3>
            <ol className="mt-4 space-y-2 text-neutral-300 list-decimal list-inside">
              <li>Vous choisissez un créneau ci‑contre</li>
              <li>Vous recevez un lien visio et un bref questionnaire</li>
              <li>Visio de 60 minutes: diagnostic, priorisation, plan d’action</li>
            </ol>

            <div className="mt-6">
              <ButtonLink href="/contact" variant="outline">Besoin d’échanger avant ?</ButtonLink>
            </div>
          </section>
        </article>

        <aside className="rounded-2xl glass-panel p-6 md:p-8">
          <h2 className="text-h3 font-semibold">Réserver un créneau</h2>
          <p className="mt-2 text-sm text-neutral-300">Sélectionnez une date et un horaire disponibles.</p>
          <div className="mt-4">
            <Scheduler />
          </div>
        </aside>
      </div>
    </main>
  );
}
