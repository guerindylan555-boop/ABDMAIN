"use client";

import { useState } from "react";
import { submitLead } from "./actions";

export default function ContactPage() {
  const [state, setState] = useState<"idle" | "ok" | "error">("idle");

  return (
    <main id="contact" className="max-w-2xl mx-auto p-6">
      <h2 className="text-3xl font-bold">Parlons de votre projet</h2>
      <form
        action={async (fd) => {
          const res = await submitLead(fd);
          setState(res.ok ? "ok" : "error");
        }}
        className="mt-6 space-y-4"
      >
        <input
          className="w-full border p-3 rounded"
          type="text"
          name="name"
          placeholder="Nom"
          required
          autoComplete="name"
        />
        <input
          className="w-full border p-3 rounded"
          type="email"
          name="email"
          placeholder="Email"
          required
          autoComplete="email"
        />
        <input
          className="w-full border p-3 rounded"
          type="tel"
          name="phone"
          placeholder="Téléphone"
          autoComplete="tel"
        />
        <textarea
          className="w-full border p-3 rounded"
          name="message"
          rows={5}
          placeholder="Décrivez vos besoins..."
          required
        />
        <button className="rounded bg-neutral-900 text-white px-5 py-3">Envoyer</button>
      </form>

      {state === "ok" && (
        <p className="mt-4 text-green-600">Merci, on revient vers vous rapidement.</p>
      )}
      {state === "error" && (
        <p className="mt-4 text-red-600">Vérifiez les champs et réessayez.</p>
      )}
    </main>
  );
}


