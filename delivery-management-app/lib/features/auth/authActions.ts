import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { User, Credential } from "@/lib/types";

export const userLogin = createAsyncThunk(
  "auth/login",
  async ({ username, password }: Credential, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        `${process.env.BACKEND_URL}/api/user/register`,
        { username, password },
        config
      );
      localStorage.setItem("userToken", data.userToken);
      return data as User;

    } catch (error: any) {
      // return custom error message from backend if present
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
