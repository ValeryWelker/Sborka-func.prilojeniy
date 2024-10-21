import { createSlice } from "@reduxjs/toolkit";
import {
  fetchTickets,
  updateTicketCount,
  deleteTicket,
} from "./tickets.actions";

const initialState = {
  realTicket: null,
  isError: null,
  isLoading: false,
};

const ticketsSlice = createSlice({
  name: "@@tickets",
  initialState,
  reducers: {
    clearTickets: (state) => {
      state.realTicket = null;
      state.isLoading = false;
      state.isError = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTickets.pending, (state, action) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(fetchTickets.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = null;
        state.realTicket = action.payload;
      })
      .addCase(updateTicketCount.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = null;
        state.realTicket = null;
      })
      .addCase(deleteTicket.fulfilled, (state) => {
        state.realTicket = null;
        state.isLoading = false;
        state.isError = null;
      })
      .addCase(fetchTickets.rejected, (state, action) => {
        state.isError = action.payload;
        state.isLoading = false;
      });
  },
});

export default ticketsSlice.reducer;
export const { clearTickets } = ticketsSlice.actions;
