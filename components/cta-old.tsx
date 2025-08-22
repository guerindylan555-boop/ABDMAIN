"use client";
import Link from 'next/link';

export default function CTAOld() {
  return (
    <section className="relative px-4 py-16 md:py-20 md:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
          <div className="relative z-10 grid gap-0 lg:grid-cols-2">
            <div className="p-8 md:p-12 lg:p-16">
              <div className="mb-6 inline-block rounded-full border border-white/15 bg-white/10 px-4 py-1 text-cyan-300">
                Plan d’action sur‑mesure
              </div>
              <h2 className="mb-6 text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
                Un plan d’action personnalisé pour propulser votre entreprise grâce à l’IA
              </h2>
              <p className="mb-8 text-lg text-white/80">
                Notre équipe conçoit et intègre des processus entièrement personnalisés, adaptés à vos spécificités. Profitez d’un accompagnement complet, de l’analyse initiale à la mise en œuvre, pour maximiser vos performances et vos résultats.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mt-1 mr-4 rounded-full bg-white/10 p-2 text-cyan-300">
                    ✓
                  </div>
                  <div>
                      <h3 className="text-lg font-bold text-white">Analyse sur‑mesure</h3>
                      <p className="text-white/70">Un diagnostic précis de votre contexte, de vos objectifs et de vos priorités business.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mt-1 mr-4 rounded-full bg-white/10 p-2 text-cyan-300">✓</div>
                  <div>
                      <h3 className="text-lg font-bold text-white">Mise en œuvre clé en main</h3>
                      <p className="text-white/70">Intégration fluide des meilleures technologies : agents IA, automatisations, CRM et outils marketing connectés.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mt-1 mr-4 rounded-full bg-white/10 p-2 text-cyan-300">✓</div>
                  <div>
                      <h3 className="text-lg font-bold text-white">Suivi & optimisation continue</h3>
                      <p className="text-white/70">Tableaux de bord clairs, résultats mesurables et ajustements permanents pour maximiser vos performances.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative flex flex-col justify-center p-8 text-white md:p-12 lg:p-16">
              <div className="relative z-10">
                <h3 className="mb-6 text-2xl font-bold tracking-tight md:text-3xl">Réservez une visio stratégique de 60 minutes</h3>
                <p className="mb-8 text-white/80">En 1h, repartez avec :</p>

                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full border-2 border-white text-lg font-bold">
                      1
                    </div>
                    <p className="text-lg">Une analyse claire de vos priorités</p>
                  </div>

                  <div className="flex items-center">
                    <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full border-2 border-white text-lg font-bold">
                      2
                    </div>
                    <p className="text-lg">Un plan d’action IA adapté à vos objectifs</p>
                  </div>

                  <div className="flex items-center">
                    <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full border-2 border-white text-lg font-bold">
                      3
                    </div>
                    <p className="text-lg">Une roadmap d’exécution avec KPI de suivi</p>
                  </div>
                </div>

                <div className="mt-10 rounded-xl bg-white/5 p-6">
                  <p className="text-lg font-medium">« En une seule visio, j’ai eu un plan clair pour booster mes réservations. On a mis en place des relances automatiques par SMS et un meilleur suivi des avis Google. Résultat : +18 nouveaux rendez-vous le mois suivant, sans que je passe plus de temps au téléphone. »</p>
                  <p className="mt-3 font-medium text-white/70">— Élodie, gérante d’un salon de beauté à Bordeaux</p>
                </div>

              <div className="mt-8">
                <Link href="/audit-custom" className="inline-flex w-full items-center justify-center rounded-md border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium hover:bg-white/15">
                  Réserver ma visio stratégique
                </Link>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
