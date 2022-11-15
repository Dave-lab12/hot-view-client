import { useFormik } from "formik";
import { RegisterSchema } from "schema/signup.schema";

import Input from "./Input";
import Button from "./Button";
import Header from "./Header";
import Logo from "./Logo";
import ErrorSpan from "./ErrorSpan";

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
    onSubmit() {
      // eslint-disable-next-line no-console
      console.log("Submitted");
    },
  });
  // eslint-disable-next-line no-console
  console.log(formik);

  return (
    <div className="bg-gray-300 overflow-hidden">
      <Header title="signup" />
      <main>
        <div className="grid place-items-center h-screen overflow-auto">
          <div className="grid place-items-center bg-gray-100 hover:shadow-lg max-sm:w-3/4 sm:w-3/4 md:w-1/2 rounded-lg">
            <Logo
              src="/hot-news-logo.png"
              logoClass="place-self-center mb-6 mt-3"
            />
            <div className="grid grid-flow-col place-content-evenly-center w-3/4 py-3">
              <form onSubmit={formik.handleSubmit}>
                <h1 className="place-self-start text-sm ml-1 mb-2 text-orange-700 ">
                  Fill the following form please
                </h1>

                <div>
                  <Input
                    inputName="email"
                    inputType="email"
                    inputClass="mr-2 mb-2"
                    inputId="email"
                    changed={formik.handleChange}
                    blur={formik.handleBlur}
                    acceptedValue={formik.values.email}
                  />
                  {formik.touched.email && formik.errors.email && (
                    <ErrorSpan errorMessage={formik.errors.email} />
                  )}
                </div>

                <div>
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
                <div>
                  <Input
                    inputName="firstname"
                    inputType="text"
                    inputId="firstname"
                    inputClass="mr-2 mb-2"
                    changed={formik.handleChange}
                    blur={formik.handleBlur}
                    acceptedValue={formik.values.firstname}
                  />
                  {formik.touched.firstname && formik.errors.firstname && (
                    <ErrorSpan errorMessage={formik.errors.firstname} />
                  )}
                </div>

                <div>
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

                <div>
                  <Input
                    inputName="password"
                    inputType="password"
                    inputId="pass"
                    inputClass="mr-2 mb-2"
                    changed={formik.handleChange}
                    blur={formik.handleBlur}
                    acceptedValue={formik.values.password}
                  />
                  {formik.touched.password && formik.errors.password && (
                    <ErrorSpan errorMessage={formik.errors.password} />
                  )}
                </div>

                <div>
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
