<script lang='ts'>
  import { fly, fade } from 'svelte/transition';
  export let toggleMenu;
</script>
<div class="relative z-40 lg:hidden" role="dialog" aria-modal="true">

			<div  transition:fade={{ duration: 300 }} class="fixed inset-0 bg-black bg-opacity-75" aria-hidden="true"></div>

			<div transition:fly={{ x: -300, duration: 300 }} class="fixed inset-0 z-40 flex">
				<div class="relative flex w-full max-w-xs flex-col overflow-y-auto bg-navigation pb-12 shadow-xl">
					<div class="flex px-4 pb-5 pt-5">
						<button
							type="button"
							on:click={toggleMenu}
							class="-m-2 inline-flex items-center justify-center rounded-md p-2 text-white hover:text-cyan-400"
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
					<slot />

					<!-- Currency -->
					<!-- <div class="border-t border-gray-200 px-4 py-6">
						<a href="#" class="-m-2 flex items-center p-2">
							<img
								src="https://tailwindui.com/img/flags/flag-canada.svg"
								alt=""
								class="block h-auto w-5 flex-shrink-0"
							/>
							<span class="ml-3 block text-base font-medium text-gray-900">CAD</span>
							<span class="sr-only">, change currency</span>
						</a>
					</div> -->
				</div>
			</div>
		</div>