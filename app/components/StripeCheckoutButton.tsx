"use client";
import React from "react";
import { Button } from "@/components/ui/button";

type StripeCheckoutButtonProps = {
  priceId: string;
  label?: string;
  className?: string;
  // Match variants from components/ui/button.tsx
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  withGlow?: boolean;
};

export default function StripeCheckoutButton({
  priceId,
  label = "Payer",
  className,
  variant,
  size,
  withGlow,
}: StripeCheckoutButtonProps) {
  const handleClick = async () => {
    try {
      const res = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ priceId }),
      });
      const data = await res.json();
      if (!data.ok || !data.url) throw new Error(data.error || "Erreur lors de la création de la session");
      window.location.href = data.url;
    } catch (e) {
      const errMsg = e instanceof Error ? e.message : String(e);
      console.error(errMsg);
      alert("Impossible de démarrer le paiement.");
    }
  };

  const button = (
    <Button onClick={handleClick} className={className} {...(variant ? { variant } : {})} {...(size ? { size } : {})}>
      {label}
    </Button>
  );

  if (withGlow) {
    return (
      <span className={`glow-wrap ${className?.includes('w-full') ? 'block w-full' : ''}`}>
        <span className="glow" />
        {button}
      </span>
    );
  }

  return button;
}


