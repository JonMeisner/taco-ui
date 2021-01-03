/** @format */

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { mockOrderList } from "../shops/mockOrderList";
import * as actions from "../store/actions/order.actions";

const fetchOrderData = async (shopId) => {
  // TODO: make API request for order data
  return new Promise((resolve, reject) => {
    resolve(mockOrderList);
  });
};

export const useOrderLoader = () => {
  const { shopId } = useParams();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  const fetchOrders = () => {
    fetchOrderData(shopId).then((data) => {
      dispatch(actions.setOrderList(data));
      setIsLoading(false);
    });
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return { isLoading, fetchOrders };
};
