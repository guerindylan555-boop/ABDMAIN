import type { HTMLAttributes } from "react";

type Variant = "default" | "secondary" | "outline";

export default function Badge({
  children,
  variant = "default",
  className = "",
  ...props
}: HTMLAttributes<HTMLSpanElement> & { variant?: Variant }) {
  const base =
    "inline-flex items-center rounded-full border px-2 py-1 text-[10px] uppercase tracking-wide";
  const styles: Record<Variant, string> = {
    default: "border-white/10 bg-white/10 text-white",
    secondary: "border-neutral-200/20 bg-neutral-200/20 text-neutral-100",
    outline: "border-white/30 text-white",
  };
  return (
    <span className={`${base} ${styles[variant]} ${className}`} {...props}>
      {children}
    </span>
  );
}


