<script lang="ts">
	import { onMount } from 'svelte';
	import ProductItem from './Products/ProductItem.svelte';
	import { cart } from '$lib/stores/cart';
  import type { StripeProduct } from '../../routes/products/[productId]/proxy+page';
  import HeaderSection from './Sections/HeaderSection.svelte';

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

	function handleSearch() {
		displayedProducts = products.filter(product =>
			product.name.toLowerCase().includes(searchTerm.toLowerCase())
		);
		sortProducts();
	}

	function handleSort() {
		sortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
		sortProducts();
	}

	function sortProducts() {
		displayedProducts = displayedProducts.sort((a, b) => {
			const priceA = a.default_price?.unit_amount || 0;
			const priceB = b.default_price?.unit_amount || 0;
			return sortOrder === 'asc' ? priceA - priceB : priceB - priceA;
		});
	}

	$: {
		if (searchTerm !== '') {
			handleSearch();
		} else {
			displayedProducts = [...products];
			sortProducts();
		}
	}
</script>
<HeaderSection headerText="Our Products" />

<section class="md:py-12 min-h-screen bg-stone-900">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="mb-8">
			<!-- <h1 class="text-3xl font-bold text-gray-900 mb-4">Latest Products</h1> -->
			<div class="flex flex-col sm:flex-row justify-between items-center gap-4">
				<div class="relative w-full sm:w-64">
					<input
						type="text"
						bind:value={searchTerm}
						placeholder="Search products..."
						class="w-full pl-10 pr-4 py-2 border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
					/>
					<span class="absolute left-3 top-2.5 text-gray-400">🔍</span>
				</div>
				<button
					on:click={handleSort}
					class="flex items-center px-4 py-2 bg-white border border-gray-300 shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
				>
					Sort by Price
					<span class="ml-2">{sortOrder === 'asc' ? '↑' : '↓'}</span>
				</button>
			</div>
		</div>

		{#if displayedProducts.length === 0}
			<p class="text-center text-gray-500">No products found</p>
		{:else if error}
			<p class="text-center text-red-500">Error: {error}</p>
		{:else}
			<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
				
				{#each Array.from({ length: 12 }).map((_, i) => i) as i}
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
</section>