import axios from "axios";

import { IUser } from "src/types/User";
import { LoginInput } from "src/types/LoginInput";
import { BASE_URL } from "config/default";

export const authApi = axios.create({
  baseURL: BASE_URL,
});

// authApi.defaults.headers.common["content-type"] = "application/json";

export const signUpUserFn = async (user: IUser) => {
  const response = await authApi.post("/auth/register", user);
  return response;
};

export const loginUserFn = async (user: LoginInput) => {
  const response = await authApi.post("/auth/login", user);
  return response;
};
