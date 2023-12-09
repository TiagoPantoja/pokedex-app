import React from 'react';
import { Link } from 'react-router-dom';
import './PokemonDetail.css';

interface Pokemon {
    name: string;
    pokemonId: number;
    sprite: string;
    height: number;
    weight: number;
}

interface PokemonDetailProps {
    pokemon: Pokemon | null;
    onSave: () => void;
}

const PokemonDetail: React.FC<PokemonDetailProps> = ({ pokemon, onSave }) => {
    if (!pokemon) {
        return <div>No Pokemon details avaliable.</div>;
    }

    return (
        <div>
            <h2>[pokemon.name]</h2>
            <img src={pokemon.sprite} alt={pokemon.name} />
            <p>ID: {pokemon.pokemonId}</p>
            <p>Height: {pokemon.height}</p>
            <p>Weight: {pokemon.weight}</p>
            <button onClick={onSave}>Save to Database</button>
            <Link to="/">Back to Pokemon List</Link>
        </div>
    );
};

export default PokemonDetail;