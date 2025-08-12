"use client";

import { useState, type ReactNode } from "react";

export type Tab = { id: string; label: string; content: ReactNode };

export default function Tabs({ tabs, initialId }: { tabs: Tab[]; initialId?: string }) {
  const [active, setActive] = useState<string>(initialId ?? tabs[0]?.id);
  const current = tabs.find((t) => t.id === active) ?? tabs[0];

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setActive(t.id)}
            className={`rounded-lg px-3 py-1.5 text-sm border backdrop-blur ${
              active === t.id
                ? "border-white/30 bg-white/30 text-white"
                : "border-white/10 bg-white/10 text-neutral-200 hover:bg-white/20"
            }`}
            aria-selected={active === t.id}
            role="tab"
          >
            {t.label}
          </button>
        ))}
      </div>
      <div className="mt-4" role="tabpanel">{current?.content}</div>
    </div>
  );
}


