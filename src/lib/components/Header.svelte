<script lang="ts">
	import printerImage from '$lib/assets/images/printers/transparent2.png';
</script>
<section class="bg-navigation">
	<div class="grid max-w-screen-xl px-4 lg:px-12 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-12 lg:grid-cols-12">
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
	</div>
</section>
