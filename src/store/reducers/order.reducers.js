import * as types from '../actions/order.actions';

const initialState = {
    showCookToggler: false,
    orderList: [],
};

const cookReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SHOW_COOK_MENU:
            return {
                ...state,
                showCookToggler: true,
            };
        case types.HIDE_COOK_MENU:
            return {
                ...state,
                showCookToggler: false,
            }
        case types.SET_ORDER_LIST:
            return {
                ...state,
                orderList: action.payload,
            }
        case types.CLEAR_ORDER_DATA:
            return {
                ...state,
                orderList: [],
                showCookToggler: false,
            }
        default:
            return state;
    }
};

export default cookReducer;