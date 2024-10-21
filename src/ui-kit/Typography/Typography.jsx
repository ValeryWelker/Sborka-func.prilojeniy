import React, { forwardRef } from "react";
import { motion } from "framer-motion";
import styles from "./Typography.module.scss";

export const Typography = forwardRef(({ children, variant }, ref) => {
  if (variant === "title") {
    return (
      <h1 ref={ref} className={`${styles.typo} ${styles.title}`}>
        {children}
      </h1>
    );
  }
  if (variant === "subtitle") {
    return (
      <h2 ref={ref} className={`${styles.typo} ${styles.subtitle}`}>
        {children}
      </h2>
    );
  }

  return (
    <h3 ref={ref} className={`${styles.typo}`}>
      {children}
    </h3>
  );
});

export const MTypography = motion(Typography);
