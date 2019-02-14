import React, { FunctionComponent, useEffect, useState } from 'react';

import PokemonCard from '../../components/PokemonCard';
import createUseAxios from '../../hooks/useAxios';
import useMousePosition from '../../hooks/useMousePosition';

const usePokemon = createUseAxios((name?: string) => ({
  url: name ? `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}` : undefined,
}));

const Pokedex: FunctionComponent = () => {
  const [name, setName] = useState('Pokemon');
  const { x, y } = useMousePosition();

  useEffect(() => {
    document.title = name;
  }, [name]);

  const { data } = usePokemon(name);
  const pokemonId = data ? data.id : 25;

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <PokemonCard
      name={name}
      onNameChange={(newName) => setName(newName)}
      x={x}
      y={y}
      src={`https://pokeres.bastionbot.org/images/pokemon/${pokemonId}.png`}
    />
  );
};

export default Pokedex;
