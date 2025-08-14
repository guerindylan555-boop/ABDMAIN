"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type GradientBackgroundProps = {
  className?: string;
  children?: ReactNode;
};

export default function GradientBackground({ className, children }: GradientBackgroundProps) {
  return (
    <div className={cn("gradient-background w-full h-full", className)}>
      {children}
    </div>
  );
}
