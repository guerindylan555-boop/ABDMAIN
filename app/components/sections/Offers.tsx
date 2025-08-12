import SimplePricing from "@/components/mvpblocks/simple-pricing";

export default function Offers() {
  return (
    <section id="offres-modes" className="py-16 md:py-20 scroll-mt-24">
      {/* Section autonome: on affiche uniquement le nouveau bloc de pricing/offres */}
      <SimplePricing />
    </section>
  );
}


