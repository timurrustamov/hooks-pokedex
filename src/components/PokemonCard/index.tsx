import React, { FunctionComponent } from 'react';

import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import cx from 'classnames';

import Id from './Id';
import Stats from './Stats';
import { PokemonType } from './Stats/Type';
import Tiltable from './Tiltable';

import images from '../../assets/*.png';
import missingNo from '../../assets/missingNo.png';
import useDebounce from '../../hooks/useDebounce';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    maxHeight: 600,
    maxWidth: 400,
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    position: 'relative',
    margin: '10%',
    minWidth: 220,
    maxWidth: 600,
    borderRadius: 20,
    paddingBottom: '0.5rem',
    background: '#303030',
  },
  red: {
    background:
      'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
  blue: {
    background:
      'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
    boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
  },
  loading: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 20,
    background: 'linear-gradient(45deg, transparent, #eee)',
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
    maxHeight: 372,
    transform: 'translate(-10%, -10%)',
  },
}));

export type PokemonCardProps = {
  /**
   * Pokemon's id
   * This id is displayed in the card, but also determines which image will be showed
   */
  id?: number;
  // Name of the current pokemon
  name?: string;
  // Name change handler
  onNameChange?: (name: string) => void;
  /**
   * @deprecated
   * Show a loading state in the card
   * Is kinda deprecated to be used in the demo as the loading is too quick and rapidly becomes dirty UX
   */
  loading?: boolean;
  /**
   * Types of the current pokemon
   * This shape is here to match the response of pokemon API and to allow just destructure the response in the card
   * Takes precedence over "type" property
   */
  types?: [
    {
      type: {
        name: PokemonType;
      };
    }
  ];
  // Type of the current pokemon
  type?: PokemonType;
  onTypeChange?: (name: PokemonType) => void;
  hp?: number;
  weight?: string;
  height?: string;
  tiltX?: number;
  tiltY?: number;
  theme?: 'red' | 'blue';
};

const PokemonCard: FunctionComponent<PokemonCardProps> = (
  props,
) => {
  const {
    id = 25,
    name = 'Pokemon',
    loading = false,
    onNameChange,
    type,
    types,
    weight,
    height,
    onTypeChange,
    tiltX,
    tiltY,
    theme,
  } = props;
  const classes = useStyles();
  const debouncedLoading = useDebounce(loading, 100);

  return (
    <Tiltable
      className={classes.root}
      tiltX={tiltX}
      tiltY={tiltY}>
      <div
        className={cx(
          classes.card,
          theme && classes[theme],
        )}>
        {debouncedLoading && <div className={classes.loading} />}
        {id && (
          <img
            className={classes.image}
            src={`${images[id] || missingNo}`}
          />
        )}
        <input
          value={name}
          onChange={(e) => {
            onNameChange && onNameChange(e.target.value);
          }}
          className={classes.name}
        />
        <Id id={id} />
        <Stats
          type={types ? types[0].type.name : type}
          weight={weight}
          height={height}
          onTypeChange={onTypeChange}
        />
      </div>
    </Tiltable>
  );
};

export default PokemonCard;
