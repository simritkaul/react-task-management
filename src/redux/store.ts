// src/redux/store.ts
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice"; // Import your auth slice
import tasksReducer from "./taskSlice"; // Import your tasks slice

const store = configureStore({
  reducer: {
    auth: authReducer,
    tasks: tasksReducer,
  },
  // You can add middleware if needed
});

export default store;
