import React from "react";
import { Switch, Route } from 'react-router-dom';
import About from "./about";
import Home from "./home";

const Router = () => (
  <Switch>
    <Route exact path="/home" component={Home} />
    <Route exact path="/about" component={About} />
  </Switch>
);
export default Router;
