import { IButton, Typography } from "../../ui-kit";
import styles from "./Profile.module.scss";
import { Link, Outlet } from "react-router-dom";

const Profile = () => {
  return (
    <section className={styles.profile}>
      <div className={styles.container}>
        <div className={styles.header}>
          <Typography variant="subtitle">Мой аккаунт</Typography>
          <div className={styles.action}>
            <Link to="orders">
              <IButton variant="more">История заказов</IButton>
            </Link>
            <Link to="settings">
              <IButton variant="more">Личные данные</IButton>
            </Link>
          </div>
        </div>

        <section className={styles.content}>
          <Outlet />
        </section>
      </div>
    </section>
  );
};

export default Profile;
