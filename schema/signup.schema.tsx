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
    .min(8, "Password too short")
    .max(32, "Password too long"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Password Must match")
    .required(),
});
