"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const links: Array<{ href: string; label: string }> = [
    { href: "#services", label: "Services" },
    { href: "#clients", label: "Clients" },
    { href: "#process", label: "Méthode" },
    { href: "#pricing", label: "Tarifs" },
    { href: "#faq", label: "FAQ" },
  ];

  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const sectionIds = links.map((l) => l.href.replace("#", ""));
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        }
      },
      { root: null, threshold: 0.5 }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 supports-[backdrop-filter]:bg-white/60 dark:bg-neutral-950/60 border-b border-neutral-200/60 dark:border-neutral-800">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="h-16 flex items-center justify-between gap-4">
          <Link href="/" className="font-extrabold tracking-tight text-lg">
            AB Digital
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-700" aria-label="Navigation principale">
            {links.map((item) => {
              const isActive = active === item.href;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={
                    "transition-colors " + (isActive ? "text-black" : "hover:text-black")
                  }
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <a
              href="/contact#contact"
              className="inline-flex items-center rounded-lg bg-neutral-900 text-white px-4 py-2 text-sm font-medium transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              Demander un devis
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}


