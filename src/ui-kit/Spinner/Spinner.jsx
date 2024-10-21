import React from "react";
import styles from "./Spinner.module.scss";
import spinner from "../../assets/Reload-1s-200px.svg";

const Spinner = () => {
  return (
    <div className={styles.spinner}>
      <img src={spinner} alt="loading" />
    </div>
  );
};

export default Spinner;
