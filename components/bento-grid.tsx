"use client";

import { cn } from "@/lib/utils";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import React from "react";


type BentoItem = {
  id: string;
  title: string;
  description: string;
  href: string;
  feature: "spotlight" | "typing" | "metrics";
  spotlightItems?: string[];
  typingText?: string;
  metrics?: { label: string; value: number; suffix?: string; color?: "emerald" | "blue" | "violet" | "amber" }[];
  size: "lg" | "md" | "sm";
  className?: string;
};

const bentoItems: BentoItem[] = [
  {
    id: "main",
    title: "Les essentiels sur-mesure",
    description:
      "Un socle solide pour accélérer votre croissance : sites web performants, automatisations intelligentes et résultats mesurables.",
    href: "#",
    feature: "spotlight",
    spotlightItems: [
      "Sur-mesure & rapide — sites et tunnels conçus pour convertir",
      "Tout centralisé — CRM, tunnels, paiements et avis dans un espace unique",
      "Automatisations & IA — relances 24/7, prise de RDV et suivi",
      "ROI prouvé — dashboards, tracking fiable et A/B testing",
    ],
    size: "lg",
    className: "col-span-2 row-span-1 md:col-span-2 md:row-span-1",
  },
  {
    id: "surmesure",
    title: "Sur-mesure & rapide",
    description:
      "Création de sites web et tunnels optimisés pour la conversion et la performance.",
    href: "#",
    feature: "typing",
    typingText: `// funnel.config.ts\nexport const landing = {\n  performance: { lcp: "<2.5s", inP: "stable" },\n  tracking: "clean",\n  goals: ["lead", "rdv"],\n  abTesting: true,\n  forms: { smartValidation: true, autofill: true }\n};`,
    size: "md",
    className: "col-span-2 row-span-1 col-start-1 col-end-3",
  },
  {
    id: "automations",
    title: "Automatisations & IA",
    description:
      "Agents IA disponibles 24/7 pour relancer vos prospects, prendre des rendez-vous et assurer un suivi constant.",
    href: "#",
    feature: "spotlight",
    spotlightItems: [
      "Relances SMS, email et appel",
      "Prise de RDV automatique",
      "Nurturing multicanal",
      "Agents IA utiles, pas gadgets",
    ],
    size: "md",
    className: "col-span-1 row-span-1",
  },
  {
    id: "roi",
    title: "ROI prouvé",
    description:
      "Des dashboards clairs, un tracking fiable et des tests A/B continus pour mesurer vos performances.",
    href: "#",
    feature: "metrics",
    metrics: [
      { label: "Hausse des conversions", value: 32, suffix: "%", color: "emerald" },
      { label: "Leads contactés < 1h", value: 90, suffix: "%", color: "blue" },
      { label: "Leads qualifiés", value: 45, suffix: "%", color: "violet" },
      { label: "Réduction du CAC", value: 25, suffix: "%", color: "amber" },
    ],
    size: "sm",
    className: "col-span-1 row-span-1",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px" });
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) => Math.round(latest));
  React.useEffect(() => {
    if (inView) {
      const controls = animate(motionValue, value, { duration: 1.2 });
      return controls.stop;
    }
  }, [inView, motionValue, value]);
  return (
    <span ref={ref} className="tabular-nums">
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

function BentoCard({ item }: { item: BentoItem }) {
  return (
    <div
      className={cn(
        "rounded-xl border border-white/10 bg-white/5 p-5 transition-colors hover:border-white/20 hover:bg-white/7.5",
        "dark:bg-white/5",
        "h-full flex flex-col",
        item.className
      )}
    >
      <h3 className="text-lg font-semibold tracking-tight">{item.title}</h3>
      <p className="mt-2 text-sm text-white/80 leading-relaxed">{item.description}</p>
      {item.feature === "spotlight" && item.spotlightItems && (
        <ul className="mt-4 space-y-2 text-sm text-white/85">
          {item.spotlightItems.map((s, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="mt-1 inline-block size-1.5 rounded-full bg-white/70" />
              <span>{s}</span>
            </li>
          ))}
        </ul>
      )}
      {item.feature === "typing" && item.typingText && (
        <div className="mt-4 rounded-lg border border-white/10 bg-black/40 p-3 font-mono text-[12px] text-white/90">
          <pre className="whitespace-pre-wrap leading-relaxed">{item.typingText}</pre>
        </div>
      )}
      {item.feature === "metrics" && item.metrics && (
        <div className="mt-4 grid grid-cols-2 gap-3">
          {item.metrics.map((m, i) => (
            <div key={i} className="rounded-lg border border-white/10 bg-white/5 p-3">
              <div className="text-xs text-white/70">{m.label}</div>
              <div className="mt-1 text-lg font-semibold">
                <Counter value={m.value} suffix={m.suffix} />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export function BentoGrid() {
  return (
    <section id="solutions" className="relative z-10 mx-auto w-full max-w-6xl px-6 py-16 sm:py-20">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold tracking-tight">Nos solutions</h2>
        <p className="mt-2 max-w-2xl text-white/80">
          Un socle complet pour attirer, convertir et fidéliser vos clients.
        </p>
      </div>

      {/* Première grille */}
      <div className="grid md:grid-cols-2 gap-6 items-stretch auto-rows-fr">
        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="md:col-span-1 h-full">
          <BentoCard item={bentoItems[0]} />
        </motion.div>
        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="md:col-span-1 h-full">
          <BentoCard item={bentoItems[1]} />
        </motion.div>
      </div>

      {/* Seconde grille */}
      <div className="mt-6 grid md:grid-cols-2 gap-6 items-stretch auto-rows-fr">
        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="md:col-span-1 h-full">
          <BentoCard item={bentoItems[2]} />
        </motion.div>
        {/* Remplacement Voice Assistant -> ROI */}
        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="md:col-span-1 h-full">
          <BentoCard item={bentoItems[3]} />
        </motion.div>
      </div>
    </section>
  );
}
