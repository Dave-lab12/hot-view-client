import * as yup from "yup";

export const RegisterSchema = yup.object().shape({
  email: yup.string().email("Invalid Email").required("Email is required"),
  phonenumber: yup
    .number()
    .positive("Must be positive")
    .integer("Must be an integer")
    .min(10, "Invalid format")
    .required("Phonenumber is required"),
  firstname: yup.string().required("Firstname is required"),
  lastname: yup.string().required("Lastname is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password should atleast contain 8 characters")
    .max(32, "Password can't contain more than 32 characters"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Password Must match")
    .required(),
});
