import React, { FunctionComponent } from 'react';

import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
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

export type HpProps = {
  id?: number | string;
};

const Id: FunctionComponent<HpProps> = (props) => {
  const { id = 100 } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography align="center" variant="h5">
        Id {id}
      </Typography>
    </div>
  );
};

export default Id;
