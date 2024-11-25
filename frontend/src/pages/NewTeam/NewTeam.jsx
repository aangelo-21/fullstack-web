import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { newTeam } from '../../service/newTeam';
import InputSearchPokemon from '../../components/inputSearchPokemon/inputSearchPokemon';
import axios from 'axios';

const NewTeam = () => {
  const [searchString, setPokemonSearch] = useState('');
  const [pokemonJSON, setPokemonJSON] = useState([]);

  useEffect(() => {
    getPokemonJSON();
  }, []);

  async function getPokemonJSON() {
    const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=1025');
    setPokemonJSON(data.results);
  }

  const [name, setName] = useState('');
  const [slot1, setSlot1] = useState('');
  const [slot2, setSlot2] = useState('');
  const [slot3, setSlot3] = useState('');
  const [slot4, setSlot4] = useState('');
  const [slot5, setSlot5] = useState('');
  const [slot6, setSlot6] = useState('');

  const handleNewTeam = async () => {
    let data = {
      name: name,
      slot1: slot1,
      slot2: slot2,
      slot3: slot3,
      slot4: slot4,
      slot5: slot5,
      slot6: slot6,
    };

    const newTeamResult = await newTeam(data);
  };

  const sendButton = (e) => {
    e.preventDefault();
    handleNewTeam();
  };

  return (
    <div>
      <form action="">
        <label htmlFor="name">*Team Name:</label>
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Type a team name"
          required
        />
        <br />

        <label>Poke1</label>
        <InputSearchPokemon pokemonJSON={pokemonJSON} onSearchChange={setSlot1} />
        
        <label>Poke2</label>
        <InputSearchPokemon pokemonJSON={pokemonJSON} onSearchChange={setSlot2} />

        <label>Poke3</label>
        <InputSearchPokemon pokemonJSON={pokemonJSON} onSearchChange={setSlot3} />

        <label>Poke4</label>
        <InputSearchPokemon pokemonJSON={pokemonJSON} onSearchChange={setSlot4} />

        <label>Poke5</label>
        <InputSearchPokemon pokemonJSON={pokemonJSON} onSearchChange={setSlot5} />

        <label>Poke6</label>
        <InputSearchPokemon pokemonJSON={pokemonJSON} onSearchChange={setSlot6} />

        <button onClick={sendButton}>Save Team</button>
      </form>
    </div>
  );
};

export default NewTeam;
