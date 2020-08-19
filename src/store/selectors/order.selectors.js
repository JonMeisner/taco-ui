import { createSelector } from "reselect";

const getOrderList = (state) => state.orders;

export const getOrders = createSelector(
    [getOrderList],
    (data) => data.orders
);
