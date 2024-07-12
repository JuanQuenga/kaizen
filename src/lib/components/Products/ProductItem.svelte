<script lang="ts">
	export let name = '3D Printer';
	export let price = 9999;
	export let href = '#';
	export let src;
	import printer from '$lib/assets/images/printers/printer1.jpg';
</script>

<div class="flex flex-col p-4">
	<a {href}>
		<div class="w-auto h-60 hover:grow hover:shadow-lg overflow-hidden">
			<img class="h-full w-full object-cover absolute" src = {src || printer} alt={name} />
		</div>
		<div class="pt-3 flex items-center justify-between">
			<p class="text-base font-bold text-lg">{name}</p>
			
		</div>
		<p class="pt-1 text-secondary">${price/100}</p>
	</a>
</div>
