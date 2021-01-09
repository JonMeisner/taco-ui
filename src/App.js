/** @format */

import React, { useEffect, useState } from "react";
import * as apis from "./apis/apis";
import {
  HashRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";

import { makeStyles } from "@material-ui/core";

//store
import { useDispatch, connect, useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";
import * as actions from "./store/actions/menu.actions";
import * as cookActions from "./store/actions/order.actions";
import Header from "./components/header";

import MenuContainer from "./containers/menu-container";
import OrderContainer from "./containers/order-container";

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

  const closeApplication = () => {
    apis.closeMenu();
    dispatch(actions.hideMenuToggler());
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
    if (event.data.openMenu === true) {
      setInitialRoute(event.data.initialRoute);
      dispatch(actions.initializeMenu(event.data));
      dispatch(cookActions.setOrderList(event.data.orderList));
    } else {
      closeApplication();
    }
  };

  return (
    <div className={showMenu.showMenuToggler ? classes.show : classes.hide}>
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
