<script>
  import Footer from '$lib/components/Footer/Footer.svelte';
  import Navbar from '$lib/components/Navbar/Navbar.svelte';
	import '../app.css';
</script>

<svelte:head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta http-equiv="X-UA-Compatible" content="ie=edge" />
	<title>Kaizen</title>
	<meta
		name="description"
		content="Kaizen Customs LLC, small scall manufacturing for southeastern Michigan."
	/>
	<meta
		name="keywords"
		content="3d printing, manufacturing, cnc, woodworking, electronics, home goods, michigan, detroit, ender, bamboo labs"
	/>

	<link rel="stylesheet" href="https://unpkg.com/tailwindcss@2.2.19/dist/tailwind.min.css" />

	<link
		href="https://fonts.googleapis.com/css?family=Work+Sans:200,400&display=swap"
		rel="stylesheet"
	/>
	
</svelte:head>

<body 
	data-theme="retro"
	class="bg-gradient-to-b from-background to-[#29C5F6] text-default font-bebas leading-normal tracking-normal"
>
	<Navbar />

	<slot />
	<Footer />
</body>
