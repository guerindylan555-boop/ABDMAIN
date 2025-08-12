import type { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

type Variant = "default" | "secondary" | "ghost" | "outline";
type Size = "sm" | "md" | "lg";

function baseClasses(variant: Variant, size: Size) {
  const v: Record<Variant, string> = {
    default:
      "border border-white/20 bg-white/20 text-white hover:bg-white/30 backdrop-blur",
    secondary:
      "border border-neutral-200/20 bg-neutral-200/10 text-white hover:bg-neutral-200/20 backdrop-blur",
    ghost:
      "text-white hover:bg-white/10",
    outline:
      "border border-white/30 text-white hover:bg-white/10",
  };
  const s: Record<Size, string> = {
    sm: "px-3 py-1.5 text-sm rounded-lg",
    md: "px-4 py-2 text-sm rounded-lg",
    lg: "px-6 py-3 text-base rounded-xl",
  };
  return `inline-flex items-center justify-center font-medium pressable ${v[variant]} ${s[size]}`;
}

export function Button({
  variant = "default",
  size = "md",
  className = "",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant; size?: Size }) {
  return <button className={`${baseClasses(variant, size)} ${className}`} {...props} />;
}

export function ButtonLink({
  href,
  variant = "default",
  size = "md",
  className = "",
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & { href: string; variant?: Variant; size?: Size }) {
  return (
    <a href={href} className={`${baseClasses(variant, size)} ${className}`} {...props} />
  );
}


