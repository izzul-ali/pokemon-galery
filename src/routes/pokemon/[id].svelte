<script context="module">
	export async function load(page) {
		const id = page.params.id;
		if (id > 800) {
			return {
				props: "not found"
			}
		}
		const uri = `https://pokeapi.co/api/v2/pokemon/${id}`;

		const response = await fetch(uri);
		const pokemon = await response.json();
		return {
			props: { pokemon }
		};
	}
</script>

<script>
	// @ts-nocheck
	export let pokemon;
</script>

<svelte:head>
	<title>Pokeman</title>
</svelte:head>

<div
	class="mt-5 w-full rounded-lg justify-center flex p-5 "
>
<div class=" border flex flex-col justify-center w-64 items-center border-purple-100 shadow-xl shadow-gray-300">
	<img src={pokemon.sprites[`front_default`]} class="w-full" alt={pokemon.name} />
	<h1 class="text-sm">{pokemon.name.toUpperCase()}</h1>
</div>
</div>
