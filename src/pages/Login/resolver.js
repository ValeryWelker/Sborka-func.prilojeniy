import * as Yup from "yup";

export const schema = Yup.object().shape({
  email: Yup.string()
    .required("Укажите E-mail")
    .email("Некоректно указан E-mail,попробуйте снова"),
  password: Yup.string().required("Укажите пароль"),
});
