// src/redux/authSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { signUpAPI, signInAPI } from "../api/auth"; // Import your API functions
import { User } from "../types/userTypes"; // Define your User type

interface AuthState {
  user: User | null;
  isLoggedIn: boolean;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  isLoggedIn: false,
  loading: false,
  error: null,
};

// Async Thunks for API calls
export const signUp = createAsyncThunk(
  "auth/signUp",
  async (userData: User) => {
    const response = await signUpAPI(userData);
    return response.data; // Adjust based on your API response structure
  }
);

export const signIn = createAsyncThunk(
  "auth/signIn",
  async (userData: User) => {
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
      .addCase(signUp.fulfilled, (state, action: PayloadAction<User>) => {
        state.loading = false;
        state.user = action.payload;
        state.isLoggedIn = true;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to sign up";
      })
      .addCase(signIn.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signIn.fulfilled, (state, action: PayloadAction<User>) => {
        state.loading = false;
        state.user = action.payload;
        state.isLoggedIn = true;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to sign in";
      });
  },
});

// Export the actions and the reducer
export const { signOut } = authSlice.actions;
export default authSlice.reducer;
