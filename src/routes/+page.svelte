

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
  <section class="relative h-screen flex items-start justify-center overflow-hidden pt-40 ">
   <Lines />

    <div class="absolute inset-0 z-0">
      <div class="absolute inset-0 bg-black opacity-60"></div>
      <img src={printerImage} alt="Kaizen Customs LLC, 3D Prints" class="absolute top-40 h-full w-full object-cover scale-[25%] md:scale-50" />
    </div>
    <div class="relative z-0 text-center text-white w-[95%] md:w-1/2 top-30">
      <h1 class="text-4xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-500 to-primary">Smart Home Innovations & Maker Essentials</h1>
      <p class="text-xl text-default">Revolutionizing custom lighting through technology and design</p>
    </div>
  </section>
</div>

