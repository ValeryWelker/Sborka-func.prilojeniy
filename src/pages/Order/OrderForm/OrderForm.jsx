import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import useFormFocus from "../../../hooks/useFormFocus";

import { clearCart } from "../../../feature/reducers/Cart/cart.slice";
import { nanoid } from "@reduxjs/toolkit";
import {
  deleteTicket,
  updateTicketCount,
} from "../../../feature/reducers/Tickets/tickets.actions";

import ApiService from "../../../services/ApiServices";

import { FormField, IButton, Typography } from "../../../ui-kit";

import { normalizePhoneNumber } from "../../../utils/data/form-helpers";
import { schema } from "./resolver";

import { db } from "../../../firebase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";

import styles from "./OrderForm.module.scss";

const initialState = {
  name: false,
  email: false,
  phone: false,
  country: false,
  city: false,
  street: false,
  home: false,
  apartment: false,
};

function OrderForm({ cart, amount, user, ticket }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleBlur, handleFocus, handleSubmit, isFocused, errors } =
    useFormFocus(initialState, schema);

  const ticketWay = async (ticket) => {
    if (!ticket) {
      return;
    } else {
      if (ticket?.count > 1) {
        dispatch(
          updateTicketCount({
            id: ticket.id,
            data: { ...ticket, count: ticket.count - 1 },
          })
        );
      }
      if (ticket?.count === 1) {
        dispatch(deleteTicket(ticket.id));
      }
    }
  };

  const ordersPath = doc(db, "users", `${user?.email}`);

  const onSubmit = async (data) => {
    const normalizePhone = normalizePhoneNumber(data.phone);

    const order = {
      ...data,
      phone: normalizePhone,
      clothes: cart,
      totalAmount: amount,
      orderBy: user?.email,
    };
    try {
      await ApiService.addOrders(order);
      if (user?.email) {
        await updateDoc(ordersPath, {
          orders: arrayUnion({
            clothes: cart,
            totalAmount: amount,
            createdAt: new Date(),
            id: nanoid(),
          }),
        });
      }
      dispatch(clearCart());
      ticketWay(ticket);
      navigate("/checkout");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.data}>
        <Typography>Имя покупателя</Typography>
        <FormField
          name="name"
          register={register}
          type="text"
          error={errors.name && errors.name?.message}
          placeholder="Имя"
          isFocused={isFocused.name}
          onBlur={handleBlur}
          onFocus={handleFocus}
        />
        <FormField
          name="email"
          register={register}
          type="text"
          error={errors.email && errors.email?.message}
          placeholder="E-mail"
          isFocused={isFocused.email}
          onBlur={handleBlur}
          onFocus={handleFocus}
        />
        <FormField
          name="phone"
          register={register}
          type="tel"
          error={errors.phone && errors.phone?.message}
          placeholder="Телефон"
          isFocused={isFocused.phone}
          onBlur={handleBlur}
          onFocus={handleFocus}
        />
      </div>
      <div className={styles.data}>
        <Typography>Адресс получателя</Typography>
        <FormField
          name="country"
          register={register}
          type="text"
          error={errors.country && errors.country?.message}
          placeholder="Страна"
          isFocused={isFocused.country}
          onBlur={handleBlur}
          onFocus={handleFocus}
        />
        <FormField
          name="city"
          register={register}
          type="text"
          error={errors.city && errors.city?.message}
          placeholder="Город"
          isFocused={isFocused.city}
          onBlur={handleBlur}
          onFocus={handleFocus}
        />
        <FormField
          name="street"
          register={register}
          type="text"
          error={errors.street && errors.street?.message}
          placeholder="Улица"
          isFocused={isFocused.street}
          onBlur={handleBlur}
          onFocus={handleFocus}
        />
        <FormField
          name="home"
          register={register}
          type="text"
          error={errors.home && errors.home?.message}
          placeholder="Дом"
          isFocused={isFocused.home}
          onBlur={handleBlur}
          onFocus={handleFocus}
        />
        <FormField
          name="apartment"
          register={register}
          type="text"
          error={errors.apartment && errors.apartment?.message}
          placeholder="Квартира"
          isFocused={isFocused.apartment}
          onBlur={handleBlur}
          onFocus={handleFocus}
        />
      </div>
      <div>
        <IButton>Оформить заказ</IButton>
      </div>
    </form>
  );
}

export default OrderForm;
