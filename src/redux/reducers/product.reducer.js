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
    default:
      return state;
  }
};
