import axios from "axios";

const BASE_URL = "http://localhost:8001";

interface GenericResponse {
  status: string;
  message: string;
}

interface LoginInput {
  email: string;
  password: string;
}

export interface IUser {
  email: string;
  firstname: string;
  lastname: string;
  phonenumber: number;
  password: string;
  confirmPassword: string;
}

export const authApi = axios.create({
  baseURL: BASE_URL,
});

authApi.defaults.headers.common["content-type"] = "application/json";

export const signUpUserFn = async (user: IUser) => {
  const response = await authApi.post<GenericResponse>("/register", user);
  return response.data;
};

export const loginUserFn = async (user: LoginInput) => {
  const response = await authApi.post("/login", user);
  return response.data;
};
