<script>
  import { fade, fly } from 'svelte/transition';

  let isOpen = false;

  function toggleMenu() {
    isOpen = !isOpen;
  }

	const navigationLinks = [
		{ title: 'About', url: '/about' },
		{ title: 'Store', url: '/store' },
		{ title: 'Contact', url: '/contact' }
	];
</script>

<div class=" font-montserrat">
	<!-- Mobile Menu -->
	{#if isOpen}
		<div class="relative z-40 lg:hidden" role="dialog" aria-modal="true">

			<div transition:fade={{ duration: 300 }} class="fixed inset-0 bg-black bg-opacity-75" aria-hidden="true"></div>

			<div transition:fly={{ x: -300, duration: 300 }} class="fixed inset-0 z-40 flex">
				<div class="relative flex w-full max-w-xs flex-col overflow-y-auto bg-navigation pb-12 shadow-xl">
					<div class="flex px-4 pb-5 pt-5">
						<button
							type="button"
							on:click={toggleMenu}
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
					<div class="space-y-6 border-t border-primary px-4 py-6">
						{#each navigationLinks as link}
							<div class="flow-root">
								<a href={link.url} class="-m-2 block p-2 font-medium text-white uppercase text-xl">{link.title}</a>
							</div>
						{/each}
					</div>

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
	{/if}


	<header class="relative bg-navigation">

		<nav aria-label="Top" class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="border-b border-gray-200">
				<div class="flex h-16 items-center justify-between">
					<div class="flex flex-1 items-center lg:hidden">
						<!-- Mobile menu toggle, controls the 'mobileMenuOpen' state. -->
						<button type="button" on:click={toggleMenu} class="-ml-2 rounded-md bg-transparent p-2 text-primary">
							<span class="sr-only">Open menu</span>
							<svg
								class="h-8 w-8"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								aria-hidden="true"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
								/>
							</svg>
						</button>
					</div>


					<!-- Logo -->
					<a href="#" class="flex text-4xl text-primary hover:text-secondary self-stretch flex-1 items-center">
						KAIZEN
					</a>

					<!-- Links -->
					<div class="hidden lg:block">
						<div class="flex h-full space-x-8 ">
							{#each navigationLinks as link}
							<a href={link.url} class="flex items-center text-xl font-medium  hover:text-primary uppercase"
								>{link.title}</a
							>
							{/each}
						</div>
					</div>


					<!-- Cart -->
					<div class="flex flex-1 items-center justify-end">
						<div class="ml-4 flow-root lg:ml-6">
							<a href="#" class="group -m-2 flex items-center p-2">
								<svg
									class="h-6 w-6 flex-shrink-0 text-primary group-hover:text-secondary"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
									/>
								</svg>
								<span class="ml-2 text-sm font-medium text-primary group-hover:text-secondary"
									>0</span
								>
								<span class="sr-only">items in cart, view bag</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</nav>
	</header>
</div>
