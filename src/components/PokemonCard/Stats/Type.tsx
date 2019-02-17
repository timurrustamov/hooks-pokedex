import React, { FunctionComponent } from 'react';

import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

export type PokemonType =
  | 'normal'
  | 'fighting'
  | 'flying'
  | 'poison'
  | 'ground'
  | 'rock'
  | 'bug'
  | 'ghost'
  | 'steel'
  | 'fire'
  | 'water'
  | 'grass'
  | 'electric'
  | 'psychic'
  | 'ice'
  | 'dragon'
  | 'dark'
  | 'fairy'
  | 'unknown';

const pokemonTypes: PokemonType[] = [
  'normal',
  'fighting',
  'flying',
  'poison',
  'ground',
  'rock',
  'bug',
  'ghost',
  'steel',
  'fire',
  'water',
  'grass',
  'electric',
  'psychic',
  'ice',
  'dragon',
  'dark',
  'fairy',
  'unknown',
];

export type PokemonTypeColors = {
  [P in PokemonType]: string;
};
const pokemonTypeColors: PokemonTypeColors = {
  normal: '#A8A878',
  fighting: '#C03028',
  flying: '#A890F0',
  poison: '#A040A0',
  ground: '#E0C068',
  rock: '#B89F38',
  bug: '#A8B821',
  ghost: '#705898',
  steel: '#B8B8D0',
  fire: '#F07F30',
  water: '#6890F0',
  grass: '#78C751',
  electric: '#F8CF30',
  psychic: '#F85888',
  ice: '#98D8D8',
  dragon: '#7039F8',
  dark: '#705848',
  fairy: '#FF65D5',
  unknown: '#400125',
};

const PokemonTypesItems = pokemonTypes.map((type) => (
  <MenuItem key={type} value={type} style={{ background: pokemonTypeColors[type] }}>
    {type.toUpperCase()}
  </MenuItem>
));

export type TypeProps = {
  value?: PokemonType;
  onChange?: (type: PokemonType) => void;
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 64,
  },
  menu: {
    padding: 0,
  },
  tag: {
    minHeight: 32,
    borderRadius: 10,
    padding: theme.spacing.unit,
  },
}));

const Type: FunctionComponent<TypeProps> = (props) => {
  const { value = 'ground', onChange } = props;
  const classes = useStyles();
  const background = pokemonTypeColors[value];

  return (
    <div className={classes.root}>
      <Select
        disableUnderline
        onChange={(e) => onChange && onChange(e.target.value as PokemonType)}
        style={{ background }}
        className={classes.tag}
        MenuProps={{ MenuListProps: { style: { padding: 0 } } }}
        value={value}
      >
        {PokemonTypesItems}
      </Select>
    </div>
  );
};

export default Type;
