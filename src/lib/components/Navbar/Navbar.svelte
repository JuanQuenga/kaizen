<div class="bg-white">
	<!-- Mobile menu - Off-canvas menu for mobile, show/hide based on off-canvas menu state. -->
	<div class="relative z-40 lg:hidden" role="dialog" aria-modal="true">
		<!--
      Off-canvas menu backdrop, show/hide based on off-canvas menu state.

      Entering: "transition-opacity ease-linear duration-300"
        From: "opacity-0"
        To: "opacity-100"
      Leaving: "transition-opacity ease-linear duration-300"
        From: "opacity-100"
        To: "opacity-0"
    -->
		<div class="fixed inset-0 bg-black bg-opacity-25" aria-hidden="true"></div>

		<div class="fixed inset-0 z-40 flex">
			<!--
        Off-canvas menu, show/hide based on off-canvas menu state.

        Entering: "transition ease-in-out duration-300 transform"
          From: "-translate-x-full"
          To: "translate-x-0"
        Leaving: "transition ease-in-out duration-300 transform"
          From: "translate-x-0"
          To: "-translate-x-full"
      -->
			<div class="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
				<div class="flex px-4 pb-2 pt-5">
					<button
						type="button"
						class="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
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
				<div class="space-y-6 border-t border-gray-200 px-4 py-6">
					<div class="flow-root">
						<a href="#" class="-m-2 block p-2 font-medium text-gray-900">Company</a>
					</div>
					<div class="flow-root">
						<a href="#" class="-m-2 block p-2 font-medium text-gray-900">Stores</a>
					</div>
				</div>

				<div class="border-t border-gray-200 px-4 py-6">
					<a href="#" class="-m-2 flex items-center p-2">
						<img
							src="https://tailwindui.com/img/flags/flag-canada.svg"
							alt=""
							class="block h-auto w-5 flex-shrink-0"
						/>
						<span class="ml-3 block text-base font-medium text-gray-900">CAD</span>
						<span class="sr-only">, change currency</span>
					</a>
				</div>
			</div>
		</div>
	</div>

	<header class="relative bg-white">
		<p
			class="flex h-10 items-center justify-center bg-indigo-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8"
		>
			Get free delivery on orders over $50
		</p>
		<nav aria-label="Top" class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="border-b border-gray-200">
				<div class="flex h-16 items-center justify-between">
					<div class="flex flex-1 items-center lg:hidden">
						<!-- Mobile menu toggle, controls the 'mobileMenuOpen' state. -->
						<button type="button" class="-ml-2 rounded-md bg-white p-2 text-gray-400">
							<span class="sr-only">Open menu</span>
							<svg
								class="h-6 w-6"
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

						<a href="#" class="ml-2 p-2 text-gray-400 hover:text-gray-500">
							<span class="sr-only">Search</span>
							<svg
								class="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								aria-hidden="true"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
								/>
							</svg>
						</a>
					</div>

					<!-- Flyout menus -->
					<div class="hidden lg:block lg:flex-1 lg:self-stretch">
						<div class="flex h-full space-x-8">
							<a href="#" class="flex items-center font-medium text-gray-700 hover:text-gray-800"
								>Products</a
							>
							<a href="#" class="flex items-center font-medium text-gray-700 hover:text-gray-800"
								>Services</a
							>
							<a href="#" class="flex items-center font-medium text-gray-700 hover:text-gray-800"
								>Blog</a
							>
						</div>
					</div>

					<!-- Logo -->
					<a href="#" class="flex text-3xl">
						<!-- <span class="sr-only">KAIZEN</span>
						<img
							class="h-8 w-auto"
							src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
							alt=""
						/> -->
						KAIZEN
					</a>

					<div class="flex flex-1 items-center justify-end">
						<!-- Search -->
						<a href="#" class="ml-6 hidden p-2 text-gray-400 hover:text-gray-500 lg:block">
							<span class="sr-only">Search</span>
							<svg
								class="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								aria-hidden="true"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
								/>
							</svg>
						</a>

						<!-- Cart -->
						<div class="ml-4 flow-root lg:ml-6">
							<a href="#" class="group -m-2 flex items-center p-2">
								<svg
									class="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
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
								<span class="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800"
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
