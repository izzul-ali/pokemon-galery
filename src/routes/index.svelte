<!-- <script context="module">
    export async function load() {

    }
</script> -->

<script>
	// @ts-nocheck

	import { pokemons } from '../stores/pokemon';
	import PokemonCard from '../components/card.svelte';

	let searchTerm = '';
	let pokemonList = [];

	$: {
		if (searchTerm) {
			pokemonList = $pokemons.filter((pokemon) => pokemon.name.toLowerCase().includes(searchTerm));
		} else {
			pokemonList = [...$pokemons];
		}
	}
</script>

<svelte:head>
	<title>Pokemon Galery</title>
</svelte:head>

<h1 class="text-center mt-2 md:mb-20 text-3xl lg:text-5xl font-bold mb-8">Pokemon Galery</h1>
<div class="">
	<input
		type="text"
		name="pokemon"
		bind:value={searchTerm}
		placeholder="cari nama pokemonmu"
		class="w-full sm:text-sm text-xs py-2 focus:border focus:border-purple-200 focus:outline-none border border-gray-100 shadow-lg shadow-gray-300 px-5 rounded-lg"
	/>
</div>

<div class="w-full mt-6 flex flex-wrap gap-3 gap-x-0 justify-evenly">
	{#each pokemonList as p}
		<a href="/pokemon/{p.id}"><PokemonCard url={p.image} name={p.name} /></a>
	{/each}
</div>
