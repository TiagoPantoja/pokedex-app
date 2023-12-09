import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SearchForm from './SearchForm';
import PokemonDetail from './PokemonDetail';
import axios from "axios";
import './App.css';

interface Pokemon {
  name: string;
  pokemonId: number;
  sprite: string;
  height: number;
  weight: number;
}

interface PokemonListProps {
  history: any;
}

const PokemonList: React.FC<PokemonListProps> = ({ history }) => {
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
      <div>
        <h2>Pokemon List</h2>
        <ul>
          {pokemonList.map((pokemon) => (
              <li key={pokemon.pokemonId}>
                <Link to={`/pokemon/${pokemon.pokemonId}`}>{pokemon.name}</Link>
              </li>
          ))}
        </ul>
      </div>
  );
};

const App: React.FC = () => {
  const [currentPokemon, setCurrentPokemon] = useState<Pokemon | null>(null);

  const handleSearch = async (nameOrId: string) => {
    try {
      const response = await axios.get<Pokemon>(`http://localhost:8080/pokemon/search?nameOrId=${nameOrId}`);
      setCurrentPokemon(response.data);
    } catch (error) {
      console.error('Error fetching Pokemon details:', error);
    }
  };

  const handleSave = async () => {
    if (currentPokemon) {
      try {
        await axios.post('http://localhost:8080/pokemon/save', {
          name: currentPokemon.name,
          pokemonId: currentPokemon.pokemonId,
          sprite: currentPokemon.sprite,
          height: currentPokemon.height,
          weight: currentPokemon.weight,
        });

        console.log('Pokemon saved to database!, currentPokemon');
      } catch (error) {
        console.error('Error saving Pokemon:', error);
      }
    } else {
      console.error('No Pokemon selected to save.');
    }
  };

  return (
      <Router>
        <Routes>
          <Route path="/" element={<>
            <SearchForm onSearch={handleSearch} />
            <PokemonList history={history} />
          </>} />
          <Route
              path="/pokemon/:id"
              element={<PokemonDetail pokemon={currentPokemon} onSave={handleSave} />}
          />
        </Routes>
      </Router>
  );
};

export default App;
