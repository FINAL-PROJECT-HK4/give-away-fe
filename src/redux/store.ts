// src/redux/store.ts
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";

// Tạo store và kết hợp reducer
const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

// Tạo kiểu RootState và AppDispatch để dùng trong TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
