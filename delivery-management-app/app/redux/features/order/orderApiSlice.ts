"use client";

import { apiSlice } from "../../apiSlice";
import { setOrderList } from "./orderSlice";

export const orderApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getOrdersByDate: builder.mutation({
      query: (data) => ({
        url: "/v1/orders/get_orders_by_date/",
        method: "post",
        body: data,
      }),
      onQueryStarted: async (arg, { dispatch, queryFulfilled }) => {
        try {
          const res = await queryFulfilled;
          dispatch(setOrderList(res.data));
        } catch (error) {
          console.log(error);
        }
      },
    }),
  }),
  overrideExisting: true,
});

export const { useGetOrdersByDateMutation } = orderApiSlice;
