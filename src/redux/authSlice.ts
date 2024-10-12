// src/redux/authSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { signUpAPI, signInAPI } from "../api/auth";
import {
  SignInAPIResponse,
  User,
  UserCredentials,
} from "../types/auth/userTypes";

interface AuthState {
  user: User | null;
  accessToken: string | null;
  isLoggedIn: boolean;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  accessToken: null,
  isLoggedIn: false,
  loading: false,
  error: null,
};

// Async Thunks for API calls
export const signUp = createAsyncThunk<void, UserCredentials>(
  "auth/signUp",
  async (userData: UserCredentials) => {
    const response = await signUpAPI(userData);
    return response.data; // Adjust based on your API response structure
  }
);

export const signIn = createAsyncThunk<SignInAPIResponse, UserCredentials>(
  "auth/signIn",
  async (userData: UserCredentials) => {
    const response = await signInAPI(userData);
    return response.data; // Adjust based on your API response structure
  }
);

// Create the auth slice
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signOut: (state) => {
      state.user = null;
      state.accessToken = null;
      state.isLoggedIn = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signUp.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signUp.fulfilled, (state, _action: PayloadAction<void>) => {
        state.loading = false;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to sign up";
      })
      .addCase(signIn.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        signIn.fulfilled,
        (state, action: PayloadAction<SignInAPIResponse>) => {
          state.loading = false;
          state.user = {
            username: action.payload.username,
            firstName: action.payload.firstName,
            lastName: action.payload.lastName,
          };
          state.accessToken = action.payload.accessToken;
          state.isLoggedIn = true;
        }
      )
      .addCase(signIn.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to sign in";
      });
  },
});

// Export the actions and the reducer
export const { signOut } = authSlice.actions;
export default authSlice.reducer;
