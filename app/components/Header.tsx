"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const links: Array<{ href: string; label: string }> = useMemo(
    () => [
      { href: "/", label: "Accueil" },
      { href: "/hubs", label: "Hubs" },
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
          <Link href="/" className="font-extrabold tracking-tight text-[18px] md:text-[20px] text-neutral-900 dark:text-white">
            AB Digital
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-[15px]" aria-label="Navigation principale">
            {/* Solutions dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setSolutionsOpen(true)}
              onMouseLeave={() => setSolutionsOpen(false)}
            >
              <button
                type="button"
                className="transition-colors text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white"
                aria-haspopup="menu"
                aria-expanded={solutionsOpen}
                onClick={() => setSolutionsOpen((v) => !v)}
              >
                Solutions
              </button>
              {solutionsOpen && (
                <div
                  role="menu"
                  className="absolute left-0 top-full mt-2 min-w-[260px] rounded-xl glass border border-white/10 p-2 shadow-xl"
                >
                  <Link
                    href="/solutions/dfy"
                    className="block rounded-lg px-3 py-2 text-sm text-neutral-200 hover:bg-white/10"
                    role="menuitem"
                  >
                    DFY — Conseil & Builds
                  </Link>
                  <Link
                    href="/solutions/dwy"
                    className="block rounded-lg px-3 py-2 text-sm text-neutral-200 hover:bg-white/10"
                    role="menuitem"
                  >
                    DWY — Plateforme + Coaching
                  </Link>
                  <Link
                    href="/solutions/diy"
                    className="block rounded-lg px-3 py-2 text-sm text-neutral-200 hover:bg-white/10"
                    role="menuitem"
                  >
                    DIY — Templates & Snapshots
                  </Link>
                </div>
              )}
            </div>

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
            <a
              href="/diagnostic-90-min"
              className="inline-flex items-center rounded-lg border border-white/15 bg-white/10 text-white px-4 py-2 text-sm font-medium backdrop-blur-md hover:bg-white/20 shadow-sm transition-colors pressable"
              data-magnetic
            >
              Diagnostic 90 min
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}


