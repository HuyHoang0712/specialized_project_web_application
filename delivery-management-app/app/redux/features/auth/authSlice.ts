"use client";
import { createSlice } from "@reduxjs/toolkit";
import TokenService from "@/app/utils/Token.service";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: "",
    token: TokenService.getToken(),
  },
  reducers: {
    setCredentials: (state, action) => {
      const response = action.payload;
      TokenService.updateLocalAccessToken(response);
      state.token = TokenService.getToken();
    },
    logOut: (state) => {
      state.token = null;
      TokenService.logOut();
    },
  },
});

export const { setCredentials, logOut } = authSlice.actions;

export const selectCurrentUser = (state: any) => {
  if (state?.auth?.user) return state.auth.user;

  return null;
};

export const selectCurrentToken = (state: any) => {
  if (state?.auth?.token) return state.auth.token;

  return null;
};

export default authSlice.reducer;
