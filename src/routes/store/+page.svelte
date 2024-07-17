<script>
	import Header from '$lib/components/Header.svelte';
	import ProductsSection from '$lib/components/ProductsSection.svelte';
	import printerImage from '$lib/assets/images/printers/transparent2.png';


</script>

	<Header>
		<div class="mr-auto place-self-center lg:col-span-7">
			<h1
				class="max-w-2xl mb-4 text-xl text-primary font-semibold uppercase tracking-tight leading-none md:text-5xl xl:text-2xl"
			>
				 Smart Home Innovation & Maker Essentials
			</h1>
			<p
				class="max-w-2xl font-light text-base lg:mb-8 md:text-lg lg:text-xl "
			>
				We create innovative smart home products using advanced manufacturing techniques, while also offering accessories for tools like XTOOL, CNCs, and 3D printers.
			</p>

		</div>
		<div class="hidden lg:mt-0 lg:col-span-5 lg:flex">

			<img
				src={printerImage}
				alt="3D Printer"
			/>
		</div>
	</Header>
	<ProductsSection />