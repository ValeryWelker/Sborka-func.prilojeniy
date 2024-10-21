import React, { useState, useEffect } from "react";
import { SettingsBlock } from "../../../components";

import { UserAuth } from "../../../context/AuthContext";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../../firebase";

import { convertTimestamp } from "../../../utils/date-helpers";
import styles from "./ProfileOrders.module.scss";

const ProfileOrders = () => {
  const { user } = UserAuth();
  const [userOrders, setUserOrders] = useState([]);

  useEffect(() => {
    onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      setUserOrders(doc.data()?.orders);
    });
  }, [user?.email]);

  if (!userOrders?.length) {
    return <h1>Вы еще ничего не заказывали</h1>;
  }

  return (
    <>
      {userOrders?.map((order) => (
        <SettingsBlock
          title={` Заказ от ${convertTimestamp(order?.createdAt)}`}
          key={order.id}
        >
          <div className={styles.info}>
            <h4>Детали заказа:</h4>
            <div className={styles.body}>
              <p>Количество вещей: {order?.clothes?.length}</p>
              <p>Итоговая цена: {order?.totalAmount}$</p>
            </div>
          </div>
        </SettingsBlock>
      ))}
    </>
  );
};

export default ProfileOrders;
