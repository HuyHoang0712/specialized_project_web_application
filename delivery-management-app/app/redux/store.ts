import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice";
import { apiSlice } from "./apiSlice";
import orderReducer from "./features/order/orderSlice";
import issueReducer from "./features/issues/issueSlice";
import planReducer from "./features/plan/planSlice";
export const makeStore = () => {
  return configureStore({
    reducer: {
      auth: authReducer,
      order: orderReducer,
      issue: issueReducer,
      plan: planReducer,
      [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: process.env.NODE_ENV !== "production",
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
