import { SettingsBlock } from "./../../../components";
import { UserAuth } from "../../../context/AuthContext";
import styles from "./Settings.module.scss";

const Settings = () => {
  const { user } = UserAuth();

  return (
    <>
      <SettingsBlock title="Личные данные">
        <p className={styles.setting}>{user?.email}</p>
      </SettingsBlock>
      <SettingsBlock title="Что-то еще" />
      <SettingsBlock title="Что-то еще " />
    </>
  );
};

export default Settings;
