/** @format */

//main react
import React, { useEffect, useState } from "react";

//components
import Menu from "../components/menu";

//store
import { useDispatch, connect, useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";
import * as actions from "../store/actions/taco.actions";
import * as selectors from "../store/selectors/taco.selectors";
import Header from "../components/header";
import { useParams } from "react-router-dom";
import { Typography } from "@material-ui/core";
import { tacoShop } from "../shops/tacoShop";

const fetchShopData = async (id) => {
  // TODO: add api support for shop data, make api request here
  return new Promise((resolve, reject) => {
    resolve(tacoShop);
  });
};

const MenuContainer = ({ submitOrder, closeApplication }) => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const data = useSelector((state) => state.getMenuData);

  useEffect(() => {
    fetchShopData().then((data) => {
      dispatch(actions.setShopData(data));
    });
  }, []);

  const handlePlus = (item) => {
    dispatch(actions.addOrderItem(item, data.orderList));
  };

  const handleMinus = (item) => {
    dispatch(actions.removeOrderItem(item, data.orderList));
  };

  if (!Object.keys(data.shopData).length) {
    return <Typography>Loading</Typography>;
  }

  return (
    <>
      <Header closeApplication={closeApplication} store={data.shopData} />
      <Menu
        shop={data.shopData}
        orderList={data.orderList}
        totalCost={data.totalCost}
        customerName={data.customerName}
        handlePlus={handlePlus}
        handleMinus={handleMinus}
        orderTacos={submitOrder}
      />
    </>
  );
};

const mapStatetoProps = createStructuredSelector({
  getMenuData: selectors.getMenuData,
});

export default connect(mapStatetoProps)(MenuContainer);
