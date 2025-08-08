"use server";

import { z } from "zod";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  message: z.string().min(10),
});

export async function submitLead(formData: FormData) {
  const data = Object.fromEntries(formData) as Record<string, string>;
  const parsed = schema.safeParse(data);
  if (!parsed.success) {
    return { ok: false, errors: parsed.error.flatten().fieldErrors } as const;
  }

  if (!process.env.LEAD_WEBHOOK_URL) {
    console.warn("LEAD_WEBHOOK_URL is not set");
    return { ok: true } as const;
  }

  await fetch(process.env.LEAD_WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(parsed.data),
    cache: "no-store",
  });

  return { ok: true } as const;
}


