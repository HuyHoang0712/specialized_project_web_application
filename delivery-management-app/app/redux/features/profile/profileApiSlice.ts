import { type } from "os";
import { apiSlice } from "../../apiSlice";
import URLS from "@/app/lib/urls";
import { types } from "util";

export const profileApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getEmployeeId: builder.query({
      query: () => URLS.PROFILE_URL + `get_employee_id/`,
    }),
    getUserProfileNoId: builder.query({
      query: () => URLS.PROFILE_URL + `get_user_profile/`,
    }),
    getUserProfile: builder.query({
      query: (id) => URLS.EMPLOYEE_URL + `get_employee_by_id/?id=${id}`,
    }),
    updateProfileById: builder.mutation({
      query: (data) => ({
        headers: { "Content-Type": "application/json" },
        url: URLS.EMPLOYEE_URL + `update_employee/?id=${data.id}`,
        method: "PUT",
        body: JSON.stringify(data),
      }),
      onQueryStarted: async ({ id, ...put }, { dispatch, getState, queryFulfilled }) => {
        try {
          const res = await queryFulfilled;
          const putResult = dispatch(
            profileApiSlice.util.updateQueryData("getUserProfile", id, (draft) => {
              Object.assign(draft, res.data);
            })
          );
          console.log(putResult);
        } catch (error) {
          throw error;
        }
      },
    }),
  }),
});

export const { useGetUserProfileQuery, useUpdateProfileByIdMutation, useGetEmployeeIdQuery, useGetUserProfileNoIdQuery } = profileApiSlice;
