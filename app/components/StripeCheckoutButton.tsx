"use client";
import React from "react";

type StripeCheckoutButtonProps = {
  priceId: string;
  label?: string;
  className?: string;
};

export default function StripeCheckoutButton({
  priceId,
  label = "Payer",
  className,
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

  return (
    <button type="button" onClick={handleClick} className={className}>
      {label}
    </button>
  );
}


