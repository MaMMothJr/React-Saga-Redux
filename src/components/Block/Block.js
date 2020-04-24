import React, {useCallback} from "react";
import {useDispatch} from "react-redux";
import {setCurrencyInfoCalcAction} from "../../redux/actions";


function Block ( { item }) {
  const dispatch = useDispatch();

  const getCurrencyInfo = useCallback((ev) => {
    const currentCurrency = item.currency;
    dispatch(setCurrencyInfoCalcAction(currentCurrency));
  }, [dispatch]);

  return (
    <div onClick={getCurrencyInfo}>
      <ul>
        <li>
           <img src={require(`../../image/${item.currency.toUpperCase()}.png`)} alt='no logo'/>
           <span>
            <p>USD: {item.usd}</p>
            <p>UAH: {item.uah}</p>
            <p>RUB: {item.rub}</p>
          </span>
        </li>
      </ul>
    </div>
  )
}

export default Block;