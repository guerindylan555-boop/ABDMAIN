import Hero from "./components/sections/Hero";
import Logos from "./components/sections/Logos";
import Services from "./components/sections/Services";
import Process from "./components/sections/Process";
import Testimonials from "./components/sections/Testimonials";
import Pricing from "./components/sections/Pricing";
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
        <Logos />
        <Services />
        <Process />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
    );
  }
}
