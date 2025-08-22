"use client";

import * as React from "react";
import { ChevronDown, Check } from "lucide-react";
import { cn } from "@/lib/utils";

export function TimeSelect({
  value,
  onChange,
  options,
  placeholder = "Sélectionner un créneau",
  className,
}: {
  value: string;
  onChange: (v: string) => void;
  options: string[];
  placeholder?: string;
  className?: string;
}) {
  const [open, setOpen] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (!containerRef.current) return;
      if (!containerRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  return (
    <div ref={containerRef} className={cn("relative w-full", className)}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className={cn(
          "group flex h-11 w-full items-center justify-between rounded-lg border border-white/15 bg-white/10 px-3 text-sm text-foreground shadow-sm backdrop-blur transition",
          "hover:border-white/20 focus:border-white/25 focus:outline-none focus:ring-2 focus:ring-white/20"
        )}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span className={cn(value ? "text-foreground" : "text-foreground/70")}>{value || placeholder}</span>
        <ChevronDown className="h-4 w-4 text-foreground/70 transition group-hover:text-foreground/90" />
      </button>

      {open && (
        <div
          role="listbox"
          className={cn(
            "absolute z-50 mt-2 max-h-64 w-full overflow-auto rounded-lg border border-white/15 bg-black/40 p-1 backdrop-blur-xl shadow-lg",
            "[--tw-backdrop-saturate:1.2]"
          )}
        >
          {options.map((opt) => {
            const active = opt === value;
            return (
              <button
                key={opt}
                type="button"
                onClick={() => {
                  onChange(opt);
                  setOpen(false);
                }}
                className={cn(
                  "flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-sm",
                  active
                    ? "bg-white/15 text-foreground"
                    : "text-foreground/90 hover:bg-white/10"
                )}
                role="option"
                aria-selected={active}
              >
                <span>{opt}</span>
                {active && <Check className="h-4 w-4" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
