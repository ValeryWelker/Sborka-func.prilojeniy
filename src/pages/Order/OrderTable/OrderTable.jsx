import { nanoid } from "@reduxjs/toolkit";
import React from "react";
import styles from "./OrderTable.module.scss";

const OrderTable = ({ rows, amount, ticket }) => {
  return (
    <table className={styles.order}>
      <thead>
        <tr>
          <td>Товар</td>
          <td>Всего</td>
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={nanoid()}>
            <td>
              <div className={styles.product}>
                <div className={styles.left}>
                  <p>{row.title}</p>
                  <div className={styles.extras}>
                    <span
                      className={styles.color}
                      style={{ backgroundColor: `${row.color}` }}
                    />
                    <span className={styles.size}>{row.size}</span>
                  </div>
                </div>
              </div>
            </td>
            <td>{row.count}</td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td>Скидка</td>
          <td>{ticket ? `${ticket.count} %` : "Не применена"}</td>
        </tr>
        <tr>
          <td>Итого</td>
          <td>${amount}</td>
        </tr>
      </tfoot>
    </table>
  );
};

export default OrderTable;
