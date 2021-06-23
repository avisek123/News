import React from "react";
import { Route, Switch } from "react-router-dom";
import { Home } from "../Pages";
const PrivateRoute = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  );
};

export default PrivateRoute;
