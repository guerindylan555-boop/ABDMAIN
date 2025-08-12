import Hero from "./components/sections/Hero";
import Essentiels from "./components/sections/Essentiels";
import Offers from "./components/sections/Offers";
import FeaturesGrid from "./components/sections/FeaturesGrid";
// Process supprimé de la home (section "Notre méthode")
import Pricing from "./components/sections/Pricing";
import BlogLatest from "./components/sections/BlogLatest";
import FAQ from "./components/sections/FAQ";
import CTA from "./components/sections/CTA";
import ScrollProgress from "./components/ScrollProgress";
import TestimonialsMarquee from "@/components/mvpblocks/testimonials-marquee";

export default async function HomePage() {
  return (
    <main>
      <ScrollProgress />
      <Hero />
      <Essentiels />
      <Offers />
      <FeaturesGrid />
      <TestimonialsMarquee />
      <Pricing />
      <BlogLatest />
      <FAQ />
      <CTA />
    </main>
  );
}
