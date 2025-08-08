"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState<boolean | null>(null);

  useEffect(() => {
    setMounted(true);
    try {
      const isSystemDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
      const stored = localStorage.getItem("theme");
      const dark = stored ? stored === "dark" : isSystemDark;
      setIsDark(dark);
    } catch {
      setIsDark(false);
    }
  }, []);

  useEffect(() => {
    if (isDark === null) return;
    const root = document.documentElement;
    root.classList.toggle("dark", isDark);
    // Optional: update color-scheme meta for better UA styles
    root.style.colorScheme = isDark ? "dark" : "light";
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  if (!mounted) return null;

  return (
    <button
      aria-label="Basculer le thème"
      onClick={() => setIsDark((v) => !v)}
      className="rounded-md border border-neutral-200/60 dark:border-neutral-800 px-3 py-2 text-sm transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-800"
    >
      {isDark ? "☀️ Clair" : "🌙 Sombre"}
    </button>
  );
}


