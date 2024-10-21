import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchItems } from "../feature/reducers/Items/items.actions";
export const useGetShopItems = () => {
  const dispatch = useDispatch();
  const { shopItems, isLoading, isError } = useSelector((state) => state.items);

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  return {
    shopItems,
    isLoading,
    isError,
  };
};
