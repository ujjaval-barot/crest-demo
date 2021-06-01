import cart from "./cart.reducer";
import product from "./product.reducer";
import common from "./common.reducer";

import { combineReducers } from "redux";

export default () =>
  /**@method combineReducers used to use multiple reducers */
  combineReducers({
    cart,
    product,
    common,
  });
