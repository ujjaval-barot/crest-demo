import actionTypes from "../actiontypes/actionTypes";

const initialState = {
  loading: false,
  error: null,
  cart: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.ADD_ITEM_TO_CART:
      const tempCart = state.cart;
      if (!tempCart?.length) tempCart.push(payload);
      else {
        tempCart.map((cartItem) => {
          if (cartItem.id === payload.id) {
            return (cartItem.orderQuantity += 1);
          } else {
            return tempCart.push(payload);
          }
        });
      }
      return {
        ...state,
        cart: [...tempCart],
      };
    default:
      return state;
  }
};
