import React from 'react';

import PokemonCard from '../components/PokemonCard';
import { PokemonType } from '../components/PokemonCard/Stats/Type';

export type ClassicPokedexProps = {
  x?: number;
  y?: number;
};

export type ClassicPokedexState = {
  name: string;
  type: PokemonType;
};

class ClassicPokedex extends React.Component<ClassicPokedexProps, ClassicPokedexState> {

  public render() {
    return (
      <PokemonCard />
    );
  }
}

export default ClassicPokedex;
