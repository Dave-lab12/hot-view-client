import axios from "axios";
import { useMutation } from "react-query";

const registerUser = (user: any) => {
  return axios.post("http://localhost:8001/login", user);
};

export const useRegisterUser = () => {
  return useMutation(registerUser);
};
