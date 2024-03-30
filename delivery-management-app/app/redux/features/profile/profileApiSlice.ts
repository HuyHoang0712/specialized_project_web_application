"use client";

import { apiSlice } from "../../apiSlice";
import URLS from "@/app/lib/urls";
export const profileApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUserProfile: builder.query({
      query: (data) => URLS.PROFILE_URL + `get_user_profile/`,
    }),
  }),
});

export const { useGetUserProfileQuery } = profileApiSlice;
