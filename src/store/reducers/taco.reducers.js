import * as types from '../actions/taco.actions';

const initialState = {
    showMenuToggler: false,
    numSpicy: 0,
    numCarne: 0,
    numGreen: 0,
    numCorona: 0,
    customerName: '',
    totalCost: 0,
};

const tacoReducer = (state = initialState, action) => {
    switch (action.type) {
        // case types.SHOW_MENU:
        //     return {
        //         ...state,
        //         showMenuToggler: true,
        //     };
        case types.HIDE_MENU:
            return {
                ...state,
                showMenuToggler: false,
            };
        // case types.SET_CUSTOMER_NAME:
        //     return {
        //         ...state,
        //         customerName: action.payload,
        //     };
        case types.SET_NUM_SPICY:
            return {
                ...state,
                numSpicy: action.payload.one,
                totalCost: action.payload.two,
            };
        case types.SET_NUM_CARNE:
            return {
                ...state,
                numCarne: action.payload.one,
                totalCost: action.payload.two,
            }
        case types.SET_NUM_GREEN:
            return {
                ...state,
                numGreen: action.payload.one,
                totalCost: action.payload.two,
            }
        case types.SET_NUM_CORONA:
            return {
                ...state,
                numCorona: action.payload.one,
                totalCost: action.payload.two,
            }
        // case types.SET_TOTAL_COST:
        //     return {
        //         ...state,
        //         totalCost: action.payload,
        //     }
        case types.SET_MENU_DATA:
            return {
                ...state,
                showMenuToggler: action.payload.one,
                customerName: action.payload.two,
            }
        case types.CLEAR_ALL:
            return {
                ...state,
                showMenuToggler: false,
                numSpicy: 0,
                numGreen: 0,
                numCorona: 0,
                customerName: '',
                totalCost: 0,
            }
        default:
            return state;
    }
};

export default tacoReducer;