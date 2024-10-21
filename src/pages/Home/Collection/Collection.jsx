import { useNavigate } from "react-router-dom";
import { CardItem } from "../../../components";
import { IButton, Typography, ShopItemSkeleton } from "../../../ui-kit";

import styles from "./Collection.module.scss";

const Collection = ({ newCollectionItems, isLoading, isError }) => {
  const navigate = useNavigate();

  const renderData = () => {
    if (isLoading) {
      return (
        <>
          {[...new Array(3)].map((_, idx) => (
            <ShopItemSkeleton key={idx} />
          ))}
        </>
      );
    } else if (newCollectionItems.length > 0) {
      return (
        <>
          {newCollectionItems?.map((item) => (
            <CardItem key={item?.id} item={item} />
          ))}
        </>
      );
    } else {
      return <h1>Тут пусто</h1>;
    }
  };

  return (
    <section className={styles.collection}>
      <div className={styles.container}>
        <Typography variant="subtitle">Новая колекция</Typography>
        <div className={styles.list}>{renderData()}</div>
        <IButton variant="primary" onClick={() => navigate("/shop")}>
          Открыть магазин
        </IButton>
      </div>
    </section>
  );
};

export default Collection;
