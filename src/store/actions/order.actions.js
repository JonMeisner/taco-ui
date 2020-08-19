export const SET_ORDERS = "SET_ORDERS";
export const GET_ORDERS = "GET_ORDERS";
export const SHOW_HIDE_TOGGLER = "SHOW_HIDE_TOGGLER";
export const DONT_SHOW_HIDE_TOGGLER = "DONT_SHOW_HIDE_TOGGLER";
export const SHOW_REGISTER_TOGGLER = "SHOW_REGISTER_TOGGLER";
export const DONT_SHOW_REGISTER_TOGGLER = "DONT_SHOW_REGISTER_TOGGLER";
export const SHOW_COOK_TOGGLER = "SHOW_COOK_TOGGLER";
export const DONT_SHOW_COOK_TOGGLER = "DONT_SHOW_COOK_TOGGLER";

export const setOrders = (data) => ({
    type:SET_ORDERS,
    payload:data
})

export const getOrders = () => ({
    type:GET_ORDERS,
})

export const showHideToggler = () => ({
    type: SHOW_HIDE_TOGGLER
})

export const dontShowHideToggler = () => ({
    type: DONT_SHOW_HIDE_TOGGLER
})

export const showRegisterToggler = () => ({
    type: SHOW_REGISTER_TOGGLER
})

export const dontShowRegisterToggler = () => ({
    type: DONT_SHOW_REGISTER_TOGGLER
})

export const showCookToggler = () => ({
    type: SHOW_COOK_TOGGLER
})

export const dontShowCookToggler = () => ({
    type: DONT_SHOW_COOK_TOGGLER
})

