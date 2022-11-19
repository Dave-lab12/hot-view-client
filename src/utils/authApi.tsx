import axios from "axios";
import { IUser } from "src/types/User";

const BASE_URL = "http://localhost:8001/api/v1/auth";

export const authApi = axios.create({
  baseURL: BASE_URL,
});

// authApi.defaults.headers.common["content-type"] = "application/json";

export const signUpUserFn = async (user: IUser) => {
  const response = await authApi.post("/register", user);
  return response.data;
};

export const loginUserFn = async (user: LoginInput) => {
  const response = await authApi.post("/login", user);
  return response.data;
};
