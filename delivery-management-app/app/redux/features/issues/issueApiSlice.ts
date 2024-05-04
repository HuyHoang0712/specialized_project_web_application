"use client";

import { apiSlice } from "../../apiSlice";
import { setIssues } from "./issueSlice";
import URLS from "@/app/lib/urls";
export const issueApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllIssue: builder.query({
      query: () => URLS.ISSUE_URL,
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
    getAllEmployeeIssues: builder.query({
      query: () => URLS.ISSUE_URL + "get_employee_issues",
    }),
    getAllVehicleIssues: builder.query({
      query: () => URLS.ISSUE_URL + "get_vehicle_issues",
    }),
  }),
});

export const {
  useGetAllIssueQuery,
  useGetIssuesByStatsusQuery,
  useGetIssuesByEmployeeIdQuery,
  useGetIssuesOfVehicleQuery,
  useGetAllEmployeeIssuesQuery,
  useGetAllVehicleIssuesQuery,
} = issueApiSlice;
