import { Typography } from "./../../ui-kit";
import styles from "./SettingsBlock.module.scss";

const SettingsBlock = ({ title, children }) => {
  return (
    <div className={styles.settings}>
      <div className={styles.top}>
        <Typography>{title}</Typography>
      </div>
      <div className={styles.main}>{children}</div>
    </div>
  );
};

export default SettingsBlock;
