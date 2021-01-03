/** @format */

import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  ButtonGroup,
  Button,
  makeStyles,
} from "@material-ui/core";
import { Link, Router } from "react-router-dom";
import ExitToApp from "@material-ui/icons/ExitToApp";
import { useSelector } from "react-redux";
import { useShopLoader } from "../hooks/useShopLoader";

const useStyles = makeStyles((theme) => ({
  buttonGroup: {
    marginLeft: "auto",
  },
}));

const Header = ({ closeApplication }) => {
  const classes = useStyles();

  useShopLoader();
  const { shopData } = useSelector((state) => state.getMenuData);

  return (
    <AppBar position="sticky" color="default">
      <Toolbar style={{ backgroundColor: shopData.primaryColor }}>
        <img
          src={shopData.logo}
          alt={shopData.logoAlt}
          height="50"
          width="200"
        />
        <ButtonGroup className={classes.buttonGroup}>
          <Button
            component={Link}
            to={`/menu/${shopData.id}`}
            variant="outlined"
          >
            Menu
          </Button>
          <Button
            component={Link}
            to={`/orders/${shopData.id}`}
            variant="outlined"
          >
            Orders
          </Button>
        </ButtonGroup>
        <IconButton style={{ marginLeft: "10px" }} onClick={closeApplication}>
          <ExitToApp />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
