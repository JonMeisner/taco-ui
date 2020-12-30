/** @format */

import React, { useState, useEffect } from "react";
import * as apis from "../apis/apis";

// import order
import { useDispatch, connect, useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";
import * as cookActions from "../store/actions/order.actions";
import * as cookSelectors from "../store/selectors/order.selectors";
import OrderViews from "../components/order-views";

const OrderContainer = (props) => {
  //const dispatch = useDispatch();
  const data = useSelector((state) => state.getOrderData);
  //console.log(data.orderList);

  const title = "Current Orders";
  const buttonPressText = "Cook";
  const cookOrder = (orderFinal) => {
    if (orderFinal.type === 0) {
      apis.cookTacos([orderFinal]);
    } else {
      console.log([orderFinal]);
      apis.cookDelivery([orderFinal]);
    }
  };

  const deleteOrder = (deletedOrder) => {
    apis.deleteOrder([deletedOrder]);
    props.closeApplication();
  };

  return (
    <OrderViews
      title={title}
      buttonePressText={buttonPressText}
      data={data.orderList}
      cookOrder={cookOrder}
      deleteOrder={deleteOrder}
    />
  );
};

const mapStatetoProps = createStructuredSelector({
  getMenuData: cookSelectors.getOrderData,
});

export default connect(mapStatetoProps)(OrderContainer);
