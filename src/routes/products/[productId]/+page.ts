import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ params, fetch }) => {
  try {
    const baseUrl = `/api/stripe/products/${params.productId}`;
    const response = await fetch(baseUrl);

    if (!response.ok) {
      const errorBody = await response.text();
      console.error("Error response:", errorBody);
      throw error(response.status, `Error fetching product: ${errorBody}`);
    }

    const data: StripeProductResponse = await response.json();
    // console.log("Fetched data:", data.data);

    return data;
  } catch (e) {
    console.error("There was a problem fetching the product:", e);
    throw error(500, "Internal Server Error");
  }
};

export type StripeProduct = {
  id: string;
  object: "product";
  active: boolean;
  attributes: string[] | null;
  created: number;
  default_price: string | StripePrice;
  description: string | null;
  images: string[];
  livemode: boolean;
  metadata: {
    [key: string]: string;
  };
  name: string;
  package_dimensions: {
    height: number;
    length: number;
    weight: number;
    width: number;
  } | null;
  shippable: boolean | null;
  statement_descriptor: string | null;
  tax_code: string | null;
  unit_label: string | null;
  updated: number;
  url: string | null;
};

// You might also want to define a type for the API response
export type StripeProductResponse = {
  object: "product";
  data: StripeProduct[];
  has_more: boolean;
  url: string;
};

export type StripeTier = {
  flat_amount: number | null;
  flat_amount_decimal: string | null;
  unit_amount: number | null;
  unit_amount_decimal: string | null;
  up_to: number | null;
};

export type StripeRecurring = {
  aggregate_usage: "sum" | "last_during_period" | "last_ever" | "max" | null;
  interval: "day" | "week" | "month" | "year";
  interval_count: number;
  usage_type: "metered" | "licensed";
  trial_period_days: number | null;
};

export type StripePriceTransformQuantity = {
  divide_by: number;
  round: "up" | "down";
};

export type StripePrice = {
  id: string;
  object: "price";
  active: boolean;
  billing_scheme: "per_unit" | "tiered";
  created: number;
  currency: string;
  custom_unit_amount: {
    maximum: number | null;
    minimum: number | null;
    preset: number | null;
  } | null;
  livemode: boolean;
  lookup_key: string | null;
  metadata: {
    [key: string]: string;
  };
  nickname: string | null;
  product: string | "deleted";
  recurring: StripeRecurring | null;
  tax_behavior: "exclusive" | "inclusive" | "unspecified";
  tiers_mode: "graduated" | "volume" | null;
  transform_quantity: StripePriceTransformQuantity | null;
  type: "one_time" | "recurring";
  unit_amount: number | null;
  unit_amount_decimal: string | null;
};

// You might also want to define a type for the API response
export type StripePriceResponse = {
  object: "list";
  data: StripePrice[];
  has_more: boolean;
  url: string;
};
