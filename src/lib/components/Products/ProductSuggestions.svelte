<script lang="ts">
	import { onMount } from 'svelte';
	import ProductItem from './ProductItem.svelte';
	import { cart } from '$lib/stores/cart';
  import type { StripeProduct } from '../../../routes/products/[productId]/proxy+page';

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

	let products: any[] = [];
	let displayedProducts: any[] = [];
	let error: any = null;
	let searchTerm = '';
	let sortOrder: 'asc' | 'desc' = 'asc';

	onMount(fetchProducts);

	async function fetchProducts() {
		try {
			const url = new URL('/api/stripe/products', window.location.origin);
			url.searchParams.append('limit', '4');
			url.searchParams.append('expand[]', 'data.default_price');
			const response = await fetch(url);

			if (!response.ok) {
				const errorBody = await response.text();
				console.error('Error response:', errorBody);
				throw new Error(`HTTP error! status: ${response.status}, body: ${errorBody}`);
			}

			const data = await response.json();
			products = data.data;
			displayedProducts = [...products];
		} catch (e: any) {
			console.error('There was a problem fetching the products:', e);
			error = e.message;
		}
	}

</script>

	<div class="container mx-auto px-4 sm:px-6 lg:px-8">


		{#if displayedProducts.length === 0}
			<p class="text-center text-gray-500">No products found</p>
		{:else if error}
			<p class="text-center text-red-500">Error: {error}</p>
		{:else}
			<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
				
				{#each Array.from({ length: 4 }).map((_, i) => i) as i}
					{#each displayedProducts as product (product.id)}
						<ProductItem
							name={product.name}
							href={`/products/${product.id}`}
							src={product.images[0]}
							price={product.default_price?.unit_amount}
							addToCart={() => addToCart(product)}
						/>
					{/each}	
				{/each}
			
			</div>
		{/if}
	</div>