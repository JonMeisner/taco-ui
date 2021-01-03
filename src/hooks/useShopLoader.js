/** @format */

import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { pizzaShop } from "../shops/pizzaShop";
import { tacoShop } from "../shops/tacoShop";
import * as actions from "../store/actions/menu.actions";

// const fetchShopData = async (id) => {
//   // TODO: add api support for shop data, make api request here
//   return new Promise((resolve, reject) => {
//     resolve(tacoShop);
//   });
// };

// eventually all shop data should be moved to the backend
const currentShops = [tacoShop, pizzaShop];

const getShopData = (shopId) => {
  return currentShops.find((s) => {
    if (s.id === shopId) {
      return s;
    }
  });
};

export const useShopLoader = () => {
  const { shopId } = useParams();
  console.log(shopId);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  // const memoFetch = useCallback(() => {
  //   return fetchShopData(id).then((data) => {
  //     dispatch(actions.setShopData(data));
  //     setIsLoading(false);
  //   });
  // }, []);

  const memoGet = useCallback(() => {
    setIsLoading(false);

    dispatch(actions.setShopData(getShopData(shopId)));
  });

  useEffect(() => {
    memoGet();
  }, []);

  return { isLoading };
};
