import React, { useState } from "react";
import { CardItem } from "../../components";
import { Typography, MainSkeleton } from "../../ui-kit";
import { useMain } from "./useMain";
import MainCard from "./MainCard";

import { useDispatch } from "react-redux";
import { addToCart } from "../../feature/reducers/Cart/cart.slice";
import { toast } from "react-toastify";
import styles from "./Main.module.scss";

const Main = () => {
  const dispatch = useDispatch();
  const { item, similarItems, isLoading } = useMain();
  const { title, image, price, id } = item;
  const [itemSize, setItemSize] = useState("");
  const [itemColor, setItemColor] = useState("");
  const [count, setCount] = useState(1);

  const handleChange = (e) => {
    setCount(e.target.value);
  };

  const handeSubmit = () => {
    if (!itemSize || !itemColor) {
      toast.warn("Выберите цвет и размер!", {
        position: "top-right",
      });
    } else {
      const data = {
        id,
        image,
        title,
        price,
        count,
        color: itemColor,
        size: itemSize,
      };
      dispatch(addToCart(data));
      console.log(data);
    }
  };

  const renderData = () => {
    if (isLoading) {
      return <MainSkeleton />;
    } else if (Object.keys(item).length > 0) {
      return (
        <>
          <section className={styles.shopItem}>
            <Typography variant="title">{item?.title}</Typography>
            <MainCard
              item={item}
              itemSize={itemSize}
              setItemSize={setItemSize}
              itemColor={itemColor}
              setItemColor={setItemColor}
              count={count}
              onChange={handleChange}
              onSubmit={handeSubmit}
            />
          </section>

          <section className={styles.similar}>
            <Typography variant="subtitle">Связанные товары</Typography>
            <div className={styles.list}>
              {similarItems?.map((similarItem) => {
                return <CardItem key={similarItem?.id} item={similarItem} />;
              })}
            </div>
          </section>
        </>
      );
    } else {
      return <h1>Тут пока ничего нет</h1>;
    }
  };

  return (
    <div className={styles.main}>
      <div className={styles.container}>{renderData()}</div>
    </div>
  );
};

export default Main;
