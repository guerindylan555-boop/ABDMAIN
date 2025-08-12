import Hero from "./components/sections/Hero";
import ValueProps from "./components/sections/ValueProps";
import Offers from "./components/sections/Offers";
import FeaturesGrid from "./components/sections/FeaturesGrid";
import Logos from "./components/sections/Logos";
import Services from "./components/sections/Services";
// Process supprimé de la home (section "Notre méthode")
import Testimonials from "./components/sections/Testimonials";
import Pricing from "./components/sections/Pricing";
import BlogLatest from "./components/sections/BlogLatest";
import FAQ from "./components/sections/FAQ";
import CTA from "./components/sections/CTA";
import { SliceZone } from "@prismicio/react";
import { components } from "./slices/components";
import { createClient } from "../prismicio";
import ScrollProgress from "./components/ScrollProgress";

export default async function HomePage() {
  const client = createClient();
  try {
    const page = await client.getSingle("homepage");
    return (
      <main>
        <ScrollProgress />
        <SliceZone slices={page.data.slices} components={components} />
      </main>
    );
  } catch {
    return (
      <main>
        <ScrollProgress />
        <Hero />
        <ValueProps />
        <Offers />
        <FeaturesGrid />
        <Logos />
        <Services />
        <Testimonials />
        <Pricing />
        <BlogLatest />
        <FAQ />
        <CTA />
      </main>
    );
  }
}
