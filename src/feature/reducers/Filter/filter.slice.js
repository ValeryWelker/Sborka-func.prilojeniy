import { createSlice } from "@reduxjs/toolkit";

const initialState = "all";

const filterSlice = createSlice({
  name: "@@filter",
  initialState,
  reducers: {
    setFilter: (_, action) => {
      return action.payload;
    },
  },
});

export default filterSlice.reducer;
export const { setFilter } = filterSlice.actions;
