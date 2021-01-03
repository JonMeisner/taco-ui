/** @format */

//main react
import React from "react";

//components
import Menu from "../components/menu";

//store
import { useDispatch, connect, useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";
import * as actions from "../store/actions/menu.actions";
import * as selectors from "../store/selectors/menu.selectors";
import Header from "../components/header";
import { useParams } from "react-router-dom";
import { useShopLoader } from "../hooks/useShopLoader";

const MenuContainer = ({ submitOrder, closeApplication }) => {
  const { shopId } = useParams();

  const dispatch = useDispatch();

  useShopLoader(shopId);
  const { shopData, orderList } = useSelector((state) => state.getMenuData);

  const handlePlus = (item) => {
    dispatch(actions.addOrderItem(item, orderList));
  };

  const handleMinus = (item) => {
    dispatch(actions.removeOrderItem(item, orderList));
  };

  return (
    <>
      <Header closeApplication={closeApplication} store={shopData} />
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
