"use client";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiURL =
  process.env.NEXT_PUBLIC_NODE_ENV === "production"
    ? process.env.NEXT_PUBLIC_VIETNAME_ADDRESS_API_PROD
    : process.env.NEXT_PUBLIC_VIETNAME_ADDRESS_API_DEV;

export const addressApiSlice = createApi({
  reducerPath: "addressApi",
  baseQuery: fetchBaseQuery({
    baseUrl: apiURL,
    prepareHeaders: (headers) => {
      headers.set("Content-Type", `application/json`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getProvices: builder.query({
      query: (data) => "/province/",
    }),
    getDistrictsInProvince: builder.query({
      query: (provinceId) => `/province/district/${provinceId}`,
    }),
    getWardInDistrict: builder.query({
      query: (districtId) => `/province/ward/${districtId}`,
    }),
  }),
});

export const {
  useGetProvicesQuery,
  useLazyGetDistrictsInProvinceQuery,
  useLazyGetWardInDistrictQuery,
} = addressApiSlice;
