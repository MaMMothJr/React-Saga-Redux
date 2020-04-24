import {combineReducers} from "redux";
import {GET_CURRENCY_EXCHANGE, GET_CURRENCY_INFO_FOR_CALC, SET_CURRENCY_WISH, SET_VOLUME} from "./types";


const initialState = {
    rates: [],
    volume: '',
    currency:'btc',
    wish:'uah'
};

const reducer1 = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case GET_CURRENCY_EXCHANGE: {
            return {
                ...state,
                rates: payload
            }
        }
        case SET_VOLUME: {
            return {
                ...state,
                volume: payload
            }
        }
        case GET_CURRENCY_INFO_FOR_CALC: {
            return {
                ...state,
                currency: payload
            }
        }
        case SET_CURRENCY_WISH: {
            return {
                ...state,
                wish: payload
            }
        }
        default: {
            return state;
        }
    }
};

export const reducer = combineReducers({
    price: reducer1
});