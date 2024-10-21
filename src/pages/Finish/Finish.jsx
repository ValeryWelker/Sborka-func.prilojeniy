import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Typography } from "../../ui-kit";

import styles from "./Finish.module.scss";

const Finish = () => {
  const [count, setCount] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
      if (count === 1) {
        navigate("/");
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [count]);

  return (
    <section className={styles.finish}>
      <Typography variant="subtitle">Ваш заказ успешно добавлен!</Typography>
      <p>Вы будете перенаправлены на главную страницу через {count} секунд</p>
    </section>
  );
};

export default Finish;
