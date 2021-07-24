import React from "react";
import { Route, Switch } from "react-router-dom";
import { Home, Create, Edit, ViewStory, Single, Write } from "../Pages";
const PrivateRoute = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/create" component={Create} />
      <Route exact path="/:id/edit" component={Edit} />
      <Route exact path="/:id/ViewStory" component={ViewStory} />
      <Route exact path="/single" component={Single} />
      <Route exact path="/write" component={Write} />
    </Switch>
  );
};

export default PrivateRoute;
