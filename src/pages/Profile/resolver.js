import * as Yup from "yup";
export const schema = Yup.object().shape({
  username: Yup.string().required("Это поле не может быть пустым"),
  email: Yup.string()
    .required("Это поле не может быть пустым")
    .email("Некоректно указан E-mail,попробуйте снова"),
});
