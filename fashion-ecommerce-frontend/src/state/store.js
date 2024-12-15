import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk"; // Corrected import

import { authReducer } from "./auth/Reducer"; // Your auth reducer
import { customerProductReducer } from "./product/reducer";
import { cartReducer } from "./cart/reducer";
import { orderReducer } from "./order/reducer";

const rootReducers = combineReducers({
  auth: authReducer, // combine your reducers
  product: customerProductReducer,
  cart: cartReducer,
  order: orderReducer,
});

const store = legacy_createStore(rootReducers, applyMiddleware(thunk));

export default store;
