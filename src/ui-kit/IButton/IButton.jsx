import React from "react";
import styles from "./IButton.module.scss";

const IButton = ({ className, children, variant, ...props }) => {
  return (
    <button
      className={`${styles.button} ${variant === "primary" && styles.primary} ${
        variant === "more" && styles.more
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default IButton;
