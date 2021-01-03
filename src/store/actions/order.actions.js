/** @format */

// export const SHOW_COOK_MENU = 'SHOW_COOK_MENU';
// export const HIDE_COOK_MENU = 'HIDE_COOK_MENU';
export const SET_ORDER_LIST = "SET_ORDER_LIST";
export const CLEAR_ORDER_DATA = "CLEAR_ORDER_DATA";

// export const ShowCookMenu = () => ({
//     type:SHOW_COOK_MENU,
// })

// export const HideCookMenu = () => ({
//     type:HIDE_COOK_MENU,
// })

export const setOrderList = (value) => ({
  type: SET_ORDER_LIST,
  payload: value,
});

export const ClearOrderData = () => ({
  type: CLEAR_ORDER_DATA,
});
