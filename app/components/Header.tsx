"use client";

import Link from "next/link";
import { ButtonLink } from "@/app/components/ui/button";
import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const links: Array<{ href: string; label: string }> = useMemo(
    () => [
      { href: "/", label: "Accueil" },
      { href: "/solutions", label: "Nos solutions" },
      { href: "/offres", label: "Tarifs" },
      { href: "/blog", label: "Ressources" },
      { href: "/a-propos", label: "À propos" },
    ],
    []
  );

  const [active, setActive] = useState<string | null>(null);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  useEffect(() => {
    if (!isHome) return; // n'activer l'observer que sur la home
    const sectionIds = links
      .map((l) => l.href)
      .filter((h) => h.startsWith("#"))
      .map((h) => h.replace("#", ""));
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
  }, [links, isHome]);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/10 border-b border-white/10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="h-16 flex items-center justify-between gap-4">
          <Link href="/" className="font-extrabold tracking-tight text-h4 text-neutral-900 dark:text-white">
            AB Digital
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-[15px]" aria-label="Navigation principale">

            {links.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition-colors text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <ButtonLink href="/diagnostic-90-min" variant="glow" size="md" className="text-sm" data-magnetic>
              Audit gratuit
            </ButtonLink>
          </div>
        </div>
      </div>
    </header>
  );
}


