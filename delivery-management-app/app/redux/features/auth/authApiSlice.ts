"use client";

import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { apiSlice } from "../../apiSlice";
import { Credential } from "@/app/lib/types";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: credentials => ({
        url: "/user/login",
        method: "POST",
        body: { ...credentials },
      }),
    }),
  }),
});


export const { useLoginMutation } = authApiSlice;
