import React from 'react';

import { createMuiTheme, CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router';

import PagesRoot from './pages';

const history = createBrowserHistory();

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
    body2: {
      fontSize: '1rem',
    },
  },
  palette: {
    text: {
      primary: '#fff',
    },
  },
});

const App = () => {
  return (
    <Router history={history}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <PagesRoot />
      </ThemeProvider>
    </Router>
  );
};

export default App;
