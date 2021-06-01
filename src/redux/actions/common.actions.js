import actionTypes from "../actiontypes/actionTypes";

export const showAlert = ({ variant, message }) => ({
  type: actionTypes.SHOW_ALERT,
  payload: { variant, message },
});
