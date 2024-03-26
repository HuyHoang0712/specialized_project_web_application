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
    createCustomer: builder.mutation({
      query: (data) => ({
        headers: { "Content-Type": "application/json" },
        url: URLS.CUSTOMER_URL + "create_customer/",
        method: "POST",
        body: JSON.stringify(data),
      }),
    }),
  }),
});

export const { useGetAllCustomersQuery, useCreateCustomerMutation } =
  customerApiSlice;
