/** @format */

import * as types from "../actions/taco.actions";

const initialState = {
  showMenuToggler: false,
  customerName: "",
  totalCost: 0,
  orderList: {},
};

const tacoReducer = (state = initialState, action) => {
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
      const newItem = !state.orderList[action.payload.key]
        ? action.payload.quantityDiff
        : state.orderList[action.payload.key] + action.payload.quantityDiff;

      return {
        ...state,
        orderList: {
          ...state.orderList,
          [action.payload.key]: newItem > 0 ? newItem : 0,
        },
        totalCost: state.totalCost + action.payload.costDiff,
      };
    case types.SET_MENU_DATA:
      return {
        ...state,
        showMenuToggler: action.payload.toggle,
        customerName: action.payload.name,
      };
    case types.CLEAR_ALL:
      return {
        ...state,
        showMenuToggler: false,
        numSpicy: 0,
        numCarne: 0,
        numGreen: 0,
        numCorona: 0,
        customerName: "",
        totalCost: 0,
      };
    default:
      return state;
  }
};

export default tacoReducer;
