import React from "react";
import styles from "./Filter.module.scss";
import { filterValues } from "../../../utils/data/mock";

const Filter = ({ getFilter, filterVal }) => {
  return (
    <ul className={styles.filters}>
      {filterValues.map((filter, idx) => (
        <li
          key={idx + 1}
          className={`${styles.filter} ${
            filterVal === filter.identifier && styles.active
          }`}
          onClick={() => getFilter(filter.identifier)}
        >
          {filter.name}
        </li>
      ))}
    </ul>
  );
};

export default Filter;
