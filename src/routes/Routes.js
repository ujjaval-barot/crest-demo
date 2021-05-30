import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import ProductList from "../pages/Product/ProductList";
import Cart from "../pages/Cart/Cart";

const Routes = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route exact path="/cart" component={Cart} />
      </Switch>
    </HashRouter>
  );
};
export default Routes;
