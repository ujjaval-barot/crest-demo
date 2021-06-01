/* eslint-disable no-unused-vars */
import actionTypes from "../actiontypes/actionTypes";

const initialState = {
  loading: false,
  error: null,
  products: [],
  inventory: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.FETCH_STATIC_DATA:
      return {
        ...state,
        products: payload.products,
        inventory: payload.inventory,
      };
    case actionTypes.ADD_ITEM_TO_CART: {
      const { productId } = payload;
      let tempInventory = state.inventory;

      // ? update inventory item if same product exists.
      const foundInventoryItem = tempInventory?.find((inventoryItem) => {
        if (
          inventoryItem.productId === productId &&
          inventoryItem.quantity >= 0
        ) {
          return { ...inventoryItem, orderQuantity: inventoryItem.quantity-- };
        } else return false;
      });

      return {
        ...state,
        inventory: [...tempInventory],
      };
    }
    case actionTypes.REMOVE_ITEM_FROM_CART: {
      const { productId } = payload;
      let tempInventory = state.inventory;

      // ? update inventory item if same product extsts.
      const foundInventoryItem = tempInventory?.find((inventoryItem) => {
        if (
          inventoryItem.productId === productId &&
          inventoryItem.quantity >= 0
        ) {
          return { ...inventoryItem, orderQuantity: inventoryItem.quantity++ };
        } else return false;
      });

      return {
        ...state,
        inventory: [...tempInventory],
      };
    }
    default:
      return state;
  }
};
