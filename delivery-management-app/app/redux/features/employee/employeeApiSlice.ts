"use client";

import { apiSlice } from "../../apiSlice";
import URLS from "@/app/lib/urls";
export const employeeApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllEmployees: builder.query({
      query: () => URLS.EMPLOYEE_URL,
    }),
    getEmployeeById: builder.query({
      query: (id) => URLS.EMPLOYEE_URL + `get_employee_by_id/?id=${id}`,
    }),
    createEmployee: builder.mutation({
      query: (data) => ({
        headers: { "Content-Type": "application/json" },
        url: URLS.EMPLOYEE_URL + "create_user/",
        method: "POST",
        body: JSON.stringify(data),
      }),
    }),
    updateEmployeeById: builder.mutation({
      query: (data) => ({
        headers: { "Content-Type": "application/json" },
        url: URLS.EMPLOYEE_URL + `update_employee/?id=${data.id}`,
        method: "PUT",
        body: JSON.stringify(data),
      }),
      onQueryStarted: async ({ id, ...put }, { dispatch, queryFulfilled }) => {
        try {
          const res = await queryFulfilled;
          const putResult = dispatch(
            employeeApiSlice.util.updateQueryData(
              "getEmployeeById",
              id,
              (draft) => {
                Object.assign(draft, res.data);
              }
            )
          );
        } catch (error) {
          throw error;
        }
      },
    }),
    getStatusSummary: builder.query({
      query: () => URLS.EMPLOYEE_URL + "get_employee_summary/",
    }),
    getGroups: builder.query({
      query: () => URLS.EMPLOYEE_URL + "get_groups/",
    }),
  }),
});

export const {
  useGetAllEmployeesQuery,
  useGetEmployeeByIdQuery,
  useCreateEmployeeMutation,
  useUpdateEmployeeByIdMutation,
  useGetStatusSummaryQuery,
  useGetGroupsQuery,
} = employeeApiSlice;
