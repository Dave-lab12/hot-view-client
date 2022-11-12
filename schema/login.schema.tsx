import * as yup from "yup";

export const LoginSchema = yup.object().shape({
  email: yup.string().required("Invalid email"),
  password: yup
    .string()
    .required()
    .min(8, "password must be a minimum of 8 characters")
    .max(32, "password can't be more than 32 characters"),
});
