<script>
	import { page } from '$app/stores';
</script>



<div class="min-h-screen bg-background">
  <!-- Hero Section -->
  <section class="relative h-screen flex items-center justify-center overflow-hidden">
    <div class="relative z-10 text-center text-white">
      <h1 class="text-6xl font-bold mb-8">{$page.error.message}</h1>
      <a href="/" class="text-2xl bg-cyan-400 hover:bg-navigation text-background hover:text-white px-4 py-2">Return Home</a>
    </div>
  </section>
</div>