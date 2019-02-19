import React, {
  createContext,
  FunctionComponent,
  useState,
} from 'react';

import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Slider from '@material-ui/lab/Slider';

export const RequestDelayContext = createContext(0);

const useStyles = makeStyles({
  root: {
    position: 'absolute',
    zIndex: 1,
    top: 0,
    right: 0,
    padding: 24,
  },
  slider: {
    padding: '22px 0px',
  },
});

const RequestDelay: FunctionComponent = (props) => {
  const [delay, setDelay] = useState(0);
  const classes = useStyles();

  return (
    <>
      <Paper className={classes.root}>
        <Typography variant="body2" color="textSecondary">
          Request delay {delay.toFixed(1)}s
        </Typography>
        <Slider
          classes={{ container: classes.slider }}
          step={0.2}
          max={3}
          min={0}
          value={delay}
          onChange={(_e: any, value) => setDelay(value)}
        />
      </Paper>
      <RequestDelayContext.Provider value={delay * 1000}>
        {props.children}
      </RequestDelayContext.Provider>
    </>
  );
};

export default RequestDelay;
