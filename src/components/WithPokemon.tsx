import React, { FunctionComponent } from 'react';

import axios from 'axios';

import usePokemon from '../hooks/usePokemon';

export type WithPokemonProps = {
  name?: string;
  children: (_: { data: any, loading?: boolean, error?: any }) => any;
};

const WithPokemon: FunctionComponent<WithPokemonProps> = (props) => {
  const response = usePokemon(props.name);
  return props.children(response);
}

export default WithPokemon;
