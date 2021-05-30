import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import combineReducers from './reducers/index'
const middleWare = [thunk];
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers(),
  composeEnhancer(applyMiddleware(...middleWare))
);

export default store;
