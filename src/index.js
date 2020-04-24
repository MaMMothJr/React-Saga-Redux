import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from "redux";
import logger from 'redux-logger';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import './index.css';
import App from './components/App/App';
import {  reducer } from "./redux/reducer";


const store = createStore(
    reducer, composeWithDevTools(
    applyMiddleware(logger)
    ));

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>,
   document.getElementById('root')
);

