import React, { FunctionComponent, useEffect, useState } from 'react';

import PokemonCard from '../../components/PokemonCard';
import { PokemonType } from '../../components/PokemonCard/Stats/Type';

import createUseAxios from '../../hooks/useAxios';
import useMousePosition from '../../hooks/useMousePosition';

const usePokemon = createUseAxios((name?: string) => ({
  url: name ? `${process.env.POKEMON_API}/pokemon/${name.toLowerCase()}` : undefined,
}));

const Pokedex: FunctionComponent = () => {
  const [name, setName] = useState('Pokemon');
  const [type, setType] = useState<PokemonType>('electric');
  const { x, y } = useMousePosition();

  useEffect(() => {
    document.title = name;
  }, [name]);

  const { data } = usePokemon(name);
  return (
    <PokemonCard
      id={150}
      onNameChange={(newName) => setName(newName)}
      type={type}
      onTypeChange={(newType) => setType(newType)}
      x={x}
      y={y}
      {...data}
      name={name}
    />
  );
};

export default Pokedex;
