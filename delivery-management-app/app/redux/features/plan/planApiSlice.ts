"use client";

import { apiSlice } from "../../apiSlice";
import { setPlanList } from "./planSlice";
import URLS from "@/app/lib/urls";
export const planApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllPlan: builder.query({
      query: () => URLS.PLAN_URL + "get_all_plans/",
      onQueryStarted: async (arg, { dispatch, queryFulfilled }) => {
        try {
          const res = await queryFulfilled;
          dispatch(setPlanList(res.data));
        } catch (error) {
          console.log(error);
        }
      },
    }),
  }),
  overrideExisting: true,
});

export const { useGetAllPlanQuery } = planApiSlice;
