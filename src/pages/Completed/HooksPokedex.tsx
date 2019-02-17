import React, { FunctionComponent, useContext, useState } from 'react';

import PokemonCard from '../../components/PokemonCard';
import { PokemonType } from '../../components/PokemonCard/Stats/Type';

import ThemeContext from '../../context/theme';
import useDebounce from '../../hooks/useDebounce';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import useMousePosition from '../../hooks/useMousePosition';
import usePokemon from '../../hooks/usePokemon';

const useDebouncedPokemon = (name?: string) => {
  const debouncedName = useDebounce(name, 300);
  return usePokemon(debouncedName);
};

const Pokedex: FunctionComponent = () => {
  const [name, setName] = useState('Pokemon');
  const [type, setType] = useState<PokemonType>('ground');
  const theme = useContext(ThemeContext);
  const { x, y } = useMousePosition();
  const { data } = useDebouncedPokemon(name);
  useDocumentTitle(name);

  return (
    <PokemonCard
      theme={theme}
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
