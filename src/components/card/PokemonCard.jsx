import PokeType from "../pokeType/PokeType";
import "./PokemonCard.css"

const PokemonCard = ({ pokemon }) => {
    return (
        <div className="card m-1">
            <img src={pokemon.sprites.front_default} className="card-img-top" alt={`pokemonImg ${pokemon.name}`}></img>
            <div className="card-body">
                <h5 className="card-title">{pokemon.name[0].toUpperCase() + pokemon.name.substring(1)}</h5>
                <div className="card-text">Tipo: {<PokeType type={pokemon.types} />}</div>
                <p className="card-text">Número: {pokemon.id}</p>
            </div>
        </div>
    )
}

export default PokemonCard;