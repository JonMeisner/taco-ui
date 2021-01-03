/** @format */

import React, { useEffect } from "react";
import * as apis from "./apis/apis";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import { makeStyles } from "@material-ui/core";

//store
import { useDispatch, connect, useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";
import * as actions from "./store/actions/menu.actions";
import * as cookActions from "./store/actions/order.actions";

import MenuContainer from "./containers/menu-container";
import OrderContainer from "./containers/order-container";
import { tacoShop } from "./shops/tacoShop";
import { pizzaShop } from "./shops/pizzaShop";

const useStyles = makeStyles((theme) => ({
  show: {
    display: "auto",
    position: "relative",
    width: "1180px",
    height: "850px",
    top: "80px",
    margin: "auto",
    borderStyle: "solid",
    backgroundColor: "#b6b6b6",
    overflow: "auto",
  },
  root: {
    display: "auto",
  },
  hide: {
    display: "none",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  selectionButtons: {
    flexGrow: 0,
    justifyContent: "center",
  },
}));

const mapStateToProps = createStructuredSelector({});

const App = (props) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const showMenu = useSelector((state) => state.getMenuData);

  // todo: define order pass
  const submitOrder = (orderPass) => {
    apis.submitOrder(orderPass);
  };

  const closeApplication = () => {
    apis.closeMenu();
    dispatch(actions.clearMenu());
    dispatch(cookActions.ClearOrderData());
  };

  useEffect(() => {
    document.addEventListener("keydown", (e) => onKeyPress(e));
    return (e) => {
      if (e.keyCode === 27) {
        document.removeEventListener("keydown", (e) => onKeyPress(e));
      }
    };
  }, []);

  const onKeyPress = (e) => {
    if (e.keyCode === 27) {
      closeApplication();
    }
  };

  useEffect(() => {
    window.addEventListener("message", (e) => onMessage(e));
    return () => {
      window.removeEventListener("message", (e) => onMessage(e));
    };
  }, []);

  useEffect(() => {
    dispatch(actions.clearMenu());
  }, []);

  const onMessage = (event) => {
    if (
      event.data.openMenu === true &&
      showMenu.showMenuToggler == false &&
      showMenu.customerName === ""
    ) {
      dispatch(
        actions.setMenuData(event.data.openMenu, event.data.customerName)
      );
      // dispatch(actions.showMenuToggler())
      // dispatch(actions.setCustomerName(event.data.customer))
    }
    if (event.data.openMenu === false) {
      dispatch(actions.hideMenuToggler());
    }
  };

  return (
    <div className={showMenu.showMenuToggler ? classes.show : classes.hide}>
      <Router>
        <Switch>
          <Route exact path="/menu/:shopId">
            <MenuContainer
              submitOrder={submitOrder}
              closeApplication={closeApplication}
            />
          </Route>
          <Route exact path="/orders/:shopId">
            <OrderContainer closeApplication={closeApplication} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default connect(mapStateToProps)(App);

// Make components export default w/o the name

// export default (props) {
// 	return (

// 	)
// }

// Simplify Components
// 	-> Make components/functions less specific so that they can be reused elsewhere

// Move some of the mumbo jumbo into the store to simplify the looks
