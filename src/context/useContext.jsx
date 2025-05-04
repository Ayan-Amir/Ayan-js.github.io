import { createContext, useContext } from 'react';

export const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppContextProvider = ({ children }) => {
  const contextValue = {};

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};
