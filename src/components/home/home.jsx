import React, { useState, useEffect } from "react";
import PokemonCard from "../card/PokemonCard";

function Home() {

    const [pokemonList, setPokemonList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [pokeFilter, setPokeFilter] = useState("");


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
            <div className="home">
                <div className="input-group mb-3 p-5">
                    <input type="text" className="form-control" placeholder="Pokemon" aria-label="Pokemon" aria-describedby="basic-addon1" onChange={e => setPokeFilter(e.target.value.toLowerCase())}></input>
                    <span className="input-group-text" id="basic-addon2">🔍</span>
                </div>
                {
                    loading ? <h1>Loading</h1> : pokemonList.filter(poke => poke.name.includes(pokeFilter)).map(pokemon => <PokemonCard pokemon={pokemon} />)
                }
            </div>
        </>
    )
}

export default Home;