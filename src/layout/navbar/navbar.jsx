import "./navbar.css";
import pokeballClose from "../../assets/img/pokeball-closed-icon.png";
import { Outlet } from "react-router-dom";

function navbar() {
    return (
        <div className="d-flex flex-row">
            <div className="navbar">
                <h1 className="mt-3">PokeApp</h1>
                <div className="d-flex flex-column mt-5 align-items-start">
                    <a href="/"><img src={pokeballClose} alt="" /> Pokemon List</a>
                    <a href="mailto:paaherre@gmail.com" target="_blank" rel="noreferrer"><img src={pokeballClose} alt="" /> Contacto</a>
                    <a href="https://github.com/paaherre/pokemon" target="_blank" rel="noreferrer"><img src={pokeballClose} alt="" /> Sobre nosotros</a>
                </div>
            </div>
            <section>
                <Outlet></Outlet>
            </section>
        </div>
    );

}

export default navbar;