

	<script>
  import Navbar from '$lib/components/Navbar/Navbar.svelte';
  import { onMount } from 'svelte';
	import printerImage from '$lib/assets/images/printers/transparent2.png';
  import Lines from '$lib/components/Lines.svelte';
  import SubscribeSection from '$lib/components/Sections/SubscribeSection.svelte';

  onMount(() => {
    // Add any necessary JavaScript for animations or interactivity
  });

  const expertiseItems = [
    { title: '3D Printing', description: 'Create intricate, geometrically complex lamp shades and fixtures with precision and efficiency.' },
    { title: 'CNC Machining', description: 'Sculpt metal and wood into stunning lamp bases, sconces, and decorative elements with utmost durability and precision.' },
    { title: 'Advanced Electronics', description: 'Integrate smart lighting technology for customizable color temperatures, dimming capabilities, and smartphone control.' }
  ];

  const uniqueFeatures = [
    { title: 'Customization at Scale', description: 'Offer bespoke lighting at surprisingly accessible price points through innovative production methods.' },
    { title: 'Eco-Friendly Focus', description: 'Prioritize sustainable materials and energy-efficient LED technology for environmentally conscious lighting solutions.' },
    { title: 'Collaborative Design Process', description: 'Engage customers in the creative process with our intuitive online design tools.' },
    { title: 'Rapid Turnaround', description: 'Deliver custom lighting solutions faster than traditional methods, without compromising on quality.' }
  ];
</script>

<div class="min-h-screen bg-transparent">

  <!-- Hero Section -->
  <section class="relative h-screen flex items-start md:items-center justify-center overflow-hidden pt-40 ">
   <Lines />

    <div class="absolute inset-0 z-0 flex justify-center">
      <div class="absolute inset-0 bg-black opacity-60"></div>
    </div>
    <div class="relative z-0 text-center text-white px-4 flex flex-col md:max-w-1/2">
      <div class="flex justify-center"> 
        <h1 class="text-4xl w-full md:text-7xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400">
          Smart Home Innovations & Maker Essentials
        </h1>
      </div>
      <p class="text-lg font-extralight md:text-3xl text-default">
        Revolutionizing custom lighting through technology and design
      </p>
      <div class="flex justify-center mt-8">
        <a href="/store" class="inline-block text-xl md:text-3xl px-6 py-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-white uppercase transition-all hover:scale-110 focus:scale-110">
          Shop Now
        </a>
      </div>
      <img src={printerImage} alt="Kaizen Customs LLC, 3D Prints" class="mt-4 md:mt-20 md:w-full object-fill" />

    </div>
  </section>
</div>

