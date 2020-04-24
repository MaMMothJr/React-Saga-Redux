import {GET_CURRENCY_EXCHANGE, GET_CURRENCY_INFO_FOR_CALC, SET_CURRENCY_WISH, SET_VOLUME} from "./types";


export const getCurrencyExchange = (data) => (
  {
    type: GET_CURRENCY_EXCHANGE,
    payload: data
});

export const setVolume = (value) => (
  {
    type: SET_VOLUME,
    payload: value
});

export const setCurrencyInfoCalcAction = (data) => (
  {
    type: GET_CURRENCY_INFO_FOR_CALC,
    payload: data
});

export const setCurrencyWish = (wish) => (
  {
    type: SET_CURRENCY_WISH,
    payload: wish
});