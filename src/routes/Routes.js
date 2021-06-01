import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import ProductList from "../pages/Product/ProductList";
import Cart from "../pages/Cart/Cart";
import PageNotFound from "../components/404";

const Routes = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route exact path="/cart" component={Cart} />
        <Route path="/*" component={PageNotFound} />
      </Switch>
    </HashRouter>
  );
};

export default Routes;
