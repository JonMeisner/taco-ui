/** @format */

import { Restaurant } from "@material-ui/icons";
import axios from "axios";

// const closeTacosUrl = "http://pma-tacos/closeTacos"; // closes window
// const orderTacosUrl = "http://pma-tacos/orderTacos"; // submit order
// const cookTacosUrl = "http://pma-tacos/cookTacos"; // create items
// const cookDeliveryUrl = "http://pma-tacos/cookDelivery"; // ???????????
// const deleteOrderUrl = "http://pma-tacos/deleteOrder"; // delete order

// export const closeTacos = () => {
//   return axios.post(closeTacosUrl, {});
// };

// export const orderTacos = (orderPass) => {
//   return axios.post(orderTacosUrl, { orderPass });
// };

// export const cookTacos = (cookOrder) => {
//   // how does this request know who to give the tacos to?
//   return axios.post(cookTacosUrl, { cookOrder });
// };

// export const cookDelivery = (deliveryOrder) => {
//   return axios.post(cookDeliveryUrl, { deliveryOrder });
// };

// export const deleteOrder = (deletedOrder) => {
//   return axios.post(deleteOrderUrl, { deletedOrder });
// };

const closeMenuUrl = "http://pma-pizza/closeMenu"; // previously closeTacos
const submitOrderUrl = "http://pma-pizza/submitOrder"; // previously orderTacos
const deleteOrderUrl = "http://pma-pizza/deleteOrder"; // no change
const cookOrderUrl = "http://pma-pizza/cookOrder"; // previously cookTacos
const cookDeliveryOrderUrl = "http://pma-pizza/cookDeliveryOrder"; // previously cookDelivery

export const closeMenu = () => {
  return axios.post(closeMenuUrl, {});
};

export const submitOrder = (orderPass) => {
  return axios.post(submitOrderUrl, { orderPass });
};

export const cookOrder = (cookOrder) => {
  return axios.post(cookOrderUrl, cookOrder);
};

export const cookDeliveryOrder = (deliveryOrder) => {
  return axios.post(cookDeliveryOrderUrl, { deliveryOrder });
};

export const deleteOrder = (deletedOrder) => {
  return axios.post(deleteOrderUrl, { deletedOrder });
};
