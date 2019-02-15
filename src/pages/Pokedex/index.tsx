import React, { FunctionComponent, useEffect, useState } from 'react';

import PokemonCard from '../../components/PokemonCard';
import { PokemonType } from '../../components/PokemonCard/Stats/Type';

import createUseAxios from '../../hooks/useAxios';
import useDebounce from '../../hooks/useDebounce';
import useMousePosition from '../../hooks/useMousePosition';

const usePokemon = createUseAxios((name?: string) => ({
  url: name ? `${process.env.POKEMON_API}/pokemon/${name.toLowerCase()}` : undefined,
}));

const useDebouncedPokemon = (name?: string) => {
  const debouncedName = useDebounce(name, 300);
  return usePokemon(debouncedName);
};

const Pokedex: FunctionComponent = () => {
  const [name, setName] = useState('Pokemon');
  const [type, setType] = useState<PokemonType>('fairy');
  const { x, y } = useMousePosition();

  useEffect(() => {
    document.title = name;
  }, [name]);

  const { data } = useDebouncedPokemon(name);
  return (
    <PokemonCard
      onNameChange={(newName) => setName(newName)}
      type={type}
      onTypeChange={(newType) => setType(newType)}
      tiltX={x}
      tiltY={y}
      {...data}
      name={name}
    />
  );
};

export default Pokedex;
