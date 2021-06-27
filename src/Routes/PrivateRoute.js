import React from "react";
import { Route, Switch } from "react-router-dom";
import { Home, Create } from "../Pages";
const PrivateRoute = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/create" component={Create} />
    </Switch>
  );
};

export default PrivateRoute;
