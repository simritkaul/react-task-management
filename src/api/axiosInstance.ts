// src/api/axiosInstance.ts
import axios from "axios";

// Create an instance of axios
const axiosInstance = axios.create({
  baseURL: "http://localhost:3300", // Replace with your actual API URL
  timeout: 10000, // Set a timeout if needed
});

// You can also add interceptors for request/response here
axiosInstance.interceptors.request.use(
  (config) => {
    // Modify request config before sending it
    const token = localStorage.getItem("token"); // Replace with your auth token retrieval logic
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // Handle request errors
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    // Handle successful responses
    return response;
  },
  (error) => {
    // Handle error responses globally
    console.error("API call error:", error);
    return Promise.reject(error);
  }
);

export default axiosInstance;
