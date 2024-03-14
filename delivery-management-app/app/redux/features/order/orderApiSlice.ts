"use client";
import { apiSlice } from "../../apiSlice";
import { setOrderList, setCurOder } from "./orderSlice";
import URLS from "@/app/lib/urls";
export const orderApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getOrdersByDate: builder.query({
      query: (data) => URLS.ORDER_URL + `get_orders_by_date/?date=${data}`,

      onQueryStarted: async (arg, { dispatch, queryFulfilled }) => {
        try {
          const res = await queryFulfilled;
          console.log(res.data);

          dispatch(setOrderList(res.data));
        } catch (error) {
          console.log(error);
        }
      },
    }),
    getOrdersinPlan: builder.query({
      query: (data) => URLS.ORDER_URL + `get_orders_in_plan/?plan_id=${data}`,

      onQueryStarted: async (arg, { dispatch, queryFulfilled }) => {
        try {
          const res = await queryFulfilled;
          console.log(res.data);

          dispatch(setOrderList(res.data));
        } catch (error) {
          console.log(error);
        }
      },
    }),
    getOrderById: builder.query({
      query: (data) => URLS.ORDER_URL + `get_order_by_id/?id=${data}`,

      onQueryStarted: async (arg, { dispatch, queryFulfilled }) => {
        try {
          const res = await queryFulfilled;
          console.log(res.data[0]);

          dispatch(setCurOder(res.data[0]));
        } catch (error) {
          console.log(error);
        }
      },
    }),
  }),
  overrideExisting: true,
});

export const {
  useGetOrdersByDateQuery,
  useGetOrdersinPlanQuery,
  useGetOrderByIdQuery,
} = orderApiSlice;
