/** @format */

import React from "react";
import * as apis from "../apis/apis";

// import order
import { connect, useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";
import * as cookSelectors from "../store/selectors/order.selectors";
import OrderViews from "../components/order-views";
import Header from "../components/header";

const title = "Current Orders";
const buttonPressText = "Cook";

const OrderContainer = ({ closeApplication }) => {
  const orderData = useSelector((state) => state.getOrderData);
  const { menuItems } = useSelector((state) => state.getMenuData);

  const cookOrder = (orderFinal) => {
    if (orderFinal.type === 0) {
      apis.cookOrder([orderFinal]);
      closeApplication();
    } else {
      apis.cookDeliveryOrder([orderFinal]);
    }
  };

  const deleteOrder = (deletedOrder) => {
    apis.deleteOrder([deletedOrder]);
    // closeApplication();
  };

  return (
    <>
      <Header closeApplication={closeApplication} />
      <OrderViews
        title={title}
        buttonPressText={buttonPressText}
        orderList={orderData.orderList}
        menuItems={menuItems}
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
