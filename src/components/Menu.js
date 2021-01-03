/** @format */

import React from "react";
import {
  Card,
  CardContent,
  Typography,
  makeStyles,
  Button,
} from "@material-ui/core";
import MenuItem from "./menu-item";
import { useSelector } from "react-redux";

const useStyles = makeStyles({
  main: {
    display: "flex",
    textAlign: "center",
    justifyContent: "space-evenly",
    marginTop: "20px",
  },
  longRoot: {
    display: "flex",
    maxWidth: "100%",
    marginLeft: "5px",
    marginRight: "5px",
    marginTop: "20px",
  },
  orderButton: {
    marginLeft: "auto",
    marginRight: 15,
    height: "30px",
    marginTop: "47px",
  },
  typography_title: {
    marginBottom: "20px",
    fontStyle: "italic",
  },
  typography_cost: {
    marginTop: "20px",
    fontStyle: "italic",
  },
});

const Menu = ({ handleMinus, handlePlus, submitOrder }) => {
  const classes = useStyles();

  const {
    shopData,
    activeOrder,
    totalCost,
    customerName,
    showMenuToggler,
  } = useSelector((state) => state.getMenuData);

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  if (!showMenuToggler) {
    return <>fdsfds</>;
  }

  return (
    <div>
      <div className={classes.main}>
        {shopData.menuItems.map((menuItem) => {
          return (
            <MenuItem
              key={menuItem.key}
              handleMinus={handleMinus}
              handlePlus={handlePlus}
              item={menuItem}
              orderQuantity={activeOrder[menuItem.key] || 0}
            />
          );
        })}
      </div>
      <div>
        <Card className={classes.longRoot}>
          <CardContent>
            <Typography variant="h5" className={classes.typography_title}>
              Customer: {customerName}
            </Typography>
            <Typography variant="h4" className={classes.typography_cost}>
              Total: ${numberWithCommas(totalCost)}
            </Typography>
          </CardContent>
          <Button
            className={classes.orderButton}
            variant="outlined"
            onClick={() => submitOrder([])}
          >
            ORDER
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default Menu;
