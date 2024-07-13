import Stripe from "stripe";
import type { CartItem } from "$lib/stores/cart";

let stripe: Stripe | null = null;

export function initStripe(secretKey: string) {
  stripe = new Stripe(secretKey);
}

export async function createCheckoutSession(
  items: CartItem[],
  baseUrl: string
) {
  if (!stripe) {
    throw new Error("Stripe has not been initialized");
  }

  const lineItems = items.map((item) => ({
    price_data: {
      currency: "usd",
      product_data: {
        name: item.name,
      },
      unit_amount: Math.round(item.price * 100), // Stripe uses cents
    },
    quantity: item.quantity,
  }));

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: lineItems,
    mode: "payment",
    success_url: `${baseUrl}/checkout/success`,
    cancel_url: `${baseUrl}/checkout/cancel`,
  });

  return session;
}
