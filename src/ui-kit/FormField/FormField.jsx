import { useState } from "react";
import InputPhone from "./inputPhone/InputPhone";
import visible from "./../../assets/visible.svg";
import invisible from "./../../assets/invisible.svg";
import styles from "./FormField.module.scss";

const FormField = ({
  name,
  register,
  type,
  error,
  placeholder,
  isFocused,
  onBlur,
  onFocus,
  className,
}) => {
  const [isShowPassword, setIsShowPassword] = useState(true);

  const handleShowPassword = () => {
    setIsShowPassword((prevState) => !prevState);
  };

  const handleChangeType = (type) => {
    if (type === "text") {
      return "text";
    }
    if (type === "password") {
      return isShowPassword ? "password" : "text";
    }
  };

  return (
    <div
      className={`${styles.formfield} ${
        isFocused && styles.active
      } ${className}`}
    >
      {type === "text" && (
        <>
          <input
            className={`${styles.input} ${isFocused && styles.inputActive}`}
            name={name}
            {...(register ? register(name) : register)}
            type={handleChangeType(type)}
            placeholder={placeholder}
            onBlur={onBlur}
            onFocus={onFocus}
          />
          {error && <div className={styles.errorMessage}>{error}</div>}
        </>
      )}
      {type === "password" && (
        <>
          <input
            className={`${styles.input} ${isFocused && styles.inputActive}`}
            name={name}
            {...(register ? register(name) : register)}
            type={handleChangeType(type)}
            placeholder={placeholder}
            onBlur={onBlur}
            onFocus={onFocus}
          />
          <div className={styles.icon} onClick={handleShowPassword}>
            <img src={isShowPassword ? invisible : visible} alt="" />
          </div>
          {error && <div className={styles.errorMessage}>{error}</div>}
        </>
      )}
      {type === "tel" && (
        <>
          <InputPhone
            className={`${styles.input} ${isFocused && styles.inputActive}`}
            name={name}
            {...(register ? register(name) : register)}
            type={type}
            placeholder={placeholder}
            onBlur={onBlur}
            onFocus={onFocus}
          />
          {error && <div className={styles.errorMessage}>{error}</div>}
        </>
      )}
    </div>
  );
};

export default FormField;
