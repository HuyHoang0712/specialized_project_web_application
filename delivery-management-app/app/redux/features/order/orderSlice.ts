"use client";
import { createSlice, createDraftSafeSelector } from "@reduxjs/toolkit";
const orderSlice = createSlice({
  name: "order",
  initialState: {
    orderList: [],
    curOrder: {},
  },
  reducers: {
    setOrderList: (state, action) => {
      state.orderList = action.payload;
    },
    setCurOder: (state, action) => {
      state.curOrder = action.payload;
    },
  },
});

const selectOrder = (state: any) => state?.order;
export const selectOrderList = createDraftSafeSelector(
  selectOrder,
  (order) => order.orderList
);

export const selectCurOrder = createDraftSafeSelector(
  selectOrder,
  (order) => order.curOrder
);

export const { setOrderList, setCurOder } = orderSlice.actions;

export default orderSlice.reducer;
