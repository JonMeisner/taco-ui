import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

// const store = createStore(combineReducers, applyMiddleware(thunk));
// store.subscribe(() => {
//   console.log('Update inventory: ', store.getState().flattenedInventory);
// })

ReactDOM.render(
    // <Provider store={store}>
        <App />,
    // </Provider>,
    document.getElementById("root")
);
