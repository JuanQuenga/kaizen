import { STRIPE_SECRET_KEY } from "$env/static/private";

/** @type {import('./$types').RequestHandler} */
export async function GET({ url }) {
  const baseUrl = "https://api.stripe.com/v1/products";
  const fullUrl = new URL(baseUrl);

  // Get limit from query params or use default
  const limit = url.searchParams.get("limit") || "4";
  fullUrl.searchParams.append("limit", limit);
  fullUrl.searchParams.append("expand[]", "data.default_price");

  // Add any additional query params from the request
  for (const [key, value] of url.searchParams.entries()) {
    if (key !== "limit" && key !== "expand[]") {
      fullUrl.searchParams.append(key, value);
    }
  }

  // Fetch products from Stripe API
  try {
    const response = await fetch(fullUrl, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${STRIPE_SECRET_KEY}`,
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        `Stripe API error: ${errorData.error?.message || response.statusText}`
      );
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
    return new Response(
      JSON.stringify({ error: e.message || "Failed to fetch products" }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
