import { useFormik } from "formik";

import Input from "./Input";
import Button from "./Button";
import Header from "./Header";
import Logo from "./Logo";
import ErrorSpan from "./ErrorSpan";

function SignUp() {
  const formik = useFormik({
    initialValues: {
      email: "",
      fName: "",
      lName: "",
      phonenumber: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit(values) {},
  });
  return (
    <div className="bg-gray-300 overflow-hidden">
      <Header title="signup" />
      <main>
        <div className="grid place-items-center h-screen">
          <div className="grid place-items-center bg-gray-100 hover:scale-110 transition duration-150 transform ease-in-out hover:shadow-lg rounded-lg h-3/5 w-1/4 px-5">
            <form onSubmit={formik.handleSubmit} className="grid grid-cols-2">
              <Logo
                src="/hot-news-logo.png"
                logoClass="col-span-2 place-self-center mb-6"
              />

              <h1 className="col-span-2 place-self-start text-sm ml-1 mb-2 text-orange-700 ">
                Fill the following form please
              </h1>

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

              <Input
                inputName="phonenumber"
                inputType="number"
                inputId="pno"
                changed={formik.handleChange}
                blur={formik.handleBlur}
                acceptedValue={formik.values.phonenumber}
              />
              {formik.touched.phonenumber && formik.errors.phonenumber && (
                <ErrorSpan errorMessage={formik.errors.phonenumber} />
              )}

              <Input
                inputName="First name"
                inputType="text"
                inputId="firstName"
                inputClass="mr-2 mb-2"
                changed={formik.handleChange}
                blur={formik.handleBlur}
                acceptedValue={formik.values.fName}
              />
              {formik.touched.fName && formik.errors.fName && (
                <ErrorSpan errorMessage={formik.errors.fName} />
              )}

              <Input
                inputName="Last name"
                inputType="text"
                inputId="lastName"
                changed={formik.handleChange}
                blur={formik.handleBlur}
                acceptedValue={formik.values.lName}
              />
              {formik.touched.lName && formik.errors.lName && (
                <ErrorSpan errorMessage={formik.errors.lName} />
              )}

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

              <Input
                inputName="confirm password"
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

              <Button
                buttonType="submit"
                text="sign up"
                buttonClass="col-span-2 place-self-center"
              />
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}

export default SignUp;
