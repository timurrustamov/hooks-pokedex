import React from 'react';

import PokemonCard from '../components/PokemonCard';
import { PokemonType } from '../components/PokemonCard/Stats/Type';

export type Props = {
  x?: number;
  y?: number;
};

export type State = {
  name?: string;
  type?: PokemonType;
};

class ClassicPokedex extends React.Component<Props, State> {
  public render() {
    return <PokemonCard />;
  }
}

export default ClassicPokedex;
