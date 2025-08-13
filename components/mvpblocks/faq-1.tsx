import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { PlusIcon } from 'lucide-react';
// Animations retirées pour compatibilité RSC/Next build
import { cn } from '@/lib/utils';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from '@/components/ui/accordion';

export type FAQItem = {
  id?: string;
  title: string;
  content: string;
};

const defaultItems: FAQItem[] = [
  {
    id: '1',
    title: 'Y a‑t‑il un engagement ?',
    content:
      "Non. Nos accompagnements sont mensuels et résiliables à tout moment.",
  },
  {
    id: '2',
    title: 'Combien de temps pour voir des résultats ?',
    content:
      'Généralement sous 4 à 8 semaines sur le trafic et les conversions, selon votre point de départ.',
  },
  {
    id: '3',
    title: 'Travaillez‑vous avec mon secteur ?',
    content:
      'Oui: TPE/PME locales, services, retail, beauté/santé, coaching, immobilier…',
  },
  {
    id: '4',
    title: 'Que comprend le setup initial ?',
    content:
      'Audit, tracking (GA4/GSC), bases CRM, optimisation Google Business et plan d’actions priorisé.',
  },
  {
    id: '5',
    title: 'Proposez‑vous la création de contenus ?',
    content:
      'Oui: pages stratégiques, articles et posts Google Business optimisés SEO.',
  },
];

// Variants supprimés (pas de framer-motion)

export default function Faq1({
  items = defaultItems,
  title = 'Questions fréquentes',
  lead = 'Réponses aux questions les plus courantes sur nos offres et notre façon de travailler.',
}: {
  items?: FAQItem[];
  title?: string;
  lead?: string;
}) {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-10 text-center">
          <h2 className="mb-3 text-h2 font-bold tracking-tight">
            {title}
          </h2>
          <p className="text-foreground/80 mx-auto max-w-2xl text-lead">{lead}</p>
        </div>

        <div className="relative mx-auto max-w-3xl">
          {/* Decorative gradient (glass theme aligned) */}
          <div className="absolute -top-4 -left-4 -z-10 h-72 w-72 rounded-full bg-[--brand]/10 blur-3xl" />
          <div className="absolute -right-4 -bottom-4 -z-10 h-72 w-72 rounded-full bg-[--brand]/10 blur-3xl" />

          <Accordion
            type="single"
            collapsible
            className="glass-panel w-full rounded-xl p-2"
            defaultValue="1"
          >
            {items.map((item, index) => {
              const value = item.id ?? String(index + 1);
              return (
              <div key={value}>
                <AccordionItem
                  value={value}
                  className={cn(
                    'glass my-1 overflow-hidden rounded-lg px-2 transition-all',
                    'data-[state=open]:glass-highlight',
                  )}
                >
                  <AccordionPrimitive.Header className="flex">
                    <AccordionPrimitive.Trigger
                      className={cn(
                        'group flex flex-1 items-center justify-between gap-4 py-4 text-left text-base font-medium',
                        'hover:text-[--brand] transition-all duration-300 outline-none',
                        'focus-visible:ring-[--brand]/50 focus-visible:ring-2',
                        'data-[state=open]:text-[--brand]',
                      )}
                    >
                      {item.title}
                      <PlusIcon
                        size={18}
                        className={cn(
                          'text-[--brand]/70 shrink-0 transition-transform duration-300 ease-out',
                          'group-data-[state=open]:rotate-45',
                        )}
                        aria-hidden="true"
                      />
                    </AccordionPrimitive.Trigger>
                  </AccordionPrimitive.Header>
                  <AccordionContent
                    className={cn(
                      'text-foreground/80 overflow-hidden pt-0 pb-4',
                      'data-[state=open]:animate-accordion-down',
                      'data-[state=closed]:animate-accordion-up',
                    )}
                  >
                    <div className="border-white/10 border-t pt-3">
                      {item.content}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </div>
            );})}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
