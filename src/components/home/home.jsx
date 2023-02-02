import React, { useState, useEffect } from "react";

function Home() {
    const [pokemonList, setPokemonList] = useState([]);
    const [details, setDetails] = useState([]);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
            .then((response) => {
                return response.json()
            })

            .then((poke) => {
                setPokemonList(poke.results);
            })
    }, []);

    useEffect(() => {
        pokemonList.map(pokemon => {
            return (fetch(pokemon.url)
                .then(response => response.json())
                .then(poke => {
                    setDetails([...details, {
                        name: pokemon.name,
                        number: pokemonList.indexOf(pokemon) + 1,
                        type: poke.types,
                        img: poke.sprites.front_default ? poke.sprites.front_default : "",
                    }])
                }))
        })

    }, [])

    console.log(details);

    return (
        <>
            {/*             {details.length && details.map(pokemon => {
                return (<div className="card">
                    <div className="card-img">
                        <img src={pokemon.img} alt="" />
                    </div>
                    <div className="card-text">
                        <li> nombre: {pokemon.name}</li>
                        <li> numero: {pokemon.number}</li>

                    </div>
                </div>
                )
            })} */}

        </>
    )
}

export default Home;