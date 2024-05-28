import { apiSlice } from "../../apiSlice";
import URLS from "@/app/lib/urls";

export const notificationApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getNotifications: builder.query({
      query: () => URLS.NOTI_URL + "get_notifications/",
    }),
    maskAsReaded: builder.mutation({
      query: (id) => ({
        url: URLS.NOTI_URL + "mark_as_read/?id=" + id,
        method: "PUT",
      }),
      onQueryStarted: async (id, { dispatch, queryFulfilled }) => {
        try {
          const res = await queryFulfilled;
          dispatch(
            notificationApiSlice.util.updateQueryData(
              "getNotifications",
              undefined,
              (draft) => {
                draft.map((noti: any) => {
                  if (noti.id === id) {
                    noti.is_read = true;
                  }
                });
              }
            )
          );
        } catch (error) {
          console.log(error);
        }
      },
    }),
  }),
});

export const { useGetNotificationsQuery, useMaskAsReadedMutation } =
  notificationApiSlice;
