"use client";

import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { apiSlice } from "../../apiSlice";
import { Credential } from "@/app/lib/types";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "/employees/get_user/",
        method: "POST",
        body: { ...credentials },
      }),
    }),
  }),
  overrideExisting: true,
});

export const { useLoginMutation } = authApiSlice;
