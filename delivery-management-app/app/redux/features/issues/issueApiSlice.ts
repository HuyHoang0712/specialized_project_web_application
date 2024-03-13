"use client";

import { apiSlice } from "../../apiSlice";
import { setIssues } from "./issueSlice";
import URLS from "@/app/lib/urls";
export const issueApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllIssue: builder.query({
      query: () => URLS.ISSUE_URL,
      onQueryStarted: async (arg, { dispatch, queryFulfilled }) => {
        try {
          const res = await queryFulfilled;
          dispatch(setIssues(res.data));
        } catch (error) {
          console.log(error);
        }
      },
    }),
    getIssuesByStatsus: builder.query({
      query: (data: number) =>
        URLS.ISSUE_URL + `get_issues_by_status?status=${data}`,

      onQueryStarted: async (arg, { dispatch, queryFulfilled }) => {
        try {
          const res = await queryFulfilled;
          dispatch(setIssues(res.data));
        } catch (error) {
          console.log(error);
        }
      },
    }),
  }),
  overrideExisting: true,
});

export const { useGetAllIssueQuery, useGetIssuesByStatsusQuery } =
  issueApiSlice;
