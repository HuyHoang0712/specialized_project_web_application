"use client";

import { apiSlice } from "../../apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "/auth/login",
        method: "post",
        body: credentials,
      }),
    }),
  }),
  overrideExisting: true,
});

export const { useLoginMutation } = authApiSlice;
