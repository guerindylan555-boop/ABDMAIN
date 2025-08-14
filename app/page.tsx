export const dynamic = "force-static";
import Hero from "./components/sections/Hero";
import Essentiels from "./components/sections/Essentiels";
import Offers from "./components/sections/Offers";
import FeaturesGrid from "./components/sections/FeaturesGrid";
// Process supprimé de la home (section "Notre méthode")
import BlogLatest from "./components/sections/BlogLatest";
import FAQ from "./components/sections/FAQ";
import ScrollProgress from "./components/ScrollProgress";
import TestimonialsMarquee from "@/components/mvpblocks/testimonials-marquee";
import CTA3 from "@/components/mvpblocks/cta-3";

export default async function HomePage() {
  return (
    <main>
      <ScrollProgress />
      <Hero />
      <Essentiels />
      <FeaturesGrid />
      <TestimonialsMarquee />
      <Offers />
      <CTA3 />
      <BlogLatest />
      <FAQ />
      {/* CTA global supprimé de la home (présent en layout global) */}
    </main>
  );
}
