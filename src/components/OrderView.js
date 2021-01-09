/** @format */

import React, { useState } from "react";
import {
  makeStyles,
  Button,
  Typography,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@material-ui/core";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  main: {
    // overflow: 'auto',
  },
  paperPlayer: {
    margin: "5px",
    display: "flex",
    justifyContent: "space-between",
  },
  paperDelivery: {
    margin: "5px",
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#6BC277",
  },
  paperBottom: {
    margin: "5px",
    display: "flex",
    justifyContent: "space-between",
  },
  title: {},
  labels: {
    margin: "8px",
    marginRight: 21,
  },
  customerName: {
    margin: "8px",
    minWidth: "300px",
    maxWidth: "300px",
  },
}));

const QuantityDetails = ({ orderItems, menuItems }) => {
  const classes = useStyles();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flex: 1,
        justifyContent: "flex-end",
        marginRight: 21,
      }}
    >
      {menuItems.map((mItem) => {
        return (
          <Typography className={classes.labels} variant="h6">
            {mItem.shortName}: {orderItems[mItem.key] || 0}
          </Typography>
        );
      })}
    </div>
  );
};

const OrderViews = ({ orderList, menuItems, deleteOrder, cookOrder }) => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [currentOrder, setCurrentOrder] = useState();

  const handleClickOpen = (order) => {
    setOpen(true);
    setCurrentOrder(order);
  };

  const handleClose = (ready) => {
    if (ready === true) {
      setOpen(false);
      deleteOrder(currentOrder);
    } else {
      setOpen(false);
    }
  };

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <div>
      <div className={classes.main}>
        {orderList.length === 0 ? (
          <Paper className={classes.paperPlayer}>
            <Typography className={classes.labels} variant="h6">
              No Open Orders
            </Typography>
          </Paper>
        ) : null}

        {orderList.map((Label, orderIndex) => (
          <Paper
            className={
              orderList[orderIndex].type === 0
                ? classes.paperPlayer
                : classes.paperDelivery
            }
            key={orderIndex}
            elevation={3}
          >
            <Typography className={classes.customerName} variant="h6">
              {orderList[orderIndex].customer}
            </Typography>
            <QuantityDetails
              orderItems={orderList[orderIndex].items}
              menuItems={menuItems}
            />
            <Typography className={classes.labels} variant="h6">
              Cost: ${numberWithCommas(orderList[orderIndex].cost)}
            </Typography>
            <Button
              variant="outlined"
              className={classes.labels}
              onClick={() => cookOrder(orderList[orderIndex])}
            >
              Cook
            </Button>
            <Button
              variant="outlined"
              className={classes.labels}
              color="secondary"
              onClick={() => handleClickOpen(orderList[orderIndex])}
            >
              Delete
            </Button>
          </Paper>
        ))}
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Delete Order Confirmation</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Are you sure you want to delete this order?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => handleClose(true)}
            >
              Yes
            </Button>
            <Button variant="outlined" onClick={() => handleClose(false)}>
              No
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
};

export default OrderViews;
