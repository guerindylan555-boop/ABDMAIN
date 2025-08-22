"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type Option = { value: string; label: React.ReactNode };

type SelectContextType = {
  value: string;
  setValue: (v: string) => void;
  options: Option[];
  registerOption: (opt: Option) => void;
};

const SelectContext = React.createContext<SelectContextType | null>(null);

export function Select({ value, onValueChange, children }: { value?: string; onValueChange?: (v: string) => void; children: React.ReactNode; }) {
  const [internalValue, setInternalValue] = React.useState<string>(value ?? "");
  const [options, setOptions] = React.useState<Option[]>([]);

  const setValue = (v: string) => {
    setInternalValue(v);
    onValueChange?.(v);
  };

  const registerOption = React.useCallback((opt: Option) => {
    setOptions((prev) => (prev.some((o) => o.value === opt.value) ? prev : [...prev, opt]));
  }, []);

  React.useEffect(() => {
    if (value !== undefined) setInternalValue(value);
  }, [value]);

  return (
    <SelectContext.Provider value={{ value: internalValue, setValue, options, registerOption }}>
      {children}
    </SelectContext.Provider>
  );
}

export function SelectTrigger({ id, size, className }: { id?: string; size?: "sm" | "md" | "lg" | string; className?: string; children?: React.ReactNode; }) {
  const ctx = React.useContext(SelectContext);
  if (!ctx) return null;
  return (
    <select
      id={id}
      value={ctx.value}
      onChange={(e) => ctx.setValue(e.target.value)}
      className={cn(
        "h-9 w-full rounded-md border border-input bg-background px-3 text-sm text-foreground shadow-sm",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60",
        className
      )}
    >
      {ctx.options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {typeof opt.label === "string" ? opt.label : opt.value}
        </option>
      ))}
    </select>
  );
}

export function SelectValue({ placeholder }: { placeholder?: string }) {
  // Rendered via native select above; no-op placeholder
  return null;
}

export function SelectContent({ children }: { children: React.ReactNode; align?: string }) {
  return <>{children}</>;
}

export function SelectItem({ value, children }: { value: string; children: React.ReactNode }) {
  const ctx = React.useContext(SelectContext);
  React.useEffect(() => {
    if (ctx) ctx.registerOption({ value, label: children });
  }, [ctx, value, children]);
  return null;
}
