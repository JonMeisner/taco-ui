export const SHOW_MENU = 'SHOW_MENU';
export const HIDE_MENU = 'HIDE_MENU';
export const SET_CUSTOMER_NAME = 'SET_CUSTOMER_NAME';

export const SET_NUM_SPICY = 'SET_NUM_SPICY';
export const SET_NUM_CARNE = "SET_NUM_CARNE";
export const SET_NUM_GREEN = 'SET_NUM_GREEN';
export const SET_NUM_CORONA = 'SET_NUM_CORONA';
export const SET_TOTAL_COST = 'SET_TOTAL_COST';

export const SET_MENU_DATA = 'SET_MENU_DATA';

export const CLEAR_ALL = 'CLEAR_ALL';

export const showMenuToggler = () => ({
    type:SHOW_MENU,
})

export const hideMenuToggler = () => ({
    type:HIDE_MENU,
})

export const setCustomerName = (name) => ({
    type:SET_CUSTOMER_NAME,
    payload: name,
})

export const setMenuData = (toggle,name) =>  ({
    type:SET_MENU_DATA,
    payload: {one: toggle, two: name},
})

export const setSpicy = (value) => ({
    type:SET_NUM_SPICY,
    payload: value,
})

export const setCarne = (value) => ({
    type:SET_NUM_CARNE,
    paylod: value,
})

export const setGreen = (value) => ({
    type:SET_NUM_GREEN,
    payload: value,
})

export const setCorona = (value) => ({
    type:SET_NUM_CORONA,
    payload: value,
})

export const setTotalCost = (value) => ({
    type:SET_TOTAL_COST,
    payload: value,
})

export const clearMenu = () => ({
    type:CLEAR_ALL,
})

