'use client';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import NumberFlow from '@number-flow/react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Sparkles, ArrowRight, Check, Star, Zap, Shield } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const plans = [
  {
    id: 'diy',
    name: 'DIY',
    icon: Star,
    price: {
      monthly: '49–99€ / mois',
      yearly: '49–99€ / mois',
    },
    description:
      'Templates & snapshots (sites, funnels, agents IA, automations) avec vidéos et checklists.',
    features: [
      "Modèles prêts à l’emploi",
      'Guides vidéo & checklists',
      'Mises à jour régulières',
    ],
    cta: 'Choisir DIY',
  },
  {
    id: 'dwy',
    name: 'DWY',
    icon: Zap,
    price: {
      monthly: '249–797€ / mois',
      yearly: '249–797€ / mois',
    },
    description:
      'Sous‑compte tout‑en‑un (CRM, tunnels, calendriers, facturation) + templates + coaching hebdo.',
    features: [
      'Templates & snapshots inclus',
      'Coaching hebdomadaire',
      'Sprints d’implémentation',
      'Support prioritaire',
    ],
    cta: 'Choisir DWY',
    popular: true,
  },
  {
    id: 'dfy',
    name: 'DFY',
    icon: Shield,
    price: {
      monthly: 'à partir de 1 500€',
      yearly: 'à partir de 1 500€',
    },
    description:
      'Conseil + réalisation clé en main (site/funnel, SEO local, agents IA, automations).',
    features: [
      'Diagnostic 90 min offert (déduit)',
      'Site/Funnel + tracking propre',
      'SEO local & Google Business',
      'Automatisations appels/SMS/IA',
    ],
    cta: 'Nous contacter',
  },
];

export default function SimplePricing() {
  const [frequency, setFrequency] = useState<string>('monthly');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="not-prose relative flex w-full flex-col gap-16 overflow-hidden px-4 py-24 text-center sm:px-8">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="bg-primary/5 absolute -right-[10%] -bottom-[10%] h-[40%] w-[40%] rounded-full blur-3xl" />
        <div className="bg-primary/5 absolute -bottom-[10%] -left-[10%] h-[40%] w-[40%] rounded-full blur-3xl" />
      </div>

      <div className="flex flex-col items-center justify-center gap-8">
        <div className="flex flex-col items-center space-y-2">
          <Badge
            variant="outline"
            className="border-primary/20 bg-primary/5 mb-4 rounded-full px-4 py-1 text-sm font-medium"
          >
            <Sparkles className="text-primary mr-1 h-3.5 w-3.5 animate-pulse" />
            Offres & Tarifs
          </Badge>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="from-foreground to-foreground/30 bg-gradient-to-b bg-clip-text text-4xl font-bold text-transparent sm:text-5xl"
          >
            Choisissez la meilleure offre pour vos besoins
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-muted-foreground max-w-md pt-2 text-lg"
          >
            Des tarifs simples et transparents qui évoluent avec votre entreprise. Aucun frais caché, aucune surprise.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <Tabs
            defaultValue={frequency}
            onValueChange={setFrequency}
            className="bg-muted/30 inline-block rounded-full p-1 shadow-sm"
          >
              <TabsList className="bg-transparent">
                <TabsTrigger
                  value="monthly"
                  className="data-[state=active]:bg-background rounded-full transition-all duration-300 data-[state=active]:shadow-sm"
                >
                  Mensuel
                </TabsTrigger>
                <TabsTrigger
                  value="yearly"
                  className="data-[state=active]:bg-background rounded-full transition-all duration-300 data-[state=active]:shadow-sm"
                >
                  Annuel
                  <Badge
                    variant="secondary"
                    className="bg-primary/10 text-primary hover:bg-primary/15 ml-2"
                  >
                    –20%
                  </Badge>
                </TabsTrigger>
              </TabsList>
          </Tabs>
        </motion.div>

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
              <div className="glow-card w-full">
                <div className="glow" />
                <Card
                  className={cn(
                    'bg-secondary/20 relative h-full w-full text-left transition-all duration-300 hover:shadow-lg',
                    plan.popular
                      ? 'ring-primary/50 dark:shadow-primary/10 shadow-md ring-2'
                      : 'hover:border-primary/30',
                    plan.popular &&
                      'from-primary/[0.03] bg-gradient-to-b to-transparent',
                  )}
                >
                {plan.popular && (
                  <div className="absolute -top-3 right-0 left-0 mx-auto w-fit">
                    <Badge className="bg-primary text-primary-foreground rounded-full px-4 py-1 shadow-sm">
                      <Sparkles className="mr-1 h-3.5 w-3.5" />
                      Popular
                    </Badge>
                  </div>
                )}
                <CardHeader className={cn('pb-4', plan.popular && 'pt-8')}>
                  <div className="flex items-center gap-2">
                    <div
                      className={cn(
                        'flex h-8 w-8 items-center justify-center rounded-full',
                        plan.popular
                          ? 'bg-primary/10 text-primary'
                          : 'bg-secondary text-foreground',
                      )}
                    >
                      <plan.icon className="h-4 w-4" />
                    </div>
                    <CardTitle
                      className={cn(
                        'text-xl font-bold',
                        plan.popular && 'text-primary',
                      )}
                    >
                      {plan.name}
                    </CardTitle>
                  </div>
                  <CardDescription className="mt-3 space-y-2">
                    <p className="text-sm">{plan.description}</p>
                    <div className="pt-2">
                      {(() => {
                        const priceAny = plan.price[
                          frequency as keyof typeof plan.price
                        ] as unknown;
                        if (typeof priceAny === 'number') {
                          return (
                            <div className="flex items-baseline">
                              <NumberFlow
                                className={cn(
                                  'text-3xl font-bold',
                                  plan.popular ? 'text-primary' : 'text-foreground',
                                )}
                                format={{
                                  style: 'currency',
                                  currency: 'EUR',
                                  maximumFractionDigits: 0,
                                }}
                                value={priceAny as number}
                              />
                              <span className="text-muted-foreground ml-1 text-sm">
                                /mois, facturation {frequency === 'monthly' ? 'mensuelle' : 'annuelle'}
                              </span>
                            </div>
                          );
                        }
                        return (
                          <span
                            className={cn(
                              'text-2xl font-bold',
                              plan.popular ? 'text-primary' : 'text-foreground',
                            )}
                          >
                            {priceAny as string}
                          </span>
                        );
                      })()}
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-3 pb-6">
                  {plan.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -5 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                      className="flex items-center gap-2 text-sm"
                    >
                      <div
                        className={cn(
                          'flex h-5 w-5 items-center justify-center rounded-full',
                          plan.popular
                            ? 'bg-primary/10 text-primary'
                            : 'bg-secondary text-secondary-foreground',
                        )}
                      >
                        <Check className="h-3.5 w-3.5" />
                      </div>
                      <span
                        className={
                          plan.popular
                            ? 'text-foreground'
                            : 'text-muted-foreground'
                        }
                      >
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </CardContent>
                <CardFooter>
                  <Button
                    variant={plan.popular ? 'default' : 'outline'}
                    className={cn(
                      'w-full font-medium transition-all duration-300',
                      plan.popular
                        ? 'bg-primary hover:bg-primary/90 hover:shadow-primary/20 hover:shadow-md'
                        : 'hover:border-primary/30 hover:bg-primary/5 hover:text-primary',
                    )}
                  >
                    {plan.cta}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </CardFooter>

                {/* Subtle gradient effects */}
                {plan.popular ? (
                  <>
                    <div className="from-primary/[0.05] pointer-events-none absolute right-0 bottom-0 left-0 h-1/2 rounded-b-lg bg-gradient-to-t to-transparent" />
                    <div className="border-primary/20 pointer-events-none absolute inset-0 rounded-lg border" />
                  </>
                ) : (
                  <div className="hover:border-primary/10 pointer-events-none absolute inset-0 rounded-lg border border-transparent opacity-0 transition-opacity duration-300 hover:opacity-100" />
                )}
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
        <style jsx>{`
          @property --a {
            syntax: '<angle>';
            initial-value: 0deg;
            inherits: false;
          }

          @keyframes a {
            to { --a: 1turn; }
          }

          .glow-card { position: relative; overflow: visible; }
          .glow-card .glow {
            position: absolute;
            z-index: -1;
            inset: -1em;
            border: solid 1.25em;
            border-image: conic-gradient(
              from var(--a),
              #669900,
              #99cc33,
              #ccee66,
              #006699,
              #3399cc,
              #990066,
              #cc3399,
              #ff6600,
              #ff9900,
              #ffcc00,
              #669900
            ) 1;
            filter: blur(0.75em);
            animation: a 4s linear infinite;
            pointer-events: none;
            border-radius: 1rem;
          }
        `}</style>
      </div>
    </div>
  );
}
