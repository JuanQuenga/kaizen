import { json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";
import { initStripe, createCheckoutSession } from "$lib/stripe";
import { STRIPE_SECRET_KEY } from "$env/static/private";

initStripe(STRIPE_SECRET_KEY);

export const POST: RequestHandler = async ({ request, url }) => {
  try {
    const items = await request.json();
    const baseUrl = `${url.protocol}//${url.host}`;
    const session = await createCheckoutSession(items, baseUrl);
    return json({ url: session.url });
  } catch (error) {
    console.error("Error creating checkout session:", error);
    return json(
      { error: "Could not create checkout session" },
      { status: 500 }
    );
  }
};
