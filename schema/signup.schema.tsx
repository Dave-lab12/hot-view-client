import * as yup from "yup";

export const RegisterSchema = yup.object().shape({
  email: yup.string().email().required(),
  phoneNumber: yup.number().min(10, "PhoneNumber should be a minimum of 10"),
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  password: yup
    .string()
    .required()
    .min(8, "password must be a minimum of 8 characters")
    .max(32, "password can't be more than 32 characters"),
  confirmPassword: yup
    .string()
    .required()
    .min(8, "password must be a minimum of 8 characters")
    .max(32, "password can't be more than 32 characters")
    .oneOf([yup.ref("password"), "Password Must match"]),
});
