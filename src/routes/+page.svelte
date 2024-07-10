<script>
	import AboutSection from '$lib/AboutSection.svelte';
	import Carousel from '$lib/components/Carousel/Carousel.svelte';
	import Footer from '$lib/components/Footer/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import Navbar from '$lib/components/Navbar/Navbar.svelte';
	import ProductsSection from '$lib/components/ProductsSection.svelte';
</script>

<body
	data-theme="retro"
	class="bg-[#EDE9D0] text-[#6E3729] work-sans leading-normal text-base tracking-normal"
>
	<Navbar />

	<Header />

	<ProductsSection />

	<AboutSection />

	<Footer />
</body>
