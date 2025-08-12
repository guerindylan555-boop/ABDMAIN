import { Marquee } from "@/components/ui/marquee";

const testimonials = [
  {
    quote:
      "+30 avis en 90 jours (4,8★), no‑show −22% avec rappels SMS, créneaux 'pause déjeuner' remplis.",
    author: "Les Halles Beauté",
  },
  {
    quote:
      "Top‑3 sur 'couvreur Tours' & 'démoussage toiture Tours', 10 études de cas publiées, +25 avis.",
    author: "Couvreur Tourangeau",
  },
  {
    quote:
      "+40 avis en 90 jours (4,8★), 2 événements/mois (≥20 inscrits), 50 abonnés '3 bouteilles/mois'.",
    author: "La Cave du Vieux‑Tours",
  },
  {
    quote: "CPA −18% et volume de leads +35% en 60 jours (Google Ads).",
    author: "PME Services",
  },
];

export default function Logos() {
  return (
    <section id="clients" className="py-16 scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rounded-2xl glass-panel p-8">
          <p className="text-center text-sm text-neutral-600 dark:text-neutral-300">Ils nous font confiance</p>
          <div className="mt-6">
            <Marquee pauseOnHover className="[--duration:25s]">
              {testimonials.map((t, i) => (
                <figure key={i} className="mx-4 rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-neutral-100">
                  <blockquote>“{t.quote}”</blockquote>
                  <figcaption className="mt-2 text-xs text-neutral-300">{t.author}</figcaption>
                </figure>
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  );
}


