"use client";

import { apiSlice } from "../../apiSlice";
import URLS from "@/app/lib/urls";
export const customerApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllCustomers: builder.query({
      query: () => URLS.CUSTOMER_URL,
      onQueryStarted: async (arg, { dispatch, queryFulfilled }) => {
        try {
          const res = await queryFulfilled;
        } catch (error) {
          console.log(error);
        }
      },
    }),
  }),
});

export const { useGetAllCustomersQuery } = customerApiSlice;
