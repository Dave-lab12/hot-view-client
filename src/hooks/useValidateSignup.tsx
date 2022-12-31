import { useFormik } from "formik";
import { UseMutateFunction } from "react-query";
import { IUser } from "src/types/User";
import { AxiosResponse } from "axios";

import { RegisterSchema } from "../schema/signup.schema";

interface IParams {
  mutate: UseMutateFunction<AxiosResponse, unknown, IUser>;
  isError: boolean;
}

export default function useValidateSignup({ mutate, isError }: IParams) {
  const formik = useFormik({
    initialValues: {
      email: "",
      firstName: "",
      lastName: "",
      phonenumber: "",
      password: "",
      passwordConfirm: "",
    },
    validationSchema: RegisterSchema,
    onSubmit(values) {
      const user: IUser = {
        ...values,
        phonenumber: parseInt(values.phonenumber, 10),
      };

      mutate(user);

      if (!isError) {
        formik.resetForm();
      }
    },
  });
}
