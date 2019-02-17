import { createContext } from 'react';

const ThemeContext = createContext<undefined | 'red' | 'blue'>(undefined);

export default ThemeContext;
