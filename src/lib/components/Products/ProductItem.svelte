<script lang="ts">
	export let name = '3D Printer';
	export let price = 9999;
	export let href = '#';
	export let src;
    export let addToCart;
	import printerImg from '$lib/assets/images/printers/printer1.jpg';
</script>

<div class="bg-white border border-gray-800 shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md">
    <a {href} class="block">
        <img class="w-full h-48 object-cover" src={src || printerImg} alt={name} />
        <div class="p-4">
            <h3 class="text-2xl font-semibold text-black mb-2">{name}</h3>
            <div class="flex items-center justify-between">
                <span class="text-xl font-extralight text-black">${(price/100).toFixed(2)}</span>
                <button 
                    on:click={addToCart} 
                    class="text-sm px-4 py-2 bg-cyan-400 text-white font-semibold uppercase  hover:bg-cyan-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Add to cart
                </button>
            </div>
        </div>
    </a>
</div>