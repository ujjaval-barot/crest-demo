/* eslint-disable no-unused-vars */
import actionTypes from "../actiontypes/actionTypes";

const initialState = {
  loading: false,
  error: null,
  cart: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.ADD_ITEM_TO_CART: {
      const { productId, varientId } = payload;
      let tempCart = state.cart;

      // ? update cart item if same product extsts or remove.
      const duplicateProduct = tempCart?.find((cartItem) => {
        if (
          cartItem.productId === productId &&
          cartItem.varientId === varientId
        ) {
          return { ...cartItem, orderQuantity: cartItem.orderQuantity++ };
        } else return false;
      });

      // ? add cart item if same product doesn't extsts.
      if (!duplicateProduct) tempCart.push({ ...payload, orderQuantity: 1 });

      return {
        ...state,
        cart: [...tempCart],
      };
    }
    case actionTypes.REMOVE_ITEM_FROM_CART: {
      const { productId, varientId } = payload;
      let tempCart = state.cart;

      // ? update cart item if same product extsts.
      const duplicateProduct = tempCart?.find((cartItem, index) => {
        if (
          cartItem.productId === productId &&
          cartItem.varientId === varientId
        ) {
          if (cartItem.orderQuantity <= 1) tempCart.splice(index, 1);
          return { ...cartItem, orderQuantity: cartItem.orderQuantity-- };
        } else return false;
      });
      return {
        ...state,
        cart: [...tempCart],
      };
    }
    default:
      return state;
  }
};
