import * as yup from "yup";

export const RegisterSchema = yup.object().shape({
  email: yup.string().email().required(),
  phoneNumber: yup
    .number()
    .positive("Must be positive")
    .integer("Must be an integer")
    .min(10, "Invalid format"),
  firstName: yup
    .string()
    .label("first name")
    .required("First name is required"),
  lastName: yup.string().label("last name").required("Last name is required"),
  password: yup
    .string()
    .required("password is required")
    .min(8, "password too short")
    .max(32, "password too long"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), "Password Must match"]),
});
