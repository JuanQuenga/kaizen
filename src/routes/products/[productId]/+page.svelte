<script lang="ts">
	import type { StripeProduct, StripeProductResponse } from './+page';
	import { cart } from '$lib/stores/cart';
  import ProductSuggestions from '$lib/components/Products/ProductSuggestions.svelte';

  function addToCart(product: StripeProduct) {
		const cartItem = {
      id: product.id,
      name: product.name,
      price: product.default_price.unit_amount/100,
      quantity: 1,
      image: product.images[0]
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

<div class="pt-20 bg-gradient-to-b from-background to-cyan-950">
    <div class="mx-auto pt-2 md:pt-6 md:mt-8 container px-4">
      <div class="lg:grid lg:auto-rows-min lg:grid-cols-12 lg:gap-x-8">
        <div class="lg:col-span-5 lg:col-start-8">
          <div class="flex justify-between gap-4">
            <h1 class="text-xl md:text-4xl font-bold text-white">{product.name}</h1>
            <p class="text-xl font-extralight text-white">${product.default_price.unit_amount/100}</p>
          </div>
        </div>

        <!-- Image gallery -->
        <div class="mt-8 lg:col-span-7 lg:col-start-1 lg:row-span-3 lg:row-start-1 lg:mt-0">
          <h2 class="sr-only">Images</h2>

          <div class="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-3 lg:gap-8">
            <img src={product.images[0]} alt={product.description} class="lg:col-span-2 lg:row-span-2">
            <!-- <img src={product.images[1]} alt={product.description} class="hidden rounded-lg lg:block"> -->
            <!-- <img src={product.images[2]} alt={product.description} class="hidden rounded-lg lg:block"> -->
          </div>
        </div>

        <div class="mt-8 lg:col-span-5">
          <form>
            <!-- <ColorPicker /> -->

						 <!-- Product details -->
						<div class="mt-10">
							<h2 class="text-xl font-medium text-white under uppercase border-b-2 border-gray-600 pb-4">Description</h2>

							<div class=" mt-4 text-gray-300 text-lg md:text-xl">
								<p>{product.description}</p>
							</div>
						</div>

            <button 
              on:click={() => addToCart(product)} 
              type="submit" 
              class=" mt-8 text-2xl text-white flex w-full items-center justify-center border border-transparent bg-cyan-400 px-8 py-3 font-medium uppercase hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-navigation focus:ring-offset-2"
            >
              Add to cart
            </button>
          </form>
        </div>

       
      </div>
      
    </div>
    <div class="text-center bg-background py-8">
      <h2 class="text-6xl uppercase font-extraligt mb-6 text-white">You May Also Like</h2>
      <ProductSuggestions />
    </div>
</div>
