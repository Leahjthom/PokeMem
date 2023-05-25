mport React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const PokemonPage = () => {

    const [loading, setLoading] = useState(false);
    const [pokemons, setPokemons] = useState({});

    useEffect(() => {

        setLoading(true);
        async function loadPokemons() {

            const response = await fetch(`https://pokeapi.co/api/v2/pokemon`);
            const data = await response.json();
            setPokemons(data);
            setLoading(false);
        };

        loadPokemons();

    }, [pokemons])

    function displayPokemons(){
        return pokemons.filter(p => p.json("results"))
    }

    return <main className="pokemon-main">
        <h1>Pokemons</h1>
       
        <div className="pokemon-holder">
            { displayPokemons() }
        </div>
    </main>

};

export default PokemonPage
