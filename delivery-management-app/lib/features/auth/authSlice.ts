import { PayloadAction, Reducer, createSlice } from "@reduxjs/toolkit";
import { userLogin } from "./authActions";
import { User } from "@/lib/types";

interface AuthState {
    loading: boolean,
    userInfo: User | undefined,
    userToken: string | undefined,
    error: string | undefined,
    success: boolean,
}

const initialState: AuthState = {
  loading: false,
  userInfo: undefined, // for user object
  userToken: undefined, // for storing the JWT
  error: undefined,
  success: false, // for monitoring the registration process.
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(userLogin.pending, (state, action) => {
      state.loading = true;
      state.error = undefined;
    });
    builder.addCase(userLogin.fulfilled, (state, action) => {
      state.loading = false;
      state.userInfo = action.payload
    });
    builder.addCase(userLogin.pending, (state, action) => {
      state.loading = true;
      state.error = undefined;
    });
  },
});

export default authSlice.reducer as Reducer<AuthState>;
