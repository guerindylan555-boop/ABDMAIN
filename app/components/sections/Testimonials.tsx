import { Card, CardContent } from "@/app/components/ui/card";

const testimonials = [
  {
    name: "Les Halles Beauté",
    sector: "Institut de beauté — Tours centre",
    text:
      "+30 avis en 90 jours (4,8★), no‑show −22% avec rappels SMS, créneaux 'pause déjeuner' remplis.",
    href: "/etudes-de-cas/les-halles-beaute",
  },
  {
    name: "Couvreur Tourangeau",
    sector: "Couvreur — Saint‑Avertin / Tours Métropole",
    text:
      "Top‑3 sur 'couvreur Tours' & 'démoussage toiture Tours', 10 études de cas publiées, +25 avis.",
    href: "/etudes-de-cas/couvreur-tourangeau",
  },
  {
    name: "La Cave du Vieux‑Tours",
    sector: "Caviste — Rue Colbert, Vieux‑Tours",
    text:
      "+40 avis en 90 jours (4,8★), 2 événements/mois (≥20 inscrits), 50 abonnés '3 bouteilles/mois'.",
    href: "/etudes-de-cas/la-cave-du-vieux-tours",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rounded-2xl glass-panel p-8 md:p-10">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Témoignages</h2>
            <p className="mt-3 text-neutral-700 dark:text-neutral-300">Des résultats concrets, rapidement.</p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <Card key={t.name} className="pressable">
                <CardContent>
                  <a href={t.href} aria-label={`Lire l’étude de cas ${t.name}`}>
                    <blockquote>
                      <p className="text-neutral-900 dark:text-neutral-100">“{t.text}”</p>
                      <footer className="mt-4 text-sm text-neutral-700 dark:text-neutral-300">
                        <span className="font-medium">{t.name}</span>
                        <span className="block text-xs text-neutral-500 dark:text-neutral-400">{t.sector}</span>
                      </footer>
                      <span className="mt-4 inline-flex items-center gap-1 text-sm text-[--brand]">Lire l’étude de cas →</span>
                    </blockquote>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


