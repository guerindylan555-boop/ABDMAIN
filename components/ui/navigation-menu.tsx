"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function NavigationMenu({ className, ...props }: React.ComponentProps<"nav">) {
  return <nav className={cn("relative", className)} {...props} />;
}

export function NavigationMenuList({ className, ...props }: React.ComponentProps<"ul">) {
  return <ul className={cn("flex items-center gap-2", className)} {...props} />;
}

export function NavigationMenuItem({ className, ...props }: React.ComponentProps<"li">) {
  return <li className={cn("relative", className)} {...props} />;
}

export function NavigationMenuTrigger({ className, ...props }: React.ComponentProps<"button">) {
  return (
    <button
      className={cn(
        "rounded-lg px-3 py-2 text-sm text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white",
        className,
      )}
      {...props}
    />
  );
}

export function NavigationMenuContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "absolute left-0 top-full mt-2 min-w-[260px] rounded-xl glass border border-white/10 p-3 shadow-xl",
        className,
      )}
      {...props}
    />
  );
}

export const NavigationMenuLink = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentProps<typeof Link> & { className?: string }
>(function NavigationMenuLink({ className, ...props }, ref) {
  return (
    <Link ref={ref} className={cn("block rounded-lg px-3 py-2 text-sm", className)} {...props} />
  );
});

export function navigationMenuTriggerStyle(...classes: Array<string | undefined | null | false>) {
  return cn(
    "rounded-lg px-3 py-2 text-sm text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white",
    ...classes,
  );
}
