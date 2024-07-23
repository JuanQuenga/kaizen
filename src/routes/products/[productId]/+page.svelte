<script lang="ts">
  import type {
    StripeProduct,
    StripeProductResponse
  } from './+page';
  import {
    cart
  } from '$lib/stores/cart';
  import ProductSuggestions from '$lib/components/Products/ProductSuggestions.svelte';

  function addToCart(product: StripeProduct) {
    const cartItem = {
      id: product.id,
      name: product.name,
      price: product.default_price.unit_amount / 100,
      quantity: 1,
      image: product.images[0]
    };
    console.log(JSON.stringify(cartItem));
    cart.addItem(cartItem);
  }
  export let data: StripeProductResponse;
  const product: StripeProduct = data.data[0];
</script>
<div class="pt-20 bg-gradient-to-b from-background to-cyan-950">
  <div class="mx-auto pt-2 md:pt-6 md:mt-8 container px-4 flex flex-col md:flex-row gap-4 pb-4 md:pb-8">
    <!-- Image gallery -->
    <div class="">
      <h2 class="sr-only">Images</h2>
      <img src={product.images[0]} alt={product.description} class="">
    </div>
    <!-- Product details -->
    <div class="flex-col">
      <div class="flex-col w-full mt-4">
        <h1 class="text-xl md:text-4xl font-bold text-white mb-2">{product.name}</h1>
        <p class="text-xl md:text-2xl font-extralight text-gray-300">${product.default_price.unit_amount/100}</p>
      </div>
      <div class="mt-8 ">
        <h2 class="text-md md:text-xl font-medium text-white under border-b-2 border-gray-600 pb-4">Description</h2>
        <div class=" mt-4 text-gray-400 text-lg md:text-xl">
          <p>{product.description}</p>
        </div>
        <button on:click={()=> addToCart(product)} type="submit" class=" mt-8 text-lg md:text-2xl text-white flex w-full items-center justify-center border border-transparent bg-cyan-400 px-8 py-3 font-medium uppercase hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-navigation focus:ring-offset-2" > Add to cart </button>
      </div>
    </div>
  </div>
  <div class="text-center bg-background py-8">
    <h2 class="text-2xl md:text-4xl uppercase font-extraligt mb-6 text-white">You May Also Like</h2>
    <ProductSuggestions />
  </div>
</div>