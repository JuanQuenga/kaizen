<script lang='ts'>
  import Cart from '../ShoppingCart/Cart.svelte';
  import MobileNavbar from './MobileNavbar.svelte';
	import { cart, type CartItem } from '$lib/stores/cart';
  import { text } from '@sveltejs/kit';

	let scrollY = 0;
	$: hasScrolled = scrollY > 10;

	let items: CartItem[];
  cart.subscribe(value => {
    items = value;
  });
	$: isCartEmpty = items.length === 0;

	let isCartOpen = false;
  function toggleCart() {
    isCartOpen = !isCartOpen;
  }

  let isMenoOpen = false;
  function toggleMenu() {
    isMenoOpen = !isMenoOpen;
  }

	const navigationLinks = [
		{ title: 'About', url: '/about' },
		{ title: 'Store', url: '/store' },
		{ title: 'Contact', url: '/contact' }
	];
</script>

<svelte:window bind:scrollY={scrollY}/>

<div class="font-bebas fixed block w-full z-10">
	<!-- Cart -->
	{#if isCartOpen}
		<Cart toggleCart={toggleCart} />
	{/if}

	<!-- Mobile Menu -->
	{#if isMenoOpen}
		<MobileNavbar toggleMenu={toggleMenu}>
			<div class="space-y-6 border-t border-cyan-400 px-4 py-6">
				{#each navigationLinks as link}
					<div class="flow-root">
						<a href={link.url} class="-m-2 block p-2 font-medium text-white uppercase text-xl">{link.title}</a>
					</div>
				{/each}
			</div>
		</MobileNavbar>
	{/if}


	<header
	 class:bg-background={hasScrolled}
	 class:border-cyan-400={hasScrolled}
	 class:border-transparent={!hasScrolled}
	 class:bg-opacity-90={hasScrolled}
	 class="relative transition-all duration-300 border-b-2 md:border-b-0">
		<nav aria-label="Top" class="mx-auto container px-4">
			<div class="">
				<div class="flex h-16 items-center justify-between">
					<div class="flex flex-1 items-center md:hidden">
						<!-- Mobile menu toggle, controls the 'mobileMenuOpen' state. -->
						<button type="button" on:click={toggleMenu} class="-ml-2 rounded-md bg-transparent p-2 text-white  hover:text-cyan-400">
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
					<div class="flex flex-1 items-center">
						
						<a href="/" class="text-white flex items-center  text-4xl self-stretch font-bebas font-extralight tracking-widest text-transparent transition-all hover:text-cyan-400 duration-500">

							KAIZEN
						</a>
					</div>

					<!-- Links -->
					<div class="hidden md:block">
						<div class="flex h-full space-x-8 ">
							{#each navigationLinks as link}
							<a href={link.url} class="flex items-center text-xl font-medium text-white hover:text-cyan-400 uppercase"
								>{link.title}</a
							>
							{/each}
						</div>
					</div>


					<!-- Cart -->
					<div class="flex flex-1 items-center justify-end">
						<div class="ml-4 flow-root lg:ml-6">
							<button on:click={toggleCart} class="group -m-2 flex items-center p-2">
								<svg
									class="h-6 w-6 flex-shrink- group-hover:text-cyan-400"
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
								<span
									class:text-cyan-400={!isCartEmpty}
									class:text-white={isCartEmpty}
									class="ml-2 text-sm font-medium group-hover:text-cyan-400"
								>
									{items.length}
								</span>
								<span class="sr-only">items in cart, view bag</span>
							</button>
						</div>
					</div>
				</div>
			</div>
		</nav>
	</header>
</div>
