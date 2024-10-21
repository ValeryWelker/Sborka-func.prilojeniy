import React from "react";
import styles from "./MainCard.module.scss";
import { IButton } from "../../../ui-kit";

const MainCard = ({
  item,
  itemSize,
  itemColor,
  setItemColor,
  setItemSize,
  onChange,
  onSubmit,
  count,
}) => {
  const { image, price, sizes, colors } = item;

  return (
    <div className={styles.card}>
      <div
        className={styles.left}
        style={{ backgroundImage: `url(${image})` }}
      />

      <div className={styles.right}>
        <div className={styles.info}>
          <h2>${price}</h2>
          <p>Выберите размер</p>
          <ul className={styles.extra}>
            {sizes?.map((size, idx) => (
              <li
                onClick={() => setItemSize(size)}
                className={`${styles.sz} ${
                  itemSize === size && styles.sizeActive
                }`}
                key={idx}
              >
                {size}
              </li>
            ))}
          </ul>
          <p>Выберите цвет</p>
          <ul className={styles.extra}>
            {colors.map((color, idx) => (
              <li
                onClick={() => setItemColor(color)}
                className={`${styles.cl} ${
                  itemColor === color && styles.colorActive
                }`}
                key={idx}
                style={{ backgroundColor: `${color}` }}
              />
            ))}
          </ul>

          <div className={styles.action}>
            <input type="number" value={count} min={1} onChange={onChange} />
            <IButton onClick={onSubmit}>Добавить в корзину</IButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainCard;
