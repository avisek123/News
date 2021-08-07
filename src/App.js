import React from "react";
import { AppContextProvider } from "./Hooks/useAppContext";
import Router from "../src/Router";

const App = () => {
  return (
    <AppContextProvider>
      <Router />
    </AppContextProvider>
  );
};

export default App;
