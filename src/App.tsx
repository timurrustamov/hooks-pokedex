import React from 'react';

import { createMuiTheme, CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';

import PagesRoot from './pages';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    text: {
      primary: '#fff',
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <PagesRoot />
    </ThemeProvider>
  );
};

export default App;
