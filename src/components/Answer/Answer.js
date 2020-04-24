import React from "react";
import {useSelector} from "react-redux";
import {allFromApi, getCurrencyInfoForCalc, getCurrencyWish, inputSelector} from "../../redux/selectors";

function Answer() {
  const allInfoFromApi = useSelector(allFromApi);
  const selectedCurrency = useSelector(getCurrencyInfoForCalc);
  const selectedWish = useSelector(getCurrencyWish);
  const currentVolume = useSelector(inputSelector);

  const currentCurrency = allInfoFromApi.find(info => info.currency === selectedCurrency);
  if (!currentCurrency) {
    return null
  }
  const result = currentCurrency[selectedWish] * currentVolume;

  return (
    <p className="answer">{currentVolume} {selectedCurrency.toUpperCase()} will be {result} in {selectedWish.toUpperCase()}</p>
  )
}

export default Answer;