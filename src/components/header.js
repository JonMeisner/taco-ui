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

const useStyles = makeStyles((theme) => ({
  buttonGroup: {
    marginLeft: "auto",
  },
}));

const Header = ({ closeApplication, job }) => {
  const classes = useStyles();
  const { shopData, workerJob } = useSelector((state) => state.getMenuData);
  console.log(shopData.job);
  console.log(workerJob);

  return (
    <AppBar position="sticky" color="default">
      <Toolbar style={{ backgroundColor: shopData.primaryColor }}>
        <img
          src={shopData.logo}
          alt={shopData.logoAlt}
          height="50"
          width="50"
        />
        <ButtonGroup className={classes.buttonGroup}>
          <Button component={Link} to={"/"} variant="outlined">
            Menu
          </Button>
          <Button component={Link} to={"/orders"} variant="outlined"  disabled={workerJob === shopData.job ? false : true}>
            Orders
          </Button>
        </ButtonGroup>
        <IconButton style={{ marginLeft: "10px" }} onClick={closeApplication} component={Link} to={"/"}>
          <ExitToApp />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
