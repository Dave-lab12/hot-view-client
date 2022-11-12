import { signIn } from "next-auth/react";
import { useFormik } from "formik";

import Input from "./Input";
import Logo from "./Logo";
import Button from "./Button";
import Link from "./Link";
import Header from "./Header";

function Login() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit(values) {},
  });

  return (
    <div className="bg-gray-300 overflow-hidden">
      <Header title="Login" />
      <main>
        <div className="grid place-items-center h-screen">
          <form
            onSubmit={formik.handleSubmit}
            className="grid place-items-center bg-gray-100 transition hover:shadow-lg rounded-lg w-1/4 p-5"
          >
            <Logo src="/hot-news-logo.png" />

            <Input
              inputName="email"
              inputType="email"
              inputClass="mt-6 mb-2 w-full"
              inputId="email"
              changed={formik.handleChange}
              acceptedValue={formik.values.email}
            />

            {formik.touched.email && formik.errors.email && (
              <span className="text-red-400">{formik.errors.email}</span>
            )}

            <Input
              inputName="password"
              inputType="password"
              inputId="pass"
              inputClass="w-full"
              changed={formik.handleChange}
              acceptedValue={formik.values.password}
            />

            {formik.touched.password && formik.errors.password && (
              <span className="text-red-400">{formik.errors.password}</span>
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
