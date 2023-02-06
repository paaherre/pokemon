import "./PokemonCard.css"

const PokemonCard = ({ pokemon }) => {
    console.log(pokemon)
    return (
        <div className="card m-1">
            <img src={pokemon.sprites.front_default} className="card-img-top" alt="..."></img>
            <div className="card-body">
                <h5 className="card-title">{pokemon.name[0].toUpperCase() + pokemon.name.substring(1)}</h5>
                <p className="card-text">Tipo: {pokemon.types.map(types => types.type.name)}</p>
                <p className="card-text">Número: {pokemon.id}</p>
            </div>
        </div>
    )
}

export default PokemonCard;