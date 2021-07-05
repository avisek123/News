import React from "react";
import { Route, Switch } from "react-router-dom";
import { Home, Create, Edit } from "../Pages";
const PrivateRoute = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/create" component={Create} />
      <Route exact path="/:id/edit" component={Edit} />
    </Switch>
  );
};

export default PrivateRoute;
