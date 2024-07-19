<script lang="ts">
	import { onMount } from 'svelte';
	import ProductItem from './Products/ProductItem.svelte';

	let products: any[] = [];
	let displayedProducts: any[] = [];
	let error: any = null;
	let searchTerm = '';
	let sortOrder: 'asc' | 'desc' = 'asc';

	onMount(fetchProducts);

	// Fetch the products from the server
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

	// Function to handle search
	function handleSearch() {
		displayedProducts = products.filter(product =>
			product.name.toLowerCase().includes(searchTerm.toLowerCase())
		);
		sortProducts();
	}

	// Function to handle sorting
	function handleSort() {
		sortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
		sortProducts();
	}

	// Function to sort products
	function sortProducts() {
		displayedProducts = displayedProducts.sort((a, b) => {
			const priceA = a.default_price?.unit_amount || 0;
			const priceB = b.default_price?.unit_amount || 0;
			return sortOrder === 'asc' ? priceA - priceB : priceB - priceA;
		});
	}

	// Watch for changes in searchTerm
	$: {
		if (searchTerm !== '') {
			handleSearch();
		} else {
			displayedProducts = [...products];
			sortProducts();
		}
	}
</script>

<section class="py-8 min-h-screen bg-background">
	<div class="max-w-7xl mx-auto flex items-center flex-wrap pt-4 pb-12">
		<nav id="store" class="w-full z-0 top-0 px-2 py-1">
			<div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">
				<a class="uppercase tracking-wide no-underline hover:no-underline font-bold text-primary text-2xl" href="#">
					Latest Products
				</a>
				<div class="flex items-center">
					<input
						type="text"
						bind:value={searchTerm}
						placeholder="Search products..."
						class="px-2 py-1 border rounded mr-2"
					/>
					<button on:click={handleSort} class="px-2 py-1 bg-primary text-white rounded">
						Sort by Price ({sortOrder === 'asc' ? '↑' : '↓'})
					</button>
				</div>
			</div>
		</nav>

		{#if displayedProducts.length === 0}
			<p class="w-full text-center text-secondary">No products found</p>
		{:else if error}
			<p class="w-full text-center text-red-500">Error: {error}</p>
		{:else}
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full gap-4">
				{#each displayedProducts as product (product.id)}
					<ProductItem
						name={product.name}
						href={`/products/${product.id}`}
						src={product.images[0]}
						price={product.default_price?.unit_amount}
					/>
				{/each}
			</div>
		{/if}
	</div>
</section>