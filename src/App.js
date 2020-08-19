import React from "react";
import { Switch, Route, Redirect } from 'react-router-dom';

import MenuContainer from "./components/MenuContainer";
import OrderContainer from "./components/OrderContainer";


//store
import { connect, useDispatch, useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";
import * as actions from "./store/actions/order.actions";
import * as selectors from "./store/selectors/order.selectors";

const App = () => {
    const dispatch = useDispatch();

    window.addEventListener("message", (event) => {
        if (event.data.openTaco === true) {
            // setShowHideToggler(true);
            dispatch(actions.showHideToggler());

            if (event.data.openTacoCook === true) {
                dispatch(actions.showCookToggler())
                // setShowCookToggler(true);
                dispatch(actions.setOrders(event.data.orderList))
                // setOrders(event.data.orderList);
            }
            if (event.data.openRegister === true) {
                setShowRegisterToggler(true);
            }
        }
        if (event.data.openTaco === false) {
            setShowHideToggler(false);
            if (event.data.openTacoCook === false) {
                setShowCookToggler(false);
            }
            if (event.data.openRegister === false) {
                setShowRegisterToggler(false);
            }
        }
    });

    window.addEventListener("keydown", (event) => {
        // Closes UI if ESX key is used
        if (event.keyCode === 27) {
            closeApplication();
        }
    });

    const closeApplication = () => {
        // Close UI Function
        // setShowHideToggler(false);
        // setShowCookToggler(false);
        // setShowRegisterToggler(false);
        // setOrders([]);
        apis.closeTacos();
    };




    return (
        <div>
            <Header/>
            <Switch>
                <Route exact="/" component={MenuContainer}></Route>
                <Route exact="/orders" component={OrderContainer}></Route>
            </Switch>
        </div>
    );
};



const mapStateToProps = createStructuredSelector({
    flattenedInventory: selectors.getFlattenedInventory,
});

export default connect(mapStateToProps)(App);
