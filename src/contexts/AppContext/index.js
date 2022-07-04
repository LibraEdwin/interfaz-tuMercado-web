import { THEME_LIGHT } from '@styles';
import PropTypes from 'prop-types';
import { createContext, useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import defaultState from './state';

/**
 * @constant
 * @type {import('react').Context<import('./appContext').AppContextInterface>}
 */
export const AppContext = createContext(null);

export const useAppContext = () => {
  return useContext(AppContext);
};

export const AppProvider = ({ children }) => {
  return (
    <AppContext.Provider value={defaultState}>
      <ThemeProvider theme={THEME_LIGHT}>
        {children}
      </ThemeProvider>
    </AppContext.Provider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired
};
