"use client";

import { log } from "console";
import { apiSlice } from "../../apiSlice";
import URLS from "@/app/lib/urls";
export const issueApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllIssue: builder.query({
      query: (type: string, status?: number) =>
        URLS.ISSUE_URL +
        `get_issues/?type=${type}` +
        (status && `&status=${status}`),
    }),
    getIssuesByStatsus: builder.query({
      query: (data: number) =>
        URLS.ISSUE_URL + `get_issues_by_status?status=${data}`,
    }),
    getIssuesByEmployeeId: builder.query({
      query: (data: string) =>
        URLS.ISSUE_URL + `get_issues_by_employee_id?employee_id=${data}`,
    }),
    getIssuesOfVehicle: builder.query({
      query: (data: string) =>
        URLS.ISSUE_URL + `get_issues_of_vehicle?vehicle=${data}`,
    }),
    getIssueById: builder.query({
      query: ({ id, type }) =>
        URLS.ISSUE_URL + `get_issue_by_id/?id=${id}&type=${type}`,
    }),
    updateIssueStatus: builder.mutation({
      query: (data: { id: string; status: number; type: string }) => ({
        headers: { "Content-Type": "application/json" },
        url:
          URLS.ISSUE_URL +
          `update_issue_status/?id=${data.id}&type=${data.type}`,
        method: "PUT",
        body: JSON.stringify(data),
      }),
      onQueryStarted: async (
        { id, type, ...put },
        { dispatch, queryFulfilled }
      ) => {
        try {
          const res = await queryFulfilled;

          dispatch(
            issueApiSlice.util.updateQueryData(
              "getIssueById",
              { id, type },
              (draft) => {
                Object.assign(draft, res.data);
              }
            )
          );
          dispatch(
            issueApiSlice.util.updateQueryData("getAllIssue", type, (draft) => {
              draft.map((item: any) => {
                if (item.id === id) {
                  item.status = put.status;
                }
              });
            })
          );
        } catch (error) {
          throw error;
        }
      },
    }),
  }),
});

export const {
  useGetAllIssueQuery,
  useGetIssuesByStatsusQuery,
  useGetIssuesByEmployeeIdQuery,
  useGetIssuesOfVehicleQuery,
  useGetIssueByIdQuery,
  useUpdateIssueStatusMutation,
} = issueApiSlice;
