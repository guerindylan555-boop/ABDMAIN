'use client';

import { useState, useEffect } from 'react';
import { motion, useMotionValue, animate } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Sparkles, ArrowRight, Check, Star, Zap, Shield } from 'lucide-react';

type PlanId = 'starter' | 'growth' | 'performance';

type Billing = 'monthly' | 'yearly';

type PriceValue = number | 'Sur devis';
type Plan = {
  id: PlanId;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  price: { monthly: PriceValue; yearly: PriceValue };
  savings?: string; // only for yearly
  features: string[];
  cta: string;
  popular?: boolean;
};

const plansByBilling: Record<Billing, Plan[]> = {
  monthly: [
    {
      id: 'starter',
      name: 'Starter',
      icon: Star,
      description:
        'Idéal pour poser les bases : visibilité, crédibilité et premiers clients.',
      price: { monthly: 149, yearly: 119 },
      features: [
        'Site web & blog sur mesure (jusqu’à 5 pages)',
        '1 article de blog optimisé SEO / mois',
        'Chat IA intégré pour capter vos visiteurs',
        'CRM multicanal (email, SMS, DM)',
        'Gestion Google Business & collecte d’avis',
        'Tableaux de bord simples et lisibles',
        'Support basique inclus (chat quotidien)'
      ],
      cta: 'Choisir Starter'
    },
    {
      id: 'growth',
      name: 'Croissance',
      icon: Zap,
      description:
        'Pensé pour les entreprises qui veulent générer plus de leads et automatiser leur marketing.',
      price: { monthly: 399, yearly: 319 },
      features: [
        'Tout du plan Starter',
        'Pages web illimitées',
        'Jusqu’à 50 articles SEO / mois',
        'Optimisation de la réputation Google (avis & notes)',
        'Récupération automatique des appels manqués',
        'Automatisations & déclencheurs personnalisés',
        'Support prioritaire inclus'
      ],
      cta: 'Choisir Croissance',
      popular: true
    },
    {
      id: 'performance',
      name: 'Performance',
      icon: Shield,
      description:
        'L’accompagnement premium, pour les entreprises qui veulent aller au-delà des standards.',
      price: { monthly: 'Sur devis', yearly: 'Sur devis' },
      features: [
        'Tout du plan Croissance',
        'Audit stratégique 100 % personnalisé',
        'Conception & intégration de solutions sur mesure',
        'Gestion complète des systèmes',
        'Formation et accompagnement de vos équipes',
        'Support premium & suivi rapproché'
      ],
      cta: 'Réserver un audit'
    }
  ],
  yearly: [
    {
      id: 'starter',
      name: 'Starter',
      icon: Star,
      description:
        'Idéal pour poser les bases : visibilité, crédibilité et premiers clients.',
      price: { monthly: 149, yearly: 119 },
      savings: 'Économisez 358 € par an (facturation annuelle)',
      features: [
        'Site web & blog sur mesure (jusqu’à 5 pages)',
        '1 article de blog optimisé SEO / mois',
        'Chat IA intégré pour capter vos visiteurs',
        'CRM multicanal (email, SMS, DM)',
        'Gestion Google Business & collecte d’avis',
        'Tableaux de bord simples et lisibles',
        'Support basique inclus (chat quotidien)'
      ],
      cta: 'Choisir Starter'
    },
    {
      id: 'growth',
      name: 'Croissance',
      icon: Zap,
      description:
        'Pensé pour les entreprises qui veulent générer plus de leads et automatiser leur marketing.',
      price: { monthly: 399, yearly: 319 },
      savings: 'Économisez 958 € par an (facturation annuelle)',
      features: [
        'Tout du plan Starter',
        'Pages web illimitées',
        'Jusqu’à 50 articles SEO / mois',
        'Optimisation de la réputation Google (avis & notes)',
        'Récupération automatique des appels manqués',
        'Automatisations & déclencheurs personnalisés',
        'Support prioritaire inclus'
      ],
      cta: 'Choisir Croissance',
      popular: true
    },
    {
      id: 'performance',
      name: 'Performance',
      icon: Shield,
      description:
        'L’accompagnement premium, pour les entreprises qui veulent aller au-delà des standards.',
      price: { monthly: 'Sur devis', yearly: 'Sur devis' },
      features: [
        'Tout du plan Croissance',
        'Audit stratégique 100 % personnalisé',
        'Conception & intégration de solutions sur mesure',
        'Gestion complète des systèmes',
        'Formation et accompagnement de vos équipes',
        'Support premium & suivi rapproché'
      ],
      cta: 'Réserver un audit'
    }
  ]
};

export default function PricingSection() {
  const [frequency, setFrequency] = useState<Billing>('yearly');
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const plans = plansByBilling[frequency];

  return (
    <section id="pricing" className="relative z-10 w-full px-0 py-16 sm:py-16">

      <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-8 px-6 text-center">
        <div className="space-y-2">
          <div className="border-primary/20 bg-primary/5 mx-auto mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-1 text-sm font-medium">
            <Sparkles className="text-primary h-3.5 w-3.5 animate-pulse" />
            Offres & Tarifs
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-semibold text-foreground sm:text-4xl"
          >
            Des offres simples, transparentes et adaptées à chaque étape de votre croissance
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mx-auto max-w-2xl pt-2 text-lg text-foreground"
          >
            Aucun frais caché. Vous payez pour la valeur que vous recevez, rien de plus.
          </motion.p>
        </div>

        {/* Tabs */}
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4, delay: 0.2 }}>
          <div className="bg-muted/30 inline-flex items-center rounded-full p-1 shadow-sm">
            <button
              onClick={() => setFrequency('monthly')}
              className={cn(
                'rounded-full px-4 py-1.5 text-sm transition-all duration-300',
                frequency === 'monthly' ? 'bg-background shadow-sm' : 'opacity-70 hover:opacity-100'
              )}
            >
              Mensuel
            </button>
            <button
              onClick={() => setFrequency('yearly')}
              className={cn(
                'rounded-full px-4 py-1.5 text-sm transition-all duration-300',
                frequency === 'yearly' ? 'bg-background shadow-sm' : 'opacity-70 hover:opacity-100'
              )}
            >
              Annuel
              <span className="bg-primary/10 text-primary ml-2 rounded-full px-2 py-0.5 text-xs">–20%</span>
            </button>
          </div>
        </motion.div>

        {/* Cards */}
        <div className="mt-8 grid w-full max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              whileHover={{ y: -5 }}
              className="flex"
            >
              <div
                className={cn(
                  'bg-secondary/20 relative flex h-full w-full flex-col rounded-lg border border-white/10 p-5 text-left transition-all duration-300 hover:shadow-lg',
                  plan.popular ? 'ring-2 ring-primary/50 shadow-md dark:shadow-primary/10' : 'hover:border-primary/30',
                  plan.popular && 'bg-gradient-to-b from-primary/[0.03] to-transparent'
                )}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-0 right-0 mx-auto w-fit">
                    <span className="bg-primary text-primary-foreground rounded-full px-4 py-1 text-xs shadow-sm inline-flex items-center gap-1">
                      <Sparkles className="h-3.5 w-3.5" /> Populaire
                    </span>
                  </div>
                )}

                <div className={cn('pb-4', plan.popular && 'pt-8')}>
                  <div className="flex items-center gap-2">
                    <div className={cn('flex h-8 w-8 items-center justify-center rounded-full', plan.popular ? 'bg-primary/10 text-primary' : 'bg-secondary text-foreground')}>
                      <plan.icon className="h-4 w-4" />
                    </div>
                    <div className={cn('text-xl font-bold', plan.popular && 'text-primary')}>{plan.name}</div>
                  </div>
                  <div className="mt-3 space-y-2 text-sm">
                    <p>{plan.description}</p>
                    <div className="pt-2">
                      <div className="flex items-baseline whitespace-nowrap">
                        <span className={cn('text-3xl font-bold', plan.popular ? 'text-primary' : 'text-foreground')}>
                          {typeof (plan.price[frequency]) === 'number' ? (
                            <AnimatedPrice amount={plan.price[frequency] as number} />
                          ) : (
                            plan.price[frequency]
                          )}
                        </span>
                      </div>
                      {plan.savings && frequency === 'yearly' && (
                        <span className="block text-muted-foreground mt-1 text-xs">
                          {plan.savings}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="grid flex-1 gap-3 pb-6">
                  {plan.features.map((feature, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -5 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.5 + i * 0.05 }}
                      className="flex items-center gap-2 text-sm"
                    >
                      <div className={cn('flex h-5 w-5 items-center justify-center rounded-full', plan.popular ? 'bg-primary/10 text-primary' : 'bg-secondary text-secondary-foreground')}>
                        <Check className="h-3.5 w-3.5" />
                      </div>
                      <span className={plan.popular ? 'text-foreground' : 'text-muted-foreground'}>{feature}</span>
                    </motion.div>
                  ))}
                </div>

                <div>
                  {plan.id === 'performance' ? (
                    <Button
                      asChild
                      variant={plan.popular ? 'default' : 'outline'}
                      className={cn(
                        'group w-full font-medium transition-all duration-300',
                        plan.popular
                          ? 'bg-primary hover:bg-primary/90 hover:shadow-primary/20 hover:shadow-md'
                          : 'hover:border-primary/30 hover:bg-primary/5 hover:text-primary'
                      )}
                    >
                      <a href="/audit-custom">
                        {plan.cta}
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </a>
                    </Button>
                  ) : (
                    <Button
                      variant={plan.popular ? 'default' : 'outline'}
                      className={cn(
                        'group w-full font-medium transition-all duration-300',
                        plan.popular
                          ? 'bg-primary hover:bg-primary/90 hover:shadow-primary/20 hover:shadow-md'
                          : 'hover:border-primary/30 hover:bg-primary/5 hover:text-primary'
                      )}
                    >
                      {plan.cta}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Button>
                  )}
                </div>

                {plan.popular ? (
                  <>
                    <div className="pointer-events-none absolute inset-0 rounded-lg ring-1 ring-primary/20" />
                    <div className="from-primary/[0.05] pointer-events-none absolute bottom-0 left-0 right-0 h-1/2 rounded-b-lg bg-gradient-to-t to-transparent" />
                  </>
                ) : (
                  <div className="hover:border-primary/10 pointer-events-none absolute inset-0 rounded-lg border border-transparent opacity-0 transition-opacity duration-300 hover:opacity-100" />
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AnimatedPrice({ amount }: { amount: number }) {
  const motionValue = useMotionValue(amount);
  const [display, setDisplay] = useState<number>(amount);

  useEffect(() => {
    const controls = animate(motionValue, amount, { duration: 0.45, ease: 'easeOut' });
    const unsub = motionValue.on('change', (v) => setDisplay(Math.round(v)));
    return () => {
      controls.stop();
      unsub();
    };
  }, [amount, motionValue]);

  return (
    <span className="whitespace-nowrap">
      {display}
      {'\u00A0'}€
    </span>
  );
}
