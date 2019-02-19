import React, { FunctionComponent } from 'react';

import { makeStyles } from '@material-ui/styles';
import { Route, Switch } from 'react-router';

import ThemeContext from '../context/theme';
import ClassicPokedex from './ClassicPokedex';
import CompletedClassicPokedex from './Completed/ClassicPokedex';
import CompletedHooksPokedex from './Completed/HooksPokedex';
import HooksPokedex from './HooksPokedex';
import RequestDelay from '../components/RequestDelay';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    minHeight: '100vh',
    maxWidth: '100vw',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  complete: {
    display: 'flex',
  },
  wrapper: {
    margin: 24,
  },
});

const renderClassicPokedex = () => {
  return (
    <ThemeContext.Provider value="red">
      <ClassicPokedex />
    </ThemeContext.Provider>
  );
};
const renderRequestDelayClassicPokedex = () => {
  return (
    <RequestDelay>
      <ThemeContext.Provider value="red">
        <ClassicPokedex />
      </ThemeContext.Provider>
    </RequestDelay>
  );
};
const renderHooksPokedex = () => {
  return (
    <ThemeContext.Provider value="blue">
      <HooksPokedex />
    </ThemeContext.Provider>
  );
};
const renderRequestDelayHooksPokedex = () => {
  return (
    <RequestDelay>
      <ThemeContext.Provider value="blue">
        <HooksPokedex />
      </ThemeContext.Provider>
    </RequestDelay>
  );
};

/**
 * Completed versions
 */
const renderCompletedClassicPokedex = () => {
  return (
    <RequestDelay>
      <ThemeContext.Provider value="red">
        <CompletedClassicPokedex />
      </ThemeContext.Provider>
    </RequestDelay>
  );
};
const renderCompletedHooksPokedex = () => {
  return (
    <RequestDelay>
      <ThemeContext.Provider value="blue">
        <CompletedHooksPokedex />
      </ThemeContext.Provider>
    </RequestDelay>
  );
};

const renderCompletedBothPokedex = () => {
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ margin: 24 }}>
        <ThemeContext.Provider value="red">
          <CompletedClassicPokedex />
        </ThemeContext.Provider>
      </div>
      <div style={{ margin: 24 }}>
        <ThemeContext.Provider value="blue">
          <CompletedHooksPokedex />
        </ThemeContext.Provider>
      </div>
    </div>
  );
};

const PagesRoot: FunctionComponent = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Switch>
        <Route path="/classic" render={renderClassicPokedex} />
        <Route path="/hooks" render={renderHooksPokedex} />
        <Route
          path="/delay/classic"
          render={renderRequestDelayClassicPokedex}
        />
        <Route
          path="/delay/hooks"
          render={renderRequestDelayHooksPokedex}
        />
        <Route
          path="/completed/classic"
          render={renderCompletedClassicPokedex}
        />
        <Route
          path="/completed/hooks"
          render={renderCompletedHooksPokedex}
        />
        <Route path="/" render={renderCompletedBothPokedex} />
      </Switch>
    </div>
  );
};

export default PagesRoot;
