import * as Yup from "yup";

export const schema = Yup.object().shape({
  // username: Yup.string()
  // 	.matches(/^([^0-9]*)$/, 'Имя не должно содержать цифры')
  // 	.required('Укажите логин'),
  email: Yup.string()
    .required("Укажите E-mail")
    .email("Некоректно указан E-mail,попробуйте снова"),
  password: Yup.string()
    .required("Укажите пароль")
    .min(6, "Должно быть не менее 8 символов"),
  passwordConfirm: Yup.string().required("Подтвердите пароль"),
});
