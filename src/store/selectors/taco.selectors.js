import {createSelector} from 'reselect';

//const getToggle = (state) => state.showMenuToggler;
// const getToggle = (state) => state.getOrderData;
const getName = (state) => state.getMenuData;

// export const getMenuState = createSelector (
//     [getToggle],
//     (data) => data.showMenuToggler,
// );

export const getMenuData = createSelector (
    [getName],
    (data) => data.customerName,
)