import { useFormik } from "formik";

import Input from "./Input";
import Button from "./Button";
import Header from "./Header";
import Logo from "./Logo";
import ErrorSpan from "./ErrorSpan";
import { useRegisterUser } from "../hooks/useRegisterUser";
import { RegisterSchema } from "../schema/signup.schema";

function SignUp() {
  const formik = useFormik({
    initialValues: {
      email: "",
      firstname: "",
      lastname: "",
      phonenumber: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: RegisterSchema,
    onSubmit(values) {
      const user = { ...values };
      const { mutate } = useRegisterUser();
      mutate(user);
    },
  });

  return (
    <div className="bg-gray-300 overflow-hidden">
      <Header title="signup" />
      <main>
        <div className="grid place-items-center h-screen overflow-auto">
          <div className="grid place-items-center bg-gray-100 hover:shadow-lg max-sm:w-3/4 sm:w-3/4 md:w-3/4 lg:w-2/6 rounded-lg">
            <Logo
              src="/hot-news-logo.png"
              logoClass="place-self-center mb-6 mt-3"
            />
            <div className="grid grid-flow-col place-content-evenly-center w-3/4 py-3">
              <form onSubmit={formik.handleSubmit}>
                <h1 className="place-self-start text-center pt-1 mb-2 text-white bg-orange-400 h-9 rounded-lg ">
                  Fill the following form please
                </h1>

                <div className="my-2">
                  <Input
                    inputName="email"
                    inputType="email"
                    inputId="email"
                    changed={formik.handleChange}
                    blur={formik.handleBlur}
                    acceptedValue={formik.values.email}
                  />
                  {formik.touched.email && formik.errors.email && (
                    <ErrorSpan errorMessage={formik.errors.email} />
                  )}
                </div>

                <div className="my-2">
                  <Input
                    inputName="phonenumber"
                    inputType="number"
                    inputId="phonenumber"
                    changed={formik.handleChange}
                    blur={formik.handleBlur}
                    acceptedValue={formik.values.phonenumber}
                  />
                  {formik.errors.phonenumber && formik.touched.phonenumber && (
                    <ErrorSpan errorMessage={formik.errors.phonenumber} />
                  )}
                </div>
                <div className="my-2">
                  <Input
                    inputName="firstname"
                    inputType="text"
                    inputId="firstname"
                    changed={formik.handleChange}
                    blur={formik.handleBlur}
                    acceptedValue={formik.values.firstname}
                  />
                  {formik.touched.firstname && formik.errors.firstname && (
                    <ErrorSpan errorMessage={formik.errors.firstname} />
                  )}
                </div>

                <div className="my-2">
                  <Input
                    inputName="lastname"
                    inputType="text"
                    inputId="lastname"
                    changed={formik.handleChange}
                    blur={formik.handleBlur}
                    acceptedValue={formik.values.lastname}
                  />
                  {formik.errors.lastname && (
                    <ErrorSpan errorMessage={formik.errors.lastname} />
                  )}
                </div>

                <div className="my-2">
                  <Input
                    inputName="password"
                    inputType="password"
                    inputId="pass"
                    changed={formik.handleChange}
                    blur={formik.handleBlur}
                    acceptedValue={formik.values.password}
                  />
                  {formik.touched.password && formik.errors.password && (
                    <ErrorSpan errorMessage={formik.errors.password} />
                  )}
                </div>

                <div className="my-2">
                  <Input
                    inputName="confirmPassword"
                    inputType="password"
                    inputId="pass2"
                    changed={formik.handleChange}
                    blur={formik.handleBlur}
                    acceptedValue={formik.values.confirmPassword}
                  />
                  {formik.touched.confirmPassword &&
                    formik.errors.confirmPassword && (
                      <ErrorSpan errorMessage={formik.errors.confirmPassword} />
                    )}
                </div>

                <Button
                  buttonType="submit"
                  text="sign up"
                  buttonClass="place-self-center"
                />
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default SignUp;
