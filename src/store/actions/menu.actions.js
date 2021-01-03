/** @format */

// export const SHOW_MENU = 'SHOW_MENU';
export const HIDE_MENU = "HIDE_MENU";
export const UPDATE_ORDER_ITEM = "UPDATE_ORDER_ITEM";
export const INITIALIZE_MENU = "INITIALIZE_MENU";
export const CLEAR_ALL = "CLEAR_ALL";
export const SET_SHOP_DATA = "SET_SHOP_DATA";

export const hideMenuToggler = () => ({
  // Hide the UI
  type: HIDE_MENU,
});

export const initializeMenu = ({
  openMenu,
  customerName,
  shopData,
  menuItems,
}) => {
  const emptyOrder = {};
  menuItems.forEach((item) => (emptyOrder[item.key] = 0));

  return {
    type: INITIALIZE_MENU,
    payload: {
      toggle: openMenu,
      name: customerName,
      shopData,
      emptyOrder,
      menuItems,
    },
  };
};

export const addOrderItem = (item) => ({
  type: UPDATE_ORDER_ITEM,
  payload: {
    key: item.key,
    quantityDiff: 1,
    costDiff: item.price,
  },
});

export const removeOrderItem = (item) => ({
  type: UPDATE_ORDER_ITEM,
  payload: {
    key: item.key,
    quantityDiff: -1,
    costDiff: -item.price,
  },
});

export const clearMenu = () => ({
  // Clear all Menu/Order Data (On Shut Down)
  type: CLEAR_ALL,
});

// export const showMenuToggler = () => ({
//     type:SHOW_MENU,
// })
// export const setCustomerName = (name) => ({
//     type:SET_CUSTOMER_NAME,
//     payload: name,
// })
// export const setMenuData = (toggle, name) => ({
//   // Show UI & assign customer name
//   type: INITIALIZE_MENU,
//   payload: { toggle, name },
// });
// // dispatch(
//   actions.setMenuData(event.data.openMenu, event.data.customerName)
// );
