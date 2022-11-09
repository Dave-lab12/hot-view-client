import { signIn } from "next-auth/react";

import Input from "./Input";
import Logo from "./Logo";
import Button from "./Button";
import Link from "./Link";
import Header from "./Header";

function Login() {
  return (
    <div className="bg-gray-300 overflow-hidden">
      <Header title="Login" />
      <main>
        <div className="grid place-items-center h-screen">
          <div className="grid place-items-center bg-gray-100 hover:scale-110 transition duration-150 transform ease-in-out hover:shadow-lg rounded-lg h-3/5 w-1/4 p-5">
            <Logo src="/hot-news-logo.png" />

            <Input
              inputName="email"
              inputType="email"
              inputClass="mt-6 mb-2 w-full"
              inputId="email"
            />

            <Input
              inputName="password"
              inputType="password"
              inputId="pass"
              inputClass="w-full"
            />

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
            <p className="text-gray-700 text-sm mt-3">Don't have an account?</p>
            <Link
              text="Sign up"
              link="/signup"
              linkClass="display:inline"
              textClass="text-sm"
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default Login;
