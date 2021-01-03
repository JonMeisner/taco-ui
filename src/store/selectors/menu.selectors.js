/** @format */

import { createSelector } from "reselect";

//const getToggle = (state) => state.showMenuToggler;
// const getToggle = (state) => state.getOrderData;
const getState = (state) => state;

// export const getMenuState = createSelector (
//     [getToggle],
//     (data) => data.showMenuToggler,
// );

export const getMenuData = createSelector(
  [getState],
  (data) => data.getMenuData
);
