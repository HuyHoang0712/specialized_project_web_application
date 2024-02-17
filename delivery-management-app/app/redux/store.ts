import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { apiSlice } from "./apiSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      auth: authReducer,
      [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(apiSlice.middleware),
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
