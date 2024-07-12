<script>
  import { onMount } from 'svelte';

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

<div class="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200">
  <!-- Hero Section -->
  <section class="relative h-screen flex items-center justify-center overflow-hidden">
    <div class="absolute inset-0 z-0">
      <div class="absolute inset-0 bg-black opacity-50"></div>
      <img src="/api/placeholder/1920/1080" alt="Hero background" class="w-full h-full object-cover" />
    </div>
    <div class="relative z-10 text-center text-white">
      <h1 class="text-6xl font-bold mb-4">Illuminating Innovation</h1>
      <p class="text-xl">Revolutionizing custom lighting through technology and design</p>
    </div>
  </section>

  <!-- Our Expertise Section -->
  <section class="py-20 bg-white">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl font-bold mb-12 text-center">Our Expertise</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        {#each expertiseItems as item}
          <div class="bg-gray-100 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            <h3 class="text-2xl font-semibold mb-4">{item.title}</h3>
            <p class="text-gray-600">{item.description}</p>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- What Sets Us Apart Section -->
  <section class="py-20 bg-gray-900 text-white">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl font-bold mb-12 text-center">What Sets Us Apart</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        {#each uniqueFeatures as feature}
          <div class="flex items-start space-x-4">
            <div class="flex-shrink-0">
              <div class="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center">
                <span class="text-2xl">✓</span>
              </div>
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-2">{feature.title}</h3>
              <p class="text-gray-400">{feature.description}</p>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Our Vision Section -->
  <section class="py-20 bg-gradient-to-r from-purple-500 to-pink-500 text-white">
    <div class="container mx-auto px-4 text-center">
      <h2 class="text-4xl font-bold mb-8">Our Vision</h2>
      <p class="text-xl mb-8 max-w-3xl mx-auto">
        We believe that lighting is more than illumination—it's an expression of personality and a crucial element of any space's ambiance. 
        Our mission is to democratize access to high-end, custom lighting design, empowering homeowners, interior designers, and businesses to create spaces that truly shine.
      </p>
      <button class="bg-white text-purple-600 py-3 px-8 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300">
        Explore Our Designs
      </button>
    </div>
  </section>

  <!-- Footer -->
  <footer class="bg-gray-800 text-white py-8">
    <div class="container mx-auto px-4 text-center">
      <p>&copy; 2024 Your Company Name. All rights reserved.</p>
    </div>
  </footer>
</div>