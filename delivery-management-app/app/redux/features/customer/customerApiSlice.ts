"use client";

import { get } from "http";
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
    getCustomerById: builder.query({
      query: (id) => URLS.CUSTOMER_URL + `get_customer_by_id/?id=${id}`,
    }),
    createCustomer: builder.mutation({
      query: (data) => ({
        headers: { "Content-Type": "application/json" },
        url: URLS.CUSTOMER_URL + "create_customer/",
        method: "POST",
        body: JSON.stringify(data),
      }),
    }),
    updateCustomerById: builder.mutation({
      query: (data) => ({
        headers: { "Content-Type": "application/json" },
        url: URLS.CUSTOMER_URL + `update_customer/?id=${data.id}`,
        method: "PUT",
        body: JSON.stringify(data),
      }),
      onQueryStarted: async ({ id, ...put }, { dispatch, queryFulfilled }) => {
        try {
          const res = await queryFulfilled;
          const putResult = dispatch(
            customerApiSlice.util.updateQueryData(
              "getCustomerById",
              id,
              (draft) => {
                Object.assign(draft, res.data);
              }
            )
          );
        } catch (error) {
          throw error;
        }
      },
    }),
    deleteCustomerById: builder.mutation({
      query: (id) => ({
        headers: { "Content-Type": "application/json" },
        url: URLS.CUSTOMER_URL + `delete_customer/?id=${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetAllCustomersQuery,
  useGetCustomerByIdQuery,
  useCreateCustomerMutation,
  useUpdateCustomerByIdMutation,
  useDeleteCustomerByIdMutation,
} = customerApiSlice;
