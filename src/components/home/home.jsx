import React, { useState, useEffect } from "react";
import PokemonCard from "../card/PokemonCard";
import './home.css'

function Home() {

    const [pokemonList, setPokemonList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [pokeFilterName, setPokeFilterName] = useState("");
    const [pokeTypes, setPokeTypes] = useState([]);
    const [filteredTypes, setFilteredTypes] = useState([]);

    const apiUrl = 'https://pokeapi.co/api/v2/'

    useEffect(() => {
        async function loadPokemon() {
            const api = await fetch(apiUrl + 'pokemon?limit=10000&offset=0');
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

    useEffect(() => {
        async function loadTypes() {
            const api = await fetch(apiUrl + 'type/')
            const data = await api.json();
            setPokeTypes(data.results.filter(data => data.name !== "unknown" && data.name !== "shadow"))
        }
        loadTypes();
    }, [])

    function pokeTypesFilter(e, idx) {
        if (e.target.checked) {
            setFilteredTypes([...filteredTypes, pokeTypes[idx]]);
        } else {
            setFilteredTypes(filteredTypes.filter(f => f.name !== pokeTypes[idx].name))
        }
    }

    function render() {
        const pokemones = [...pokemonList].filter(poke => poke.name.includes(pokeFilterName))
        const resp = [];
        if (filteredTypes.length > 0) {
            filteredTypes.forEach(fTypes => {
                pokemones.forEach(poke => {
                    poke.types.forEach(types => {
                        if (fTypes.name === types.type.name) {
                            resp.push(poke)
                        }
                    })
                })
            })
            return resp;
        } else return pokemones;
    }

    return (
        <>
            <div className="home">
                <div className="header p-1 sticky-top">
                    <div className="input-group searchBar">
                        <input type="text" className="form-control" placeholder="Pokemon" aria-label="Pokemon" aria-describedby="basic-addon1" onChange={e => setPokeFilterName(e.target.value.toLowerCase())}></input>
                        <span className="input-group-text" id="basic-addon2">🔍</span>
                    </div>
                    <div className="typeFilter mt-1 dropdown">
                        <div >Filtrar por tipo: 🔽</div>
                        <div className="dropdown-content">
                            {pokeTypes.map((type, idx) => {
                                return (<label>
                                    <input type="checkbox" name="" id="" onChange={e => pokeTypesFilter(e, idx)} />
                                    <img src={require('../../assets/icons/' + type.name + '.webp')} alt="" />
                                </label>)
                            })
                            }
                        </div>
                    </div>
                </div>
                <div className="d-flex flex-wrap justify-content-evenly">
                    {
                        loading ? <h1>Loading...</h1> : render().map((pokemon, idx) => <PokemonCard pokemon={pokemon} idx={idx} />)
                    }
                </div>
            </div>
        </>
    )
}

export default Home;