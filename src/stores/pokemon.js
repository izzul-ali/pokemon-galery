// @ts-nocheck
import { writable } from "svelte/store";


export const pokemons = writable([])

const fetchPokemon = async () => {
    const url = "https://pokeapi.co/api/v2/pokemon?limit=300";
    const resp = await fetch(url)
    if (resp.ok) {
        const data = await resp.json();
        const loadData = data.results.map((data, index) => {
            return {
                name: data.name,
                id: index + 1,
                image: `https://raw.githubusercontent.com/pokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`
            }
        })
        pokemons.set(loadData)
    }
}

fetchPokemon();