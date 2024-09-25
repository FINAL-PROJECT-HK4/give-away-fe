import store from "../redux/store";
import axios from "axios";
import { setTokens, clearTokens } from "../redux/auth/authSlice";

// Tạo một instance của axios với URL cơ bản
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BE_URL,
  headers: {
    "Content-Type": "application/json",
    "ngrok-skip-browser-warning": "true",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    // Lấy accessToken từ Redux store
    const state = store.getState();
    const accessToken = state.auth.accessToken;

    // Nếu có accessToken, thêm nó vào header Authorization
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => {
    // Xử lý lỗi trong request nếu có
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // Kiểm tra nếu originalRequest không phải là undefined
    if (!originalRequest) {
      return Promise.reject(error); // Xử lý lỗi nếu originalRequest là undefined
    }

    if (
      error.response?.status === 401 &&
      !originalRequest._retry &&
      localStorage.getItem("accessToken")
    ) {
      originalRequest._retry = true;

      try {
        const state = store.getState();
        const refreshToken = state.auth.refreshToken;

        const response = await axios.post(
          `${import.meta.env.VITE_BE_URL}/auth/refresh-token`,
          {
            refreshToken,
          }
        );

        const newAccessToken = response.data.accessToken;

        // Cập nhật accessToken mới
        store.dispatch(
          setTokens({
            accessToken: newAccessToken,
            refreshToken: refreshToken!,
          })
        );

        // Thêm accessToken mới vào header
        originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;

        return axiosInstance(originalRequest); // Thử lại yêu cầu gốc
      } catch (refreshError) {
        store.dispatch(clearTokens());
        window.location.href = "/";
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
