"use client";

import { apiSlice } from "../../apiSlice";
import { setCredentials } from "./authSlice";
import { toast } from "react-toastify";
export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        headers: { "Content-Type": "application/json" },
        url: "/auth/login/supervisor",
        method: "post",
        body: credentials,
      }),
      onQueryStarted: async (credentials, { dispatch, queryFulfilled }) => {
        try {
          const res = await queryFulfilled;
          dispatch(setCredentials(res.data));
          
        } catch (error: any) {
          // toast.error(error.error?.data.error_message, { toastId: 0 });
          // throw error;
        }
      },
    }),
  }),
});

export const { useLoginMutation } = authApiSlice;
