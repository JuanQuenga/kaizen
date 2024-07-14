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
    shipping_address_collection: {
      allowed_countries: ["US"],
    },
    automatic_tax: {
      enabled: true,
    },
    shipping_options: [
      {
        shipping_rate_data: {
          type: "fixed_amount",
          fixed_amount: {
            amount: 500, // $5.00
            currency: "usd",
          },
          display_name: "Standard Shipping",
          delivery_estimate: {
            minimum: {
              unit: "business_day",
              value: 5,
            },
            maximum: {
              unit: "business_day",
              value: 7,
            },
          },
        },
      },
    ],
  });

  return session;
}

export interface ShippingOption {
  shipping_rate_data: {
    type: "fixed_amount";
    fixed_amount: {
      amount: number;
      currency: string;
    };
    display_name: string;
    delivery_estimate?: {
      minimum: {
        unit: "business_day" | "day" | "hour" | "month" | "week";
        value: number;
      };
      maximum?: {
        unit: "business_day" | "day" | "hour" | "month" | "week";
        value: number;
      };
    };
  };
}
