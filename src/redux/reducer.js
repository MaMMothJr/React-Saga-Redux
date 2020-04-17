import {combineReducers} from "redux";
import {GET_CURRENCY_EXCHANGE} from "./types";


const initialState = {
    rates: [],
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
        default: {
            return state;
        }
    }
};

export const reducers = combineReducers({
    price: reducer1()
});