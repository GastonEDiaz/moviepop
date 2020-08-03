import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home/Home";
import Catalog from "./Catalog/Catalog";

const Body = () => {
  return (
    <div className="Body">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/catalog" component={Catalog} />
      </Switch>
    </div>
  );
};

export default Body;
