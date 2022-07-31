<script context="module">
	export const load = ({error, status}) => {
		return {
			props: {
				status: status
			}
		};
	};
</script>

<script>
	// @ts-nocheck

	export let status;
</script>

{#if status >= 299} 
    <h1 class="text-center text-2xl font-bold">Something Wrong...</h1>
    <p class="text-center mt-3 text-sm">go back to <a href="/" class="text-red-700">home</a> page</p>
{/if}
