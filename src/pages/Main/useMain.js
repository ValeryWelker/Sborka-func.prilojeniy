import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { fetchItem } from "../../feature/reducers/Items/items.actions";
import { useGetShopItems } from "../../hooks/useGetShopItems";

export const useMain = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { item, isLoading, isError } = useSelector((state) => state.items);
  const { shopItems } = useGetShopItems();

  console.log(shopItems);

  const similarItems = shopItems
    .filter(
      (shopItem) =>
        shopItem.category === item.category && shopItem.id !== item.id
    )
    .slice(0, 2);

  useEffect(() => {
    if (!id) return;
    dispatch(fetchItem(id));
  }, [dispatch, id]);

  return {
    item,
    isLoading,
    isError,
    similarItems,
  };
};
