import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './PokemonList.css';

interface Pokemon {
    name: string;
    pokemonId: number;
    sprite: string;
    height: number;
    weight: number;
}

const PokemonList: React.FC = () => {
    const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get<Pokemon[]>('http://localhost:8080/pokemon');
                setPokemonList(response.data);
            } catch (error) {
                console.error('Error fetching Pokemon list:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="pokemon-list-container">
            <h2>Pokemon List</h2>
            <ul>
                {pokemonList.map((pokemon) => (
                    <li key={pokemon.pokemonId} className="pokemon-list-item">
                        <Link to={`/pokemon/${pokemon.pokemonId}`} className="pokemon-link">
                            {pokemon.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PokemonList;
