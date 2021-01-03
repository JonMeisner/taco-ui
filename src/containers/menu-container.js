/** @format */

//main react
import React from "react";

//components
import Menu from "../components/menu";

//store
import { connect, useDispatch, useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";
import * as actions from "../store/actions/menu.actions";
import * as selectors from "../store/selectors/menu.selectors";
import Header from "../components/header";

const MenuContainer = ({ submitOrder, closeApplication }) => {
  const dispatch = useDispatch();
  const { activeOrder } = useSelector((state) => state.getMenuData);

  const handlePlus = (item) => {
    dispatch(actions.addOrderItem(item, activeOrder));
  };

  const handleMinus = (item) => {
    dispatch(actions.removeOrderItem(item, activeOrder));
  };

  return (
    <>
      <Header closeApplication={closeApplication} />
      <Menu
        handlePlus={handlePlus}
        handleMinus={handleMinus}
        submitOrder={submitOrder}
      />
    </>
  );
};

const mapStatetoProps = createStructuredSelector({
  getMenuData: selectors.getMenuData,
});

export default connect(mapStatetoProps)(MenuContainer);
