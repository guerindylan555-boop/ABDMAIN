import dynamic from "next/dynamic";
import { ABHero } from "@/components/ab-hero";
import { BentoGrid } from "@/components/bento-grid";
import { CustomerJourneySection } from "@/components/customer-journey-section";
import { TestimonialsMarquee } from "@/components/testimonials-marquee";
import { PlansSection } from "@/components/plans-section";

const PricingSection = dynamic(() => import("@/components/pricing-section"), { loading: () => null });
const CTAOld = dynamic(() => import("@/components/cta-old"), { loading: () => null });
const FaqSection = dynamic(() => import("@/components/faq-section"), { loading: () => null });

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      {/* SSR fallback lightweight hero (will be removed on client effect) */}
      <section id="hero-fallback" className="relative w-full overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-16">
        <div className="relative z-10 px-6 mx-auto max-w-5xl text-center">
          <div className="inline-flex items-center rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-wide">
            Cabinet digital — Sites performants, SEO & IA
          </div>
          <h1 className="mt-4 text-balance text-5xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
            Des sites qui convertissent.
            <br className="hidden md:block" />
            Des process qui travaillent pour vous.
          </h1>
          <p className="mt-6 text-pretty text-lg text-white/80 md:text-xl">
            Stratégie, design, SEO et automatisations IA — réunis dans un écosystème clair et exigeant.
          </p>
        </div>
      </section>

      <ABHero />
      <BentoGrid />
      <CustomerJourneySection />
      <section id="temoignages" className="relative z-10 mx-auto w-full max-w-6xl px-6 py-16 sm:py-24">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold tracking-tight">Ils nous font confiance</h2>
          <p className="mt-2 max-w-2xl text-white/80">Des témoignages clients qui confirment notre exigence de qualité et de résultats.</p>
        </div>
        <TestimonialsMarquee
          speed={40}
          items={[
            { id: '1', name: 'Camille L.', role: 'Spa & Bien-être', quote: 'Refonte rapide et SEO en nette hausse, plus de réservations en 2 mois.' },
            { id: '2', name: 'Mathieu R.', role: 'Menuiserie', quote: 'Automatisations SMS et agents IA = rdv qualifiés sans relances manuelles.' },
            { id: '3', name: 'Sarah D.', role: 'Cabinet dentaire', quote: 'Téléphone désengorgé, formulaires intelligents et prises de rdv fluides.' },
            { id: '4', name: 'Imane K.', role: 'Formation', quote: 'Tracking fiable, A/B tests et tunnel optimisé: CPA en baisse, conversions en hausse.' },
            { id: '5', name: 'Louis P.', role: 'Rénovation', quote: 'Site rapide, leads mieux qualifiés, suivi centralisé: on gagne du temps.' },
          ]}
          className="[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
        />
      </section>
      <PlansSection />
      <PricingSection />
      <CTAOld />
      <FaqSection />
    </main>
  );
}
