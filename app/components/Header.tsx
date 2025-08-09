"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const links: Array<{ href: string; label: string }> = useMemo(
    () => [
      { href: "#services", label: "Services" },
      { href: "#clients", label: "Clients" },
      { href: "#process", label: "Méthode" },
      { href: "#pricing", label: "Tarifs" },
      { href: "#faq", label: "FAQ" },
      { href: "/blog", label: "Blog" },
    ],
    []
  );

  const [active, setActive] = useState<string | null>(null);

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
          <Link href="/" className="font-extrabold tracking-tight text-lg text-neutral-900 dark:text-white">
            AB Digital
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-sm" aria-label="Navigation principale">
            {links.map((item) => {
              const isAnchor = item.href.startsWith("#");
              const isActive = isHome && isAnchor && active === item.href;
              if (isAnchor) {
                return isHome ? (
                  <a
                    key={item.href}
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={
                      "transition-colors " +
                      (isActive
                        ? "font-semibold text-neutral-900 dark:text-white"
                        : "text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white")
                    }
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    key={item.href}
                    href={`/${item.href}`}
                    className="transition-colors text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white"
                  >
                    {item.label}
                  </Link>
                );
              }
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="transition-colors text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white"
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="/reservation-appel"
              className="inline-flex items-center rounded-lg border border-white/15 bg-white/10 text-white px-4 py-2 text-sm font-medium backdrop-blur-md hover:bg-white/20 shadow-sm transition-colors"
            >
              Audit gratuit
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}


