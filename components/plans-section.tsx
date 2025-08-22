import { GlowCard } from '@/components/glow-card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function PlansSection() {
  return (
    <section id="plans" className="relative z-10 w-full px-0 py-16 sm:py-16">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <h2 className="text-2xl font-semibold tracking-tight">Trois façons de travailler ensemble, selon vos ambitions</h2>
        <p className="mt-3 text-white/80">Que vous soyez en phase de lancement, en pleine accélération ou en recherche de solutions sur‑mesure, nous avons construit trois formules pensées pour accompagner chaque étape de votre croissance.</p>
      </div>

      {/* Full-bleed container */}
      <div className="mt-8 w-full">
        <div className="w-full border-y border-white/10 bg-white/5 py-10">
          <div className="mx-auto grid max-w-6xl gap-8 px-6 items-stretch lg:grid-cols-2">
            <div className="space-y-3 h-full flex flex-col">
              <h3 className="text-lg font-semibold tracking-tight">Un écosystème tout‑en‑un, simple et évolutif</h3>
              <p className="text-sm text-white/80">L’expertise IA & automatisation pour gagner du temps</p>
              <p className="text-sm text-white/80">Un accompagnement humain, concret et exigeant</p>
              <p className="text-sm text-white/80">Une communauté d’entrepreneurs qui partagent les mêmes enjeux</p>

              <div className="mt-auto flex flex-wrap justify-center gap-3 lg:justify-start">
                <Button asChild size="sm">
                  <Link href="/offres">Découvrir nos offres & tarifs</Link>
                </Button>
                <Button asChild size="sm" variant="outline">
                  <Link href="/contact">Parler à un expert</Link>
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
              <GlowCard
                title="Starter"
                description="Un pack clé en main pour démarrer avec un site optimisé, un blog vivant et les premiers outils d’automatisation."
                ctaLabel="Découvrir Starter"
                ctaHref="/offres#starter"
              />
              <GlowCard
                title="Croissance"
                description="Plus de contenu, plus d’automatisations et un suivi renforcé pour générer davantage de prospects qualifiés."
                ctaLabel="Découvrir Croissance"
                ctaHref="/offres#croissance"
                ctaAlign="center"
              />
              <GlowCard
                title="Performance"
                description="Une approche personnalisée avec audit stratégique, intégrations avancées et accompagnement adapté à vos équipes."
                ctaLabel="Parler à un expert"
                ctaHref="/contact"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
