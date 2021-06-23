import React, { createContext, useState, useContext } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <AppContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => useContext(AppContext);

export default useAppContext;
