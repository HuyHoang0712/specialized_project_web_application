"use client";

import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { apiSlice } from "../../apiSlice";
import { Credential } from "@/app/lib/types";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "/auth/login",
        method: "post",
        body: credentials,
      }),
      // transformResponse: (response: any) => {
      //   console.log(response);
        
      //   return response.data;
      // }
    }),

  }),
  overrideExisting: true,
});

export const { useLoginMutation } = authApiSlice;
