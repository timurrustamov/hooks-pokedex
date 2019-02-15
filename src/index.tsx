import React from 'react';
import { render } from 'react-dom';

/**
 * Install material-ui's new style system before importing any components
 */
import { install } from '@material-ui/styles';
install();

import App from './App';

import 'typeface-roboto';

const main = () => {
  render(<App />, document.getElementById('root'));
};

main();
