/** @format */

// export const SHOW_MENU = 'SHOW_MENU';
export const HIDE_MENU = "HIDE_MENU";
// export const SET_CUSTOMER_NAME = 'SET_CUSTOMER_NAME';

export const UPDATE_ORDER_ITEM = "UPDATE_ORDER_ITEM";
export const SET_MENU_DATA = "SET_MENU_DATA";
export const CLEAR_ALL = "CLEAR_ALL";

// export const showMenuToggler = () => ({
//     type:SHOW_MENU,
// })

export const hideMenuToggler = () => ({
  // Hide the UI
  type: HIDE_MENU,
});

// export const setCustomerName = (name) => ({
//     type:SET_CUSTOMER_NAME,
//     payload: name,
// })

export const setMenuData = (toggle, name, menuItems) => ({
  // Show UI & assign customer name
  type: SET_MENU_DATA,
  payload: { toggle, name, menuItems },
});

export const addOrderItem = (item, order) => ({
  type: UPDATE_ORDER_ITEM,
  payload: {
    key: item.key,
    quantityDiff:  1,
    costDiff: item.price,
  },
});

export const removeOrderItem = (item, order) => ({
  type: UPDATE_ORDER_ITEM,
  payload: {
    key: item.key,
    quantityDiff:  -1,
    costDiff: -item.price,
  },
});

export const clearMenu = () => ({
  // Clear all Menu/Order Data (On Shut Down)
  type: CLEAR_ALL,
});
