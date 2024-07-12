import { STRIPE_SECRET_KEY } from "$env/static/private";

/** @type {import('./$types').RequestHandler} */
export async function GET() {
  const url = "https://api.stripe.com/v1/products";
  // ?limit=3&active=true

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${STRIPE_SECRET_KEY}`,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (e) {
    console.error("There was a problem fetching the products:", e);
    return new Response(JSON.stringify({ error: "Failed to fetch products" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
