import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
// import auth from "../auth";

export type RequestConfig = AxiosRequestConfig;

export const cancelToken = () => axios.CancelToken.source();

const reqErrorInterceptor = (error: any) => {
  axios.get("");
  return Promise.reject(error);
};

const resInterceptor = (response: any) => response;

const resErrorInterceptor = (error: {
  response: { status: number; request: XMLHttpRequest; data: any };
}) => {
  // whatever you want to do with the error
  if (
    error?.response?.status === 500 &&
    error?.response?.data?.message === "Token error" &&
    !/login/.test(error.response.request.responseURL)
  ) {
    window.location.href = "/auth/login?redirectUrl=" + location.pathname;
  }
  throw error;
};

const addInterceptors = (instance: AxiosInstance) => {
  instance.interceptors.request.use((v) => {
    v.headers.setAuthorization(`Bearer ${localStorage.getItem("accessToken")}`);
    v.headers.Accept = "application/json";
    return v;
  }, reqErrorInterceptor);

  instance.interceptors.response.use(resInterceptor, resErrorInterceptor);
};

export const fetchClient = () => {
  const instance = axios.create({
    headers: {
      Accept: "application/json",
    },
  });
  addInterceptors(instance);

  return instance;
};

export default fetchClient();
