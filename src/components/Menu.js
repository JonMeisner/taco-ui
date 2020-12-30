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

const Menu = ({
  orderList,
  handleMinus,
  handlePlus,
  orderTacos,
  totalCost,
  customerName,
  store
}) => {
  const classes = useStyles();
  const order = [];

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <div>
      {store.name}
      <div className={classes.main}>
        {store.menuItems.map((menuItem) => {
          return (
            <MenuItem
              handleMinus={handleMinus}
              handlePlus={handlePlus}
              item={menuItem}
              orderQuantity={orderList[menuItem.key] || 0 }
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
            onClick={() => orderTacos(order)}
          >
            ORDER
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default Menu;
