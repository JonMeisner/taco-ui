/** @format */

import * as types from "../actions/menu.actions";

const initialState = {
  showMenuToggler: false,
  customerName: "",
  totalCost: 0,
  orderList: {},
  shopData: {},
};

const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    // case types.SHOW_MENU:
    //     return {
    //         ...state,
    //         showMenuToggler: true,
    //     };
    case types.HIDE_MENU:
      return {
        ...state,
        showMenuToggler: false,
      };
    // case types.SET_CUSTOMER_NAME:
    //     return {
    //         ...state,
    //         customerName: action.payload,
    //     };
    case types.UPDATE_ORDER_ITEM:
      // this is the messiest logic i've ever seen in my entire life
      const newQuantity = !state.orderList[action.payload.key]
        ? action.payload.quantityDiff
        : state.orderList[action.payload.key] + action.payload.quantityDiff;

      return {
        ...state,
        orderList: {
          ...state.orderList,
          [action.payload.key]: newQuantity >= 0 ? newQuantity : 0,
        },
        totalCost:
          newQuantity >= 0
            ? state.totalCost + action.payload.costDiff
            : state.totalCost,
      };
    case types.INITIALIZE_MENU:
      return {
        ...state,
        showMenuToggler: action.payload.toggle,
        customerName: action.payload.name,
      };
    case types.SET_SHOP_DATA:
      return { ...state, shopData: action.payload.shopData };
    case types.CLEAR_ALL:
      return {
        ...state,
        customerName: "",
        totalCost: 0,
        orderList: {},
        showMenuToggler: false,
      };
    default:
      return state;
  }
};

export default menuReducer;