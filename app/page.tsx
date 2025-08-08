"use client";

import { motion } from "motion/react";

export default function HomePage() {
  return (
    <main className="min-h-[100svh] grid place-items-center">
      <section className="text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-5xl md:text-6xl font-extrabold tracking-tight"
        >
          AB Digital
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="mt-4 text-lg text-neutral-600"
        >
          Sites web, SEO, Google Business, automatisation appels/SMS, offres IA — au mois.
        </motion.p>

        <motion.a
          href="/contact#contact"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="inline-block mt-8 rounded-lg bg-neutral-900 text-white px-6 py-3 font-medium"
        >
          Demander un devis
        </motion.a>
      </section>
    </main>
  );
}
