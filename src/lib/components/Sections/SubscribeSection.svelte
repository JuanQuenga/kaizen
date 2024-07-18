<script>
  import Section from "./Section.svelte";

</script>

<Section>
  <div class="px-8 py-12 mx-auto max-w-7xl md:px-12">
    <div class="bg-gray-100 p-8 lg:p-10 lg:pt-36 xl:pt-64 rounded-3xl">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-6 lg:gap-24 items-end">
        <div class="md:col-span-3">
          <p class="text-2xl text-black lg:text-6xl font-display text-balance"> Subscribe to get news about our latest <span class=" text-gray-400"> products, free stuff and latest tech news. </span>
          </p>
        </div>
        <form>
          <div class="flex-col flex gap-2">
            <label for="email-address" class="sr-only">Email address</label>
            <input id="email-address" name="email" type="email" autocomplete="email" required="" class="flex-auto w-full rounded-lg border-0 bg-black/5 h-12 px-3.5 py-2 text-white ring-1 ring-inset ring-black/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6" placeholder="Enter your email" control-id="ControlID-1">
            <button type="submit" class="items-center text-sm active:bg-gray-100 active:text-gray-900/60 active:transition-none border font-medium gap-2 inline-flex justify-between outline-offset-2 px-6 py-2 transition w-full h-12 bg-white hover:bg-gray-50 text-black rounded-lg" control-id="ControlID-2">Subscribe &nbsp; <span>→</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</Section>
