import React from "react";
import Login from "./containers/Login";
import { Route } from "react-router-dom";

const Routes = () => <Route path="/login" component={Login} />;

export default Routes;
