import React, {useLayoutEffect, useRef, useCallback} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setVolume} from "../../redux/actions";
import {inputSelector} from "../../redux/selectors";


function Input() {

  const text = useRef(null);
  const dispatch = useDispatch();
  const value = useSelector(inputSelector);

  const valueOnChange = useCallback((ev) => {
    const valueInput = ev.target.value;

    if (isFinite(valueInput)) {
      dispatch(setVolume(valueInput));
    } else {
      alert('Используйте пожалуйста числа');
    }
  }, [dispatch]);

  useLayoutEffect(() => {
    if (text.current) {
      text.current.focus();
    }
  }, []);

  return (
  <div className="form">
    <p>Volume:</p>
      <input
        ref={text}
        value={value}
        onChange={valueOnChange}
        placeholder="numbers"
      />
  </div>
  )
}
export default Input;