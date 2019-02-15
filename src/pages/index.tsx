import React, { FunctionComponent } from 'react';

import { makeStyles } from '@material-ui/styles';

import Pokedex from './Pokedex';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    minHeight: '100vh',
    maxWidth: '100vw',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
});

const PagesRoot: FunctionComponent = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Pokedex />
    </div>
  );
};

export default PagesRoot;
