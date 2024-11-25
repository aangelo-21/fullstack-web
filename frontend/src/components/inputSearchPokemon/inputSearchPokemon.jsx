import { useState } from 'react';
import PokemonImage from '../PokemonImage/PokemonImage.jsx';

const InputSearchPokemon = ({ pokemonJSON, onSearchChange }) => {
  const [searchString, setSearchString] = useState('');
  const [filteredPokemon, setFilteredPokemon] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchString(value);
    onSearchChange(value);

    if (value === '') {
      setFilteredPokemon([]);
    } else {
      const filtered = pokemonJSON
        .filter((pokemon) =>
          pokemon.name.toLowerCase().includes(value.toLowerCase())
        )
        .slice(0, 5); // Limit to 5 closest results
      setFilteredPokemon(filtered);
    }
  };

  const getPokemonIndex = (url) => {
    const parts = url.split('/');
    return parts[parts.length - 2];
  };

  return (
    <div>
      <label>Search :</label>
      <br />
      <input onChange={handleChange} value={searchString} />
      <br />
      <div>
        {filteredPokemon.map((pokemon) => (
          <PokemonImage
            key={pokemon.name}
            name={pokemon.name}
            index={getPokemonIndex(pokemon.url)}
          />
        ))}
      </div>
    </div>
  );
};

export default InputSearchPokemon;
