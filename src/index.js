import React from "react";
import ReactDOM from "react-dom";
import App from './App';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from 'redux-logger';
import combineReducers from './store/index';

const middle = [thunk, logger]
const store = createStore(combineReducers, applyMiddleware(...middle));

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById("root")
);