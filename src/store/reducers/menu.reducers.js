/** @format */

import * as types from "../actions/menu.actions";

const initialState = {
  showMenuToggler: false,
  customerName: "",
  job: "",
  workerJob: "",
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
          [action.payload.key]: newQuantity >= 0 && newQuantity <= 5 ? newQuantity : [action.paylod.key],
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
        job: action.payload.job,
        workerJob: action.payload.workerJob,
        shopData: action.payload.shopData,
        menuItems: action.payload.menuItems,
        activeOrder: action.payload.emptyOrder,
      };
    case types.CLEAR_ALL:
      return initialState
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
