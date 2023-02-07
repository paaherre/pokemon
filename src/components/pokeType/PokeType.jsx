import "./PokeType.css";
import React from 'react';


const PokeType = ({ type }) => {



    return (
        <>
            {type.map(types => {
                return (
                    <>
                        <div className="wrapper">
                            <div className={`pokeType ${types.type.name}`}>
                                <span className="tooltip">{types.type.name[0].toUpperCase() + types.type.name.substring(1)}</span>
                                <span><img src={require('../../assets/icons/' + types.type.name + '.webp')} alt={types.type.name} /></span>

                            </div>
                        </div>
                    </>
                )
            })}

        </>
    )
}

export default PokeType;