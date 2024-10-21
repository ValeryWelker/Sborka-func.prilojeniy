import * as Yup from "yup";
export const schema = Yup.object().shape({
  name: Yup.string()
    .matches(/^([^0-9]*)$/, "Имя не должно содержать цифры")
    .required("Укажите имя"),
  email: Yup.string()
    .required("Укажите E-mail")
    .email("Некоректно указан E-mail,попробуйте снова"),
  phone: Yup.string().required("Укажите телефон"),
  country: Yup.string()
    .matches(/^([^0-9]*)$/, "Страна не должна содержать цифры")
    .required("Укажите страну"),
  city: Yup.string()
    .matches(/^([^0-9]*)$/, "Город не должен содержать цифры")
    .required("Укажите город"),
  street: Yup.string().required("Укажите улицу"),
  home: Yup.string().required("Укажите дом"),
  apartment: Yup.string().required("Укажите квартиру"),
});
