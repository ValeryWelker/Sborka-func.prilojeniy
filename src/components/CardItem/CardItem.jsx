import React from "react";
import styles from "./CardItem.module.scss";
import { Link } from "react-router-dom";

const CardItem = ({ item }) => {
  const { title, price, image, id } = item;
  return (
    <div className={styles.card}>
      <Link to={`/products/${id}`}>
        <div className={styles.top}>
          <img src={image} alt={title} />
          <div className={styles.overlay}>
            <svg
              width="32"
              height="24"
              viewBox="0 0 32 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 12H31M31 12L20.186 1M31 12L20.186 23"
                stroke="white"
              />
            </svg>
          </div>
        </div>
      </Link>

      <div className={styles.footer}>
        <p>{title}</p>
        <span>${price}</span>
      </div>
    </div>
  );
};

export default CardItem;
