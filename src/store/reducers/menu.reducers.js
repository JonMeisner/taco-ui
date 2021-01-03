/** @format */

import * as types from "../actions/menu.actions";

const initialState = {
  showMenuToggler: false,
  customerName: "",
  totalCost: 0,
  activeOrder: {},
  shopData: {},
  menuItems: [],
};

const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.HIDE_MENU:
      return {
        ...state,
        showMenuToggler: false,
      };
    case types.UPDATE_ORDER_ITEM:
      const newQuantity =
        state.activeOrder[action.payload.key] + action.payload.quantityDiff;

      return {
        ...state,
        activeOrder: {
          ...state.activeOrder,
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
        shopData: action.payload.shopData,
        menuItems: action.payload.menuItems,
        activeOrder: action.payload.emptyOrder,
      };
    case types.CLEAR_ALL:
      return {
        ...state,
        customerName: "",
        totalCost: 0,
        activeOrder: {},
        menuItems: [],
        showMenuToggler: false,
      };
    // case types.SHOW_MENU:
    //     return {
    //         ...state,
    //         showMenuToggler: true,
    //     };
    // case types.SET_CUSTOMER_NAME:
    //     return {
    //         ...state,
    //         customerName: action.payload,
    //     };
    default:
      return state;
  }
};

export default menuReducer;
