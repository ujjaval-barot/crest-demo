import actionTypes from "../actiontypes/actionTypes";

export const addItemToCartAction = (data) => ({
  type: actionTypes.ADD_ITEM_TO_CART,
  payload: data,
});
