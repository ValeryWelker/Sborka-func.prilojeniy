import React from "react";
import styles from "./Home.module.scss";
import New from "./New";
import Collection from "./Collection";
import Important from "./Important";
import Team from "./Team";
import { useGetShopItems } from "../../hooks/useGetShopItems";

const Home = () => {
  const { shopItems, isLoading, isError } = useGetShopItems();

  const newCollectionItems = shopItems.slice(0, 3);

  return (
    <main className={styles.wrapper}>
      <New />
      <Collection
        newCollectionItems={newCollectionItems}
        isLoading={isLoading}
        isError={isError}
      />
      <Important />
      <Team />
    </main>
  );
};

export default Home;
