import { createSlice } from "@reduxjs/toolkit";
import { fetchItem, fetchItems } from "./items.actions";

const initialState = {
  shopItems: [],
  isLoading: false,
  isError: null,
  item: {},
};

const itemsSlice = createSlice({
  name: "@@items",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchItems.fulfilled, (state, action) => {
        state.shopItems = action.payload;
      })
      .addCase(fetchItem.fulfilled, (state, action) => {
        state.item = action.payload;
      })
      .addMatcher(
        (action) => action.type.endsWith("/pending"),
        (state, action) => {
          state.isLoading = true;
          state.isError = null;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("/rejected"),
        (state, action) => {
          state.isLoading = false;
          state.isError = action.payload;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("/fulfilled"),
        (state, action) => {
          state.isLoading = false;
          state.isError = null;
        }
      );
  },
});

export default itemsSlice.reducer;
