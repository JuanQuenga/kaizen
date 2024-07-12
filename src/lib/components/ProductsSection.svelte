<script lang='ts'>
	import { onMount } from 'svelte';
	import ProductItem from './Products/ProductItem.svelte';

  let products: any[] = [];
  let error: any = null;

  onMount(fetchProducts);

  // Fetch the products from the server
  async function fetchProducts() {
    try {
			const url = new URL('/api/stripe/products', window.location.origin);
			url.searchParams.append('limit', '4');
			url.searchParams.append('expand[]', 'data.default_price')
      const response = await fetch(url);

      if (!response.ok) {
        const errorBody = await response.text();
        console.error('Error response:', errorBody);
        throw new Error(`HTTP error! status: ${response.status}, body: ${errorBody}`);
      }

      const data = await response.json();
      console.log('Fetched data:', data);
      products = data.data;
    } catch (e: any) {
      console.error('There was a problem fetching the products:', e);
      error = e.message;
    }
  }
</script>

<section class="bg-background py-8">
	<div class="max-w-7xl mx-auto flex items-center flex-wrap pt-4 pb-12">
		<nav id="store" class="w-full z-30 top-0 px-2 py-1">
			<div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">
				<a class="uppercase tracking-wide no-underline hover:no-underline font-bold text-primary text-2xl" href="#">
					Latest Products
				</a>
				<!-- Navigation icons remain unchanged -->
			</div>
		</nav>

		{#if products.length === 0}
			<p class="w-full text-center text-secondary">Loading...</p>
		{:else if error}
			<p class="w-full text-center text-red-500">Error: {error}</p>
	{:else}
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full gap-4">
				{#each products as product (product.id)}
					<ProductItem
						name={product.name}
						src={product.images[0]}
						price={product.default_price?.unit_amount}
					/>
				{/each}
			</div>

		{/if}
	</div>
</section>