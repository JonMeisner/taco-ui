/** @format */

import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { tacoShop } from "../shops/tacoShop";
import * as actions from "../store/actions/taco.actions";

const fetchShopData = async (id) => {
  // TODO: add api support for shop data, make api request here
  return new Promise((resolve, reject) => {
    resolve(tacoShop);
  });
};

export const useShopLoader = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  const memoFetch = useCallback(() => {
    return fetchShopData(id).then((data) => {
      dispatch(actions.setShopData(data));
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    memoFetch();
  }, []);

  return { isLoading };
};
