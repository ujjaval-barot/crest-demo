import { alertsMessages, alertsVarients } from "../../utils/constant.utils";
import actionTypes from "../actiontypes/actionTypes";
import { showAlert } from "./common.actions";

export const addItemToCartAction = (data) => (dispatch) => {
  dispatch({ type: actionTypes.ADD_ITEM_TO_CART, payload: data });
  dispatch(
    showAlert({
      message: alertsMessages.addedToCart,
      variant: alertsVarients.SUCCESS,
    })
  );
};

export const removeItemToCartAction = (data) => (dispatch) => {
  dispatch({ type: actionTypes.REMOVE_ITEM_FROM_CART, payload: data });
  dispatch(
    showAlert({
      message: alertsMessages.removedFromCart,
      variant: alertsVarients.INFO,
    })
  );
};
