import { createSelector } from "reselect";

const getData = (state) => state.getMenuData;

export const getMenuData = createSelector(
    [getData],
    (data) => data.customerName,
);
