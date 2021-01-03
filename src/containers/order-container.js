/** @format */

import React from "react";
import * as apis from "../apis/apis";

// import order
import { connect, useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";
import * as cookSelectors from "../store/selectors/order.selectors";
import OrderViews from "../components/order-views";
import Header from "../components/header";
import { useOrderLoader } from "../hooks/useOrderLoader";

const title = "Current Orders";
const buttonPressText = "Cook";

const OrderContainer = ({ closeApplication }) => {
  useOrderLoader();

  const cookOrder = (orderFinal) => {
    if (orderFinal.type === "shop") {
      apis.cookOrder([orderFinal]);
    } else {
      apis.cookDeliveryOrder([orderFinal]);
    }
  };

  const deleteOrder = (deletedOrder) => {
    apis.deleteOrder([deletedOrder]);
    closeApplication();
  };

  return (
    <>
      <Header closeApplication={closeApplication} />
      <OrderViews
        title={title}
        buttonPressText={buttonPressText}
        data={orderData.orderList}
        cookOrder={cookOrder}
        deleteOrder={deleteOrder}
      />
    </>
  );
};

const mapStatetoProps = createStructuredSelector({
  getOrderData: cookSelectors.getOrderData,
});

export default connect(mapStatetoProps)(OrderContainer);
