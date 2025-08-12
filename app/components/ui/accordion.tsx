"use client";

import { useState, type ReactNode } from "react";

export type AccordionItemData = { id: string; title: ReactNode; content: ReactNode };

export function Accordion({ items, multiple = false }: { items: AccordionItemData[]; multiple?: boolean }) {
  const [openIds, setOpenIds] = useState<string[]>([]);

  const toggle = (id: string) => {
    setOpenIds((prev) => {
      const isOpen = prev.includes(id);
      if (multiple) {
        return isOpen ? prev.filter((x) => x !== id) : [...prev, id];
      }
      return isOpen ? [] : [id];
    });
  };

  return (
    <div className="rounded-2xl overflow-hidden divide-y divide-white/10 bg-white/5 backdrop-blur">
      {items.map((it) => {
        const isOpen = openIds.includes(it.id);
        return (
          <div key={it.id} className="group">
            <button
              type="button"
              onClick={() => toggle(it.id)}
              className="w-full text-left px-4 py-3 flex items-center justify-between gap-4 hover:bg-white/5"
              aria-expanded={isOpen}
              aria-controls={`acc-${it.id}`}
            >
              <span className="font-medium text-white/95">{it.title}</span>
              <span className={`text-neutral-400 transition-transform ${isOpen ? "rotate-45" : ""}`}>+</span>
            </button>
            {isOpen && (
              <div id={`acc-${it.id}`} className="px-4 pb-4 text-sm text-neutral-300">
                {it.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}


