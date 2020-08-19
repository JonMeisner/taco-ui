import * as types from "../actions/order.actions";

const initialState = {
    showHideToggler: false,
    showRegisterToggler: false,
    showCookToggler: false,
    orders: [],
};

const tacoReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_ORDERS:
            return {
                ...state,
                orders: action.payload,
            };
        case types.GET_ORDERS:
            return {
                ...state,
                orders,
            };
        case types.SHOW_COOK_TOGGLER:
            return {
                ...state,
                showCookToggler: true,
            };
        case types.DONT_SHOW_COOK_TOGGLER:
            return {
                ...state,
                showCookToggler: false,
            };
        case types.SHOW_HIDE_TOGGLER:
            return {
                ...state,
                showRegisterToggler: true,
            };
        case types.DONT_SHOW_HIDE_TOGGLER:
            return {
                ...state,
                showRegisterToggler: false,
            };
        case types.SHOW_REGISTER_TOGGLER:
            return {
                ...state,
                showCookToggler: true,
            };
        case types.DONT_SHOW_REGISTER_TOGGLER:
            return {
                ...state,
                showCookToggler: false,
            };
        default:
            return state;
    }
};

export default tacoReducer;
