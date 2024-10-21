import { createAsyncThunk } from "@reduxjs/toolkit";
import ApiService from "../../../services/ApiServices";

export const fetchItems = createAsyncThunk(
  "@@items/fetchItems",
  async (_, { rejectWithValue }) => {
    try {
      const res = await ApiService.getShopItems();
      return res.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const fetchItem = createAsyncThunk(
  "@@items/fetchItem",
  async (id, { rejectWithValue }) => {
    try {
      const res = await ApiService.getShopItem(id);
      return res.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
