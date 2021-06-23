import React from "react";
import { Route, Switch } from "react-router-dom";
import { Login, Signup } from "../Pages";

const PublicRoutes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/Login" exact component={Login} />
      <Route path="/signup" exact component={Signup} />
      {/* <Route path="/ForgetPassword" exact component={Forgetpassword} /> */}
      {/* <Route path="*" component={NotFound} /> */}
    </Switch>
  );
};

export default PublicRoutes;
