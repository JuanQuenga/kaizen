import Stripe from "stripe";
import type { CartItem } from "$lib/stores/cart";

const stripe = new Stripe(import.meta.env.STRIPE_SECRET_KEY);

export async function createCheckoutSession(items: CartItem[]) {
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
    success_url: `${import.meta.env.VITE_BASE_URL}/success`,
    cancel_url: `${import.meta.env.VITE_BASE_URL}/cancel`,
  });

  return session;
}
