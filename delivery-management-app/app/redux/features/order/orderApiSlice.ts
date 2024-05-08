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
    }),
    getOrderOfVehicle: builder.query({
      query: (data) => URLS.ORDER_URL + `get_order_of_vehicle/?vehicle=${data}`,
    }),
    updateOrderById: builder.mutation({
      query: (data) => ({
        headers: {
          "Content-Type": "application/json",
        },
        url: URLS.ORDER_URL + `update_order/?id=${data.id}`,
        method: "put",
        body: JSON.stringify(data),
      }),
      onQueryStarted: async ({ id, ...put }, { dispatch, queryFulfilled }) => {
        try {
          const res = await queryFulfilled;
          const putResult = dispatch(
            orderApiSlice.util.updateQueryData("getOrderById", id, (draft) => {
              Object.assign(draft, res.data);
            })
          );
          dispatch(setCurOder(res.data));
        } catch (error) {
          console.log(error);
        }
      },
    }),
    getRecentOrdersCoordinates: builder.query({
      query: (data) => URLS.ORDER_URL + `get_recent_orders_coordinates/?date=${data}`,
    }),
    getOrderCoordinates: builder.query({
      query: (data) => URLS.ORDER_URL + `get_order_coordinates_by_id/?id=${data}`,
    }),
  }),
});

export const { useGetOrdersByDateQuery, useGetOrdersinPlanQuery, useGetOrderByIdQuery, useUpdateOrderByIdMutation, useGetRecentOrdersCoordinatesQuery, useGetOrderCoordinatesQuery, useGetOrderOfVehicleQuery } = orderApiSlice;
