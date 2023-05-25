import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const SearchPage = () => {

    const id = useParams();
    const [loading, setLoading] = useState(false);
    const [pokemon, setPokemon] = useState({});

    useEffect(() => {

        setLoading(true);
        async function loadPokemon() {

            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
            const data = await response.json();
            setPokemon(data);
            setLoading(false);
        }

        loadPokemon();

    }, [])

    function displayPokemon() {
        return <main>
            <h1 className="close-title">{pokemon.name}</h1>
            <p><em>{pokemon.results}</em></p>
            
            <Link to="/snacks">Back</Link>
        </main>
    }

    return loading ? <h2><em>loading...</em></h2> : displayPokemon();

};

export default SearchPage;
