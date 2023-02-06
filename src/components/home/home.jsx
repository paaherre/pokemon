import React, { useState, useEffect } from "react";
import PokemonCard from "../card/PokemonCard";

function Home() {

    const [pokemonList, setPokemonList] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        async function loadPokemon() {
            const api = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0');
            const data = await api.json();
            const pokemones = await data.results.map(async pokemon => {
                const result = await fetch(pokemon.url)
                const resp = await result.json()
                return resp;
            })
            const results = await Promise.all(pokemones)
            setPokemonList(results.filter(poke => poke.is_default && poke.sprites.front_default))
            setLoading(false)
        }
        loadPokemon();
    }, [])

    return (
        <>
            {loading ? <h1>Loading</h1> : pokemonList.map(pokemon => <PokemonCard pokemon={pokemon} />)}
        </>
    )
}

export default Home;