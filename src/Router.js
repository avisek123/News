import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { useAppContext } from "./Hooks";
import { PrivateRoute, PublicRoute } from "./Routes";
const Router = () => {
  const { isLoggedIn } = useAppContext();
  return (
    <BrowserRouter>
      <Switch>{isLoggedIn ? <PrivateRoute /> : <PublicRoute />}</Switch>
    </BrowserRouter>
  );
};

export default Router;
