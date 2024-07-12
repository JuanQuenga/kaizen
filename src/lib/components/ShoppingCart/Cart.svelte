<script lang='ts'>
  import { fly, fade } from 'svelte/transition';
  // import { cart } from '$lib/stores';
  import { derived } from 'svelte/store';
  export let toggleCart;
</script>

<div class="relative z-40" role="dialog" aria-modal="true">
  <div 
    transition:fly={{ x: 300, duration: 300 }} 
    class="fixed inset-0 z-40 flex justify-end"
  >
    <div class="relative flex w-full max-w-xs flex-col overflow-y-auto bg-navigation pb-12 shadow-xl">
      <div class="flex px-4 pb-5 pt-5 justify-end">
        <button
          type="button"
          on:click={toggleCart}
          class="-m-2 inline-flex items-center justify-center rounded-md p-2 text-primary"
        >
          <span class="sr-only">Close menu</span>
          <svg
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Links -->
      <div class="space-y-6 border-t border-primary px-2 mx-2 py-6">
        <div class="flow-root">
          <a href='#' class="-m-2 block p-2 font-medium text-white uppercase text-xl">Coming Soon</a>
        </div>
      </div>

      <!-- Checkout Button -->
      <div class="border-t border-primary mx-2 py-6">
        <button class=" flex items-center p-2 bg-primary border-b-2 border-secondary w-full font-bold text-xl text-background">
         <div class="mx-auto">CHECKOUT</div>
        </button>
      </div>
    </div>
  </div>

  <div transition:fade={{ duration: 300 }} class="fixed inset-0 bg-black bg-opacity-75" aria-hidden="true"></div>
</div>