import { combineReducers } from 'redux';
import tacoReducer from './reducers/menu.reducers';
import cookReducer from './reducers/order.reducers';

export default combineReducers({
    getMenuData:tacoReducer,
    getOrderData:cookReducer,
})