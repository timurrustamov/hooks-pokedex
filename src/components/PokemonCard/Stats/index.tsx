import React, { FunctionComponent } from 'react';

import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import Typography from '@material-ui/core/Typography';

import Type, { PokemonType } from './Type';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    minHeight: theme.spacing.unit * 8,
    margin: `${theme.spacing.unit * 2}px 0`,
  },
  separator: {
    height: theme.spacing.unit * 6,
    border: `1px solid ${theme.palette.divider}`,
  },
}));

export type StatsProps = {
  type?: PokemonType;
  weight?: string | number;
  height?: string | number;
  onTypeChange?: (type: PokemonType) => void;
};

const Stats: FunctionComponent<StatsProps> = (props) => {
  const { type, onTypeChange } = props;
  let {  weight = '??', height = '??' } = props;
  if (typeof weight === 'number') {
    weight = weight / 10;
  }
  if (typeof height === 'number') {
    height = height / 10;
  }
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Type value={type} onChange={onTypeChange} />
      <span className={classes.separator} />
      <Typography variant="h6">{weight} kg</Typography>
      <span className={classes.separator} />
      <Typography variant="h6">{height} m</Typography>
    </div>
  );
};

export default Stats;
