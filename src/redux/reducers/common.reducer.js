import actionTypes from "../actiontypes/actionTypes";

const initialState = {
  loading: false,
  error: null,
  alerts: {},
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SHOW_ALERT:
      return {
        ...state,
        alerts: payload,
      };
    default:
      return state;
  }
};
