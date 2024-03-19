"use client";
import type { Action, PayloadAction } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query";
import { logOut, setCredentials } from "./features/auth/authSlice";
import TokenService from "@/app/utils/Token.service";
import { RootState } from "./store";
import { HYDRATE } from "next-redux-wrapper";

// import { Mutex } from "async-mutex";

function isHydrateAction(action: Action): action is PayloadAction<RootState> {
  return action.type === HYDRATE;
}

const apiURL =
  process.env.NEXT_PUBLIC_NODE_ENV === "production"
    ? process.env.NEXT_PUBLIC_BACKEND_PROD
    : process.env.NEXT_PUBLIC_BACKEND_DEV;

// const mutex = new Mutex();
const baseQuery = fetchBaseQuery({
  baseUrl: apiURL,
  prepareHeaders: (headers, { getState }) => {
    const state = getState() as RootState;
    const token = state.auth?.token;
    const tokenExpired = TokenService.isAccessExpired();
    if (token) {
      if (!tokenExpired) {
        headers.set("authorization", `Bearer ${token.accessToken}`);
      } else {
        headers.set("authorization", `Bearer ${token.accessToken}`);
        headers.set("x-refresh", `${token.refreshToken}`);
      }
      headers.set("Accept", "*/*");
    }
    return headers;
  },
});

const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  // await mutex.waitForUnlock();
  let result = await baseQuery(args, api, extraOptions);
  if (result?.error?.status === 403) {
    console.log("sending refresh token");
    // send refresh token to get new access token
    // if (!mutex.isLocked()) {
    // const release = await mutex.acquire();
    const refreshResult = await baseQuery("/refresh", api, extraOptions);
    console.log(refreshResult);
    if (refreshResult?.data) {
      const user = (api.getState() as RootState).auth.user;
      // store the new token
      api.dispatch(setCredentials({ response: refreshResult.data }));
      // retry the original query with new access token
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logOut());
    }
    // } else {
    //   // wait until the mutex is available without locking it
    //   // await mutex.waitForUnlock();
    //   result = await baseQuery(args, api, extraOptions);
    // }
  }
  return result;
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  // extractRehydrationInfo(action, { reducerPath }): any {
  //   if (isHydrateAction(action)) {
  //     return action.payload[reducerPath];
  //   }
  // },
  endpoints: (builder) => ({}),
});
