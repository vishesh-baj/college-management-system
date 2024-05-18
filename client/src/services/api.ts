import axios from "axios";
import { ILogin } from "../types";

const BASE_URL = "http://localhost:8081/api/";

// function to get token from local storage
const getTokenFromLocalStorage = () => {
  return localStorage.getItem("token");
};

// axios instance that can be reused multiple times
const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// setting token to request headers for every api request
axiosInstance.interceptors.request.use(
  (config) => {
    const token = getTokenFromLocalStorage();
    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export const loginUser = async (loginData: ILogin) => {
  return (await axiosInstance.post("auth/login", loginData)).data;
};
