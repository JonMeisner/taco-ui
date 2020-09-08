import {createSelector} from 'reselect';

const getOrders = (state) => state.getOrderData;

export const getOrderData = createSelector (
    [getOrders],
    (data) => data.orderList,
)