import React, { ChangeEvent, FunctionComponent, useCallback, useState } from 'react';

import { Theme, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Wrapper from './Wrapper';

export type PokemonCardProps = {
  name?: string;
  onNameChange?: (name: string) => void;
  src?: string;
  type?: string;
  hp?: number;
  weight?: string;
  height?: string;
  x?: number;
  y?: number;
};

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

  hp: {
    margin: theme.spacing.unit * 2,
    position: 'relative',
    color: 'white',
    '&:before': {
      position: 'absolute',
      top: -8,
      left: '50%',
      width: '50%',
      height: 5,
      borderRadius: 3,
      background: theme.palette.common.white,
      content: '" "',
      transform: 'translateX(-50%)',
    },
  },
}));

const PokemonCard: FunctionComponent<PokemonCardProps> = (props) => {
  const classes = useStyles();

  const { onNameChange, name = 'Pokemon' } = props;
  const handleOnNameChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    if (onNameChange) {
      onNameChange(e.target.value);
    }
  }, [onNameChange]);

  return (
    <Wrapper
      className={classes.root}
      x={props.x}
      y={props.y}
    >
      <div className={classes.card}>
        {props.src && <img className={classes.image} src={props.src} />}
        <div>
          <input className={classes.name} value={name} onChange={handleOnNameChange} />
          <div className={classes.hp}>
            <Typography align="center" variant="h5">
              HP 80
            </Typography>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default PokemonCard;
