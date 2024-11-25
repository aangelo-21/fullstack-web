const PokemonImage = ({ name, index }) => {
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`;
  return (
    <div>
      <img src={imageUrl} alt={name} />
      <div>{name}</div>
    </div>
  );
};

export default PokemonImage;
