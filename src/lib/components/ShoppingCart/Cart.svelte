<script lang='ts'>
  import { onMount } from 'svelte';
  import { fly, fade } from 'svelte/transition';
  import { cart, type CartItem } from '$lib/stores/cart';

  let items: CartItem[];
  cart.subscribe(value => {
    items = value;
  });

   onMount(() => {
    // Subscribe to the cart store
    const unsubscribe = cart.subscribe(value => {
      items = value;
    });

    // Unsubscribe when the component is destroyed
    return unsubscribe;
  });


  function removeItem(id: string) {
    cart.removeItem(id);
  }

  function updateQuantity(id: string, quantity: number) {
    cart.updateQuantity(id, quantity);
  }

  async function checkout() {
    try {
      const response = await fetch('/api/stripe/checkout/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(items),
      });
      const { url } = await response.json();
      if (url) {
        window.location.href = url;
      } else {
        throw new Error('No checkout URL received');
      }
    } catch (error) {
      console.error('Error creating checkout session:', error);
      // Handle error (e.g., show an error message to the user)
    }
  }

  export let toggleCart;
</script>

<div class="relative z-40" role="dialog" aria-modal="true">
  <div 
    transition:fly={{ x: 300, duration: 300 }} 
    class="fixed inset-0 z-40 flex justify-end"
  >
    <div class="relative flex w-full max-w-md flex-col overflow-y-auto bg-navigation pb-12 shadow-xl">
      <div class="flex px-4 pb-5 pt-5 justify-end">
        <button
          type="button"
          on:click={toggleCart}
          class="-m-2 inline-flex items-center justify-center p-2 text-background bg-primary"
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

      {#if items.length === 0}
      <div class="space-y-6 border-t border-b border-primary px-2 mx-2 py-6">
        <p class="text-xl  text-center">Your cart is empty</p>

      </div>
      {:else}
        <!-- Cart Items -->
        <div class="space-y-6 border-t border-primary px-2 mx-2 py-6">
           <ul class="space-y-4">
            {#each items as item}
              <li class="flex-col">
                <div class="flex justify-between">
                  <h3 class="font-semibold">{item.name}</h3>
                  <p class="text-secondary">${item.price.toFixed(2)}</p>
                </div>
                <div class='flex items-center justify-between'>
                   <button 
                    class="mt-4 text-red-500"
                    on:click={() => removeItem(item.id)}
                  >
                    Remove
                  </button>
                  <div class="">
                    <button 
                    class="bg-secondary px-3 py-1 text-white font-bold"
                    on:click={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}>
                      -
                    </button>
                    <span class="px-2">{item.quantity}</span>
                    <button 
                      class="bg-secondary px-3 py-1 text-white font-bold"
                      on:click={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                 
                </div>
              </li>
            {/each}
          </ul>
        </div>

       

        <!-- Checkout Button & Total -->
        <div class="border-t border-primary mx-2 py-6">
          <p class="text-xl font-bold text-right mb-4">
            Total: ${items.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
          </p>

          <button on:click={checkout} class=" flex items-center p-2 bg-primary border-b-2 border-secondary w-full font-bold text-xl text-background">
          <div class="mx-auto">CHECKOUT</div>
          </button>
        </div>
      {/if}
    </div>
  </div>

  <div transition:fade={{ duration: 300 }} class="fixed inset-0 bg-black bg-opacity-75" aria-hidden="true"></div>
</div>