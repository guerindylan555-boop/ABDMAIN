'use client';

import { cn } from '@/lib/utils';
// framer-motion retiré pour compatibilité RSC/Next build
import { Star } from 'lucide-react';
import { Marquee } from '@/components/ui/marquee';

export function Highlight({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        'bg-brand-10 p-1 py-0.5 font-bold text-brand',
        className,
      )}
    >
      {children}
    </span>
  );
}

export interface TestimonialCardProps {
  name: string;
  role: string;
  img?: string;
  description: React.ReactNode;
  className?: string;
  [key: string]: unknown;
}

export function TestimonialCard({
  description,
  name,
  img,
  role,
  className,
  ...props // Capture the rest of the props
}: TestimonialCardProps) {
  return (
    <div
      className={cn(
        'mb-4 flex w-full cursor-pointer break-inside-avoid flex-col items-center justify-between gap-6 rounded-xl p-4',
        // theme styles
        'border-border bg-card/50 border shadow-sm',
        // hover effect
        'transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md',
        className,
      )}
      {...props}
    >
      <div className="text-muted-foreground text-sm font-normal select-none">
        {description}
        <div className="flex flex-row py-1">
          <Star className="size-4 text-brand" fill="currentColor" stroke="currentColor" />
          <Star className="size-4 text-brand" fill="currentColor" stroke="currentColor" />
          <Star className="size-4 text-brand" fill="currentColor" stroke="currentColor" />
          <Star className="size-4 text-brand" fill="currentColor" stroke="currentColor" />
          <Star className="size-4 text-brand" fill="currentColor" stroke="currentColor" />
        </div>
      </div>

      <div className="flex w-full items-center justify-start gap-5 select-none">
        <img
          width={40}
          height={40}
          src={img || ''}
          alt={name}
          loading="lazy"
          decoding="async"
          fetchPriority="low"
          className="size-10 rounded-full ring-1 ring-brand-20 ring-offset-2"
        />

        <div>
          <p className="text-foreground font-medium">{name}</p>
          <p className="text-muted-foreground text-xs font-normal">{role}</p>
        </div>
      </div>
    </div>
  );
}
const testimonials = [
  {
    name: 'Sophie M.',
    role: "Gérante — Institut de beauté (Tours)",
    img: 'https://randomuser.me/api/portraits/women/12.jpg',
    description: (
      <p>
        « En 90 jours, on est passés de 0 à +30 avis (4,8★). »
        <Highlight>No‑show réduit de 22% grâce aux rappels SMS</Highlight> et
        les créneaux « pause déjeuner » sont désormais pleins chaque semaine.
      </p>
    ),
  },
  {
    name: 'Nadia B.',
    role: 'Patronne — Salon de coiffure (Nantes) ',
    img: 'https://randomuser.me/api/portraits/women/45.jpg',
    description: (
      <p>
        Les pages services et Google Business ont fait la différence.
        <Highlight>Les RDV colorations du mardi/mercredi ont doublé</Highlight>{' '}
        en 6 semaines, avec un suivi clair des appels.
      </p>
    ),
  },
  {
    name: 'Julien R.',
    role: 'Fondateur — Barbier premium (Lyon)',
    img: 'https://randomuser.me/api/portraits/men/41.jpg',
    description: (
      <p>
        On a lancé les abonnements « entretien » sans perdre le côté haut de gamme.
        <Highlight>+38% d’adhésions en 2 mois</Highlight> avec un tunnel clair et du retargeting propre.
      </p>
    ),
  },
  {
    name: 'Claire D.',
    role: 'Directrice — Spa & bien‑être (Bordeaux)',
    img: 'https://randomuser.me/api/portraits/women/68.jpg',
    description: (
      <p>
        Cartes cadeaux et packs duo structurés.
        <Highlight>Q4 à +52% vs N‑1</Highlight>{' '}grâce aux campagnes saisonnières et aux posts Google Business.
      </p>
    ),
  },
  {
    name: 'Thomas L.',
    role: "Directeur d'agence — Immobilier (Paris 11e)",
    img: 'https://randomuser.me/api/portraits/men/22.jpg',
    description: (
      <p>
        Les entonnoirs d’estimation ont ramené des vendeurs sérieux.
        <Highlight>Coût par estimation −34%</Highlight> et plus de mandats exclusifs ce trimestre.
      </p>
    ),
  },
  {
    name: 'Marine S.',
    role: 'Responsable — Gestion locative (Lille)',
    img: 'https://randomuser.me/api/portraits/women/33.jpg',
    description: (
      <p>
        On a automatisé les relances visite.
        <Highlight>Taux de no‑show visites −29%</Highlight>{' '}et un meilleur débit de signatures bailleurs.
      </p>
    ),
  },
  {
    name: 'Pierre A.',
    role: 'Head of Growth — Réseau de mandataires',
    img: 'https://randomuser.me/api/portraits/men/78.jpg',
    description: (
      <p>
        Recrutement prévisible, enfin.
        <Highlight>Coût par candidature qualifiée −41%</Highlight> avec pages dédiées + nurturing SMS.
      </p>
    ),
  },
  {
    name: 'Karim E.',
    role: 'Gérant — Plomberie urgences (Toulouse)',
    img: 'https://randomuser.me/api/portraits/men/92.jpg',
    description: (
      <p>
        Campagnes call‑only et GBP propres.
        <Highlight>+63% d’appels qualifiés</Highlight>{' '}et filtrage anti‑clics frauduleux.
      </p>
    ),
  },
  {
    name: 'Luc P.',
    role: 'Artisan — Électricien B2B (Strasbourg)',
    img: 'https://randomuser.me/api/portraits/men/55.jpg',
    description: (
      <p>
        Un site rapide avec des pages métiers claires.
        <Highlight>Devis IRVE & tableaux: +47%</Highlight>{' '}et une meilleure crédibilité auprès des pros.
      </p>
    ),
  },
  {
    name: 'Stéphane G.',
    role: 'Dirigeant — Couvreur (Tours Métropole)',
    img: 'https://randomuser.me/api/portraits/men/32.jpg',
    description: (
      <p>
        Double entonnoir urgences/rénovation.
        <Highlight>Top‑3 local sur mots clés clés</Highlight>{' '}et une hausse nette des appels « bâchage ».
      </p>
    ),
  },
  {
    name: 'Aline V.',
    role: 'Peintre décoratrice (Rennes)',
    img: 'https://randomuser.me/api/portraits/women/29.jpg',
    description: (
      <p>
        Le portfolio SEO et le formulaire filtrant nous font gagner du temps.
        <Highlight>Moins de petits budgets, plus de chantiers complets</Highlight>.
      </p>
    ),
  },
  {
    name: 'Jean C.',
    role: 'Dirigeant — Chauffage & PAC (Lyon Est)',
    img: 'https://randomuser.me/api/portraits/men/60.jpg',
    description: (
      <p>
        Landing PAC + qualification automatique.
        <Highlight>+35% de visites techniques posées</Highlight>{' '}et moins d’allers‑retours.
      </p>
    ),
  },
  {
    name: 'Didier N.',
    role: 'Serrurier 24/7 (Nice)',
    img: 'https://randomuser.me/api/portraits/men/15.jpg',
    description: (
      <p>
        Ciblage fin et appels enregistrés.
        <Highlight>Coût par appel divisé par 2</Highlight> sur les urgences réelles.
      </p>
    ),
  },
  {
    name: 'Mathieu K.',
    role: 'Menuiserie — Pergolas & fenêtres (Bordeaux)',
    img: 'https://randomuser.me/api/portraits/men/47.jpg',
    description: (
      <p>
        Pages produit + financement, qualification SMS.
        <Highlight>+28% de RDV showroom</Highlight> et paniers moyens en hausse.
      </p>
    ),
  },
  {
    name: 'Élodie F.',
    role: 'Paysagiste — Entretien & création (Nantes)',
    img: 'https://randomuser.me/api/portraits/women/89.jpg',
    description: (
      <p>
        On a lissé la saison avec des contrats annuels.
        <Highlight>Leads printemps +40%</Highlight>{' '}et avis 4,9★ maintenus.
      </p>
    ),
  },
];

export default function Testimonials() {
  return (
    <section className="relative container py-10">
      {/* Decorative elements */}
      <div className="absolute top-20 -left-20 z-10 h-64 w-64 rounded-full bg-brand-5 blur-3xl" />
      <div className="absolute -right-20 bottom-20 z-10 h-64 w-64 rounded-full bg-brand-5 blur-3xl" />

      <div>
        <h2 className="text-foreground mb-4 text-center text-4xl leading-[1.2] font-bold tracking-tighter md:text-5xl">
          Témoignages clients
        </h2>
        <h3 className="text-muted-foreground mx-auto mb-8 max-w-lg text-center text-lg font-medium tracking-tight text-balance">
          Des résultats concrets rapportés par nos clients.
        </h3>
      </div>

      <div className="relative mt-6 max-h-screen overflow-hidden">
        <div className="gap-4 md:columns-2 xl:columns-3 2xl:columns-4">
          {Array(Math.ceil(testimonials.length / 3))
            .fill(0)
            .map((_, i) => (
              <Marquee
                vertical
                key={i}
                className={cn({
                  '[--duration:60s]': i === 1,
                  '[--duration:30s]': i === 2,
                  '[--duration:70s]': i === 3,
                })}
              >
                {testimonials.slice(i * 3, (i + 1) * 3).map((card, idx) => (
                  <div key={idx}>
                    <TestimonialCard {...card} />
                  </div>
                ))}
              </Marquee>
            ))}
        </div>
      </div>
    </section>
  );
}
