'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Minus as MinusIcon, Plus as PlusIcon } from 'lucide-react';

interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'pricing' | 'technical' | 'support';
}

const faqItems: FaqItem[] = [
  {
    id: '1',
    question: 'Combien de temps pour livrer un site ? ',
    answer:
      "Selon la portée: 2–4 semaines pour un site vitrine, 4–8 semaines pour un site plus complet (contenus, intégrations, formulaires avancés). Nous cadrons un planning clair dès le départ.",
    category: 'general',
  },
  {
    id: '2',
    question: 'Proposez‑vous le paiement mensuel et annuel ?',
    answer:
      "Oui. L'offre mensuelle est sans surprise et résiliable, l'offre annuelle vous fait économiser jusqu’à 20% avec la même qualité de service.",
    category: 'pricing',
  },
  {
    id: '3',
    question: 'Quelles automatisations IA mettez‑vous en place ?',
    answer:
      "Relances multicanales (SMS, email, WhatsApp), agents IA pour qualifier/relancer, récupération d’appels manqués, formulaires intelligents et workflows CRM sur mesure.",
    category: 'technical',
  },
  {
    id: '4',
    question: 'Est‑ce compatible avec mon CRM actuel ?',
    answer:
      "Dans la plupart des cas oui. Nous connectons vos outils existants (HubSpot, Pipedrive, Notion, Airtable, etc.) ou proposons un CRM tout‑en‑un si besoin.",
    category: 'technical',
  },
  {
    id: '5',
    question: 'Comment gérez‑vous le SEO ?',
    answer:
      "Fondations techniques (vitesse, sémantique, balises), contenus optimisés, maillage interne et optimisation Google Business pour maximiser la visibilité locale.",
    category: 'general',
  },
  {
    id: '6',
    question: 'Que couvre le support ? ',
    answer:
      "Selon l’offre: support basique (chat quotidien), prioritaire (SLA court), ou premium (accompagnement rapproché, ajustements proactifs, suivi KPI).",
    category: 'support',
  },
  {
    id: '7',
    question: 'Mes données sont‑elles sécurisées ?',
    answer:
      "Oui. Hébergement fiable, sauvegardes régulières, chiffrement en transit, gestion stricte des accès. Nous suivons les bonnes pratiques RGPD et sécurité applicative.",
    category: 'technical',
  },
  {
    id: '8',
    question: 'Pouvez‑vous reprendre un site existant ?',
    answer:
      "Oui. Nous auditons l’existant (technique, contenus, SEO, tracking), puis proposons soit une refonte ciblée, soit une migration propre vers une base moderne et performante.",
    category: 'general',
  },
];

const categories = [
  { id: 'all', label: 'Tous' },
  { id: 'general', label: 'Général' },
  { id: 'technical', label: 'Technique' },
  { id: 'pricing', label: 'Tarifs' },
  { id: 'support', label: 'Support' },
];

export default function FaqSection() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filteredFaqs =
    activeCategory === 'all'
      ? faqItems
      : faqItems.filter((item) => item.category === activeCategory);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="py-16 sm:py-16">
      <div className="container mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-12 flex flex-col items-center">
          <Badge
            variant="outline"
            className="mb-4 rounded-full border px-3 py-1 text-xs font-medium tracking-wider uppercase"
          >
            FAQs
          </Badge>

          <h2 className="mb-6 text-center text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Questions fréquentes
          </h2>

          <p className="max-w-2xl text-center text-muted-foreground">
            Réponses aux questions les plus courantes sur nos offres, notre méthode et nos intégrations.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                'rounded-full px-4 py-2 text-sm font-medium transition-all',
                activeCategory === category.id
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
              )}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <AnimatePresence>
            {filteredFaqs.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className={cn(
                  'h-fit overflow-hidden rounded-xl border border-border bg-card/50',
                  expandedId === faq.id && 'shadow-3xl',
                )}
                style={{ minHeight: '88px' }}
              >
                <button
                  onClick={() => toggleExpand(faq.id)}
                  className="flex w-full items-center justify-between p-6 text-left"
                >
                  <h3 className="text-lg font-medium text-foreground">
                    {faq.question}
                  </h3>
                  <div className="ml-4 flex-shrink-0">
                    {expandedId === faq.id ? (
                      <MinusIcon className="h-5 w-5 text-primary" />
                    ) : (
                      <PlusIcon className="h-5 w-5 text-primary" />
                    )}
                  </div>
                </button>

                <AnimatePresence>
                  {expandedId === faq.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-border px-6 pt-2 pb-6">
                        <p className="text-muted-foreground">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="mb-4 text-muted-foreground">Vous ne trouvez pas votre réponse ?</p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg border-2 border-primary px-6 py-3 font-medium text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            Contacter le support
          </a>
        </motion.div>
      </div>
    </section>
  );
}
