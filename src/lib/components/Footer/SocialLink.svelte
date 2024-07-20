<script lang="ts">
  export let href = '#';
	export let srText = 'Social Link';
</script>

<a {href} class="text-white hover:text-primary">
				<span class="sr-only">{srText}</span>
	<slot />
		
			</a>