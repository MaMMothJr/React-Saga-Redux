import React, {useLayoutEffect, useRef, useCallback} from 'react';
import Block from "../Block/Block";
import Input from "../Input/Input";
import Answer from "../Answer/Answer";
import {connect, useDispatch, useSelector} from "react-redux";
import {getCurrencyInfoForCalc} from "../../redux/selectors";
import {setCurrencyWish} from "../../redux/actions";

function Main( { info } ) {

  const dispatch = useDispatch();

  const currencyInfo = useSelector(getCurrencyInfoForCalc);

  const currencyWish = useCallback((value) => {
    return () => {
      dispatch(setCurrencyWish(value));
    }
  }, [dispatch]);

  return (
    <div className="main">
      <div className="vidjet">
        {info.rates.map((item, index)  => <Block key={index}  item={item} />)}
      </div>
      <p className="chose">Selected coin: {currencyInfo.toUpperCase()}</p>
      <Input />
      <div className="button_section">
        <button onClick={currencyWish('rub')}>RUB</button>
        <button onClick={currencyWish('uah')}>UAH</button>
        <button onClick={currencyWish('usd')}>USD</button>
      </div>
      <Answer />
    </div>
  )
}
const mapStateToProps = state => {
  return {
    info: state.price
  }
};

export default connect (mapStateToProps, null)(Main);
