import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2024-08-01",
});

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const { priceId, successUrl, cancelUrl } = body as {
      priceId?: string;
      successUrl?: string;
      cancelUrl?: string;
    };

    if (!priceId) {
      return NextResponse.json({ ok: false, error: "Missing priceId" }, { status: 400 });
    }

    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      line_items: [{ price: priceId, quantity: 1 }],
      success_url:
        successUrl || `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/?success=true`,
      cancel_url:
        cancelUrl || `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/?canceled=true`,
    });

    return NextResponse.json({ ok: true, url: session.url });
  } catch (err: any) {
    return NextResponse.json({ ok: false, error: err?.message || String(err) }, { status: 500 });
  }
}


