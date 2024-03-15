"use client";

import { apiSlice } from "../../apiSlice";
import { setCredentials } from "./authSlice";
export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        headers: { "Content-Type": "application/json" },
        url: "/auth/login",
        method: "post",
        body: credentials,
      }),
      onQueryStarted: async (credentials, { dispatch, queryFulfilled }) => {
        try {
          const res = await queryFulfilled;
          dispatch(setCredentials(res.data));
        } catch (error: any) {
          throw error;
        }
      },
    }),
  }),
});

export const { useLoginMutation } = authApiSlice;
