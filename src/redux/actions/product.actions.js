import actionTypes from "../actiontypes/actionTypes";

export const updateStoreWithStaticdataAction = (data) => ({
  type: actionTypes.FETCH_STATIC_DATA,
  payload: data,
});
