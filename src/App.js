/** @format */

import React, { useEffect, useState } from "react";
import * as apis from "./apis/apis";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import { makeStyles } from "@material-ui/core";

//store
import { useDispatch, connect, useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";
import * as menuActions from "./store/actions/menu.actions";
import * as orderActions from "./store/actions/order.actions";
import Header from "./components/Header";

import MenuContainer from "./containers/MenuContainer";
import OrderContainer from "./containers/OrderContainer";
import { useKeyListeners } from "./hooks/useKeyListeners";

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

const App = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const showMenu = useSelector((state) => state.getMenuData);
  const [initialRoute, setInitialRoute] = useState("/");
  const {
    shopData: { secondaryColor },
  } = useSelector((state) => state.getMenuData);

 

  const closeApplication = () => {
    apis.closeMenu();
    dispatch(menuActions.hideMenuToggler());
    dispatch(menuActions.clearMenu());
    dispatch(orderActions.clearOrderData());
  };

  useKeyListeners(closeApplication);

  useEffect(() => {
    window.addEventListener("message", (e) => onMessage(e));
    return () => {
      window.removeEventListener("message", (e) => onMessage(e));
    };
  }, []);

  const onMessage = (event) => {
    if (event.data.openMenu === true) {
      // Initial route state variable is consumed by the header component and immediately routes to value given
      setInitialRoute(event.data.data.initialRoute);
      dispatch(menuActions.initializeMenu(event.data.data));
      dispatch(orderActions.setOrderList(event.data.data.orderList));
    } else {
      dispatch(menuActions.hideMenuToggler());
    }
  };

  return (
    <div
      className={showMenu.showMenuToggler ? classes.show : classes.hide}
      style={{ backgroundColor: secondaryColor }}
    >
      <Router>
        <Header
          closeApplication={closeApplication}
          initialRoute={initialRoute}
        />
        <Switch>
          <Route exact path="/menu">
            <MenuContainer closeApplication={closeApplication} />
          </Route>
          <Route exact path="/orders">
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
