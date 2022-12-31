import { useFormik } from "formik";
import { UseMutateFunction } from "react-query";
import { LoginSchema } from "src/schema/login.schema";
import { AxiosResponse } from "axios";

import { LoginInput } from "../types/LoginInput";

interface IParams {
  mutate: UseMutateFunction<AxiosResponse, unknown, LoginInput>;
  error: unknown;
}

export default function useValidateLogin({ mutate, error }: IParams) {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginSchema,
    onSubmit(values) {
      const user: LoginInput = { ...values };
      mutate(user);
      if (!error) {
        formik.resetForm();
      }
    },
  });

  return formik;
}
