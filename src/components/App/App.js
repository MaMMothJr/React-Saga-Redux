import React, {useEffect} from 'react';
import Main from "../Main/Main";
import {useDispatch} from 'react-redux';
import {getCurrencyExchange} from "../../redux/actions";


function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    fetch('https://api.kuna.io/v3/exchange-rates')
      .then(response => response.json())
      .then(data => data.filter(key =>
        key.currency === "btc"||
        key.currency === "eth"||
        key.currency ==="xrp" ))
      .then(text =>  dispatch(getCurrencyExchange(text)))
    },[dispatch]);

  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;
