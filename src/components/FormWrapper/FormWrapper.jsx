import styles from "./FormWrapper.module.scss";

const FormWrapper = ({ children }) => {
  return <section className={styles.wrapper}>{children}</section>;
};

export default FormWrapper;
