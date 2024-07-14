<script lang="ts">
  import Header from '$lib/components/Header.svelte';
	import ColorPicker from '$lib/components/Products/ColorPicker.svelte';
	import type { StripeProduct, StripeProductResponse } from './+page';
	import { cart } from '$lib/stores/cart';

  function addToCart(product: StripeProduct) {
		const cartItem = {
      id: product.id,
      name: product.name,
      price: product.default_price.unit_amount/100,
      quantity: 1
    };
		console.log(JSON.stringify(cartItem));
		cart.addItem(cartItem);
  }

	export let data: StripeProductResponse;
	const product: StripeProduct = data.data[0];
</script>


<!-- <Header>
		<div class="flex">
			<h1 class="flex-grow text-xl font-medium text-white">{product.name}</h1>
			<p class="text-xl font-medium text-primary">${product.default_price.unit_amount/100}</p>
		</div>
</Header> -->

<div class="bg-background">
  <div class="pb-16 pt-6 sm:pb-24">

    <div class="mx-auto mt-8 max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <div class="lg:grid lg:auto-rows-min lg:grid-cols-12 lg:gap-x-8">
        <div class="lg:col-span-5 lg:col-start-8">
          <div class="flex justify-between">
            <h1 class="text-xl font-medium text-white">{product.name}</h1>
            <p class="text-xl font-medium text-primary">${product.default_price.unit_amount/100}</p>
          </div>
        </div>

        <!-- Image gallery -->
        <div class="mt-8 lg:col-span-7 lg:col-start-1 lg:row-span-3 lg:row-start-1 lg:mt-0">
          <h2 class="sr-only">Images</h2>

          <div class="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-3 lg:gap-8">
            <img src={product.images[0]} alt={product.description} class="rounded-lg lg:col-span-2 lg:row-span-2">
            <!-- <img src={product.images[1]} alt={product.description} class="hidden rounded-lg lg:block"> -->
            <!-- <img src={product.images[2]} alt={product.description} class="hidden rounded-lg lg:block"> -->
          </div>
        </div>

        <div class="mt-8 lg:col-span-5">
          <form>
            <!-- <ColorPicker /> -->

						 <!-- Product details -->
						<div class="mt-10">
							<h2 class="text-sm font-medium text-base">Description</h2>

							<div class="prose prose-sm mt-4 text-gray-500">
								<p>{product.description}</p>
							</div>
						</div>

            <button on:click={() => addToCart(product)} type="submit" class="mt-8 text-background flex w-full items-center justify-center rounded-md border border-transparent bg-primary px-8 py-3 font-medium uppercase hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-navigation focus:ring-offset-2">Add to cart</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
