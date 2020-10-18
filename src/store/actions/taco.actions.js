// export const SHOW_MENU = 'SHOW_MENU';
export const HIDE_MENU = 'HIDE_MENU';
// export const SET_CUSTOMER_NAME = 'SET_CUSTOMER_NAME';

export const SET_NUM_SPICY = 'SET_NUM_SPICY';
export const SET_NUM_CARNE = "SET_NUM_CARNE";
export const SET_NUM_GREEN = 'SET_NUM_GREEN';
export const SET_NUM_CORONA = 'SET_NUM_CORONA';
// export const SET_TOTAL_COST = 'SET_TOTAL_COST';

export const SET_MENU_DATA = 'SET_MENU_DATA';

export const CLEAR_ALL = 'CLEAR_ALL';

// export const showMenuToggler = () => ({
//     type:SHOW_MENU,
// })

export const hideMenuToggler = () => ({ // Hide the UI
    type:HIDE_MENU,
})

// export const setCustomerName = (name) => ({ 
//     type:SET_CUSTOMER_NAME,
//     payload: name,
// })

export const setMenuData = (toggle,name) =>  ({ // Show UI & assign customer name
    type:SET_MENU_DATA,
    payload: {one: toggle, two: name},
})

export const setSpicy = (numItem,cost) => ({ // Update numSpicy & totalCost
    type:SET_NUM_SPICY,
    payload: {one: numItem, two: cost},
})

export const setCarne = (numItem,cost) => ({ // Update numCarne & totalCost
    type:SET_NUM_CARNE,
    payload: {one: numItem, two: cost},
})

export const setGreen = (numItem,cost) => ({ // Update numGreen & totalCost
    type:SET_NUM_GREEN,
    payload: {one: numItem,two: cost},
})

export const setCorona = (numItem,cost) => ({ // Update numCorona & totalCost
    type:SET_NUM_CORONA,
    payload: {one: numItem, two: cost},
})

// export const setTotalCost = (value) => ({
//     type:SET_TOTAL_COST,
//     payload: value,
// })

export const clearMenu = () => ({ // Clear all Menu/Order Data (On Shut Down)
    type:CLEAR_ALL,
})