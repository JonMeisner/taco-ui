import React from "react";
import ReactDOM from "react-dom";
import App from './App';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import combineReducers from './store/index';

const store = createStore(combineReducers, applyMiddleware(thunk));
// store.subscribe(() => {
//   console.log('Update Menu Data: ', store.getState().getMenuData);
//   console.log('Update Order Data: ', store.getState().getOrderData);
// })
ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById("root")
);