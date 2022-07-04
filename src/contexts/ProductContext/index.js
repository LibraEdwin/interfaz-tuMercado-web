import PropTypes from 'prop-types';
import { createContext, useContext } from 'react';

export const ProductContext = createContext({});

export const useProductContext = useContext(ProductContext);

export const ProductProvider = ({ children }) => {
  return <ProductContext.Provider value={[]}>
    {children}
  </ProductContext.Provider>;
};

ProductProvider.propTypes = {
  children: PropTypes.node.isRequired
};
