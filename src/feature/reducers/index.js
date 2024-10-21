import { combineReducers } from "@reduxjs/toolkit";
import filterSlice from "./Filter/filter.slice";
import itemsSlice from "./Items/Items.slice";
import cartSlice from "./Cart/cart.slice";
import ticketsSlice from "./Tickets/tickets.slice";

export const rootReducer = combineReducers({
  filter: filterSlice,
  items: itemsSlice,
  cart: cartSlice,
  tickets: ticketsSlice,
});
