// src/api/auth.ts
import { UserCredentials } from "../types/auth/userTypes";
import axiosInstance from "./axiosInstance";

export const signUpAPI = async (userData: UserCredentials) => {
  return await axiosInstance.post(`/auth/signup`, userData);
};

export const signInAPI = async (userData: UserCredentials) => {
  const response = await axiosInstance.post(`/auth/signin`, userData);

  if (response && response.data) {
    const token = response.data.accessToken;
    // Store the token in local storage
    localStorage.setItem("token", token);
  }

  return response;
};
