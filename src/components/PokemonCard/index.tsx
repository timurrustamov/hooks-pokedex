import React, { FunctionComponent } from 'react';

import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import Id from './Id';
import Stats from './Stats';
import { PokemonType } from './Stats/Type';
import Tiltable from './Tiltable';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    margin: '10%',
    minWidth: 220,
    maxWidth: 600,
    borderRadius: 20,
    border: '1px solid #ffdd56',
    paddingBottom: '0.5rem',
    background: 'linear-gradient(45deg, #c21500, #ffc500)',
  },
  name: {
    background: 'transparent',
    border: 'none',
    width: '100%',
    textAlign: 'center',
    outline: 'none',
    ...theme.typography.h4,
  },
  image: {
    position: 'relative',
    display: 'block',
    width: '120%',
    transform: 'translate(-10%, -10%)',
  },
}));

export type PokemonCardProps = {
  id?: string | number
  name?: string
  types?: [
    {
      type: {
        name: PokemonType,
      },
    }
  ]
  onNameChange?: (name: string) => void
  type?: PokemonType
  onTypeChange?: (name: PokemonType) => void
  hp?: number
  weight?: string
  height?: string
  x?: number
  y?: number,
};

const PokemonCard: FunctionComponent<PokemonCardProps> = (props) => {
  const {
    id = 25,
    name = 'Pokemon',
    onNameChange,
    type,
    types,
    weight,
    height,
    onTypeChange,
  } = props;
  const classes = useStyles();

  return (
    <Tiltable className={classes.root} x={props.x} y={props.y}>
      <div className={classes.card}>
        {id && <img className={classes.image} src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`} />}
        <input
          value={name}
          onChange={(e) => onNameChange && onNameChange(e.target.value)}
          className={classes.name}
        />
        <Id id={id} />
        <Stats type={types ? types[0].type.name : type} weight={weight} height={height} onTypeChange={onTypeChange} />
      </div>
    </Tiltable>
  );
};

export default PokemonCard;
