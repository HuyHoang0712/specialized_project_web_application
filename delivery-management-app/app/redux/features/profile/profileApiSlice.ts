import { apiSlice } from "../../apiSlice";
import URLS from "@/app/lib/urls";

export const profileApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUserProfile: builder.query({
      query: () => URLS.PROFILE_URL + `get_user_profile/`,
    }),
    updateProfileById: builder.mutation({
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
            profileApiSlice.util.updateQueryData(
              "getUserProfile",
              undefined,
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
  }),
});

export const { useGetUserProfileQuery, useUpdateProfileByIdMutation } =
  profileApiSlice;
