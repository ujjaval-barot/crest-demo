import cart from "./cart.reducer";
import product from "./product.reducer";

import { combineReducers } from "redux";

export default () =>
  /**@method combineReducers used to use multiple reducers */
  combineReducers({
    cart,
    product,
  });
