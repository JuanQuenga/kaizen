<script lang="ts">
  export let href = '#';
	export let srText = 'Social Link';
</script>

<a {href} class="text-primary hover:text-secondary">
				<span class="sr-only">{srText}</span>
	<slot />
		
			</a>