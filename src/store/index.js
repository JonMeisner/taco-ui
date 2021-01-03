/** @format */

import { combineReducers } from "redux";
import menuReducer from "./reducers/menu.reducers";
import cookReducer from "./reducers/order.reducers";

export default combineReducers({
  getMenuData: menuReducer,
  getOrderData: cookReducer,
});
