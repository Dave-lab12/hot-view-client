import { signIn } from "next-auth/react";
import { useFormik } from "formik";
import { LoginSchema } from "src/schema/login.schema";
import { useMutation } from "react-query";

import { loginUserFn } from "../utils/authApi";
import { LoginInput } from "../types/LoginInput";

import Input from "./Input";
import Logo from "./Logo";
import Button from "./Button";
import Link from "./Link";
import Header from "./Header";
import ErrorSpan from "./ErrorSpan";

function Login() {
  const { mutate } = useMutation((userData: LoginInput) =>
    loginUserFn(userData)
  );
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginSchema,
    onSubmit(values) {
      const user: LoginInput = { ...values };
      mutate(user);
    },
  });

  return (
    <div className="bg-gray-300 overflow-auto">
      <Header title="Login" />
      <main>
        <div className="grid place-items-center h-screen">
          <form
            onSubmit={formik.handleSubmit}
            className="grid place-items-center bg-gray-100 transition hover:shadow-lg rounded-lg max-sm:w-3/4 sm:w-1/2 lg:w-1/4  p-5"
          >
            <Logo src="/hot-news-logo.png" />

            <Input
              inputName="email"
              inputType="email"
              inputClass="mt-6 mb-1 w-full"
              inputId="email"
              changed={formik.handleChange}
              acceptedValue={formik.values.email}
            />

            {formik.touched.email && formik.errors.email && (
              <ErrorSpan errorMessage={formik.errors.email} />
            )}

            <Input
              inputName="password"
              inputType="password"
              inputId="password"
              inputClass="w-full mt-1"
              changed={formik.handleChange}
              acceptedValue={formik.values.password}
            />

            {formik.touched.password && formik.errors.password && (
              <ErrorSpan errorMessage={formik.errors.password} />
            )}

            <Button buttonType="submit" text="Login" buttonClass="mt-3" />
            <Link
              text="Forgot password"
              link="#"
              linkClass="place-self-end mt-2"
              textClass="text-sm"
            />

            <h1 className="my-4 text-gray-700 mb-6">login with</h1>
            <div className="grid grid-cols-2 ">
              <Button
                buttonType="button"
                link="#"
                text="Google"
                buttonClass="mr-2 h-9"
                click={signIn}
                iconLink="fa-brands fa-google"
              />

              <Button
                buttonType="button"
                text="Facebook"
                link="#"
                buttonClass="w-35 mx-2"
                click={signIn}
                iconLink="fa-brands fa-facebook"
              />
            </div>
            <p className="text-gray-700 text-sm mt-3">Dont have an account?</p>
            <Link
              text="Sign up"
              link="/signup"
              linkClass="display:inline"
              textClass="text-sm"
            />
          </form>
        </div>
      </main>
    </div>
  );
}

export default Login;
